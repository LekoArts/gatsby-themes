/** @jsx jsx */
import { Box, Container, Flex, jsx, Styled } from "theme-ui"
import { useMediaQuery } from "react-responsive"
import ThreeDModel from "./3d-model"
import { Circle, Donut } from "./shapes"
import CircleGrid from "../icons/circle-grid"
import { down, up } from "../styles/animations"

const Hero = () => {
  const isBigScreen = useMediaQuery({ minWidth: `1100px` })

  return (
    <div>
      <Container as="section" data-name="hero" sx={{ my: [5, 6], mb: [6, 7] }}>
        <Flex sx={{ justifyContent: `space-between` }}>
          <Box>
            <Box sx={{ maxWidth: `490px` }}>
              <Styled.h1>Free & Open Source Gatsby Themes</Styled.h1>
              <Styled.p sx={{ color: `dark` }}>
                Get <span sx={{ fontWeight: `bold` }}>high-quality</span> and{` `}
                <span sx={{ fontWeight: `bold` }}>customizable</span> Gatsby themes to quickly bootstrap your website
              </Styled.p>
            </Box>
            <Box sx={{ mt: 5 }}>
              <Box sx={{ fontSize: 1, fontWeight: `semibold`, mb: 2 }}>Get monthly information about Gatsby Themes</Box>
              <a
                href="https://leko.io/newsletter-themes"
                rel="noopener noreferrer"
                target="_blank"
                sx={{ variant: `buttons.newsletter`, mt: 2, display: `inline-block` }}
              >
                Subscribe to the newsletter
              </a>
            </Box>
          </Box>
          {isBigScreen && <ThreeDModel />}
        </Flex>
      </Container>
      <div data-name="shapes">
        <Circle
          size="210px"
          color="orange"
          top="170px"
          left={[`-185px`, `-185px`, `-185px`, `-120px`]}
          sx={{ display: [`none`, `none`, `none`, `block`] }}
        />
        <Circle size="35px" color="blue" top={[`165px`, `130px`]} left={[`-5px`, `40px`]} />
        <Circle size="120px" color="pink" top="620px" right={[`-80px`, `50px`, `90px`]} />
        <Circle
          size="40px"
          color="green"
          top="750px"
          right={[`30px`, `210px`, `250px`]}
          sx={{ animation: `${up} 6s ease-in-out infinite alternate` }}
        />
        <Donut
          size="30px"
          color="green"
          width="5px"
          top="465px"
          left={[`-15px`, `-5px`, `-5px`, `20px`]}
          sx={{ display: [`none`, `none`, `none`, `block`] }}
        />
        <Donut
          size={[`130px`, `130px`, `230px`]}
          color="purple"
          width={[`20px`, `20px`, `50px`]}
          top={[`700px`, `668px`]}
          left={[`-75px`, `-75px`, `-102px`]}
          sx={{ animation: `${down} 10s ease-in-out infinite alternate` }}
        />
        <CircleGrid color="indigo" size={175} top="220px" right={[`-180px`, `-120px`, `-120px`, `-70px`]} />
      </div>
    </div>
  )
}

export default Hero
