function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-tab-messages-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team-tab/messages.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team-tab/messages.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTeamTabMessagesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n    <ion-card class=\"firstcard\">\r\n        <ion-card-title>\r\n            <ion-item>\r\n                <div style=\"float:left;\">\r\n                    <img src=\"../../../assets/img/avatar.jpg\" alt=\"Avatar\" style=\"float: left;\">\r\n                </div>\r\n                <h3>&nbsp;&nbsp;UserName</h3>\r\n\r\n\r\n                <ion-fab-button class=\"message\" color=\"warning\">\r\n                    <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\r\n                </ion-fab-button>\r\n\r\n\r\n\r\n            </ion-item>\r\n        </ion-card-title>\r\n\r\n        <ion-card-title>\r\n            <ion-item>\r\n                Tasks will be listed here\r\n\r\n            </ion-item>\r\n        </ion-card-title>\r\n    </ion-card>\r\n\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/team-tab/messages-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/team-tab/messages-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: MessagesPageRoutingModule */

  /***/
  function srcAppPagesTeamTabMessagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/pages/team-tab/messages.page.ts");

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
  "./src/app/pages/team-tab/messages.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/team-tab/messages.module.ts ***!
    \***************************************************/

  /*! exports provided: MessagesPageModule */

  /***/
  function srcAppPagesTeamTabMessagesModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/pages/team-tab/messages-routing.module.ts");
    /* harmony import */


    var _messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./messages.page */
    "./src/app/pages/team-tab/messages.page.ts");

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
  "./src/app/pages/team-tab/messages.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/team-tab/messages.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTeamTabMessagesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);\n}\n\n.firstcard {\n  margin-top: 63px;\n}\n\nion-card {\n  margin-top: 11px;\n}\n\nimg {\n  border-radius: 50%;\n  width: 107px;\n}\n\n.message {\n  margin-left: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVhbS10YWIvQzpcXFVzZXJzXFxUQWllYlxcRG9jdW1lbnRzXFxHaXRIdWJcXE5saW5pdC1Bbmd1bGFyL3NyY1xcYXBwXFxwYWdlc1xcdGVhbS10YWJcXG1lc3NhZ2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVhbS10YWIvbWVzc2FnZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOERBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVhbS10YWIvbWVzc2FnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjN2Y1YTgzIDAlLCAjMGQzMjRkIDc0JSk7XHJcbn1cclxuXHJcbi5maXJzdGNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogNjNweDtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogMTFweDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAxMDdweDtcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzdmNWE4MyAwJSwgIzBkMzI0ZCA3NCUpO1xufVxuXG4uZmlyc3RjYXJkIHtcbiAgbWFyZ2luLXRvcDogNjNweDtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW4tdG9wOiAxMXB4O1xufVxuXG5pbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMDdweDtcbn1cblxuLm1lc3NhZ2Uge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/team-tab/messages.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/team-tab/messages.page.ts ***!
    \*************************************************/

  /*! exports provided: MessagesPage */

  /***/
  function srcAppPagesTeamTabMessagesPageTs(module, __webpack_exports__, __webpack_require__) {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team-tab/messages.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./messages.page.scss */
      "./src/app/pages/team-tab/messages.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], MessagesPage);
    /***/
  }
}]);
//# sourceMappingURL=team-tab-messages-module-es5.js.map