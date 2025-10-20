'use client'

import { Pagination, PaginationItem } from "@mui/material"
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const SearchPagination = ({ count }: { count: number }) => {
    // const router = useRouter();
    const searchParams = useSearchParams()
    const pathName = usePathname()

    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        // Redirect to the same route but with updated `page` query param
        // console.log(router.getQuery);
        console.log(page)
    };

    return (
        <>
            <Pagination
                onChange={handleChange}
                size="large"
                sx={{ mx: "auto", display: count <= 1 ? "none" : "block" }}
                count={count} 
                color="primary"
                renderItem={(item) => (
                    <Link passHref href={`${pathName}?query=${searchParams.get("query")}&city=${searchParams.get("city")}&page=${item.page || 0}`}>
                        <PaginationItem
                            {...item}
                        />
                    </Link>
                )} 
            />
        </>
    )
}

export default SearchPagination