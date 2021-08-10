// Square code
console.group('Cuadrados');
const squareSide = 5;
console.log('Los lados del cuadrado miden: ' + squareSide + 'cm');

const squarePerimeter = squareSide * 4;
console.log('El perímetro del cuadrado es: ' + squarePerimeter + 'cm');

const squareArea = squareSide ** 2;
console.log('El área del cuadrado es: ' + squareArea + 'cm^2');
console.groupEnd();

// Triangle code
console.group('Triángulos');
const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;
const triangleHeight = 5.5;
const trianglePerimeter = triangleSide1 + triangleSide2 + triangleBase;
const triangleArea = (triangleBase * triangleHeight) / 2;
console.log(
    'Los lados del triángulo miden: '
    + triangleSide1 + 'cm, '
    + triangleSide2 + 'cm, '
    + triangleBase + 'cm'
);
console.log('La altura del triángulo es: ' + triangleHeight + 'cm');
console.log('El perímetro del triángulo es: ' + trianglePerimeter + 'cm');
console.log('El área del triángulo es: ' + triangleArea + 'cm^2');
console.groupEnd();

// Circle code
console.group('Círculos');
// Radius
const circleRadius = 4;
// Diameter
const circleDiameter = circleRadius * 2;
// PI
const pi = Math.PI;
// Circumference
const circlePerimeter = circleDiameter * pi;
// Area
const circleArea = (circleRadius ** 2) * pi;
console.log('El radio del círculo es: ' + circleRadius + 'cm');
console.log('El diámetro del círculo es: ' + circleDiameter + 'cm');
console.log('PI es: ' + pi);
console.log('El perímetro del círculo es: ' + circlePerimeter + 'cm');
console.log('El área del círculo es: ' + circleArea + 'cm^2');
console.groupEnd();
