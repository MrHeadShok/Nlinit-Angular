(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-card color=\"transparent\">\n    <img src=\"../../../assets/img/wide1.png\" />\n    <ion-card-content>\n      <ion-text color=\"light\">\n        <p> ProjectAdmin is an app to help you better organize your data.Lead your team to succes.\n        </p>\n      </ion-text>\n    </ion-card-content>\n\n  </ion-card>\n\n  <form class=\"form\" [formGroup]=\"validations_form\" (ngSubmit)=\"tryRegister(validations_form.value)\">\n    <ion-item color=\"transparent\">\n      <ion-label color=\"light\" id=\"name\" position=\"floating\">\n        <p>\n          <ion-icon name=\"body-outline\"></ion-icon> Full Name\n        </p>\n      </ion-label>\n      <ion-input color=\"light\" #fullname required></ion-input>\n    </ion-item>\n\n\n    <ion-item color=\"transparent\">\n      <ion-label position=\"floating\" color=\"light\">\n        <p>\n          <ion-icon name=\"person-circle-outline\"></ion-icon> Email address\n        </p>\n      </ion-label>\n      <ion-input formControlName=\"email\" type=\"Email\"></ion-input>\n    </ion-item>\n\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.email\">\n        <div class=\"error-message\"\n          *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item color=\"transparent\">\n      <ion-label color=\"light\" position=\"floating\" minlength=\"5\" pattern=\"Password\">\n        <p>\n          <ion-icon name=\"lock-closed-outline\"></ion-icon> Password\n        </p>\n\n      </ion-label>\n      <ion-input color=\"light\" type=\"password\" formControlName=\"password\" required></ion-input>\n    </ion-item>\n\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.password\">\n        <div class=\"error-message\"\n          *ngIf=\"validations_form.get('password').hasError(validation.type) && (validations_form.get('password').dirty || validations_form.get('password').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n\n    <ion-radio-group value=\"group\" #role required>\n      <ion-list-header>\n        <ion-label color=\"light\">\n          <p>\n            <ion-icon name=\"clipboard-outline\"></ion-icon>&nbsp; &nbsp; ROLE\n          </p>\n        </ion-label>\n      </ion-list-header>\n      <ion-item color=\"transparent\">\n        <ion-label color=\"light\">\n          <p>\n            <ion-icon name=\"person-outline\"></ion-icon>&nbsp; &nbsp;A team leader\n          </p>\n        </ion-label>\n        <ion-radio color=\"transparent\" slot=\"start\" color=\"success\" value=\"teamleader\"></ion-radio>\n      </ion-item>\n\n      <ion-item color=\"transparent\">\n        <ion-label color=\"light\">\n          <p>\n            <ion-icon name=\"people-outline\"></ion-icon>&nbsp; &nbsp; A member\n          </p>\n        </ion-label>\n        <ion-radio color=\"transparent\" slot=\"start\" color=\"tertiary\" value=\"member\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n\n\n\n    <ion-button color=\"light\" expand=\"block\" type=\"submit\">\n      <ion-icon name=\"person-add-outline\"></ion-icon>\n      <p> &nbsp; &nbsp;Create account!</p>\n    </ion-button>\n\n    <label class=\"error-message\">{{errorMessage}}</label>\n    <label class=\"success-message\">{{successMessage}}</label>\n\n  </form>\n  <div>\n\n\n    <ion-button fill=\"clear\" color=\"light\" (click)=\"navigateToLoginPage()\" style=\"margin-left: 133px;\">\n      <ion-icon name=\"log-in-outline\"></ion-icon> &nbsp; &nbsp;Login\n    </ion-button>\n\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/signup/signup-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/pages/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  --color: #f4f5f8;\n}\n\nion-item {\n  padding-top: 3px;\n  position: block;\n  margin-bottom: 2px;\n}\n\np {\n  font-weight: bold;\n}\n\nion-content {\n  --background: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);\n  background-color: #7f5a83;\n}\n\nion-button {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL0M6XFxVc2Vyc1xcVEFpZWJcXERvY3VtZW50c1xcR2l0SHViXFxObGluaXQtQW5ndWxhci9zcmNcXGFwcFxccGFnZXNcXHNpZ251cFxcc2lnbnVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSw4REFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FESUE7RUFDSSxnQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW5wdXQge1xyXG4gICAgLS1jb2xvcjogI2Y0ZjVmODtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgIHBvc2l0aW9uOiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjN2Y1YTgzIDAlLCAjMGQzMjRkIDc0JSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Y1YTgzO1xyXG5cclxufVxyXG5cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufSIsImlvbi1pbnB1dCB7XG4gIC0tY29sb3I6ICNmNGY1Zjg7XG59XG5cbmlvbi1pdGVtIHtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgcG9zaXRpb246IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbnAge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM3ZjVhODMgMCUsICMwZDMyNGQgNzQlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdmNWE4Mztcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/signup/signup.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_authentification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/authentification-service */ "./src/app/shared/authentification-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let SignupPage = class SignupPage {
    constructor(router, authService, formBuilder) {
        this.router = router;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.errorMessage = '';
        this.successMessage = '';
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' }
            ]
        };
    }
    ngOnInit() {
        this.validations_form = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
        });
    }
    tryRegister(value) {
        this.authService.registerUser(value)
            .then(res => {
            console.log(res);
            this.errorMessage = "";
            this.successMessage = "Your account has been created. Please log in.";
        }, err => {
            console.log(err);
            this.errorMessage = err.message;
            this.successMessage = "";
        });
    }
    navigateToLoginPage() {
        this.router.navigate(['login']);
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_authentification_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.page.scss */ "./src/app/pages/signup/signup.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _shared_authentification_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=pages-signup-signup-module-es2015.js.map