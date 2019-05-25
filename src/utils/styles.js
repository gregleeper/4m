export const colors = {
  mainRed: `dustyrose`,
  mainGray: `gray`,
  mainWhite: `#fff`,
}

export const fontMain = `font-family: 'Tahoma', sans-serif `

export const transDefault = `transition: all 0.3s ease-in-out`

export const textSlanted = `font-family: 'Caveat', cursive;`

export const transFunction = (
  property = `all`,
  time = `0.5s`,
  type = `linear`
) => {
  return `transition: ${property} ${time} ${type}`
}

export const transObject = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const transition = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const border = ({
  width = "0.15rem",
  type = "solid",
  color = "white",
}) => {
  return `border: ${width} ${type} ${color}`
}

export const letterSpacing = ({ spacing = "0.1rem" }) => {
  return `letter-spacing: ${spacing}`
}
