import { Link } from "gatsby"
import React from "react"
import { Box, Heading } from "grommet"

import { useSiteMetadata } from "../hooks/use-site-metadata"

import Menu from "../components/menu"

export default function Header() {
  const { title } = useSiteMetadata()

  return (
    <Box as="header" justify="between" direction="row" align="center">
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Heading
          level="4"
          margin={{ vertical: "none", left: "medium" }}
          style={{ fontWeight: "100", fontFamily: "var(--serif)" }}
          color="dark-1"
        >
          {title}
        </Heading>
      </Link>
      <Menu />
    </Box>
  )
}
