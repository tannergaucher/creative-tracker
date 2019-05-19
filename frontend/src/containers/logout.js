import React from "react"
import { ApolloConsumer } from "react-apollo"
import { Button } from "grommet"

export default function logout() {
  return (
    <ApolloConsumer>
      {client => (
        <Button
          label="Log Out"
          plain
          alignSelf="center"
          margin={{ bottom: "medium" }}
          onClick={() => {
            client.resetStore()
            localStorage.clear()
          }}
        />
      )}
    </ApolloConsumer>
  )
}
