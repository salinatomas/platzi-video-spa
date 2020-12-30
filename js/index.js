/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 37:0-14 */
/***/ ((module) => {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n\nmodule.exports = _asyncToGenerator;\n\n//# sourceURL=webpack://platzi-video-spa/./node_modules/@babel/runtime/helpers/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/regenerator-runtime/runtime.js .__esModule */
/*! other exports [maybe provided (runtime-defined)] [no usage info] -> ./node_modules/regenerator-runtime/runtime.js */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n\n\n//# sourceURL=webpack://platzi-video-spa/./node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ \"./src/styles/styles.scss\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n\n\nwindow.addEventListener('load', _routes__WEBPACK_IMPORTED_MODULE_1__.default);\nwindow.addEventListener('hashchange', _routes__WEBPACK_IMPORTED_MODULE_1__.default);\n\n//# sourceURL=webpack://platzi-video-spa/./src/index.js?");

/***/ }),

/***/ "./src/pages/Error404.js":
/*!*******************************!*\
  !*** ./src/pages/Error404.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar Error404 = function Error404() {\n  var view = \"\\n    <div class=\\\"Error404\\\">\\n      <h2>Error 404</h2>\\n    </div>\\n  \";\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error404);\n\n//# sourceURL=webpack://platzi-video-spa/./src/pages/Error404.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _public_images_loader_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/images/loader.gif */ \"./public/images/loader.gif\");\n\n\nvar Home = function Home() {\n  var view = \"\\n    <div class=\\\"movies\\\">\\n      <section class=\\\"movie-list\\\">\\n        <h3 class=\\\"movie-list__topic\\\">Fights everywhere</h3>\\n        <h2 class=\\\"movie-list__title\\\">Action</h2>\\n        <section class=\\\"carousel\\\" id=\\\"action\\\">\\n          <img src=\\\"\".concat(_public_images_loader_gif__WEBPACK_IMPORTED_MODULE_0__.default, \"\\\" width=\\\"50\\\" height=\\\"50\\\" alt=\\\"loader\\\">\\n        </section>\\n      </section>\\n      <section class=\\\"movie-list\\\">\\n        <h3 class=\\\"movie-list__topic\\\">Tension everywhere</h3>\\n        <h2 class=\\\"movie_list__title\\\">Drama</h2>\\n        <section class=\\\"carousel\\\" id=\\\"drama\\\">\\n          <img src=\\\"\").concat(_public_images_loader_gif__WEBPACK_IMPORTED_MODULE_0__.default, \"\\\" width=\\\"50\\\" height=\\\"50\\\" alt=\\\"loader\\\">\\n        </section>\\n      </section>\\n      <section class=\\\"movie-list\\\">\\n        <h3 class=\\\"movie-list__topic\\\">Anime everywhere</h3>\\n        <h2 class=\\\"movie_list__title\\\">Animation</h2>\\n        <section class=\\\"carousel\\\" id=\\\"animation\\\">\\n          <img src=\\\"\").concat(_public_images_loader_gif__WEBPACK_IMPORTED_MODULE_0__.default, \"\\\" width=\\\"50\\\" height=\\\"50\\\" alt=\\\"\\\">\\n        </section>\\n      </section>\\n      <section class=\\\"movie-list\\\">\\n        <h3 class=\\\"movie-list__topic\\\">Fear everywhere</h3>\\n        <h2 class=\\\"movie_list__title\\\">Horror</h2>\\n        <section class=\\\"carousel\\\" id=\\\"horror\\\">\\n          <img src=\\\"\").concat(_public_images_loader_gif__WEBPACK_IMPORTED_MODULE_0__.default, \"\\\" width=\\\"50\\\" height=\\\"50\\\" alt=\\\"\\\">\\n        </section>\\n      </section>\\n    </div>\\n  \");\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://platzi-video-spa/./src/pages/Home.js?");

/***/ }),

