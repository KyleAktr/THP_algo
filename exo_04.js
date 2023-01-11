function buildingsWithWestView(buildings) {
    let count = 0;
    let maxHeight = 0;
    for (let i = 0; i < buildings.length; i++) {
        if (buildings[i] > maxHeight) {
            maxHeight = buildings[i];
            count++;
        }
    }
    return count;
}



console.log(buildingsWithWestView([3, 7, 8, 3, 6, 1]));
// 3
console.log(buildingsWithWestView([1, 4, 5, 8]));
// 1