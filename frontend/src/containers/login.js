import React, { useState } from "react"
import { Mutation, ApolloConsumer } from "react-apollo"
import gql from "graphql-tag"
import { navigate } from "@reach/router"
import { Form, Button, FormField } from "grommet"

const LOG_IN_MUTATION = gql`
  mutation LOG_IN_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
      }
    }
  }
`

export default function Login() {
  const [values, setValues] = useState({ email: "", password: "" })

  const handleChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
      <ApolloConsumer>
        {client => (
          <Mutation mutation={LOG_IN_MUTATION} variables={values}>
            {(login, { loading, error }) => (
              <Form
                method="post"
                onSubmit={async e => {
                  e.preventDefault()
                  const res = await login()
                  client.writeData({ data: { isLoggedIn: true } })
                  localStorage.setItem("token", res.data.login.token)
                  navigate(`/`)
                }}
              >
                <fieldset disabled={loading} style={{ border: "none" }}>
                  {error && (
                    <p style={{ color: "var(--warning)" }}>{error.message}</p>
                  )}

                  <FormField
                    type="email"
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                  />

                  <FormField
                    type="password"
                    name="password"
                    label="Password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <Button
                    label="Log In"
                    type="submit"
                    margin={{ vertical: "medium" }}
                  />
                </fieldset>
              </Form>
            )}
          </Mutation>
        )}
      </ApolloConsumer>
    </div>
  )
}