/***/ "./src/pages/Movie.js":
/*!****************************!*\
  !*** ./src/pages/Movie.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_getHash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getHash */ \"./src/utils/getHash.js\");\n/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getData */ \"./src/utils/getData.js\");\n/* harmony import */ var _templates_Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/Player */ \"./src/templates/Player.js\");\n/* harmony import */ var _templates_Suggestions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Suggestions */ \"./src/templates/Suggestions.js\");\n/* harmony import */ var _templates_Comments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../templates/Comments */ \"./src/templates/Comments.js\");\n\n\n\n\n\n\n\nvar BASE_API = 'https://yts.mx/api/v2/';\n\nvar Movie = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var id, _yield$getData, movie, _yield$getData2, suggestions, friends, view;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            id = (0,_utils_getHash__WEBPACK_IMPORTED_MODULE_2__.default)();\n            _context.next = 3;\n            return (0,_utils_getData__WEBPACK_IMPORTED_MODULE_3__.default)(\"\".concat(BASE_API, \"movie_details.json?movie_id=\").concat(id));\n\n          case 3:\n            _yield$getData = _context.sent;\n            movie = _yield$getData.data.movie;\n            _context.next = 7;\n            return (0,_utils_getData__WEBPACK_IMPORTED_MODULE_3__.default)(\"\".concat(BASE_API, \"movie_suggestions.json?movie_id=\").concat(id));\n\n          case 7:\n            _yield$getData2 = _context.sent;\n            suggestions = _yield$getData2.data.movies;\n            friends = JSON.parse(window.sessionStorage.getItem('friendsList'));\n            view = \"\\n    <section class=\\\"player\\\">\\n      \".concat((0,_templates_Player__WEBPACK_IMPORTED_MODULE_4__.default)(movie), \"\\n    </section>\\n\\n    <section class=\\\"comunity\\\">\\n      \").concat((0,_templates_Suggestions__WEBPACK_IMPORTED_MODULE_5__.default)(suggestions), \"\\n      \").concat((0,_templates_Comments__WEBPACK_IMPORTED_MODULE_6__.default)(friends), \"\\n    </section>\\n  \");\n            return _context.abrupt(\"return\", view);\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function Movie() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Movie);\n\n//# sourceURL=webpack://platzi-video-spa/./src/pages/Movie.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Home */ \"./src/pages/Home.js\");\n/* harmony import */ var _pages_Movie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Movie */ \"./src/pages/Movie.js\");\n/* harmony import */ var _pages_Error404__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/Error404 */ \"./src/pages/Error404.js\");\n/* harmony import */ var _templates_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Header */ \"./src/templates/Header.js\");\n/* harmony import */ var _templates_Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../templates/Sidebar */ \"./src/templates/Sidebar.js\");\n/* harmony import */ var _utils_getHash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getHash */ \"./src/utils/getHash.js\");\n/* harmony import */ var _utils_resolveRoutes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/resolveRoutes */ \"./src/utils/resolveRoutes.js\");\n/* harmony import */ var _utils_share__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/share */ \"./src/utils/share.js\");\n/* harmony import */ var _utils_renderMovies__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/renderMovies */ \"./src/utils/renderMovies.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar routes = {\n  '/': _pages_Home__WEBPACK_IMPORTED_MODULE_2__.default,\n  '/:id': _pages_Movie__WEBPACK_IMPORTED_MODULE_3__.default,\n  '/contact': function contact() {\n    return '<h1>Contact</h1>';\n  }\n};\n\nvar router = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var $header, $sidebar, $content, hash, route, render, $desciption, $shareButton, $buttonMenu, $buttonMenuClose, $modal, $overlay, $user;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            $header =  false || document.getElementById('header');\n            $sidebar =  false || document.getElementById('sidebar');\n            $content =  false || document.getElementById('main-content');\n            $header.innerHTML = (0,_templates_Header__WEBPACK_IMPORTED_MODULE_5__.default)();\n            _context.next = 6;\n            return (0,_templates_Sidebar__WEBPACK_IMPORTED_MODULE_6__.default)();\n\n          case 6:\n            $sidebar.innerHTML = _context.sent;\n            hash = (0,_utils_getHash__WEBPACK_IMPORTED_MODULE_7__.default)();\n            route = (0,_utils_resolveRoutes__WEBPACK_IMPORTED_MODULE_8__.default)(hash);\n            render = routes[route] ? routes[route] : _pages_Error404__WEBPACK_IMPORTED_MODULE_4__.default;\n            _context.next = 12;\n            return render();\n\n          case 12:\n            $content.innerHTML = _context.sent;\n\n            if (render === routes['/']) {\n              (0,_utils_renderMovies__WEBPACK_IMPORTED_MODULE_10__.default)();\n            }\n\n            if (render === routes['/:id']) {\n              $desciption =  false || document.getElementById('description-open');\n              $desciption.addEventListener('click', function () {\n                $desciption.classList.toggle('open');\n              });\n              $shareButton =  false || document.getElementById('share');\n              (0,_utils_share__WEBPACK_IMPORTED_MODULE_9__.default)($shareButton);\n            } // _____burgerMenus\n\n\n            $buttonMenu =  false || document.getElementById('burger-menu');\n            $buttonMenuClose =  false || document.getElementById('burger-menu-close');\n            $sidebar.classList.remove('is-active'); // Default\n\n            $buttonMenuClose.classList.remove('is-active'); // Default\n\n            $buttonMenu.addEventListener('click', function () {\n              $sidebar.classList.add('is-active');\n              $buttonMenuClose.classList.add('is-active');\n            });\n            $buttonMenuClose.addEventListener('click', function () {\n              $sidebar.classList.remove('is-active');\n              $buttonMenuClose.classList.remove('is-active');\n            }); // _____Modal & Overlay \n\n            $modal =  false || document.getElementById('modal');\n            $overlay =  false || document.getElementById('overlay'); // _____userAlert\n\n            $user =  false || document.getElementById('user');\n            $user.addEventListener('click', function (event) {}); // _____friendsAlert\n\n          case 25:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function router() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://platzi-video-spa/./src/routes/index.js?");

