'use client'
import { Title } from "./Headline_styled"

const Headline = (props) => {
  return (
    <Title> {props.children} </Title>
  )
}

export default Headline