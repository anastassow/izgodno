import { Box, Card, Grid, Stack, SvgIconProps, Typography } from "@mui/material"
import { FC } from "react"

const AboutCard = ({ title, text, Icon }: { title: string, text: string, Icon: FC<SvgIconProps> }) => {
    return (
        <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ p: 4, height: "100%", width: "100%", transition: ".2s", "&:hover": { transform: "translateY(-0.5rem)" } }} component={Stack} alignItems={"center"}>
                <Stack justifyContent={"center"} alignItems={"center"} mb={2} sx={{
                    p: 2,
                    bgcolor: "primary.light",
                    borderRadius: "100%"
                }}>
                    <Icon sx={{ width: "2rem", height: "2rem", color: "primary.main" }} />
                </Stack>
                <Typography variant="body1" color="title" fontSize={20} mb={1}>{title}</Typography>
                <Typography variant="body1" color="neutral">{text}</Typography>
            </Card>
        </Grid>
    )
}

export default AboutCard