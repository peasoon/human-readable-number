module.exports = function toReadable(number) {
  const singles = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
  ];
  const tens = [
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
  ];
  const dozens = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    'sixty',
    "seventy",
    "eighty",
    "ninety"
  ]

  const hundred = "hundred";
  const three = Math.floor(number / 100)
  const two = Math.floor( (number - three*100) /10)
  const one = Math.floor( (number - three*100 - two*10) /1)
  const temp = [three, two, one]
  const res = temp.map((item, index, array) => {
    if (index === 0) {
      return item === 0 ? '' :singles[item]+' hundred'
    }
    if (index === 1) {
      if(item > 1) {
        return dozens[item-2]
      } else {
        return item === 1 ? tens[array[index+1]] : ''
      }
    }
    if (index === 2) {
      if (array[index-1] !== 1 && item !== 0) {
        return singles[item]
      } else {
        return array[index-2] === 0 && array[index-1] === 0 && item === 0 ? 'zero' : ''
      }
    }
  })
  return res.join(' ').trim().replace(/\s\s/g, ' ')
};