import React from "react"
import { Clock, Analytics, Database } from "grommet-icons"
import { Button, Box } from "grommet"
import { navigate } from "@reach/router"

export default function footer() {
  return (
    <Box direction="row" justify="around" elevation="small">
      <Button
        icon={<Clock color="var(--dark-3)" />}
        onClick={() => navigate(`/track`)}
      />
      <Button
        icon={<Database color="var(--dark-3)" />}
        onClick={() => navigate(`/record`)}
      />
      <Button
        icon={<Analytics color="var(--dark-3)" />}
        onClick={() => navigate(`/analyze`)}
      />
    </Box>
  )
}
