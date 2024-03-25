function getArrayParams(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  let min = Infinity,
      max = -Infinity,
      sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
     min = arr[i];
    }

     if (arr[i] > max) {
     max = arr[i];
    } 

    sum += arr[i];
  }

  let avg = +(sum / arr.length).toFixed(2);
  
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = arr.reduce(function(accumulator, item) {return accumulator + item}, 0);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  let min = Math.min(...arr),
      max = Math.max(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  let sumEvenElement = 0,
      sumOddElement = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
   }
   return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  let sumEvenElement = 0,
      countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    }
    if (arr[i] % 2 == 0) {
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
let maxWorkerResult = -Infinity;
for (const iterator of arrOfArr) {
  let resultNum = func(...iterator)
  if(resultNum > maxWorkerResult) {
    maxWorkerResult = resultNum;
  }
}
return maxWorkerResult;
}
