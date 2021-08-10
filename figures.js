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


// Circle code
console.group('Círculos');

// Diameter
function circleDiameter(radius) {
    return radius * 2;
}

// PI
const pi = Math.PI;

// Circumference
function circlePerimeter(radius) {
    const diameter = circleDiameter(radius);
    return diameter * pi;
}

// Area
function circleArea(radius) {
    return (radius ** 2) * pi;
}

console.groupEnd();
