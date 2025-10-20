import { Card, Grid, Stack, Typography } from "@mui/material"
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import ProductCard from "../ProductCard/ProductCard";

const StoreCard = async ({ store, products }: { store: "kaufland" | "lidl" | "billa", products: Product[] }) => {
    return (
        products && products.length > 0 &&
        <Card sx={{
            borderTop: "solid 4px",
            borderColor: "primary.main",
            p: { xs: 2, sm: 4 }
        }}>
            <Stack gap={3} mb={4} alignItems="start" direction={"row"} sx={{ borderBottom: "dashed 2px", borderColor: "border.main", pb: 4 }}>
                <Stack sx={{ bgcolor: "primary.main", width: "4rem", height: "4rem", p: 1.5, borderRadius: 1 }}>
                    <StorefrontOutlinedIcon sx={{ width: "100%", height: "100%", color: "primary.contrastText" }} />
                </Stack>

                <Stack>
                    <Typography variant="h5" fontWeight={600} color="primary" sx={{ textTransform: "capitalize" }}>{store}</Typography>
                    <Typography variant="body2" color="neutral">{products.length} продукта</Typography>
                </Stack>
            </Stack>

            <Grid container spacing={{ xs: 4, lg: 6 }}>
                {
                    products.map((product, i) => (
                        <ProductCard product={product} key={i} />
                    ))
                }
            </Grid>
        </Card>
    )
}

export default StoreCard