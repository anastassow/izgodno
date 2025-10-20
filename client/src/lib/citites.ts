import { cities } from "@/data/cities"

export const getCityName = (cityCode: number): string => {
    const city = cities.find(city => city.code === cityCode)
    return city?.city || ""
}