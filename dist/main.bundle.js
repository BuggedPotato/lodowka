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

/***/ "./scripts/classes/DBHandle.ts":
/*!*************************************!*\
  !*** ./scripts/classes/DBHandle.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DBHandle\": () => (/* binding */ DBHandle)\n/* harmony export */ });\nvar DBHandle = /** @class */ (function () {\r\n    function DBHandle() {\r\n    }\r\n    // public static getQueryFridge() : string\r\n    // {\r\n    //     const headers : HeadersInit = { \"Content-Type\": 'application/x-www-form-urlencoded' };\r\n    //     const body : BodyInit = \"data=\" + JSON.stringify( { mode: \"queryName\" } );\r\n    //     let resp : Promise<string> = fetch(\r\n    //         \"./php/dbhandle.php\",\r\n    //         { method: \"post\", body, headers })\r\n    //         .then( response =>{\r\n    //             if( !response.ok )\r\n    //                 throw new Error( response.statusText );\r\n    //             console.log( response.body );\r\n    //             return response.json();\r\n    //         } )\r\n    //         .then( data => {\r\n    //             console.log( data );\r\n    //             return data;\r\n    //         } );\r\n    //     console.log( resp );\r\n    //     return resp.toString();\r\n    // }\r\n    DBHandle.getFridgeData = function (name) {\r\n        var headers = { \"Content-Type\": 'application/x-www-form-urlencoded' };\r\n        var body = \"data=\" + JSON.stringify({ mode: \"getFridge\", name: name });\r\n        var tmp = fetch(\"./php/dbhandle.php\", { method: \"post\", body: body, headers: headers })\r\n            .then(function (response) {\r\n            if (!response.ok)\r\n                throw new Error(response.statusText);\r\n            // console.log( response.json() );\r\n            return response.json();\r\n        })\r\n            .then(function (data) {\r\n            return data[0];\r\n        });\r\n        return tmp;\r\n    };\r\n    DBHandle.saveFridge = function (f) {\r\n        var headers = { \"Content-Type\": 'application/x-www-form-urlencoded' };\r\n        var body = \"data=\" + JSON.stringify({ mode: \"saveFridge\", fridge: JSON.stringify(f) });\r\n        fetch(\"./php/dbhandle.php\", { method: \"post\", body: body, headers: headers })\r\n            .then(function (response) {\r\n            if (!response.ok)\r\n                throw new Error(response.statusText);\r\n            // console.log( response.json() );\r\n            return response.json();\r\n        });\r\n    };\r\n    return DBHandle;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./scripts/classes/DBHandle.ts?");

/***/ }),

/***/ "./scripts/classes/Fridge.ts":
/*!***********************************!*\
  !*** ./scripts/classes/Fridge.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Fridge\": () => (/* binding */ Fridge)\n/* harmony export */ });\n/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Note */ \"./scripts/classes/Note.ts\");\n\r\nvar Fridge = /** @class */ (function () {\r\n    function Fridge(name, total, current) {\r\n        var _this = this;\r\n        if (total === void 0) { total = 0; }\r\n        if (current === void 0) { current = 0; }\r\n        this.stickyNotes = [];\r\n        this.topIndex = 0;\r\n        this.functions4Notes = {\r\n            getTopIndex: function () {\r\n                _this.topIndex++;\r\n                return _this.topIndex;\r\n            },\r\n            deleteNote: function (id) {\r\n                _this.stickyNotes = _this.stickyNotes.filter(function (el) {\r\n                    if (el.id != id)\r\n                        return true;\r\n                    else {\r\n                        _this.currentNotes--;\r\n                        _this.updateFridge();\r\n                        return false;\r\n                    }\r\n                });\r\n                // console.table( this.stickyNotes );\r\n            }\r\n        };\r\n        this.name = name;\r\n        this.totalNotes = total;\r\n        this.currentNotes = current;\r\n    }\r\n    Fridge.prototype.addStickyNote = function () {\r\n        var note = new _Note__WEBPACK_IMPORTED_MODULE_0__.StickyNote(this.topIndex + 1, this.functions4Notes);\r\n        this.stickyNotes.push(note);\r\n        this.currentNotes = this.stickyNotes.length;\r\n        this.topIndex++;\r\n        this.totalNotes++;\r\n        this.updateFridge();\r\n    };\r\n    Fridge.prototype.renderNotes = function (htmlId) {\r\n        this.stickyNotes.map(function (note) {\r\n            if (!document.getElementById(note.id.toString()))\r\n                document.getElementById(htmlId).appendChild(note.getNoteHTML());\r\n        });\r\n    };\r\n    Fridge.prototype.getNoteOfId = function (searchedId) {\r\n        return this.stickyNotes.find(function (element) { return element.id == searchedId; });\r\n    };\r\n    Fridge.prototype.updateFridge = function () {\r\n        document.getElementById(\"totalNotes\").innerText = \"Przebieg: \" + this.totalNotes.toString();\r\n        document.getElementById(\"currentNotes\").innerText = \"Karteczki: \" + this.currentNotes.toString();\r\n    };\r\n    return Fridge;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./scripts/classes/Fridge.ts?");

