/** @jsx jsx */
import { jsx } from "theme-ui"
import useNetlify from "../hooks/use-netlify"
import useCircleCi from "../hooks/use-circle-ci"
import replaceWords from "../utils/replace-words"
import mergeArrByKey from "../utils/merge-arrays-by-key"
import Card from "./card"

const Grid = () => {
  const { netlify } = useNetlify()
  const { circleci } = useCircleCi()

  const normalizedNetlifyArr = netlify.map((e) => ({
    name: e.name,
    netlify_id: e.netlify_id,
    website: e.url,
    repo: replaceWords(e.build_settings.repo_url),
    netlify: true,
  }))
  const normalizedCircleArr = circleci.map((e) => ({
    name: e.reponame,
    repo: replaceWords(e.vcs_url),
    circleci: true,
    circleci_id: `${e.username}/${e.reponame}`,
  }))
  const merged = mergeArrByKey(normalizedNetlifyArr, normalizedCircleArr, `repo`)

  return (
    <div sx={{ variant: `grids.dashboard` }}>
      {merged.map((e) => (
        <Card
          key={e.repo}
          name={e.name}
          netlify_id={e.netlify_id}
          website={e.website}
          repo={e.repo}
          netlify={e.netlify}
          circleci={e.circleci}
          circleci_id={e.circleci_id}
        />
      ))}
    </div>
  )
}

export default Grid
