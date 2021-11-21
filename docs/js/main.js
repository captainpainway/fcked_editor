/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){\"use strict\";function b(a,b){return\"undefined\"==typeof b?b={autoBom:!1}:\"object\"!=typeof b&&(console.warn(\"Deprecated: Expected third argument to be a object\"),b={autoBom:!b}),b.autoBom&&/^\\s*(?:text\\/\\S*|application\\/xml|\\S*\\/\\S*\\+xml)\\s*;.*charset\\s*=\\s*utf-8/i.test(a.type)?new Blob([\"\\uFEFF\",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open(\"GET\",a),d.responseType=\"blob\",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error(\"could not download file\")},d.send()}function d(a){var b=new XMLHttpRequest;b.open(\"HEAD\",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent(\"click\"))}catch(c){var b=document.createEvent(\"MouseEvents\");b.initMouseEvent(\"click\",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f=\"object\"==typeof window&&window.window===window?window:\"object\"==typeof self&&self.self===self?self:\"object\"==typeof __webpack_require__.g&&__webpack_require__.g.global===__webpack_require__.g?__webpack_require__.g:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||(\"object\"!=typeof window||window!==f?function(){}:\"download\"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement(\"a\");g=g||b.name||\"download\",j.download=g,j.rel=\"noopener\",\"string\"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target=\"_blank\")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:\"msSaveOrOpenBlob\"in navigator?function(f,g,h){if(g=g||f.name||\"download\",\"string\"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement(\"a\");i.href=f,i.target=\"_blank\",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open(\"\",\"_blank\"),g&&(g.document.title=g.document.body.innerText=\"downloading...\"),\"string\"==typeof b)return c(b,d,e);var h=\"application/octet-stream\"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\\/[\\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&\"undefined\"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,\"data:attachment/file;\"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});\n\n//# sourceMappingURL=FileSaver.min.js.map\n\n//# sourceURL=webpack://fcked_editor/./node_modules/file-saver/dist/FileSaver.min.js?");

/***/ }),

