/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navContactContent": () => (/* binding */ navContactContent),
/* harmony export */   "mainContactContent": () => (/* binding */ mainContactContent)
/* harmony export */ });
var navContactContent = "\n  <a id=\"home\" href=\"#\">Home</a>\n  <a id=\"menu\" href=\"#\">Menu</a>\n  <a class=\"active\" id=\"contact\" href=\"#\">Contact</a>";
var mainContactContent = "<form action=\"\">\n      <legend>Contact Us</legend>\n      <label for=\"name\">Name</label>\n<input type=\"text\" name=\"name\" id=\"name\" placeholder=\"your Name\">\n      <label for=\"email\">Email</label>\n<input type=\"email\" name=\"email\" id=\"email\" placeholder=\"example.gmail.com\">\n<label for=\"description\">Message</label>\n<textarea name=\"description\" id=\"description\" cols=\"30\" rows=\"10\"></textarea>\n\n<input type=\"submit\" class=\"btn\" value=\"Submit\">\n      \n    </form>";

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navHomeContent": () => (/* binding */ navHomeContent),
/* harmony export */   "mainHomeContent": () => (/* binding */ mainHomeContent)
/* harmony export */ });
var navHomeContent = "\n  <a class=\"active\" id=\"home\" href=\"#\">Home</a>\n  <a id=\"menu\" href=\"#\">Menu</a>\n  <a id=\"contact\" href=\"#\">Contact</a>";
var mainHomeContent = "<p class=\"main-para\">Welcome Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae dicta maiores nihil possimus, voluptates minima placeat repudiandae corrupti dolores nobis ducimus deleniti sequi aspernatur ipsam! Quas illo harum, consequuntur, totam quod officiis culpa quisquam ea quidem, est amet recusandae beatae inventore! Maiores consequuntur nihil illum ipsum voluptates omnis quibusdam magnam.</p>\n<p class=\"main-para\">Address: <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione assumenda eaque nobis necessitatibus animi aliquid, non quae omnis quasi doloremque cumque aperiam, quaerat quis delectus culpa cupiditate dolor distinctio obcaecati.</i></p>\n<p class=\"main-para\">Phone: 0123 456 789</p>";

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navMenuContent": () => (/* binding */ navMenuContent),
/* harmony export */   "mainMenuContent": () => (/* binding */ mainMenuContent)
/* harmony export */ });
var navMenuContent = "\n  <a id=\"home\" href=\"#\">Home</a>\n  <a class=\"active\" id=\"menu\" href=\"#\">Menu</a>\n  <a id=\"contact\" href=\"#\">Contact</a>";
var mainMenuContent = "<div id=\"menu-container\">\n    <div>\n      <img src=\"./images/barbecue.jpg\" alt=\"barbecue\">\n      <p class=\"description\">Barbecue Lorem, ipsum dolor.</p>\n    </div>\n\n        <div>\n      <img src=\"./images/food.jpg\" alt=\"food\">\n      <p class=\"description\">Meat Lorem, ipsum dolor.</p>\n    </div>\n\n        <div>\n      <img src=\"./images/fried-chicken.jpg\" alt=\"fried-chicken\">\n      <p class=\"description\">Chicken Lorem, ipsum dolor.</p>\n    </div>\n\n        <div>\n      <img src=\"./images/hamburger.jpg\" alt=\"hamburger\">\n      <p class=\"description\">Hambourger Lorem, ipsum dolor.</p>\n    </div>\n\n        <div>\n      <img src=\"./images/pizza1.jpg\" alt=\"pizza1\">\n      <p class=\"description\">Pizza Lorem, ipsum dolor.</p>\n    </div>\n\n        <div>\n      <img src=\"./images/pizza2.jpg\" alt=\"pizza2\">\n      <p class=\"description\">Pizza nLorem, ipsum dolor.</p>\n    </div>\n\n        <div>\n      <img src=\"./images/salad.jpg\" alt=\"salad\">\n      <p class=\"description\">Salad Lorem, ipsum dolor.</p>\n    </div>\n\n        <div>\n      <img src=\"./images/spaghetti.jpg\" alt=\"spaghetti\">\n      <p class=\"description\">Spaghetti Lorem, ipsum dolor.</p>\n    </div>\n  </div>";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");



