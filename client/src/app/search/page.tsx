import SearchForm from "@/components/SearchForm/SearchForm"
import SectionWrapper from "@/components/SectionWrapper/SectionWrapper"
import { Box, Button, Pagination, Stack, Typography } from "@mui/material"
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import StoreCard from "@/components/StoreCard/StoreCard";
import Image from "next/image";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";
import { getSearchResults } from "@/lib/api";
import { getProductCount, getStoreCount } from "@/lib/products";
import { getCityName } from "@/lib/citites";
import SearchPagination from "@/components/SearchPagination/SearchPagination";

type SearchParams = {
    searchParams: { [key: string]: string | undefined }
}

export async function generateMetadata(
  { searchParams }: SearchParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { query, city } = await searchParams
 
  return {
    title: `${query} - продукти в ${city}`,
    description: "Разгледай резултатите от търсенето и сравни цени на хранителни продукти от различни супермаркети. Използвай интелигентно търсене с изкуствен интелект и филтрирай лесно по цена, категория или марка.",
    openGraph: {
        title: "Резултати от търсене – Izgodno",
        description: "Сравнявай хранителни продукти от различни супермаркети на едно място. Използвай AI филтри и ежедневно обновявани данни за най-точни резултати.",
        // url: "https://comparegrocer.com/search",
        siteName: "Izgodno",
        // images: [
        //     {
        //         url: "/og-image.jpg",
        //         width: 1200,
        //         height: 630,
        //         alt: "Резултати от търсене в CompareGrocer",
        //     },
        // ],
        locale: "bg_BG",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Izgodno – Резултати от търсене",
        description: "Открий и сравни цени на хранителни продукти от различни супермаркети. Интелигентно търсене, ежедневно обновяване и най-добрите оферти.",
        // images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
  }
}


const Page = async ({ searchParams }: SearchParams) => {
    const { query, city, page } = await searchParams

    console.log(query)
    console.log(city)
    console.log(page)
    const cityCode = Number(city)
    const pageNumber = Number(page)

    let products: SearchResults | null = null
    let error: string | null = null
    try {
        if(query && city) products = await getSearchResults(query, cityCode, pageNumber || 0)
        else throw new Error("Използвайте търсачката по-горе, за да намерите продукти.")
    } catch(err: any) {
        error = err?.message || "Нещо се обърка. Моля опитайте отново."
    }

    return (
        <>
            <Box sx={{
                position: "relative"
            }}>
                <Button startIcon={<ArrowBackIcon />} sx={{ position: "absolute", zIndex: 1, top: "2.4rem", left: { xs: "1.2rem", sm: "1.2rem", md: "3.2rem" }, color: "primary.contrastText" }}><Link href={'/'} style={{ textDecoration: "none", color: "inherit" }}>Към началото</Link></Button>

                <Image
                    src={"/images/hero-groceries.webp"}
                    alt="Grocerie Shopping"
                    fill
                    sizes="(min-width: 0) 100vw"
                    priority
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                />

                <Box sx={{
                    background: `linear-gradient(
                        45deg,
                        var(--mui-palette-primary-main),
                        var(--mui-palette-primary-main),
                        var(--mui-palette-secondary-main)
                    )`,
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    filter: "opacity(0.8)"
                }} />

                <SectionWrapper props={{
                    sx: {
                        py: 12
                    }
                }}>
                    <Stack sx={{ textAlign: "center", position: "relative", zIndex: 1, color: "primary.contrastText" }}>
                        <SearchForm search={query} city={city} />
                    </Stack>
                </SectionWrapper>
            </Box>

            <SectionWrapper maxWidth="xl" props={{
                disableGutters: true,
                sx: {
                    py: 12,
                    px: { xs: 2, md: 8 }
                }
            }}>
                {
                    error &&
                    <Stack gap={1} alignItems={"center"}>
                        <ErrorOutlineOutlinedIcon sx={{ color: "title.main", width: "3rem", height: "3rem" }} />
                        <Typography variant="h5" color="title">Нещо се обърка!</Typography>
                        <Typography variant="body1" color="neutral">{error}</Typography>
                    </Stack>
                }
                {
                    products &&
                    <Stack gap={8}>
                        <Stack gap={3}>
                            <Stack gap={1}>
                                <Typography variant="h4" color="title" fontWeight={600}>Резултати за "{query}" в {getCityName(cityCode)}</Typography>
                                <Typography variant="body1" color="neutral">Намерени {getProductCount(products)} продукта в {getStoreCount(products)} магазина.</Typography>
                            </Stack>

                            <Stack gap={8}>
                                <StoreCard products={products.items.Kaufland} store="kaufland" />
                                <StoreCard products={products.items.Billa} store="billa" />
                                <StoreCard products={products.items.Lidl} store="lidl" />
                            </Stack>
                        </Stack>

                        <SearchPagination count={products.page_size} />
                    </Stack>
                }
            </SectionWrapper>
        </>
    )
}

export default Page