import { Card, Chip, Grid, Stack, Typography } from "@mui/material"
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <Grid size={4}>
            <Card 
                sx={{ 
                    p: 2.5,
                    border: "solid 2px",
                    borderColor: "border.main",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: ".2s",
                    color: "title",
                    position: "relative",
                    "&:hover": {
                        borderColor: "primary.main",
                        color: "primary.main",
                        transform: "translateY(-0.5rem)"
                    }
                }}
                variant="outlined"
            >
                <Stack alignItems={"start"} gap={2} sx={{ pb: 2, mb: 3, borderBottom: "dashed 2px", borderColor: "border.main" }}>
                    <Typography variant="body1" mb={1} fontSize={18} color="inherit" fontWeight={600}>{product.name}</Typography>
                    <Chip icon={<StorefrontOutlinedIcon sx={{ width: "1.2rem", height: "1.2rem" }} />} variant="outlined" color="secondary" label={product.store} sx={{ p: 1 }}/>
                </Stack>

                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"end"} sx={{ flex: 1 }}>
                    {
                        product.promotionPrice > 0 ?
                        <Stack>
                            <Typography variant="body1" color="neutral" sx={{ textDecoration: "line-through" }}>{product.retailPrice}</Typography>
                            <Typography variant="h4" color="accent" fontWeight={600}>{product.promotionPrice}</Typography>
                            <Chip
                                icon={<TrendingDownIcon sx={{ width: "1.2rem", height: "1.2rem" }} />}
                                variant="filled"
                                color="accent"
                                label={`-${product.discount}%`}
                                sx={{
                                    bgcolor: "accent.main",
                                    color: "accent.contrastText", 
                                    fontWeight: 600, 
                                    px: 1,
                                    position: "absolute",
                                    top: "1rem",
                                    right: "1rem"
                                }}
                            />
                        </Stack>
                        :
                        <Typography variant="h4" color="primary" fontWeight={600}>{product.retailPrice}</Typography>
                    }

                    <Typography variant="h5" color="neutral" fontWeight={600}>лв.</Typography>
                </Stack>
            </Card>
        </Grid>
    )
}

export default ProductCard