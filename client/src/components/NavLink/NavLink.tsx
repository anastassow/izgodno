import { Typography } from "@mui/material"
import Link from "next/link"

const NavLink = ({ label, route }: { label: string, route: string }) => {
    return (
        <Link href={route} style={{ textDecoration: "none", fontFamily: "inherit" }}>
            <Typography variant="body1" sx={{ textDecoration: "none", transition: ".2s", "&:hover": { color: "primary.main" } }} color="title" fontWeight={500}>{label}</Typography>
        </Link>
    )
}

export default NavLink