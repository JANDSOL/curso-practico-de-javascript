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

function triangleIsoscelesHeight(side1_2, base) {
    return Math.sqrt(side1_2 ** 2 - (base ** 2 / 4))
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


// Here I interact whit the HTML.
function calculateSquarePerimeter() {
    const input = document.getElementById('SquareInput');
    const value = parseFloat(input.value);
    if (!Number.isNaN(value)) {
        if (value > 0) {
            const perimeter = squarePerimeter(value);
            alert(perimeter.toFixed(2));
        } else {
            alert('Ingrese un número mayor a 0.');
        }
    } else {
        alert('Ingresa un valor para realizar el cálculo.');
    }
};

function calculateSquareArea() {
    const input = document.getElementById('SquareInput');
    const value = parseFloat(input.value);
    if (!Number.isNaN(value)) {
        if (value > 0) {
            var area = squareArea(value);
            alert(area.toFixed(2));
        } else {
            alert('Ingrese un número mayor a 0.');
        }
    } else {
        alert('Ingresa un valor para realizar el cálculo.');
    }
};

function calculateTrianglePerimeterArea(area) {
    var validationOf0 = [];
    var validationOfNan = [];
    const inputSide1 = document.getElementById('TriangleInput1');
    const inputSide2 = document.getElementById('TriangleInput2');
    const inputBase = document.getElementById('TriangleInputBase');
    const valueSide1 = parseFloat(inputSide1.value);
    const valueSide2 = parseFloat(inputSide2.value);
    const valueBase = parseFloat(inputBase.value);
    // Input validation.
    if (!Number.isNaN(valueSide1) && !Number.isNaN(valueSide2) && !Number.isNaN(valueBase)) {
        if (valueSide1 > 0 && valueSide2 > 0 && valueBase > 0) {
            if (!area) {  // Calculate perimeter
                var perimeter = trianglePerimeter(valueSide1, valueSide2, valueBase);
                alert(perimeter.toFixed(2));
            } else {  // Calculate area
                const height = (valueSide1 + valueSide2) / valueBase;
                var area = triangleArea(valueBase, height);
                alert(area.toFixed(2));
            }
        } else {
            if (valueSide1 <= 0) { validationOf0.push('El primer lado del triángulo necesita un número mayor a 0.'); }
            if (valueSide2 <= 0) { validationOf0.push('El segundo lado del triángulo necesita un número mayor a 0.'); }
            if (valueBase <= 0) { validationOf0.push('La base del triángulo necesita un número mayor a 0.'); }
            validationOf0.forEach(function (value) {
                alert(value);
            });
        }
    } else {
        if (Number.isNaN(valueSide1)) { validationOfNan.push('El primer lado del triángulo necesita un valor.'); }
        if (Number.isNaN(valueSide2)) { validationOfNan.push('El segundo lado del triángulo necesita un valor.'); }
        if (Number.isNaN(valueBase)) { validationOfNan.push('La base del triángulo necesita un valor.'); }
        validationOfNan.forEach(function (value) {
            alert(value);
        });
    }
};

function heightTriangleIsosceles() {
    var validationOf0 = [];
    var validationOfNan = [];
    const input1 = document.getElementById('TrgIsoscelesInput1');
    const input2 = document.getElementById('TrgIsoscelesInput2');
    const value1 = parseFloat(input1.value);
    const value2 = parseFloat(input2.value);
    if (!Number.isNaN(value1) && !Number.isNaN(value2)) {
        if (value1 > 0 && value2 > 0) {
            var height = triangleIsoscelesHeight(value1, value2);
            alert(height.toFixed(2));
        } else {
            if (value1 <= 0) { validationOf0.push('Los dos primeros lados del triángulo isósceles necesitan un número mayor a 0.'); }
            if (value2 <= 0) { validationOf0.push('La base del triángulo isósceles necesita un número mayor a 0.'); }
            validationOf0.forEach(function (value) { alert(value); });
        }
    } else {
        if (Number.isNaN(value1)) { validationOfNan.push('Los dos primeros lados del triángulo isósceles necesitan un valor.'); }
        if (Number.isNaN(value2)) { validationOfNan.push('La base del triángulo isósceles necesita un valor.'); }
        validationOfNan.forEach(function (value) { alert(value); });
    }
};
