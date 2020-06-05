function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-projectspage-projectspage-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projectspage/projectspage.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projectspage/projectspage.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProjectspageProjectspagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content>\n\n\n<div class=\"description\">\n  <h2>Welcome back!</h2>\n  <p>Below you can find all of your projects.</p>\n    <p> You can always add new projects by taping the <ion-icon name=\"add-outline\"></ion-icon>\n  </p>\n  \n</div>\n\n  <div class=\"projectcards\">\n  <ion-card type=\"button\" (click)=\"navigateToDashboard()\">\n    <ion-card-header>\n      <ion-card-title>Projectname1</ion-card-title>\n      <ion-card-subtitle>due to date</ion-card-subtitle>\n\n    </ion-card-header>\n    <ion-card-content>\n      Description\n    </ion-card-content>\n    \n   \n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Projectname2</ion-card-title>\n            <ion-card-subtitle>due to date</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      Description\n    </ion-card-content>\n  </ion-card>\n</div>\n\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"dark\" (click)=\"addpPoject()\">\n      <ion-icon name=\"add-outline\"></ion-icon>\n    </ion-fab-button>\n\n\n\n  </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/projectspage/projectspage-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/projectspage/projectspage-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ProjectspagePageRoutingModule */

  /***/
  function srcAppPagesProjectspageProjectspageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectspagePageRoutingModule", function () {
      return ProjectspagePageRoutingModule;
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


    var _projectspage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./projectspage.page */
    "./src/app/pages/projectspage/projectspage.page.ts");

    var routes = [{
      path: '',
      component: _projectspage_page__WEBPACK_IMPORTED_MODULE_3__["ProjectspagePage"]
    }];

    var ProjectspagePageRoutingModule = function ProjectspagePageRoutingModule() {
      _classCallCheck(this, ProjectspagePageRoutingModule);
    };

    ProjectspagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProjectspagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/projectspage/projectspage.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/projectspage/projectspage.module.ts ***!
    \***********************************************************/

  /*! exports provided: ProjectspagePageModule */

  /***/
  function srcAppPagesProjectspageProjectspageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectspagePageModule", function () {
      return ProjectspagePageModule;
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


    var _projectspage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./projectspage-routing.module */
    "./src/app/pages/projectspage/projectspage-routing.module.ts");
    /* harmony import */


    var _projectspage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./projectspage.page */
    "./src/app/pages/projectspage/projectspage.page.ts");

    var ProjectspagePageModule = function ProjectspagePageModule() {
      _classCallCheck(this, ProjectspagePageModule);
    };

    ProjectspagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      entryComponents: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _projectspage_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjectspagePageRoutingModule"]],
      declarations: [_projectspage_page__WEBPACK_IMPORTED_MODULE_6__["ProjectspagePage"]]
    })], ProjectspagePageModule);
    /***/
  },

  /***/
  "./src/app/pages/projectspage/projectspage.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/projectspage/projectspage.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProjectspageProjectspagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);\n  background-color: #7f5a83;\n}\n\nh2 {\n  font-weight: bold;\n  color: white;\n  font-family: \"Arial Black\", Gadget, sans-serif;\n}\n\np {\n  font-weight: bold;\n  color: white;\n  font-family: \"Arial Black\", Gadget, sans-serif;\n}\n\nion-card {\n  position: relative;\n  margin-top: 30px;\n}\n\ndiv.projectcards {\n  margin-top: 53px;\n}\n\n.description {\n  margin-top: 73px;\n  margin-left: 13px;\n  margin-right: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdHNwYWdlL0M6XFxVc2Vyc1xcVEFpZWJcXERvY3VtZW50c1xcR2l0SHViXFxObGluaXQtQW5ndWxhci9zcmNcXGFwcFxccGFnZXNcXHByb2plY3RzcGFnZVxccHJvamVjdHNwYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvamVjdHNwYWdlL3Byb2plY3RzcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDTSw4REFBQTtFQUlBLHlCQUFBO0FDRk47O0FETUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw4Q0FBQTtBQ0hKOztBRFNBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsOENBQUE7QUNOSjs7QURXQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNSSjs7QURXQTtFQUNJLGdCQUFBO0FDUko7O0FEV0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2plY3RzcGFnZS9wcm9qZWN0c3BhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM3ZjVhODMgMCUsICMwZDMyNGQgNzQlKTtcclxuXHJcblxyXG5cclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdmNWE4MztcclxuXHJcbn1cclxuXHJcbmgye1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogXCJBcmlhbCBCbGFja1wiLFxyXG4gICAgR2FkZ2V0LFxyXG4gICAgc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogXCJBcmlhbCBCbGFja1wiLFxyXG4gICAgR2FkZ2V0LFxyXG4gICAgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG5kaXYucHJvamVjdGNhcmRze1xyXG4gICAgbWFyZ2luLXRvcDogNTNweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDczcHggO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEzcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEzcHg7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzdmNWE4MyAwJSwgIzBkMzI0ZCA3NCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Y1YTgzO1xufVxuXG5oMiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsIEJsYWNrXCIsIEdhZGdldCwgc2Fucy1zZXJpZjtcbn1cblxucCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsIEJsYWNrXCIsIEdhZGdldCwgc2Fucy1zZXJpZjtcbn1cblxuaW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbmRpdi5wcm9qZWN0Y2FyZHMge1xuICBtYXJnaW4tdG9wOiA1M3B4O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiA3M3B4O1xuICBtYXJnaW4tbGVmdDogMTNweDtcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/projectspage/projectspage.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/projectspage/projectspage.page.ts ***!
    \*********************************************************/

  /*! exports provided: ProjectspagePage */

  /***/
  function srcAppPagesProjectspageProjectspagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectspagePage", function () {
      return ProjectspagePage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var src_app_components_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/add-project/add-project.component */
    "./src/app/components/add-project/add-project.component.ts");

    var ProjectspagePage = /*#__PURE__*/function () {
      function ProjectspagePage(routerOutlet, modalController, router, animationCtrl) {
        _classCallCheck(this, ProjectspagePage);

        this.routerOutlet = routerOutlet;
        this.modalController = modalController;
        this.router = router;
        this.animationCtrl = animationCtrl;
        this.taskName = '';
        this.taskList = [];
      }

      _createClass(ProjectspagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("DEbug: ProjectspagePage");
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"].isTabVisible = true;
        }
      }, {
        key: "navigateToDashboard",
        value: function navigateToDashboard() {
          this.router.navigate(['tabs/tab1']);
          console.log("Directed to dashboard");
        }
      }, {
        key: "addpPoject",
        value: function addpPoject() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var enterAnimation, leaveAnimation, modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    enterAnimation = function enterAnimation(baseEl) {
                      var backdropAnimation = _this.animationCtrl.create().addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

                      var wrapperAnimation = _this.animationCtrl.create().addElement(baseEl.querySelector('.modal-wrapper')).keyframes([{
                        offset: 0,
                        opacity: '0',
                        transform: 'scale(0)'
                      }, {
                        offset: 1,
                        opacity: '0.99',
                        transform: 'scale(1)'
                      }]);

                      return _this.animationCtrl.create().addElement(baseEl).easing('ease-out').duration(500).addAnimation([backdropAnimation, wrapperAnimation]);
                    };

                    leaveAnimation = function leaveAnimation(baseEl) {
                      return enterAnimation(baseEl).direction('reverse');
                    };

                    _context.next = 4;
                    return this.modalController.create({
                      component: src_app_components_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_5__["AddProjectComponent"],
                      enterAnimation: enterAnimation,
                      leaveAnimation: leaveAnimation
                    });

                  case 4:
                    modal = _context.sent;
                    _context.next = 7;
                    return modal.present();

                  case 7:
                    return _context.abrupt("return", _context.sent);

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ProjectspagePage;
    }();

    ProjectspagePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AnimationController"]
      }];
    };

    ProjectspagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projectspage',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projectspage.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projectspage/projectspage.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projectspage.page.scss */
      "./src/app/pages/projectspage/projectspage.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AnimationController"]])], ProjectspagePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-projectspage-projectspage-module-es5.js.map