/***/ }),

/***/ "./src/templates/Comments.js":
/*!***********************************!*\
  !*** ./src/templates/Comments.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar Comments = function Comments(data) {\n  var view = \"\\n    <div class=\\\"comments\\\">\\n      <h3 class=\\\"comments__title\\\">Comments</h3>\\n      <div class=\\\"comments__add\\\">\\n        <img src=\\\"https://lh3.googleusercontent.com/ogw/ADGmqu_TQZWf8EPKmJjNoSCdCodQUjek7k_gNJCBAPi_=s32-c-mo\\\" alt=\\\"user\\\">\\n        <input type=\\\"text\\\" placeholder=\\\"Add a comment\\\">\\n      </div>\\n      <div class=\\\"comments__review\\\">\\n      \".concat(data.map(function (user) {\n    return \"\\n        <div class=\\\"comments__review-item\\\">\\n          <img src=\\\"\".concat(user.picture.thumbnail, \"\\\" alt=\\\"\\\">\\n          <div class=\\\"comments__details\\\">\\n            <h3>\").concat(user.name.first, \" \").concat(user.name.last, \"</h3>\\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, atque.</p>\\n          </div>\\n        </div>\\n      \");\n  }).join(''), \"\\n    </div>\\n  \");\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comments);\n\n//# sourceURL=webpack://platzi-video-spa/./src/templates/Comments.js?");

/***/ }),

/***/ "./src/templates/Header.js":
/*!*********************************!*\
  !*** ./src/templates/Header.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar Header = function Header() {\n  var placeholder = \"Buscar un artista o tema favorito\";\n  var view = \"\\n    <div class=\\\"menu\\\">\\n      <button class=\\\"burger-menu\\\" id=\\\"burger-menu\\\">\\n        <i class=\\\"fas fa-bars\\\"></i>\\n      </button>\\n    </div>\\n    <div class=\\\"browser\\\">\\n      <form class=\\\"browser__form\\\" id=\\\"form\\\" action=\\\"\\\">\\n        <input type=\\\"text\\\" name=\\\"name\\\" placeholder=\\\"Search a movie...\\\" />\\n      </form>\\n    </div>\\n    <div class=\\\"user\\\" id=\\\"user\\\">\\n      <h3 class=\\\"user__name\\\">Tom\\xE1s Salina</h3>\\n      <figure class=\\\"user__image\\\">\\n        <img src=\\\"https://lh3.googleusercontent.com/ogw/ADGmqu8SC2i-Di5--DhTeJFEwNr35TQxEQ0MpNmSLob79A=s32-c-mo\\\" alt=\\\"imagen del usuario\\\"/>\\n      </figure>\\n      <i class=\\\"user__icon fas fa-sort-down user-arrow\\\" aria-hidden=\\\"true\\\"></i>\\n    </div>\\n  \";\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://platzi-video-spa/./src/templates/Header.js?");

/***/ }),

