import React, { useEffect} from "react";
import ArrayBox from "./ArrayBox";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function MergeSort({inputArray, sortedArray, runSort, setRunSort, setUnsortedArray, setSplits}) {

  useEffect(() => {
    setSplits([]);
    async function algorithm(array, left, right, depth) {
      if (left >= right) {
              return;
          }
      let middle = Math.floor(left + (right - left) / 2);
      const leftArray = array.slice(left, middle + 1).map((item, i) => ({
        ...item,
        position: left + i,
      }));
      const rightArray = array.slice(middle + 1, right + 1).map((item, i) => ({
        ...item,
        position: middle + 1 + i,
      }));

      setSplits(prev => [
        ...prev,
        {
          location: depth,
          left: { elements: leftArray},
          right: { elements: rightArray}
        }
      ]);
      await sleep(1000);

      await algorithm(array, left, middle, depth + 1);
      await algorithm(array, middle + 1, right, depth + 1);
      await merge(array, left, middle, right);
    }

    async function merge(array, left, middle, right) {
      let length1 = middle - left + 1;
      let length2 = right - middle; 

      let array1 = new Array(length1);
      let array2 = new Array(length2);

      for (let i = 0; i < length1; i++) {
        array1[i] = array[left + i].value;
      }
      for (let j = 0; j < length2; j++) {
        array2[j] = array[middle + 1 + j].value;
      }

      let array1Index = 0;
      let array2Index = 0;
      let arrayIndex = left; 
      while (array1Index < length1 && array2Index < length2) {
          if (array1[array1Index] <= array2[array2Index]) {
            array[arrayIndex].value = array1[array1Index];
            array1Index++;
          }
          else {
            array[arrayIndex].value = array2[array2Index];
            array2Index++;
          }
          arrayIndex++;
      }

      while (array1Index < length1) {
        array[arrayIndex].value = array1[array1Index];
        arrayIndex++;
        array1Index++;
      }

      while (array2Index < length2) {
        array[arrayIndex].value = array2[array2Index];
        arrayIndex++;
        array2Index++;
      }
    }

    async function run() {
      const arrayCopy = [...inputArray];
      await algorithm(arrayCopy, 0, arrayCopy.length - 1, 0);
    }
    run();

  }, [runSort])

  return(
    <></>
  );

}

export default MergeSort