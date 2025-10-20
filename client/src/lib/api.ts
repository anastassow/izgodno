"use server"

import { getRevalidateTime } from "./products"

// HARDCODE
export const getSearchResults = async (search: string, city: number, page: number): Promise<SearchResults> => {
    const secondsTillRevalidate = getRevalidateTime(3)

    const response = await fetch(`${process.env.SERVER_BASE_URL}/api/products/search?keyword=${search}&cityCode=${city}&page=${page}&size=3`, {
        headers: {
            'Content-Type': "application/json"
        },
        next: {
            revalidate: secondsTillRevalidate
        }
    })


    if(!response.ok) {
        const error = await response.json().catch(() => null)
        throw new Error(error?.error?.message || "Нещо се обърка. Опитайте отново.")
    }

    const products = await response.json() as SearchResults



    return products
}