/***/ "./pkg/markdown_fckr_wasm.js":
/*!***********************************!*\
  !*** ./pkg/markdown_fckr_wasm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"process\": () => (/* binding */ process),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nlet wasm;\n\nlet WASM_VECTOR_LEN = 0;\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {\n        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nlet cachedTextEncoder = new TextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {\n        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n* @param {string} markdown\n* @returns {string}\n*/\nfunction process(markdown) {\n    try {\n        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n        var ptr0 = passStringToWasm0(markdown, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n        var len0 = WASM_VECTOR_LEN;\n        wasm.process(retptr, ptr0, len0);\n        var r0 = getInt32Memory0()[retptr / 4 + 0];\n        var r1 = getInt32Memory0()[retptr / 4 + 1];\n        return getStringFromWasm0(r0, r1);\n    } finally {\n        wasm.__wbindgen_add_to_stack_pointer(16);\n        wasm.__wbindgen_free(r0, r1);\n    }\n}\n\nasync function load(module, imports) {\n    if (typeof Response === 'function' && module instanceof Response) {\n        if (typeof WebAssembly.instantiateStreaming === 'function') {\n            try {\n                return await WebAssembly.instantiateStreaming(module, imports);\n\n            } catch (e) {\n                if (module.headers.get('Content-Type') != 'application/wasm') {\n                    console.warn(\"`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n\", e);\n\n                } else {\n                    throw e;\n                }\n            }\n        }\n\n        const bytes = await module.arrayBuffer();\n        return await WebAssembly.instantiate(bytes, imports);\n\n    } else {\n        const instance = await WebAssembly.instantiate(module, imports);\n\n        if (instance instanceof WebAssembly.Instance) {\n            return { instance, module };\n\n        } else {\n            return instance;\n        }\n    }\n}\n\nasync function init(input) {\n    if (typeof input === 'undefined') {\n        input = new URL(/* asset import */ __webpack_require__(/*! markdown_fckr_wasm_bg.wasm */ \"./pkg/markdown_fckr_wasm_bg.wasm\"), __webpack_require__.b);\n    }\n    const imports = {};\n\n\n    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {\n        input = fetch(input);\n    }\n\n\n\n    const { instance, module } = await load(await input, imports);\n\n    wasm = instance.exports;\n    init.__wbindgen_wasm_module = module;\n\n    return wasm;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n\n\n//# sourceURL=webpack://fcked_editor/./pkg/markdown_fckr_wasm.js?");

/***/ }),

/***/ "./pkg/markdown_fckr_wasm_bg.wasm":
/*!****************************************!*\
  !*** ./pkg/markdown_fckr_wasm_bg.wasm ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c31cd5833bf039edefeb.wasm\";\n\n//# sourceURL=webpack://fcked_editor/./pkg/markdown_fckr_wasm_bg.wasm?");

/***/ }),

/***/ "./src/html/js/about.js":
/*!******************************!*\
  !*** ./src/html/js/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"About\": () => (/* binding */ About)\n/* harmony export */ });\nclass About {\n    constructor() {\n        this.menu_background = document.querySelector(\"#menu_background\");\n        this.about_modal = document.querySelector('#about_modal');\n    }\n\n    init() {\n        this.menu_background.addEventListener('click', () => {\n            this.closeAboutModal();\n        });\n        document.addEventListener('keydown', e => {\n            if (e.key === 'Escape') {\n                this.closeAboutModal();\n            }\n        });\n        this.openAboutModal();\n    }\n\n    closeAboutModal() {\n        this.about_modal.dataset.open = \"false\";\n        this.about_modal.setAttribute('aria-hidden', 'true');\n        this.menu_background.style.display = \"none\";\n    }\n\n    openAboutModal() {\n        this.about_modal.dataset.open = \"true\";\n        this.about_modal.setAttribute('aria-hidden', 'false');\n        this.menu_background.style.display = \"block\";\n    }\n}\n\n//# sourceURL=webpack://fcked_editor/./src/html/js/about.js?");

/***/ }),

/***/ "./src/html/js/cheatsheet.js":
/*!***********************************!*\
  !*** ./src/html/js/cheatsheet.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cheatsheet\": () => (/* binding */ Cheatsheet)\n/* harmony export */ });\nclass Cheatsheet {\n    constructor() {\n        this.menu_background = document.querySelector(\"#menu_background\");\n        this.cheatsheet_modal = document.querySelector('#cheatsheet_modal');\n    }\n\n    init() {\n        this.menu_background.addEventListener('click', () => {\n            this.closeCheatsheetModal();\n        });\n        document.addEventListener('keydown', e => {\n            if (e.key === 'Escape') {\n                this.closeCheatsheetModal();\n            }\n        });\n        this.openCheatsheetModal();\n    }\n\n    closeCheatsheetModal() {\n        this.cheatsheet_modal.dataset.open = \"false\";\n        this.cheatsheet_modal.setAttribute('aria-hidden', 'true');\n        this.menu_background.style.display = \"none\";\n    }\n\n    openCheatsheetModal() {\n        this.cheatsheet_modal.dataset.open = \"true\";\n        this.cheatsheet_modal.setAttribute('aria-hidden', 'false');\n        this.menu_background.style.display = \"block\";\n    }\n}\n\n//# sourceURL=webpack://fcked_editor/./src/html/js/cheatsheet.js?");

/***/ }),

