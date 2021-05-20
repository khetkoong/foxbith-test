(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/AddQuestion.js":
/*!***********************************!*\
  !*** ./components/AddQuestion.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\react app foxbit\\nextjs-blog\\components\\AddQuestion.js";




const AddQuestion = props => {
  const {
    addQuestion
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
    container: true,
    className: "mt-20",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
      item: true,
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
        variant: "outlined",
        color: "secondary",
        style: {
          marginRight: 5
        },
        fullWidth: true,
        onClick: addQuestion,
        children: "+ ADD QUESTION"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(AddQuestion));

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\react app foxbit\\nextjs-blog\\components\\Header.js";



const Header = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "p-10-nb",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        display: "grid"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        className: "text-title",
        children: "FoxBith Questionare"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          height: "1px",
          backgroundColor: "#C2C9D1",
          margin: "5px 0px 5px 0px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "item-end p-5",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
          variant: "outlined",
          color: "secondary",
          style: {
            marginRight: 5
          },
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
          type: "submit",
          variant: "contained",
          color: "secondary",
          style: {
            padding: "7px 50px 7px 50px"
          },
          children: "Save"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        height: "1px",
        backgroundColor: "#C2C9D1",
        margin: "5px 0px 5px 0px"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(Header));

/***/ }),

/***/ "./components/Line.js":
/*!****************************!*\
  !*** ./components/Line.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\react app foxbit\\nextjs-blog\\components\\Line.js";


const Line = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        height: "1px",
        backgroundColor: "#C2C9D1",
        margin: "5px 0px 5px 0px"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(Line));

/***/ }),

/***/ "./components/QuestionDetail.js":
/*!**************************************!*\
  !*** ./components/QuestionDetail.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _QuestionList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QuestionList */ "./components/QuestionList.js");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Line */ "./components/Line.js");
/* harmony import */ var _material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/FileCopy */ "@material-ui/icons/FileCopy");
/* harmony import */ var _material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context/AppContext */ "./context/AppContext.js");

var _jsxFileName = "D:\\react app foxbit\\nextjs-blog\\components\\QuestionDetail.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const QuestionDetail = props => {
  var _errors$questions, _errors$questions$ind, _errors$questions2, _errors$questions2$in, _errors$questions2$in2;

  const {
    item,
    index,
    removeQuestion,
    duplicateQuestion
  } = props;
  const AppContext = (0,_context_AppContext__WEBPACK_IMPORTED_MODULE_9__.useAppContext)();
  const {
    form: {
      register,
      errors,
      setValue,
      getValues,
      watch,
      control
    }
  } = AppContext;
  const {
    fields,
    append,
    remove
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useFieldArray)({
    control,
    name: `questions.${index}.choiceQuestion`
  });

  const addChoice = () => {
    append({
      choiceTitle: "",
      checked: false
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "pt-10",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
        container: true,
        spacing: 3,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
          item: true,
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: "text-header",
            children: ["Question ", index + 1]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
          item: true,
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default()), _objectSpread(_objectSpread({
            label: "Qusetion*",
            variant: "outlined",
            name: "questionTitle",
            error: Boolean((_errors$questions = errors.questions) === null || _errors$questions === void 0 ? void 0 : (_errors$questions$ind = _errors$questions[index]) === null || _errors$questions$ind === void 0 ? void 0 : _errors$questions$ind.questionsName),
            helperText: errors === null || errors === void 0 ? void 0 : (_errors$questions2 = errors.questions) === null || _errors$questions2 === void 0 ? void 0 : (_errors$questions2$in = _errors$questions2[index]) === null || _errors$questions2$in === void 0 ? void 0 : (_errors$questions2$in2 = _errors$questions2$in.questionsName) === null || _errors$questions2$in2 === void 0 ? void 0 : _errors$questions2$in2.message,
            fullWidth: true
          }, register(`questions.${index}.questionsName`, {
            required: "Question name is required"
          })), {}, {
            defaultValue: item.questionsName
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mb-10",
        children: fields && fields.map((item, indexChoice) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_QuestionList__WEBPACK_IMPORTED_MODULE_4__.default, {
            data: item,
            indexChoice: indexChoice,
            index: index,
            errors: errors,
            register: register,
            getValues: getValues,
            setValue: setValue,
            watch: watch,
            remove: remove
          }, indexChoice, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 17
          }, undefined)
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 15
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mb-20 mt-20",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "text-add-choice",
          onClick: () => addChoice(),
          children: "+ ADD CHOICE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Line__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          display: "center"
        },
        className: "mb-10 mt-10",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            display: "flex"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              cursor: "pointer",
              marginRight: "20px"
            },
            onClick: () => duplicateQuestion(index),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "DUPLICATE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              cursor: "pointer"
            },
            onClick: () => removeQuestion(index),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7___default()), {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "DELETE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Line__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(QuestionDetail));

/***/ }),

