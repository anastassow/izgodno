import { Breakpoint, Container, ContainerProps } from "@mui/material"
import React from "react"

const SectionWrapper = ({ maxWidth = "lg", props, children } : { maxWidth?: Breakpoint, props?: ContainerProps, children: React.ReactNode }) => {
    return (
        <Container maxWidth={maxWidth} {...props}>
            {children}
        </Container>
    )
}

export default SectionWrapper