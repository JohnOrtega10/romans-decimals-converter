const decimalToRoman = (input) => {
  if (parseInt(input) > 3999) {
    return 'Error leyendo el número';
  }

  if (input.includes('.')) {
    return 'Error leyendo el número';
  }

  const hashTable = {};
  hashTable[1] = 'I';
  hashTable[5] = 'V';
  hashTable[10] = 'X';
  hashTable[50] = 'L';
  hashTable[100] = 'C';
  hashTable[500] = 'D';
  hashTable[1000] = 'M';

  const arrayDecimal = input.split('');
  let decimal = arrayDecimal.length - 1;
  let roman = '';
  for (let i = 0; i < arrayDecimal.length; i++) {
    let num = parseInt(arrayDecimal[i]);
    if (num >= 5 && num !== 9) {
      roman += hashTable[Math.pow(10, decimal) * 5];
      num -= 5;
    }

    if (num === 4) {
      roman += hashTable[Math.pow(10, decimal)];
      roman += hashTable[Math.pow(10, decimal) * 5];
    } else if (num === 9) {
      roman += hashTable[Math.pow(10, decimal)];
      roman += hashTable[Math.pow(10, decimal) * 10];
    } else {
      roman += hashTable[Math.pow(10, decimal)].repeat(num);
    }
    decimal--;
  }

  return roman;
};

export default decimalToRoman;
