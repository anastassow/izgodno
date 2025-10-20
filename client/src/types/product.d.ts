interface Product {
    id: number,
    place: string,
    product_name: string,
    retail_price: number,
    promotion_price: number,
    discount_percentage: number
}

interface SearchResults {
    keyword: string,
    page: number,
    page_size: number,

    total: {
        Kaufland: number,
        Billa: number,
        Lidl: number
    }

    items: {
        Lidl: Product[],
        Kaufland: Product[],
        Billa: Product[]
    }
}