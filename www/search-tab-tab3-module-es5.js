function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-tab-tab3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-tab/tab3.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-tab/tab3.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSearchTabTab3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-toolbar color=\"transparent\">\n  <ion-searchbar animated=\"true\" show-cancel-button=\"focus\" color=\"light\"></ion-searchbar>\n</ion-toolbar>\n\n\n<ion-content fullscreen>\n  <ion-card>\n    <ion-item>\n      <div style=\"float:left;\">\n        <img src=\"../../../assets/img/avatar.jpg\" alt=\"Avatar\" style=\"float: left;\">\n      </div>\n      <h3>&nbsp;&nbsp;UserName</h3>\n\n    </ion-item>\n    <ion-button color=\"tertiary\" expand=\"full\" (click)=\"sendInv()\">\n      <ion-icon name=\"person-add-outline\"></ion-icon>&nbsp;&nbsp;&nbsp; Add to my team\n    </ion-button>\n  </ion-card>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/search-tab/tab3-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/search-tab/tab3-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: Tab3PageRoutingModule */

  /***/
  function srcAppPagesSearchTabTab3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function () {
      return Tab3PageRoutingModule;
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


    var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/pages/search-tab/tab3.page.ts");

    var routes = [{
      path: '',
      component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"]
    }];

    var Tab3PageRoutingModule = function Tab3PageRoutingModule() {
      _classCallCheck(this, Tab3PageRoutingModule);
    };

    Tab3PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab3PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/search-tab/tab3.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/search-tab/tab3.module.ts ***!
    \*************************************************/

  /*! exports provided: Tab3PageModule */

  /***/
  function srcAppPagesSearchTabTab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
      return Tab3PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/pages/search-tab/tab3.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./tab3-routing.module */
    "./src/app/pages/search-tab/tab3-routing.module.ts");

    var Tab3PageModule = function Tab3PageModule() {
      _classCallCheck(this, Tab3PageModule);
    };

    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
      }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"]],
      declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })], Tab3PageModule);
    /***/
  },

  /***/
  "./src/app/pages/search-tab/tab3.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/search-tab/tab3.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSearchTabTab3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  margin-top: 51px;\n}\n\nimg {\n  border-radius: 50%;\n  width: 107px;\n}\n\nion-content {\n  --background: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VhcmNoLXRhYi9DOlxcVXNlcnNcXFRBaWViXFxEb2N1bWVudHNcXEdpdEh1YlxcTmxpbml0LUFuZ3VsYXIvc3JjXFxhcHBcXHBhZ2VzXFxzZWFyY2gtdGFiXFx0YWIzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2VhcmNoLXRhYi90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNFSjs7QURDQTtFQUNJLDhEQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWFyY2gtdGFiL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgbWFyZ2luLXRvcDogNTFweDtcclxufVxyXG5pbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDEwN3B4O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM3ZjVhODMgMCUsICMwZDMyNGQgNzQlKTtcclxuICAgIFxyXG59XHJcbiIsImlvbi10b29sYmFyIHtcbiAgbWFyZ2luLXRvcDogNTFweDtcbn1cblxuaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTA3cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjN2Y1YTgzIDAlLCAjMGQzMjRkIDc0JSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/search-tab/tab3.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/search-tab/tab3.page.ts ***!
    \***********************************************/

  /*! exports provided: Tab3Page */

  /***/
  function srcAppPagesSearchTabTab3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
      return Tab3Page;
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
    /* harmony import */


    var src_app_components_add2team_add2team_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/components/add2team/add2team.component */
    "./src/app/components/add2team/add2team.component.ts");

    var Tab3Page = /*#__PURE__*/function () {
      function Tab3Page(animationCtrl, popoverCtrl) {
        _classCallCheck(this, Tab3Page);

        this.animationCtrl = animationCtrl;
        this.popoverCtrl = popoverCtrl;
      }

      _createClass(Tab3Page, [{
        key: "sendInv",
        value: function sendInv(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverCtrl.create({
                      component: src_app_components_add2team_add2team_component__WEBPACK_IMPORTED_MODULE_3__["Add2teamComponent"],
                      event: ev,
                      animated: true,
                      showBackdrop: true
                    });

                  case 2:
                    popover = _context.sent;
                    _context.next = 5;
                    return popover.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return Tab3Page;
    }();

    Tab3Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AnimationController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab3',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-tab/tab3.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab3.page.scss */
      "./src/app/pages/search-tab/tab3.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AnimationController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], Tab3Page);
    /***/
  }
}]);
//# sourceMappingURL=search-tab-tab3-module-es5.js.map