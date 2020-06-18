(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-test-test-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"warning\">\n    <ion-title>\n      Student Register\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n\n  <form [formGroup]=\"studentForm\" (ngSubmit)=\"CreateRecord()\">\n\n    <ion-item>\n      <ion-label position=\"floating\">Name</ion-label>\n      <ion-input formControlName=\"Name\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Age</ion-label>\n      <ion-input formControlName=\"Age\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Address</ion-label>\n      <ion-input formControlName=\"Address\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-button (click)=\"CreateRecord()\" [disabled]=\"studentForm.invalid\">\n        <ion-icon size=\"small\" slot=\"icon-only\" name=\"add\"></ion-icon>\n        &nbsp;Create Record\n      </ion-button>\n    </ion-item>\n\n  </form>\n\n\n  <ion-card *ngFor=\"let item of studentList\" color=\"primary\">\n    <span *ngIf=\"!item.isEdit; else elseBlock\">\n      <ion-card-header>\n        <ion-card-title>{{item.Name}} of {{item.Age}} years</ion-card-title>\n        <ion-card-subtitle>From: {{item.Address}}</ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n\n        <ion-button shape=\"round\" color=\"secondary\" size=\"small\" (click)=\"EditRecord(item)\">\n          <ion-icon size=\"small\" slot=\"icon-only\" name=\"create\"></ion-icon>\n\n        </ion-button>\n        <ion-button shape=\"round\" color=\"danger\" size=\"small\" (click)=\"RemoveRecord(item.id)\">\n          <ion-icon size=\"small\" slot=\"icon-only\" name=\"trash\"></ion-icon>\n\n        </ion-button>\n      </ion-card-content>\n    </span>\n    <ng-template #elseBlock>\n      <ion-card-header>\n        <ion-card-title>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                Edit\n              </ion-col>\n              <ion-col>\n                <ion-button fill=\"solid\" color=\"medium\" size=\"small\" (click)=\"item.isEdit = false\">\n                  Cancel\n                </ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button fill=\"solid\" color=\"success\" size=\"small\" (click)=\"UpdateRecord(item)\">\n                  Update\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label><strong>Name</strong></ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"item.EditName\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label><strong>Age</strong></ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"item.EditAge\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label><strong>Address</strong></ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"item.EditAddress\"></ion-input>\n        </ion-item>\n      </ion-card-content>\n    </ng-template>\n  </ion-card>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/test/test-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/test/test-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageRoutingModule", function() { return TestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.page */ "./src/app/pages/test/test.page.ts");




const routes = [
    {
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_3__["TestPage"]
    }
];
let TestPageRoutingModule = class TestPageRoutingModule {
};
TestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TestPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/test/test.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/test/test.module.ts ***!
  \*******************************************/
/*! exports provided: TestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageModule", function() { return TestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _test_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-routing.module */ "./src/app/pages/test/test-routing.module.ts");
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test.page */ "./src/app/pages/test/test.page.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm2015/ngx-echarts.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_8__);









let TestPageModule = class TestPageModule {
};
TestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            ngx_echarts__WEBPACK_IMPORTED_MODULE_7__["NgxEchartsModule"].forRoot({ echarts: echarts__WEBPACK_IMPORTED_MODULE_8__, }),
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _test_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"]]
    })
], TestPageModule);



/***/ }),

/***/ "./src/app/pages/test/test.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/test/test.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".demo-chart {\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVzdC9DOlxcVXNlcnNcXFRBaWViXFxEb2N1bWVudHNcXEdpdEh1YlxcTmxpbml0LUFuZ3VsYXIvc3JjXFxhcHBcXHBhZ2VzXFx0ZXN0XFx0ZXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVzdC90ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3QvdGVzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtby1jaGFydCB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG59IiwiLmRlbW8tY2hhcnQge1xuICBoZWlnaHQ6IDQwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/test/test.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/test/test.page.ts ***!
  \*****************************************/
/*! exports provided: TestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPage", function() { return TestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_firebasestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firebasestore.service */ "./src/app/services/firebasestore.service.ts");





let TestPage = class TestPage {
    constructor(firebaseService, fb) {
        this.firebaseService = firebaseService;
        this.fb = fb;
        this.studentList = [];
        this.studentData = {};
    }
    ionViewWillEnter() {
        src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].isTabVisible = true;
    }
    ngOnInit() {
        this.studentForm = this.fb.group({
            Name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            Age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            Address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.firebaseService.read_students().subscribe(data => {
            this.studentList = data.map(e => {
                return {
                    id: e.payload.doc.id,
                    isEdit: false,
                    Name: e.payload.doc.data()['Name'],
                    Age: e.payload.doc.data()['Age'],
                    Address: e.payload.doc.data()['Address'],
                };
            });
            console.log(this.studentList);
        });
    }
    CreateRecord() {
        console.log(this.studentForm.value);
        this.firebaseService.create_student(this.studentForm.value).then(resp => {
            this.studentForm.reset();
        })
            .catch(error => {
            console.log(error);
        });
    }
    RemoveRecord(rowID) {
        this.firebaseService.delete_student(rowID);
    }
    EditRecord(record) {
        record.isEdit = true;
        record.EditName = record.Name;
        record.EditAge = record.Age;
        record.EditAddress = record.Address;
    }
    UpdateRecord(recordRow) {
        let record = {};
        record['Name'] = recordRow.EditName;
        record['Age'] = recordRow.EditAge;
        record['Address'] = recordRow.EditAddress;
        this.firebaseService.update_student(recordRow.id, record);
        recordRow.isEdit = false;
    }
};
TestPage.ctorParameters = () => [
    { type: src_app_services_firebasestore_service__WEBPACK_IMPORTED_MODULE_4__["FirebasestoreService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
TestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test.page.scss */ "./src/app/pages/test/test.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_firebasestore_service__WEBPACK_IMPORTED_MODULE_4__["FirebasestoreService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], TestPage);



/***/ }),

/***/ "./src/app/services/firebasestore.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/firebasestore.service.ts ***!
  \***************************************************/
/*! exports provided: FirebasestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebasestoreService", function() { return FirebasestoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");



let FirebasestoreService = class FirebasestoreService {
    constructor(firestore) {
        this.firestore = firestore;
        this.collectionName = 'Students';
    }
    create_student(record) {
        return this.firestore.collection(this.collectionName).add(record);
    }
    read_students() {
        return this.firestore.collection(this.collectionName).snapshotChanges();
    }
    update_student(recordID, record) {
        this.firestore.doc(this.collectionName + '/' + recordID).update(record);
    }
    delete_student(record_id) {
        this.firestore.doc(this.collectionName + '/' + record_id).delete();
    }
};
FirebasestoreService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
FirebasestoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], FirebasestoreService);



/***/ })

}]);
//# sourceMappingURL=pages-test-test-module-es2015.js.map