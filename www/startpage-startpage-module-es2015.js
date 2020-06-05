(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["startpage-startpage-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/startpage/startpage.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/startpage/startpage.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content >\n  <ion-app >\n    <ion-content fullscreen class=\"ion-padding\" scroll-y=\"false\">\n      <ion-slides>\n\n        <ion-slide>\n          <div class=\"slide\">\n            <img src=\"assets/img/log.png\"/>\n            <h2>Welcome!</h2>\n            <p>Are you<b>a business/ project owner? A teamleader? Or a startup?</b> Nlinit is your perfect buddy for this journey.</p>\n          </div>\n        </ion-slide>\n\n        <ion-slide>\n          <img src=\"assets/img/log.png\"/>\n          <h2>What is NLINIT?</h2>\n          <p><b>NLINIT</b> is your best friendBot, It allows you to track your workflow and manage your team while keeping everything safe for you.</p>\n        </ion-slide>\n\n        <ion-slide>\n          <img src=\"assets/img/log.png\"/>\n          <h2>Why NLINIT?</h2>\n          <p><b>NLINIT</b> is your best choice, for it is visually appealing and will keep you in touch with your team, giving you more time to spend on growing your business or spending it with your loved ones!.</p>\n        </ion-slide>\n\n        <ion-slide>\n          <img src=\"assets/img/log.png\"/>\n          <h2>Ready to lead?</h2>\n          <ion-button fill=\"clear\" (click)=\"navigateToSignUp()\">LET'S GO <ion-icon slot=\"end\" name=\"arrow-forward\" ></ion-icon></ion-button>\n        </ion-slide>\n\n      </ion-slides>\n    </ion-content>\n  </ion-app>\n\n</ion-content>\n\n<style>\n  ion-slides {\n    height: 100%;\n  }\n\n  .swiper-slide {\n    display: block;\n  }\n\n  .swiper-slide h2 {\n    margin-top: 2.8rem;\n  }\n\n  .swiper-slide img {\n    max-height: 50%;\n    max-width: 80%;\n    margin: 60px 0 40px;\n    pointer-events: none;\n  }\n\n  b {\n    font-weight: 500;\n  }\n\n  p {\n    padding: 0 40px;\n    font-size: 14px;\n    line-height: 1.5;\n    color: var(--ion-color-step-600, #60646b);\n  }\n\n  p b {\n    color: var(--ion-text-color, #000000);\n  }\n\n\n  \n</style>\n");

/***/ }),

/***/ "./src/app/pages/startpage/startpage-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/startpage/startpage-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: StartpagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartpagePageRoutingModule", function() { return StartpagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _startpage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startpage.page */ "./src/app/pages/startpage/startpage.page.ts");




const routes = [
    {
        path: '',
        component: _startpage_page__WEBPACK_IMPORTED_MODULE_3__["StartpagePage"]
    }
];
let StartpagePageRoutingModule = class StartpagePageRoutingModule {
};
StartpagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StartpagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/startpage/startpage.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/startpage/startpage.module.ts ***!
  \*****************************************************/
/*! exports provided: StartpagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartpagePageModule", function() { return StartpagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _startpage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./startpage-routing.module */ "./src/app/pages/startpage/startpage-routing.module.ts");
/* harmony import */ var _startpage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./startpage.page */ "./src/app/pages/startpage/startpage.page.ts");







let StartpagePageModule = class StartpagePageModule {
};
StartpagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _startpage_routing_module__WEBPACK_IMPORTED_MODULE_5__["StartpagePageRoutingModule"]
        ],
        declarations: [_startpage_page__WEBPACK_IMPORTED_MODULE_6__["StartpagePage"]]
    })
], StartpagePageModule);



/***/ }),

/***/ "./src/app/pages/startpage/startpage.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/startpage/startpage.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YXJ0cGFnZS9zdGFydHBhZ2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/startpage/startpage.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/startpage/startpage.page.ts ***!
  \***************************************************/
/*! exports provided: StartpagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartpagePage", function() { return StartpagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let StartpagePage = class StartpagePage {
    constructor(router) {
        this.router = router;
    }
    navigateToSignUp() {
        this.router.navigate(['signup']);
        console.log("start pressed");
    }
    ngOnInit() {
    }
};
StartpagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
StartpagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-startpage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./startpage.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/startpage/startpage.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./startpage.page.scss */ "./src/app/pages/startpage/startpage.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], StartpagePage);



/***/ })

}]);
//# sourceMappingURL=startpage-startpage-module-es2015.js.map