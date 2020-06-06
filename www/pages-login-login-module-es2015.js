(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n\n  <ion-card color=\"transparent\">\n    <img src=\"../../../assets/img/logo.png\" />\n\n  </ion-card>\n\n\n\n  <ion-item color=\"transparent\">\n    <ion-label position=\"floating\" color=\"light\">\n      <p>\n        <ion-icon name=\"person-circle-outline\"></ion-icon> Email address\n      </p>\n    </ion-label>\n    <ion-input type=\"text\" #email required></ion-input>\n  </ion-item>\n\n\n  <ion-item color=\"transparent\">\n    <ion-label color=\"light\" position=\"floating\" minlength=\"5\" pattern=\"Password\">\n      <p>\n        <ion-icon name=\"lock-closed-outline\"></ion-icon> Password\n      </p>\n\n    </ion-label>\n    <ion-input color=\"light\" type=\"password\" #password required></ion-input>\n  </ion-item>\n\n\n\n  <ion-button type=\"submit\" color=\"light\" expand=\"block\" (click)=\"logIn(email, password)\">\n    <ion-icon name=\"log-in-outline\"></ion-icon>\n    <p>\n       &nbsp;Login\n    </p>\n  </ion-button>\n\n\n  <div>\n\n\n    <ion-button fill=\"clear\" color=\"light\" (click)=\"navigateToSignupPage()\" style=\"margin-left: 133px;\">\n      <ion-icon name=\"person-add-outline\"></ion-icon>  &nbsp;Sign up\n    </ion-button>\n\n\n  </div>\n\n\n\n\n\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  position: relative;\n}\n\nion-card-title {\n  color: #5c5858;\n}\n\nion-content {\n  --background: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);\n  background-color: #7f5a83;\n}\n\nion-input {\n  --color: #f4f5f8;\n}\n\nion-item {\n  padding-top: 3px;\n  position: block;\n  margin-bottom: 2px;\n}\n\ndiv {\n  margin-top: 154;\n}\n\nion-button {\n  margin-top: 73px;\n  border-radius: 50%;\n}\n\np {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxUQWllYlxcRG9jdW1lbnRzXFxHaXRIdWJcXE5saW5pdC1Bbmd1bGFyL3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURHQTtFQUNJLGNBQUE7QUNBSjs7QURHQTtFQUNJLDhEQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0FKOztBRElBO0VBQ0ksZUFBQTtBQ0RKOztBREtBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBRE1BO0VBQ0ksaUJBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgY29sb3I6IHJnYig5MiwgODgsIDg4KTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjN2Y1YTgzIDAlLCAjMGQzMjRkIDc0JSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Y1YTgzO1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gICAgLS1jb2xvcjogI2Y0ZjVmODtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgIHBvc2l0aW9uOiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxuXHJcbmRpdiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNTQ7XHJcbn1cclxuXHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDczcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59IiwiaW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogIzVjNTg1ODtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM3ZjVhODMgMCUsICMwZDMyNGQgNzQlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdmNWE4Mztcbn1cblxuaW9uLWlucHV0IHtcbiAgLS1jb2xvcjogI2Y0ZjVmODtcbn1cblxuaW9uLWl0ZW0ge1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwb3NpdGlvbjogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuZGl2IHtcbiAgbWFyZ2luLXRvcDogMTU0O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNzNweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5wIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_app_shared_authentification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/authentification-service */ "./src/app/shared/authentification-service.ts");






let LoginPage = class LoginPage {
    constructor(router, toastController, authService) {
        this.router = router;
        this.toastController = toastController;
        this.authService = authService;
    }
    ngOnInit() {
        console.log("DEbug: ProjectspagePage");
    }
    ionViewWillEnter() {
        src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"].isTabVisible = false;
        console.log("debug  ionViewWillEnter");
    }
    navigateToSignupPage() {
        this.router.navigate(['signup']);
        console.log("Signup pressed");
    }
    logIn(email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("in");
            this.authService.SignIn(email.value, password.value)
                .then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (this.authService.isEmailVerified == true) {
                    this.router.navigate(['projectspage']);
                    const toast = yield this.toastController.create({
                        message: 'Successfully logged in!   ',
                        duration: 2000
                    });
                    toast.present();
                }
                else {
                    window.alert('Email is not verified');
                    return false;
                }
            })).catch((error) => {
                window.alert(error.message);
            });
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: src_app_shared_authentification_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        src_app_shared_authentification_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map