/***/ "./src/html/js/editor.js":
/*!*******************************!*\
  !*** ./src/html/js/editor.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Editor\": () => (/* binding */ Editor)\n/* harmony export */ });\n/* harmony import */ var _pkg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pkg */ \"./pkg/markdown_fckr_wasm.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/html/js/menu.js\");\n/* harmony import */ var _toolbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar.js */ \"./src/html/js/toolbar.js\");\n\n\n\n\nclass Editor {\n    constructor() {\n        this.toolbar = document.querySelector(\"#toolbar\");\n        this.editor = document.querySelector(\"#input\");\n        this.menu = document.querySelector(\"#menu\");\n        this.preview = document.querySelector(\"#preview\");\n    }\n\n    init() {\n        const menu = new _menu_js__WEBPACK_IMPORTED_MODULE_0__.Menu(this.menu, this.editor, this.preview);\n        menu.init();\n\n        const toolbar = new _toolbar_js__WEBPACK_IMPORTED_MODULE_1__.Toolbar(this.toolbar, this.editor, menu);\n        toolbar.init();\n\n        this.processMarkdown(this.editor);\n    }\n\n    processMarkdown(editor) {\n        (0,_pkg__WEBPACK_IMPORTED_MODULE_2__.default)().then(() => {\n            if (editor.value) {\n                this.preview.innerHTML = (0,_pkg__WEBPACK_IMPORTED_MODULE_2__.process)(editor.value);\n            }\n            const updateText = this.debounce(e => {\n                this.preview.innerHTML = (0,_pkg__WEBPACK_IMPORTED_MODULE_2__.process)(e.target.value);\n            }, 100); // Debounce a bit b/c processing large amounts of text can be slower.\n            editor.addEventListener(\"input\", updateText);\n            editor.addEventListener(\"update_preview\", updateText);\n        });\n    }\n\n    debounce(func, wait) {\n        let timeout = null;\n        return (...args) => {\n            clearTimeout(timeout);\n            timeout = setTimeout(() => {func.apply(this, args);}, wait);\n        };\n    }\n}\n\n//# sourceURL=webpack://fcked_editor/./src/html/js/editor.js?");

/***/ }),

/***/ "./src/html/js/image.js":
/*!******************************!*\
  !*** ./src/html/js/image.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Image\": () => (/* binding */ Image)\n/* harmony export */ });\n/* harmony import */ var _text_parsing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text_parsing.js */ \"./src/html/js/text_parsing.js\");\n\n\nclass Image {\n    constructor(editor) {\n        this.editor = editor;\n        this.menu_background = document.querySelector(\"#menu_background\");\n        this.image_modal = document.querySelector('#image_modal');\n        this.cancel = document.querySelector('#cancel_image');\n        this.save = document.querySelector('#save_image');\n        this.image_url = document.querySelector('#image_url');\n        this.image_description = document.querySelector('#image_description');\n    }\n\n    init() {\n        this.menu_background.addEventListener('click', () => {\n            this.closeImageModal();\n        });\n        this.cancel.addEventListener('click', () => {\n            this.closeImageModal();\n        });\n        this.save.addEventListener('click', () => {\n            this.addImage();\n            this.closeImageModal();\n        });\n        this.image_url.addEventListener('keydown', e => {\n            if (e.key === 'Enter') {\n                e.preventDefault();\n                this.addImage();\n                this.closeImageModal();\n            }\n        });\n        this.image_description.addEventListener('keydown', e => {\n            if (e.key === 'Enter') {\n                e.preventDefault();\n                this.addImage();\n                this.closeImageModal();\n            }\n        });\n        document.addEventListener('keydown', e => {\n            if (e.key === 'Escape') {\n                this.closeImageModal();\n            }\n        });\n        this.image_url.value = '';\n        this.image_description.value = '';\n        this.openImageModal();\n    }\n\n    closeImageModal() {\n        this.image_modal.dataset.open = \"false\";\n        this.image_modal.setAttribute('aria-hidden', 'true');\n        this.menu_background.style.display = \"none\";\n    }\n\n    openImageModal() {\n        this.image_modal.dataset.open = \"true\";\n        this.image_modal.setAttribute('aria-hidden', 'false');\n        this.menu_background.style.display = \"block\";\n        this.image_url.focus();\n\n        let {start, end, text, before, after} = (0,_text_parsing_js__WEBPACK_IMPORTED_MODULE_0__.getSelection)(this.editor);\n        if (text !== \"\") {\n            this.image_description.value = text;\n        }\n    }\n\n    addImage() {\n        let {start, end, text, before, after} = (0,_text_parsing_js__WEBPACK_IMPORTED_MODULE_0__.getSelection)(this.editor);\n        const image = \"![\" + this.image_description.value + \"](\" + this.image_url.value + \")\";\n        this.editor.value = before + image + after;\n        (0,_text_parsing_js__WEBPACK_IMPORTED_MODULE_0__.refresh)(this.editor);\n        this.editor.focus();\n        this.editor.setSelectionRange(start, end + image.length);\n    }\n}\n\n//# sourceURL=webpack://fcked_editor/./src/html/js/image.js?");