/***/ }),

/***/ "./scripts/classes/Note.ts":
/*!*********************************!*\
  !*** ./scripts/classes/Note.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StickyNote\": () => (/* binding */ StickyNote)\n/* harmony export */ });\n/* harmony import */ var _TinyMCEHandle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TinyMCEHandle */ \"./scripts/classes/TinyMCEHandle.ts\");\n\r\nvar StickyNote = /** @class */ (function () {\r\n    function StickyNote(id, parentFunctions, size, pos, text) {\r\n        if (size === void 0) { size = { x: 160, y: 160 }; }\r\n        if (pos === void 0) { pos = { x: 100, y: 100 }; }\r\n        if (text === void 0) { text = \"Hello there!\"; }\r\n        this.id = id;\r\n        this.parentFunctions = parentFunctions;\r\n        this.size = size;\r\n        this.position = pos;\r\n        this.text = text;\r\n        this.zIndex = 100; //TODO? meh\r\n    }\r\n    // returns a div of this note\r\n    StickyNote.prototype.getNoteHTML = function () {\r\n        var el = document.createElement(\"div\");\r\n        el.classList.add(\"note\");\r\n        el.id = this.id.toString();\r\n        el.style.width = this.size.x.toString() + \"px\";\r\n        el.style.height = this.size.y.toString() + \"px\";\r\n        el.style.top = this.position.y.toString() + \"px\";\r\n        el.style.left = this.position.x.toString() + \"px\";\r\n        var textbox = document.createElement(\"div\");\r\n        textbox.classList.add(\"textbox\");\r\n        textbox.innerHTML = \"<div>\" + this.text + \"</div>\";\r\n        el.appendChild(textbox);\r\n        var del = document.createElement(\"img\");\r\n        del.classList.add(\"icon\");\r\n        del.classList.add(\"delNote\");\r\n        del.src = \"./gfx/crossIcon.png\"; // from main directory *shrug*\r\n        el.appendChild(del);\r\n        var resize = document.createElement(\"img\");\r\n        resize.classList.add(\"icon\");\r\n        resize.classList.add(\"resizeNote\");\r\n        resize.src = \"./gfx/resizeIcon.jpeg\";\r\n        el.appendChild(resize);\r\n        var edit = document.createElement(\"img\");\r\n        edit.classList.add(\"icon\");\r\n        edit.classList.add(\"editNote\");\r\n        edit.src = \"./gfx/editIcon.png\";\r\n        el.appendChild(edit);\r\n        this.setEvents(el, del, resize, edit);\r\n        return el;\r\n    };\r\n    // assigns the event listeners to elements\r\n    StickyNote.prototype.setEvents = function (tisMe, btnDel, btnResize, btnEdit) {\r\n        var _this = this;\r\n        tisMe.addEventListener(\"mousedown\", function (e) {\r\n            _this.zIndex = _this.parentFunctions.getTopIndex();\r\n            // console.log( this.zIndex );\r\n            console.log(\"zIndex: \" + _this.zIndex);\r\n            tisMe.style.zIndex = _this.zIndex.toString();\r\n            _this.doTheDragThingy(e, tisMe);\r\n        });\r\n        // deletes HTML self\r\n        btnDel.addEventListener(\"click\", function (e) {\r\n            btnDel.parentNode.parentNode.removeChild(tisMe);\r\n            _this.parentFunctions.deleteNote(_this.id);\r\n        });\r\n        btnResize.addEventListener(\"mousedown\", function (e) {\r\n            _this.resizeMe(e, btnResize, tisMe);\r\n        });\r\n        btnEdit.addEventListener(\"click\", function (e) {\r\n            setEditorContent(_this);\r\n            _TinyMCEHandle__WEBPACK_IMPORTED_MODULE_0__.TinyMCEHandle.showEditForm(_this.id);\r\n        });\r\n    };\r\n    // handles dragging the note around the fridge\r\n    StickyNote.prototype.doTheDragThingy = function (event, tisMe) {\r\n        tisMe.style.backgroundColor = \"#ffebcc\";\r\n        var mouseStart = { x: event.clientX, y: event.clientY };\r\n        var divStart = { x: tisMe.offsetLeft, y: tisMe.offsetTop };\r\n        var delta = { x: mouseStart.x - divStart.x, y: mouseStart.y - divStart.y };\r\n        document.addEventListener(\"mousemove\", handleMove, true);\r\n        document.addEventListener(\"mouseup\", handleUp, true);\r\n        event.stopPropagation();\r\n        event.preventDefault();\r\n        function handleMove(e) {\r\n            var x = e.clientX - delta.x;\r\n            var y = e.clientY - delta.y;\r\n            tisMe.style.left = x.toString() + \"px\";\r\n            tisMe.style.top = y.toString() + \"px\";\r\n            this.position = { x: x, y: y };\r\n            e.stopPropagation();\r\n        }\r\n        function handleUp(e) {\r\n            document.removeEventListener(\"mousemove\", handleMove, true);\r\n            document.removeEventListener(\"mouseup\", handleUp, true);\r\n            tisMe.style.backgroundColor = \"papayawhip\";\r\n            e.stopPropagation();\r\n        }\r\n    };\r\n    // handles resizing the note\r\n    StickyNote.prototype.resizeMe = function (event, img, noteDiv) {\r\n        var mouseStart = { x: event.clientX, y: event.clientY };\r\n        var divStart = { x: img.offsetLeft, y: img.offsetTop };\r\n        var delta = { x: mouseStart.x - divStart.x, y: mouseStart.y - divStart.y };\r\n        document.addEventListener(\"mousemove\", handleMove, true);\r\n        document.addEventListener(\"mouseup\", handleUp, true);\r\n        event.stopPropagation();\r\n        event.preventDefault();\r\n        function handleMove(e) {\r\n            var x = e.clientX - delta.x + 20;\r\n            var y = e.clientY - delta.y + 20;\r\n            x = x <= 100 ? parseInt(noteDiv.style.width.replace(\"px\", \"\")) : x;\r\n            y = y <= 100 ? parseInt(noteDiv.style.height.replace(\"px\", \"\")) : y;\r\n            noteDiv.style.width = x.toString() + \"px\";\r\n            noteDiv.style.height = y.toString() + \"px\";\r\n            this.size = { x: x, y: y };\r\n            e.stopPropagation();\r\n        }\r\n        function handleUp(e) {\r\n            document.removeEventListener(\"mousemove\", handleMove, true);\r\n            document.removeEventListener(\"mouseup\", handleUp, true);\r\n            e.stopPropagation();\r\n        }\r\n    };\r\n    StickyNote.prototype.getSize = function () {\r\n        return this.size;\r\n    };\r\n    return StickyNote;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./scripts/classes/Note.ts?");

