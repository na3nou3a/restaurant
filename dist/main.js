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
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
var contact = function contact() {
  return "\n<form id='form'>\n      <legend>Contact Us</legend>\n      <label for=\"name\">Name</label>\n<input type=\"text\" name=\"name\" id=\"name\" placeholder=\"your Name\">\n      <label for=\"email\">Email</label>\n<input type=\"email\" name=\"email\" id=\"email\" placeholder=\"example.gmail.com\">\n<label for=\"description\">Message</label>\n<textarea name=\"description\" id=\"description\" cols=\"30\" rows=\"10\"></textarea>\n\n<button type=\"submit\" class=\"btn\">Submit</button>\n      \n    </form>";
};

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footer": () => (/* binding */ footer)
/* harmony export */ });
var footer = function footer() {
  var year = new Date().getFullYear();
  var footter = document.createElement('footer');
  footter.innerHTML = "<p>&copy; ".concat(year, "</p>");
  return footter;
};

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
var home = function home() {
  return "<p class=\"main-para\">Welcome Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae dicta maiores nihil possimus, voluptates minima placeat repudiandae corrupti dolores nobis ducimus deleniti sequi aspernatur ipsam! Quas illo harum, consequuntur, totam quod officiis culpa quisquam ea quidem, est amet recusandae beatae inventore! Maiores consequuntur nihil illum ipsum voluptates omnis quibusdam magnam.</p>\n<p class=\"main-para\">Address: <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione assumenda eaque nobis necessitatibus animi aliquid, non quae omnis quasi doloremque cumque aperiam, quaerat quis delectus culpa cupiditate dolor distinctio obcaecati.</i></p>\n<p class=\"main-para\">Phone: 0123 456 789</p>";
};

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
var menu = function menu() {
  return "<div class=\"menu-container\">\n    <div class='card'>\n      <img src=\"./images/barbecue.jpg\" alt=\"barbecue\">\n      <p class=\"description\">Barbecue A chicken is a bird. One of the features that differentiate it from most other birds is that it has a comb and two wattles. The comb is the red appendage on the top of the head, and the wattles are the two appendages under the chin.</p>\n    </div>\n\n       <div class='card'>\n      <img src=\"./images/food.jpg\" alt=\"food\">\n      <p class=\"description\">Meat, A chicken is a bird. One of the features that differentiate it from most other birds is that it has a comb and two wattles. The comb is the red appendage on the top of the head, and the wattles are the two appendages under the chin.</p>\n    </div>\n\n        <div class='card'>\n      <img src=\"./images/fried-chicken.jpg\" alt=\"fried-chicken\">\n      <p class=\"description\">Chicken, A chicken is a bird. One of the features that differentiate it from most other birds is that it has a comb and two wattles. The comb is the red appendage on the top of the head, and the wattles are the two appendages under the chin.</p>\n    </div>\n\n        <div class='card'>\n      <img src=\"./images/hamburger.jpg\" alt=\"hamburger\">\n      <p class=\"description\">Hambourger, A chicken is a bird. One of the features that differentiate it from most other birds is that it has a comb and two wattles. The comb is the red appendage on the top of the head, and the wattles are the two appendages under the chin.</p>\n    </div>\n\n        <div class='card'>\n      <img src=\"./images/pizza1.jpg\" alt=\"pizza1\">\n      <p class=\"description\">Pizza, A chicken is a bird. One of the features that differentiate it from most other birds is that it has a comb and two wattles. The comb is the red appendage on the top of the head, and the wattles are the two appendages under the chin.</p>\n    </div>\n\n       <div class='card'>\n      <img src=\"./images/pizza2.jpg\" alt=\"pizza2\">\n      <p class=\"description\">Pizza, A chicken is a bird. One of the features that differentiate it from most other birds is that it has a comb and two wattles. The comb is the red appendage on the top of the head, and the wattles are the two appendages under the chin.</p>\n    </div>\n\n        <div class='card'>\n      <img src=\"./images/salad.jpg\" alt=\"salad\">\n      <p class=\"description\">Salad, A chicken is a bird. One of the features that differentiate it from most other birds is that it has a comb and two wattles. The comb is the red appendage on the top of the head, and the wattles are the two appendages under the chin.</p>\n    </div>\n\n        <div class='card'>\n      <img src=\"./images/spaghetti.jpg\" alt=\"spaghetti\">\n      <p class=\"description\">Spaghetti, A chicken is a bird. One of the features that differentiate it from most other birds is that it has a comb and two wattles. The comb is the red appendage on the top of the head, and the wattles are the two appendages under the chin.</p>\n    </div>\n  </div>";
};