/***/ "./src/templates/Player.js":
/*!*********************************!*\
  !*** ./src/templates/Player.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar Player = function Player(movie) {\n  var videoTemplate = function videoTemplate(data) {\n    if (data.yt_trailer_code) {\n      return \"<iframe src=\\\"https://www.youtube.com/embed/\".concat(data.yt_trailer_code, \"\\\" frameborder=\\\"0\\\" allow=\\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\\\" allowfullscreen></iframe>\");\n    } else {\n      return \"<img src=\\\"\".concat(data.background_image, \"\\\" />\");\n    }\n  };\n\n  var view = \"\\n    <div class=\\\"player__video\\\">\\n      \".concat(videoTemplate(movie), \"\\n    </div>\\n\\n    <div class=\\\"player__info\\\">\\n      <div class=\\\"player__info-video\\\">\\n        <div class=\\\"info-header-container\\\" id=\\\"description-open\\\">\\n          <h2>\").concat(movie.title_long, \"</h2>\\n          <i class=\\\"fas fa-sort-down user-arrow\\\" aria-hidden=\\\"true\\\"></i>\\n          <p>\").concat(movie.download_count, \"+ downloads</p>\\n        </div>\\n        <div class=\\\"info-description-container\\\">\\n          <div class=\\\"rating\\\">\\n            <small>Last uploaded: \").concat(movie.date_uploaded ? movie.date_uploaded.split(' ')[0] : movie.torrents[0].date_uploaded.split(' ')[0], \"</small>\\n            <small>\").concat(movie.rating, \"<i class=\\\"fas fa-star\\\"></i></small>\\n          </div>\\n          <p>\").concat(movie.description_intro, \"</p>\\n        </div>\\n      </div>\\n\\n      <div class=\\\"player__info-options\\\">\\n        <div class=\\\"player__info-options-manage\\\">\\n          <button class=\\\"manage__button\\\">Agrega a mi lista</button>\\n          <button id=\\\"share\\\" class=\\\"manage__button--secondary\\\">\\n            <i class=\\\"fas fa-share\\\" aria-hidden=\\\"true\\\"></i>\\n            <span>Share</span>\\n          </button>\\n          <button id=\\\"download\\\" class=\\\"manage__button--secondary\\\">\\n            <i class=\\\"fas fa-cloud-download-alt\\\" aria-hidden=\\\"true\\\"></i>\\n            <span>Download</span>\\n          </button>\\n        </div>\\n        <div class=\\\"player__info-options-category\\\">\\n          <ul>\\n            \").concat(movie.genres.map(function (genre) {\n    return \"\\n              <li><a href=\\\"#\\\">\".concat(genre, \"</a></li>\\n            \");\n  }).join(''), \"\\n          </ul>\\n        </div>\\n      </div>\\n    </div>\\n  \");\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://platzi-video-spa/./src/templates/Player.js?");

/***/ }),