/***/ }),

/***/ "./scripts/classes/TinyMCEHandle.ts":
/*!******************************************!*\
  !*** ./scripts/classes/TinyMCEHandle.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TinyMCEHandle\": () => (/* binding */ TinyMCEHandle)\n/* harmony export */ });\nvar TinyMCEHandle = /** @class */ (function () {\r\n    function TinyMCEHandle() {\r\n    }\r\n    // public static readonly scriptSource : string = \"https://cdn.tiny.cloud/1/s50o1drzeq136sblv5lon7ji7r5esiq2o5ycwl1kwwypxa91/tinymce/5/tinymce.min.js\";\r\n    TinyMCEHandle.showEditForm = function (id) {\r\n        var wysiwyg = document.getElementById(\"wysiwyg\");\r\n        wysiwyg.style.display = \"flex\";\r\n        wysiwyg.dataset.editingNote = id.toString();\r\n        TinyMCEHandle.addButtonsToStatus();\r\n    };\r\n    TinyMCEHandle.hideEditForm = function (e) {\r\n        e.preventDefault();\r\n        document.getElementById(\"wysiwyg\").style.display = \"none\";\r\n        TinyMCEHandle.removeButtonsFromStatus();\r\n    };\r\n    TinyMCEHandle.addButtonsToStatus = function () {\r\n        var statusBar = document.getElementsByClassName(\"tox-statusbar__text-container\")[0];\r\n        var btnCancel = document.createElement(\"button\");\r\n        btnCancel.classList.add(\"btnTinyMCE\");\r\n        btnCancel.id = \"TinyMCECancel\";\r\n        statusBar.appendChild(btnCancel);\r\n        var btnSave = document.createElement(\"button\");\r\n        btnSave.classList.add(\"btnTinyMCE\");\r\n        btnSave.id = \"TinyMCESave\";\r\n        btnSave.type = \"submit\";\r\n        statusBar.appendChild(btnSave);\r\n        btnCancel.addEventListener(\"click\", TinyMCEHandle.hideEditForm);\r\n        // btnSave.addEventListener( \"click\", TinyMCEHandle.saveText )\r\n    };\r\n    TinyMCEHandle.removeButtonsFromStatus = function () {\r\n        var statusBar = document.getElementsByClassName(\"tox-statusbar__text-container\")[0];\r\n        var btnCancel = document.getElementById(\"TinyMCECancel\");\r\n        var btnSave = document.getElementById(\"TinyMCESave\");\r\n        statusBar.removeChild(btnCancel);\r\n        statusBar.removeChild(btnSave);\r\n    };\r\n    return TinyMCEHandle;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./scripts/classes/TinyMCEHandle.ts?");

/***/ }),

