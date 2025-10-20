import { Typography } from "@mui/material"
import Link from "next/link"

const NavLink = ({ label, route }: { label: string, route: string }) => {
    return (
        <Link href={route} style={{ textDecoration: "none" }}>
            <Typography variant="body1" sx={{ textDecoration: "none", transition: ".2s", "&:hover": { color: "primary.main" } }} color="title" fontWeight={"bold"}>{label}</Typography>
        </Link>
    )
}

export default NavLink