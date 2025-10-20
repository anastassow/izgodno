import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { cities } from "@/data/cities";

const SearchForm = ({ search, city }: { search: string | undefined, city: string | undefined }) => {
    return (
        <form action={'/search'}>
            <Stack direction={{ md: "row" }} gap={{ xs: 2, md: 1 }} justifyContent={"center"} sx={{ p: 4, bgcolor: "bgcolor.main", borderRadius: 1, maxWidth: "48rem", mx: "auto" }}>
                <TextField
                    sx={{ flex: 1 }}
                    name="query"
                    defaultValue={search || ""}
                    placeholder="Въведете име на продукт (например: мляко, хляб, чай)"
                    slotProps={{
                        input: {
                            startAdornment: <SearchIcon sx={{ mr: 1 }} />,
                        },
                    }}
                />
                <FormControl variant="outlined" sx={{ width: { md: "10rem" } }}>
                    <InputLabel id="cityLabel">Град</InputLabel>
                    <Select labelId="cityLabel" label="Град" name="city" defaultValue={city || "702"}>
                        {
                            cities.map((city, i) => (
                                <MenuItem key={i} value={city.code}>{city.city}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">Търсене</Button>
            </Stack>
        </form>
    )
}

export default SearchForm