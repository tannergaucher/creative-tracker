import React from "react"
import { Tabs, Tab } from "grommet"

import Login from "../containers/login"
import Signup from "../containers/signup"

export default function Auth() {
  return (
    <Tabs>
      <Tab title="Log In">
        <Login />
      </Tab>
      <Tab title="Sign Up">
        <Signup />
      </Tab>
    </Tabs>
  )
}
