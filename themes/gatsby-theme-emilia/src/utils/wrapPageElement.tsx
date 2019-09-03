import React from "react"
import Transition from "../components/transition"

const wrapPageElement = ({ element, props }: { element: any; props: any }) => (
  <Transition {...props}>{element}</Transition>
)

export default wrapPageElement
