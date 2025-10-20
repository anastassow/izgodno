from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Dict
import openai
import os
from dotenv import load_dotenv
import json

load_dotenv()

app = FastAPI()

openai.api_key = os.getenv("OPENAPI_KEY")

class Product(BaseModel):
    id: int
    product_name: str


class RequestBody(BaseModel):
    total: Dict[str, int]
    page: int
    keyword: str
    items: Dict[str, List[Product]]
    page_size: int


@app.post("/filter/")
async def filter_items(body: RequestBody):
    keyword = body.keyword
    companies_items = body.items

    result = {}

    for company, items in companies_items.items():
        product_names = [item.product_name for item in items]

        prompt = f"""
The keyword is "{keyword}".
You are given a list of product names:
{product_names}

Return only the items that are actual types or kinds of {keyword} (e.g., food),
NOT tools, appliances, or unrelated products.
Answer ONLY with a JSON array of strings (product names).
For example: ["Хляб Добруджа", "Бял хляб с квас"]
"""

        try:
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[{"role": "user", "content": prompt}],
                temperature=0
            )
            result_text = response.choices[0].message.content.strip()
            filtered_names = json.loads(result_text)
        except Exception:
            filtered_names = []

        filtered_items = [
            {"id": item.id, "product_name": item.product_name}
            for item in items
            if item.product_name in filtered_names
        ]

        result[company] = filtered_items

    return {
        "keyword": keyword,
        "page": body.page,
        "page_size": body.page_size,
        "items": result
    }
