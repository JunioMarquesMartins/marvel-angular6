(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'marvel-angular6';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _service_marvel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/marvel.service */ "./src/app/service/marvel.service.ts");
/* harmony import */ var _service_data_not_image_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/data-not-image.service */ "./src/app/service/data-not-image.service.ts");
/* harmony import */ var _component_characters_characters_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/characters/characters.component */ "./src/app/component/characters/characters.component.ts");
/* harmony import */ var _component_shared_marvel_list_marvel_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/shared/marvel-list/marvel-list.component */ "./src/app/component/shared/marvel-list/marvel-list.component.ts");
/* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/navbar/navbar.component */ "./src/app/component/navbar/navbar.component.ts");
/* harmony import */ var _component_character_info_character_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/character-info/character-info.component */ "./src/app/component/character-info/character-info.component.ts");
/* harmony import */ var _component_shared_button_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/shared/button/button.component */ "./src/app/component/shared/button/button.component.ts");
/* harmony import */ var _component_comics_comics_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/comics/comics.component */ "./src/app/component/comics/comics.component.ts");
/* harmony import */ var _component_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/shared/loading/loading.component */ "./src/app/component/shared/loading/loading.component.ts");
/* harmony import */ var _component_comic_info_comic_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/comic-info/comic-info.component */ "./src/app/component/comic-info/comic-info.component.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/footer/footer.component */ "./src/app/component/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Importar Rutas

// Services


// Components










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _component_characters_characters_component__WEBPACK_IMPORTED_MODULE_10__["CharactersComponent"],
                _component_shared_marvel_list_marvel_list_component__WEBPACK_IMPORTED_MODULE_11__["MarvelListComponent"],
                _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _component_character_info_character_info_component__WEBPACK_IMPORTED_MODULE_13__["CharacterInfoComponent"],
                _component_shared_button_button_component__WEBPACK_IMPORTED_MODULE_14__["ButtonComponent"],
                _component_comics_comics_component__WEBPACK_IMPORTED_MODULE_15__["ComicsComponent"],
                _component_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"],
                _component_comic_info_comic_info_component__WEBPACK_IMPORTED_MODULE_17__["ComicInfoComponent"],
                _component_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__["InfiniteScrollModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_7__["ROUTES"], { useHash: true })
            ],
            providers: [
                _service_marvel_service__WEBPACK_IMPORTED_MODULE_8__["MarvelService"],
                _service_data_not_image_service__WEBPACK_IMPORTED_MODULE_9__["DataNotImageService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_characters_characters_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/characters/characters.component */ "./src/app/component/characters/characters.component.ts");
/* harmony import */ var _component_character_info_character_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/character-info/character-info.component */ "./src/app/component/character-info/character-info.component.ts");
/* harmony import */ var _component_comics_comics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/comics/comics.component */ "./src/app/component/comics/comics.component.ts");
/* harmony import */ var _component_comic_info_comic_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/comic-info/comic-info.component */ "./src/app/component/comic-info/comic-info.component.ts");





var ROUTES = [
    { path: 'home', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'characters', component: _component_characters_characters_component__WEBPACK_IMPORTED_MODULE_1__["CharactersComponent"] },
    { path: 'character-info/:id', component: _component_character_info_character_info_component__WEBPACK_IMPORTED_MODULE_2__["CharacterInfoComponent"] },
    { path: 'comics', component: _component_comics_comics_component__WEBPACK_IMPORTED_MODULE_3__["ComicsComponent"] },
    { path: 'comic-info/:id', component: _component_comic_info_comic_info_component__WEBPACK_IMPORTED_MODULE_4__["ComicInfoComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];


/***/ }),

/***/ "./src/app/component/character-info/character-info.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/component/character-info/character-info.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/character-info/character-info.component.html":
/*!************************************************************************!*\
  !*** ./src/app/component/character-info/character-info.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Todo change to new component -->\n<div class=\"wrapper\">\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <img class=\"card-img\" [src]=\"dataImage\" alt=\"{{ characterData.title }}\">\n        </div>\n        <div class=\"col-md-8\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">{{ characterData.name }}</h5>\n                <p class=\"card-text\">{{ characterData.description }}</p>\n                <p class=\"card-text\"></p>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/component/character-info/character-info.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/component/character-info/character-info.component.ts ***!
  \**********************************************************************/
/*! exports provided: CharacterInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterInfoComponent", function() { return CharacterInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_marvel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/marvel.service */ "./src/app/service/marvel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CharacterInfoComponent = /** @class */ (function () {
    function CharacterInfoComponent(route, marvel) {
        var _this = this;
        this.route = route;
        this.marvel = marvel;
        this.characterData = [];
        this.id = this.route.snapshot.paramMap.get('id');
        this.marvel.getCharacterInfo(this.id).subscribe(function (data) {
            var dataResults = data.data.results[0];
            _this.characterData = dataResults;
            (dataResults && dataResults.thumbnail) ? _this.dataImage = dataResults.thumbnail.path + "." + dataResults.thumbnail.extension : '';
        });
    }
    CharacterInfoComponent.prototype.ngOnInit = function () {
    };
    CharacterInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-character-info',
            template: __webpack_require__(/*! ./character-info.component.html */ "./src/app/component/character-info/character-info.component.html"),
            styles: [__webpack_require__(/*! ./character-info.component.css */ "./src/app/component/character-info/character-info.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_marvel_service__WEBPACK_IMPORTED_MODULE_2__["MarvelService"]])
    ], CharacterInfoComponent);
    return CharacterInfoComponent;
}());



