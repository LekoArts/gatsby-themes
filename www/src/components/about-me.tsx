/** @jsx jsx */
import { Container, jsx, Themed, Box, Flex, useColorMode } from "theme-ui"
import { Circle, Donut } from "./shapes"
import { down, upWide } from "../styles/animations"
import Logo from "../icons/logo"
import CircleGrid from "../icons/circle-grid"

const AboutMe = () => {
  const [mode] = useColorMode()

  const isStrange = mode === `strangerThings`

  return (
    <section data-name="about-me" sx={{ position: `relative`, py: 6 }}>
      <Container>
        <div sx={{ maxWidth: `760px` }}>
          <Themed.h1 as="h2">About Me</Themed.h1>
          <Themed.p>
            Hi{` `}
            <span role="img" aria-label="Hand Wave">
              👋
            </span>
          </Themed.p>
          <Themed.p>
            I’m Lennart — also known as LekoArts — and I’m a self-taught and passionate graphic designer & front-end
            developer from Germany.
          </Themed.p>
          <Themed.p>
            You can find me on my <Themed.a href="https://www.lekoarts.de/en">homepage</Themed.a> where I blog about
            front-end development and design. I also like to create 3D art or other experiments which you can find on
            {` `}
            <Themed.a href="https://www.instagram.com/lekoarts.de">Instagram</Themed.a>.
          </Themed.p>
          <Themed.p>
            I started using Gatsby in its early stages and since then created a bunch of starters aimed at designers &
            photographers. I myself learned so much with free and open source content that I wanted to contribute back.
            Since the starters are a huge success it’s only logical to convert those to Gatsby themes! Of course more
            themes will follow in the future. My Gatsby themes are created with{` `}
            <Themed.a href="https://theme-ui.com/">Theme UI</Themed.a> — which makes them really customizable{` `}
            <span role="img" aria-label="Party Popper">
              🎉
            </span>
            .
          </Themed.p>
          <Themed.p>
            If you're interested in how I built this site you should definitely read my blogpost{` `}
            <Themed.a href="https://www.lekoarts.de/en/blog/how-i-used-theme-ui-to-build-my-gatsby-themes-library">
              "How I used Theme UI to build my Gatsby Themes library"
            </Themed.a>
            .
          </Themed.p>
        </div>
      </Container>
      <Circle size={[`200px`, `200px`, `300px`]} color="red" top="-75px" right="-75px" />
      <Circle
        size={[`25px`, `25px`, `50px`]}
        color="gray"
        top="-25px"
        right={[`175px`, `175px`, `275px`]}
        sx={{ zIndex: 10 }}
      />
      <Circle
        size={[`15px`, `15px`, `25px`]}
        color="pink"
        top="50px"
        right={[`145px`, `145px`, `375px`]}
        sx={{ animation: `${upWide} 20s ease-in-out infinite alternate` }}
      />
      <Logo
        sx={{
          width: [70, 70, 90],
          height: [70, 70, 90],
          top: `105px`,
          right: [`40px`, `40px`, `240px`],
          position: `absolute`,
          color: `white`,
        }}
      />
      <Circle
        size={[`100px`, `100px`, `120px`]}
        color="darkIndigo"
        top="90px"
        right={[`25px`, `25px`, `225px`]}
        sx={{ boxShadow: `0 0 0 30px rgba(90, 103, 216, 0.15)` }}
      />
      <Donut color="yellow" size="200px" top="-100px" width="30px" left="-50px" sx={{ opacity: 0.5 }} />
      <Donut
        color="blue"
        size="50px"
        top="-25px"
        width="8px"
        left="180px"
        sx={{ opacity: 0.5, animation: `${down} 10s ease-in-out infinite alternate` }}
      />
      <Container sx={{ mt: [6, 7], position: `relative` }}>
        <Box
          sx={{
            borderRadius: `xl`,
            variant: isStrange ? `gradients.strangerThings` : `gradients.indigo`,
            p: [4, 4, 5],
            color: `white`,
            boxShadow: (t: { colors: { [key: string]: any[] } }) => `0px 20px 25px ${t.colors.shadow}`,
          }}
        >
          <h3
            sx={{
              fontWeight: `bold`,
              fontSize: [2, 3, 4],
              textAlign: `center`,
              mb: 4,
              mt: 0,
              textShadow: `0 1px 1px rgba(0, 0, 0, 0.2)`,
            }}
          >
            Do you want to support me?
          </h3>
          <Themed.p sx={{ textShadow: `0 1px 1px rgba(0, 0, 0, 0.2)` }}>
            I'm grateful for every form of support: Share this website with your friends & colleagues, buy me a tea
            ('cause I don't drink coffee), or consider supporting me on Patreon or GitHub Sponsors. The latter will
            allow me to allocate more time to maintaining these themes. Thanks for using my themes!{` `}
            <span role="img" aria-label="Smile">
              😊
            </span>
          </Themed.p>
          <Flex
            sx={{
              justifyContent: `space-evenly`,
              mt: 4,
              flexWrap: `wrap`,
              a: { mt: 3, textAlign: `center` },
              div: { mt: 3 },
              flexDirection: [`column`, `row`],
            }}
          >
            <a href="https://github.com/sponsors/LekoArts" sx={{ variant: `buttons.white` }}>
              GitHub Sponsors
            </a>
            <a href="https://www.patreon.com/lekoarts" sx={{ variant: `buttons.white` }}>
              Patreon
            </a>
            <a href="https://ko-fi.com/N4N0W91I" sx={{ variant: `buttons.white` }}>
              Buy me a tea
            </a>
          </Flex>
        </Box>
        <Circle
          color="orange"
          size={[`60px`, `80px`, `130px`]}
          top={[`0px`, `-30px`, `-60px`]}
          right={[`20px`, `70px`]}
          sx={{ zIndex: 10 }}
        />
        <Circle
          color="green"
          size={[`20px`, `25px`, `30px`]}
          top={[`-10px`, `-40px`, `-80px`]}
          right={[`100px`, `170px`, `220px`]}
          sx={{ zIndex: 10 }}
        />
        <Donut color="pink" size={[`300px`, `340px`]} top="150px" width="40px" right="-160px" sx={{ opacity: 0.35 }} />
        <CircleGrid color="blue" size={260} top="-20px" left={[`-180px`, `-120px`, `-120px`]} />
      </Container>
    </section>
  )
}

export default AboutMe
