import React from "react"

const ColorRow = ({ color, name, prefix }) => (
  <div>
    {prefix}
    {name}, {color}
  </div>
)

export default ColorRow
