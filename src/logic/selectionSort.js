import { animateSwap } from '../logic/bubbleSort.js'
import '../styles/comparing.css'

async function highlightBox(index, boxes) {
    const box = boxes[index];
    box.classList.add('highlighted');
    await new Promise(resolve => setTimeout(resolve, 400));
}

async function removeHighlight(index, boxes) {
    const box = boxes[index];
    box.classList.remove('highlighted');
    await new Promise(resolve => setTimeout(resolve, 300));
}

async function showComparing(rightIndex, boxes) {
    const right = boxes[rightIndex];
    right.classList.add('comparing');
    await new Promise(resolve => setTimeout(resolve, 500));
    right.classList.remove('comparing');
    await new Promise(resolve => setTimeout(resolve, 200));
}

export default async function selectionSort(array, length, container) {
    const boxes = container.querySelectorAll('.array-box');

    for (let i = 0; i < length; i++) {
        let minimumIndex = i;
        await highlightBox(minimumIndex, boxes);

        for (let j = i + 1; j < length; j++) {
            await showComparing(j, boxes);
             if (array[j] < array[minimumIndex]) {
                await removeHighlight(minimumIndex, boxes);
                minimumIndex = j;
                await highlightBox(minimumIndex, boxes);
            }
        }
        await removeHighlight(minimumIndex, boxes);
        if (minimumIndex !== i) {
            await animateSwap(i, minimumIndex, boxes);
            let temp = array[i];
            array[i] = array[minimumIndex];
            array[minimumIndex] = temp;
        }
        boxes[i].classList.add('sorted');
        await new Promise(resolve => setTimeout(resolve, 300));
    }
    boxes[length - 1].classList.add('sorted');
    return array;
}