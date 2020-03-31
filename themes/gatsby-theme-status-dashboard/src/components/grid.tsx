/** @jsx jsx */
import { jsx } from "theme-ui"
import useNetlify from "../hooks/use-netlify"
import useCircleCi from "../hooks/use-circle-ci"
import replaceWords from "../utils/replace-words"
import Card from "./card"

const Grid = () => {
  const { netlify } = useNetlify()
  const { circleci } = useCircleCi()

  return (
    <div sx={{ variant: `grids.dashboard` }}>
      {netlify.map((site) => {
        const GH_URL = replaceWords(site.build_settings.repo_url)
        const GH_POSTFIX = GH_URL.replace(`https://github.com/`, ``)

        const VCS_URLS = circleci.map((p) => p.vcs_url)
        const isOnCircleCI = VCS_URLS.includes(GH_URL)

        return <Card key={site.name} site={site} GH_POSTFIX={GH_POSTFIX} isOnCircleCI={isOnCircleCI} />
      })}
    </div>
  )
}

export default Grid
