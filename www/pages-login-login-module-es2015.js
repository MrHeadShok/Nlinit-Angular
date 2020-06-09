(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card color=\"transparent\">\n    <img src=\"../../../assets/img/logo.png\" />\n\n  </ion-card>\n\n\n  <form class=\"form\" [formGroup]=\"validations_form\" (ngSubmit)=\"loginUser(validations_form.value)\">\n    <ion-item color=\"transparent\">\n      <ion-label position=\"floating\" color=\"light\">\n        <p>\n          <ion-icon name=\"person-circle-outline\"></ion-icon> Email address\n        </p>\n      </ion-label>\n      <ion-input type=\"text\" formControlName=\"email\"></ion-input>\n    </ion-item>\n\n      <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validation_messages.email\">\n          <div class=\"error-message\"\n            *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n\n    <ion-item color=\"transparent\">\n      <ion-label color=\"light\" position=\"floating\" minlength=\"5\" pattern=\"Password\">\n        <p>\n          <ion-icon name=\"lock-closed-outline\"></ion-icon> Password\n        </p>\n\n      </ion-label>\n      <ion-input color=\"light\" type=\"password\" formControlName=\"password\" required></ion-input>\n    </ion-item>\n\n      <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validation_messages.password\">\n          <div class=\"error-message\"\n            *ngIf=\"validations_form.get('password').hasError(validation.type) && (validations_form.get('password').dirty || validations_form.get('password').touched)\">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n\n\n    <ion-button type=\"submit\" color=\"light\" expand=\"block\" >\n      <ion-icon name=\"log-in-outline\"></ion-icon>\n      <p>\n        &nbsp;Login\n      </p>\n    </ion-button>\n    <label class=\"error-message\">{{errorMessage}}</label>\n\n  </form>\n  <div>\n\n\n    <ion-button fill=\"clear\" color=\"light\" (click)=\"navigateToSignupPage()\" style=\"margin-left: 133px;\">\n      <ion-icon name=\"person-add-outline\"></ion-icon> &nbsp;Sign up\n    </ion-button>\n\n\n  </div>\n\n\n\n\n\n\n\n</ion-content>");

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
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
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
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  position: relative;\n}\n\nion-card-title {\n  color: #5c5858;\n}\n\nion-content {\n  --background: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);\n}\n\nion-input {\n  --color: #f4f5f8;\n}\n\nion-item {\n  padding-top: 3px;\n  position: block;\n  margin-bottom: 2px;\n}\n\ndiv {\n  margin-top: 154;\n}\n\nion-button {\n  margin-top: 73px;\n  border-radius: 50%;\n}\n\np {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxUQWllYlxcRG9jdW1lbnRzXFxHaXRIdWJcXE5saW5pdC1Bbmd1bGFyL3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURHQTtFQUNJLGNBQUE7QUNBSjs7QURHQTtFQUNJLDhEQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURJQTtFQUNJLGVBQUE7QUNESjs7QURLQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURNQTtFQUNJLGlCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxlIHtcclxuICAgIGNvbG9yOiByZ2IoOTIsIDg4LCA4OCk7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzdmNWE4MyAwJSwgIzBkMzI0ZCA3NCUpO1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gICAgLS1jb2xvcjogI2Y0ZjVmODtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgIHBvc2l0aW9uOiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxuXHJcbmRpdiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNTQ7XHJcbn1cclxuXHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDczcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59IiwiaW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogIzVjNTg1ODtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM3ZjVhODMgMCUsICMwZDMyNGQgNzQlKTtcbn1cblxuaW9uLWlucHV0IHtcbiAgLS1jb2xvcjogI2Y0ZjVmODtcbn1cblxuaW9uLWl0ZW0ge1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwb3NpdGlvbjogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuZGl2IHtcbiAgbWFyZ2luLXRvcDogMTU0O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNzNweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5wIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */");

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_authentification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/authentification-service */ "./src/app/shared/authentification-service.ts");





//import { AngularFireAuth } from '@angular/fire/auth/auth';
let LoginPage = class LoginPage {
    constructor(navCtrl, authService, formBuilder) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.errorMessage = '';
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Please enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' }
            ]
        };
    }
    ngOnInit() {
        this.validations_form = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
        });
    }
    loginUser(value) {
        this.authService.loginUser(value)
            .then(res => {
            console.log(res);
            this.errorMessage = "";
            this.navCtrl.navigateForward('/projectspage');
        }, err => {
            this.errorMessage = err.message;
        });
    }
    navigateToSignupPage() {
        this.navCtrl.navigateForward('/signup');
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_shared_authentification_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_shared_authentification_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map