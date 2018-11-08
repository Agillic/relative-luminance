import {getLightnessFromHexColor, isColorBright, isColorDark} from '../src/relativeLuminance'

describe('RelativeLuminance unit tests', () => {
  it('Should return more than 70% lightness for bright yellow', () => expect(getLightnessFromHexColor({color: 'FFFF00'})).toBeGreaterThan(0.7))

  it('Should return less than 10% lightness for dark blue', () => expect(getLightnessFromHexColor({color: '0000FE'})).toBeLessThan(0.1))

  it('Should return true for bright color', () => expect(isColorBright({color: 'FFFF00'})).toEqual(true))

  it('Should return true for dark color', () => expect(isColorDark({color: '0000FE'})).toEqual(true))
})
