import { Themed } from "@theme-ui/mdx"
/** @jsx jsx */
import * as React from "react"
import useEmiliaConfig from "../hooks/use-emilia-config"

function SocialMediaList() {
	const { socialMedia } = useEmiliaConfig()

	return (
		<>
			{socialMedia.map(entry => (
				<Themed.a key={entry.title} href={entry.href}>
					{entry.title}
				</Themed.a>
			))}
		</>
	)
}

export default SocialMediaList
