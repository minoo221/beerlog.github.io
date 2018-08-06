webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_beerdetail_beerdetail_component__ = __webpack_require__("./src/app/components/beerdetail/beerdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_add_beer_add_beer_component__ = __webpack_require__("./src/app/components/add-beer/add-beer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_edit_beer_edit_beer_component__ = __webpack_require__("./src/app/components/edit-beer/edit-beer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'beer/add', component: __WEBPACK_IMPORTED_MODULE_6__components_add_beer_add_beer_component__["a" /* AddBeerComponent */] },
    { path: 'beer/:id', component: __WEBPACK_IMPORTED_MODULE_3__components_beerdetail_beerdetail_component__["a" /* BeerdetailComponent */] },
    { path: 'beer/edit/:id', component: __WEBPACK_IMPORTED_MODULE_7__components_edit_beer_edit_beer_component__["a" /* EditBeerComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */].forRoot(routes)
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<flash-messages></flash-messages>\n<div class=\"container\">\n    <div class=\"loading-overlay\" *ngIf=\"loading\">\n        <!-- show something fancy here, here with Angular 2 Material's loading bar or circle -->\n        <mat-spinner></mat-spinner>>\n    </div>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
        this.loading = true;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.router.events
            .subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationStart */]) {
                _this.loading = true;
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */] ||
                event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationCancel */]) {
                _this.loading = false;
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_add_beer_add_beer_component__ = __webpack_require__("./src/app/components/add-beer/add-beer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_beerdetail_beerdetail_component__ = __webpack_require__("./src/app/components/beerdetail/beerdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_sidebar_sidebar_component__ = __webpack_require__("./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_edit_beer_edit_beer_component__ = __webpack_require__("./src/app/components/edit-beer/edit-beer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_beers_beers_component__ = __webpack_require__("./src/app/components/beers/beers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_beer_service__ = __webpack_require__("./src/app/services/beer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_add_beer_add_beer_component__["a" /* AddBeerComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_beerdetail_beerdetail_component__["a" /* BeerdetailComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_edit_beer_edit_beer_component__["a" /* EditBeerComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_beers_beers_component__["a" /* BeersComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_19__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].firebase, 'beerlog'),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_22__services_beer_service__["a" /* BeerService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-beer/add-beer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-beer/add-beer.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" class=\"dashboard-h\" fxLayoutAlign=\"space-between center\">\n  <div fxFlex=\"50%\" fxFlex.gt-sm=\"25%\">\n    <h1>Pridaj pivo</h1>\n  </div>\n  <div fxFlex=\"50%\" fxFlex.gt-sm=\"25%\" fxLayoutAlign=\"center\">\n    <mat-checkbox *ngIf=\"!oneStep\" (click)=\"oneStep = !oneStep\">Jednokroková infúzia</mat-checkbox>\n    <mat-checkbox *ngIf=\"oneStep\" (click)=\"oneStep = !oneStep\" [checked]=\"oneStep\">Jednokroková infúzia</mat-checkbox>\n  </div>\n  <div fxFlex=\"100%\" fxFlex.gt-sm=\"25%\" fxLayoutAlign=\"flex-end\">\n    <a mat-raised-button routerLink=\"/\">Spat na Dashboard</a>\n  </div>\n</div>\n<form #beerForm=\"ngForm\" (ngSubmit)=\"onSubmit(beerForm)\">\n    <mat-tab-group>\n        <mat-tab label=\"Údaje\">\n          <mat-form-field>\n            <input matInput name=\"nazovPiva\" placeholder=\"Názov piva\" #beerNazovPiva=\"ngModel\" [(ngModel)]=\"beer.nazovPiva\" minlength=\"3\" required>\n            <mat-error *ngIf=\"beerNazovPiva?.errors?.minlength\">\n              Zadajte aspoň tri znaky\n            </mat-error>\n            <mat-error *ngIf=\"beerNazovPiva?.errors?.required\">\n              Povinné\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input type=\"number\" name=\"mSladu\" matInput placeholder=\"Hmotnosť sladu\" #beerMSLadu=\"ngModel\" [(ngModel)]=\"beer.mSladu\" required>\n            <mat-error *ngIf=\"beerMSLadu?.errors?.required\">\n              Povinné\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input type=\"number\" name=\"vHlNalevu\" matInput placeholder=\"Objem hlavného nálevu\" #beerVHlNalevu=\"ngModel\" [(ngModel)]=\"beer.vHlNalevu\" required>\n            <mat-error *ngIf=\"beerVHlNalevu?.errors?.required\">\n              Povinné\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input type=\"number\" name=\"vystierka\" matInput placeholder=\"Teplota vystierky\" #beerVystierka=\"ngModel\" [(ngModel)]=\"beer.vystierka\" required>\n            <mat-error *ngIf=\"beerVystierka?.errors?.required\">\n              Povinné\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field *ngIf=\"!oneStep\">\n            <input type=\"number\" name=\"lowCarbTemp\" matInput placeholder=\"Nižšia cukrotvorna teplota (&#946;)\" #beerLowCarbTemp=\"ngModel\" [(ngModel)]=\"beer.lowCarbTemp\">\n          </mat-form-field>\n          <mat-form-field *ngIf=\"!oneStep\">\n            <input type=\"number\" name=\"lowCarbTime\" matInput placeholder=\"Nižšia cukrotvorna teplota - čas\" #beerLowCarbTime=\"ngModel\" [(ngModel)]=\"beer.lowCarbTime\">\n          </mat-form-field>\n          <mat-form-field *ngIf=\"!oneStep\">\n            <input type=\"number\" name=\"highCarbTemp\" matInput placeholder=\"Vyššia cukrotvorna teplota (&#945;)\" #beerHighCarbTemp=\"ngModel\" [(ngModel)]=\"beer.highCarbTemp\">\n          </mat-form-field>\n          <mat-form-field *ngIf=\"!oneStep\">\n            <input type=\"number\" name=\"highCarbTime\" matInput placeholder=\"Vyššia cukrotvorna teplota - čas\" #beerHighCarbTime=\"ngModel\" [(ngModel)]=\"beer.highCarbTime\">\n          </mat-form-field>\n          <mat-form-field *ngIf=\"oneStep\">\n            <input type=\"number\" name=\"oneStepTemp\" matInput placeholder=\"Jednokrokova infuzia teplota\" #beerOneStepTemp=\"ngModel\" [(ngModel)]=\"beer.oneStepTemp\">\n          </mat-form-field>\n          <mat-form-field *ngIf=\"oneStep\">\n            <input type=\"number\" name=\"oneStepTime\" matInput placeholder=\"Jednokrokova infuzia čas\" #beerOneStepTime=\"ngModel\" [(ngModel)]=\"beer.oneStepTime\">\n          </mat-form-field>\n          <mat-form-field>\n            <input type=\"number\" name=\"odRmutTemp\" matInput placeholder=\"Odrmutovacia teplota\" #beerOdRmutTemp=\"ngModel\" [(ngModel)]=\"beer.odRmutTemp\">\n          </mat-form-field>\n          <mat-form-field>\n            <input type=\"number\" name=\"odRmutTime\" matInput placeholder=\"Odrmutovacia teplota - čas\" #beerOdRmutTime=\"ngModel\" [(ngModel)]=\"beer.odRmutTime\">\n          </mat-form-field>\n          <mat-form-field>\n            <input type=\"number\" name=\"objemPredku\" matInput placeholder=\"Objem predku\" #beerObjemPredkue=\"ngModel\" [(ngModel)]=\"beer.objemPredku\">\n          </mat-form-field>\n          <mat-form-field>\n            <input type=\"number\" name=\"objemVyslVody\" matInput placeholder=\"Objem vysladzovacej vody\" #beerObjemVyslVody=\"ngModel\" [(ngModel)]=\"beer.objemVyslVody\">\n          </mat-form-field>\n          <mat-form-field>\n            <input type=\"number\" name=\"vPredChmel\" matInput placeholder=\"Objem sladiny\" #beerVPredChmel=\"ngModel\" [(ngModel)]=\"beer.vPredChmel\">\n          </mat-form-field>\n          <mat-form-field>\n            <input type=\"number\" name=\"hSliadiny\" matInput placeholder=\"Hustota sladiny (SG)\" #beerHSliadiny=\"ngModel\" [(ngModel)]=\"beer.hSliadiny\">\n          </mat-form-field>\n          <mat-form-field>\n            <input type=\"number\" name=\"chmelovar\" matInput placeholder=\"Chmelovar (min)\" #beerChmelovar=\"ngModel\" [(ngModel)]=\"beer.chmelovar\">\n          </mat-form-field>\n          <mat-form-field>\n            <input type=\"number\" name=\"vMladiny\" matInput placeholder=\"Objem mladiny (L)\" #beerVMladiny=\"ngModel\" [(ngModel)]=\"beer.vMladiny\">\n          </mat-form-field>\n          <mat-form-field>\n            <input type=\"number\" name=\"hMladiny\" matInput placeholder=\"Hustota mladiny (SG)\" #beerHMladiny=\"ngModel\" [(ngModel)]=\"beer.hMladiny\">\n          </mat-form-field>\n          <mat-form-field>\n            <input type=\"number\" name=\"fg\"  matInput placeholder=\"Konečná hustota\" #beerFG=\"ngModel\" [(ngModel)]=\"beer.fg\">\n          </mat-form-field>\n          <mat-form-field>\n            <input type=\"number\" name=\"ebc\"  matInput placeholder=\"EBC\" #beerFG=\"ngModel\" [(ngModel)]=\"beer.ebc\">\n          </mat-form-field>\n        </mat-tab>\n        <mat-tab label=\"Poznámky\">\n            <mat-form-field>\n                <textarea name=\"pozRmutovanie\" matInput placeholder=\"Poznámka - rmutovanie\" matTextareaAutosize matAutosizeMinRows=\"6\"\n                          matAutosizeMaxRows=\"7\" #beerPozRmutovanie=\"ngModel\" [(ngModel)]=\"beer.pozRmutovanie\"></textarea>\n            </mat-form-field>\n            <mat-form-field>\n                <textarea name=\"pozChmelovar\" matInput placeholder=\"Poznámka - chmelovar\" matTextareaAutosize matAutosizeMinRows=\"6\"\n                          matAutosizeMaxRows=\"7\" #beerPozChmelovar=\"ngModel\" [(ngModel)]=\"beer.pozChmelovar\"></textarea>\n            </mat-form-field>\n            <mat-form-field>\n                <textarea name=\"pozKvasenie\" matInput placeholder=\"Poznámka - kvasenie\" matTextareaAutosize matAutosizeMinRows=\"6\"\n                          matAutosizeMaxRows=\"7\" #beerPozKvasenie=\"ngModel\" [(ngModel)]=\"beer.pozKvasenie\"></textarea>\n            </mat-form-field>\n            <mat-form-field>\n                <textarea name=\"pozChut\" matInput placeholder=\"Poznámka - chuťs\" matTextareaAutosize matAutosizeMinRows=\"6\"\n                          matAutosizeMaxRows=\"7\" #beerPozChut=\"ngModel\" [(ngModel)]=\"beer.pozChut\"></textarea>\n            </mat-form-field>\n            <!--<input type=\"file\"  (change)=\"onFileSelected($event)\">\n            <button (click)=\"onUpload()\">Upload</button>-->\n        </mat-tab>\n    </mat-tab-group>\n    <div class=\"button-s\">\n        <button mat-raised-button color=\"primary\" type=\"submit\">Ulož</button>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/components/add-beer/add-beer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBeerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_beer_service__ = __webpack_require__("./src/app/services/beer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddBeerComponent = /** @class */ (function () {
    function AddBeerComponent(router, beerService, flashMessage) {
        this.router = router;
        this.beerService = beerService;
        this.flashMessage = flashMessage;
        this.beer = {
            nazovPiva: "",
            mSladu: null,
            vHlNalevu: null,
            vystierka: null,
            lowCarbTemp: null,
            lowCarbTime: null,
            highCarbTemp: null,
            highCarbTime: null,
            oneStepTemp: null,
            oneStepTime: null,
            odRmutTemp: null,
            odRmutTime: null,
            objemPredku: null,
            objemVyslVody: null,
            vPredChmel: null,
            hSliadiny: null,
            chmelovar: null,
            hMladiny: null,
            vMladiny: null,
            fg: null,
            datum: null,
            pozRmutovanie: "",
            pozChmelovar: "",
            pozKvasenie: "",
            pozChut: "",
            ebc: null,
            oneStep: false,
        };
        this.oneStep = false;
    }
    AddBeerComponent.prototype.ngOnInit = function () {
    };
    AddBeerComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            // Show error
            this.flashMessage.show('Prosím zadajte povinné údaje', {
                cssClass: 'alert-warn', timeauto: 4000,
            });
        }
        else {
            // Add new client
            this.beerService.newBeer(value);
            // Show message
            this.flashMessage.show('Údaje boli uspešne uložené', {
                cssClass: 'alert-success', timeauto: 4000
            });
            // Redirect to dashboars
            this.router.navigate(['/']);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('beerForm'),
        __metadata("design:type", Object)
    ], AddBeerComponent.prototype, "from", void 0);
    AddBeerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-beer',
            template: __webpack_require__("./src/app/components/add-beer/add-beer.component.html"),
            styles: [__webpack_require__("./src/app/components/add-beer/add-beer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_beer_service__["a" /* BeerService */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]])
    ], AddBeerComponent);
    return AddBeerComponent;
}());



/***/ }),

/***/ "./src/app/components/beerdetail/beerdetail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/beerdetail/beerdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" class=\"dashboard-h\" fxLayoutAlign=\"space-between center\">\n    <div fxFlex=\"50%\" fxFlex.gt-sm=\"25%\">\n        <h1>Detail piva</h1>\n    </div>\n    <div fxFlex=\"50%\" fxFlex.gt-sm=\"25%\" fxLayoutAlign=\"center\">\n        <a mat-raised-button routerLink=\"/\">Späť na Dashboard</a>\n    </div>\n    <div fxFlex=\"100%\" fxFlex.gt-sm=\"25%\" fxLayoutAlign=\"flex-end\">\n        <a routerLink=\"/beer/edit/{{id}}\" mat-raised-button color=\"accent\">Uprav</a>\n        <button (click)=\"onDeleteClick()\" mat-raised-button color=\"warn\">Vymaž</button>\n    </div>\n</div>\n<mat-tab-group>\n    <mat-tab label=\"Údaje\">\n        <div class=\"beer-detail\">\n            <div class=\"beer-item\">\n                <h4>Názov piva</h4>\n                <h3>{{beer?.nazovPiva}}</h3>\n            </div>\n            <div class=\"beer-item\">\n                <h4>Hmotnosť sladu</h4>\n                <h3>{{beer?.mSladu}} kg</h3>\n            </div>\n            <div class=\"beer-item\">\n                <h4>Objem hlavného nálevu</h4>\n                <h3>{{beer?.vHlNalevu}} L</h3>\n            </div>\n            <div class=\"beer-item\">\n                <h4>Teplota výstierky</h4>\n                <h3>{{beer?.vystierka}} °C</h3>\n            </div>\n            <div *ngIf=\"beer?.lowCarbTemp\" class=\"beer-item\">\n                <h4>Nižšia cukrotvorna teplota (&#946;)</h4>\n                <h3>{{beer?.lowCarbTemp}} °C</h3>\n            </div>\n            <div *ngIf=\"beer?.lowCarbTime\" class=\"beer-item\">\n                <h4>Nižšia cukrotvorna teplota - čas</h4>\n                <h3>{{beer?.lowCarbTemp}} min</h3>\n            </div>\n            <div *ngIf=\"beer?.highCarbTemp\" class=\"beer-item\">\n                <h4>Vyššia cukrotvorna teplota (&#945;)</h4>\n                <h3>{{beer?.highCarbTemp}} °C</h3>\n            </div>\n            <div *ngIf=\"beer?.highCarbTime\" class=\"beer-item\">\n                <h4>Vyššia cukrotvorna teplota čas</h4>\n                <h3>{{beer?.highCarbTime}} min</h3>\n            </div>\n            <div *ngIf=\"beer?.oneStepTemp\" class=\"beer-item\">\n                <h4>Jednokroková infúzia - teplota</h4>\n                <h3>{{beer?.oneStepTemp}} °C</h3>\n            </div>\n            <div *ngIf=\"beer?.oneStepTime\" class=\"beer-item\">\n                <h4>Jednokroková infúzia - čas</h4>\n                <h3>{{beer?.oneStepTime}} min</h3>\n            </div>\n            <div class=\"beer-item\">\n                <h4>Odrmutovacia teplota</h4>\n                <h3>{{beer?.odRmutTemp}} °C</h3>\n            </div>\n            <div class=\"beer-item\">\n                <h4>Odrmutovacia teplota - čas</h4>\n                <h3>{{beer?.odRmutTime}} min</h3>\n            </div>\n            <div class=\"beer-item\">\n                <h4>Objem predku</h4>\n                <h3>{{beer?.objemPredku}} L</h3>\n            </div>\n            <div class=\"beer-item\">\n                <h4>Objem vysladzovacej vody</h4>\n                <h3>{{beer?.objemVyslVody}} L</h3>\n            </div>\n            <div class=\"beer-item\">\n                <h4>Objem sladiny</h4>\n                <h3>{{beer?.vPredChmel}} L</h3>\n            </div>\n            <div class=\"beer-item\">\n                <h4>Hustota sladiny</h4>\n                <h3>{{beer?.hSliadiny}} SG</h3>\n            </div>\n            <div class=\"beer-item\">\n                <h4>Chmelovar</h4>\n                <h3>{{beer?.chmelovar}} min</h3>\n            </div>\n            <div class=\"beer-item\">\n                <h4>Objem mladiny</h4>\n                <h3>{{beer?.vMladiny}} L</h3>\n            </div>\n            <div class=\"beer-item\">\n                <h4>Hustota mladiny</h4>\n                <h3>{{beer?.hMladiny}} SG</h3>\n            </div>\n            <div class=\"beer-item\">\n                <h4>Končná hustota</h4>\n                <h3>{{beer?.fg}} SG</h3>\n            </div>\n            <div class=\"beer-item\">\n                <h4>Datum</h4>\n                <h3>{{beer?.datum | date}}</h3>\n            </div>\n            <div class=\"beer-item\">\n                <h4>EBC: <span class=\"ebc\">{{beer?.ebc}}</span></h4>\n                <div id=\"beer-ebc\">\n                </div>\n            </div>\n        </div>\n    </mat-tab>\n    <mat-tab label=\"Poznámky\">\n        <div class=\"beer-detail\">\n            <div class=\"beer-item\">\n                <h4>Poznámka - rmutovanie</h4>\n                <p>{{beer?.pozRmutovanie}}</p>\n            </div>\n            <div class=\"beer-item\">\n                <h4>Poznámka - chmelovar</h4>\n                <p>{{beer?.pozChmelovar}}</p>\n            </div>\n            <div class=\"beer-item\">\n                <h4>Poznámka - kvasenie</h4>\n                <p>{{beer?.pozKvasenie}}</p>\n            </div>\n            <div class=\"beer-item\">\n                <h4>Poznámka - chuť</h4>\n                <p>{{beer?.pozChut}}</p>\n            </div>\n        </div>\n    </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/components/beerdetail/beerdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeerdetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_beer_service__ = __webpack_require__("./src/app/services/beer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BeerdetailComponent = /** @class */ (function () {
    function BeerdetailComponent(beerService, router, route, flashMessage) {
        this.beerService = beerService;
        this.router = router;
        this.route = route;
        this.flashMessage = flashMessage;
    }
    BeerdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get id from url
        this.id = this.route.snapshot.params['id'];
        // Get client
        this.beerService.getBeer(this.id).subscribe(function (beer) {
            _this.beer = beer;
            _this.ebcChanger(beer.ebc);
        });
    };
    BeerdetailComponent.prototype.onDeleteClick = function () {
        if (confirm('Ste si istý?')) {
            this.beerService.deleteBeer(this.beer);
            this.flashMessage.show("Pivo bolo úspešne vymazané", {
                cssClass: 'alert-success', timeout: 4000
            });
            this.router.navigate(['/']);
        }
    };
    BeerdetailComponent.prototype.ebcChanger = function (beer) {
        var color = document.getElementById("beer-ebc");
        switch (beer) {
            case 1:
                color.style.background = "#ffe699";
                break;
            case 2:
                color.style.background = "#ffd978";
                break;
            case 3:
                color.style.background = "#ffca5a";
                break;
            case 4:
                color.style.background = "#ffbf43";
                break;
            case 5:
                color.style.background = "#fcb124";
                break;
            case 6:
                color.style.background = "#f8a700";
                break;
            case 7:
                color.style.background = "#f39c00";
                break;
            case 8:
                color.style.background = "#ea8f00";
                break;
            case 9:
                color.style.background = "#e68500";
                break;
            case 10:
                color.style.background = "#de7c00";
                break;
            case 11:
                color.style.background = "#d77200";
                break;
            case 12:
                color.style.background = "#d06900";
                break;
            case 13:
                color.style.background = "#ca6200";
                break;
            case 14:
                color.style.background = "#c35901";
                break;
            case 15:
                color.style.background = "#bb5000";
                break;
            case 16:
                color.style.background = "#b64c00";
                break;
            case 17:
                color.style.background = "#b04500";
                break;
            case 18:
                color.style.background = "#a63e00";
                break;
            case 19:
                color.style.background = "#a03700";
                break;
            case 20:
                color.style.background = "#9c3200";
                break;
            case 21:
                color.style.background = "#962d00";
                break;
            case 22:
                color.style.background = "#8f2a00";
                break;
            case 23:
                color.style.background = "#872300";
                break;
            case 24:
                color.style.background = "#962d00";
                break;
            case 25:
                color.style.background = "#811e00";
                break;
            case 26:
                color.style.background = "#771900";
                break;
            case 27:
                color.style.background = "#701400";
                break;
            case 28:
                color.style.background = "#6a0e00s";
                break;
            case 29:
                color.style.background = "#660d00";
                break;
            case 30:
                color.style.background = "#5e0c00";
                break;
            case 31:
                color.style.background = "#5a0a03";
                break;
            case 32:
                color.style.background = "#600902";
                break;
            case 33:
                color.style.background = "#530908";
                break;
            case 34:
                color.style.background = "#4b0505";
                break;
            case 35:
                color.style.background = "#460606";
                break;
            case 36:
                color.style.background = "#440607";
                break;
            case 37:
                color.style.background = "#3f0708";
                break;
            case 38:
                color.style.background = "#3a0608";
                break;
            case 39:
                color.style.background = "#3f0708";
                break;
            case 40:
                color.style.background = "#3a080b";
                break;
            case 37:
                color.style.background = "#3f0708";
                break;
            default:
                color.style.background = "#000";
        }
    };
    BeerdetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-beerdetail',
            template: __webpack_require__("./src/app/components/beerdetail/beerdetail.component.html"),
            styles: [__webpack_require__("./src/app/components/beerdetail/beerdetail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_beer_service__["a" /* BeerService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], BeerdetailComponent);
    return BeerdetailComponent;
}());



/***/ }),

