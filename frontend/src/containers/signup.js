import React, { useState } from "react"
import { Mutation, ApolloConsumer } from "react-apollo"
import gql from "graphql-tag"
import { navigate } from "@reach/router"

import { Form, Button, FormField } from "grommet"

const SIGN_UP_MUTATION = gql`
  mutation SIGN_UP_MUTATION(
    $name: String!
    $email: String!
    $password: String!
  ) {
    signup(name: $name, email: $email, password: $password) {
      token
      user {
        id
      }
    }
  }
`

export default function Signup() {
  const [values, setValues] = useState({ name: "", email: "", password: "" })

  const handleChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <ApolloConsumer>
      {client => (
        <Mutation mutation={SIGN_UP_MUTATION} variables={values}>
          {(signup, { loading, error }) => (
            <Form
              method="post"
              onSubmit={async e => {
                e.preventDefault()
                const res = await signup()
                client.writeData({ data: { isLoggedIn: true } })
                localStorage.setItem("token", res.data.signup.token)
                setValues({ name: "", email: "", password: "" })
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

                <FormField
                  type="text"
                  name="name"
                  label="Name"
                  value={values.name}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  disabled={loading}
                  label="Sign Up"
                  margin={{ vertical: "medium" }}
                />
              </fieldset>
            </Form>
          )}
        </Mutation>
      )}
    </ApolloConsumer>
  )
}
