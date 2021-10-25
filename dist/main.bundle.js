/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/classes/Fridge.ts":
/*!***********************************!*\
  !*** ./scripts/classes/Fridge.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Fridge\": () => (/* binding */ Fridge)\n/* harmony export */ });\n/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Note */ \"./scripts/classes/Note.ts\");\n\r\nvar Fridge = /** @class */ (function () {\r\n    function Fridge(name, total, current) {\r\n        var _this = this;\r\n        if (total === void 0) { total = 0; }\r\n        if (current === void 0) { current = 0; }\r\n        this.stickyNotes = [];\r\n        this.topIndex = 0;\r\n        // functions passed down to children (notes)\r\n        this.getCurrentNotes = function () {\r\n            _this.topIndex++;\r\n            return _this.topIndex;\r\n        };\r\n        this.deleteNote = function (id) {\r\n            _this.stickyNotes = _this.stickyNotes.filter(function (el) {\r\n                if (el.getId() != id)\r\n                    return true;\r\n                else {\r\n                    _this.currentNotes--;\r\n                    _this.updateFridge();\r\n                    return false;\r\n                }\r\n            });\r\n            // console.table( this.stickyNotes );\r\n        };\r\n        this.name = name;\r\n        this.totalNotes = total;\r\n        this.currentNotes = current;\r\n    }\r\n    Fridge.prototype.addStickyNote = function () {\r\n        var note = new _Note__WEBPACK_IMPORTED_MODULE_0__.StickyNote(this.topIndex + 1, this.getCurrentNotes, this.deleteNote);\r\n        this.stickyNotes.push(note);\r\n        this.currentNotes = this.stickyNotes.length;\r\n        this.topIndex++;\r\n        this.totalNotes++;\r\n        this.updateFridge();\r\n    };\r\n    Fridge.prototype.renderNotes = function (htmlId) {\r\n        this.stickyNotes.map(function (note) {\r\n            if (!document.getElementById(note.getId().toString()))\r\n                document.getElementById(htmlId).appendChild(note.getNoteHTML());\r\n        });\r\n    };\r\n    Fridge.prototype.updateFridge = function () {\r\n        document.getElementById(\"totalNotes\").innerText = \"Przebieg: \" + this.totalNotes.toString();\r\n        document.getElementById(\"currentNotes\").innerText = \"Karteczki: \" + this.currentNotes.toString();\r\n    };\r\n    return Fridge;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./scripts/classes/Fridge.ts?");

/***/ }),

