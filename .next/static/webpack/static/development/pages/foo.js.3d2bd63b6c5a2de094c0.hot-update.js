webpackHotUpdate("static/development/pages/foo.js",{

/***/ "./pages/foo.jsx":
/*!***********************!*\
  !*** ./pages/foo.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);









var Foo =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Foo, _Component);

  function Foo(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Foo);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Foo).call(this, props));
    _this.state = {
      mail: '',
      pass: '',
      fooText: '',
      reqid: ''
    };
    _this.onChange = _this.onChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)); //this.onSubmit = this.onSubmit.bind(this);

    _this.onSubmit2 = _this.onSubmit2.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Foo, [{
    key: "onChange",
    value: function onChange(e) {
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.id, e.target.value));
    }
    /* onSubmit(e) {
       e.preventDefault();
       const { mail, pass } = this.state;
       const data = {
         mail: mail,
         pass: pass,
       }
        const options = {
         headers: { "Content-type" : 'application/json' },
         method:'POST',
         body: JSON.stringify(data),
       }
       fetch(`https://greenlink-project.now.sh/api/login`, options)
         .then(res => res.text())
          .then(res => {
           console.log(res)
          })
         .catch(err => console.log(err));
     }*/

  }, {
    key: "onSubmit2",
    value: function onSubmit2(e) {
      e.preventDefault();
      var reqid = this.state.reqid;
      var data = {
        id: reqid
      };
      fetch('https://greenlink-project.now.sh/api/perfil?id=5d12de4b45e676da0a477ea1', {
        mode: 'cors'
        /*,{
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
          method: "POST",
        }*/

      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        return console.log(res);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "msg"
      }, this.state.fooText), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        mthod: "POST",
        onSubmit: this.onSubmit,
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: 100
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        value: this.state.mail,
        id: "mail",
        type: "text",
        onChange: this.onChange
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        value: this.state.pass,
        id: "pass",
        type: "text",
        onChange: this.onChange
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit"
      }, "Enviar")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        value: this.state.reqid,
        id: "reqid",
        type: "text",
        onChange: this.onChange
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.onSubmit2,
        type: "button"
      }, "enviar id")));
    }
  }]);

  return Foo;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Foo); //?id=$id"

/***/ })

})
//# sourceMappingURL=foo.js.3d2bd63b6c5a2de094c0.hot-update.js.map