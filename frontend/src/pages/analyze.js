import React from "react"
import Layout from "../components/layout"

import { Heading, Box, Tabs, Tab } from "grommet"

export default function Analyze() {
  return (
    <Layout>
      <Box justify="center" align="center" fill>
        <Box pad="medium" fill>
          <Tabs>
            <Tab title="Pace">
              <Text />
            </Tab>
            <Tab title="Charts">
              <Charts />
            </Tab>
            <Tab title="Days">
              <Days />
            </Tab>
          </Tabs>
        </Box>
      </Box>
    </Layout>
  )
}

function Text() {
  return (
    <Box style={{ fontFamily: "var(--serif)" }}>
      <Heading>Current Year:</Heading>
      <Heading>3 months: </Heading>
      <Heading>6 months: </Heading>
      <Heading>12 months: </Heading>
    </Box>
  )
}

function Charts() {
  return (
    <Box>
      charts
      {/*  */}
      {/*  */}
    </Box>
  )
}

function Days() {
  return (
    <Box>
      days
      {/*  */}
      {/*  */}
    </Box>
  )
}
