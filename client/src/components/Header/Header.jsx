import { AppBar, Stack, Toolbar, Typography } from "@mui/material"
import NavLink from "../NavLink/NavLink"

const Header = () => {
    return (
        <AppBar position="sticky" elevation={0} sx={{ bgcolor: "primary.contrastText", color: "primary.main", px: { sm: 2, md: 4, lg: 8 } }}>
            <Toolbar>
                <Typography variant="h5">LOGO</Typography>

                <Stack flex={1} justifyContent={"end"} direction={"row"} gap={2}>
                    <NavLink label="Начало" route="/#hero" />
                    <NavLink label="За Нас" route="/#about" />
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Header