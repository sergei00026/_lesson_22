(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const calcSquareSide = document.querySelector(".calc-square__input-text");
    const calcSquareBtnPloshad = document.querySelector(".calc-square__btn-ploshad");
    const calcSquareBtnPerimetr = document.querySelector(".calc-square__btn-perimetr");
    const calcSquareResult = document.querySelector(".calc-square__result");
    calcSquareBtnPloshad.onclick = function(e) {
        calcSquareResult.innerHTML = "Площадь всех сторон равяется: " + calcSquareSide.value * calcSquareSide.value;
        calcSquareResult.classList.add("_active-calc-square");
    };
    calcSquareBtnPerimetr.onclick = function(e) {
        calcSquareResult.innerHTML = "Периметр равяется: " + 4 * calcSquareSide.value;
        calcSquareResult.classList.add("_active-calc-square");
    };
    const calcRectangleSideWidth = document.querySelector(".calc-rectangle__width");
    const calcRectangleSideHeight = document.querySelector(".calc-rectangle__height");
    const calcRectangleBtnPloshad = document.querySelector(".calc-rectangle__btn-ploshad");
    const calcRectangleBtnPerimetr = document.querySelector(".calc-rectangle__btn-perimetr");
    const calcRectangleResult = document.querySelector(".calc-rectangle__result");
    calcRectangleBtnPloshad.onclick = function() {
        calcRectangleResult.innerHTML = "Площадь всех сторон равяется: " + calcRectangleSideWidth.value * calcRectangleSideHeight.value;
        calcRectangleResult.classList.add("_active-calc-rectangle");
    };
    calcRectangleBtnPerimetr.onclick = function() {
        calcRectangleResult.innerHTML = "Периметр равяется: " + 2 * (Number(calcRectangleSideWidth.value) + Number(calcRectangleSideHeight.value));
        calcRectangleResult.classList.add("_active-calc-rectangle");
    };
    const сaclCircleSide = document.querySelector(".calc-circle__side");
    сaclCircleSide.onclick = function() {
        this.select();
    };
    const calcCircleBtnPloshad = document.querySelector(".calc-circle__btn-ploshad");
    const calcCircleBtnPerimetr = document.querySelector(".calc-circle__btn-okruznost");
    const calcCircleResult = document.querySelector(".calc-circle__result");
    calcCircleBtnPloshad.onclick = function() {
        calcCircleResult.innerHTML = "Площадь круга равняется: " + (Math.PI * Math.pow(сaclCircleSide.value, 2)).toFixed(2);
        calcCircleResult.classList.add("_active-calc-circle");
    };
    calcCircleBtnPerimetr.onclick = function() {
        calcCircleResult.innerHTML = "Длина окружности равняется: " + (2 * Math.PI * сaclCircleSide.value).toFixed(2);
        calcCircleResult.classList.add("_active-calc-circle");
    };
    const сaclTriangleSideOne = document.querySelector(".calc-triangle__sideOne");
    const сaclTriangleSideTwo = document.querySelector(".calc-triangle__sideTwo");
    const сaclTriangleSideThree = document.querySelector(".calc-triangle__sideThree");
    const calcTriangleBtnPloshad = document.querySelector(".calc-triangle__btn-ploshad");
    const calcTriangleResult = document.querySelector(".calc-triangle__result");
    calcTriangleBtnPloshad.onclick = function() {
        const halfPerimetr = (Number(сaclTriangleSideOne.value) + Number(сaclTriangleSideTwo.value) + Number(сaclTriangleSideThree.value)) / 2;
        const calcTrianglefihish = Math.sqrt(halfPerimetr * (halfPerimetr - Number(сaclTriangleSideOne.value)) * (halfPerimetr - Number(сaclTriangleSideTwo.value)) * (halfPerimetr - Number(сaclTriangleSideThree.value))).toFixed(2);
        if (calcTrianglefihish >= 0) {
            calcTriangleResult.innerHTML = "Площадь треугольника равняется:" + calcTrianglefihish;
            calcTriangleResult.classList.add("_active-calc-circle");
        } else {
            calcTriangleResult.innerHTML = "Такого треугольника не существует";
            calcTriangleResult.classList.add("_active-calc-circle");
        }
    };
    const mathPifNumOne = document.querySelector(".math-pif__numOne");
    console.log(mathPifNumOne);
    const mathPifNumTwo = document.querySelector(".math-pif__numTwo");
    console.log(mathPifNumTwo);
    const mathPifNumThree = document.querySelector(".math-pif__numThree");
    console.log(mathPifNumThree);
    const mathPifTeorem = document.querySelector(".math-pif__btn-teorem");
    console.log(mathPifTeorem);
    const mathPifResult = document.querySelector(".math-pif__result");
    console.log(mathPifResult);
    mathPifTeorem.onclick = function() {
        let mathMassiv = [ mathPifNumOne.value, mathPifNumTwo.value, mathPifNumThree.value ];
        console.log(mathMassiv);
        function compareNumeric(a, b) {
            if (a > b) return -1;
            if (a == b) return 0;
            if (a < b) return 1;
        }
        mathMassiv.sort(compareNumeric);
        console.log(mathMassiv);
        const diskriminant = Math.pow(mathMassiv[1], 2) - 4 * mathMassiv[0] * mathMassiv[2];
        if (diskriminant < 0) {
            mathPifResult.innerHTML = "У уровнения нет действующих корней";
            mathPifResult.classList.add("_active-math-pif");
        } else {
            const mathPifResultOne = ((-1 * mathMassiv[1] + Math.sqrt(diskriminant)) / 2 * mathMassiv[0]).toFixed(2);
            const mathPifResultTwo = ((-1 * mathMassiv[1] - Math.sqrt(diskriminant)) / 2 * mathMassiv[0]).toFixed(2);
            mathPifResult.innerHTML = `Первый корень: ${mathPifResultOne}, Второй корень: ${mathPifResultTwo}`;
            mathPifResult.classList.add("_active-math-pif");
        }
    };
    const mathDelNum = document.querySelector(".math-del__num");
    console.log(mathDelNum);
    const mathDelList = document.querySelector(".math-del__btn");
    console.log(mathDelList);
    const mathDelResult = document.querySelector(".math-del__result");
    console.log(mathDelResult);
    let script_element = [];
    mathDelList.onclick = function() {
        console.log(mathDelNum.value);
        for (let n = 1; n <= Number(mathDelNum.value); n++) if (Number(mathDelNum.value) % n == 0) script_element.push(n);
        console.log(script_element);
        mathDelResult.innerHTML = `Число ${mathDelNum.value} делится на числа: ${script_element}`;
    };
    const textFocusText = document.querySelector(".text-focus_textarea-text");
    console.log(textFocusText);
    const textFocusBtn = document.querySelector(".text-focus__btn");
    console.log(textFocusBtn);
    const textFocusResult = document.querySelector(".text-focus__result");
    console.log(textFocusResult);
    textFocusText.addEventListener("focusout", (function() {
        let textarea = textFocusText.value.split(" ");
        textFocusResult.innerHTML = `В этом наборе букв и цифр ${textarea.length} слов(а)`;
        textFocusResult.classList.add("_active-text-focus");
    }));
    const gameNumNum = document.querySelector(".game-num__num");
    console.log(gameNumNum);
    const gameNumBtn = document.querySelector(".game-num__btn");
    console.log(gameNumBtn);
    const gameNumResult = document.querySelector(".game-num__result");
    console.log(gameNumResult);
    function random(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const gameNumRandom = random(1, 100);
    gameNumBtn.addEventListener("click", (function() {
        if (!isNaN(Number(gameNumNum.value)) && gameNumNum.value % 1 === 0) if (gameNumNum.value < 1 || gameNumNum.value > 100) {
            gameNumResult.innerHTML = `Введите чило от 1 до 100`;
            gameNumResult.classList.add("_active-game-num");
        } else if (Number(gameNumNum.value) === gameNumRandom) {
            gameNumResult.innerHTML = `Поздравляю ты отгадал число ${gameNumRandom}`;
            gameNumResult.classList.add("_active-game-num");
        } else if (Number(gameNumNum.value) > gameNumRandom) {
            gameNumResult.innerHTML = `Неугадил попробуй число меньше`;
            gameNumResult.classList.add("_active-game-num");
        } else {
            gameNumResult.innerHTML = `Неугадил попробуй число больше`;
            gameNumResult.classList.add("_active-game-num");
        } else {
            gameNumResult.innerHTML = `Введите целое чило`;
            gameNumResult.classList.add("_active-game-num");
        }
    }));
    console.log(gameNumRandom);
    window["FLS"] = true;
    isWebp();
})();