/***/ }),

/***/ "./src/app/component/characters/characters.component.css":
/*!***************************************************************!*\
  !*** ./src/app/component/characters/characters.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/characters/characters.component.html":
/*!****************************************************************!*\
  !*** ./src/app/component/characters/characters.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"isLoading\"></app-loading>\n<div class=\"wrapper\">\n    <app-button\n        [totalList]=\"totalView\"\n        [textInfo]=\"textInfoBar\"\n        (toggleEnable)=\"toggleEnabledCharacters($event)\">\n    </app-button>\n    <app-marvel-list [dataList]=\"charactersList\" [pageLink]=\"characterLink\"></app-marvel-list>\n    <!-- TODO export Paginator to component -->\n    <div class=\"text-center\">\n        <ul>\n            <li style=\"list-style: none;\"\n                *ngFor=\"let item of charactersList | paginate: { itemsPerPage: count, currentPage: currentPage, totalItems: total-2}\"> \n            </li>\n        </ul>\n        <pagination-controls maxSize=\"12\" (pageChange)=\"pageChange($event)\"></pagination-controls>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/component/characters/characters.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/characters/characters.component.ts ***!
  \**************************************************************/
/*! exports provided: CharactersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersComponent", function() { return CharactersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_marvel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/marvel.service */ "./src/app/service/marvel.service.ts");
/* harmony import */ var _service_data_not_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/data-not-image.service */ "./src/app/service/data-not-image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CharactersComponent = /** @class */ (function () {
    function CharactersComponent(marvel, dataNotImage) {
        this.marvel = marvel;
        this.dataNotImage = dataNotImage;
        this.charactersList = [];
        this.characterLink = 'character-info';
        this.offset = 0;
        this.count = 20;
        this.currentPage = 1;
        this.isEnabled = true;
        this.isLoading = true;
        this.textInfoBar = {
            infoTitle: 'Hide Characters without images',
            totalTitle: 'Total Characters'
        };
        this.getCharacters(this.offset, this.count);
    }
    CharactersComponent.prototype.pageChange = function (event) {
        this.currentPage = event;
        var offset = this.currentPage * 10;
        this.getCharacters(offset, this.count);
    };
    CharactersComponent.prototype.getCharacters = function (offset, count) {
        var _this = this;
        this.isLoading = true;
        this.marvel.getCharacters(offset, count).subscribe(function (data) {
            _this.isLoading = false;
            _this.charactersList = data.data.results;
            _this.total = data.data.total * 2;
            _this.totalView = data.data.total;
            _this.isEnabled ? _this.charactersList = _this.dataNotImage.deleteNotImageFound(_this.charactersList) : console.log('false');
        });
    };
    CharactersComponent.prototype.toggleEnabledCharacters = function (event) {
        this.isEnabled = !this.isEnabled;
        this.pageChange(this.currentPage);
    };
    CharactersComponent.prototype.ngOnInit = function () {
    };
    CharactersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-characters',
            template: __webpack_require__(/*! ./characters.component.html */ "./src/app/component/characters/characters.component.html"),
            styles: [__webpack_require__(/*! ./characters.component.css */ "./src/app/component/characters/characters.component.css")]
        }),
        __metadata("design:paramtypes", [_service_marvel_service__WEBPACK_IMPORTED_MODULE_1__["MarvelService"], _service_data_not_image_service__WEBPACK_IMPORTED_MODULE_2__["DataNotImageService"]])
    ], CharactersComponent);
    return CharactersComponent;
}());



/***/ }),

