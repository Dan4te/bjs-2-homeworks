function parseCount(value) {
    let parseResult = Number.parseFloat(value);
    if (Number.isNaN(parseResult)) { // Статический метод Number.isNaN() проверяет переданное аргументом значение и возвращает true, если это значение NaN.
        throw new Error('Невалидное значение');
    } else {
        return parseResult;
    }
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a + b < c || a + c < b || b + c < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        } 
    }

    get perimeter() {
        return this.a + this.b + this.c;
    } 

    get area() {
        let halfPerimeter = this.perimeter / 2;
        let S =  Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c));
        return +S.toFixed(3); // "+" Преобразование строки обратно в число 
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area() { return "Ошибка! Треугольник не существует"},
            get perimeter() { return "Ошибка! Треугольник не существует"}
        }
    }
}