/***/ "./src/templates/Sidebar.js":
/*!**********************************!*\
  !*** ./src/templates/Sidebar.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_images_platzi_favicon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/platzi_favicon.png */ \"./public/images/platzi_favicon.png\");\n/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getData */ \"./src/utils/getData.js\");\n\n\n\n\nvar MOVIES_API = 'https://yts.mx/api/v2/list_movies.json';\nvar RANDOM_API = 'https://randomuser.me/api/';\n\nvar Sidebar = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {\n    var playlistCahed, friendsCached, playlist, friends, view;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            playlistCahed = /*#__PURE__*/function () {\n              var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var cachePLaylist, _yield$getData, playlist;\n\n                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        cachePLaylist = window.sessionStorage.getItem('playlist');\n\n                        if (!cachePLaylist) {\n                          _context.next = 3;\n                          break;\n                        }\n\n                        return _context.abrupt(\"return\", JSON.parse(cachePLaylist));\n\n                      case 3:\n                        _context.next = 5;\n                        return (0,_utils_getData__WEBPACK_IMPORTED_MODULE_3__.default)(\"\".concat(MOVIES_API, \"?limit=10&quality=3D\"));\n\n                      case 5:\n                        _yield$getData = _context.sent;\n                        playlist = _yield$getData.data.movies;\n                        window.sessionStorage.setItem('playlist', JSON.stringify(playlist));\n                        return _context.abrupt(\"return\", playlist);\n\n                      case 9:\n                      case \"end\":\n                        return _context.stop();\n                    }\n                  }\n                }, _callee);\n              }));\n\n              return function playlistCahed() {\n                return _ref2.apply(this, arguments);\n              };\n            }();\n\n            friendsCached = /*#__PURE__*/function () {\n              var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {\n                var cacheFriends, _yield$getData2, friends;\n\n                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n                  while (1) {\n                    switch (_context2.prev = _context2.next) {\n                      case 0:\n                        cacheFriends = window.sessionStorage.getItem('friendsList');\n\n                        if (!cacheFriends) {\n                          _context2.next = 3;\n                          break;\n                        }\n\n                        return _context2.abrupt(\"return\", JSON.parse(cacheFriends));\n\n                      case 3:\n                        _context2.next = 5;\n                        return (0,_utils_getData__WEBPACK_IMPORTED_MODULE_3__.default)(\"\".concat(RANDOM_API, \"?results=4&nat=us\"));\n\n                      case 5:\n                        _yield$getData2 = _context2.sent;\n                        friends = _yield$getData2.results;\n                        window.sessionStorage.setItem('friendsList', JSON.stringify(friends));\n                        return _context2.abrupt(\"return\", friends);\n\n                      case 9:\n                      case \"end\":\n                        return _context2.stop();\n                    }\n                  }\n                }, _callee2);\n              }));\n\n              return function friendsCached() {\n                return _ref3.apply(this, arguments);\n              };\n            }();\n\n            _context3.next = 4;\n            return playlistCahed();\n\n          case 4:\n            playlist = _context3.sent;\n            _context3.next = 7;\n            return friendsCached();\n\n          case 7:\n            friends = _context3.sent;\n            view = \"\\n    <div class=\\\"logo\\\">\\n      <a href=\\\"/\\\">\\n        <img class=\\\"logo__image\\\" src=\\\"\".concat(_public_images_platzi_favicon_png__WEBPACK_IMPORTED_MODULE_2__.default, \"\\\" alt=\\\"favicon Platzi\\\">\\n        <p class=\\\"logo__title\\\">Platzi<span>Video</span></p>\\n      </a>\\n    </div>\\n    <div class=\\\"playlist\\\">\\n      <h3 class=\\\"playlist__title\\\">Mi Playlist</h3>\\n      <ol>\\n        \").concat(playlist.map(function (movie) {\n              return \"\\n          <a href=\\\"#/\".concat(movie.id, \"\\\">\\n            <li>\").concat(movie.title, \"</li>\\n          </a>\\n        \");\n            }).join(''), \"\\n      </ol>\\n    </div>\\n    <div class=\\\"playlist-friends\\\">\\n      <h3 class=\\\"playlist-friends__title\\\">Playlist de Amigos</h3>\\n      \").concat(friends.map(function (user) {\n              return \"\\n        <div class=\\\"playlist-friends__item\\\">\\n          <img src=\\\"\".concat(user.picture.medium, \"\\\" alt=\\\"friend image\\\">\\n          <p>\").concat(user.name.first, \" \").concat(user.name.last, \"</p>\\n        </div>\\n      \");\n            }).join(''), \"\\n    </div>\\n  \");\n            return _context3.abrupt(\"return\", view);\n\n          case 10:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function Sidebar() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);\n\n//# sourceURL=webpack://platzi-video-spa/./src/templates/Sidebar.js?");

/***/ }),

/***/ "./src/templates/Suggestions.js":
/*!**************************************!*\
  !*** ./src/templates/Suggestions.js ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar Suggestions = function Suggestions(data) {\n  var view = \"\\n    <div class=\\\"suggestions\\\">\\n      <h3>Suggestions</h3>\\n      <div class=\\\"suggestions-container\\\">\\n        \".concat(data.map(function (movie) {\n    return \"\\n          <div class=\\\"suggestions-container__item\\\">\\n            <a href=\\\"#/\".concat(movie.id, \"\\\">\\n              <figure>\\n                <img src=\\\"\").concat(movie.medium_cover_image, \"\\\" alt=\\\"\\\">\\n              </figure>\\n              <p>\").concat(movie.title, \"</p>\\n            </a>\\n          </div>\\n        \");\n  }).join(''), \"\\n      </div>\\n    </div>\\n  \");\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Suggestions);\n\n//# sourceURL=webpack://platzi-video-spa/./src/templates/Suggestions.js?");

/***/ }),

