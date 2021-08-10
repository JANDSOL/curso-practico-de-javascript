// Square code
console.group('Cuadrados');

function squarePerimeter(side) {
    return side * 4;
}

function squareArea(side) {
    return side ** 2;
}
console.groupEnd();


// Triangle code
console.group('Triángulos');

function trianglePerimeter(side1, side2, base) {
    return side1 + side2 + base;
}

function triangleArea(base, height) {
    return (base * height) / 2;
}

console.groupEnd();
