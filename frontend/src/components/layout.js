import React from "react"
import PropTypes from "prop-types"
import { Grommet, Box } from "grommet"

import Header from "./header"
import Footer from "./Footer"
import "./layout.css"

const theme = {
  global: {
    // changes here will affect more than one component at a time
    colors: {
      brand: "black",
      // focus: "blue",
    },
  },
}

const Layout = ({ children }) => (
  <Grommet theme={theme}>
    <div
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </div>
  </Grommet>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