/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navigation": () => (/* binding */ navigation)
/* harmony export */ });
var navigation = function navigation(id) {
  var nav = document.createElement('nav');

  if (id == 'home') {
    nav.innerHTML = "\n  <a class=\"active text-title\" id=\"home\" href=\"#\">Home</a>\n  <a class='text-title' id=\"menu\" href=\"#\">Menu</a>\n  <a class='text-title' id=\"contact\" href=\"#\">Contact</a>\n  ";
    return nav;
  }

  if (id == 'menu') {
    nav.innerHTML = "\n  <a class='text-title' id=\"home\" href=\"#\">Home</a>\n  <a class=\"active text-title\" id=\"menu\" href=\"#\">Menu</a>\n  <a class='text-title' id=\"contact\" href=\"#\">Contact</a>";
    return nav;
  }

  nav.innerHTML = "\n  <a class='text-title' id=\"home\" href=\"#\">Home</a>\n  <a class='text-title' id=\"menu\" href=\"#\">Menu</a>\n  <a class=\"active text-title\" id=\"contact\" href=\"#\">Contact</a>";
  return nav;
};

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
/* harmony import */ var _navigation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.js */ "./src/navigation.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





var currentPage = '';
var body = document.getElementsByTagName('body')[0];
var main = document.createElement('main');

function runHomePage() {
  currentPage = 'home';
  body.innerHTML = '';
  body.prepend((0,_footer_js__WEBPACK_IMPORTED_MODULE_1__.footer)());
  main.innerHTML = (0,_home_js__WEBPACK_IMPORTED_MODULE_2__.home)();
  body.prepend(main);
  body.prepend((0,_navigation_js__WEBPACK_IMPORTED_MODULE_0__.navigation)('home'));
  handleLinks();
}

function runMenuPage() {
  currentPage = 'menu';
  body.innerHTML = '';
  body.prepend((0,_footer_js__WEBPACK_IMPORTED_MODULE_1__.footer)());
  main.innerHTML = (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.menu)();
  body.prepend(main);
  body.prepend((0,_navigation_js__WEBPACK_IMPORTED_MODULE_0__.navigation)('menu'));
  handleLinks();
}

function runContactPage() {
  currentPage = 'contact';
  body.innerHTML = '';
  body.prepend((0,_footer_js__WEBPACK_IMPORTED_MODULE_1__.footer)());
  main.innerHTML = (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.contact)();
  body.prepend(main);
  body.prepend((0,_navigation_js__WEBPACK_IMPORTED_MODULE_0__.navigation)('contact'));
  handleLinks();
  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.reset();
    alert('form submitted!');
  });
}

function handleLinks() {
  var homeLink = document.querySelector('#home');
  var menuLink = document.querySelector('#menu');
  var contactLink = document.querySelector('#contact');
  homeLink.addEventListener('click', function (e) {
    if (currentPage == 'home') return;
    e.preventDefault();
    runHomePage('home');
  });
  menuLink.addEventListener('click', function (e) {
    if (currentPage == 'menu') return;
    e.preventDefault();
    runMenuPage('menu');
  });
  contactLink.addEventListener('click', function (e) {
    if (currentPage == 'contact') return;
    e.preventDefault();
    runContactPage('contact');
  });
}