var body = document.getElementsByTagName("body")[0];
var nav = document.createElement("nav");
var main = document.createElement("main");
var footer = document.createElement("footer");
footer.innerHTML = "<p>&copy; 2021</p>";
body.prepend(footer);
body.prepend(main);
body.prepend(nav);
run("home");

function run(what) {
  if (what === "home") {
    nav.innerHTML = _home__WEBPACK_IMPORTED_MODULE_0__.navHomeContent;
    main.innerHTML = _home__WEBPACK_IMPORTED_MODULE_0__.mainHomeContent;
  } else if (what === "menu") {
    nav.innerHTML = _menu__WEBPACK_IMPORTED_MODULE_1__.navMenuContent;
    main.innerHTML = _menu__WEBPACK_IMPORTED_MODULE_1__.mainMenuContent;
  } else if (what === "contact") {
    nav.innerHTML = _contact__WEBPACK_IMPORTED_MODULE_2__.navContactContent;
    main.innerHTML = _contact__WEBPACK_IMPORTED_MODULE_2__.mainContactContent;
  }

  handleLinks();
}

function handleLinks() {
  var homeLink = document.querySelector("#home");
  var menuLink = document.querySelector("#menu");
  var contactLink = document.querySelector("#contact");
  homeLink.addEventListener("click", function () {
    // e.preventDefault();
    run("home");
  });
  menuLink.addEventListener("click", function () {
    // e.preventDefault();
    run("menu");
  });
  contactLink.addEventListener("click", function () {
    // e.preventDefault();
    run("contact");
  });
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0QsR0FIRDtBQUlELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbmF2Q29udGFjdENvbnRlbnQgPSBgXG4gIDxhIGlkPVwiaG9tZVwiIGhyZWY9XCIjXCI+SG9tZTwvYT5cbiAgPGEgaWQ9XCJtZW51XCIgaHJlZj1cIiNcIj5NZW51PC9hPlxuICA8YSBjbGFzcz1cImFjdGl2ZVwiIGlkPVwiY29udGFjdFwiIGhyZWY9XCIjXCI+Q29udGFjdDwvYT5gO1xuXG5leHBvcnQgY29uc3QgbWFpbkNvbnRhY3RDb250ZW50ID0gYDxmb3JtIGFjdGlvbj1cIlwiPlxuICAgICAgPGxlZ2VuZD5Db250YWN0IFVzPC9sZWdlbmQ+XG4gICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxuPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cInlvdXIgTmFtZVwiPlxuICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImV4YW1wbGUuZ21haWwuY29tXCI+XG48bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5NZXNzYWdlPC9sYWJlbD5cbjx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCI+PC90ZXh0YXJlYT5cblxuPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0blwiIHZhbHVlPVwiU3VibWl0XCI+XG4gICAgICBcbiAgICA8L2Zvcm0+YDtcbiIsImV4cG9ydCBjb25zdCBuYXZIb21lQ29udGVudCA9IGBcbiAgPGEgY2xhc3M9XCJhY3RpdmVcIiBpZD1cImhvbWVcIiBocmVmPVwiI1wiPkhvbWU8L2E+XG4gIDxhIGlkPVwibWVudVwiIGhyZWY9XCIjXCI+TWVudTwvYT5cbiAgPGEgaWQ9XCJjb250YWN0XCIgaHJlZj1cIiNcIj5Db250YWN0PC9hPmA7XG5cbmV4cG9ydCBjb25zdCBtYWluSG9tZUNvbnRlbnQgPSBgPHAgY2xhc3M9XCJtYWluLXBhcmFcIj5XZWxjb21lIExvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBSZWN1c2FuZGFlIGRpY3RhIG1haW9yZXMgbmloaWwgcG9zc2ltdXMsIHZvbHVwdGF0ZXMgbWluaW1hIHBsYWNlYXQgcmVwdWRpYW5kYWUgY29ycnVwdGkgZG9sb3JlcyBub2JpcyBkdWNpbXVzIGRlbGVuaXRpIHNlcXVpIGFzcGVybmF0dXIgaXBzYW0hIFF1YXMgaWxsbyBoYXJ1bSwgY29uc2VxdXVudHVyLCB0b3RhbSBxdW9kIG9mZmljaWlzIGN1bHBhIHF1aXNxdWFtIGVhIHF1aWRlbSwgZXN0IGFtZXQgcmVjdXNhbmRhZSBiZWF0YWUgaW52ZW50b3JlISBNYWlvcmVzIGNvbnNlcXV1bnR1ciBuaWhpbCBpbGx1bSBpcHN1bSB2b2x1cHRhdGVzIG9tbmlzIHF1aWJ1c2RhbSBtYWduYW0uPC9wPlxuPHAgY2xhc3M9XCJtYWluLXBhcmFcIj5BZGRyZXNzOiA8aT5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBSYXRpb25lIGFzc3VtZW5kYSBlYXF1ZSBub2JpcyBuZWNlc3NpdGF0aWJ1cyBhbmltaSBhbGlxdWlkLCBub24gcXVhZSBvbW5pcyBxdWFzaSBkb2xvcmVtcXVlIGN1bXF1ZSBhcGVyaWFtLCBxdWFlcmF0IHF1aXMgZGVsZWN0dXMgY3VscGEgY3VwaWRpdGF0ZSBkb2xvciBkaXN0aW5jdGlvIG9iY2FlY2F0aS48L2k+PC9wPlxuPHAgY2xhc3M9XCJtYWluLXBhcmFcIj5QaG9uZTogMDEyMyA0NTYgNzg5PC9wPmA7IiwiZXhwb3J0IGNvbnN0IG5hdk1lbnVDb250ZW50ID0gYFxuICA8YSBpZD1cImhvbWVcIiBocmVmPVwiI1wiPkhvbWU8L2E+XG4gIDxhIGNsYXNzPVwiYWN0aXZlXCIgaWQ9XCJtZW51XCIgaHJlZj1cIiNcIj5NZW51PC9hPlxuICA8YSBpZD1cImNvbnRhY3RcIiBocmVmPVwiI1wiPkNvbnRhY3Q8L2E+YDtcblxuZXhwb3J0IGNvbnN0IG1haW5NZW51Q29udGVudCA9IGA8ZGl2IGlkPVwibWVudS1jb250YWluZXJcIj5cbiAgICA8ZGl2PlxuICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9iYXJiZWN1ZS5qcGdcIiBhbHQ9XCJiYXJiZWN1ZVwiPlxuICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPkJhcmJlY3VlIExvcmVtLCBpcHN1bSBkb2xvci48L3A+XG4gICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvZm9vZC5qcGdcIiBhbHQ9XCJmb29kXCI+XG4gICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+TWVhdCBMb3JlbSwgaXBzdW0gZG9sb3IuPC9wPlxuICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL2ZyaWVkLWNoaWNrZW4uanBnXCIgYWx0PVwiZnJpZWQtY2hpY2tlblwiPlxuICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPkNoaWNrZW4gTG9yZW0sIGlwc3VtIGRvbG9yLjwvcD5cbiAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9oYW1idXJnZXIuanBnXCIgYWx0PVwiaGFtYnVyZ2VyXCI+XG4gICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+SGFtYm91cmdlciBMb3JlbSwgaXBzdW0gZG9sb3IuPC9wPlxuICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL3BpenphMS5qcGdcIiBhbHQ9XCJwaXp6YTFcIj5cbiAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5QaXp6YSBMb3JlbSwgaXBzdW0gZG9sb3IuPC9wPlxuICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL3BpenphMi5qcGdcIiBhbHQ9XCJwaXp6YTJcIj5cbiAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5QaXp6YSBuTG9yZW0sIGlwc3VtIGRvbG9yLjwvcD5cbiAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9zYWxhZC5qcGdcIiBhbHQ9XCJzYWxhZFwiPlxuICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlNhbGFkIExvcmVtLCBpcHN1bSBkb2xvci48L3A+XG4gICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvc3BhZ2hldHRpLmpwZ1wiIGFsdD1cInNwYWdoZXR0aVwiPlxuICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlNwYWdoZXR0aSBMb3JlbSwgaXBzdW0gZG9sb3IuPC9wPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5gO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBuYXZIb21lQ29udGVudCwgbWFpbkhvbWVDb250ZW50IH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgbmF2TWVudUNvbnRlbnQsIG1haW5NZW51Q29udGVudCB9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCB7IG5hdkNvbnRhY3RDb250ZW50LCBtYWluQ29udGFjdENvbnRlbnQgfSBmcm9tIFwiLi9jb250YWN0XCI7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG5cbmZvb3Rlci5pbm5lckhUTUwgPSBgPHA+JmNvcHk7IDIwMjE8L3A+YDtcbmJvZHkucHJlcGVuZChmb290ZXIpO1xuYm9keS5wcmVwZW5kKG1haW4pO1xuYm9keS5wcmVwZW5kKG5hdik7XG5cbnJ1bihcImhvbWVcIik7XG5cbmZ1bmN0aW9uIHJ1bih3aGF0KSB7XG4gIGlmICh3aGF0ID09PSBcImhvbWVcIikge1xuICAgIG5hdi5pbm5lckhUTUwgPSBuYXZIb21lQ29udGVudDtcbiAgICBtYWluLmlubmVySFRNTCA9IG1haW5Ib21lQ29udGVudDtcbiAgfSBlbHNlIGlmICh3aGF0ID09PSBcIm1lbnVcIikge1xuICAgIG5hdi5pbm5lckhUTUwgPSBuYXZNZW51Q29udGVudDtcbiAgICBtYWluLmlubmVySFRNTCA9IG1haW5NZW51Q29udGVudDtcbiAgfSBlbHNlIGlmICh3aGF0ID09PSBcImNvbnRhY3RcIikge1xuICAgIG5hdi5pbm5lckhUTUwgPSBuYXZDb250YWN0Q29udGVudDtcbiAgICBtYWluLmlubmVySFRNTCA9IG1haW5Db250YWN0Q29udGVudDtcbiAgfVxuICBoYW5kbGVMaW5rcygpO1xufVxuXG5cbmZ1bmN0aW9uIGhhbmRsZUxpbmtzKCkge1xuICBjb25zdCBob21lTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZVwiKTtcbiAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIik7XG4gIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0XCIpO1xuICBob21lTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBydW4oXCJob21lXCIpO1xuICB9KTtcbiAgbWVudUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcnVuKFwibWVudVwiKTtcbiAgfSk7XG4gIGNvbnRhY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJ1bihcImNvbnRhY3RcIik7XG4gIH0pO1xufVxuXG5cbiJdLCJuYW1lcyI6WyJuYXZDb250YWN0Q29udGVudCIsIm1haW5Db250YWN0Q29udGVudCIsIm5hdkhvbWVDb250ZW50IiwibWFpbkhvbWVDb250ZW50IiwibmF2TWVudUNvbnRlbnQiLCJtYWluTWVudUNvbnRlbnQiLCJib2R5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIm5hdiIsImNyZWF0ZUVsZW1lbnQiLCJtYWluIiwiZm9vdGVyIiwiaW5uZXJIVE1MIiwicHJlcGVuZCIsInJ1biIsIndoYXQiLCJoYW5kbGVMaW5rcyIsImhvbWVMaW5rIiwicXVlcnlTZWxlY3RvciIsIm1lbnVMaW5rIiwiY29udGFjdExpbmsiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==