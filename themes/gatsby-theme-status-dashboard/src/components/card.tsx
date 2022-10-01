/** @jsx jsx */
/* eslint-disable camelcase */
import { jsx, Link } from "theme-ui"
import { Themed } from "@theme-ui/mdx"
import CircleCI from "../icons/circle-ci"
import GitHub from "../icons/github"

type Props = {
  name: string
  netlify_id?: string
  website?: string
  repo: string
  netlify?: boolean
  circleci?: boolean
  circleci_id?: string
}

const Card = ({ name, netlify, netlify_id, website, repo, circleci, circleci_id }: Props) => (
  <div sx={{ variant: `cards.dashboard` }}>
    <div data-name="card-top" sx={{ display: `flex`, justifyContent: `space-between`, alignItems: `center` }}>
      {website ? <Link href={website}>{name}</Link> : <Themed.a>{name}</Themed.a>}
      <div
        sx={{
          svg: { fill: `currentColor` },
          "a:last-of-type": {
            ml: 2,
          },
        }}
      >
        {circleci && (
          <Link
            aria-label={`View ${name} on CircleCI`}
            href={`https://app.circleci.com/pipelines/github/${circleci_id}`}
          >
            <CircleCI />
          </Link>
        )}
        <Link aria-label={`View ${name} source on GitHub`} href={repo}>
          <GitHub />
        </Link>
      </div>
    </div>
    <div sx={{ mt: 3, a: { mr: 2 } }}>
      {netlify && (
        <a href={`https://app.netlify.com/sites/${name}/deploys`}>
          <img
            alt={`Netlify Deploy status of ${name}`}
            src={`https://api.netlify.com/api/v1/badges/${netlify_id}/deploy-status`}
          />
        </a>
      )}
      {circleci && (
        <img alt={`CircleCI status of ${name}`} src={`https://circleci.com/gh/${circleci_id}.svg?style=svg`} />
      )}
    </div>
  </div>
)

export default Card
