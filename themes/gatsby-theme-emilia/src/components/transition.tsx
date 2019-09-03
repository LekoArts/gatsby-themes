import React from "react"
import { useTransition, animated } from "react-spring"

const Transition = props => {
  const transitions = useTransition([props], item => item.location.pathname, {
    from: { opacity: 0, transform: `translateY(60px)` },
    enter: { opacity: 1, transform: `translateY(0px)` },
    leave: { opacity: 0, transform: `translateY(30px)` },
  })

  return transitions.map(({ item, props: styles, key }) => (
    <animated.div key={key} style={{ ...styles, position: `relative` }}>
      {item.children}
    </animated.div>
  ))
}

export default Transition
