function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n\n  <div class=\"credentials\">\n    <div style=\"float:left;\">\n      <img src=\"../../../assets/img/avatar.jpg\" alt=\"Avatar\" style=\"float: left;\">\n    </div>\n    <div class=\"user\">\n      <p>Username</p>\n    </div>\n    <div style=\"clear: left;\"></div>\n  </div>\n\n\n\n  <ion-card fullscreen>\n    <ion-card-header color=\"danger\">\n      <ion-card-title color=\"light\"> Information</ion-card-title>\n    </ion-card-header>\n    <ion-card-header color=\"medium\">\n      <ion-card-subtitle color=\"dark\">\n        Full name\n      </ion-card-subtitle>\n    </ion-card-header>\n\n    <ion-card-header color=\"light\">\n      <ion-card-subtitle color=\"dark\">\n        Role\n      </ion-card-subtitle>\n    </ion-card-header>\n\n    <ion-card-header color=\"medium\">\n      <ion-card-subtitle color=\"dark\">\n        Email Adress\n      </ion-card-subtitle>\n    </ion-card-header>\n\n    <ion-card-header color=\"light\">\n      <ion-card-subtitle color=\"dark\">\n        Password\n      </ion-card-subtitle>\n    </ion-card-header>\n\n\n\n\n\n  </ion-card>\n\n\n  <ion-card fullscreen style=\"margin-top: 21px;\">\n    <ion-card-header color=\"danger\">\n      <ion-card-title color=\"light\"> Contributions</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #doughnutCanvas></canvas>\n\n    </ion-card-content>\n\n\n  </ion-card>\n\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/profile/profile-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ProfilePageRoutingModule */

  /***/
  function srcAppPagesProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
      return ProfilePageRoutingModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/profile/profile.page.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }];

    var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
      _classCallCheck(this, ProfilePageRoutingModule);
    };

    ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/profile/profile.module.ts ***!
    \*************************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppPagesProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/pages/profile/profile-routing.module.ts");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/profile/profile.page.ts");

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/profile/profile.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);\n  background-color: #7f5a83;\n}\n\n.credentials {\n  margin-top: 63px;\n  margin-left: 20px;\n}\n\nimg {\n  border-radius: 50%;\n  width: 107px;\n}\n\n.user {\n  float: left;\n  margin-top: 35px;\n  margin-left: 9px;\n}\n\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\np {\n  font-weight: bold;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9DOlxcVXNlcnNcXFRBaWViXFxEb2N1bWVudHNcXEdpdEh1YlxcTmxpbml0LUFuZ3VsYXIvc3JjXFxhcHBcXHBhZ2VzXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhEQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzdmNWE4MyAwJSwgIzBkMzI0ZCA3NCUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdmNWE4MztcclxuICAgIFxyXG59XHJcbi5jcmVkZW50aWFsc3tcclxuICAgIG1hcmdpbi10b3A6IDYzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuXHJcbmltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMTA3cHg7XHJcbn1cclxuXHJcbi51c2Vye1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOjM1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xyXG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjN2Y1YTgzIDAlLCAjMGQzMjRkIDc0JSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZjVhODM7XG59XG5cbi5jcmVkZW50aWFscyB7XG4gIG1hcmdpbi10b3A6IDYzcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG5pbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMDdweDtcbn1cblxuLnVzZXIge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbn1cblxuOnJvb3Qge1xuICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xufVxuXG5wIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/profile/profile.page.ts ***!
    \***********************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppPagesProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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


    var src_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);

    var ProfilePage = /*#__PURE__*/function () {
      function ProfilePage() {
        _classCallCheck(this, ProfilePage);
      }

      _createClass(ProfilePage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].isTabVisible = true;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.doughnutChartMethod(); //to be displayed when your page is loaded
        }
      }, {
        key: "doughnutChartMethod",
        value: function doughnutChartMethod() {
          this.doughnutChart = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
              labels: ['Total projects', 'Currently working on'],
              datasets: [{
                label: '# of Votes',
                data: [100, 30],
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(255, 99, 132, 0.2)'],
                hoverBackgroundColor: ['#FFCE56', '#FF6384']
              }]
            }
          });
        }
      }]);

      return ProfilePage;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('doughnutCanvas', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ProfilePage.prototype, "doughnutCanvas", void 0);
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/pages/profile/profile.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-profile-profile-module-es5.js.map