function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcomepage-welcomepage-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcomepage/welcomepage.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcomepage/welcomepage.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesWelcomepageWelcomepagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n\n  <section>\n    <h1>Nlinit </h1>\n\n\n\n\n\n    <ion-card class=\"card\">\n\n      <ion-item-divider>\n        <ion-label color=\"tertiary\">\n          Sign_up with\n        </ion-label>\n      </ion-item-divider>\n      <br>\n      <ion-button color=\"light\" expand=\"block\" fill=\"outline\" (click)=\"toSignup()\">\n        <ion-icon name=\"mail-outline\"></ion-icon> &nbsp;\n        <p> Signup with Email </p>\n      </ion-button>\n\n      <br>\n\n      <ion-button color=\"light\" expand=\"block\" fill=\"outline\">\n        <ion-icon name=\"logo-google\"></ion-icon> &nbsp;\n        <p> Login using Google</p>\n      </ion-button>\n\n\n      <ion-button color=\"light\" expand=\"block\" fill=\"outline\">\n        <ion-icon name=\"logo-facebook\"></ion-icon> &nbsp;\n        <p>Login using Facebook</p>\n      </ion-button>\n      <br>\n      <ion-item-divider>\n        <ion-label color=\"tertiary\">\n          Already got an account?\n        </ion-label>\n      </ion-item-divider>\n      <br>\n      <ion-button color=\"light\" expand=\"block\" fill=\"outline\" (click)=\"toLogin()\"> &nbsp;\n        <ion-icon name=\"log-in-outline\"></ion-icon>\n        <p>Login</p>\n      </ion-button>\n\n    </ion-card>\n  </section>\n\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/welcomepage/welcomepage-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/welcomepage/welcomepage-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: WelcomepagePageRoutingModule */

  /***/
  function srcAppPagesWelcomepageWelcomepageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomepagePageRoutingModule", function () {
      return WelcomepagePageRoutingModule;
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


    var _welcomepage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./welcomepage.page */
    "./src/app/pages/welcomepage/welcomepage.page.ts");

    var routes = [{
      path: '',
      component: _welcomepage_page__WEBPACK_IMPORTED_MODULE_3__["WelcomepagePage"]
    }];

    var WelcomepagePageRoutingModule = function WelcomepagePageRoutingModule() {
      _classCallCheck(this, WelcomepagePageRoutingModule);
    };

    WelcomepagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WelcomepagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/welcomepage/welcomepage.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/welcomepage/welcomepage.module.ts ***!
    \*********************************************************/

  /*! exports provided: WelcomepagePageModule */

  /***/
  function srcAppPagesWelcomepageWelcomepageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomepagePageModule", function () {
      return WelcomepagePageModule;
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


    var _welcomepage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./welcomepage-routing.module */
    "./src/app/pages/welcomepage/welcomepage-routing.module.ts");
    /* harmony import */


    var _welcomepage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./welcomepage.page */
    "./src/app/pages/welcomepage/welcomepage.page.ts");

    var WelcomepagePageModule = function WelcomepagePageModule() {
      _classCallCheck(this, WelcomepagePageModule);
    };

    WelcomepagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _welcomepage_routing_module__WEBPACK_IMPORTED_MODULE_5__["WelcomepagePageRoutingModule"]],
      declarations: [_welcomepage_page__WEBPACK_IMPORTED_MODULE_6__["WelcomepagePage"]]
    })], WelcomepagePageModule);
    /***/
  },

  /***/
  "./src/app/pages/welcomepage/welcomepage.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/welcomepage/welcomepage.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesWelcomepageWelcomepagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  margin: 0;\n  padding: 0px;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 8px;\n}\n\nsection {\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  background: linear-gradient(-45deg, #0ce729, #aa0bf3, #29f76e, #e42851);\n  background-size: 200% 200%;\n  position: relative;\n  -webkit-animation: change 10s ease-in-out infinite;\n          animation: change 10s ease-in-out infinite;\n}\n\nh1 {\n  font-size: 5rem;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  border: 3px solid #fff;\n  position: absolute;\n  top: 31%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 5rem 3rem;\n}\n\nion-card {\n  padding: 1rem 2rem;\n}\n\n@-webkit-keyframes change {\n  0% {\n    background-position: 0 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0 50%;\n  }\n}\n\n@keyframes change {\n  0% {\n    background-position: 0 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0 50%;\n  }\n}\n\n.card {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.096);\n}\n\nion-button {\n  margin-bottom: 7px;\n  --background-hover-opacity: 1.5;\n  --border-color: #9c4365;\n  --padding-top: 2px;\n  --ripple-color: #23A6D5;\n}\n\nion-divider {\n  --padding-end: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2VsY29tZXBhZ2UvQzpcXFVzZXJzXFxUQWllYlxcRG9jdW1lbnRzXFxHaXRIdWJcXE5saW5pdC1Bbmd1bGFyL3NyY1xcYXBwXFxwYWdlc1xcd2VsY29tZXBhZ2VcXHdlbGNvbWVwYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvd2VsY29tZXBhZ2Uvd2VsY29tZXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFlBQUE7RUFFQSxzQkFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUVBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7VUFBQSwwQ0FBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDQUo7O0FESUE7RUFDSSxrQkFBQTtBQ0RKOztBRElBO0VBQ0k7SUFDSSwwQkFBQTtFQ0ROO0VESUU7SUFDSSw2QkFBQTtFQ0ZOO0VES0U7SUFDSSwwQkFBQTtFQ0hOO0FBQ0Y7O0FEUkE7RUFDSTtJQUNJLDBCQUFBO0VDRE47RURJRTtJQUNJLDZCQUFBO0VDRk47RURLRTtJQUNJLDBCQUFBO0VDSE47QUFDRjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7RUFDQSxzQ0FBQTtBQ1BKOztBRFdBO0VBQ0ksa0JBQUE7RUFFQSwrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ1RKOztBRFlBO0VBQ0ksa0JBQUE7QUNUSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlbGNvbWVwYWdlL3dlbGNvbWVwYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG5cclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMwY2U3MjksICNhYTBiZjMsICMyOWY3NmUsICNlNDI4NTEpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDIwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBhbmltYXRpb246IGNoYW5nZSAxMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzElO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBwYWRkaW5nOiA1cmVtIDNyZW07XHJcblxyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY2hhbmdlIHtcclxuICAgIDAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDUwJTtcclxuICAgIH1cclxuXHJcbiAgICA1MCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgNTAlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbi5jYXJkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOTYpO1xyXG5cclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcblxyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDEuNTtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjOWM0MzY1O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgLS1yaXBwbGUtY29sb3I6ICMyM0E2RDU7XHJcbn1cclxuXHJcbmlvbi1kaXZpZGVyIHtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDJweDtcclxuXHJcbn0iLCIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDhweDtcbn1cblxuc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjMGNlNzI5LCAjYWEwYmYzLCAjMjlmNzZlLCAjZTQyODUxKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDIwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYW5pbWF0aW9uOiBjaGFuZ2UgMTBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMxJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcGFkZGluZzogNXJlbSAzcmVtO1xufVxuXG5pb24tY2FyZCB7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbn1cblxuQGtleWZyYW1lcyBjaGFuZ2Uge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA1MCU7XG4gIH1cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDUwJTtcbiAgfVxufVxuLmNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOTYpO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMS41O1xuICAtLWJvcmRlci1jb2xvcjogIzljNDM2NTtcbiAgLS1wYWRkaW5nLXRvcDogMnB4O1xuICAtLXJpcHBsZS1jb2xvcjogIzIzQTZENTtcbn1cblxuaW9uLWRpdmlkZXIge1xuICAtLXBhZGRpbmctZW5kOiAycHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/welcomepage/welcomepage.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/welcomepage/welcomepage.page.ts ***!
    \*******************************************************/

  /*! exports provided: WelcomepagePage */

  /***/
  function srcAppPagesWelcomepageWelcomepagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomepagePage", function () {
      return WelcomepagePage;
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


    var src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/app.component */
    "./src/app/app.component.ts");

    var WelcomepagePage = /*#__PURE__*/function () {
      function WelcomepagePage(router) {
        _classCallCheck(this, WelcomepagePage);

        this.router = router;
      }

      _createClass(WelcomepagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"].isTabVisible = false;
        }
      }, {
        key: "toSignup",
        value: function toSignup() {
          this.router.navigate(['signup']);
        }
      }, {
        key: "toLogin",
        value: function toLogin() {
          this.router.navigate(['login']);
        }
      }]);

      return WelcomepagePage;
    }();

    WelcomepagePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    WelcomepagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-welcomepage',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./welcomepage.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcomepage/welcomepage.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./welcomepage.page.scss */
      "./src/app/pages/welcomepage/welcomepage.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], WelcomepagePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-welcomepage-welcomepage-module-es5.js.map