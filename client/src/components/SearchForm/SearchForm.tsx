import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material"
// HARDCODE
const SearchForm = ({ search, city }: { search: string | undefined, city: string | undefined }) => {
    return (
        <form action={'/search'}>
            <Stack direction={"row"} gap={1} justifyContent={"center"} sx={{ p: 4, bgcolor: "bgcolor.main", borderRadius: 1, maxWidth: "48rem", mx: "auto" }}>
                <TextField sx={{ flex: 1 }} name="query" defaultValue={search || ""} placeholder="Въведете име на продукт (например: мляко, хляб, чай)" />
                <FormControl sx={{ width: "10rem" }}>
                    <InputLabel>Град</InputLabel>
                    <Select name="city" defaultValue={city || ""}>
                        <MenuItem value="София">София</MenuItem>
                        <MenuItem value="Бургас">Бургас</MenuItem>
                    </Select>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">Търсене</Button>
            </Stack>
        </form>
    )
}

export default SearchForm