runHomePage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBWDtBQUNELEdBSkQ7QUFLQWMsRUFBQUEsUUFBUSxDQUFDUCxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFVQyxDQUFWLEVBQWE7QUFDOUMsUUFBSVosV0FBVyxJQUFJLE1BQW5CLEVBQTJCO0FBQzNCWSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQU4sSUFBQUEsV0FBVyxDQUFDLE1BQUQsQ0FBWDtBQUNELEdBSkQ7QUFLQVksRUFBQUEsV0FBVyxDQUFDUixnQkFBWixDQUE2QixPQUE3QixFQUFzQyxVQUFVQyxDQUFWLEVBQWE7QUFDakQsUUFBSVosV0FBVyxJQUFJLFNBQW5CLEVBQThCO0FBQzlCWSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUwsSUFBQUEsY0FBYyxDQUFDLFNBQUQsQ0FBZDtBQUNELEdBSkQ7QUFLRDs7QUFFREosV0FBVyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjb250YWN0ID0gKCkgPT4gYFxuPGZvcm0gaWQ9J2Zvcm0nPlxuICAgICAgPGxlZ2VuZD5Db250YWN0IFVzPC9sZWdlbmQ+XG4gICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxuPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cInlvdXIgTmFtZVwiPlxuICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImV4YW1wbGUuZ21haWwuY29tXCI+XG48bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5NZXNzYWdlPC9sYWJlbD5cbjx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCI+PC90ZXh0YXJlYT5cblxuPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG5cIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIFxuICAgIDwvZm9ybT5gO1xuIiwiZXhwb3J0IGNvbnN0IGZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgZm9vdHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBmb290dGVyLmlubmVySFRNTCA9IGA8cD4mY29weTsgJHt5ZWFyfTwvcD5gO1xuICByZXR1cm4gZm9vdHRlcjtcbn07XG4iLCJleHBvcnQgY29uc3QgaG9tZSA9XG4gICgpID0+IGA8cCBjbGFzcz1cIm1haW4tcGFyYVwiPldlbGNvbWUgTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJlY3VzYW5kYWUgZGljdGEgbWFpb3JlcyBuaWhpbCBwb3NzaW11cywgdm9sdXB0YXRlcyBtaW5pbWEgcGxhY2VhdCByZXB1ZGlhbmRhZSBjb3JydXB0aSBkb2xvcmVzIG5vYmlzIGR1Y2ltdXMgZGVsZW5pdGkgc2VxdWkgYXNwZXJuYXR1ciBpcHNhbSEgUXVhcyBpbGxvIGhhcnVtLCBjb25zZXF1dW50dXIsIHRvdGFtIHF1b2Qgb2ZmaWNpaXMgY3VscGEgcXVpc3F1YW0gZWEgcXVpZGVtLCBlc3QgYW1ldCByZWN1c2FuZGFlIGJlYXRhZSBpbnZlbnRvcmUhIE1haW9yZXMgY29uc2VxdXVudHVyIG5paGlsIGlsbHVtIGlwc3VtIHZvbHVwdGF0ZXMgb21uaXMgcXVpYnVzZGFtIG1hZ25hbS48L3A+XG48cCBjbGFzcz1cIm1haW4tcGFyYVwiPkFkZHJlc3M6IDxpPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJhdGlvbmUgYXNzdW1lbmRhIGVhcXVlIG5vYmlzIG5lY2Vzc2l0YXRpYnVzIGFuaW1pIGFsaXF1aWQsIG5vbiBxdWFlIG9tbmlzIHF1YXNpIGRvbG9yZW1xdWUgY3VtcXVlIGFwZXJpYW0sIHF1YWVyYXQgcXVpcyBkZWxlY3R1cyBjdWxwYSBjdXBpZGl0YXRlIGRvbG9yIGRpc3RpbmN0aW8gb2JjYWVjYXRpLjwvaT48L3A+XG48cCBjbGFzcz1cIm1haW4tcGFyYVwiPlBob25lOiAwMTIzIDQ1NiA3ODk8L3A+YDtcbiIsImV4cG9ydCBjb25zdCBtZW51ID0gKCkgPT4gYDxkaXYgY2xhc3M9XCJtZW51LWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9J2NhcmQnPlxuICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9iYXJiZWN1ZS5qcGdcIiBhbHQ9XCJiYXJiZWN1ZVwiPlxuICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPkJhcmJlY3VlIEEgY2hpY2tlbiBpcyBhIGJpcmQuIE9uZSBvZiB0aGUgZmVhdHVyZXMgdGhhdCBkaWZmZXJlbnRpYXRlIGl0IGZyb20gbW9zdCBvdGhlciBiaXJkcyBpcyB0aGF0IGl0IGhhcyBhIGNvbWIgYW5kIHR3byB3YXR0bGVzLiBUaGUgY29tYiBpcyB0aGUgcmVkIGFwcGVuZGFnZSBvbiB0aGUgdG9wIG9mIHRoZSBoZWFkLCBhbmQgdGhlIHdhdHRsZXMgYXJlIHRoZSB0d28gYXBwZW5kYWdlcyB1bmRlciB0aGUgY2hpbi48L3A+XG4gICAgPC9kaXY+XG5cbiAgICAgICA8ZGl2IGNsYXNzPSdjYXJkJz5cbiAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvZm9vZC5qcGdcIiBhbHQ9XCJmb29kXCI+XG4gICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+TWVhdCwgQSBjaGlja2VuIGlzIGEgYmlyZC4gT25lIG9mIHRoZSBmZWF0dXJlcyB0aGF0IGRpZmZlcmVudGlhdGUgaXQgZnJvbSBtb3N0IG90aGVyIGJpcmRzIGlzIHRoYXQgaXQgaGFzIGEgY29tYiBhbmQgdHdvIHdhdHRsZXMuIFRoZSBjb21iIGlzIHRoZSByZWQgYXBwZW5kYWdlIG9uIHRoZSB0b3Agb2YgdGhlIGhlYWQsIGFuZCB0aGUgd2F0dGxlcyBhcmUgdGhlIHR3byBhcHBlbmRhZ2VzIHVuZGVyIHRoZSBjaGluLjwvcD5cbiAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkJz5cbiAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvZnJpZWQtY2hpY2tlbi5qcGdcIiBhbHQ9XCJmcmllZC1jaGlja2VuXCI+XG4gICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+Q2hpY2tlbiwgQSBjaGlja2VuIGlzIGEgYmlyZC4gT25lIG9mIHRoZSBmZWF0dXJlcyB0aGF0IGRpZmZlcmVudGlhdGUgaXQgZnJvbSBtb3N0IG90aGVyIGJpcmRzIGlzIHRoYXQgaXQgaGFzIGEgY29tYiBhbmQgdHdvIHdhdHRsZXMuIFRoZSBjb21iIGlzIHRoZSByZWQgYXBwZW5kYWdlIG9uIHRoZSB0b3Agb2YgdGhlIGhlYWQsIGFuZCB0aGUgd2F0dGxlcyBhcmUgdGhlIHR3byBhcHBlbmRhZ2VzIHVuZGVyIHRoZSBjaGluLjwvcD5cbiAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkJz5cbiAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvaGFtYnVyZ2VyLmpwZ1wiIGFsdD1cImhhbWJ1cmdlclwiPlxuICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPkhhbWJvdXJnZXIsIEEgY2hpY2tlbiBpcyBhIGJpcmQuIE9uZSBvZiB0aGUgZmVhdHVyZXMgdGhhdCBkaWZmZXJlbnRpYXRlIGl0IGZyb20gbW9zdCBvdGhlciBiaXJkcyBpcyB0aGF0IGl0IGhhcyBhIGNvbWIgYW5kIHR3byB3YXR0bGVzLiBUaGUgY29tYiBpcyB0aGUgcmVkIGFwcGVuZGFnZSBvbiB0aGUgdG9wIG9mIHRoZSBoZWFkLCBhbmQgdGhlIHdhdHRsZXMgYXJlIHRoZSB0d28gYXBwZW5kYWdlcyB1bmRlciB0aGUgY2hpbi48L3A+XG4gICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz0nY2FyZCc+XG4gICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL3BpenphMS5qcGdcIiBhbHQ9XCJwaXp6YTFcIj5cbiAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5QaXp6YSwgQSBjaGlja2VuIGlzIGEgYmlyZC4gT25lIG9mIHRoZSBmZWF0dXJlcyB0aGF0IGRpZmZlcmVudGlhdGUgaXQgZnJvbSBtb3N0IG90aGVyIGJpcmRzIGlzIHRoYXQgaXQgaGFzIGEgY29tYiBhbmQgdHdvIHdhdHRsZXMuIFRoZSBjb21iIGlzIHRoZSByZWQgYXBwZW5kYWdlIG9uIHRoZSB0b3Agb2YgdGhlIGhlYWQsIGFuZCB0aGUgd2F0dGxlcyBhcmUgdGhlIHR3byBhcHBlbmRhZ2VzIHVuZGVyIHRoZSBjaGluLjwvcD5cbiAgICA8L2Rpdj5cblxuICAgICAgIDxkaXYgY2xhc3M9J2NhcmQnPlxuICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9waXp6YTIuanBnXCIgYWx0PVwicGl6emEyXCI+XG4gICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+UGl6emEsIEEgY2hpY2tlbiBpcyBhIGJpcmQuIE9uZSBvZiB0aGUgZmVhdHVyZXMgdGhhdCBkaWZmZXJlbnRpYXRlIGl0IGZyb20gbW9zdCBvdGhlciBiaXJkcyBpcyB0aGF0IGl0IGhhcyBhIGNvbWIgYW5kIHR3byB3YXR0bGVzLiBUaGUgY29tYiBpcyB0aGUgcmVkIGFwcGVuZGFnZSBvbiB0aGUgdG9wIG9mIHRoZSBoZWFkLCBhbmQgdGhlIHdhdHRsZXMgYXJlIHRoZSB0d28gYXBwZW5kYWdlcyB1bmRlciB0aGUgY2hpbi48L3A+XG4gICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz0nY2FyZCc+XG4gICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL3NhbGFkLmpwZ1wiIGFsdD1cInNhbGFkXCI+XG4gICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+U2FsYWQsIEEgY2hpY2tlbiBpcyBhIGJpcmQuIE9uZSBvZiB0aGUgZmVhdHVyZXMgdGhhdCBkaWZmZXJlbnRpYXRlIGl0IGZyb20gbW9zdCBvdGhlciBiaXJkcyBpcyB0aGF0IGl0IGhhcyBhIGNvbWIgYW5kIHR3byB3YXR0bGVzLiBUaGUgY29tYiBpcyB0aGUgcmVkIGFwcGVuZGFnZSBvbiB0aGUgdG9wIG9mIHRoZSBoZWFkLCBhbmQgdGhlIHdhdHRsZXMgYXJlIHRoZSB0d28gYXBwZW5kYWdlcyB1bmRlciB0aGUgY2hpbi48L3A+XG4gICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz0nY2FyZCc+XG4gICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL3NwYWdoZXR0aS5qcGdcIiBhbHQ9XCJzcGFnaGV0dGlcIj5cbiAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5TcGFnaGV0dGksIEEgY2hpY2tlbiBpcyBhIGJpcmQuIE9uZSBvZiB0aGUgZmVhdHVyZXMgdGhhdCBkaWZmZXJlbnRpYXRlIGl0IGZyb20gbW9zdCBvdGhlciBiaXJkcyBpcyB0aGF0IGl0IGhhcyBhIGNvbWIgYW5kIHR3byB3YXR0bGVzLiBUaGUgY29tYiBpcyB0aGUgcmVkIGFwcGVuZGFnZSBvbiB0aGUgdG9wIG9mIHRoZSBoZWFkLCBhbmQgdGhlIHdhdHRsZXMgYXJlIHRoZSB0d28gYXBwZW5kYWdlcyB1bmRlciB0aGUgY2hpbi48L3A+XG4gICAgPC9kaXY+XG4gIDwvZGl2PmA7XG4iLCJleHBvcnQgY29uc3QgbmF2aWdhdGlvbiA9IChpZCkgPT4ge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgaWYgKGlkID09ICdob21lJykge1xuICAgIG5hdi5pbm5lckhUTUwgPSBgXG4gIDxhIGNsYXNzPVwiYWN0aXZlIHRleHQtdGl0bGVcIiBpZD1cImhvbWVcIiBocmVmPVwiI1wiPkhvbWU8L2E+XG4gIDxhIGNsYXNzPSd0ZXh0LXRpdGxlJyBpZD1cIm1lbnVcIiBocmVmPVwiI1wiPk1lbnU8L2E+XG4gIDxhIGNsYXNzPSd0ZXh0LXRpdGxlJyBpZD1cImNvbnRhY3RcIiBocmVmPVwiI1wiPkNvbnRhY3Q8L2E+XG4gIGA7XG4gICAgcmV0dXJuIG5hdjtcbiAgfVxuICBpZiAoaWQgPT0gJ21lbnUnKSB7XG4gICAgbmF2LmlubmVySFRNTCA9IGBcbiAgPGEgY2xhc3M9J3RleHQtdGl0bGUnIGlkPVwiaG9tZVwiIGhyZWY9XCIjXCI+SG9tZTwvYT5cbiAgPGEgY2xhc3M9XCJhY3RpdmUgdGV4dC10aXRsZVwiIGlkPVwibWVudVwiIGhyZWY9XCIjXCI+TWVudTwvYT5cbiAgPGEgY2xhc3M9J3RleHQtdGl0bGUnIGlkPVwiY29udGFjdFwiIGhyZWY9XCIjXCI+Q29udGFjdDwvYT5gO1xuICAgIHJldHVybiBuYXY7XG4gIH1cbiAgbmF2LmlubmVySFRNTCA9IGBcbiAgPGEgY2xhc3M9J3RleHQtdGl0bGUnIGlkPVwiaG9tZVwiIGhyZWY9XCIjXCI+SG9tZTwvYT5cbiAgPGEgY2xhc3M9J3RleHQtdGl0bGUnIGlkPVwibWVudVwiIGhyZWY9XCIjXCI+TWVudTwvYT5cbiAgPGEgY2xhc3M9XCJhY3RpdmUgdGV4dC10aXRsZVwiIGlkPVwiY29udGFjdFwiIGhyZWY9XCIjXCI+Q29udGFjdDwvYT5gO1xuICByZXR1cm4gbmF2O1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbmF2aWdhdGlvbiB9IGZyb20gJy4vbmF2aWdhdGlvbi5qcyc7XG5pbXBvcnQgeyBmb290ZXIgfSBmcm9tICcuL2Zvb3Rlci5qcyc7XG5pbXBvcnQgeyBob21lIH0gZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCB7IG1lbnUgfSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHsgY29udGFjdCB9IGZyb20gJy4vY29udGFjdC5qcyc7XG5cbmxldCBjdXJyZW50UGFnZSA9ICcnO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG5mdW5jdGlvbiBydW5Ib21lUGFnZSgpIHtcbiAgY3VycmVudFBhZ2UgPSAnaG9tZSc7XG4gIGJvZHkuaW5uZXJIVE1MID0gJyc7XG4gIGJvZHkucHJlcGVuZChmb290ZXIoKSk7XG4gIG1haW4uaW5uZXJIVE1MID0gaG9tZSgpO1xuICBib2R5LnByZXBlbmQobWFpbik7XG4gIGJvZHkucHJlcGVuZChuYXZpZ2F0aW9uKCdob21lJykpO1xuICBoYW5kbGVMaW5rcygpO1xufVxuXG5mdW5jdGlvbiBydW5NZW51UGFnZSgpIHtcbiAgY3VycmVudFBhZ2UgPSAnbWVudSc7XG4gIGJvZHkuaW5uZXJIVE1MID0gJyc7XG4gIGJvZHkucHJlcGVuZChmb290ZXIoKSk7XG4gIG1haW4uaW5uZXJIVE1MID0gbWVudSgpO1xuICBib2R5LnByZXBlbmQobWFpbik7XG4gIGJvZHkucHJlcGVuZChuYXZpZ2F0aW9uKCdtZW51JykpO1xuICBoYW5kbGVMaW5rcygpO1xufVxuXG5mdW5jdGlvbiBydW5Db250YWN0UGFnZSgpIHtcbiAgY3VycmVudFBhZ2UgPSAnY29udGFjdCc7XG4gIGJvZHkuaW5uZXJIVE1MID0gJyc7XG4gIGJvZHkucHJlcGVuZChmb290ZXIoKSk7XG4gIG1haW4uaW5uZXJIVE1MID0gY29udGFjdCgpO1xuICBib2R5LnByZXBlbmQobWFpbik7XG4gIGJvZHkucHJlcGVuZChuYXZpZ2F0aW9uKCdjb250YWN0JykpO1xuICBoYW5kbGVMaW5rcygpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgYWxlcnQoJ2Zvcm0gc3VibWl0dGVkIScpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTGlua3MoKSB7XG4gIGNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKTtcbiAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpO1xuICBjb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0Jyk7XG4gIGhvbWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoY3VycmVudFBhZ2UgPT0gJ2hvbWUnKSByZXR1cm47XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJ1bkhvbWVQYWdlKCdob21lJyk7XG4gIH0pO1xuICBtZW51TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGN1cnJlbnRQYWdlID09ICdtZW51JykgcmV0dXJuO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBydW5NZW51UGFnZSgnbWVudScpO1xuICB9KTtcbiAgY29udGFjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChjdXJyZW50UGFnZSA9PSAnY29udGFjdCcpIHJldHVybjtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcnVuQ29udGFjdFBhZ2UoJ2NvbnRhY3QnKTtcbiAgfSk7XG59XG5cbnJ1bkhvbWVQYWdlKCk7XG4iXSwibmFtZXMiOlsiY29udGFjdCIsImZvb3RlciIsInllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJmb290dGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiaG9tZSIsIm1lbnUiLCJuYXZpZ2F0aW9uIiwiaWQiLCJuYXYiLCJjdXJyZW50UGFnZSIsImJvZHkiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIm1haW4iLCJydW5Ib21lUGFnZSIsInByZXBlbmQiLCJoYW5kbGVMaW5rcyIsInJ1bk1lbnVQYWdlIiwicnVuQ29udGFjdFBhZ2UiLCJmb3JtIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzZXQiLCJhbGVydCIsImhvbWVMaW5rIiwicXVlcnlTZWxlY3RvciIsIm1lbnVMaW5rIiwiY29udGFjdExpbmsiXSwic291cmNlUm9vdCI6IiJ9