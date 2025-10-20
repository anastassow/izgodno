import { Card, Grid, Stack, Typography } from "@mui/material"
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import ProductCard from "../ProductCard/ProductCard";

// HARDCODE
const StoreCard = ({ store }: { store: "kaufland" | "lidl" | "billa" }) => {
    const products: {
        kaufland: Product[];
        billa: Product[];
        lidl: Product[];
    } = {
        kaufland: [
            {
            name: "Organic Bananas (1kg)",
            store: "Kaufland",
            retailPrice: 2.49,
            promotionPrice: 1.99,
            discount: 20,
            },
            {
            name: "Whole Milk (1L)",
            store: "Kaufland",
            retailPrice: 1.19,
            promotionPrice: 0,
            discount: 0,
            },
            {
            name: "Chicken Breast Fillet (500g)",
            store: "Kaufland",
            retailPrice: 5.99,
            promotionPrice: 0,
            discount: 0,
            },
        ],
        billa: [
            {
            name: "Austrian Butter (250g)",
            store: "Billa",
            retailPrice: 3.29,
            promotionPrice: 0,
            discount: 0,
            },
            {
            name: "Free-Range Eggs (10pcs)",
            store: "Billa",
            retailPrice: 4.49,
            promotionPrice: 3.99,
            discount: 11,
            },
            {
            name: "Mineral Water (1.5L)",
            store: "Billa",
            retailPrice: 0.89,
            promotionPrice: 0,
            discount: 0,
            },
        ],
        lidl: [
            {
            name: "Dark Chocolate (100g)",
            store: "Lidl",
            retailPrice: 1.49,
            promotionPrice: 0.99,
            discount: 34,
            },
            {
            name: "Mozzarella Cheese (125g)",
            store: "Lidl",
            retailPrice: 1.19,
            promotionPrice: 0,
            discount: 0,
            },
            {
            name: "Olive Oil Extra Virgin (1L)",
            store: "Lidl",
            retailPrice: 6.49,
            promotionPrice: 0,
            discount: 0,
            },
        ],
    }

    return (
        products[store] && products[store].length > 0 &&
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
                    <Typography variant="body2" color="neutral">{products[store].length} продукта</Typography>
                </Stack>
            </Stack>

            <Grid container spacing={{ xs: 4, lg: 6 }}>
                {
                    products[store].map((product, i) => (
                        <ProductCard product={product} key={i} />
                    ))
                }
            </Grid>
        </Card>
    )
}

export default StoreCard