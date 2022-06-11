import decimalToRoman from './decimalToRoman';

const romanToDecimal = (input) => {
  const hashTable = {};
  hashTable['I'] = 1;
  hashTable['V'] = 5;
  hashTable['X'] = 10;
  hashTable['L'] = 50;
  hashTable['C'] = 100;
  hashTable['D'] = 500;
  hashTable['M'] = 1000;

  const inputUpperCase = input.toUpperCase();
  let decimal = 0;
  for (let i = 0; i < input.length; i++) {
    const num = hashTable[inputUpperCase[i]];
    const num2 = hashTable[inputUpperCase[i + 1]];
    if (num2 > num) {
      if (!(num2 === num * 5 || num2 === num * 10)) {
        return 'Error leyendo el número';
      }
      decimal -= num;
    } else {
      decimal += num;
    }
  }

  const result = decimalToRoman(decimal.toString());
  if (result === inputUpperCase) {
    return decimal.toString();
  } else {
    return 'Error leyendo el número';
  }
};

export default romanToDecimal;
