/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import CircleCI from "../icons/circle-ci"
import GitHub from "../icons/github"

type Props = {
  site: {
    netlify_id: string
    url: string
    name: string
    build_settings: {
      repo_url: string
    }
  }
  isOnCircleCI: boolean
  GH_POSTFIX: string
}

const Card = ({ site, isOnCircleCI, GH_POSTFIX }: Props) => (
  <div key={site.netlify_id} sx={{ variant: `cards.dashboard` }}>
    <div data-name="card-top" sx={{ display: `flex`, justifyContent: `space-between`, alignItems: `center` }}>
      <Styled.a href={site.url}>{site.name}</Styled.a>
      <div
        sx={{
          svg: { fill: `currentColor` },
          "a:last-of-type": {
            ml: 2,
          },
        }}
      >
        {isOnCircleCI && (
          <Styled.a aria-label={`View ${site.name} on CircleCI`} href={`https://circleci.com/gh/${GH_POSTFIX}`}>
            <CircleCI />
          </Styled.a>
        )}
        <Styled.a aria-label={`View ${site.name} source on GitHub`} href={site.build_settings.repo_url}>
          <GitHub />
        </Styled.a>
      </div>
    </div>
    <div sx={{ mt: 3, a: { mr: 2 } }}>
      <a href={`https://app.netlify.com/sites/${site.name}/deploys`}>
        <img
          alt={`Netlify Deploy status of ${site.name}`}
          src={`https://api.netlify.com/api/v1/badges/${site.netlify_id}/deploy-status`}
        />
      </a>
      {isOnCircleCI && (
        <img alt={`CircleCI status of ${site.name}`} src={`https://circleci.com/gh/${GH_POSTFIX}.svg?style=svg`} />
      )}
    </div>
  </div>
)

export default Card
