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
    const caclSquareSide = document.querySelector(".cacl-square__input-text");
    const caclSquareBtnPloshad = document.querySelector(".cacl-square__btn-ploshad");
    const caclSquareBtnPerimetr = document.querySelector(".cacl-square__btn-perimetr");
    const caclSquareResult = document.querySelector(".cacl-square__result");
    caclSquareBtnPloshad.onclick = function(e) {
        caclSquareResult.innerHTML = "Площадь всех сторон равяется: " + caclSquareSide.value * caclSquareSide.value;
        caclSquareResult.classList.add("_active-cacl-square");
    };
    caclSquareBtnPerimetr.onclick = function(e) {
        caclSquareResult.innerHTML = "Периметр равяется: " + 4 * caclSquareSide.value;
        caclSquareResult.classList.add("_active-cacl-square");
    };
    const caclRectangleSideWidth = document.querySelector(".cacl-rectangle__width");
    console.log(caclRectangleSideWidth);
    const caclRectangleSideHeight = document.querySelector(".cacl-rectangle__height");
    console.log(caclRectangleSideHeight);
    const caclRectangleBtnPloshad = document.querySelector(".cacl-rectangle__btn-ploshad");
    console.log(caclRectangleBtnPloshad);
    const caclRectangleBtnPerimetr = document.querySelector(".cacl-rectangle__btn-perimetr");
    console.log(caclRectangleBtnPerimetr);
    const caclRectangleResult = document.querySelector(".cacl-rectangle__result");
    console.log(caclRectangleResult);
    caclRectangleBtnPloshad.onclick = function() {
        caclRectangleResult.innerHTML = "Площадь всех сторон равяется: " + caclRectangleSideWidth.value * caclRectangleSideHeight.value;
        caclRectangleResult.classList.add("_active-cacl-rectangle");
    };
    caclRectangleBtnPerimetr.onclick = function() {
        caclRectangleResult.innerHTML = "Периметр равяется: " + 2 * (Number(caclRectangleSideWidth.value) + Number(caclRectangleSideHeight.value));
        caclRectangleResult.classList.add("_active-cacl-rectangle");
    };
    window["FLS"] = true;
    isWebp();
})();