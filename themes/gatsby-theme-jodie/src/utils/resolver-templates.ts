import { IGridItem } from "./modify-grid"

// Only return nodes with the type "MdxPage"
export function onlyPages(data: IGridItem[]) {
  return data.filter((p) => p.__typename === `MdxPage`)
}

// Only return nodes with the type "MdxProject"
export function onlyProjects(data: IGridItem[]) {
  return data.filter((p) => p.__typename === `MdxProject`)
}

// Only return nodes that match the slugs defined in the given array of slugs
export function filterBySlug(data: IGridItem[], slugFilter: string[]) {
  return data.filter((d) => slugFilter.includes(d.slug))
}

function random(seed: number) {
  // eslint-disable-next-line no-param-reassign
  const x = Math.sin(seed++) * 10000
  return x - Math.floor(x)
}

export function shuffle(originalData: IGridItem[], seed = 1) {
  const data = [...originalData]
  let m = data.length
  let t
  let i

  while (m) {
    i = Math.floor(random(seed) * m--)
    t = data[m]
    data[m] = data[i]
    data[i] = t
    // eslint-disable-next-line no-param-reassign
    ++seed
  }

  return data
}