/***/ "./src/app/component/comic-info/comic-info.component.css":
/*!***************************************************************!*\
  !*** ./src/app/component/comic-info/comic-info.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/comic-info/comic-info.component.html":
/*!****************************************************************!*\
  !*** ./src/app/component/comic-info/comic-info.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Todo change to new component -->\n<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n        <img class=\"card-img\" [src]=\"dataImage\" alt=\"{{ comicData.title }}\">\n    </div>\n    <div class=\"col-md-8\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">{{ comicData.title }}</h5>\n            <p class=\"card-text\">{{ comicData.description }}</p>\n            <p class=\"card-text\">Last updated 3 mins ago</p>\n          </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/component/comic-info/comic-info.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/comic-info/comic-info.component.ts ***!
  \**************************************************************/
/*! exports provided: ComicInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicInfoComponent", function() { return ComicInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_marvel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/marvel.service */ "./src/app/service/marvel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComicInfoComponent = /** @class */ (function () {
    function ComicInfoComponent(route, marvel) {
        var _this = this;
        this.route = route;
        this.marvel = marvel;
        this.comicData = [];
        this.id = this.route.snapshot.paramMap.get('id');
        this.marvel.getComicInfo(this.id).subscribe(function (data) {
            var dataResults = data.data.results[0];
            _this.comicData = dataResults;
            (dataResults && dataResults.thumbnail) ? _this.dataImage = dataResults.thumbnail.path + "." + dataResults.thumbnail.extension : '';
            console.log(_this.comicData);
        });
    }
    ComicInfoComponent.prototype.ngOnInit = function () {
    };
    ComicInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comic-info',
            template: __webpack_require__(/*! ./comic-info.component.html */ "./src/app/component/comic-info/comic-info.component.html"),
            styles: [__webpack_require__(/*! ./comic-info.component.css */ "./src/app/component/comic-info/comic-info.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_marvel_service__WEBPACK_IMPORTED_MODULE_2__["MarvelService"]])
    ], ComicInfoComponent);
    return ComicInfoComponent;
}());



/***/ }),

/***/ "./src/app/component/comics/comics.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/comics/comics.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/comics/comics.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/comics/comics.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"isLoading\"></app-loading>\n<div class=\"wrapper\">\n  <app-button\n    [totalList]=\"totalView\"\n    [textInfo]=\"textInfoBar\"\n    (toggleEnable)=\"toggleEnabledComics($event)\">\n  </app-button>\n  <app-marvel-list [dataList]=\"comicsList\" [pageLink]=\"comicLink\"></app-marvel-list>\n  <!-- TODO export Paginator to component -->\n  <div class=\"text-center\">\n      <ul>\n          <li style=\"list-style: none;\"\n              *ngFor=\"let item of comicsList | paginate: { itemsPerPage: count, currentPage: currentPage, totalItems: total-2}\"> \n          </li>\n      </ul>\n      <pagination-controls maxSize=\"12\" (pageChange)=\"pageChange($event)\"></pagination-controls>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/component/comics/comics.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/comics/comics.component.ts ***!
  \******************************************************/
/*! exports provided: ComicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicsComponent", function() { return ComicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_marvel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/marvel.service */ "./src/app/service/marvel.service.ts");
/* harmony import */ var _service_data_not_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/data-not-image.service */ "./src/app/service/data-not-image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComicsComponent = /** @class */ (function () {
    function ComicsComponent(marvel, dataNotImage) {
        this.marvel = marvel;
        this.dataNotImage = dataNotImage;
        this.comicsList = [];
        this.comicLink = 'comic-info';
        this.offset = 0;
        this.count = 20;
        this.currentPage = 1;
        this.imagesIsEnabled = true;
        this.isLoading = true;
        this.textInfoBar = {
            infoTitle: 'Hide Comics without images',
            totalTitle: 'Total Comics'
        };
        this.getComics(this.offset, this.count);
    }
    ComicsComponent.prototype.pageChange = function (event) {
        this.currentPage = event;
        var offset = this.currentPage * 10;
        this.getComics(offset, this.count);
    };
    ComicsComponent.prototype.getComics = function (offset, count) {
        var _this = this;
        this.isLoading = true;
        this.marvel.getComics(offset, count).subscribe(function (data) {
            _this.isLoading = false;
            _this.comicsList = data.data.results;
            _this.total = data.data.total * 2;
            _this.totalView = data.data.total;
            _this.imagesIsEnabled ? _this.comicsList = _this.dataNotImage.deleteNotImageFound(_this.comicsList) : console.log('false');
        });
    };
    ComicsComponent.prototype.toggleEnabledComics = function (event) {
        this.imagesIsEnabled = !this.imagesIsEnabled;
        this.pageChange(this.currentPage);
    };
    ComicsComponent.prototype.ngOnInit = function () {
    };
    ComicsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comics',
            template: __webpack_require__(/*! ./comics.component.html */ "./src/app/component/comics/comics.component.html"),
            styles: [__webpack_require__(/*! ./comics.component.css */ "./src/app/component/comics/comics.component.css")]
        }),
        __metadata("design:paramtypes", [_service_marvel_service__WEBPACK_IMPORTED_MODULE_1__["MarvelService"], _service_data_not_image_service__WEBPACK_IMPORTED_MODULE_2__["DataNotImageService"]])
    ], ComicsComponent);
    return ComicsComponent;
}());