/***/ "./src/utils/getData.js":
/*!******************************!*\
  !*** ./src/utils/getData.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar getData = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url) {\n    var response, data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(url);\n\n          case 2:\n            response = _context.sent;\n            _context.next = 5;\n            return response.json();\n\n          case 5:\n            data = _context.sent;\n            return _context.abrupt(\"return\", data);\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getData(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://platzi-video-spa/./src/utils/getData.js?");

/***/ }),

/***/ "./src/utils/getHash.js":
/*!******************************!*\
  !*** ./src/utils/getHash.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar getHash = function getHash() {\n  return location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';\n}; // ['', 4025, '']\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getHash);\n\n//# sourceURL=webpack://platzi-video-spa/./src/utils/getHash.js?");

/***/ }),

/***/ "./src/utils/renderMovies.js":
/*!***********************************!*\
  !*** ./src/utils/renderMovies.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getData */ \"./src/utils/getData.js\");\n\n\n\nvar BASE_API = 'https://yts.mx/api/v2/';\n\nvar renderMovies = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {\n    var carouselItemTemplate, createTemplate, renderMovieList, cacheExist, $actionContainer, $dramaContainer, $animationContainer, $horrorContainer, actionList, dramaList, animationList, horrorList;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            carouselItemTemplate = function carouselItemTemplate(movie, category) {\n              return \"<article class=\\\"carousel__item\\\" data-id=\\\"\".concat(movie.id, \"\\\" data-category=\\\"\").concat(category, \"\\\">\\n        <a href=\\\"#/\").concat(movie.id, \"\\\">\\n          <img src=\\\"\").concat(movie.medium_cover_image, \"\\\" class=\\\"carousel__item-image\\\">\\n          <h4 class=\\\"carousel__item-title\\\">\").concat(movie.title, \"</h4>\\n        </a>\\n      </article>\");\n            };\n\n            createTemplate = function createTemplate(HTMLString) {\n              var html = document.implementation.createHTMLDocument();\n              html.body.innerHTML = HTMLString;\n              return html.body.children[0];\n            };\n\n            renderMovieList = function renderMovieList(list, $container, category) {\n              $container.children[0].remove(); // remover el gif\n\n              list.forEach(function (movie) {\n                var HTML_STRING = carouselItemTemplate(movie, category);\n                var movieElement = createTemplate(HTML_STRING);\n                var image = movieElement.querySelector('img');\n                image.addEventListener('load', function (event) {\n                  event.target.classList.add('fadeIn');\n                });\n                $container.append(movieElement); // Append recibe \n              });\n            };\n\n            cacheExist = /*#__PURE__*/function () {\n              var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(category) {\n                var listName, cacheList, _yield$getData, data;\n\n                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        listName = \"\".concat(category, \"List\");\n                        cacheList = window.localStorage.getItem(listName);\n\n                        if (!cacheList) {\n                          _context.next = 4;\n                          break;\n                        }\n\n                        return _context.abrupt(\"return\", JSON.parse(cacheList));\n\n                      case 4:\n                        _context.next = 6;\n                        return (0,_utils_getData__WEBPACK_IMPORTED_MODULE_2__.default)(\"\".concat(BASE_API, \"list_movies.json?genre=\").concat(category));\n\n                      case 6:\n                        _yield$getData = _context.sent;\n                        data = _yield$getData.data.movies;\n                        window.localStorage.setItem(listName, JSON.stringify(data));\n                        return _context.abrupt(\"return\", data);\n\n                      case 10:\n                      case \"end\":\n                        return _context.stop();\n                    }\n                  }\n                }, _callee);\n              }));\n\n              return function cacheExist(_x) {\n                return _ref2.apply(this, arguments);\n              };\n            }();\n\n            $actionContainer = document.querySelector('#action');\n            $dramaContainer = document.querySelector('#drama');\n            $animationContainer = document.querySelector('#animation');\n            $horrorContainer = document.querySelector('#horror');\n            _context2.next = 10;\n            return cacheExist('action');\n\n          case 10:\n            actionList = _context2.sent;\n            renderMovieList(actionList, $actionContainer, 'action');\n            _context2.next = 14;\n            return cacheExist('drama');\n\n          case 14:\n            dramaList = _context2.sent;\n            renderMovieList(dramaList, $dramaContainer, 'drama');\n            _context2.next = 18;\n            return cacheExist('animation');\n\n          case 18:\n            animationList = _context2.sent;\n            renderMovieList(animationList, $animationContainer, 'animation');\n            _context2.next = 22;\n            return cacheExist('horror');\n\n          case 22:\n            horrorList = _context2.sent;\n            renderMovieList(horrorList, $horrorContainer, 'horror');\n\n          case 24:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function renderMovies() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMovies);\n\n//# sourceURL=webpack://platzi-video-spa/./src/utils/renderMovies.js?");

