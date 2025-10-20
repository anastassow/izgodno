'use client'

import { Pagination, PaginationItem } from "@mui/material"
import { usePathname, useSearchParams } from "next/navigation";

const SearchPagination = ({ count, page }: { count: number, page: number }) => {
    const searchParams = useSearchParams()
    const pathName = usePathname()

    return (
        <>
            <Pagination
                page={page + 1}
                size="large"
                sx={{ mx: "auto", display: count <= 1 ? "none" : "block" }}
                count={20} 
                color="primary"
                renderItem={(item) => (
                    <a href={`${pathName}?query=${searchParams.get("query")}&city=${searchParams.get("city")}&page=${(item.page || 1) - 1}`}>
                        <PaginationItem
                            {...item}
                        />
                    </a>
                )} 
            />
        </>
    )
}

export default SearchPagination