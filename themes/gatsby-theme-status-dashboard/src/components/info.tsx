/** @jsx jsx */
import * as React from "react"
import { Flex } from "theme-ui"
import useCircleCi from "../hooks/use-circle-ci"
import useNetlify from "../hooks/use-netlify"
import Bug from "../icons/bug"
import Package from "../icons/package"

function Item({ input, icon }: { input: string, icon: React.ReactNode }) {
	return (
		<Flex sx={{ mr: [3, 3, 4], mb: [3, 3, 4], alignItems: `center` }}>
			{icon}
			<div
				sx={{
					variant: `cards.label`,
				}}
			>
				{input}
			</div>
		</Flex>
	)
}

function Info() {
	const { count: netlify } = useNetlify()
	const {
		me: { num_projects_followed: circleci },
	} = useCircleCi()

	return (
		<Flex
			sx={{
				flexDirection: [`column`, `column`, `row`],
				variant: `cards.icon`,
			}}
		>
			<Item input={`${netlify} Websites`} icon={<Package />} />
			<Item input={`${circleci} CircleCI Projects`} icon={<Bug />} />
		</Flex>
	)
}

export default Info
