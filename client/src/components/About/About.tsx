import { Grid, Stack, Typography } from "@mui/material"
import SectionWrapper from "../SectionWrapper/SectionWrapper"
import Link from "next/link"
import AboutCard from "../AboutCard/AboutCard"
import SearchIcon from '@mui/icons-material/Search';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const About = () => {
    return (
        <SectionWrapper props={{
            sx: {
                py: 10
            }
        }}>
            <Stack sx={{ textAlign: "center" }}>
                <Typography variant="h2" mb={1} fontWeight={600} color="title">За Izgodno</Typography>
                <Typography variant="body1" mb={8} fontSize={20} color="neutral">Izgodno.org е платформа, която обединява цените на хранителни продукти от различни магазини в България. Нашата мисия е да помогнем на потребителите да вземат информирани решения и да спестят пари при ежедневните си покупки.</Typography>

                <Grid mb={8} container spacing={4}>
                    <AboutCard
                        title="Лесно Търсене"
                        text="Намерете любимите си продукти с едно търсене в нашата обширна база данни"
                        Icon={SearchIcon}
                    />
                    <AboutCard
                        title="Най-ниски цени"
                        text="Сравнете цени от различни магазини и изберете най-изгодната оферта"
                        Icon={TrendingDownIcon}
                    />
                    <AboutCard
                        title="Спестете време"
                        text="Не е нужно да обикаляте магазини - всичко е на едно място"
                        Icon={ShoppingCartOutlinedIcon}
                    />
                </Grid>

                <Typography variant="body1" color="neutral" fontSize={20}>Данните се актуализират редовно от <Link href={'https://kolkostruva.bg/opendata'} target="blank" style={{ textDecoration: "none" }}><Typography color="primary" fontSize={20}>KolkoStruva.bg</Typography></Link></Typography>
            </Stack>
        </SectionWrapper>
    )
}

export default About