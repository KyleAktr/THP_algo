function buildingsWithWestView(buildings) {
    let count = 0;
    if(buildings[buildings.length-1]) count++
    return count;
}


console.log(buildingsWithWestView([3, 7, 8, 3, 6, 1]));
// 3
console.log(buildingsWithWestView([1, 4, 5, 8]));
// 1