import React, {useState, useEffect} from "react";

function MergeSort({inputArray, sortedArray, runSort, setRunSort, setUnsortedArray}) {
    useEffect(() => {
      if (inputArray && inputArray.length > 0) {
        const arrayCopy = [...inputArray];

        function algorithm(array, left, right) {
          if (left >= right) {
              return;
          }
          let middle = Math.floor(left + (right - left) / 2);
          algorithm(array, left, middle);
          algorithm(array, middle + 1, right);
          merge(array, left, middle, right);
        }

        function merge(array, left, middle, right) {
          let length1 = middle - left + 1;
          let length2 = right - middle; 

          let array1 = new Array(length1);
          let array2 = new Array(length2);

          for (let i = 0; i < length1; i++) {
              array1[i] = array[left + i];
          }
          for (let j = 0; j < length2; j++) {
              array2[j] = array[middle + 1 + j];
          }

          let array1Index = 0;
          let array2Index = 0;
          let arrayIndex = left; 
          while (array1Index < length1 && array2Index < length2) {
              if (array1[array1Index] <= array2[array2Index]) {
                  array[arrayIndex] = array1[array1Index];
                  array1Index++;
              }
              else {
                  array[arrayIndex] = array2[array2Index];
                  array2Index++;
              }
              arrayIndex++;
          }

          while (array1Index < length1) {
              array[arrayIndex] = array1[array1Index];
              arrayIndex++;
              array1Index++;
          }

          while (array2Index < length2) {
              array[arrayIndex] = array2[array2Index];
              arrayIndex++;
              array2Index++;
          }
        }
        algorithm(arrayCopy, 0, arrayCopy.length - 1);
        sortedArray(arrayCopy);
        
        let equal = true; 
        for (let i = 0; i < inputArray.length; i++) {
            if (inputArray[i] !== arrayCopy[i]) equal = false; 
        }
        if (!equal) setUnsortedArray(inputArray);
      }

      const state = false; 
      setRunSort(state);

    }, [runSort])

    return(  
        <></>
    );
}

export default MergeSort