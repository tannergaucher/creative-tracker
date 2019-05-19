import React from "react"
import { Box } from "grommet"

import Layout from "../components/layout"
import Auth from "../components/auth"

export default function login() {
  return (
    <Layout>
      <Box margin={{ vertical: "medium" }}>
        <Auth />
      </Box>
    </Layout>
  )
}