/***/ }),

/***/ "./src/utils/resolveRoutes.js":
/*!************************************!*\
  !*** ./src/utils/resolveRoutes.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar resolveRoutes = function resolveRoutes(route) {\n  if (route === '/') {\n    return route;\n  }\n\n  var validRoute = parseInt(route) && route.length <= 5 ? '/:id' : \"/\".concat(route);\n  return validRoute;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveRoutes);\n\n//# sourceURL=webpack://platzi-video-spa/./src/utils/resolveRoutes.js?");

/***/ }),

/***/ "./src/utils/share.js":
/*!****************************!*\
  !*** ./src/utils/share.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar share = function share($button) {\n  if ('share' in navigator) {\n    var shareData = {\n      title: 'PlatziVideo 2018',\n      text: 'Probando Web Share API',\n      url: \"\".concat(location.href)\n    };\n    $button.addEventListener('click', function () {\n      navigator.share(shareData).then(function () {\n        alert('Compartido con exito');\n      })[\"catch\"](function () {\n        alert('¿No pudiste compartir? Prueba usando un navegador móvil');\n      });\n    });\n  } else {\n    $button.addEventListener('click', function () {\n      alert('La opción compartir no está disponible, prueba usando un navegador móvil.');\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (share);\n\n//# sourceURL=webpack://platzi-video-spa/./src/utils/share.js?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://platzi-video-spa/./src/styles/styles.scss?");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 732:31-45 */
