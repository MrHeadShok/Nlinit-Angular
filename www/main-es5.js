function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/@ionic/pwa-elements/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*************************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicPwaElementsDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./pwa-action-sheet.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-action-sheet.entry.js", 77],
      "./pwa-camera-modal-instance.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal-instance.entry.js", 78],
      "./pwa-camera-modal.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal.entry.js", 79],
      "./pwa-camera.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera.entry.js", 80],
      "./pwa-toast.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-toast.entry.js", 81]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/pwa-elements/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n\n\n    <ion-menu type=\"push\" class=\"menu\" side=\"start\" content-id=\"main-content\" swipe-gesture=\"true\">\n        <ion-menu-toggle>\n\n            <div *ngIf=\"userData!=null\">\n                <ion-card color=\"transparent\">\n                    <img src=\"../../../assets/img/avatar.jpg\" alt=\"Avatar\">\n                    <ion-card-header>\n                        <ion-card-subtitle color=\"light\">{{userData.role}}</ion-card-subtitle>\n                        <ion-card-title color=\"light\">{{userData.fullname}}</ion-card-title>\n                    </ion-card-header>\n                </ion-card>\n            </div>\n\n            <div class=\"higher\">\n\n                <ion-button expand=\"full\" color=\"#7c46ce\" (click)=\"navigateToProjects()\">\n                    <h5>\n                        <ion-icon name=\"bar-chart-outline\"></ion-icon>&nbsp; &nbsp; &nbsp; &nbsp;  Projects\n                    </h5>\n                </ion-button>\n\n\n                <ion-button expand=\"full\" color=\"#7c46ce\" (click)=\"navigateToprofile()\">\n                    <h5>\n                        <ion-icon name=\"person-outline\"></ion-icon> &nbsp; &nbsp; &nbsp; &nbsp; My profile\n                    </h5>\n                </ion-button>\n\n\n                <ion-button expand=\"full\" color=\"#7c46ce\" (click)=\"navigateToMessages()\">\n                    <h5>\n                        <ion-icon name=\"mail-outline\"></ion-icon> &nbsp; &nbsp; &nbsp; &nbsp;\n                        Messages\n                    </h5>\n                </ion-button>\n\n\n                <ion-button expand=\"full\" color=\"#7c46ce\" (click)=\"navigateToStats()\">\n                    <h5>\n                        <ion-icon name=\"pie-chart-outline\"></ion-icon>&nbsp; &nbsp; &nbsp; &nbsp;  Statistics\n                    </h5>\n                </ion-button>\n\n            </div>\n\n\n            <div class=\"lower\">\n\n                <ion-button expand=\"full\" color=\"#7c46ce\" (click)=\"navigateToSettings()\">\n                    <h5>\n                        <ion-icon name=\"construct-outline\"></ion-icon>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Settings\n                    </h5>\n                </ion-button>\n\n\n                <ion-button type=\"submit\" (click)=\"logout()\" expand=\"full\" color=\"#7c46ce\">\n                    <h5>\n                        <ion-icon name=\"log-out-outline\"></ion-icon>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Logout\n                    </h5>\n                </ion-button>\n\n            </div>\n        </ion-menu-toggle>\n    </ion-menu>\n\n\n\n    <div class=\"ion-page\" id=\"main-content\">\n        <ion-header *ngIf=\"getIsTabVisible\">\n\n\n            <!--ToAddARefresher     <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n                    <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" pullingText=\"Pull to refresh\"\n                        refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n                    </ion-refresher-content>\n                </ion-refresher> -->\n\n\n            <ion-toolbar >\n\n                <ion-buttons slot=\"start\">\n                    <ion-menu-button>\n                        <ion-icon color=\"primary\" name=\"menu\"></ion-icon>\n                    </ion-menu-button>\n                </ion-buttons>\n\n\n                <ion-button slot=\"end\" color=\"transparent\" (click)=\"presentPopover()\">\n                    <ion-icon color=\"danger\" name=\"notifications-outline\"></ion-icon>\n                </ion-button>\n\n\n\n            </ion-toolbar>\n        </ion-header>\n        <ion-router-outlet></ion-router-outlet>\n    </div>\n\n\n\n\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-project/add-project.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-project/add-project.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAddProjectAddProjectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"content\">\n\n  <form [formGroup]=\"project_form\" (ngSubmit)=\"registerProject(project_form.value)\">\n\n    <ion-card color=\"transparent\">\n\n      <ion-item color=\"transparent\">\n        <ion-label color=\"light\" position=\"floating\">\n          <p>\n            <ion-icon name=\"briefcase-outline\"></ion-icon> Project Name\n          </p>\n        </ion-label>\n        <ion-input name=\"pname\" required minlength=\"5\" color=\"primary\" formControlName=\"pname\" type=\"text\"></ion-input>\n      </ion-item>\n\n      <div>\n        <ng-container *ngFor=\"let validation of validation_messages.pname\">\n          <div\n            *ngIf=\"project_form.get('pname').hasError(validation.type)&&(project_form.get('pname').dirty || project_form.get('pname').touched)\">\n            <p style=\"color:red;\"> {{validation.message}} </p>\n          </div>\n\n        </ng-container>\n      </div>\n\n      <ion-item color=\"transparent\">\n        <ion-label color=\"light\" position=\"floating\">\n          <p>\n            <ion-icon name=\"information-circle-outline\"></ion-icon> Project Description\n          </p>\n        </ion-label>\n        <ion-textarea name=\"pinfo\" required minlength=\"5\" color=\"primary\" formControlName=\"pinfo\" type=\"text\">\n        </ion-textarea>\n      </ion-item>\n\n      <div>\n        <ng-container *ngFor=\"let validation of validation_messages.pinfo\">\n          <div\n            *ngIf=\"project_form.get('pinfo').hasError(validation.type)&&(project_form.get('pinfo').dirty || project_form.get('pinfo').touched)\">\n            <p style=\"color:red;\"> {{validation.message}}</p>\n\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item color=\"transparent\">\n        <ion-label color=\"light\" position=\"floating\">\n          <p>\n            <ion-icon name=\"calendar-outline\"></ion-icon>Start date\n          </p>\n        </ion-label>\n        <ion-datetime required done-text=\"Done\" max=\"2200-01-01\" min=\"2010-01-01\" month-names formControlName=\"pstart\">\n        </ion-datetime>\n      </ion-item>\n\n      <div>\n        <ng-container *ngFor=\"let validation of validation_messages.pstart\">\n          <div\n            *ngIf=\"project_form.get('pstart').hasError(validation.type)&&(project_form.get('pstart').dirty || project_form.get('pstart').touched)\">\n            <p style=\"color:red;\" > {{validation.message}}</p>\n          </div>\n\n        </ng-container>\n\n\n      </div>\n\n\n\n\n      <ion-item color=\"transparent\">\n        <ion-label color=\"light\" position=\"floating\">\n          <p>\n            <ion-icon name=\"calendar-outline\"></ion-icon> Project Ends on\n          </p>\n        </ion-label>\n        <ion-datetime required max=\"2200-01-01\" min=\"2010-01-01\" done-text=\"Done\" formControlName=\"pend\">\n        </ion-datetime>\n      </ion-item>\n\n      <div>\n        <ng-container *ngFor=\"let validation of validation_messages.pend\">\n          <div\n            *ngIf=\"project_form.get('pend').hasError(validation.type)&&(project_form.get('pend').dirty || project_form.get('pend').touched)\">\n            <p style=\"color:red;\"> {{validation.message}} </p>\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-button style=\"float:right;\" [disabled]=\"!project_form.valid\" color=\"warning\" type=\"submit\">\n        <ion-icon name=\"save-outline\"></ion-icon> &nbsp; &nbsp;Save\n      </ion-button>\n\n      <ion-button color=\"danger\" (click)=\"dismissModal()\">\n        <ion-icon name=\"close-circle-outline\"></ion-icon> &nbsp; &nbsp;Cancel\n      </ion-button>\n\n\n\n\n\n    </ion-card>\n  </form>\n\n\n\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add2team/add2team.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add2team/add2team.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdd2teamAdd2teamComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n\n  <ion-list-header color=\"success\" >\n    <ion-label >\n       Request sent!\n    </ion-label>\n  </ion-list-header>\n\n  <ion-content color=\"medium\">\n<h5>Request is sent! <br> Once accepted you'll be able to contact each other!</h5>\n  </ion-content>\n     \n     </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notifications.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notifications.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNotificationsNotificationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  notifications works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/verificationmod/verificationmod.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/verificationmod/verificationmod.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsVerificationmodVerificationmodComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-card>\n      <ion-card-title>\n      <h2>Account created successfully!</h2>\n      </ion-card-title>\n\n      <p>\n        Kindly note that you won't be able to access your account unless it's verified! We handle important Data that needs to be treated with full attention and care.\n      </p>\n       \n      <h3>\n        Please make sure you confirm your address before trying to log-in.\n       </h3>\n       </ion-card>\n      <ion-button type=\"submit\" (click)=\"this.authService.SendVerificationMail()\" expand=\"block\">\n        <ion-icon name=\"mail-outline\"></ion-icon>&nbsp; &nbsp;\n        Resend Verification Email\n      </ion-button>\n\n            <ion-button type=\"submit\" (click)=\"dismissModal()\" expand=\"block\" color=\"danger\">\n              <ion-icon name=\"close-circle-outline\"></ion-icon>&nbsp; &nbsp;\n              Close\n            </ion-button>\n\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<div>\n  <img src=\"../../../assets/img/sent.jpg\" />\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: '',
      redirectTo: 'startpage',
      pathMatch: 'full'
    }, {
      path: 'startpage',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-startpage-startpage-module */
        "startpage-startpage-module").then(__webpack_require__.bind(null,
        /*! ./pages/startpage/startpage.module */
        "./src/app/pages/startpage/startpage.module.ts")).then(function (m) {
          return m.StartpagePageModule;
        });
      }
    }, {
      path: 'signup',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-signup-signup-module */
        "pages-signup-signup-module").then(__webpack_require__.bind(null,
        /*! ./pages/signup/signup.module */
        "./src/app/pages/signup/signup.module.ts")).then(function (m) {
          return m.SignupPageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-login-login-module */
        "pages-login-login-module").then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'projectspage',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-projectspage-projectspage-module */
        "pages-projectspage-projectspage-module").then(__webpack_require__.bind(null,
        /*! ./pages/projectspage/projectspage.module */
        "./src/app/pages/projectspage/projectspage.module.ts")).then(function (m) {
          return m.ProjectspagePageModule;
        });
      }
    }, {
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-tabs-tabs-module */
        "pages-tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./pages/tabs/tabs.module */
        "./src/app/pages/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }, {
      path: 'profile',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-profile-profile-module */
        [__webpack_require__.e("default~feed-tab-tab1-module~pages-profile-profile-module"), __webpack_require__.e("pages-profile-profile-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/profile/profile.module */
        "./src/app/pages/profile/profile.module.ts")).then(function (m) {
          return m.ProfilePageModule;
        });
      }
    }, {
      path: 'test',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-test-test-module */
        [__webpack_require__.e("default~feed-tab-tab1-module~pages-test-test-module"), __webpack_require__.e("pages-test-test-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/test/test.module */
        "./src/app/pages/test/test.module.ts")).then(function (m) {
          return m.TestPageModule;
        });
      }
    }, {
      path: 'statpage',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-statpage-statpage-module */
        "pages-statpage-statpage-module").then(__webpack_require__.bind(null,
        /*! ./pages/statpage/statpage.module */
        "./src/app/pages/statpage/statpage.module.ts")).then(function (m) {
          return m.StatpagePageModule;
        });
      }
    }, {
      path: 'settings',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-settings-settings-module */
        "pages-settings-settings-module").then(__webpack_require__.bind(null,
        /*! ./pages/settings/settings.module */
        "./src/app/pages/settings/settings.module.ts")).then(function (m) {
          return m.SettingsPageModule;
        });
      }
    }, {
      path: 'stats',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-stats-stats-module */
        "pages-stats-stats-module").then(__webpack_require__.bind(null,
        /*! ./pages/stats/stats.module */
        "./src/app/pages/stats/stats.module.ts")).then(function (m) {
          return m.StatsPageModule;
        });
      }
    }, {
      path: 'messages',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-messages-messages-module */
        "pages-messages-messages-module").then(__webpack_require__.bind(null,
        /*! ./pages/messages/messages.module */
        "./src/app/pages/messages/messages.module.ts")).then(function (m) {
          return m.MessagesPageModule;
        });
      }
    }, {
      path: 'welcomepage',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-welcomepage-welcomepage-module */
        "pages-welcomepage-welcomepage-module").then(__webpack_require__.bind(null,
        /*! ./pages/welcomepage/welcomepage.module */
        "./src/app/pages/welcomepage/welcomepage.module.ts")).then(function (m) {
          return m.WelcomepagePageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\n  border-radius: 50%;\n  border: 1px solid #ddd;\n  padding: 5px;\n  left: initial;\n  width: 150px;\n  margin-left: 60px;\n}\n\nion-card {\n  margin-bottom: 10px;\n  margin-top: 11px;\n  position: relative;\n}\n\nion-menu,\nion-menu-toggle {\n  --background: linear-gradient(315deg, #7d5abee5 0%, #09203ffa 74%);\n}\n\nion-button {\n  margin-bottom: 7px;\n}\n\n.higher {\n  margin-top: 35px;\n  position: relative;\n}\n\n.lower {\n  margin-top: 197px;\n  position: relative;\n}\n\n.my-custom-menu {\n  --width: 500px;\n}\n\nion-toolbar {\n  --background: linear-gradient(315deg, #0e2c41 0%, #0d324d 74%);\n  background-color: #7f5a83;\n  height: 44px;\n  border-color: transparent !important;\n}\n\n.ion-page {\n  background: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);\n}\n\n.menu {\n  transition: transform 1500ms ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxUQWllYlxcRG9jdW1lbnRzXFxHaXRIdWJcXE5saW5pdC1Bbmd1bGFyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0E7O0VBR1ksa0VBQUE7QUNEWjs7QURLQTtFQUNJLGtCQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDRko7O0FES0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDRko7O0FETUE7RUFDSSxjQUFBO0FDSEo7O0FETUE7RUFDSSw4REFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FDSEo7O0FET0E7RUFDSSw0REFBQTtBQ0pKOztBRFFBO0VBR0ksaUNBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbGVmdDogaW5pdGlhbDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTFweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbn1cclxuXHJcbmlvbi1tZW51LFxyXG5pb24tbWVudS10b2dnbGUge1xyXG5cclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjN2Q1YWJlZTUgMCUsICMwOTIwM2ZmYSA3NCUpO1xyXG5cclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbn1cclxuXHJcbi5oaWdoZXJ7XHJcbiAgICBtYXJnaW4tdG9wOjM1cHggO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubG93ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTk3cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4ubXktY3VzdG9tLW1lbnUge1xyXG4gICAgLS13aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzBlMmM0MSAwJSwgIzBkMzI0ZCA3NCUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdmNWE4MztcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIFxyXG59XHJcblxyXG4uaW9uLXBhZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzdmNWE4MyAwJSwgIzBkMzI0ZCA3NCUpO1xyXG5cclxufVxyXG5cclxuLm1lbnV7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDE1MDBtcyBlYXNlO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAxNTAwbXMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTAwbXMgZWFzZTtcclxufSIsImltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogNXB4O1xuICBsZWZ0OiBpbml0aWFsO1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDExcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLW1lbnUsXG5pb24tbWVudS10b2dnbGUge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM3ZDVhYmVlNSAwJSwgIzA5MjAzZmZhIDc0JSk7XG59XG5cbmlvbi1idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG5cbi5oaWdoZXIge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sb3dlciB7XG4gIG1hcmdpbi10b3A6IDE5N3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5teS1jdXN0b20tbWVudSB7XG4gIC0td2lkdGg6IDUwMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzBlMmM0MSAwJSwgIzBkMzI0ZCA3NCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Y1YTgzO1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1wYWdlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzdmNWE4MyAwJSwgIzBkMzI0ZCA3NCUpO1xufVxuXG4ubWVudSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMTUwMG1zIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMTUwMG1zIGVhc2U7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTAwbXMgZWFzZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_authentification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/authentification-service */
    "./src/app/shared/authentification-service.ts");
    /* harmony import */


    var _services_userstore_userfirestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/userstore/userfirestore.service */
    "./src/app/services/userstore/userfirestore.service.ts");
    /* harmony import */


    var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/notifications/notifications.component */
    "./src/app/components/notifications/notifications.component.ts");

    var AppComponent_1;

    var User = function User(id, isEdit, fullname, role) {
      _classCallCheck(this, User);

      this.id = id;
      this.isEdit = isEdit;
      this.fullname = fullname;
      this.role = role;
    };

    var AppComponent = AppComponent_1 = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, router, authService, navCtrl, userService, notification) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.notification = notification;
        this.userList = [];
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.userService.read_user().subscribe(function (data) {
            _this.userList = data.map(function (e) {
              var id = e.payload.doc.id;
              var isEdit = false;
              var fullname = e.payload.doc.data()['fullname'];
              var role = e.payload.doc.data()['role'];
              return new User(id, isEdit, fullname, role);
            });

            if (_this.userList.length > 0) {
              _this.userData = _this.userList[0];
            }

            console.log("import data");
            console.log(_this.userList);
          });
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this2 = this;

          this.platform.ready().then(function () {
            _this2.statusBar.styleDefault();

            _this2.splashScreen.hide();
          });
        }
      }, {
        key: "navigateToProjects",
        value: function navigateToProjects() {
          this.router.navigate(['projectspage']);
        }
      }, {
        key: "navigateToprofile",
        value: function navigateToprofile() {
          this.router.navigate(['profile']);
        }
      }, {
        key: "navigateToMessages",
        value: function navigateToMessages() {
          this.router.navigate(['messages']);
        }
      }, {
        key: "navigateToStats",
        value: function navigateToStats() {
          this.router.navigate(['stats']);
        }
      }, {
        key: "navigateToSettings",
        value: function navigateToSettings() {
          this.router.navigate(['settings']);
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this3 = this;

          this.authService.logoutUser().then(function (res) {
            console.log(res);

            _this3.navCtrl.navigateBack('login');
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          console.log('Begin async operation');
          setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
          }, 2000);
        }
      }, {
        key: "presentPopover",
        value: function presentPopover(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.notification.create({
                      component: _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__["NotificationsComponent"],
                      cssClass: 'my-custom-class',
                      event: ev,
                      translucent: true
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
      }, {
        key: "getIsTabVisible",
        get: function get() {
          return AppComponent_1.isTabVisible;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.isTabVisible = false;

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _shared_authentification_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_userstore_userfirestore_service__WEBPACK_IMPORTED_MODULE_7__["UserfirestoreService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    AppComponent = AppComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _shared_authentification_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_userstore_userfirestore_service__WEBPACK_IMPORTED_MODULE_7__["UserfirestoreService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/add-project/add-project.component */
    "./src/app/components/add-project/add-project.component.ts");
    /* harmony import */


    var _components_add2team_add2team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/add2team/add2team.component */
    "./src/app/components/add2team/add2team.component.ts");
    /* harmony import */


    var _components_verificationmod_verificationmod_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/verificationmod/verificationmod.component */
    "./src/app/components/verificationmod/verificationmod.component.ts");
    /* harmony import */


    var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/notifications/notifications.component */
    "./src/app/components/notifications/notifications.component.ts");
    /* harmony import */


    var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/Camera/ngx */
    "./node_modules/@ionic-native/Camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts"); //created componenets
    //CameraUpload + cam picker
    //firebase related impors


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_13__["NotificationsComponent"], _components_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_10__["AddProjectComponent"], _components_add2team_add2team_component__WEBPACK_IMPORTED_MODULE_11__["Add2teamComponent"], _components_verificationmod_verificationmod_component__WEBPACK_IMPORTED_MODULE_12__["VerificationmodComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
      entryComponents: [_components_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_10__["AddProjectComponent"], _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_13__["NotificationsComponent"], _components_add2team_add2team_component__WEBPACK_IMPORTED_MODULE_11__["Add2teamComponent"], _components_verificationmod_verificationmod_component__WEBPACK_IMPORTED_MODULE_12__["VerificationmodComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].firebaseConfig), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_18__["AngularFireDatabaseModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__["AngularFirestoreModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__["AngularFirestoreModule"], _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__["File"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/add-project/add-project.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/add-project/add-project.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAddProjectAddProjectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-custom-class .modal-wrapper {\n  height: 20%;\n  top: 80%;\n  position: absolute;\n  display: block;\n}\n\nion-card {\n  height: 150%;\n}\n\nion-button {\n  position: relative;\n}\n\nion-content {\n  --background: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);\n  background-color: #7f5a83;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: fixed;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  overflow: hidden;\n  touch-action: manipulation;\n  -webkit-user-drag: none;\n}\n\nion-input {\n  --color: #f4f5f8;\n}\n\nion-item {\n  padding-top: 3px;\n  position: block;\n  margin-bottom: 2px;\n}\n\nion-button {\n  margin-top: 73px;\n  border-radius: 50%;\n}\n\np {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtcHJvamVjdC9DOlxcVXNlcnNcXFRBaWViXFxEb2N1bWVudHNcXEdpdEh1YlxcTmxpbml0LUFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFkZC1wcm9qZWN0XFxhZGQtcHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hZGQtcHJvamVjdC9hZGQtcHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FER0E7RUFDSSxZQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtBQ0FKOztBRE1BO0VBQ1EsOERBQUE7RUFDQSx5QkFBQTtFQUVBLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7QUNKUjs7QURRQTtFQUNJLGdCQUFBO0FDTEo7O0FEUUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0xKOztBRFVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ1BKOztBRFdBO0VBQ0ksVUFBQTtBQ1JKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQtcHJvamVjdC9hZGQtcHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1jdXN0b20tY2xhc3MgLm1vZGFsLXdyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICB0b3A6IDgwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICBoZWlnaHQ6IDE1MCU7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjN2Y1YTgzIDAlLCAjMGQzMjRkIDc0JSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdmNWE4MztcclxuXHJcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgICAgICAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XHJcblxyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gICAgLS1jb2xvcjogI2Y0ZjVmODtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgIHBvc2l0aW9uOiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxuXHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDczcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG59XHJcblxyXG5we1xyXG4gICAgY29sb3I6cmVkO1xyXG59IiwiLm15LWN1c3RvbS1jbGFzcyAubW9kYWwtd3JhcHBlciB7XG4gIGhlaWdodDogMjAlO1xuICB0b3A6IDgwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLWNhcmQge1xuICBoZWlnaHQ6IDE1MCU7XG59XG5cbmlvbi1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjN2Y1YTgzIDAlLCAjMGQzMjRkIDc0JSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZjVhODM7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbn1cblxuaW9uLWlucHV0IHtcbiAgLS1jb2xvcjogI2Y0ZjVmODtcbn1cblxuaW9uLWl0ZW0ge1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwb3NpdGlvbjogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDczcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxucCB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/add-project/add-project.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/add-project/add-project.component.ts ***!
    \*****************************************************************/

  /*! exports provided: AddProjectComponent */

  /***/
  function srcAppComponentsAddProjectAddProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProjectComponent", function () {
      return AddProjectComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_projectstore_projectstore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/projectstore/projectstore.service */
    "./src/app/services/projectstore/projectstore.service.ts");

    var AddProjectComponent = /*#__PURE__*/function () {
      function AddProjectComponent(modalController, formBuilder, projectservice) {
        _classCallCheck(this, AddProjectComponent);

        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.projectservice = projectservice;
        this.error_messages = '';
        this.validation_messages = {
          'pname': [{
            type: 'required',
            message: 'Project name is required.'
          }, {
            type: 'minlength',
            message: 'Project name must be at least 4 characters long.'
          }],
          'pinfo': [{
            type: 'required',
            message: 'Project description is required.'
          }, {
            type: 'minlength',
            message: 'Project description must be at least 5 characters long.'
          }],
          'pstart': [{
            type: 'required',
            message: 'You have to select a starting date.'
          }],
          'pend': [{
            type: 'required',
            message: 'You have to select an estimated time-limit'
          }]
        };
      }

      _createClass(AddProjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //formcontrol to be added
          this.project_form = this.formBuilder.group({
            pname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
            pinfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
            pstart: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
            pend: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]))
          });
        }
      }, {
        key: "registerProject",
        value: function registerProject() {
          console.log(this.project_form.value);
          var res = this.projectservice.create_project(this.project_form.value);
          this.project_form.reset;
          this.modalController.dismiss({
            'dismissed': true
          });
        }
      }, {
        key: "savePoject",
        value: function savePoject() {
          console.log("parameters saved");
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.modalController.dismiss({
            'dismissed': true
          });
        }
      }, {
        key: "pname",
        get: function get() {
          return this.project_form.get('pname');
        }
      }]);

      return AddProjectComponent;
    }();

    AddProjectComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_services_projectstore_projectstore_service__WEBPACK_IMPORTED_MODULE_4__["ProjectstoreService"]
      }];
    };

    AddProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-project',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-project.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-project/add-project.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-project.component.scss */
      "./src/app/components/add-project/add-project.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_projectstore_projectstore_service__WEBPACK_IMPORTED_MODULE_4__["ProjectstoreService"]])], AddProjectComponent);
    /***/
  },

  /***/
  "./src/app/components/add2team/add2team.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/add2team/add2team.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdd2teamAdd2teamComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div {\n  width: 380;\n}\n\nion-label {\n  margin-left: 3px;\n  margin-right: 3px;\n}\n\nh5 {\n  margin-left: 3px;\n  margin-right: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQydGVhbS9DOlxcVXNlcnNcXFRBaWViXFxEb2N1bWVudHNcXEdpdEh1YlxcTmxpbml0LUFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFkZDJ0ZWFtXFxhZGQydGVhbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hZGQydGVhbS9hZGQydGVhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkMnRlYW0vYWRkMnRlYW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgd2lkdGg6MzgwO1xyXG4gICAgXHJcbn1cclxuaW9uLWxhYmVse1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG59XHJcblxyXG5oNXtcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufVxyXG4iLCJkaXYge1xuICB3aWR0aDogMzgwO1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cblxuaDUge1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/add2team/add2team.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/add2team/add2team.component.ts ***!
    \***********************************************************/

  /*! exports provided: Add2teamComponent */

  /***/
  function srcAppComponentsAdd2teamAdd2teamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Add2teamComponent", function () {
      return Add2teamComponent;
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

    var Add2teamComponent = /*#__PURE__*/function () {
      function Add2teamComponent(mc) {
        _classCallCheck(this, Add2teamComponent);

        this.mc = mc;
      }

      _createClass(Add2teamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "savePoject",
        value: function savePoject() {
          console.log("Request sent");
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.mc.dismiss({
            'dismissed': true
          });
        }
      }]);

      return Add2teamComponent;
    }();

    Add2teamComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    Add2teamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add2team',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add2team.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add2team/add2team.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add2team.component.scss */
      "./src/app/components/add2team/add2team.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], Add2teamComponent);
    /***/
  },

  /***/
  "./src/app/components/notifications/notifications.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/notifications/notifications.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNotificationsNotificationsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/notifications/notifications.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/notifications/notifications.component.ts ***!
    \*********************************************************************/

  /*! exports provided: NotificationsComponent */

  /***/
  function srcAppComponentsNotificationsNotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function () {
      return NotificationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotificationsComponent = /*#__PURE__*/function () {
      function NotificationsComponent() {
        _classCallCheck(this, NotificationsComponent);
      }

      _createClass(NotificationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotificationsComponent;
    }();

    NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notifications',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notifications.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notifications.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notifications.component.scss */
      "./src/app/components/notifications/notifications.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NotificationsComponent);
    /***/
  },

  /***/
  "./src/app/components/verificationmod/verificationmod.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/components/verificationmod/verificationmod.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsVerificationmodVerificationmodComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h2, p, h3 {\n  margin-left: 8px;\n  margin-right: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92ZXJpZmljYXRpb25tb2QvQzpcXFVzZXJzXFxUQWllYlxcRG9jdW1lbnRzXFxHaXRIdWJcXE5saW5pdC1Bbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFx2ZXJpZmljYXRpb25tb2RcXHZlcmlmaWNhdGlvbm1vZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy92ZXJpZmljYXRpb25tb2QvdmVyaWZpY2F0aW9ubW9kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92ZXJpZmljYXRpb25tb2QvdmVyaWZpY2F0aW9ubW9kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIscCxoM3tcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuXHJcbn0iLCJoMiwgcCwgaDMge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/verificationmod/verificationmod.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/verificationmod/verificationmod.component.ts ***!
    \*************************************************************************/

  /*! exports provided: VerificationmodComponent */

  /***/
  function srcAppComponentsVerificationmodVerificationmodComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerificationmodComponent", function () {
      return VerificationmodComponent;
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


    var src_app_shared_authentification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/authentification-service */
    "./src/app/shared/authentification-service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var VerificationmodComponent = /*#__PURE__*/function () {
      function VerificationmodComponent(authService, modalController, router) {
        _classCallCheck(this, VerificationmodComponent);

        this.authService = authService;
        this.modalController = modalController;
        this.router = router;
      }

      _createClass(VerificationmodComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.modalController.dismiss({
            'dismissed': true
          });
          console.log("debugghere");
          this.router.navigate(['login']);
        }
      }]);

      return VerificationmodComponent;
    }();

    VerificationmodComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_authentification_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    VerificationmodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-verificationmod',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./verificationmod.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/verificationmod/verificationmod.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./verificationmod.component.scss */
      "./src/app/components/verificationmod/verificationmod.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_authentification_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], VerificationmodComponent);
    /***/
  },

  /***/
  "./src/app/services/projectstore/projectstore.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/services/projectstore/projectstore.service.ts ***!
    \***************************************************************/

  /*! exports provided: ProjectstoreService */

  /***/
  function srcAppServicesProjectstoreProjectstoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectstoreService", function () {
      return ProjectstoreService;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");

    var ProjectstoreService = /*#__PURE__*/function () {
      function ProjectstoreService(firestore) {
        _classCallCheck(this, ProjectstoreService);

        this.firestore = firestore;
        this.collectioname = "projects";
      }

      _createClass(ProjectstoreService, [{
        key: "create_project",
        value: function create_project(record) {
          return this.firestore.collection(this.collectioname).add(record);
        }
      }, {
        key: "read_project",
        value: function read_project() {
          return this.firestore.collection(this.collectioname).snapshotChanges();
        }
      }, {
        key: "update_project",
        value: function update_project(record, recordID) {
          return this.firestore.doc(this.collectioname + '/' + recordID).update(record);
        }
      }, {
        key: "delete_project",
        value: function delete_project(record_id) {
          return this.firestore.doc(this.collectioname + '/' + record_id)["delete"]();
        }
      }]);

      return ProjectstoreService;
    }();

    ProjectstoreService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    ProjectstoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])], ProjectstoreService);
    /***/
  },

  /***/
  "./src/app/services/userstore/userfirestore.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/services/userstore/userfirestore.service.ts ***!
    \*************************************************************/

  /*! exports provided: UserfirestoreService */

  /***/
  function srcAppServicesUserstoreUserfirestoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserfirestoreService", function () {
      return UserfirestoreService;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");

    var UserfirestoreService = /*#__PURE__*/function () {
      function UserfirestoreService(firestore) {
        _classCallCheck(this, UserfirestoreService);

        this.firestore = firestore;
        this.collectioname = "user";
      }

      _createClass(UserfirestoreService, [{
        key: "create_user",
        value: function create_user(record) {
          return this.firestore.collection(this.collectioname).add(record);
        }
      }, {
        key: "read_user",
        value: function read_user() {
          return this.firestore.collection(this.collectioname).snapshotChanges();
        }
      }, {
        key: "update_user",
        value: function update_user(record, recordID) {
          return this.firestore.doc(this.collectioname + '/' + recordID).update(record);
        }
      }, {
        key: "delete_user",
        value: function delete_user(record_id) {
          return this.firestore.doc(this.collectioname + '/' + record_id)["delete"]();
        }
      }]);

      return UserfirestoreService;
    }();

    UserfirestoreService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    UserfirestoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])], UserfirestoreService);
    /***/
  },

  /***/
  "./src/app/shared/authentification-service.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/authentification-service.ts ***!
    \****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppSharedAuthentificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
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


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(afAuth) {
        _classCallCheck(this, AuthenticationService);

        this.afAuth = afAuth;
      }

      _createClass(AuthenticationService, [{
        key: "registerUser",
        value: function registerUser(value) {
          var _this4 = this;

          return new Promise(function (resolve, reject) {
            _this4.afAuth.createUserWithEmailAndPassword(value.email, value.password).then(function (res) {
              return resolve(res);
            }, function (err) {
              return reject(err);
            });
          });
        }
      }, {
        key: "loginUser",
        value: function loginUser(value) {
          var _this5 = this;

          return new Promise(function (resolve, reject) {
            _this5.afAuth.signInWithEmailAndPassword(value.email, value.password).then(function (res) {
              return resolve(res);
            }, function (err) {
              return reject(err);
            });
          });
        }
      }, {
        key: "logoutUser",
        value: function logoutUser() {
          var _this6 = this;

          return new Promise(function (resolve, reject) {
            if (_this6.afAuth.currentUser) {
              _this6.afAuth.signOut().then(function () {
                console.log("LOG Out");
                resolve();
              })["catch"](function (error) {
                reject();
              });
            }
          });
        }
      }, {
        key: "userDetails",
        value: function userDetails() {
          return this.afAuth.user;
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])], AuthenticationService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebaseConfig: {
        apiKey: "AIzaSyDXsyh6L3elZxNYN8bZk0utGnLPEOgw57c",
        authDomain: "nlinionic.firebaseapp.com",
        databaseURL: "https://nlinionic.firebaseio.com",
        projectId: "nlinionic",
        storageBucket: "nlinionic.appspot.com",
        messagingSenderId: "956759542409",
        appId: "1:956759542409:web:d90a5820b12aa0bc2fd458",
        measurementId: "G-KB7LQ708WG"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/pwa-elements/loader */
    "./node_modules/@ionic/pwa-elements/loader/index.es2017.mjs");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_5__["defineCustomElements"])(window);
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\TAieb\Documents\GitHub\Nlinit-Angular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map