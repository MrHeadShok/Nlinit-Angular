(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-stats-stats-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stats/stats.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stats/stats.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>stats</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/stats/stats-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/stats/stats-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: StatsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsPageRoutingModule", function() { return StatsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _stats_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stats.page */ "./src/app/pages/stats/stats.page.ts");




const routes = [
    {
        path: '',
        component: _stats_page__WEBPACK_IMPORTED_MODULE_3__["StatsPage"]
    }
];
let StatsPageRoutingModule = class StatsPageRoutingModule {
};
StatsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StatsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/stats/stats.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/stats/stats.module.ts ***!
  \*********************************************/
/*! exports provided: StatsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsPageModule", function() { return StatsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _stats_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stats-routing.module */ "./src/app/pages/stats/stats-routing.module.ts");
/* harmony import */ var _stats_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stats.page */ "./src/app/pages/stats/stats.page.ts");







let StatsPageModule = class StatsPageModule {
};
StatsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _stats_routing_module__WEBPACK_IMPORTED_MODULE_5__["StatsPageRoutingModule"]
        ],
        declarations: [_stats_page__WEBPACK_IMPORTED_MODULE_6__["StatsPage"]]
    })
], StatsPageModule);



/***/ }),

/***/ "./src/app/pages/stats/stats.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/stats/stats.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YXRzL3N0YXRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/stats/stats.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/stats/stats.page.ts ***!
  \*******************************************/
/*! exports provided: StatsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsPage", function() { return StatsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StatsPage = class StatsPage {
    constructor() { }
    ngOnInit() {
    }
};
StatsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stats',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stats.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stats/stats.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stats.page.scss */ "./src/app/pages/stats/stats.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StatsPage);



/***/ })

}]);
//# sourceMappingURL=pages-stats-stats-module-es2015.js.map