/***/ }),

/***/ "./src/app/component/footer/footer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/footer/footer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/footer/footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/footer/footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-dark bg-dark p-4\">\n  <div class=\"row\">\n      <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"http://juniomarques.com\" target=\"_blank\">Personal web: juniomarques.com</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"https://github.com/JunioMarquesMartins/marvel-angular6\" target=\"_black\">GitHub: Marvel Angular6</a>\n          </li>\n        </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/component/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/component/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/component/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/component/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-container\">\n  <div class=\"container\">\n      <div class=\"row m-4 pt-4\">\n          <div class=\"col-md-6 mt-4\" routerLink=\"/characters\">\n            <div class=\"m-4 bg-white p-3 home-menu\">\n                <div class=\"text-menu\">\n                  <h1>Characters</h1>\n                </div>\n                <img width=\"100%\" src=\"../../../assets/images/marvel-characters.jpg\" alt=\"marvel-characters\">\n            </div>\n          </div>\n          <div class=\"col-md-6 mt-4\" routerLink=\"/comics\">\n            <div class=\"m-4 bg-white p-3 home-menu\">\n                <div class=\"text-menu\">\n                    <h1>Comics</h1>\n                  </div>\n                <img width=\"100%\" src=\"../../../assets/images/marvel-comics.jpg\" alt=\"marvel-comics\">\n            </div>\n          </div>\n        </div>\n  </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/component/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/component/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/component/navbar/navbar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/navbar/navbar.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand\" routerLink=\"/home\">\n    <img width=\"110px\" src=\"../../../assets/images/logo-marvel.png\" alt=\"logo-marvel\">\n  </a>\n  <button class=\"navbar-toggler\"\n          type=\"button\"\n          data-toggle=\"collapse\"\n          data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\"\n          aria-expanded=\"false\"\n          aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/characters\">Characters <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/comics\">Comics</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-danger my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/component/navbar/navbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/component/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/component/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/component/shared/button/button.component.css":
/*!**************************************************************!*\
  !*** ./src/app/component/shared/button/button.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/shared/button/button.component.html":
/*!***************************************************************!*\
  !*** ./src/app/component/shared/button/button.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center mt-2 mb-4 pb-2 info-bar\">\n    <div class=\"col-sm-5\">\n      <span>{{ textInfo.infoTitle }}</span>\n      <button\n        type=\"button\"\n        class=\"btn btn-toggle active\"\n        data-toggle=\"button\"\n        aria-pressed=\"true\"\n        (click)=\"toggleEnableEmit($event)\"\n        autocomplete=\"off\">\n        <div class=\"handle\"></div>\n      </button>\n    </div>\n    <div class=\"col-sm-7\">\n      {{ textInfo.totalTitle }} \n      <span class=\"badge badge-dark\">{{ totalList | number }}</span>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/component/shared/button/button.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/component/shared/button/button.component.ts ***!
  \*************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.toggleEnable = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ButtonComponent.prototype.toggleEnableEmit = function (event) {
        this.toggleEnable.emit(event);
    };
    ButtonComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ButtonComponent.prototype, "totalList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ButtonComponent.prototype, "textInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ButtonComponent.prototype, "toggleEnable", void 0);
    ButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/component/shared/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.css */ "./src/app/component/shared/button/button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/component/shared/loading/loading.component.css":
