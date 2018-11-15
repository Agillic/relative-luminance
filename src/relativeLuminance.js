const getLightnessFromHexColor = ({color}) => {
  const rgb = parseInt(color.substring(1), 16)
  const [r, g, b] = [
    (rgb >> 16) & 0xff,
    (rgb >> 8) & 0xff,
    (rgb >> 0) & 0xff
  ]
  const luma = (0.2126 * r) + (0.7152 * g) + (0.0722 * b)
  return luma / 255
}

const isColorDark = ({color}) => (getLightnessFromHexColor({color}) < 0.4)

const isColorBright = ({color}) => !isColorDark({color})

export {getLightnessFromHexColor, isColorDark, isColorBright}
