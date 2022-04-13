/* eslint-disable no-unused-expressions */

const mergeArrByKey = <A, B>(arr1: A[], arr2: B[], key: string) => {
  const obj: Record<string, any> = {}

  arr1.forEach((item: any) => {
    obj[item[key]] = item
  })

  arr2.forEach((item: any) => {
    obj[item[key]] ? (obj[item[key]] = { ...obj[item[key]], ...item }) : (obj[item[key]] = item)
  })

  return Object.values(obj)
}

export default mergeArrByKey