/*!****************************************************************!*\
  !*** ./src/app/component/shared/loading/loading.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/shared/loading/loading.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/component/shared/loading/loading.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center animated fadeIn loading\">\n  <div class=\"col\">\n      <i class=\"fa fa-sync fa-spin fa-5x\"></i>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/component/shared/loading/loading.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/component/shared/loading/loading.component.ts ***!
  \***************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/component/shared/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/component/shared/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/component/shared/marvel-list/marvel-list.component.css":
/*!************************************************************************!*\
  !*** ./src/app/component/shared/marvel-list/marvel-list.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/shared/marvel-list/marvel-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/component/shared/marvel-list/marvel-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-columns\">\n    <div class=\"card bg-whitetext-white\" *ngFor=\"let list of dataList\" (click)=\"getMoreInfo(pageLink, list.id)\">\n        <img class=\"card-img-top\" src=\"{{list.thumbnail.path+'.'+list.thumbnail.extension}}\" alt=\"image-{{list.name}}\">\n        <div class=\"card-body\">\n            <h5 *ngIf=\"list.name\" class=\"card-title\">{{ list.name }}</h5>\n            <h5 *ngIf=\"list.title\" class=\"card-title\">{{ list.title }}</h5>\n            <!-- <p *ngIf=\"list.name\" class=\"card-text\">{{ list.description }}</p> -->\n            <p class=\"card-text clearfix\">\n                <small class=\"text-muted\">© 2018 MARVEL</small>\n                <a href=\"#\" class=\"btn btn-primary float-right\">More Info</a>\n            </p>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/component/shared/marvel-list/marvel-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/component/shared/marvel-list/marvel-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: MarvelListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarvelListComponent", function() { return MarvelListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MarvelListComponent = /** @class */ (function () {
    function MarvelListComponent(router) {
        this.router = router;
        this.dataList = [];
    }
    MarvelListComponent.prototype.getMoreInfo = function (pageLink, id) {
        this.router.navigate([pageLink, id]);
    };
    MarvelListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MarvelListComponent.prototype, "dataList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MarvelListComponent.prototype, "pageLink", void 0);
    MarvelListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-marvel-list',
            template: __webpack_require__(/*! ./marvel-list.component.html */ "./src/app/component/shared/marvel-list/marvel-list.component.html"),
            styles: [__webpack_require__(/*! ./marvel-list.component.css */ "./src/app/component/shared/marvel-list/marvel-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MarvelListComponent);
    return MarvelListComponent;
}());



/***/ }),

/***/ "./src/app/service/data-not-image.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/data-not-image.service.ts ***!
  \***************************************************/
/*! exports provided: DataNotImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataNotImageService", function() { return DataNotImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataNotImageService = /** @class */ (function () {
    function DataNotImageService() {
    }
    DataNotImageService.prototype.deleteNotImageFound = function (dataList) {
        for (var i = 0; i <= dataList.length - 1; i++) {
            var url = dataList[i].thumbnail.path;
            var urlArray = url.split('/');
            var urlPop = urlArray.pop();
            if (urlPop === 'image_not_available') {
                dataList.splice(i, 1);
                i--;
            }
        }
        return dataList;
    };
    DataNotImageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataNotImageService);
    return DataNotImageService;
}());



/***/ }),

/***/ "./src/app/service/marvel.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/marvel.service.ts ***!
  \*******************************************/
/*! exports provided: MarvelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarvelService", function() { return MarvelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MarvelService = /** @class */ (function () {
    function MarvelService(http) {
        this.http = http;
    }
    // Characters GET
    MarvelService.prototype.getCharacters = function (offsetNumber, limitNumber) {
        var charactersUrl = "https://gateway.marvel.com/v1/public/characters?apikey=71827f4b4a448fb6c993a2ff4d38c198&offset=" + offsetNumber + "&limit=" + limitNumber;
        return this.http.get(charactersUrl);
    };
    MarvelService.prototype.getCharacterInfo = function (id) {
        var characterInfo = "https://gateway.marvel.com/v1/public/characters?apikey=71827f4b4a448fb6c993a2ff4d38c198&id=" + id;
        return this.http.get(characterInfo);
    };
    // Comics GET
    MarvelService.prototype.getComics = function (offsetNumber, limitNumber) {
        var comimcsUrl = "https://gateway.marvel.com/v1/public/comics?apikey=71827f4b4a448fb6c993a2ff4d38c198&offset=" + offsetNumber + "&limit=" + limitNumber;
        return this.http.get(comimcsUrl);
    };
    MarvelService.prototype.getComicInfo = function (id) {
        var comicInfo = "https://gateway.marvel.com/v1/public/comics?apikey=71827f4b4a448fb6c993a2ff4d38c198&id=" + id;
        return this.http.get(comicInfo);
    };
    MarvelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MarvelService);
    return MarvelService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mi-equipo/marvel-angular6/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map