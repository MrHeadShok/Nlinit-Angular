function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messages-tab-messages-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/messages-tab/messages.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/messages-tab/messages.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMessagesTabMessagesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./src/app/pages/messages-tab/messages-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/messages-tab/messages-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: MessagesPageRoutingModule */

  /***/
  function srcAppPagesMessagesTabMessagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesPageRoutingModule", function () {
      return MessagesPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _messages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./messages.page */
    "./src/app/pages/messages-tab/messages.page.ts");

    var routes = [{
      path: '',
      component: _messages_page__WEBPACK_IMPORTED_MODULE_3__["MessagesPage"]
    }];

    var MessagesPageRoutingModule = function MessagesPageRoutingModule() {
      _classCallCheck(this, MessagesPageRoutingModule);
    };

    MessagesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MessagesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/messages-tab/messages.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/messages-tab/messages.module.ts ***!
    \*******************************************************/

  /*! exports provided: MessagesPageModule */

  /***/
  function srcAppPagesMessagesTabMessagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function () {
      return MessagesPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./messages-routing.module */
    "./src/app/pages/messages-tab/messages-routing.module.ts");
    /* harmony import */


    var _messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./messages.page */
    "./src/app/pages/messages-tab/messages.page.ts");

    var MessagesPageModule = function MessagesPageModule() {
      _classCallCheck(this, MessagesPageModule);
    };

    MessagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessagesPageRoutingModule"]],
      declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]]
    })], MessagesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/messages-tab/messages.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/messages-tab/messages.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMessagesTabMessagesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-custom-menu {\n  --width: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVzc2FnZXMtdGFiL0M6XFxVc2Vyc1xcVEFpZWJcXERvY3VtZW50c1xcR2l0SHViXFxObGluaXQtQW5ndWxhci9zcmNcXGFwcFxccGFnZXNcXG1lc3NhZ2VzLXRhYlxcbWVzc2FnZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9tZXNzYWdlcy10YWIvbWVzc2FnZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWVzc2FnZXMtdGFiL21lc3NhZ2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1jdXN0b20tbWVudSB7XHJcbiAgICAtLXdpZHRoOiA1MDBweDtcclxufSIsIi5teS1jdXN0b20tbWVudSB7XG4gIC0td2lkdGg6IDUwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/messages-tab/messages.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/messages-tab/messages.page.ts ***!
    \*****************************************************/

  /*! exports provided: MessagesPage */

  /***/
  function srcAppPagesMessagesTabMessagesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesPage", function () {
      return MessagesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var MessagesPage = /*#__PURE__*/function () {
      function MessagesPage(menu) {
        _classCallCheck(this, MessagesPage);

        this.menu = menu;
      }

      _createClass(MessagesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MessagesPage;
    }();

    MessagesPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }];
    };

    MessagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-messages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./messages.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/messages-tab/messages.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./messages.page.scss */
      "./src/app/pages/messages-tab/messages.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], MessagesPage);
    /***/
  }
}]);
//# sourceMappingURL=messages-tab-messages-module-es5.js.map