/***/ "./components/QuestionList.js":
/*!************************************!*\
  !*** ./components/QuestionList.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/AppContext */ "./context/AppContext.js");

var _jsxFileName = "D:\\react app foxbit\\nextjs-blog\\components\\QuestionList.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const QuestionList = props => {
  var _errors$questions, _errors$questions$ind, _errors$questions$ind2, _errors$questions$ind3, _errors$questions2, _errors$questions2$in, _errors$questions2$in2, _errors$questions2$in3, _errors$questions2$in4;

  const {
    data,
    index,
    indexChoice,
    remove
  } = props;
  const AppContext = (0,_context_AppContext__WEBPACK_IMPORTED_MODULE_4__.useAppContext)();
  const {
    form: {
      register,
      errors,
      setValue,
      getValues
    }
  } = AppContext;
  const checkedByForm = getValues(`questions.${index}.choiceQuestion.${indexChoice}.checked`);
  const [checked, setChecked] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(checkedByForm && checkedByForm || false);

  const handleChange = event => {
    setChecked(event.target.checked);
    setValue(`questions.${index}.choiceQuestion.${indexChoice}.checked`, event.target.checked);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
      container: true,
      spacing: 3,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
        item: true,
        xs: 1,
        style: {
          alignSelf: "center"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {
          checked: checked,
          onChange: handleChange,
          inputProps: {
            "aria-label": "primary checkbox"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
        item: true,
        xs: 10,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TextField, _objectSpread(_objectSpread({
          label: "Description*",
          variant: "outlined",
          name: "choiceTitle",
          error: Boolean(errors === null || errors === void 0 ? void 0 : (_errors$questions = errors.questions) === null || _errors$questions === void 0 ? void 0 : (_errors$questions$ind = _errors$questions[index]) === null || _errors$questions$ind === void 0 ? void 0 : (_errors$questions$ind2 = _errors$questions$ind.choiceQuestion) === null || _errors$questions$ind2 === void 0 ? void 0 : (_errors$questions$ind3 = _errors$questions$ind2[indexChoice]) === null || _errors$questions$ind3 === void 0 ? void 0 : _errors$questions$ind3.choiceTitle),
          helperText: (_errors$questions2 = errors.questions) === null || _errors$questions2 === void 0 ? void 0 : (_errors$questions2$in = _errors$questions2[index]) === null || _errors$questions2$in === void 0 ? void 0 : (_errors$questions2$in2 = _errors$questions2$in.choiceQuestion) === null || _errors$questions2$in2 === void 0 ? void 0 : (_errors$questions2$in3 = _errors$questions2$in2[indexChoice]) === null || _errors$questions2$in3 === void 0 ? void 0 : (_errors$questions2$in4 = _errors$questions2$in3.choiceTitle) === null || _errors$questions2$in4 === void 0 ? void 0 : _errors$questions2$in4.message,
          fullWidth: true
        }, register(`questions.${index}.choiceQuestion.${indexChoice}.choiceTitle`, {
          required: "Description is required"
        })), {}, {
          defaultValue: data.choiceTitle
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined), checked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
          children: "This answer is correct"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 23
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
        item: true,
        xs: 1,
        style: {
          alignSelf: "center"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          onClick: () => remove(data.id),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2___default()), {
            style: {
              cursor: "pointer"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (QuestionList);

/***/ }),

/***/ "./context/AppContext.js":
/*!*******************************!*\
  !*** ./context/AppContext.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAppContext": function() { return /* binding */ useAppContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AppContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ __webpack_exports__["default"] = (AppContext);
const useAppContext = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AppContext);
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AddQuestion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AddQuestion */ "./components/AddQuestion.js");
/* harmony import */ var _components_QuestionDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/QuestionDetail */ "./components/QuestionDetail.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Line__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Line */ "./components/Line.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/lab/Alert */ "@material-ui/lab/Alert");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../context/AppContext */ "./context/AppContext.js");

var _jsxFileName = "D:\\react app foxbit\\nextjs-blog\\pages\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const Home = () => {
  var _errors$questionTitle;

  const {
    control,
    register,
    formState: {
      errors
    },
    handleSubmit,
    watch,
    setValue,
    getValues
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_10__.useForm)({
    defaultValues: {
      questions: [{
        questionsName: "",
        choiceQuestion: [{
          choiceTitle: "",
          checked: false
        }]
      }]
    }
  });
  const {
    fields,
    append,
    prepend,
    remove,
    swap,
    move,
    insert
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_10__.useFieldArray)({
    control,
    name: "questions"
  });
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const onSubmit = data => {
    if (data) {
      if ((data === null || data === void 0 ? void 0 : data.questions.length) < 1) {
        alert("Please fill Question at least 1 question.");
      } else {
        setOpen(true);
        console.log("data: ", data);
      }
    }
  };

  const addQuestion = () => {
    append({
      questionsName: "",
      choiceQuestion: [{
        choiceTitle: "",
        checked: false
      }]
    });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const valuesContext = {
    form: {
      register,
      errors,
      append,
      setValue,
      getValues,
      watch,
      control
    }
  };

  const duplicateQuestion = index => {
    const dataDup = getValues("questions");
    append(dataDup[index]);
  };

  const values = getValues();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AppContext__WEBPACK_IMPORTED_MODULE_11__.default.Provider, {
    value: valuesContext,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: handleSubmit(onSubmit),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          backgroundColor: "white"
        },
        className: "mb-20",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "m-20 question-detail-box",
        children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "pb-10",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {
            container: true,
            spacing: 3,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                className: "text-header",
                children: "Questionnaire Detail"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default()), _objectSpread({
                label: "Name*",
                variant: "outlined",
                name: "questionTitle",
                error: Boolean(errors.questionTitle),
                helperText: (_errors$questionTitle = errors.questionTitle) === null || _errors$questionTitle === void 0 ? void 0 : _errors$questionTitle.message,
                fullWidth: true
              }, register("questionTitle", {
                required: "Question Title is required."
              })), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Line__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, undefined), fields.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_QuestionDetail__WEBPACK_IMPORTED_MODULE_3__.default, {
            item: item,
            index: index,
            removeQuestion: remove,
            duplicateQuestion: duplicateQuestion
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 15
          }, undefined)
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 13
        }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddQuestion__WEBPACK_IMPORTED_MODULE_2__.default, {
          addQuestion: addQuestion
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8___default()), {
        anchorOrigin: {
          vertical: "top",
          horizontal: "center"
        },
        open: open,
        autoHideDuration: 3000,
        onClose: handleClose,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9___default()), {
          onClose: handleClose,
          severity: "success",
          children: ["Success !", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 22
          }, undefined), "Check form data in log..."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(Home));

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Button");;

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Grid");;