/***/ "./scripts/main.ts":
/*!*************************!*\
  !*** ./scripts/main.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Fridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Fridge */ \"./scripts/classes/Fridge.ts\");\n/* harmony import */ var _classes_DBHandle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/DBHandle */ \"./scripts/classes/DBHandle.ts\");\n\r\n\r\nvar urlParams = new URLSearchParams(window.location.search);\r\nvar a = urlParams.get(\"fridgeName\");\r\n// console.log( \"fridgeName: \" + fridgeName );\r\nvar fridge = new _classes_Fridge__WEBPACK_IMPORTED_MODULE_0__.Fridge(a);\r\ndocument.getElementById(\"newNote\").addEventListener(\"click\", function () {\r\n    // console.log( \"opachkii\" );\r\n    fridge.addStickyNote();\r\n    fridge.renderNotes(\"fridge\");\r\n});\r\ndocument.body.onload = function () {\r\n    // transfers 'fridge' to JS <------ I spent so much f*ing time on this\r\n    setListener(fridge);\r\n    // oh and adds some listeners I guess\r\n};\r\n// console.log( DBHandle.getFridgeData( fridge.name ) );\\\r\ndocument.getElementById(\"leBtn\").addEventListener(\"click\", function () {\r\n    // console.log( JSON.stringify( fridge ) );\r\n    _classes_DBHandle__WEBPACK_IMPORTED_MODULE_1__.DBHandle.saveFridge(fridge);\r\n});\r\n\n\n//# sourceURL=webpack:///./scripts/main.ts?");

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