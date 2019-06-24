webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/registro.jsx":
/*!*********************************!*\
  !*** ./components/registro.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _registro_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registro.scss */ "./components/registro.scss");
/* harmony import */ var _registro_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_registro_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./logo */ "./components/logo.jsx");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/functions */ "./components/utils/functions.js");
/* harmony import */ var cleave_js_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! cleave.js/react */ "./node_modules/cleave.js/react.js");
/* harmony import */ var cleave_js_react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(cleave_js_react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./spinner */ "./components/spinner.jsx");
/* harmony import */ var _success__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./success */ "./components/success.jsx");
/* harmony import */ var _fail__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fail */ "./components/fail.jsx");




















var RegistroContainer = function RegistroContainer(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "container_registro"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "header"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_logo__WEBPACK_IMPORTED_MODULE_12__["default"], {
    color: "#669f09",
    logoWidth: "30px",
    fontSize: "1.2rem"
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "body"
  }, children));
};

var Input = function Input(_ref2) {
  var id = _ref2.id,
      type = _ref2.type,
      placeholder = _ref2.placeholder,
      alert = _ref2.alert,
      alertText = _ref2.alertText,
      label = _ref2.label,
      labelText = _ref2.labelText,
      value = _ref2.value,
      onBlur = _ref2.onBlur,
      onFocus = _ref2.onFocus,
      onChange = _ref2.onChange;
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "input_cont"
  }, label && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
    id: "".concat(id, "Label"),
    htmlFor: id
  }, labelText), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
    value: value,
    id: id,
    name: id,
    type: type,
    placeholder: placeholder,
    onBlur: onBlur,
    onFocus: onFocus,
    onChange: onChange
  }), alert && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Alert"], {
    id: "".concat(id, "Alert")
  }, alertText));
};

var InputDate = function InputDate(_ref3) {
  var value = _ref3.value,
      onChange = _ref3.onChange,
      onFocus = _ref3.onFocus;
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "input_date_cont"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", null, "Cumplea\xF1os"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(cleave_js_react__WEBPACK_IMPORTED_MODULE_15___default.a, {
    onChange: onChange,
    onFocus: onFocus,
    value: value,
    name: "date",
    id: "birthday",
    placeholder: "DD/MM/YYYY",
    options: {
      date: true,
      datePattern: ['d', 'm', 'Y']
    }
  }));
};

var InputSelect = function InputSelect(_ref4) {
  var onChange = _ref4.onChange;
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("select", {
    onChange: onChange,
    id: "genre",
    className: "my_select"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
    defaultValue: "indefinido"
  }, "Genero"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
    value: "mujer"
  }, "Mujer"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
    value: "hombre"
  }, "Hombre"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
    value: "otro"
  }, "Otro"));
};

var PseudoRegistro = function PseudoRegistro(_ref5) {
  var values = _ref5.values,
      alerts = _ref5.alerts,
      handlers = _ref5.handlers,
      labels = _ref5.labels,
      onClick = _ref5.onClick;
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "innerContainer"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Input, {
    value: values.mail,
    id: "mail",
    type: "text",
    placeholder: "Introduzca su direccion de correo",
    alert: alerts.mailAlert,
    alertText: "Su direccion de correo no es valida",
    label: labels.mailLabel,
    labelText: "Correo",
    onBlur: handlers.onBlur,
    onFocus: handlers.onFocus,
    onChange: handlers.onChange
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Input, {
    value: values.pass,
    id: "pass",
    type: "password",
    placeholder: "Contrase\xF1a",
    alert: alerts.passAlert,
    alertText: "Su contrase\xF1a no es valida",
    label: labels.passLabel,
    labelText: "Contrase\xF1a",
    onBlur: handlers.onBlur,
    onFocus: handlers.onFocus,
    onChange: handlers.onChange
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Input, {
    value: values.rePass,
    id: "rePass",
    type: "password",
    placeholder: "Repetir Contrase\xF1a",
    alert: alerts.rePassAlert,
    alertText: "No coincide",
    label: labels.rePassLabel,
    labelText: "Repetir contrase\xF1a",
    onBlur: handlers.onBlur,
    onFocus: handlers.onFocus,
    onChange: handlers.onChange
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "footer"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Button"], {
    onClick: onClick,
    outline: true,
    color: "primary"
  }, "Siguiente")));
};

