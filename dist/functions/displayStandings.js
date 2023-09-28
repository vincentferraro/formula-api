"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayStandings = void 0;
// This function sort the array DESCENDANT
async function displayStandings(array, position) {
    let arraySorted = array;
    let index = arraySorted.length - 1;
    for (let i = 0; i < index; i++) {
        if (arraySorted[i].points < arraySorted[i + 1].points) {
            let temp = arraySorted[i];
            arraySorted[i] = arraySorted[i + 1];
            arraySorted[i + 1] = temp;
            i = -1;
        }
    }
    if (position === true) {
        for (let i = 0; i < arraySorted.length; i++) {
            arraySorted[i].ranking = i + 1;
        }
    }
    return arraySorted;
}
exports.displayStandings = displayStandings;
