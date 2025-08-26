module.exports = function toReadable(number) {
  let result = '';

  const zeroNine = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  const tenNineteen = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const twentyNinety = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  const hundreds = Math.floor(number / 100);
  const remained = number % 100;
  const dozens = Math.floor(remained / 10);
  const units = remained % 10;

  if (number === 0) return zeroNine[0];

  if (hundreds > 0) {
    result += `${zeroNine[hundreds]} hundred`;
  }

  if (remained > 0) {
    if (result) result += ' ';

    if (dozens === 1) {
      result += tenNineteen[remained - 10];
    } else {
      if (dozens > 1) result += twentyNinety[dozens];
      if (units > 0) {
        if (dozens > 0) result += ' ';
        result += zeroNine[units];
      }
    }
  }

  return result;
};
