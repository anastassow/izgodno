import Loader from "@/components/Loader/Loader"
import SectionWrapper from "@/components/SectionWrapper/SectionWrapper"
import { Stack } from "@mui/material"

const Loading = () => {
    return (
        <SectionWrapper props={{
            sx: {
                minHeight: "100vh"
            }
        }}>
            <Stack
                sx={{
                    width: "100%",
                    minHeight: "100vh"
                }}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Loader />
            </Stack>
        </SectionWrapper>
    )
}

export default Loading