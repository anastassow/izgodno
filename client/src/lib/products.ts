export const getProductCount = (products: SearchResults): number => {
    return products.total.Billa + products.total.Kaufland + products.total.Lidl
}

export const getStoreCount = (products: SearchResults): number => {
    let sum = 0
    if(products.total.Billa > 0) sum++
    if(products.total.Kaufland > 0) sum++
    if(products.total.Lidl > 0) sum++

    return sum
}

export const getRevalidateTime = (bgTime: number): number => {
    const now = new Date();

    const nextRevalidateUTC = new Date(now)
    nextRevalidateUTC.setUTCHours(bgTime - 3, 0, 0, 0)

    if(now >= nextRevalidateUTC) {
        nextRevalidateUTC.setUTCDate(nextRevalidateUTC.getUTCDate() + 1)
    }

    // const sofiaNow = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Sofia" }));

    // const nextRevalidateSofia = new Date(sofiaNow);
    // nextRevalidateSofia.setHours(bgTime, 0, 0, 0);

    // if (sofiaNow >= nextRevalidateSofia) {
    //     nextRevalidateSofia.setDate(nextRevalidateSofia.getDate() + 1);
    // }

    // const nextRevalidateUTC = new Date(nextRevalidateSofia.toLocaleString("en-US", { timeZone: "UTC" }));

    return Math.floor((nextRevalidateUTC.getTime() - now.getTime()) / 1000);
}