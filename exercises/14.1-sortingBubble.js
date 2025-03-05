const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  let loop = 0;

  while (loop <= array.length) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        const tempPosition = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tempPosition;
      }
    }

    loop++;
  }
}

bubbleSort(numbers);
console.log(numbers);

const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort2(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        //Swap the numbers
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

bubbleSort2(numbers2);
console.log(numbers2);
