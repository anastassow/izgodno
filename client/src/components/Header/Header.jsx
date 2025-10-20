import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material"
import NavLink from "../NavLink/NavLink"
import Image from "next/image"
import { ShoppingBasket } from 'lucide-react'

const Header = () => {
    return (
        <AppBar position="sticky" elevation={0} sx={{ bgcolor: "primary.contrastText", color: "primary.main", px: { sm: 2, md: 4, lg: 8 } }}>
            <Toolbar>
                <Stack direction={"row"} gap={1} alignItems={"center"}>
                    <Box sx={{ bgcolor: "primary.main", color: "primary.contrastText", borderRadius: 1, p: 1, width: "2.5rem", height: "2.5rem" }}>
                        <ShoppingBasket style={{ color: "inherit", width: "100%", height: "100%" }} />
                    </Box>
                    <Typography variant="body1" fontSize={20} sx={{ userSelect: "none" }}>Izgodno</Typography>
                </Stack>

                <Stack flex={1} justifyContent={"end"} direction={"row"} gap={2}>
                    <NavLink label="Начало" route="/#hero" />
                    <NavLink label="За Нас" route="/#about" />
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Header