import React, { useState } from "react"
import Layout from "../components/layout"

import {
  Stack,
  Box,
  RangeSelector,
  Text,
  Heading,
  RadioButtonGroup,
  TextArea,
} from "grommet"

export default function Rate() {
  return (
    <Layout>
      <Box align="center" justify="center" fill>
        <Box pad="medium">
          <Sleep />
          <RateDay />
          <Notes />
        </Box>
      </Box>
    </Layout>
  )
}

function Sleep() {
  const [values, setValues] = useState([3, 7])
  return (
    <Box margin={{ vertical: "medium" }}>
      <Heading level="4">Sleep</Heading>
      <Stack>
        <Box direction="row" justify="between">
          {[10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
            <Box key={value} pad="small" border={false}>
              <Text style={{ fontFamily: "monospace" }}>{value}</Text>
            </Box>
          ))}
        </Box>
        <RangeSelector
          direction="horizontal"
          invert={false}
          min={0}
          max={9}
          size="full"
          round="small"
          values={values}
          onChange={values => setValues(values)}
        />
      </Stack>
    </Box>
  )
}

function RateDay() {
  const [value, setValue] = useState("1")
  return (
    <Box margin={{ vertical: "medium" }}>
      <Heading level="4">How quality was today?</Heading>
      <RadioButtonGroup
        name="doc"
        options={["-2", "-1", " 0", " 1", " 2"]}
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    </Box>
  )
}

function Notes() {
  const [value, setValue] = useState()

  return (
    <Box margin={{ vertical: "medium" }}>
      <Heading level="4">
        Notable moments. Memories. What did I do. Where did my time go.
      </Heading>
      <TextArea
        placeholder=""
        value={value}
        onChange={event => setValue(event.target.value)}
        style={{ fontFamily: "var(--serif)", color: "var(--dark-1)" }}
      />
    </Box>
  )
}
