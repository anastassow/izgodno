from fastapi import FastAPI
from pydantic import BaseModel
import openai
import os
from dotenv import load_dotenv

load_dotenv()


app = FastAPI() 

openai.api_key = os.getenv("OPENAPI_KEY")

class Item(BaseModel):
    id: str
    name: str

class RequestBody(BaseModel):
    keyword: str
    items: list[Item]

@app.post("/filter/")
async def filter_items(body: RequestBody):
    keyword = body.keyword
    items = body.items

    item_list = [item.name for item in items]
    prompt = f"""
The keyword is "{keyword}".
You are given a list of items:
{item_list}

Return all items that are actual types or kinds of {keyword} (food), not tools, appliances, or things used for {keyword}.
Answer ONLY with a JSON array of strings, like ["bread white", "bread brown"].
Do not include unrelated items.
"""

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        temperature=0
    )

    result_text = response.choices[0].message.content.strip()

    import json
    try:
        filtered_names = json.loads(result_text)
    except Exception:
        filtered_names = []

    filtered_items = [item for item in items if item.name in filtered_names]

    return {"keyword": keyword, "filtered": filtered_items}
