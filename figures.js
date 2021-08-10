// Square code
console.group('Cuadrados');
// const squareSide = 5;
// console.log('Los lados del cuadrado miden: ' + squareSide + 'cm');

function squarePerimeter(side) {
    return side * 4;
}
// squarePerimeter()
// console.log('El perímetro del cuadrado es: ' + squarePerimeter + 'cm');

function squareArea(side) {
    return side ** 2;
}
// squareArea()
// console.log('El área del cuadrado es: ' + squareArea + 'cm^2');
console.groupEnd();

// Triangle code
console.group('Triángulos');
// const triangleSide1 = 6;
// const triangleSide2 = 6;
// const triangleBase = 4;
// const triangleHeight = 5.5;
function trianglePerimeter(side1, side2, base) {
    return side1 + side2 + base;
}
function triangleArea(base, height) {
    return (base * height) / 2;
}
// console.log(
//     'Los lados del triángulo miden: '
//     + triangleSide1 + 'cm, '
//     + triangleSide2 + 'cm, '
//     + triangleBase + 'cm'
// );
// console.log('La altura del triángulo es: ' + triangleHeight + 'cm');
// console.log('El perímetro del triángulo es: ' + trianglePerimeter + 'cm');
// console.log('El área del triángulo es: ' + triangleArea + 'cm^2');
console.groupEnd();

// Circle code
console.group('Círculos');
// Radius
// const circleRadius = 4;
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
// console.log('El radio del círculo es: ' + circleRadius + 'cm');
// console.log('El diámetro del círculo es: ' + circleDiameter + 'cm');
// console.log('PI es: ' + pi);
// console.log('El perímetro del círculo es: ' + circlePerimeter + 'cm');
// console.log('El área del círculo es: ' + circleArea + 'cm^2');
console.groupEnd();
