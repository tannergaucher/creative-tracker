import React from "react"
import Layout from "../components/layout"

import { Heading, Button, Box } from "grommet"

export default function track() {
  // const date = Date(Date.now())

  return (
    <Layout>
      <Box justify="center" align="center" round="medium" fill>
        <Heading style={{ fontSize: "70px" }}>00:00</Heading>
        <Button label="Start" margin={{ vertical: "medium" }} />
      </Box>
    </Layout>
  )
}
