/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import useNetlify from "../hooks/use-netlify"
import useCircleCi from "../hooks/use-circle-ci"
import replaceWords from "../utils/replace-words"
import CircleCI from "../icons/circle-ci"
import GitHub from "../icons/github"

const Grid = () => {
  const { count, netlify } = useNetlify()
  const { circleci, me } = useCircleCi()

  return (
    <div sx={{ display: `grid`, gridTemplateColumns: [`1fr`, `1fr 1fr`], gridGap: 4 }}>
      {netlify.map(site => {
        const GH_URL = replaceWords(site.build_settings.repo_url)
        const GH_POSTFIX = GH_URL.replace(`https://github.com/`, ``)

        const VCS_URLS = circleci.map(p => p.vcs_url)
        const isOnCircleCI = VCS_URLS.includes(GH_URL)

        return (
          <div key={site.netlify_id}>
            <div>
              <a href={site.url}>{site.name}</a>
              <div>
                {isOnCircleCI && (
                  <a href={`https://circleci.com/gh/${GH_POSTFIX}`}>
                    <CircleCI />
                  </a>
                )}
                <a href={site.build_settings.repo_url}>
                  <GitHub />
                </a>
              </div>
            </div>
            <div>
              <a href={`https://app.netlify.com/sites/${site.name}/deploys`}>
                <img
                  alt={`Netlify Deploy status of ${site.name}`}
                  src={`https://api.netlify.com/api/v1/badges/${site.netlify_id}/deploy-status`}
                />
              </a>
              {isOnCircleCI && (
                <img
                  alt={`CircleCI status of ${site.name}`}
                  src={`https://circleci.com/gh/${GH_POSTFIX}.svg?style=svg`}
                />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Grid
