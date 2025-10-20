import { Box, Stack, Typography } from "@mui/material"
import SectionWrapper from "../SectionWrapper/SectionWrapper"
import Image from "next/image"
import SearchForm from "../SearchForm/SearchForm"

const Hero = () => {
    return (
        <Box sx={{ position: "relative" }}>
            <Image
                src={"/images/hero-groceries.webp"}
                alt="Grocerie Shopping"
                fill
                sizes="(min-width: 0) 100vw"
                priority
                style={{ objectFit: "cover" }}
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
                    py: 12,
                    pt: 16,
                }
            }}>
                <Stack sx={{ textAlign: "center", position: "relative", zIndex: 1, color: "primary.contrastText" }}>
                    <Typography variant="h1" fontWeight={600} mb={3}>Сравни цени, спести пари</Typography>
                    <Typography component={"span"} variant="body1" mb={4} fontSize={24}>Открийте най-изгодните цени на хранителни продукти от различни магазини в България</Typography>

                    <SearchForm search="" city="София" />
                </Stack>
            </SectionWrapper>
        </Box>
    )
}

export default Hero