import { Coord } from "../types"

export const bodyCollideCheck = (myBody: Coord[]) => {
  const myHead = myBody[0]

  const checkRight = (body: Coord) => {
    if (myHead.y === body.y && myHead.x + 1 === body.x) {
      return true
    }
  }

  const bodyRight = checkBody(myBody, checkRight)

  const checkLeft = (body: Coord) => {
    if (myHead.y === body.y && myHead.x - 1 === body.x) {
      return true
    }
  }

  const bodyLeft = checkBody(myBody, checkLeft)

  const checkAbove = (body: Coord) => {
    if (myHead.x === body.x && myHead.y + 1 === body.y) {
      return true
    }
  }

  const bodyAbove = checkBody(myBody, checkAbove)

  const checkBelow = (body: Coord) => {
    if (myHead.x === body.x && myHead.y - 1 === body.y) {
      return true
    }
  }

  const bodyBelow = checkBody(myBody, checkBelow)

  return [bodyRight, bodyLeft, bodyAbove, bodyBelow]
}

const checkBody = (
  body: Coord[],
  check: (coord: Coord) => boolean | undefined
) => {
  return body.some((part, index) => {
    if (index === 0 || index === 1) return false
    return check(part)
  })
}
