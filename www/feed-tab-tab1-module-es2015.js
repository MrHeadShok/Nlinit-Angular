(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feed-tab-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed-tab/tab1.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed-tab/tab1.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n    \r\n    <ion-card class=\"topC\">\r\n        <div echarts [options]=\"chartOption\" class=\"demo-chart\"></div>\r\n    </ion-card>\r\n    <ion-card>\r\n        <div echarts [options]=\"options\" [theme]=\"theme\" class=\"demo-chart\"></div>\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n        <canvas #doughnutCanvas></canvas>\r\n    </ion-card>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/feed-tab/tab1-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/feed-tab/tab1-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/pages/feed-tab/tab1.page.ts");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/feed-tab/tab1.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/feed-tab/tab1.module.ts ***!
  \***********************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/pages/feed-tab/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/pages/feed-tab/tab1-routing.module.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm2015/ngx-echarts.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_9__);










let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        entryComponents: [],
        imports: [
            ngx_echarts__WEBPACK_IMPORTED_MODULE_8__["NgxEchartsModule"].forRoot({ echarts: echarts__WEBPACK_IMPORTED_MODULE_9__, }),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]],
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/pages/feed-tab/tab1.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/feed-tab/tab1.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".demo-chart {\n  height: 400px;\n}\n\n.topC {\n  margin-top: 60px;\n}\n\nion-content {\n  --background: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);\n  background-color: #7f5a83;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmVlZC10YWIvQzpcXFVzZXJzXFxUQWllYlxcRG9jdW1lbnRzXFxHaXRIdWJcXE5saW5pdC1Bbmd1bGFyL3NyY1xcYXBwXFxwYWdlc1xcZmVlZC10YWJcXHRhYjEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mZWVkLXRhYi90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0FDRUo7O0FEQ0E7RUFDUSw4REFBQTtFQUNBLHlCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mZWVkLXRhYi90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZW1vLWNoYXJ0IHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn1cclxuLnRvcEN7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM3ZjVhODMgMCUsICMwZDMyNGQgNzQlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Y1YTgzO1xyXG59IiwiLmRlbW8tY2hhcnQge1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG4udG9wQyB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjN2Y1YTgzIDAlLCAjMGQzMjRkIDc0JSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZjVhODM7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/feed-tab/tab1.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/feed-tab/tab1.page.ts ***!
  \*********************************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);



let Tab1Page = class Tab1Page {
    constructor() {
        this.chartOption = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            },
            yAxis: {
                type: 'value',
            },
            series: [
                {
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                },
            ],
        };
        this.options = {
            backgroundColor: '#2c343c',
            title: {
                text: 'Customized Pie',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#ccc',
                },
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)',
            },
            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1],
                },
            },
            series: [
                {
                    name: 'Counters',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [
                        { value: 335, name: 'C-1' },
                        { value: 310, name: 'C-2' },
                        { value: 274, name: 'C-3' },
                        { value: 235, name: 'C-4' },
                        { value: 400, name: 'C-5' },
                    ].sort((a, b) => a.value - b.value),
                    roseType: 'radius',
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(255, 255, 255, 0.3)',
                            },
                        },
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)',
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20,
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                        },
                    },
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: () => Math.random() * 200,
                },
            ],
        };
    }
    ngOnInit() {
        this.doughnutChartMethod();
    }
    doughnutChartMethod() {
        this.doughnutChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ['Total projects', 'Currently working on'],
                datasets: [{
                        label: '# of Votes',
                        data: [100, 30],
                        backgroundColor: [
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                        ],
                        hoverBackgroundColor: [
                            '#FFCE56',
                            '#FF6384'
                        ]
                    }]
            }
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('doughnutCanvas', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], Tab1Page.prototype, "doughnutCanvas", void 0);
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed-tab/tab1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab1.page.scss */ "./src/app/pages/feed-tab/tab1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=feed-tab-tab1-module-es2015.js.map