/***/ }),

/***/ "./src/html/js/index.js":
/*!******************************!*\
  !*** ./src/html/js/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.js */ \"./src/html/js/editor.js\");\n\n\nconst editor = new _editor_js__WEBPACK_IMPORTED_MODULE_0__.Editor();\neditor.init();\n\n//# sourceURL=webpack://fcked_editor/./src/html/js/index.js?");

/***/ }),

/***/ "./src/html/js/link.js":
/*!*****************************!*\
  !*** ./src/html/js/link.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Link\": () => (/* binding */ Link)\n/* harmony export */ });\n/* harmony import */ var _text_parsing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text_parsing.js */ \"./src/html/js/text_parsing.js\");\n\n\nclass Link {\n    constructor(editor) {\n        this.editor = editor;\n        this.menu_background = document.querySelector(\"#menu_background\");\n        this.link_modal = document.querySelector('#link_modal');\n        this.cancel = document.querySelector('#cancel_link');\n        this.save = document.querySelector('#save_link');\n        this.link_url = document.querySelector('#link_url');\n        this.link_text = document.querySelector('#link_text');\n    }\n\n    init() {\n        this.menu_background.addEventListener('click', () => {\n            this.closeLinkModal();\n        });\n        this.cancel.addEventListener('click', () => {\n            this.closeLinkModal();\n        });\n        this.save.addEventListener('click', () => {\n            this.addLink();\n            this.closeLinkModal();\n        });\n        this.link_url.addEventListener('keydown', e => {\n            if (e.key === 'Enter') {\n                e.preventDefault();\n                this.addLink();\n                this.closeLinkModal();\n            }\n        });\n        this.link_text.addEventListener('keydown', e => {\n            if (e.key === 'Enter') {\n                e.preventDefault();\n                this.addLink();\n                this.closeLinkModal();\n            }\n        });\n        document.addEventListener('keydown', e => {\n            if (e.key === 'Escape') {\n                this.closeLinkModal();\n            }\n        });\n        this.link_url.value = '';\n        this.link_text.value = '';\n        this.openLinkModal();\n    }\n\n    closeLinkModal() {\n        this.link_modal.dataset.open = \"false\";\n        this.link_modal.setAttribute('aria-hidden', 'true');\n        this.menu_background.style.display = \"none\";\n    }\n\n    openLinkModal() {\n        this.link_modal.dataset.open = \"true\";\n        this.link_modal.setAttribute('aria-hidden', 'false');\n        this.menu_background.style.display = \"block\";\n        this.link_url.focus();\n\n        let {start, end, text, before, after} = (0,_text_parsing_js__WEBPACK_IMPORTED_MODULE_0__.getSelection)(this.editor);\n        if (text !== \"\") {\n            this.link_text.value = text;\n        }\n    }\n\n    addLink() {\n        let {start, end, text, before, after} = (0,_text_parsing_js__WEBPACK_IMPORTED_MODULE_0__.getSelection)(this.editor);\n        const link = \"[\" + this.link_text.value + \"](\" + this.link_url.value + \")\";\n        this.editor.value = before + link + after;\n        (0,_text_parsing_js__WEBPACK_IMPORTED_MODULE_0__.refresh)(this.editor);\n        this.editor.focus();\n        this.editor.setSelectionRange(start, end + link.length);\n    }\n}\n\n//# sourceURL=webpack://fcked_editor/./src/html/js/link.js?");

