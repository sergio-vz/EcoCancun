'use client';
import { Text } from "./Parragraph_styled";

const Parragraph = (props) => {
  return (
    <Text>{props.children}</Text>
  )
}

export default Parragraph