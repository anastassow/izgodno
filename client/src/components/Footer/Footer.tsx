import { Box, Typography } from "@mui/material"
import SectionWrapper from "../SectionWrapper/SectionWrapper"
import Link from "next/link"

const Footer = () => {
    return (
        <Box sx={{ bgcolor: "primary.contrastText" }}>
            <SectionWrapper props={{
                sx: { 
                    textAlign: "center",
                    py: 6,
                    borderTop: "solid 1px",
                    borderColor: "border.main"
                }
            }}>
                <Typography color="neutral" variant="body1">&copy; 2025 Izgodno. Всички права запазени.</Typography>
                <Typography color="neutral" variant="body2">Данни от <Link style={{ textDecoration: "none" }} href="https://kolkostruva.bg/opendata" target="blank"><Typography color="accent.main" component={"span"}>kolkostruva.bg OpenData</Typography></Link></Typography>
            </SectionWrapper>
        </Box>
    )
}

export default Footer