// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    let sortArr = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 != 0) {
            matrix[i].reverse();
        }
        for (let j = 0; j < matrix[i].length; j++) {
            sortArr.push(matrix[i][j]);
        }
    }
    return sortArr;
};
