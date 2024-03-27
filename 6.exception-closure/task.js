function parseCount(value) {
    let parseResult = Number.parseFloat(value)
    if (Number.isNaN(parseResult)) {
        throw new Error("Невалидное значение");
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
    constructor(a, b ,c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (this.a > this.b + this.c || this.b > this.a + this.c || this.c > this.a + this.b) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        let perimeter = this.a + this.b + this.c;
        return perimeter;
    }

    get area() {
        let halfPerimeter = (this.a + this.b + this.c) / 2;
        let S = Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c));
        return +S.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
           get area() { return "Ошибка! Треугольник не существует"},
           get perimeter() { return "Ошибка! Треугольник не существует"}
        };
    }
}