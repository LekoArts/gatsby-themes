import React from "react"

const Layout = ({ children, title, query }) => (
  <div>
    <div>sidebar</div>
    <div>
      <header>{title}</header>
      <div>{children}</div>
      <div>{query}</div>
      <footer>Ant Design ©2018 Created by Ant UED</footer>
    </div>
  </div>
)

export default Layout
