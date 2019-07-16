/** @jsx jsx */
import React from "react"
import { Box, Container, Flex, jsx, Styled } from "theme-ui"
import ThreeDModel from "./3d-model"
import { Circle, Donut } from "./shapes"

const Hero = () => (
  <React.Fragment>
    <Container sx={{ my: 6 }}>
      <Flex sx={{ justifyContent: `space-between` }}>
        <Box>
          <Box sx={{ maxWidth: `490px` }}>
            <Styled.h1>Free & Open-Source Gatsby Themes</Styled.h1>
            <Styled.p sx={{ color: `dark` }}>
              Get <span sx={{ fontWeight: `bold` }}>high-quality</span> and{` `}
              <span sx={{ fontWeight: `bold` }}>customizable</span> Gatsby themes to quickly bootstrap your website
            </Styled.p>
          </Box>
          <Flex sx={{ mt: 5, flexDirection: `column` }}>
            <Box sx={{ fontSize: 1, fontWeight: `semibold`, mb: 2 }}>Get notified whenever I publish something new</Box>
            <Box>
              <input type="text" sx={{ variant: `inputs.primary` }} placeholder="Enter your email" />
              {` `}
              <button type="button" sx={{ variant: `buttons.newsletter`, ml: 2 }}>
                Subscribe
              </button>
            </Box>
          </Flex>
        </Box>
        <ThreeDModel />
      </Flex>
    </Container>
    <Circle size="210px" color="orange" top="170px" left="-120px" />
    <Circle size="35px" color="blue" top="130px" left="40px" />
    <Donut size="30px" color="green" width="5px" top="465px" left="20px" />
  </React.Fragment>
)

export default Hero
