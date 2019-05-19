import React, { useState } from "react"
import { Button, Layer, Box, Heading, Select } from "grommet"
import { UserSettings, Close } from "grommet-icons"
import { useQuery } from "react-apollo-hooks"
import { Link } from "gatsby"
import { navigate } from "@reach/router"

import { IS_LOGGED_IN } from "../apollo/graphql"
import Logout from "../containers/logout"

export default function Menu() {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button
        icon={<UserSettings color="var(--dark-3)" />}
        onClick={() => setShow(true)}
      />
      {show && (
        <Layer full="vertical" position="right">
          <Button
            icon={<Close color="var(--dark-1)" />}
            onClick={() => setShow(false)}
            alignSelf="end"
          />
          <MenuContent />
        </Layer>
      )}
    </>
  )
}

function MenuContent() {
  return (
    <Box pad="medium" justify="between" fill>
      <SelectNotificationTime />
      <SetDarkModeTime />
      <UpgradeMembership />
      <ToggleAuth />
    </Box>
  )
}

function ToggleAuth() {
  // prettier-ignore
  const { data: { isLoggedIn } } = useQuery(IS_LOGGED_IN)

  return <>{isLoggedIn ? <Logout /> : <Link to="/login">Log In</Link>}</>
}

function SelectNotificationTime() {
  const [value, setValue] = useState("10:00 PM")
  return (
    <Box>
      <Heading level="4">Daily Reminder</Heading>
      <Select
        options={[
          "5:00 PM",
          "6:00 PM",
          "7:00 PM",
          "8:00 PM",
          "9:00 PM",
          "10:00 PM",
          "11:00 PM",
          "12:00 PM",
          "NEVER",
        ]}
        value={value}
        onChange={({ option }) => setValue(option)}
      />
    </Box>
  )
}

function SetDarkModeTime() {
  const [value, setValue] = useState("6:00 PM")

  return (
    <Box>
      <Heading level="4">Switch to dark mode at</Heading>
      <Select
        options={[
          "5:00 PM",
          "6:00 PM",
          "7:00 PM",
          "8:00 PM",
          "9:00 PM",
          "10:00 PM",
          "11:00 PM",
          "12:00 PM",
          "NEVER",
          "ALWAYS",
        ]}
        value={value}
        onChange={({ option }) => setValue(option)}
      />
    </Box>
  )
}

function UpgradeMembership() {
  return (
    <Box>
      <Button
        label="Upgrade to Premium"
        primary
        onClick={() => navigate(`/checkout`)}
      />
    </Box>
  )
}
