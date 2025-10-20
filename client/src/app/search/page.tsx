import SearchForm from "@/components/SearchForm/SearchForm"
import SectionWrapper from "@/components/SectionWrapper/SectionWrapper"
import { Box, Button, Stack, Typography } from "@mui/material"
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import StoreCard from "@/components/StoreCard/StoreCard";
import Image from "next/image";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from "next/link";

// HARDCODE
const Page = async ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {
    const { query, city } = await searchParams
    
    const products = 9
    const stores = 3

    return (
        <>
            <Box sx={{
                position: "relative"
            }}>
                <Link href={'/'}><Button startIcon={<ArrowBackIcon />} sx={{ position: "absolute", zIndex: 1, top: "2.4rem", left: "3.2rem", color: "primary.contrastText" }}>Към началото</Button></Link>

                <Image
                    src={"/images/hero-groceries.webp"}
                    alt="Grocerie Shopping"
                    fill
                    sizes="(min-width: 0) 100vw"
                    priority
                    style={{ objectFit: "cover", objectPosition: "top left" }}
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
                    px: 8
                }
            }}>
                {
                    !query &&
                    <Stack gap={1} alignItems={"center"}>
                        <ErrorOutlineOutlinedIcon sx={{ color: "title.main", width: "3rem", height: "3rem" }} />
                        <Typography variant="h5" color="title">Въведете търсене</Typography>
                        <Typography variant="body1" color="neutral">Използвайте търсачката по-горе, за да намерите продукти.</Typography>
                    </Stack>
                }
                {
                    query &&
                    <Stack gap={3}>
                        <Stack gap={1}>
                            <Typography variant="h4" color="title" fontWeight={600}>Резултати за "{query}" в {city}</Typography>
                            <Typography variant="body1" color="neutral">Намерени {products} продукта {stores} в магазина.</Typography>
                        </Stack>

                        <Stack gap={8}>
                            <StoreCard store="kaufland" />
                            <StoreCard store="billa" />
                            <StoreCard store="lidl" />
                        </Stack>
                    </Stack>
                }
            </SectionWrapper>
        </>
    )
}

export default Page