/***/ }),

/***/ "@material-ui/core/Snackbar":
/*!*********************************************!*\
  !*** external "@material-ui/core/Snackbar" ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Snackbar");;

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/TextField");;

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Delete");;

/***/ }),

/***/ "@material-ui/icons/FileCopy":
/*!**********************************************!*\
  !*** external "@material-ui/icons/FileCopy" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/FileCopy");;

/***/ }),

/***/ "@material-ui/lab/Alert":
/*!*****************************************!*\
  !*** external "@material-ui/lab/Alert" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/lab/Alert");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-hook-form");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL2NvbXBvbmVudHMvQWRkUXVlc3Rpb24uanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL2NvbXBvbmVudHMvTGluZS5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL2NvbXBvbmVudHMvUXVlc3Rpb25EZXRhaWwuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9jb21wb25lbnRzL1F1ZXN0aW9uTGlzdC5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL2NvbnRleHQvQXBwQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL25leHRqcy1ibG9nL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovL25leHRqcy1ibG9nL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovL25leHRqcy1ibG9nL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXJcIiIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiIiwid2VicGFjazovL25leHRqcy1ibG9nL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZVwiIiwid2VicGFjazovL25leHRqcy1ibG9nL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0ZpbGVDb3B5XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHRqcy1ibG9nL2V4dGVybmFsIFwicmVhY3QtaG9vay1mb3JtXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJBZGRRdWVzdGlvbiIsInByb3BzIiwiYWRkUXVlc3Rpb24iLCJtYXJnaW5SaWdodCIsIlJlYWN0IiwiSGVhZGVyIiwiZGlzcGxheSIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbiIsInBhZGRpbmciLCJMaW5lIiwiUXVlc3Rpb25EZXRhaWwiLCJpdGVtIiwiaW5kZXgiLCJyZW1vdmVRdWVzdGlvbiIsImR1cGxpY2F0ZVF1ZXN0aW9uIiwiQXBwQ29udGV4dCIsInVzZUFwcENvbnRleHQiLCJmb3JtIiwicmVnaXN0ZXIiLCJlcnJvcnMiLCJzZXRWYWx1ZSIsImdldFZhbHVlcyIsIndhdGNoIiwiY29udHJvbCIsImZpZWxkcyIsImFwcGVuZCIsInJlbW92ZSIsInVzZUZpZWxkQXJyYXkiLCJuYW1lIiwiYWRkQ2hvaWNlIiwiY2hvaWNlVGl0bGUiLCJjaGVja2VkIiwiQm9vbGVhbiIsInF1ZXN0aW9ucyIsInF1ZXN0aW9uc05hbWUiLCJtZXNzYWdlIiwicmVxdWlyZWQiLCJtYXAiLCJpbmRleENob2ljZSIsImlkIiwiYWxpZ25JdGVtcyIsImZsZXhXcmFwIiwiY3Vyc29yIiwiUXVlc3Rpb25MaXN0IiwiZGF0YSIsImNoZWNrZWRCeUZvcm0iLCJzZXRDaGVja2VkIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJhbGlnblNlbGYiLCJjaG9pY2VRdWVzdGlvbiIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiSG9tZSIsImZvcm1TdGF0ZSIsImhhbmRsZVN1Ym1pdCIsInVzZUZvcm0iLCJkZWZhdWx0VmFsdWVzIiwicHJlcGVuZCIsInN3YXAiLCJtb3ZlIiwiaW5zZXJ0Iiwib3BlbiIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsIm9uU3VibWl0IiwibGVuZ3RoIiwiYWxlcnQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xvc2UiLCJyZWFzb24iLCJ2YWx1ZXNDb250ZXh0IiwiZGF0YUR1cCIsInZhbHVlcyIsInF1ZXN0aW9uVGl0bGUiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUlDLEtBQUQsSUFBVztBQUM3QixRQUFNO0FBQUVDO0FBQUYsTUFBa0JELEtBQXhCO0FBQ0Esc0JBQ0UsOERBQUMsK0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsYUFBUyxFQUFDLE9BQTFCO0FBQUEsMkJBQ0UsOERBQUMsK0RBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsRUFBZjtBQUFBLDZCQUNFLDhEQUFDLGlFQUFEO0FBQ0UsZUFBTyxFQUFDLFVBRFY7QUFFRSxhQUFLLEVBQUMsV0FGUjtBQUdFLGFBQUssRUFBRTtBQUFFRSxxQkFBVyxFQUFFO0FBQWYsU0FIVDtBQUlFLGlCQUFTLE1BSlg7QUFLRSxlQUFPLEVBQUVELFdBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZUQsQ0FqQkQ7O0FBbUJBLDRFQUFlRSxpREFBQSxDQUFXSixXQUFYLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTs7QUFFQSxNQUFNSyxNQUFNLEdBQUcsTUFBTTtBQUNuQixzQkFDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUEsNEJBQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBWjtBQUFBLDhCQUNFO0FBQU8saUJBQVMsRUFBQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQ0UsYUFBSyxFQUFFO0FBQ0xDLGdCQUFNLEVBQUUsS0FESDtBQUVMQyx5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Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBd0NFLDhEQUFDLG1FQUFEO0FBQ0Usb0JBQVksRUFBRTtBQUFFNkUsa0JBQVEsRUFBRSxLQUFaO0FBQW1CQyxvQkFBVSxFQUFFO0FBQS9CLFNBRGhCO0FBRUUsWUFBSSxFQUFFZixJQUZSO0FBR0Usd0JBQWdCLEVBQUUsSUFIcEI7QUFJRSxlQUFPLEVBQUVRLFdBSlg7QUFBQSwrQkFNRSw4REFBQywrREFBRDtBQUFVLGlCQUFPLEVBQUVBLFdBQW5CO0FBQWdDLGtCQUFRLEVBQUMsU0FBekM7QUFBQSwrQ0FDVztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBeENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXdERCxDQTdJRDs7QUErSUEsNEVBQWVyRSxpREFBQSxDQUFXb0QsSUFBWCxDQUFmLEU7Ozs7Ozs7Ozs7O0FDN0pBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuXHJcbmNvbnN0IEFkZFF1ZXN0aW9uID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBhZGRRdWVzdGlvbiB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9XCJtdC0yMFwiPlxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA1IH19XHJcbiAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgIG9uQ2xpY2s9e2FkZFF1ZXN0aW9ufVxyXG4gICAgICAgID5cclxuICAgICAgICAgICsgQUREIFFVRVNUSU9OXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhBZGRRdWVzdGlvbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC0xMC1uYlwiPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiIH19PlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXRpdGxlXCI+Rm94Qml0aCBRdWVzdGlvbmFyZTwvbGFiZWw+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjFweFwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0MyQzlEMVwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiNXB4IDBweCA1cHggMHB4XCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tZW5kIHAtNVwiPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA1IH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjdweCA1MHB4IDdweCA1MHB4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGhlaWdodDogXCIxcHhcIixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjQzJDOUQxXCIsXHJcbiAgICAgICAgICBtYXJnaW46IFwiNXB4IDBweCA1cHggMHB4XCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oSGVhZGVyKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTGluZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBoZWlnaHQ6IFwiMXB4XCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0MyQzlEMVwiLFxyXG4gICAgICAgICAgbWFyZ2luOiBcIjVweCAwcHggNXB4IDBweFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKExpbmUpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBRdWVzdGlvbkxpc3QgZnJvbSBcIi4vUXVlc3Rpb25MaXN0XCI7XHJcbmltcG9ydCBMaW5lIGZyb20gXCIuL0xpbmVcIjtcclxuaW1wb3J0IEZpbGVDb3B5SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0ZpbGVDb3B5XCI7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlXCI7XHJcbmltcG9ydCB7IHVzZUZpZWxkQXJyYXkgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VBcHBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvQXBwQ29udGV4dFwiO1xyXG5cclxuY29uc3QgUXVlc3Rpb25EZXRhaWwgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGl0ZW0sIGluZGV4LCByZW1vdmVRdWVzdGlvbiwgZHVwbGljYXRlUXVlc3Rpb24gfSA9IHByb3BzO1xyXG4gIGNvbnN0IEFwcENvbnRleHQgPSB1c2VBcHBDb250ZXh0KCk7XHJcbiAgY29uc3Qge1xyXG4gICAgZm9ybTogeyByZWdpc3RlciwgZXJyb3JzLCBzZXRWYWx1ZSwgZ2V0VmFsdWVzLCB3YXRjaCwgY29udHJvbCB9LFxyXG4gIH0gPSBBcHBDb250ZXh0O1xyXG5cclxuICBjb25zdCB7IGZpZWxkcywgYXBwZW5kLCByZW1vdmUgfSA9IHVzZUZpZWxkQXJyYXkoe1xyXG4gICAgY29udHJvbCxcclxuICAgIG5hbWU6IGBxdWVzdGlvbnMuJHtpbmRleH0uY2hvaWNlUXVlc3Rpb25gLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBhZGRDaG9pY2UgPSAoKSA9PiB7XHJcbiAgICBhcHBlbmQoe1xyXG4gICAgICBjaG9pY2VUaXRsZTogXCJcIixcclxuICAgICAgY2hlY2tlZDogZmFsc2UsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xMFwiPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtaGVhZGVyXCI+UXVlc3Rpb24ge2luZGV4ICsgMX08L2xhYmVsPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJRdXNldGlvbipcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInF1ZXN0aW9uVGl0bGVcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtCb29sZWFuKGVycm9ycy5xdWVzdGlvbnM/LltpbmRleF0/LnF1ZXN0aW9uc05hbWUpfVxyXG4gICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycz8ucXVlc3Rpb25zPy5baW5kZXhdPy5xdWVzdGlvbnNOYW1lPy5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihgcXVlc3Rpb25zLiR7aW5kZXh9LnF1ZXN0aW9uc05hbWVgLCB7XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJRdWVzdGlvbiBuYW1lIGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpdGVtLnF1ZXN0aW9uc05hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTBcIj5cclxuICAgICAgICAgIHtmaWVsZHMgJiZcclxuICAgICAgICAgICAgZmllbGRzLm1hcCgoaXRlbSwgaW5kZXhDaG9pY2UpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICA8UXVlc3Rpb25MaXN0XHJcbiAgICAgICAgICAgICAgICAgIGRhdGE9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXhDaG9pY2V9XHJcbiAgICAgICAgICAgICAgICAgIGluZGV4Q2hvaWNlPXtpbmRleENob2ljZX1cclxuICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgICAgICAgICBnZXRWYWx1ZXM9e2dldFZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgc2V0VmFsdWU9e3NldFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICB3YXRjaD17d2F0Y2h9XHJcbiAgICAgICAgICAgICAgICAgIHJlbW92ZT17cmVtb3ZlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yMCBtdC0yMFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtYWRkLWNob2ljZVwiIG9uQ2xpY2s9eygpID0+IGFkZENob2ljZSgpfT5cclxuICAgICAgICAgICAgKyBBREQgQ0hPSUNFXHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxMaW5lIC8+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImNlbnRlclwiIH19IGNsYXNzTmFtZT1cIm1iLTEwIG10LTEwXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGR1cGxpY2F0ZVF1ZXN0aW9uKGluZGV4KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxGaWxlQ29weUljb24gLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5EVVBMSUNBVEU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVRdWVzdGlvbihpbmRleCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8RGVsZXRlSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkRFTEVURTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TGluZSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFF1ZXN0aW9uRGV0YWlsKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZVwiO1xyXG5pbXBvcnQgeyBDaGVja2JveCwgR3JpZCwgVGV4dEZpZWxkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VBcHBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvQXBwQ29udGV4dFwiO1xyXG5cclxuY29uc3QgUXVlc3Rpb25MaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBpbmRleCwgaW5kZXhDaG9pY2UsIHJlbW92ZSB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IEFwcENvbnRleHQgPSB1c2VBcHBDb250ZXh0KCk7XHJcbiAgY29uc3Qge1xyXG4gICAgZm9ybTogeyByZWdpc3RlciwgZXJyb3JzLCBzZXRWYWx1ZSwgZ2V0VmFsdWVzIH0sXHJcbiAgfSA9IEFwcENvbnRleHQ7XHJcblxyXG4gIGNvbnN0IGNoZWNrZWRCeUZvcm0gPSBnZXRWYWx1ZXMoXHJcbiAgICBgcXVlc3Rpb25zLiR7aW5kZXh9LmNob2ljZVF1ZXN0aW9uLiR7aW5kZXhDaG9pY2V9LmNoZWNrZWRgXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gUmVhY3QudXNlU3RhdGUoXHJcbiAgICAoY2hlY2tlZEJ5Rm9ybSAmJiBjaGVja2VkQnlGb3JtKSB8fCBmYWxzZVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0Q2hlY2tlZChldmVudC50YXJnZXQuY2hlY2tlZCk7XHJcbiAgICBzZXRWYWx1ZShcclxuICAgICAgYHF1ZXN0aW9ucy4ke2luZGV4fS5jaG9pY2VRdWVzdGlvbi4ke2luZGV4Q2hvaWNlfS5jaGVja2VkYCxcclxuICAgICAgZXZlbnQudGFyZ2V0LmNoZWNrZWRcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17eyBhbGlnblNlbGY6IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBcImFyaWEtbGFiZWxcIjogXCJwcmltYXJ5IGNoZWNrYm94XCIgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvbipcIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiY2hvaWNlVGl0bGVcIlxyXG4gICAgICAgICAgICBlcnJvcj17Qm9vbGVhbihcclxuICAgICAgICAgICAgICBlcnJvcnM/LnF1ZXN0aW9ucz8uW2luZGV4XT8uY2hvaWNlUXVlc3Rpb24/LltpbmRleENob2ljZV1cclxuICAgICAgICAgICAgICAgID8uY2hvaWNlVGl0bGVcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgaGVscGVyVGV4dD17XHJcbiAgICAgICAgICAgICAgZXJyb3JzLnF1ZXN0aW9ucz8uW2luZGV4XT8uY2hvaWNlUXVlc3Rpb24/LltpbmRleENob2ljZV1cclxuICAgICAgICAgICAgICAgID8uY2hvaWNlVGl0bGU/Lm1lc3NhZ2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFxyXG4gICAgICAgICAgICAgIGBxdWVzdGlvbnMuJHtpbmRleH0uY2hvaWNlUXVlc3Rpb24uJHtpbmRleENob2ljZX0uY2hvaWNlVGl0bGVgLFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIkRlc2NyaXB0aW9uIGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGEuY2hvaWNlVGl0bGV9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIHtjaGVja2VkICYmIDxzbWFsbD5UaGlzIGFuc3dlciBpcyBjb3JyZWN0PC9zbWFsbD59XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7IGFsaWduU2VsZjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gcmVtb3ZlKGRhdGEuaWQpfT5cclxuICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb25MaXN0O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgZGVmYXVsdCBBcHBDb250ZXh0O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUFwcENvbnRleHQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgQWRkUXVlc3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQWRkUXVlc3Rpb25cIjtcbmltcG9ydCBRdWVzdGlvbkRldGFpbCBmcm9tIFwiLi4vY29tcG9uZW50cy9RdWVzdGlvbkRldGFpbFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcbmltcG9ydCBMaW5lIGZyb20gXCIuLi9jb21wb25lbnRzL0xpbmVcIjtcbmltcG9ydCBTbmFja2JhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXJcIjtcbmltcG9ydCBNdWlBbGVydCBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9BbGVydFwiO1xuXG5pbXBvcnQgeyB1c2VGb3JtLCB1c2VGaWVsZEFycmF5LCBDb250cm9sbGVyIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvQXBwQ29udGV4dFwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgY29udHJvbCxcbiAgICByZWdpc3RlcixcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gICAgaGFuZGxlU3VibWl0LFxuICAgIHdhdGNoLFxuICAgIHNldFZhbHVlLFxuICAgIGdldFZhbHVlcyxcbiAgfSA9IHVzZUZvcm0oe1xuICAgIGRlZmF1bHRWYWx1ZXM6IHtcbiAgICAgIHF1ZXN0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgcXVlc3Rpb25zTmFtZTogXCJcIixcbiAgICAgICAgICBjaG9pY2VRdWVzdGlvbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjaG9pY2VUaXRsZTogXCJcIixcbiAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHsgZmllbGRzLCBhcHBlbmQsIHByZXBlbmQsIHJlbW92ZSwgc3dhcCwgbW92ZSwgaW5zZXJ0IH0gPSB1c2VGaWVsZEFycmF5KFxuICAgIHtcbiAgICAgIGNvbnRyb2wsXG4gICAgICBuYW1lOiBcInF1ZXN0aW9uc1wiLFxuICAgIH1cbiAgKTtcblxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBpZiAoZGF0YT8ucXVlc3Rpb25zLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgZmlsbCBRdWVzdGlvbiBhdCBsZWFzdCAxIHF1ZXN0aW9uLlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldE9wZW4odHJ1ZSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJkYXRhOiBcIiwgZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFkZFF1ZXN0aW9uID0gKCkgPT4ge1xuICAgIGFwcGVuZCh7XG4gICAgICBxdWVzdGlvbnNOYW1lOiBcIlwiLFxuICAgICAgY2hvaWNlUXVlc3Rpb246IFtcbiAgICAgICAge1xuICAgICAgICAgIGNob2ljZVRpdGxlOiBcIlwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9IChldmVudCwgcmVhc29uKSA9PiB7XG4gICAgaWYgKHJlYXNvbiA9PT0gXCJjbGlja2F3YXlcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IHZhbHVlc0NvbnRleHQgPSB7XG4gICAgZm9ybToge1xuICAgICAgcmVnaXN0ZXIsXG4gICAgICBlcnJvcnMsXG4gICAgICBhcHBlbmQsXG4gICAgICBzZXRWYWx1ZSxcbiAgICAgIGdldFZhbHVlcyxcbiAgICAgIHdhdGNoLFxuICAgICAgY29udHJvbCxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IGR1cGxpY2F0ZVF1ZXN0aW9uID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgZGF0YUR1cCA9IGdldFZhbHVlcyhcInF1ZXN0aW9uc1wiKTtcbiAgICBhcHBlbmQoZGF0YUR1cFtpbmRleF0pO1xuICB9O1xuXG4gIGNvbnN0IHZhbHVlcyA9IGdldFZhbHVlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlc0NvbnRleHR9PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiIH19IGNsYXNzTmFtZT1cIm1iLTIwXCI+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTIwIHF1ZXN0aW9uLWRldGFpbC1ib3hcIj5cbiAgICAgICAgICB7LyogPHVsPiAqL317XCIgXCJ9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi0xMFwiPlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtaGVhZGVyXCI+UXVlc3Rpb25uYWlyZSBEZXRhaWw8L2xhYmVsPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWUqXCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicXVlc3Rpb25UaXRsZVwiXG4gICAgICAgICAgICAgICAgICBlcnJvcj17Qm9vbGVhbihlcnJvcnMucXVlc3Rpb25UaXRsZSl9XG4gICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnMucXVlc3Rpb25UaXRsZT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwicXVlc3Rpb25UaXRsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlF1ZXN0aW9uIFRpdGxlIGlzIHJlcXVpcmVkLlwiLFxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAge2ZpZWxkcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgIDxRdWVzdGlvbkRldGFpbFxuICAgICAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgIHJlbW92ZVF1ZXN0aW9uPXtyZW1vdmV9XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBkdXBsaWNhdGVRdWVzdGlvbj17ZHVwbGljYXRlUXVlc3Rpb259XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8QWRkUXVlc3Rpb24gYWRkUXVlc3Rpb249e2FkZFF1ZXN0aW9ufSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNuYWNrYmFyXG4gICAgICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiBcInRvcFwiLCBob3Jpem9udGFsOiBcImNlbnRlclwiIH19XG4gICAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXszMDAwfVxuICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICA+XG4gICAgICAgICAgPE11aUFsZXJ0IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBzZXZlcml0eT1cInN1Y2Nlc3NcIj5cbiAgICAgICAgICAgIFN1Y2Nlc3MgITxiciAvPlxuICAgICAgICAgICAgQ2hlY2sgZm9ybSBkYXRhIGluIGxvZy4uLlxuICAgICAgICAgIDwvTXVpQWxlcnQ+XG4gICAgICAgIDwvU25hY2tiYXI+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhIb21lKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9EZWxldGVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9GaWxlQ29weVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2xhYi9BbGVydFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvb2stZm9ybVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9