var Real = function Real(_ref6) {
  var onSubmit = _ref6.onSubmit,
      values = _ref6.values,
      alerts = _ref6.alerts,
      handlers = _ref6.handlers,
      labels = _ref6.labels,
      onClick = _ref6.onClick;
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
    method: "POST",
    onSubmit: onSubmit,
    className: "innerContainer"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Input, {
    value: values.name,
    id: "name",
    type: "text",
    placeholder: "Indique su nombre",
    alert: alerts.nameAlert,
    alertText: "Su nombre es requerido y no puede estar vacio",
    label: labels.nameLabel,
    labelText: "Nombre",
    onBlur: handlers.onBlur,
    onFocus: handlers.onFocus,
    onChange: handlers.onChange
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Input, {
    value: values.lastName,
    id: "lastName",
    type: "text",
    placeholder: "Indique su apellido",
    alert: alerts.lastNameAlert,
    alertText: "Su apellido es requerido y no puede estar vacio",
    label: labels.lastNameLabel,
    labelText: "Apellido",
    onBlur: handlers.onBlur,
    onFocus: handlers.onFocus,
    onChange: handlers.onChange
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(InputDate, {
    value: values.birthday,
    onBlur: handlers.onBlur,
    onFocus: handlers.onFocus,
    onChange: handlers.onChange
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(InputSelect, {
    onChange: handlers.onChange
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "footer"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Button"], {
    type: "submit",
    outline: true,
    color: "primary"
  }, "Registrar")));
};

var Registro =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Registro, _Component);

  function Registro(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Registro);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Registro).call(this, props));
    _this.state = {
      pseudo: true,
      mail: '',
      mailAlert: false,
      mailLabel: false,
      pass: '',
      passAlert: false,
      passLabel: false,
      rePass: '',
      rePassAlert: false,
      rePassLabel: false,
      real: false,
      name: '',
      nameAlert: false,
      nameLabel: false,
      lastName: '',
      lastNameAlert: false,
      lastNameLabel: false,
      birthday: '',
      birthdayAlert: false,
      birthdayLabel: false,
      genre: '',
      spinner: false,
      success: false,
      successText: '',
      fail: false,
      failText: false
    };
    _this.onBlur = _this.onBlur.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.onFocus = _this.onFocus.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.onChange = _this.onChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.onValidate = _this.onValidate.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.onSubmit = _this.onSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Registro, [{
    key: "onBlur",
    value: function onBlur(e) {
      var propLabel = "".concat(e.target.id, "Label");
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, propLabel, false));
    }
  }, {
    key: "onFocus",
    value: function onFocus(e) {
      var _this$setState2;

      var propLabel = "".concat(e.target.id, "Label");
      var propAlert = "".concat(e.target.id, "Alert");
      this.setState((_this$setState2 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$setState2, propLabel, true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$setState2, propAlert, false), _this$setState2));
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, e.target.id, e.target.value));
    }
  }, {
    key: "onValidate",
    value: function onValidate() {
      var _this$state = this.state,
          mail = _this$state.mail,
          pass = _this$state.pass,
          rePass = _this$state.rePass;

      if (!Object(_utils_functions__WEBPACK_IMPORTED_MODULE_14__["validateEmail"])(mail)) {
        this.setState({
          mailAlert: true
        });
      } else if (!Object(_utils_functions__WEBPACK_IMPORTED_MODULE_14__["validateEmpty"])(pass)) {
        this.setState({
          passAlert: true
        });
      } else if (!Object(_utils_functions__WEBPACK_IMPORTED_MODULE_14__["validateEmpty"])(rePass) || rePass !== pass) {
        this.setState({
          rePassAlert: true
        });
      } else {
        this.setState({
          pseudo: false,
          real: true
        });
      }
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      var _this$state2 = this.state,
          mail = _this$state2.mail,
          pass = _this$state2.pass,
          name = _this$state2.name,
          lastName = _this$state2.lastName,
          birthday = _this$state2.birthday,
          genre = _this$state2.genre;

      if (!Object(_utils_functions__WEBPACK_IMPORTED_MODULE_14__["validateEmpty"])(name)) {
        this.setState({
          nameAlert: true
        });
      } else if (!Object(_utils_functions__WEBPACK_IMPORTED_MODULE_14__["validateEmpty"])(lastName)) {
        this.setState({
          lastNameAlert: true
        });
      } else if (!Object(_utils_functions__WEBPACK_IMPORTED_MODULE_14__["validateEmpty"])(birthday)) {
        this.setState({
          birthday: '31/12/1970'
        });
      } else if (!Object(_utils_functions__WEBPACK_IMPORTED_MODULE_14__["validateEmpty"])(genre)) {
        this.setState({
          genero: 'indefinido'
        });
      } else {
        var _data;

        var data = (_data = {
          mail: mail,
          pass: pass
        }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_data, "pass", pass), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_data, "name", name), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_data, "lastName", lastName), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_data, "birthday", birthday), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_data, "genero", genre), _data);
        this.setState({
          spinner: true,
          real: false
        });
        isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()('/login', {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data)
        }).then(function (res) {
          if (res.status === 200) {
            res.text().then(function (resp) {
              _this2.setState({
                spinner: false,
                success: true,
                successText: "".concat(resp, " agregado con exito")
              });

              setTimeout(function () {
                _this2.setState({
                  pseudo: true,
                  success: false,
                  successText: ''
                });

                window.location = "/perfil";
              }, 3000);
            });
          } else {
            res.text().then(function (resp) {
              _this2.setState({
                spinner: false,
                fail: true,
                failText: "".concat(resp, " ya existe, intente de nuevo")
              });

              setTimeout(function () {
                _this2.setState({
                  pseudo: true,
                  fail: false,
                  failText: ''
                });
              }, 3000);
            });
          }
        }).catch(function (err) {
          return console.log(err);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
          pseudo = _this$state3.pseudo,
          mail = _this$state3.mail,
          mailAlert = _this$state3.mailAlert,
          mailLabel = _this$state3.mailLabel,
          pass = _this$state3.pass,
          passAlert = _this$state3.passAlert,
          passLabel = _this$state3.passLabel,
          rePass = _this$state3.rePass,
          rePassAlert = _this$state3.rePassAlert,
          rePassLabel = _this$state3.rePassLabel,
          real = _this$state3.real,
          name = _this$state3.name,
          nameAlert = _this$state3.nameAlert,
          nameLabel = _this$state3.nameLabel,
          lastName = _this$state3.lastName,
          lastNameAlert = _this$state3.lastNameAlert,
          lastNameLabel = _this$state3.lastNameLabel,
          birthday = _this$state3.birthday,
          birthdayAlert = _this$state3.birthdayAlert,
          birthdayLabel = _this$state3.birthdayLabel,
          spinner = _this$state3.spinner,
          success = _this$state3.success,
          successText = _this$state3.successText,
          fail = _this$state3.fail,
          failText = _this$state3.failText;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(RegistroContainer, null, pseudo && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(PseudoRegistro, {
        onClick: this.onValidate,
        values: {
          mail: mail,
          pass: pass,
          rePass: rePass
        },
        handlers: {
          onBlur: this.onBlur,
          onFocus: this.onFocus,
          onChange: this.onChange
        },
        alerts: {
          mailAlert: mailAlert,
          passAlert: passAlert,
          rePassAlert: rePassAlert
        },
        labels: {
          mailLabel: mailLabel,
          passLabel: passLabel,
          rePassLabel: rePassLabel
        }
      }), real && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Real, {
        onSubmit: this.onSubmit,
        values: {
          name: name,
          lastName: lastName,
          birthday: birthday
        },
        handlers: {
          onBlur: this.onBlur,
          onFocus: this.onFocus,
          onChange: this.onChange
        },
        alerts: {
          nameAlert: nameAlert,
          lastNameAlert: lastNameAlert,
          birthdayAlert: birthdayAlert
        },
        labels: {
          nameLabel: nameLabel,
          lastNameLabel: lastNameLabel,
          birthdayLabel: birthdayLabel
        }
      }), spinner && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_spinner__WEBPACK_IMPORTED_MODULE_16__["default"], null), success && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_success__WEBPACK_IMPORTED_MODULE_17__["default"], {
        text: successText
      }), fail && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_fail__WEBPACK_IMPORTED_MODULE_18__["default"], {
        text: failText
      }));
    }
  }]);

  return Registro;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Registro);

/***/ })

})
//# sourceMappingURL=index.js.2e2b75d7f182fce0910a.hot-update.js.map