/***/ "./src/app/components/beers/beers.component.css":
/***/ (function(module, exports) {

module.exports = ".dashboard-h {\n    padding: 20px 0;\n}\n\nh1, h3 {\n    margin: 0;\n}"

/***/ }),

/***/ "./src/app/components/beers/beers.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" class=\"dashboard-h\" fxLayoutAlign=\"space-between center\">\n  <div fxFlex=\"50%\" fxFlex.gt-sm=\"25%\">\n    <h1>Uvarené piva</h1>\n  </div>\n  <div fxFlex=\"50%\" fxFlex.gt-sm=\"25%\" fxLayoutAlign=\"flex-end\">\n    <h3>Počet pív: {{count}}</h3>\n  </div>\n</div>\n<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-header\">\n  <mat-table #table [dataSource]=\"beers\">\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"nazovPiva\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Názov piva</mat-header-cell>\n      <mat-cell *matCellDef=\"let beer\"> {{beer.nazovPiva}} </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"hMladiny\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Stupnovitosť</mat-header-cell>\n      <mat-cell *matCellDef=\"let beer\"><span *ngIf=\"plato\">{{round(multyplyi(beer.hMladiny), 1)}}°</span><span *ngIf=\"!plato\">{{beer.hMladiny}}</span> </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"abv\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Alkohol</mat-header-cell>\n      <mat-cell *matCellDef=\"let beer\"> {{round(getAbv(beer.hMladiny, beer.fg), 1)}} </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"mSladu\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Hmotnosť sladu</mat-header-cell>\n      <mat-cell *matCellDef=\"let beer\"> {{beer.mSladu}} </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"datum\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Datum varenia</mat-header-cell>\n      <mat-cell *matCellDef=\"let beer\"> {{beer.datum}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\" routerLink=\"beer/{{row.id}}\"></mat-row>\n  </mat-table>\n    <mat-paginator #paginator\n                   [pageSize]=\"10\"\n                   [pageSizeOptions]=\"[5, 10, 20]\"\n                   [showFirstLastButtons]=\"true\">\n    </mat-paginator>\n    <button *ngIf=\"plato\" (click)=\"plato = !plato\" mat-button color=\"primary\">Change to SG</button>\n    <button *ngIf=\"!plato\" (click)=\"plato = !plato\" mat-button color=\"primary\">Change to Plato</button>\n  </div>\n</div>\n\n<ng-template #noBrewNotes>\n  <hr>\n  <h5>Žiadne pivá v záznamoch</h5>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/beers/beers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_beer_service__ = __webpack_require__("./src/app/services/beer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeersComponent = /** @class */ (function () {
    function BeersComponent(beerService) {
        this.beerService = beerService;
        this.displayedColumns = ['nazovPiva', 'hMladiny', 'abv', 'mSladu', 'datum'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatTableDataSource */](this.beers);
    }
    /**
     * Set the paginator after the view init since this component will
     * be able to query its view for the initialized paginator.
     */
    BeersComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    BeersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.beerService.getBeers().subscribe(function (beers) {
            _this.beers = beers;
            _this.count = beers.length;
        });
    };
    BeersComponent.prototype.multyplyi = function (sg) {
        var val = (sg - 1) / 4;
        return val * 1000;
    };
    BeersComponent.prototype.round = function (value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    };
    BeersComponent.prototype.getAbv = function (og, fg) {
        var division = (og - fg) * 1000;
        if (fg === 0) {
            return 0;
        }
        return division / 7.45;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatPaginator */])
    ], BeersComponent.prototype, "paginator", void 0);
    BeersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-beers',
            template: __webpack_require__("./src/app/components/beers/beers.component.html"),
            styles: [__webpack_require__("./src/app/components/beers/beers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_beer_service__["a" /* BeerService */]])
    ], BeersComponent);
    return BeersComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-beers></app-beers>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-beer/edit-beer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit-beer/edit-beer.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" class=\"dashboard-h\" fxLayoutAlign=\"space-between center\">\n  <div fxFlex=\"50%\" fxFlex.gt-sm=\"25%\">\n    <h1>Uprav pivo</h1>\n  </div>\n  <div fxFlex=\"50%\" fxFlex.gt-sm=\"25%\" fxLayoutAlign=\"center\">\n    <mat-checkbox *ngIf=\"!oneStep\" (click)=\"oneStep = !oneStep\">Jednokroková infúzia</mat-checkbox>\n    <mat-checkbox *ngIf=\"oneStep\" (click)=\"oneStep = !oneStep\" [checked]=\"oneStep\">Jednokroková infúzia</mat-checkbox>\n  </div>\n  <div fxFlex=\"100%\" fxFlex.gt-sm=\"25%\" fxLayoutAlign=\"flex-end\">\n    <a mat-raised-button routerLink=\"/beer/{{id}}\">Spat na Dashboard</a>\n  </div>\n</div>\n<form #beerForm=\"ngForm\" (ngSubmit)=\"onSubmit(beerForm)\">\n  <mat-tab-group>\n    <mat-tab label=\"Údaje\">\n      <mat-form-field>\n        <input matInput name=\"nazovPiva\" placeholder=\"Názov piva\" #beerNazovPiva=\"ngModel\" [(ngModel)]=\"beer.nazovPiva\" minlength=\"3\" required>\n        <mat-error *ngIf=\"beerNazovPiva?.errors?.minlength\">\n          Zadajte aspoň tri znaky\n        </mat-error>\n        <mat-error *ngIf=\"beerNazovPiva?.errors?.required\">\n          Povinné\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <input type=\"number\" name=\"mSladu\" matInput placeholder=\"Hmotnosť sladu\" #beerMSLadu=\"ngModel\" [(ngModel)]=\"beer.mSladu\" required>\n        <mat-error *ngIf=\"beerMSLadu?.errors?.required\">\n          Povinné\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <input type=\"number\" name=\"vHlNalevu\" matInput placeholder=\"Objem hlavného nálevu\" #beerVHlNalevu=\"ngModel\" [(ngModel)]=\"beer.vHlNalevu\" required>\n        <mat-error *ngIf=\"beerVHlNalevu?.errors?.required\">\n          Povinné\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <input type=\"number\" name=\"vystierka\" matInput placeholder=\"Teplota vystierky\" #beerVystierka=\"ngModel\" [(ngModel)]=\"beer.vystierka\" required>\n        <mat-error *ngIf=\"beerVystierka?.errors?.required\">\n          Povinné\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field *ngIf=\"!oneStep\">\n        <input type=\"number\" name=\"lowCarbTemp\" matInput placeholder=\"Nižšia cukrotvorna teplota (&#946;)\" #beerLowCarbTemp=\"ngModel\" [(ngModel)]=\"beer.lowCarbTemp\">\n      </mat-form-field>\n      <mat-form-field *ngIf=\"!oneStep\">\n        <input type=\"number\" name=\"lowCarbTime\" matInput placeholder=\"Nižšia cukrotvorna teplota - čas\" #beerLowCarbTime=\"ngModel\" [(ngModel)]=\"beer.lowCarbTime\">\n      </mat-form-field>\n      <mat-form-field *ngIf=\"!oneStep\">\n        <input type=\"number\" name=\"highCarbTemp\" matInput placeholder=\"Vyššia cukrotvorna teplota (&#945;)\" #beerHighCarbTemp=\"ngModel\" [(ngModel)]=\"beer.highCarbTemp\">\n      </mat-form-field>\n      <mat-form-field *ngIf=\"!oneStep\">\n        <input type=\"number\" name=\"highCarbTime\" matInput placeholder=\"Vyššia cukrotvorna teplota - čas\" #beerHighCarbTime=\"ngModel\" [(ngModel)]=\"beer.highCarbTime\">\n      </mat-form-field>\n      <mat-form-field *ngIf=\"oneStep\">\n        <input type=\"number\" name=\"oneStepTemp\" matInput placeholder=\"Jednokrokova infuzia teplota\" #beerOneStepTemp=\"ngModel\" [(ngModel)]=\"beer.oneStepTemp\">\n      </mat-form-field>\n      <mat-form-field *ngIf=\"oneStep\">\n        <input type=\"number\" name=\"oneStepTime\" matInput placeholder=\"Jednokrokova infuzia čas\" #beerOneStepTime=\"ngModel\" [(ngModel)]=\"beer.oneStepTime\">\n      </mat-form-field>\n      <mat-form-field>\n        <input type=\"number\" name=\"odRmutTemp\" matInput placeholder=\"Odrmutovacia teplota\" #beerOdRmutTemp=\"ngModel\" [(ngModel)]=\"beer.odRmutTemp\">\n      </mat-form-field>\n      <mat-form-field>\n        <input type=\"number\" name=\"odRmutTime\" matInput placeholder=\"Odrmutovacia teplota - čas\" #beerOdRmutTime=\"ngModel\" [(ngModel)]=\"beer.odRmutTime\">\n      </mat-form-field>\n      <mat-form-field>\n        <input type=\"number\" name=\"objemPredku\" matInput placeholder=\"Objem predku\" #beerObjemPredkue=\"ngModel\" [(ngModel)]=\"beer.objemPredku\">\n      </mat-form-field>\n      <mat-form-field>\n        <input type=\"number\" name=\"objemVyslVody\" matInput placeholder=\"Objem vysladzovacej vody\" #beerObjemVyslVody=\"ngModel\" [(ngModel)]=\"beer.objemVyslVody\">\n      </mat-form-field>\n      <mat-form-field>\n        <input type=\"number\" name=\"vPredChmel\" matInput placeholder=\"Objem sladiny\" #beerVPredChmel=\"ngModel\" [(ngModel)]=\"beer.vPredChmel\">\n      </mat-form-field>\n      <mat-form-field>\n        <input type=\"number\" name=\"hSliadiny\" matInput placeholder=\"Hustota sladiny (SG)\" #beerHSliadiny=\"ngModel\" [(ngModel)]=\"beer.hSliadiny\">\n      </mat-form-field>\n      <mat-form-field>\n        <input type=\"number\" name=\"chmelovar\" matInput placeholder=\"Chmelovar (min)\" #beerChmelovar=\"ngModel\" [(ngModel)]=\"beer.chmelovar\">\n      </mat-form-field>\n      <mat-form-field>\n        <input type=\"number\" name=\"vMladiny\" matInput placeholder=\"Objem mladiny (L)\" #beerVMladiny=\"ngModel\" [(ngModel)]=\"beer.vMladiny\">\n      </mat-form-field>\n      <mat-form-field>\n        <input type=\"number\" name=\"hMladiny\" matInput placeholder=\"Hustota mladiny (SG)\" #beerHMladiny=\"ngModel\" [(ngModel)]=\"beer.hMladiny\">\n      </mat-form-field>\n      <mat-form-field>\n        <input type=\"number\" name=\"fg\"  matInput placeholder=\"Konečná hustota\" #beerFG=\"ngModel\" [(ngModel)]=\"beer.fg\">\n      </mat-form-field>\n        <mat-form-field>\n            <input type=\"number\" name=\"ebc\"  matInput placeholder=\"EBC\" #beerFG=\"ngModel\" [(ngModel)]=\"beer.ebc\">\n        </mat-form-field>\n    </mat-tab>\n      <mat-tab label=\"Poznámky\">\n          <mat-form-field>\n                <textarea name=\"pozRmutovanie\" matInput placeholder=\"Poznámka - rmutovanie\" matTextareaAutosize matAutosizeMinRows=\"6\"\n                          matAutosizeMaxRows=\"7\" #beerPozRmutovanie=\"ngModel\" [(ngModel)]=\"beer.pozRmutovanie\"></textarea>\n          </mat-form-field>\n          <mat-form-field>\n                <textarea name=\"pozChmelovar\" matInput placeholder=\"Poznámka - chmelovar\" matTextareaAutosize matAutosizeMinRows=\"6\"\n                          matAutosizeMaxRows=\"7\" #beerPozChmelovar=\"ngModel\" [(ngModel)]=\"beer.pozChmelovar\"></textarea>\n          </mat-form-field>\n          <mat-form-field>\n                <textarea name=\"pozKvasenie\" matInput placeholder=\"Poznámka - kvasenie\" matTextareaAutosize matAutosizeMinRows=\"6\"\n                          matAutosizeMaxRows=\"7\" #beerPozKvasenie=\"ngModel\" [(ngModel)]=\"beer.pozKvasenie\"></textarea>\n          </mat-form-field>\n          <mat-form-field>\n                <textarea name=\"pozChut\" matInput placeholder=\"Poznámka - kvasenie\" matTextareaAutosize matAutosizeMinRows=\"6\"\n                          matAutosizeMaxRows=\"7\" #beerPozChut=\"ngModel\" [(ngModel)]=\"beer.pozChut\"></textarea>\n          </mat-form-field>\n          <!--<input type=\"file\"  (change)=\"onFileSelected($event)\">\n          <button (click)=\"onUpload()\">Upload</button>-->\n      </mat-tab>\n  </mat-tab-group>\n    <div class=\"button-s\">\n        <button mat-raised-button color=\"primary\" type=\"submit\">Ulož</button>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/components/edit-beer/edit-beer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBeerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_beer_service__ = __webpack_require__("./src/app/services/beer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditBeerComponent = /** @class */ (function () {
    function EditBeerComponent(beerService, router, route, flashMessage) {
        this.beerService = beerService;
        this.router = router;
        this.route = route;
        this.flashMessage = flashMessage;
        this.beer = {
            nazovPiva: "",
            mSladu: null,
            vHlNalevu: null,
            vystierka: null,
            lowCarbTemp: null,
            lowCarbTime: null,
            highCarbTemp: null,
            highCarbTime: null,
            oneStepTemp: null,
            oneStepTime: null,
            odRmutTemp: null,
            odRmutTime: null,
            objemPredku: null,
            objemVyslVody: null,
            vPredChmel: null,
            hSliadiny: null,
            chmelovar: null,
            hMladiny: null,
            vMladiny: null,
            fg: null,
            pozRmutovanie: "",
            pozChmelovar: "",
            pozKvasenie: "",
            pozChut: "",
            oneStep: false
        };
        this.oneStep = false;
    }
    EditBeerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get id from url
        this.id = this.route.snapshot.params['id'];
        // Get beer
        this.beerService.getBeer(this.id).subscribe(function (beer) {
            _this.beer = beer;
        });
    };
    EditBeerComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            this.flashMessage.show("Prosím vyplnte polia správne", {
                cssClass: 'alert-warn', timeout: 4000
            });
        }
        else {
            // Add id to beer
            value.id = this.id;
            // Update beer
            this.beerService.updateBeer(value);
            this.flashMessage.show("Polia boli úspešne upravené", {
                cssClass: 'alert-success', timeout: 4000
            });
            this.router.navigate(['/beer/' + this.id]);
        }
    };
    EditBeerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-beer',
            template: __webpack_require__("./src/app/components/edit-beer/edit-beer.component.html"),
            styles: [__webpack_require__("./src/app/components/edit-beer/edit-beer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_beer_service__["a" /* BeerService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], EditBeerComponent);
    return EditBeerComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".example-icon {\n    padding: 0 14px;\n}\n\n.fill-remaining-space-d {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n\nmat-toolbar ul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    list-style: none;\n}\n\n.mobile-btn {\n    margin-left: auto;\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <div class=\"container\">\n        <button mat-button routerLink=\"/\"><h2>BeerLog</h2>\n        </button>\n        <!-- This fills the remaining space of the current row -->\n        <span class=\"fill-remaining-space\"></span>\n        <div fxLayout=\"row\" fxShow=\"false\" fxShow.gt-sm>\n            <button mat-button routerLink=\"/\">Domov</button>\n            <button mat-button routerLink=\"/beer/edit\" disabled>Objemy vody</button>\n        </div>\n        <span class=\"fill-remaining-space-d\"></span>\n        <div fxLayout=\"row\" fxShow=\"false\" fxShow.gt-sm>\n            <button mat-button routerLink=\"/\">Logout</button>\n            <button mat-button routerLink=\"/beer/edit\">Register</button>\n        </div>\n       <div class=\"mobile-btn\">\n            <button mat-button [mat-menu-trigger-for]=\"menu\" fxHide=\"false\" fxHide.gt-sm>\n                <mat-icon>menu</mat-icon>\n            </button>\n       </div>\n    </div>\n</mat-toolbar>\n<mat-menu x-position=\"before\" #menu=\"matMenu\">\n    <button mat-menu-item routerLink=\"/products\">Products</button>\n    <button mat-menu-item routerLink=\"/dashboard\">Dashboard</button>\n    <!--<button mat-menu-item>Help</button>-->\n</mat-menu>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ".button-cover {\n    position: fixed;\n    bottom: 10%;\n    right: 17%;\n}\n\napp-sidebar .mat-fab .mat-button-wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 0;\n    height: 100%;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.button-cover i {\n    font-size: 28px;\n}"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"button-cover\">\n  <a mat-fab routerLink=\"/beer/add\" color=\"primary\"><i class=\"material-icons\">add</i></a>\n</div>"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDividerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatPaginatorModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatTabsModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDividerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatPaginatorModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatTabsModule */],]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/beer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeerService = /** @class */ (function () {
    function BeerService(afs) {
        this.afs = afs;
        this.beersCollection = this.afs.collection('brewNotes', function (ref) { return ref.orderBy('nazovPiva', 'asc'); });
    }
    BeerService.prototype.getBeers = function () {
        //Get clients with the id
        this.beers = this.beersCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        });
        return this.beers;
    };
    BeerService.prototype.newBeer = function (beer) {
        this.beersCollection.add(beer);
    };
    BeerService.prototype.getBeer = function (id) {
        this.beerDoc = this.afs.doc("brewNotes/" + id);
        this.beer = this.beerDoc.snapshotChanges().map(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        });
        return this.beer;
    };
    BeerService.prototype.updateBeer = function (beer) {
        this.beerDoc = this.afs.doc("brewNotes/" + beer.id);
        this.beerDoc.update(beer);
    };
    BeerService.prototype.deleteBeer = function (beer) {
        this.beerDoc = this.afs.doc("brewNotes/" + beer.id);
        this.beerDoc.delete();
    };
    BeerService.prototype.predok = function (nalev, mSladu) {
        var multiplier = (mSladu * 1.3);
        return nalev - multiplier;
    };
    BeerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], BeerService);
    return BeerService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCishaJ6nxZVpDcD06xE8SdyrU_S8cj1yE",
        authDomain: "beerlog-aafbc.firebaseapp.com",
        databaseURL: "https://beerlog-aafbc.firebaseio.com",
        projectId: "beerlog-aafbc",
        storageBucket: "beerlog-aafbc.appspot.com",
        messagingSenderId: "931559534745"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map