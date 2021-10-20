"use strict";
exports.__esModule = true;
var StickyNote = /** @class */ (function () {
    function StickyNote(id, size, text) {
        if (size === void 0) { size = { width: 160, height: 160 }; }
        if (text === void 0) { text = "Hello there!"; }
        this.id = id;
        this.size = size;
        this.text = text;
    }
    return StickyNote;
}());