/***/ ((module) => {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nvar runtime = (function (exports) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function define(obj, key, value) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n    return obj[key];\n  }\n  try {\n    // IE 8 has a broken Object.defineProperty that only works on DOM objects.\n    define({}, \"\");\n  } catch (err) {\n    define = function(obj, key, value) {\n      return obj[key] = value;\n    };\n  }\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  exports.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunction.displayName = define(\n    GeneratorFunctionPrototype,\n    toStringTagSymbol,\n    \"GeneratorFunction\"\n  );\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      define(prototype, method, function(arg) {\n        return this._invoke(method, arg);\n      });\n    });\n  }\n\n  exports.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  exports.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      define(genFun, toStringTagSymbol, \"GeneratorFunction\");\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  exports.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return PromiseImpl.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return PromiseImpl.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration.\n          result.value = unwrapped;\n          resolve(result);\n        }, function(error) {\n          // If a rejected Promise was yielded, throw the rejection back\n          // into the async generator function so it can be handled there.\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new PromiseImpl(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  exports.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    if (PromiseImpl === void 0) PromiseImpl = Promise;\n\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList),\n      PromiseImpl\n    );\n\n    return exports.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        // Note: [\"return\"] must be used for ES3 parsing compatibility.\n        if (delegate.iterator[\"return\"]) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  define(Gp, toStringTagSymbol, \"Generator\");\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  exports.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  exports.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n\n  // Regardless of whether this script is executing as a CommonJS module\n  // or not, return the runtime object so that we can declare the variable\n  // regeneratorRuntime in the outer scope, which allows this module to be\n  // injected easily by `bin/regenerator --include-runtime script.js`.\n  return exports;\n\n}(\n  // If this script is executing as a CommonJS module, use module.exports\n  // as the regeneratorRuntime namespace. Otherwise create a new empty\n  // object. Either way, the resulting object will be used to initialize\n  // the regeneratorRuntime variable at the top of this file.\n   true ? module.exports : 0\n));\n\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  // This module should not be running in strict mode, so the above\n  // assignment should always work unless something is misconfigured. Just\n  // in case runtime.js accidentally runs in strict mode, we can escape\n  // strict mode using a global Function call. This could conceivably fail\n  // if a Content Security Policy forbids using Function, but in that case\n  // the proper solution is to fix the accidental strict mode problem. If\n  // you've misconfigured your bundler to force strict mode and applied a\n  // CSP to forbid Function, and you're not willing to fix either of those\n  // problems, please detail your unique predicament in a GitHub issue.\n  Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n}\n\n\n//# sourceURL=webpack://platzi-video-spa/./node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./public/images/loader.gif":
/*!**********************************!*\
  !*** ./public/images/loader.gif ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/0a7511248752918e78d5e15731b214f7.gif\");\n\n//# sourceURL=webpack://platzi-video-spa/./public/images/loader.gif?");

/***/ }),

/***/ "./public/images/platzi_favicon.png":
/*!******************************************!*\
  !*** ./public/images/platzi_favicon.png ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADABAMAAACg8nE0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURZjKPJjKPJjKPJjKPJjKPJjKPJjKPJjKPJjKPJjKPJjKPJjKPJjKPJjKPEdwTJgyZTAAAAAPdFJOU//3V0DqeC1p2JcerYgOAGaaXv8AAARYSURBVHjazdxLalRBFAbgv02Caa+DxtdAELKC4AZsAgERB3JX4Cjj4ApCD3RoltCgOHAUsgBtMgwI4kScOUi80UhSa1CJrd6+VXXP+c8psMZN/3z9rMc5haAdL989HQ0evLknfDiUT398iF9jADzbKxHwaYL5GFVj/4CPG/hnrK57BxxN0BrVtm/A+T4Wxk3fgC10xlvPgKNRN2B12zHgCSLjvl/A19jzY3nsFhAFANe9AuKAn4Rtp4AEoPddgBHQS4AV0EeAFdBHgBnQQ4AZ0EOAHZAnwA7IE+AAyBLgAMgS4AHIEeAByBHgAsgQ4ALIEOADSBPgA0gT4ARIEuAESBLAAAYKAhjAZi0ngAGMGzkBDCAEOSEfsBYHhCAnZAOOUgAFARRAQQAHkBPAAeQEaAF/JrtCAkiAmAAWICWABUgJoAFCAmiAkAAeICOAB8gIMABEBBgAIgIsAAkBFoCEABNAQIAJkCI8zAcoACnCXjZAAUgRnucCVIAEocoFqAApwk46QAkI4SD2+NvpACUghLPsawQzIEEYpwLUgARhNxFAAOKEpUQAAYgTqngABYgT9qIBFCBO2IkFkIAYYbAbCyABUcKdSAANiBGWIgE0IEZY6QYYABFC1Q0wACKE1U6ACdAl3OgEmABdwmAxwAjoEhYDjIAQXuQDjkdGwPeN/Eu0ZQW8Wpy6tAPOJ86AxY/pqTdg8Yt21xuAYTtg4g3A5VZAdGPomgWAK62ALzHAugWAR62ANXcApq2AiTtgPvO6CDjxByy3pi1n/oCVVsA3d8D8P/93wAd3AN63AtZMgNiXdPlzK+DAAngdA1xurw/2vQGYtQMm3oC/69iLgA1vwKWFVebIGYDHCwHegKvBLSAOmAavlygOGHa2c+g3uRdg/Jj2A4xftH6A7adCALD92AkApp9rCcD0hyMBWP4yRQDLn74IYJi2yACGiZcMwE8dhQB+8isE0NN3KYBegEgB7BJKDGAXgWIAuYyVA8iFuBzAbSWcywHkZkgtBpDbOY0YwG5I1VIAu6XWSAH0pmAtBNDbmo0QwG/M1jIAv7XcyACGzfFaBDBs7zcigOWAopYALEcsjQRgOiSqBQDTMVcjANgO6up+gO2osekHGA9L616A8bi3aR0dSwOUhJk6QEfoAZiLBuoZEaAhnAYmQFO4QQk0pScVFaApnpkxAZryn4oK0BQwzZgATQlWRQVoishmTICmDK6iAjSFfDMmQFOKOKQCNMWUUyZAUw46pAI0Ba1TJkBTkjukArIEbnYtIVz00HHrAxlhk1/hyAncGq07NMX1UyYg3h6wPObWyQoCt9KXEwZ9FZSKgOJNJsXbZMo3+hRvVSrfbFW8Xax8w1vxlr3yTYfF2ybLN34Wb10t33xbvH24fAN08Rbu8k3oxdvoy18EkCLcCl4BcUJvJdt/dJ1E+Qsxil/pUf5SkuLXqpS/GKZ1tQ1KXG0Twsnh/PnLXM4T1NcL/QBcpXUDXcauDQAAAABJRU5ErkJggg==\");\n\n//# sourceURL=webpack://platzi-video-spa/./public/images/platzi_favicon.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;