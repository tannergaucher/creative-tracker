import React from "react"
import { Heading, Box } from "grommet"
import { InProgress } from "grommet-icons"
import { Link } from "gatsby"

import SEO from "../components/seo"

const Test = ({ children }) => (
  <div
    style={{
      backgroundColor: "#3d344b",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L0 20z' fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
    }}
  >
    {children}
  </div>
)

const IndexPage = () => (
  <Test>
    <Box
      justify="center"
      align="center"
      style={{ minHeight: "100vh" }}
      animation="fadeIn"
    >
      <SEO title="Home" />
      <Box>
        <Box direction="row" align="center">
          <Heading
            level="1"
            color="papayawhip"
            margin={{ right: "medium" }}
            style={{ fontFamily: "var(--serif)" }}
          >
            Creative Tracker
          </Heading>
          <InProgress size="large" color="papayawhip" />
        </Box>
        <Link
          to="/about"
          style={{ color: "inherit", textDecorationColor: "papayawhip" }}
        >
          <Heading
            level="1"
            color="papayawhip"
            style={{ fontFamily: "var(--serif)" }}
          >
            About
          </Heading>
        </Link>
        <Box animation="pulse">
          <Link
            to="/track"
            style={{ color: "inherit", textDecorationColor: "papayawhip" }}
          >
            <Heading
              level="1"
              style={{ fontFamily: "var(--serif)" }}
              color="papayawhip"
            >
              Start
            </Heading>
          </Link>
        </Box>
      </Box>
    </Box>
  </Test>
)

export default IndexPage