/***/ "./scripts/classes/Note.ts":
/*!*********************************!*\
  !*** ./scripts/classes/Note.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StickyNote\": () => (/* binding */ StickyNote)\n/* harmony export */ });\nvar StickyNote = /** @class */ (function () {\r\n    function StickyNote(id, topIndexF, delNote, size, pos, text) {\r\n        if (size === void 0) { size = { x: 160, y: 160 }; }\r\n        if (pos === void 0) { pos = { x: 100, y: 100 }; }\r\n        if (text === void 0) { text = \"Hello there!\"; }\r\n        this.id = id;\r\n        this.getTopIndex = topIndexF;\r\n        this.fridgeDeleteNote = delNote;\r\n        this.size = size;\r\n        this.position = pos;\r\n        this.text = text;\r\n        this.zIndex = 100; //TODO\r\n    }\r\n    // returns a div of this note\r\n    StickyNote.prototype.getNoteHTML = function () {\r\n        var el = document.createElement(\"div\");\r\n        el.classList.add(\"note\");\r\n        el.id = this.id.toString();\r\n        el.style.width = this.size.x.toString() + \"px\";\r\n        el.style.height = this.size.y.toString() + \"px\";\r\n        el.style.top = this.position.y.toString() + \"px\";\r\n        el.style.left = this.position.x.toString() + \"px\";\r\n        el.innerText = this.text;\r\n        el.draggable = true;\r\n        var del = document.createElement(\"img\");\r\n        del.classList.add(\"delNote\");\r\n        del.src = \"./gfx/crossIcon.png\"; // from main directory *shrug*\r\n        el.appendChild(del);\r\n        var resize = document.createElement(\"img\");\r\n        resize.classList.add(\"resizeNote\");\r\n        resize.src = \"./gfx/resizeIcon.jpeg\";\r\n        el.appendChild(resize);\r\n        this.setEvents(el, del, resize);\r\n        return el;\r\n    };\r\n    // assigns the event listeners to elements\r\n    StickyNote.prototype.setEvents = function (tisMe, btnDel, btnResize) {\r\n        var _this = this;\r\n        tisMe.addEventListener(\"mousedown\", function (e) {\r\n            _this.zIndex = _this.getTopIndex();\r\n            // console.log( this.zIndex );\r\n            console.log(\"zIndex: \" + _this.zIndex);\r\n            tisMe.style.zIndex = _this.zIndex.toString();\r\n            _this.doTheDragThingy(e, tisMe);\r\n        });\r\n        // deletes HTML self\r\n        btnDel.addEventListener(\"click\", function (e) {\r\n            btnDel.parentNode.parentNode.removeChild(tisMe);\r\n            _this.fridgeDeleteNote(_this.id);\r\n        });\r\n        btnResize.addEventListener(\"mousedown\", function (e) {\r\n            _this.resizeMe(e, btnResize, tisMe);\r\n        });\r\n    };\r\n    // handles dragging the note around the fridge\r\n    StickyNote.prototype.doTheDragThingy = function (event, tisMe) {\r\n        tisMe.style.backgroundColor = \"#ffebcc\";\r\n        var mouseStart = { x: event.clientX, y: event.clientY };\r\n        var divStart = { x: tisMe.offsetLeft, y: tisMe.offsetTop };\r\n        var delta = { x: mouseStart.x - divStart.x, y: mouseStart.y - divStart.y };\r\n        document.addEventListener(\"mousemove\", handleMove, true);\r\n        document.addEventListener(\"mouseup\", handleUp, true);\r\n        event.stopPropagation();\r\n        event.preventDefault();\r\n        function handleMove(e) {\r\n            var x = e.clientX - delta.x;\r\n            var y = e.clientY - delta.y;\r\n            tisMe.style.left = x.toString() + \"px\";\r\n            tisMe.style.top = y.toString() + \"px\";\r\n            this.position = { x: x, y: y };\r\n            e.stopPropagation();\r\n        }\r\n        function handleUp(e) {\r\n            document.removeEventListener(\"mousemove\", handleMove, true);\r\n            document.removeEventListener(\"mouseup\", handleUp, true);\r\n            tisMe.style.backgroundColor = \"papayawhip\";\r\n            e.stopPropagation();\r\n        }\r\n    };\r\n    // handles resizing the note\r\n    StickyNote.prototype.resizeMe = function (event, img, noteDiv) {\r\n        var mouseStart = { x: event.clientX, y: event.clientY };\r\n        var divStart = { x: img.offsetLeft, y: img.offsetTop };\r\n        var delta = { x: mouseStart.x - divStart.x, y: mouseStart.y - divStart.y };\r\n        document.addEventListener(\"mousemove\", handleMove, true);\r\n        document.addEventListener(\"mouseup\", handleUp, true);\r\n        event.stopPropagation();\r\n        event.preventDefault();\r\n        function handleMove(e) {\r\n            var x = e.clientX - delta.x + 20;\r\n            var y = e.clientY - delta.y + 20;\r\n            x = x <= 100 ? parseInt(noteDiv.style.width.replace(\"px\", \"\")) : x;\r\n            y = y <= 100 ? parseInt(noteDiv.style.height.replace(\"px\", \"\")) : y;\r\n            noteDiv.style.width = x.toString() + \"px\";\r\n            noteDiv.style.height = y.toString() + \"px\";\r\n            this.size = { x: x, y: y };\r\n            e.stopPropagation();\r\n        }\r\n        function handleUp(e) {\r\n            document.removeEventListener(\"mousemove\", handleMove, true);\r\n            document.removeEventListener(\"mouseup\", handleUp, true);\r\n            e.stopPropagation();\r\n        }\r\n    };\r\n    StickyNote.prototype.getId = function () {\r\n        return this.id;\r\n    };\r\n    StickyNote.prototype.getSize = function () {\r\n        return this.size;\r\n    };\r\n    return StickyNote;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./scripts/classes/Note.ts?");

/***/ }),

/***/ "./scripts/main.ts":
/*!*************************!*\
  !*** ./scripts/main.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Fridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Fridge */ \"./scripts/classes/Fridge.ts\");\n\r\nvar fridge = new _classes_Fridge__WEBPACK_IMPORTED_MODULE_0__.Fridge(\"This a fridge\");\r\ndocument.getElementById(\"newNote\").addEventListener(\"click\", function () {\r\n    console.log(\"opachkii\");\r\n    fridge.addStickyNote();\r\n    fridge.renderNotes(\"fridge\");\r\n});\r\n// let a = new StickyNote( 0, { width: 100, height: 100 } );\r\n// console.log( a );\r\n\n\n//# sourceURL=webpack:///./scripts/main.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/main.ts");
/******/ 	
/******/ })()
;