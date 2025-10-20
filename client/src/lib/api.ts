"use server"

import { getRevalidateTime } from "./products"

// HARDCODE
export const getSearchResults = async (search: string, city: number, page: number): Promise<SearchResults> => {
    const startTime = new Date()

    // let products: SearchResults
    // await new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("")
    //     }, 5000)
    // })

    // products = {
    //     keyword: "example",
    //     page: 1,
    //     page_size: 10,
    //     total: {
    //         Kaufland: 24,
    //         Billa: 18,
    //         Lidl: 21,
    //     },
    //     items: {
    //         Kaufland: [
    //         {
    //             id: 1,
    //             place: "Kaufland",
    //             product_name: "Organic Bananas (1kg)",
    //             retail_price: 2.49,
    //             promotion_price: 1.99,
    //             discount_percentage: 20,
    //         },
    //         {
    //             id: 2,
    //             place: "Kaufland",
    //             product_name: "Whole Milk (1L)",
    //             retail_price: 1.19,
    //             promotion_price: 0,
    //             discount_percentage: 0,
    //         },
    //         {
    //             id: 3,
    //             place: "Kaufland",
    //             product_name: "Chicken Breast Fillet (500g)",
    //             retail_price: 5.99,
    //             promotion_price: 0,
    //             discount_percentage: 0,
    //         },
    //         ],
    //         Billa: [
    //         {
    //             id: 1,
    //             place: "Billa",
    //             product_name: "Austrian Butter (250g)",
    //             retail_price: 3.29,
    //             promotion_price: 0,
    //             discount_percentage: 0,
    //         },
    //         {
    //             id: 2,
    //             place: "Billa",
    //             product_name: "Free-Range Eggs (10pcs)",
    //             retail_price: 4.49,
    //             promotion_price: 3.99,
    //             discount_percentage: 11,
    //         },
    //         {
    //             id: 3,
    //             place: "Billa",
    //             product_name: "Mineral Water (1.5L)",
    //             retail_price: 0.89,
    //             promotion_price: 0,
    //             discount_percentage: 0,
    //         },
    //         ],
    //         Lidl: [
    //         {
    //             id: 1,
    //             place: "Lidl",
    //             product_name: "Dark Chocolate (100g)",
    //             retail_price: 1.49,
    //             promotion_price: 0.99,
    //             discount_percentage: 34,
    //         },
    //         {
    //             id: 2,
    //             place: "Lidl",
    //             product_name: "Mozzarella Cheese (125g)",
    //             retail_price: 1.19,
    //             promotion_price: 0,
    //             discount_percentage: 0,
    //         },
    //         {
    //             id: 3,
    //             place: "Lidl",
    //             product_name: "Olive Oil Extra Virgin (1L)",
    //             retail_price: 6.49,
    //             promotion_price: 0,
    //             discount_percentage: 0,
    //         },
    //         ],
    //     },
    //     }

    const secondsTillRevalidate = getRevalidateTime(3)
    console.log(`Revalidation: ${secondsTillRevalidate}`)

    const response = await fetch(`${process.env.SERVER_BASE_URL}/api/products/search?keyword=${search}&cityCode=${city}&page=${page}&size=3`, {
        headers: {
            'Content-Type': "application/json"
        },
        next: {
            revalidate: secondsTillRevalidate
        }
    })

    // console.log("RESPONSE")
    // console.log(await response.json().catch(() => null))

    const endTime = new Date()
    console.log(`Getting search results took ${endTime.getTime() - startTime.getTime()}ms`)


    if(!response.ok) {
        const error = await response.json().catch(() => null)
        throw new Error(error?.error?.message || "Нещо се обърка. Опитайте отново.")
    }

    const products = await response.json() as SearchResults



    return products
}