/***/ }),

/***/ "./src/html/js/menu.js":
/*!*****************************!*\
  !*** ./src/html/js/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Menu\": () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ \"./node_modules/file-saver/dist/FileSaver.min.js\");\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ \"./src/html/js/about.js\");\n/* harmony import */ var _cheatsheet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cheatsheet.js */ \"./src/html/js/cheatsheet.js\");\n\n\n\n\nclass Menu {\n    constructor(menu, editor, preview) {\n        this.menu = menu;\n        this.editor = editor;\n        this.preview = preview;\n        this.menu_background = document.querySelector(\"#menu_background\");\n        this.open_markdown_file = document.querySelector(\"#open_markdown\");\n    }\n\n    init() {\n        this.menu_background.addEventListener('click', () => {\n            this.closeMenu();\n        });\n\n        this.open_markdown_file.addEventListener('change', () => {\n            this.openMarkdownFile();\n        });\n\n        [...this.menu.querySelectorAll('button')].map(ele => {\n            switch (ele.id) {\n                case 'clear':\n                    ele.addEventListener('click', () => {\n                        this.clearEditor();\n                        this.closeMenu();\n                    })\n                    break;\n                case 'open':\n                    ele.addEventListener('click', () => {\n                        this.open_markdown_file.click();\n                        this.closeMenu();\n                    });\n                    break;\n                case 'save_markdown':\n                    ele.addEventListener('click', () => {\n                        this.saveMarkdownFile();\n                        this.closeMenu();\n                    });\n                    break;\n                case 'save_html':\n                    ele.addEventListener('click', () => {\n                        this.saveHTMLFile();\n                        this.closeMenu();\n                    });\n                    break;\n                case 'about':\n                    ele.addEventListener('click', () => {\n                        this.openAbout();\n                        this.menu.dataset.open = \"false\";\n                        this.menu.setAttribute('aria-hidden', 'true');\n                    });\n                    break;\n                case 'markdown':\n                    ele.addEventListener('click', () => {\n                        this.openCheatsheet();\n                        this.menu.dataset.open = \"false\";\n                        this.menu.setAttribute('aria-hidden', 'true');\n                    });\n                    break;\n                default:\n                    ele.addEventListener('click', () => {\n                        this.closeMenu();\n                    });\n                    break;\n            }\n        });\n    }\n\n    clearEditor() {\n        this.editor.value = '';\n        this.preview.innerHTML = '';\n    }\n\n    closeMenu() {\n        this.menu.dataset.open = \"false\";\n        this.menu.setAttribute('aria-hidden', 'true');\n        this.menu_background.style.display = \"none\";\n    }\n\n    openMenu() {\n        this.menu.dataset.open = \"true\";\n        this.menu.setAttribute('aria-hidden', 'false');\n        this.menu_background.style.display = \"block\";\n    }\n\n    openMarkdownFile() {\n        const reader = new FileReader();\n        reader.onload = (e) => {\n            this.editor.value = e.target.result;\n\n            const event = new Event('update_preview');\n            this.editor.dispatchEvent(event);\n        };\n        reader.readAsText(this.open_markdown_file.files[0]);\n    }\n\n    saveMarkdownFile() {\n        const blob = new Blob([this.editor.value], {type: \"text/markdown; charset=utf-8\"});\n        (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(blob);\n    }\n\n    saveHTMLFile() {\n        const blob = new Blob([this.preview.innerHTML], {type: \"text/html; charset=utf-8\"});\n        (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(blob);\n    }\n\n    openAbout() {\n        const about_modal = new _about_js__WEBPACK_IMPORTED_MODULE_1__.About();\n        about_modal.init();\n    }\n\n    openCheatsheet() {\n        const cheatsheet_modal = new _cheatsheet_js__WEBPACK_IMPORTED_MODULE_2__.Cheatsheet();\n        cheatsheet_modal.init();\n    }\n}\n\n//# sourceURL=webpack://fcked_editor/./src/html/js/menu.js?");

