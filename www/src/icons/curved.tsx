/** @jsx jsx */
import { jsx } from "theme-ui"

type Props = {
  className?: string
}

const Curved = ({ className = `` }: Props) => (
  <svg
    width="1440"
    height="169"
    viewBox="0 0 1440 169"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    sx={{
      color: `backgroundThemes`,
      width: `100%`,
      height: `auto`,
    }}
  >
    <path
      d="M0 169V0C187.109 53.7769 446.643 87.0868 733.5 87.0868C1006.8 87.0868 1255.31 49.3663 1440 0V169H0Z"
      fill="currentColor"
    />
  </svg>
)

export default Curved