/***/ }),

/***/ "./src/html/js/text_parsing.js":
/*!*************************************!*\
  !*** ./src/html/js/text_parsing.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSelection\": () => (/* binding */ getSelection),\n/* harmony export */   \"refresh\": () => (/* binding */ refresh)\n/* harmony export */ });\nfunction getSelection(editor) {\n    const selectionStart = editor.selectionStart;\n    const selectionEnd = editor.selectionEnd;\n    const before = editor.value.substring(0, selectionStart);\n    const selectedText = editor.value.substring(selectionStart, selectionEnd);\n    const after = editor.value.substring(selectionEnd);\n    return {\n        start: selectionStart,\n        end: selectionEnd,\n        text: selectedText,\n        before: before,\n        after: after\n    };\n}\n\nfunction refresh(editor) {\n    const event = new Event('update_preview');\n    editor.dispatchEvent(event);\n}\n\n\n//# sourceURL=webpack://fcked_editor/./src/html/js/text_parsing.js?");

/***/ }),

/***/ "./src/html/js/toolbar.js":
/*!********************************!*\
  !*** ./src/html/js/toolbar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Toolbar\": () => (/* binding */ Toolbar)\n/* harmony export */ });\n/* harmony import */ var _link_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./link.js */ \"./src/html/js/link.js\");\n/* harmony import */ var _image_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image.js */ \"./src/html/js/image.js\");\n/* harmony import */ var _text_parsing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text_parsing.js */ \"./src/html/js/text_parsing.js\");\n\n\n\n\nclass Toolbar {\n    constructor(toolbar, editor, menu) {\n        this.toolbar = toolbar;\n        this.editor = editor;\n        this.menu = menu;\n    }\n\n    init() {\n        [...this.toolbar.querySelectorAll('button')].map(ele => {\n            switch (ele.id) {\n                case 'menu_btn':\n                    ele.addEventListener('click', () => {\n                        this.menu.menu.dataset.open === \"true\" ? this.menu.closeMenu() : this.menu.openMenu();\n                    });\n                    break;\n                case 'bold':\n                    ele.addEventListener('click', () => {\n                        this.doBold();\n                    });\n                    break;\n                case 'italic':\n                    ele.addEventListener('click', () => {\n                        this.doItalic();\n                    });\n                    break;\n                case 'heading':\n                    ele.addEventListener('click', () => {\n                        this.addHeader();\n                    });\n                    break;\n                case 'bullet_list':\n                    ele.addEventListener('click', () => {\n                        this.bulletList();\n                    });\n                    break;\n                case 'number_list':\n                    ele.addEventListener('click', () => {\n                        this.numberedList();\n                    });\n                    break;\n                case 'quote':\n                    ele.addEventListener('click', () => {\n                        this.addQuote();\n                    });\n                    break;\n                case 'code':\n                    ele.addEventListener('click', () => {\n                        this.addCode();\n                    });\n                    break;\n                case 'link':\n                    ele.addEventListener('click', () => {\n                        this.addLink();\n                    });\n                    break;\n                case 'image':\n                    ele.addEventListener('click', () => {\n                        this.addImage();\n                    });\n                    break;\n                default:\n                    break;\n            }\n        });\n    }\n\n    doBold() {\n        const {start, end, text, before, after} = (0,_text_parsing_js__WEBPACK_IMPORTED_MODULE_2__.getSelection)(this.editor);\n        this.editor.value = before + \"**\" + text + \"**\" + after;\n        (0,_text_parsing_js__WEBPACK_IMPORTED_MODULE_2__.refresh)(this.editor);\n        this.editor.focus();\n        this.editor.setSelectionRange(start + 2, end + 2);\n    }\n\n    doItalic() {\n        const {start, end, text, before, after} = (0,_text_parsing_js__WEBPACK_IMPORTED_MODULE_2__.getSelection)(this.editor);\n        this.editor.value = before + \"*\" + text + \"*\" + after;\n        (0,_text_parsing_js__WEBPACK_IMPORTED_MODULE_2__.refresh)(this.editor);\n        this.editor.focus();\n        this.editor.setSelectionRange(start + 1, end + 1);\n    }\n\n    addHeader() {\n        let {start, end, text, before, after} = (0,_text_parsing_js__WEBPACK_IMPORTED_MODULE_2__.getSelection)(this.editor);\n\n        // If there's a space between the previous # and the text, don't add another space.\n        let offset = 2;\n        const precedingCharacter = start > 0 ? before.substring(before.length - 1) : \"\";\n        if (precedingCharacter === \" \") {\n            before = this.editor.value.substring(0, start - 1);\n            offset = 1;\n        }\n\n        this.editor.value = before + \"# \" + text + after;\n        (0,_text_parsing_js__WEBPACK_IMPORTED_MODULE_2__.refresh)(this.editor);\n        this.editor.focus();\n        this.editor.setSelectionRange(start + offset, end + offset);\n    }\n\n    bulletList() {\n        let {start, end, text, before, after} = (0,_text_parsing_js__WEBPACK_IMPORTED_MODULE_2__.getSelection)(this.editor);\n        let offset = 0;\n        const list = text.split(\"\\n\").map(line => {\n            offset += 2;\n            return \"- \" + line;\n        }).join(\"\\n\");\n        this.editor.value = before + list + after;\n        (0,_text_parsing_js__WEBPACK_IMPORTED_MODULE_2__.refresh)(this.editor);\n        this.editor.focus();\n        this.editor.setSelectionRange(start, end + offset);\n    }\n\n    numberedList() {\n        let {start, end, text, before, after} = (0,_text_parsing_js__WEBPACK_IMPORTED_MODULE_2__.getSelection)(this.editor);\n        let offset = 0;\n        let numeral = 0;\n        const list = text.split(\"\\n\").map(line => {\n            numeral += 1;\n            offset += 3;\n            return numeral + \". \" + line;\n        }).join(\"\\n\");\n        this.editor.value = before + list + after;\n        (0,_text_parsing_js__WEBPACK_IMPORTED_MODULE_2__.refresh)(this.editor);\n        this.editor.focus();\n        this.editor.setSelectionRange(start, end + offset);\n    }\n\n    addQuote() {\n        let {start, end, text, before, after} = (0,_text_parsing_js__WEBPACK_IMPORTED_MODULE_2__.getSelection)(this.editor);\n        let offset = 0;\n        const list = text.split(\"\\n\").map(line => {\n            offset += 2;\n            return \"> \" + line;\n        }).join(\"\\n\");\n        this.editor.value = before + list + after;\n        (0,_text_parsing_js__WEBPACK_IMPORTED_MODULE_2__.refresh)(this.editor);\n        this.editor.focus();\n        this.editor.setSelectionRange(start, end + offset);\n    }\n\n    addCode() {\n        let {start, end, text, before, after} = (0,_text_parsing_js__WEBPACK_IMPORTED_MODULE_2__.getSelection)(this.editor);\n        let offset = 0;\n        const list = text.split(\"\\n\").map(line => {\n            offset += 4;\n            return \"    \" + line;\n        }).join(\"\\n\");\n        this.editor.value = before + list + after;\n        (0,_text_parsing_js__WEBPACK_IMPORTED_MODULE_2__.refresh)(this.editor);\n        this.editor.focus();\n        this.editor.setSelectionRange(start, end + offset);\n    }\n\n    addLink() {\n        const link_modal = new _link_js__WEBPACK_IMPORTED_MODULE_0__.Link(this.editor);\n        link_modal.init();\n    }\n\n    addImage() {\n        const image_modal = new _image_js__WEBPACK_IMPORTED_MODULE_1__.Image(this.editor);\n        image_modal.init();\n    }\n}\n\n//# sourceURL=webpack://fcked_editor/./src/html/js/toolbar.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/html/js/index.js");
/******/ 	
/******/ })()
;