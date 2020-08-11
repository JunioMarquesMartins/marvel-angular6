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

module.exports = "\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _service_marvel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/marvel.service */ "./src/app/service/marvel.service.ts");
/* harmony import */ var _service_data_not_image_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/data-not-image.service */ "./src/app/service/data-not-image.service.ts");
/* harmony import */ var _component_characters_characters_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/characters/characters.component */ "./src/app/component/characters/characters.component.ts");
/* harmony import */ var _component_shared_marvel_list_marvel_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/shared/marvel-list/marvel-list.component */ "./src/app/component/shared/marvel-list/marvel-list.component.ts");
/* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/navbar/navbar.component */ "./src/app/component/navbar/navbar.component.ts");
/* harmony import */ var _component_character_info_character_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/character-info/character-info.component */ "./src/app/component/character-info/character-info.component.ts");
/* harmony import */ var _component_shared_button_button_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/shared/button/button.component */ "./src/app/component/shared/button/button.component.ts");
/* harmony import */ var _component_comics_comics_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/comics/comics.component */ "./src/app/component/comics/comics.component.ts");
/* harmony import */ var _component_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/shared/loading/loading.component */ "./src/app/component/shared/loading/loading.component.ts");
/* harmony import */ var _component_comic_info_comic_info_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/comic-info/comic-info.component */ "./src/app/component/comic-info/comic-info.component.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/footer/footer.component */ "./src/app/component/footer/footer.component.ts");
/* harmony import */ var _component_search_search_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/search/search.component */ "./src/app/component/search/search.component.ts");
/* harmony import */ var _component_shared_marvel_info_marvel_info_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./component/shared/marvel-info/marvel-info.component */ "./src/app/component/shared/marvel-info/marvel-info.component.ts");
/* harmony import */ var _component_search_characters_search_characters_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./component/search-characters/search-characters.component */ "./src/app/component/search-characters/search-characters.component.ts");
/* harmony import */ var _component_shared_links_marvel_links_marvel_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./component/shared/links-marvel/links-marvel.component */ "./src/app/component/shared/links-marvel/links-marvel.component.ts");
/* harmony import */ var _component_shared_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./component/shared/dropdown/dropdown.component */ "./src/app/component/shared/dropdown/dropdown.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _component_characters_characters_component__WEBPACK_IMPORTED_MODULE_13__["CharactersComponent"],
                _component_shared_marvel_list_marvel_list_component__WEBPACK_IMPORTED_MODULE_14__["MarvelListComponent"],
                _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
                _component_character_info_character_info_component__WEBPACK_IMPORTED_MODULE_16__["CharacterInfoComponent"],
                _component_shared_button_button_component__WEBPACK_IMPORTED_MODULE_17__["ButtonComponent"],
                _component_comics_comics_component__WEBPACK_IMPORTED_MODULE_18__["ComicsComponent"],
                _component_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__["LoadingComponent"],
                _component_comic_info_comic_info_component__WEBPACK_IMPORTED_MODULE_20__["ComicInfoComponent"],
                _component_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"],
                _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"],
                _component_search_search_component__WEBPACK_IMPORTED_MODULE_23__["SearchComponent"],
                _component_shared_marvel_info_marvel_info_component__WEBPACK_IMPORTED_MODULE_24__["MarvelInfoComponent"],
                _component_search_characters_search_characters_component__WEBPACK_IMPORTED_MODULE_25__["SearchCharactersComponent"],
                _component_shared_links_marvel_links_marvel_component__WEBPACK_IMPORTED_MODULE_26__["LinksMarvelComponent"],
                _component_shared_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_27__["DropdownComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_10__["ROUTES"], { useHash: true })
            ],
            providers: [
                _service_marvel_service__WEBPACK_IMPORTED_MODULE_11__["MarvelService"],
                _service_data_not_image_service__WEBPACK_IMPORTED_MODULE_12__["DataNotImageService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
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
/* harmony import */ var _component_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/search/search.component */ "./src/app/component/search/search.component.ts");
/* harmony import */ var _component_search_characters_search_characters_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/search-characters/search-characters.component */ "./src/app/component/search-characters/search-characters.component.ts");







var ROUTES = [
    { path: 'comics', component: _component_comics_comics_component__WEBPACK_IMPORTED_MODULE_3__["ComicsComponent"] },
    { path: 'home', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'characters', component: _component_characters_characters_component__WEBPACK_IMPORTED_MODULE_1__["CharactersComponent"] },
    { path: 'search', component: _component_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"] },
    { path: 'search-characters', component: _component_search_characters_search_characters_component__WEBPACK_IMPORTED_MODULE_6__["SearchCharactersComponent"] },
    { path: 'character-info/:id', component: _component_character_info_character_info_component__WEBPACK_IMPORTED_MODULE_2__["CharacterInfoComponent"] },
    { path: 'comic-info/:id', component: _component_comic_info_comic_info_component__WEBPACK_IMPORTED_MODULE_4__["ComicInfoComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'comics' },
    { path: '', pathMatch: 'full', redirectTo: 'comics' }
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

module.exports = "<app-navbar></app-navbar>\n<!-- Todo change to new component -->\n<app-loading *ngIf=\"isLoading\"></app-loading>\n<div class=\"wrapper info-container border-bottom pb-4\">\n    <div class=\"row\">\n        <div class=\"col-md-3 border-right\">\n            <img class=\"card-img\" [src]=\"dataImage\" alt=\"{{ characterData.title }}\">\n            <!-- TODO move links to component app-links -->\n            <h3 *ngIf=\"characterData[0] && characterData[0].name\" class=\"card-title\">{{ characterData[0].name }}</h3>\n            <p>\n                <app-links-marvel [link]='characterData[0]' [isInfoPage]='true'></app-links-marvel>\n            </p>\n            <p *ngIf=\"characterData[0] && characterData[0].description\" class=\"card-text\">{{ characterData[0].description }}</p>\n        </div>\n        <div class=\"col-md-3\">\n            <div>\n                <div class=\"row\">\n                    <div class=\"col-md-12 mt-4\" *ngIf=\"characterData[0] && characterData[0].comics.items\">\n                        <div class=\"clearfix mb-2\">\n                            <h5 class=\"float-left\">Top Comics</h5>\n                            <div class=\"float-right\">\n                                <button (click)=\"getComicsCharacter()\"\n                                        class=\"btn btn-outline-danger btn-sm\">\n                                    <small>View all Comics {{ characterData[0].name }}</small>\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"box-list\">\n                            <div class=\"list-group\">\n                                <a href=\"javascript:void(0)\"\n                                    *ngFor=\"let comic of characterData[0].comics.items\"\n                                    (click)=\"viewCharacterComic(comic.resourceURI)\"\n                                    class=\"list-group-item list-group-item-action\">\n                                    {{ comic.name }}\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 mt-4\" *ngIf=\"characterData[0] && characterData[0].series.items\">\n                        <div class=\"clearfix mb-2\">\n                            <h5 class=\"float-left\">Top series</h5>\n                            <div class=\"float-right\">\n                                <button (click)=\"getSeriesCharacter()\"\n                                        class=\"btn btn-outline-danger btn-sm\">\n                                    <small>View all Series {{ characterData[0].name }}</small>\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"box-list\">\n                            <div class=\"list-group\">\n                                <a href=\"javascript:void(0)\"\n                                    *ngFor=\"let serie of characterData[0].series.items\"\n                                    (click)=\"viewCharacterSerie(serie.resourceURI)\"\n                                    class=\"list-group-item list-group-item-action\">{{ serie.name  }}</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div id=\"offsetScroll\" class=\"pt-4 pb-4\">\n                <app-marvel-info [dataInfo]=\"dataInfo\" ></app-marvel-info>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"wrapper\" id=\"comics-scroll\">\n    <div *ngIf=\"dataInfoList.length > 0\">\n            <div>\n                <h3 class=\"card-title\">{{ titleDataInfo[0] }} {{ characterData[0].name }}</h3>\n            </div>\n            <app-marvel-list [dataList]=\"dataInfoList\" [pageLink]=\"characterLink\"></app-marvel-list>\n    </div>\n</div>\n\n<app-footer [links]='linksCharacter'></app-footer>"

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
        this.dataInfo = [];
        this.dataInfoList = [];
        this.titleDataInfo = [];
        this.characterLink = 'character-info';
        this.linksCharacter = {};
        this.isLoading = true;
        this.id = this.route.snapshot.paramMap.get('id');
        this.marvel.getCharacterInfo(this.id).subscribe(function (data) {
            _this.isLoading = false;
            var dataResults = data.data.results;
            _this.characterData = dataResults;
            if (dataResults && dataResults[0].thumbnail) {
                _this.dataImage = dataResults[0].thumbnail.path + "." + dataResults[0].thumbnail.extension;
            }
            _this.onActivate();
        });
    }
    CharacterInfoComponent.prototype.getComicsCharacter = function () {
        var _this = this;
        var id = this.id;
        this.isLoading = true;
        this.titleDataInfo = [];
        this.marvel.getCurrentComicsCharacter(id).subscribe(function (res) {
            _this.isLoading = false;
            var currentComics = res.data.results;
            _this.dataInfoList = currentComics;
            _this.titleDataInfo.push('Comics with - ');
            _this.scrollerToInfo('comics-scroll');
        });
    };
    CharacterInfoComponent.prototype.getSeriesCharacter = function () {
        var _this = this;
        var id = this.id;
        this.isLoading = true;
        this.titleDataInfo = [];
        this.marvel.getCurrentSeriesCharacter(id).subscribe(function (res) {
            _this.isLoading = false;
            var currentSeries = res.data.results;
            _this.dataInfoList = currentSeries;
            _this.titleDataInfo.push('Series with - ');
            console.log(_this.dataInfoList);
            _this.scrollerToInfo('comics-scroll');
        });
    };
    CharacterInfoComponent.prototype.viewCharacterSerie = function (url) {
        var _this = this;
        this.isLoading = true;
        this.marvel.getCharacterSerie(url).subscribe(function (res) {
            _this.isLoading = false;
            _this.dataInfo = res.data.results[0];
            _this.scrollerToInfo('offsetScroll');
        });
    };
    CharacterInfoComponent.prototype.viewCharacterComic = function (url) {
        var _this = this;
        this.isLoading = true;
        this.marvel.getCharacterComic(url).subscribe(function (res) {
            _this.isLoading = false;
            _this.dataInfo = res.data.results[0];
            _this.scrollerToInfo('offsetScroll');
        });
    };
    CharacterInfoComponent.prototype.scrollerToInfo = function (element) {
        var top = document.getElementById(element);
        setTimeout(function () {
            if (top !== null) {
                top.scrollIntoView();
                top = null;
            }
        }, 300);
    };
    CharacterInfoComponent.prototype.onActivate = function () {
        var scrollToTop = window.setInterval(function () {
            var pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20);
            }
            else {
                window.clearInterval(scrollToTop);
            }
        }, 0);
    };
    CharacterInfoComponent.prototype.ngOnInit = function () {
        this.linksCharacter = {
            character: 'characters',
            comic: 'comics',
            comicHome: 'comics',
            characterHome: 'characters'
        };
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

module.exports = "<app-navbar [detectScrollDown]=\"scrollDownActive\"></app-navbar>\n<app-loading *ngIf=\"isLoading\"></app-loading>\n<div class=\"wrapper\">\n    <app-button\n        [totalList]=\"totalView\"\n        [textInfo]=\"textInfoBar\"\n        [detectScrollDown]=\"scrollDownActive\"\n        (toggleScroll)=\"toggleEnabledScrol($event)\"\n        (toggleEnable)=\"toggleEnabledCharacters($event)\">\n    </app-button>\n    <form routerLink=\"/search-characters\"\n        [ngClass]=\"{ isScrolDown: scrollDownActive }\" class=\"col-md-12 form-inline fieldSearch position-fixed\" novalidate>\n        <input #textSearch\n                class=\"form-control form-control col-md-12\"\n                placeholder=\"Search characters\"\n                aria-label=\"Search\">\n        <a href=\"javascript:void(0)\" class=\"ico-search position-absolute\"><i class=\"fas fa-search\"></i></a>\n    </form>\n    \n    <div class=\"main-container\"\n        infiniteScroll\n        [infiniteScrollDistance]=\"2\"\n        [infiniteScrollUpDistance]=\"1.5\"\n        [infiniteScrollThrottle]=\"50\"\n        (scrolled)=\"onScrollDownCharacters()\">\n        <app-marvel-list [dataList]=\"charactersList\" [pageLink]=\"characterLink\"></app-marvel-list>\n    </div>\n\n    <!-- TODO export Paginator to component -->\n    <div *ngIf=\"!isScroll\" (click)=\"onActivate($event)\" class=\"text-center\">\n        <ul>\n            <li style=\"list-style: none;\"\n                *ngFor=\"let item of charactersList | paginate: { itemsPerPage: count, currentPage: currentPage, totalItems: total-2}\"> \n            </li>\n        </ul>\n        <pagination-controls maxSize=\"12\" (pageChange)=\"pageChange($event)\"></pagination-controls>\n    </div>\n</div>\n<app-dropdown [pagesList]='pagesScrollList'\n    [pagesView]='totalPagesSelected'\n    *ngIf=\"isOpenPages\"\n    (changePage)=\"getCharacters($event, 10, false); updateDataComics($event)\">\n</app-dropdown>\n<app-footer [totalResults]='totalView'\n    (togglePages)=\"showHideSelectedPage()\"\n    [(countList)]=\"offsetCharacters\"\n    [links]='linksCharacter'></app-footer>"

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
    function CharactersComponent(marvel, dataNotImage, lc) {
        var _this = this;
        this.marvel = marvel;
        this.dataNotImage = dataNotImage;
        this.charactersList = [];
        this.charactersScroll = [];
        this.pagesScrollList = [];
        this.textInfoBar = {
            infoTitle: 'Hide Characters without images',
            totalTitle: 'Total Characters'
        };
        this.linksCharacter = {};
        this.count = 20;
        this.offsetCharacters = Math.floor(Math.random() * (1400 - 0)) + 0;
        this.offsetCharacters > 0 ? this.getCharacters(this.offsetCharacters, this.count, false) : console.log(0);
        this.characterLink = 'character-info';
        this.currentPage = 1;
        this.isEnabled = true;
        this.isScroll = true;
        this.isLoading = true;
        this.isScrolDown = true;
        this.lastScrollTop = 0;
        this.direction = '';
        this.totalPagesSelected = 10;
        this.onActivate();
        this.calcPagesForScroll();
        window.onscroll = function () {
            var st = window.pageYOffset;
            var dir = '';
            setTimeout(function () {
                (st > _this.lastScrollTop) ?
                    (dir = 'down', _this.scrollDownActive = true) :
                    (dir = 'up', _this.scrollDownActive = false);
                _this.lastScrollTop = st;
                lc.run(function () {
                    _this.direction = dir;
                });
            }, 400);
        };
    }
    CharactersComponent.prototype.onScrollDownCharacters = function () {
        if (this.isScroll) {
            this.offsetCharacters = this.offsetCharacters + 20;
            this.offsetCharacters < this.totalView ? this.getCharacters(this.offsetCharacters, this.count, true) : this.offsetCharacters = 0;
        }
    };
    CharactersComponent.prototype.pageChange = function (event) {
        this.currentPage = event;
        var offsetCharacters = this.currentPage * 10;
        this.getCharacters(offsetCharacters, this.count, false);
    };
    CharactersComponent.prototype.getCharacters = function (offsetCharacters, count, isSelected) {
        var _this = this;
        this.isLoading = true;
        this.marvel.getCharacters(offsetCharacters, count).subscribe(function (data) {
            _this.isLoading = false;
            var results = data.data.results;
            (_this.isScroll && isSelected) ?
                _this.charactersList = _this.charactersList.concat(results) :
                (_this.charactersList = results, _this.onActivate(), _this.offsetCharacters = offsetCharacters);
            _this.total = data.data.total * 2;
            _this.totalView = data.data.total;
            _this.totalMissing = _this.totalView - _this.offsetCharacters;
            _this.isEnabled ? _this.charactersList = _this.dataNotImage.deleteNotImageFound(_this.charactersList) : console.log('false');
        });
    };
    CharactersComponent.prototype.updateDataComics = function (event) {
        this.isOpenPages = false;
        this.offsetCharacters = event;
    };
    CharactersComponent.prototype.toggleEnabledCharacters = function (event) {
        this.isEnabled = !this.isEnabled;
        this.pageChange(this.currentPage);
    };
    CharactersComponent.prototype.toggleEnabledScrol = function () {
        this.isScroll = !this.isScroll;
    };
    CharactersComponent.prototype.onActivate = function () {
        var scrollToTop = window.setInterval(function () {
            var pos = window.pageYOffset;
            (pos > 0) ? window.scrollTo(0, pos - 20) : window.clearInterval(scrollToTop);
        }, 0);
    };
    CharactersComponent.prototype.calcPagesForScroll = function () {
        var numberPages = 1400 / 10;
        for (var i = 0; i <= numberPages; i++) {
            this.pagesScrollList.push(i);
        }
    };
    CharactersComponent.prototype.showHideSelectedPage = function () {
        this.isOpenPages = !this.isOpenPages;
    };
    CharactersComponent.prototype.ngOnInit = function () {
        this.linksCharacter = {
            character: 'Characters',
            comic: '',
            characterHome: '',
            comicHome: ''
        };
    };
    CharactersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-characters',
            template: __webpack_require__(/*! ./characters.component.html */ "./src/app/component/characters/characters.component.html"),
            styles: [__webpack_require__(/*! ./characters.component.css */ "./src/app/component/characters/characters.component.css")]
        }),
        __metadata("design:paramtypes", [_service_marvel_service__WEBPACK_IMPORTED_MODULE_1__["MarvelService"], _service_data_not_image_service__WEBPACK_IMPORTED_MODULE_2__["DataNotImageService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
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

module.exports = "<!-- Todo change to new component -->\n<app-navbar></app-navbar>\n\n<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n        <img class=\"card-img\" [src]=\"dataImage\" alt=\"{{ comicData.title }}\">\n    </div>\n    <div class=\"col-md-8\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">{{ comicData.title }}</h5>\n            <p class=\"card-text\">{{ comicData.description }}</p>\n            <p class=\"card-text\">\n                <app-links-marvel [link]='comicData' [isInfoPage]='true'></app-links-marvel>\n            </p>\n          </div>\n    </div>\n  </div>\n</div>\n\n<app-footer [links]='linksComic'></app-footer>"

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
        this.linksComic = {};
        this.id = this.route.snapshot.paramMap.get('id');
        this.marvel.getComicInfo(this.id).subscribe(function (res) {
            var dataResults = res.data.results[0];
            _this.comicData = dataResults;
            if (dataResults && dataResults.thumbnail) {
                _this.dataImage = dataResults.thumbnail.path + "." + dataResults.thumbnail.extension;
            }
        });
    }
    ComicInfoComponent.prototype.ngOnInit = function () {
        this.linksComic = {
            character: 'characters',
            comic: 'comics',
            comicHome: 'comics',
            characterHome: 'characters'
        };
    };
    ComicInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comic-info',
            template: __webpack_require__(/*! ./comic-info.component.html */ "./src/app/component/comic-info/comic-info.component.html"),
            styles: [__webpack_require__(/*! ./comic-info.component.css */ "./src/app/component/comic-info/comic-info.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _service_marvel_service__WEBPACK_IMPORTED_MODULE_2__["MarvelService"]])
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

module.exports = "<app-navbar [detectScrollDown]=\"scrollDownActive\"></app-navbar>\n<app-loading *ngIf=\"isLoading\"></app-loading>\n<div class=\"wrapper\">\n  <app-button\n    [totalList]=\"totalView\"\n    [textInfo]=\"textInfoBar\"\n    [detectScrollDown]=\"scrollDownActive\"\n    (toggleScroll)=\"toggleEnabledScrol($event)\"\n    (toggleEnable)=\"toggleEnabledComics($event)\">\n  </app-button>\n\n  <form [ngClass]=\"{ isScrolDown: scrollDownActive }\" routerLink=\"/search\" class=\"form-inline fieldSearch position-fixed\" novalidate>\n        <input #textSearch route\n                class=\"form-control form-control col-md-12\"\n                (keyup)=\"initSearch(textSearch.value)\"\n                (click)=\"textSearch.value=''\"\n                placeholder=\"Search comics\"\n                aria-label=\"Search\">\n        <a href=\"javascript:void(0)\" class=\"ico-search position-absolute\"><i class=\"fas fa-search\"></i></a>\n    </form>\n  \n\n  <div class=\"main-container\"\n        infiniteScroll\n        [infiniteScrollDistance]=\"2\"\n        [infiniteScrollUpDistance]=\"1.5\"\n        [infiniteScrollThrottle]=\"50\"\n        (scrolled)=\"onScrollDown()\">\n        <app-marvel-list [dataList]=\"comicsList\" [pageLink]=\"comicLink\"></app-marvel-list>\n  </div>\n  <!-- TODO export Paginator to component -->\n  <div *ngIf=\"!isScroll\" (click)=\"onActivate($event)\" class=\"text-center\">\n      <ul>\n          <li style=\"list-style: none;\"\n              *ngFor=\"let item of comicsList | paginate: { itemsPerPage: count, currentPage: currentPage, totalItems: total-2}\"> \n          </li>\n      </ul>\n      <pagination-controls maxSize=\"12\" (pageChange)=\"pageChange($event)\"></pagination-controls>\n  </div>\n</div>\n<app-dropdown [pagesList]='pagesScrollList'\n    [pagesView]='totalPagesSelected'\n    *ngIf=\"isOpenPages\"\n    (changePage)=\"getComics($event, 10, false); updateDataComics($event)\">\n</app-dropdown>\n<app-footer [totalResults]='totalView'\n    (togglePages)=\"showHideSelectedPage()\"\n    [countList]='offset'\n    [links]='linksComic'></app-footer>"

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
    function ComicsComponent(marvel, dataNotImage, lc) {
        var _this = this;
        this.marvel = marvel;
        this.dataNotImage = dataNotImage;
        this.comicsList = [];
        this.pagesScrollList = [];
        this.linksComic = {};
        this.textInfoBar = {
            infoTitle: 'Hide Comics without images',
            totalTitle: 'Total Comics'
        };
        this.toggleEnabledScrol = function (event) { return _this.isScroll = !_this.isScroll; };
        this.count = 10;
        this.offset = Math.floor(Math.random() * (43000 - 1)) + 1;
        this.offset > 0 ? this.getComics(this.offset, this.count, false) : console.log(0);
        this.comicLink = 'comic-info';
        this.countComics = 0;
        this.currentPage = 1;
        this.imagesIsEnabled = true;
        this.isScroll = true;
        this.isLoading = true;
        this.linksComic = {};
        this.isScrolDown = true;
        this.lastScrollTop = 0;
        this.direction = '';
        this.isOpenPages = false;
        this.totalPagesSelected = 100;
        this.onActivate();
        this.calcPagesForScroll();
        window.onscroll = function () {
            var st = window.pageYOffset;
            var dir = '';
            setTimeout(function () {
                (st > _this.lastScrollTop) ?
                    (dir = 'down', _this.scrollDownActive = true) :
                    (dir = 'up', _this.scrollDownActive = false);
                _this.lastScrollTop = st;
                lc.run(function () {
                    _this.direction = dir;
                });
            }, 400);
        };
    }
    ComicsComponent.prototype.pageChange = function (event) {
        this.currentPage = event;
        var offset = this.currentPage * 10;
        this.getComics(offset, this.count, false);
    };
    ComicsComponent.prototype.getComics = function (offset, count, isSelected) {
        var _this = this;
        this.isLoading = true;
        this.marvel.getComics(offset, count).subscribe(function (data) {
            _this.isLoading = false;
            var results = data.data.results;
            (_this.isScroll && isSelected) ?
                _this.comicsList = _this.comicsList.concat(results) :
                (_this.comicsList = results, _this.onActivate(), _this.offset = offset);
            _this.total = data.data.total * 2;
            _this.totalView = data.data.total;
            _this.totalMissing = _this.totalView - _this.offset;
            _this.imagesIsEnabled ? _this.comicsList = _this.dataNotImage.deleteNotImageFound(_this.comicsList) : console.log('false');
        });
    };
    ComicsComponent.prototype.updateDataComics = function (event) {
        this.isOpenPages = false;
        this.offset = event;
    };
    ComicsComponent.prototype.onScrollDown = function () {
        if (this.isScroll) {
            this.offset = this.offset + 10;
            this.offset < this.totalView ? this.getComics(this.offset, this.count, true) : this.offset = 0;
        }
    };
    ComicsComponent.prototype.toggleEnabledComics = function (event) {
        this.imagesIsEnabled = !this.imagesIsEnabled;
        this.pageChange(this.currentPage);
    };
    // Back scrollTop
    ComicsComponent.prototype.onActivate = function () {
        var scrollToTop = window.setInterval(function () {
            var pos = window.pageYOffset;
            (pos > 0) ? window.scrollTo(0, pos - 20) : window.clearInterval(scrollToTop);
        }, 0);
    };
    ComicsComponent.prototype.calcPagesForScroll = function () {
        var numberPages = 43119 / 100;
        for (var i = 0; i <= numberPages; i++) {
            this.pagesScrollList.push(i);
        }
    };
    ComicsComponent.prototype.showHideSelectedPage = function () {
        this.isOpenPages = !this.isOpenPages;
    };
    ComicsComponent.prototype.ngOnInit = function () {
        this.linksComic = {
            character: '',
            comic: 'Comics',
            characterHome: '',
            comicHome: ''
        };
    };
    ComicsComponent.prototype.ngAfterViewInit = function () {
    };
    ComicsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comics',
            template: __webpack_require__(/*! ./comics.component.html */ "./src/app/component/comics/comics.component.html"),
            styles: [__webpack_require__(/*! ./comics.component.css */ "./src/app/component/comics/comics.component.css")]
        }),
        __metadata("design:paramtypes", [_service_marvel_service__WEBPACK_IMPORTED_MODULE_1__["MarvelService"], _service_data_not_image_service__WEBPACK_IMPORTED_MODULE_2__["DataNotImageService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
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

module.exports = "<div class=\"footer bg-dark p-2 position-fixed\">\n  <div class=\"row\">\n    <div class=\"col-md-12 clearfix\">\n      <button *ngIf=\"totalResults\"\n              type=\"button\"\n              (click)=\"showHideEmmiter()\"\n              class=\"btn  btn-outline-secondary btn-sm btn-count notranslate\">\n              <span *ngIf=\"links && links.comic\"><small>Change</small><strong>{{ countList +'/'+ totalResults}}</strong><small>Total</small></span>\n              <span *ngIf=\"links && links.character\"><small>Change</small><strong>{{ countList +'/'+ totalResults}}</strong><small>Total</small></span>\n      </button>\n      <div class=\"float-right box-links notranslate\">\n          <a *ngIf=\"links && links.comic && !links.characterHome\"\n            [ngClass]=\"{activeLink: links && links.comic && !links.characterHome && links.comicHome}\"\n            class=\"badge badge-light btn-pages position-relative\"\n            routerLink=\"/search\">\n            <i class=\"fas fa-search\"></i>\n          </a>\n          <a *ngIf=\"links && links.character && !links.comicHome\"\n            [ngClass]=\"{activeLink: links && links.character && !links.comicHome && links.characterHome}\"\n            class=\"badge badge-light btn-pages position-relative\"\n            routerLink=\"/search-characters\">\n            <i class=\"fas fa-search\"></i>\n          </a>\n          <a [ngClass]=\"{activeLink: links && links.character && !links.comicHome && !links.characterHome}\"\n            class=\"badge badge-light btn-pages position-relative\"\n            routerLink=\"/characters\">\n            <!-- <span class=\"badge badge-success position-absolute\">Lets Go!</span> -->\n            <!-- <i class=\"fas fa-chevron-left\"></i> Characters -->\n            <img width=\"100%\" src=\"assets/images/ico-characters.png\" alt=\"icon-characters\">\n          </a>\n          <a [ngClass]=\"{activeLink: links && links.comic && !links.characterHome && !links.comicHome}\"\n            class=\"badge badge-light btn-pages\"\n            routerLink=\"/comics\">\n            <!-- <span class=\"badge badge-success position-absolute\">Lets Go!</span> -->\n            <!-- <i class=\"fas fa-chevron-left\"></i> Comics -->\n            <img width=\"100%\" src=\"assets/images/ico-comics.png\" alt=\"ico-comics\">\n          </a>\n          <a class=\"badge badge-light badge-top\" (click)=\"onActivate($event)\"><i class=\"fas fa-angle-up\"></i></a>\n      </div>\n    </div>\n  </div>\n</div>"

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
        this.togglePages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.links = {
            character: '',
            comic: '',
            web: '',
            github: ''
        };
    }
    FooterComponent.prototype.showHideEmmiter = function () {
        this.togglePages.emit(event);
    };
    FooterComponent.prototype.onActivate = function () {
        var scrollToTop = window.setInterval(function () {
            var pos = window.pageYOffset;
            (pos > 0) ? window.scrollTo(0, pos - 20) : window.clearInterval(scrollToTop);
        }, 0);
    };
    FooterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FooterComponent.prototype, "offset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FooterComponent.prototype, "totalList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FooterComponent.prototype, "totalResults", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FooterComponent.prototype, "countList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FooterComponent.prototype, "detectScrollDown", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FooterComponent.prototype, "togglePages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FooterComponent.prototype, "links", void 0);
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

module.exports = "<app-navbar></app-navbar>\n<div class=\"home-container\">\n  <div class=\"container\">\n      <div class=\"row m-4 pt-4\">\n          <div class=\"col-md-6 mt-4\" routerLink=\"/characters\">\n            <div class=\"m-4 bg-white p-3 home-menu\">\n                <div class=\"text-menu\">\n                  <h1>Characters</h1>\n                </div>\n                <img width=\"100%\" src=\"assets/images/marvel-characters.jpg\" alt=\"marvel-characters\">\n            </div>\n          </div>\n          <div class=\"col-md-6 mt-4\" routerLink=\"/comics\">\n            <div class=\"m-4 bg-white p-3 home-menu\">\n                <div class=\"text-menu\">\n                    <h1>Comics</h1>\n                  </div>\n                <img width=\"100%\" src=\"assets/images/marvel-comics.jpg\" alt=\"marvel-comics\">\n            </div>\n          </div>\n        </div>\n  </div>\n</div>"

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

module.exports = "<nav [ngClass]=\"{ isScrolDown : !detectScrollDown }\"\n      class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand\" routerLink=\"/home\">\n    <img width=\"110px\" src=\"assets/images/logo-marvel.png\" alt=\"logo-marvel\">\n  </a>\n  <button class=\"navbar-toggler\"\n          type=\"button\"\n          data-toggle=\"collapse\"\n          data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\"\n          aria-expanded=\"false\"\n          aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/comics\">Comics</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/characters\">Characters <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"http://juniomarques.com\" target=\"_blank\">My Web</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://github.com/JunioMarquesMartins/marvel-angular6\" target=\"_blank\">Git Hub</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

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


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "detectScrollDown", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/component/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/component/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/component/search-characters/search-characters.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/component/search-characters/search-characters.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/search-characters/search-characters.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/component/search-characters/search-characters.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"isLoading\"></app-loading>\n<div id=\"search\" class=\"wrapper\" style=\"margin-top:60px;\">\n    <form style=\"top:0;\" class=\"form-inline fieldSearch position-fixed\" novalidate>\n        <input #textSearch\n                #searchCharacters\n                class=\"form-control form-control col-md-12\"\n                (keyup)=\"filterItems(textSearch.value); textSearch.value.length>0 ? isActiveSearch=true : isActiveSearch=false;\"\n                (keypress)=\"$event.keyCode == 13 ? initSearch(textSearch.value, 10, 0, true, false) : ''\"\n                (click)=\"textSearch.value=''\"\n                placeholder=\"Search characters: deadpool, hulk, spider, daredevil...\"\n                aria-label=\"Search\">\n        <a routerLink=\"/characters\" class=\"ico-search position-absolute\">\n            <i class=\"fas fa-chevron-left\"></i>\n        </a>\n        <a href=\"javascript:void(0)\"\n            class=\"ico-search ico-right position-absolute\"\n            (click)=\"initSearch(textSearch.value, 10, 0, true)\">\n            <i class=\"fas fa-search\"></i>\n        </a>\n        <div *ngIf=\"isActiveSearch\" class=\"position-fixed box-selected\">\n            <div class=\"mb-2\">\n                <h5>Suggestions</h5>\n            </div>\n            <div class=\"box-scroll-area\">\n                <ul class=\"notranslate\">\n                    <li *ngFor=\"let list of resultSelect\"\n                        (click)=\"initSearch(list, 10, 0, true, false, false); textSearch.value=list; isActiveSearch=false\">\n                        <a href=\"javascript:void(0)\">\n                            <img width=\"100%\" src=\"{{ list.image }}\" alt=\"\">\n                            {{ list }}\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </form>\n    <div id=\"scroll-seachCharacter\"\n            *ngIf=\"comicsList.length && !searchHome\"\n            infiniteScroll\n            [infiniteScrollDistance]=\"1.5\"\n            [infiniteScrollThrottle]=\"300\"\n            [infiniteScrollContainer]=\"scroll-seachCharacter\"\n            (scrolled)=\"onScrollDownSearchCharacter()\">\n        <div class=\"main-container\">\n            <app-marvel-list [dataList]=\"comicsList\" [pageLink]=\"characterLink\"></app-marvel-list>\n        </div>\n    </div>\n    <div *ngIf=\"characterHomeList.length && searchHome\">\n        <div class=\"home-search\">\n            <!-- <h2>Search Characters</h2>\n            <hr> -->\n            <!-- <div>\n                <img width=\"100%\" src=\"assets/images/marvel-comics.jpg\" alt=\"\">\n            </div> -->\n            <div class=\"box-thumbnails\">\n                <div class=\"figure\" *ngFor=\"let list of characterHomeList\"\n                    (click)=\"initSearch(list.name, 10, 0, true, false, false); textSearch.value=list.name\">\n                    <img width=\"100%\" src=\"{{list.image}}\" alt=\"image\">\n                </div>\n            </div>\n        </div>\n    </div>     \n    <!-- <div *ngIf=\"!comicsList.length\">\n        <h3>Search Characters</h3>\n        <div>\n            <img width=\"100%\" src=\"assets/images/marvel-characters.jpg\" alt=\"icon-search-characters\">\n        </div>\n    </div> -->\n</div>\n<app-footer [totalResults]='totalCharacters'\n    [countList]='searchOffset'\n    [links]='linksSearch'>\n</app-footer>"

/***/ }),

/***/ "./src/app/component/search-characters/search-characters.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/component/search-characters/search-characters.component.ts ***!
  \****************************************************************************/
/*! exports provided: SearchCharactersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCharactersComponent", function() { return SearchCharactersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_marvel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/marvel.service */ "./src/app/service/marvel.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_data_not_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/data-not-image.service */ "./src/app/service/data-not-image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchCharactersComponent = /** @class */ (function () {
    function SearchCharactersComponent(marvel, Route, dataNotImage) {
        var _this = this;
        this.marvel = marvel;
        this.Route = Route;
        this.dataNotImage = dataNotImage;
        this.dataPeople = [];
        this.comicsList = [];
        this.linksSearch = {};
        this.characterHomeList = [];
        // Array local evite call in API Marvel
        this.dataSelected = [
            'Agents of Atlas', 'Alpha Flight', 'Ant-Man', 'Avengers',
            'Black Bolt', 'Black Panther', 'Blade', 'Ben Reilly',
            'Captain America', 'Captain Marvel',
            'Doctor Strange', 'Deadpool', 'Daredevil',
            'Exiles', 'Elektra',
            'Falcon',
            'Guardians of the Galaxy', 'Ghost Rider',
            'Hawkeye', 'Hulk',
            'Iron Man', 'Iron Fist', 'Iceman',
            'Jessica Jones',
            'karnak', 'kingpin', 'Korvac',
            'Luke Cage', 'Loki',
            'Magneto', 'Marvel', 'Moon Knight',
            'New Mutants', 'Nova', 'Nick Fury',
            'Punisher',
            'Quasar', 'Quicksilver',
            'Runaways', 'Rogue', 'Rocket',
            'Storm', 'Sentry', 'Spider-man',
            'Silver surf', 'Savage Wolverine',
            'Thanos', 'Thor',
            'Valkyrie', 'Venom',
            'X-men', 'X-force', 'X-23'
        ];
        this.resultSelect = [];
        this.cloneDataSelect = [];
        this.filterItems = function (query) {
            _this.isActiveSearch = true;
            _this.cloneDataSelect = _this.dataSelected;
            _this.resultSelect = [];
            _this.cloneDataSelect.filter(function (el, index) {
                (el.toLowerCase().indexOf(query.toLowerCase()) > -1) ?
                    _this.resultSelect.push(el) :
                    _this.resultSelect.splice(index, 1);
            });
        };
        var query = this.dataSelected[Math.floor(Math.random() * (this.dataSelected.length - 0)) + 0];
        this.initSearch(query, 3, 0, true, true);
        this.characterLink = 'character-info';
        this.searchOffset = 0;
        this.count = 10;
        this.isActiveSearch = false;
        this.onActivate();
    }
    SearchCharactersComponent.prototype.initSearch = function (textSearch, count, searchOffset, isKeyup, searchHome) {
        var _this = this;
        this.isKeyup = isKeyup;
        this.currentText = textSearch;
        this.isLoading = true;
        this.marvel.characterSearch(textSearch, count, searchOffset).subscribe(function (data) {
            _this.isLoading = false;
            _this.isKeyup ?
                (_this.comicsList = [], searchOffset = 0, _this.searchOffset = 0, _this.onActivate()) : console.log('no keyup');
            var searchResult = data.data.results;
            _this.totalCharacters = data.data.total;
            _this.totalMissing = _this.totalCharacters - _this.searchOffset;
            _this.comicsList.length <= 0 ? _this.comicsList = searchResult : _this.comicsList = _this.comicsList.concat(searchResult);
            _this.dataNotImage.deleteNotImageFound(_this.comicsList);
            _this.searchHome = searchHome;
            searchHome ? _this.populateCharacterHomeList(searchResult) : console.log('NO');
        });
        setTimeout(function () {
            _this.isActiveSearch = false;
        }, 200);
    };
    SearchCharactersComponent.prototype.populateCharacterHomeList = function (results) {
        var _this = this;
        results.forEach(function (element) {
            var name = element.name;
            var nameSplit = name.split(' ');
            var nameResults = nameSplit[0];
            _this.characterHomeList.push({
                name: nameResults,
                image: element.thumbnail.path + "." + element.thumbnail.extension
            });
        });
    };
    SearchCharactersComponent.prototype.onScrollDownSearchCharacter = function () {
        if (this.comicsList.length > 1) {
            this.searchOffset = this.searchOffset + 10;
            this.searchOffset < this.totalCharacters ?
                this.initSearch(this.currentText, this.count, this.searchOffset, false, false) :
                this.searchOffset = this.totalCharacters;
        }
    };
    SearchCharactersComponent.prototype.onActivate = function () {
        var scrollToTop = window.setInterval(function () {
            var pos = window.pageYOffset;
            (pos > 0) ? window.scrollTo(0, pos - 20) : window.clearInterval(scrollToTop);
        }, 0);
    };
    SearchCharactersComponent.prototype.ngOnInit = function () {
        this.linksSearch = {
            character: 'Character',
            comic: '',
            comicHome: '',
            characterHome: 'Character'
        };
    };
    SearchCharactersComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.inputEl.nativeElement.focus(); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchCharacters'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SearchCharactersComponent.prototype, "inputEl", void 0);
    SearchCharactersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-characters',
            template: __webpack_require__(/*! ./search-characters.component.html */ "./src/app/component/search-characters/search-characters.component.html"),
            styles: [__webpack_require__(/*! ./search-characters.component.css */ "./src/app/component/search-characters/search-characters.component.css")]
        }),
        __metadata("design:paramtypes", [_service_marvel_service__WEBPACK_IMPORTED_MODULE_1__["MarvelService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_data_not_image_service__WEBPACK_IMPORTED_MODULE_3__["DataNotImageService"]])
    ], SearchCharactersComponent);
    return SearchCharactersComponent;
}());



/***/ }),

/***/ "./src/app/component/search/search.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/search/search.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/search/search.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/search/search.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"isLoading\"></app-loading>\n<div id=\"search\" class=\"wrapper\" style=\"margin-top: 60px;\">\n    <form style=\"top:0;\" class=\"form-inline fieldSearch position-fixed\" novalidate>\n        <input #textSearch\n                #searchComic\n                class=\"form-control form-control col-md-12\"\n                (click)=\"textSearch.value=''\"\n                (keyup)=\"filterItems(textSearch.value); textSearch.value.length>0 ? isActiveSearch=true : isActiveSearch=false;\"\n                (keypress)=\"$event.keyCode == 13 ? initSearch(textSearch.value, 10, 0, true, false, false) : ''\"\n                placeholder=\"Search comics: spider, daredevil, hulk, deadpool... \"\n                aria-label=\"Search\">\n        <a routerLink=\"/comics\" class=\"ico-search position-absolute\">\n            <i class=\"fas fa-chevron-left\"></i>\n        </a>\n        <a href=\"javascript:void(0)\"\n            class=\"ico-search ico-right position-absolute\"\n            (click)=\"initSearch(textSearch.value, 10, 0, true, false, false)\">\n            <i class=\"fas fa-search\"></i>\n        </a>\n        <div *ngIf=\"isActiveSearch\" class=\"position-fixed box-selected\">\n            <div class=\"mb-2\">\n                <h5>Suggestions</h5>\n            </div>\n            <div class=\"box-scroll-area\">\n                <ul class=\"notranslate\">\n                    <li *ngFor=\"let list of resultSelect\"\n                        (click)=\"initSearch(list, 10, 0, true, false, false); textSearch.value=list; isActiveSearch=false\">\n                        <a href=\"javascript:void(0)\">\n                            <img width=\"100%\" src=\"{{ list.image }}\" alt=\"\">\n                            {{ list }}\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </form>\n\n    <div id=\"scroll-seachComic\" *ngIf=\"comicsList.length && !searchHome\"> \n        <div class=\"main-container\"\n            infiniteScroll\n            [infiniteScrollDistance]=\"1.5\"\n            [infiniteScrollThrottle]=\"300\"\n            [infiniteScrollContainer]=\"scroll-seachComic\"\n            (scrolled)=\"onScrollDownSearchComic()\">   \n            <app-marvel-list [dataList]=\"comicsList\" [pageLink]=\"characterLink\"></app-marvel-list>\n        </div>\n    </div>\n    \n    <div *ngIf=\"comicsHomeList.length && searchHome\">\n        <div class=\"home-search\">\n            <div class=\"box-thumbnails\">\n                <div class=\"figure\"\n                    *ngFor=\"let list of comicsHomeList\"\n                    (click)=\"initSearch(list.title, 10, 0, true, false, false); textSearch.value=list.title\">\n                    <img width=\"100%\" src=\"{{list.image}}\" alt=\"image\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<app-dropdown [pagesList]='pagesScrollList'\n    [pagesView]='totalPagesSelected'\n    *ngIf=\"isOpenPages\"\n    (changePage)=\"changePageInSearch($event); updateDataComics($event)\">\n</app-dropdown>\n<app-footer [totalResults]='totalComics'\n    (togglePages)=\"showHideSelectedPage()\"\n    [countList]='searchOffset'\n    [links]='linksSearchComic'>\n</app-footer>"

/***/ }),

/***/ "./src/app/component/search/search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/search/search.component.ts ***!
  \******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
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



var SearchComponent = /** @class */ (function () {
    function SearchComponent(marvel, dataNotImage, elementRef) {
        var _this = this;
        this.marvel = marvel;
        this.dataNotImage = dataNotImage;
        this.dataPeople = [];
        this.pagesScrollList = [];
        this.comicsList = [];
        this.comicsHomeList = [];
        this.linksSearchComic = {};
        // TODO move this Array to a service file
        this.dataSelected = [
            'Agents of Atlas', 'Alpha Flight', 'Ant-Man', 'Avengers',
            'Battle', 'Black Bolt', 'Black Panther', 'Blade', 'Ben Reilly', 'Brilliant', 'Brute Force',
            'Captain America', 'Captain Marvel', 'Civil War',
            'Doctor Strange', 'Deadpool', 'Daredevil', 'Darth Vader',
            'Exiles', 'Extermination', 'Elektra',
            'Fantastic Four', 'Falcon',
            'Guardians of the Galaxy', 'Generation', 'Ghost Rider',
            'Hawkeye', 'Hulk',
            'Infinity Wars', 'Iron Man', 'Iron Fist', 'Iceman',
            'Jessica Jones', 'Journey Into Mystery',
            'Kanan', 'karnak', 'kick-ass', 'kingpin', 'Korvac',
            'Luke Cage', 'Lockjam', 'Loki', 'Lando',
            'Magneto', 'Marvel', 'Moon Knight', 'Mutant X',
            'New Mutants', 'Nova', 'Nick Fury',
            'Old man',
            'Peter Parker', 'Punisher', 'Powers',
            'Quasar', 'Quicksilver',
            'Runaways', 'Rogue', 'Rocket',
            'Storm', 'Sentry', 'Spider-man',
            'Star wars', 'Silver surf', 'Savage Wolverine', 'Secret Invasion', 'Secret Empire', 'Secret Avengers', 'Secret Warriors', 'Silk',
            'Tales of Suspense', 'Terror', 'Thanos', 'Thor',
            'Uncanny',
            'Vampire', 'Valkyrie', 'Vault of Spiders', 'Venom', 'Venomized', 'Victor Von Doom', 'Villains', 'Vision',
            'X-men', 'X-force', 'X-23'
        ];
        this.resultSelect = [];
        this.cloneDataSelect = [];
        this.filterItems = function (query) {
            _this.isActiveSearch = true;
            _this.cloneDataSelect = _this.dataSelected;
            _this.resultSelect = [];
            _this.cloneDataSelect.filter(function (el, index) {
                (el.toLowerCase().indexOf(query.toLowerCase()) > -1) ?
                    _this.resultSelect.push(el) :
                    _this.resultSelect.splice(index, 1);
            });
        };
        var query = this.dataSelected[Math.floor(Math.random() * (this.dataSelected.length - 0)) + 0];
        this.initSearch(query, 5, 0, true, true, false);
        this.characterLink = 'comic-info';
        this.searchOffset = 0;
        this.count = 10;
        this.totalPagesSelected = 10;
        this.isActiveSearch = false;
        this.searchHome = true;
        this.isOpenPages = false;
        this.onActivate();
    }
    SearchComponent.prototype.initSearch = function (textSearch, count, searchOffset, isKeyup, searchHome, btnDropDown) {
        var _this = this;
        this.isKeyup = isKeyup;
        this.currentText = textSearch;
        this.isLoading = true;
        this.marvel.comicSearch(textSearch, count, searchOffset).subscribe(function (data) {
            _this.isLoading = false;
            (_this.isKeyup) ?
                (_this.comicsList = [], searchOffset = 0, _this.searchOffset = 0, _this.onActivate()) : console.log('no keyup');
            (btnDropDown) ?
                (_this.comicsList = [], _this.onActivate()) : console.log('no btn DropDown');
            var searchResult = data.data.results;
            _this.totalComics = data.data.total;
            _this.totalMissing = _this.totalComics - _this.searchOffset;
            _this.comicsList.length <= 0 ? _this.comicsList = searchResult : _this.comicsList = _this.comicsList.concat(searchResult);
            _this.dataNotImage.deleteNotImageFound(_this.comicsList);
            _this.searchHome = searchHome;
            searchHome ? _this.populateComicsHomeList(searchResult) : console.log('NO');
        });
        setTimeout(function () {
            _this.isActiveSearch = false;
        }, 200);
    };
    SearchComponent.prototype.changePageInSearch = function (searchOffset) {
        var textSearch = this.currentText;
        this.initSearch(textSearch, 10, searchOffset, false, false, true);
    };
    SearchComponent.prototype.updateDataComics = function (event) {
        this.isOpenPages = false;
        this.searchOffset = event;
    };
    SearchComponent.prototype.populateComicsHomeList = function (results) {
        var _this = this;
        results.forEach(function (element) {
            var title = element.title;
            var titleSplit = title.split(' ');
            var titleResults = titleSplit[0];
            _this.comicsHomeList.push({
                title: titleResults,
                image: element.thumbnail.path + "." + element.thumbnail.extension
            });
        });
    };
    SearchComponent.prototype.onScrollDownSearchComic = function () {
        if (this.comicsList.length > 1) {
            this.searchOffset = this.searchOffset + 10;
            (this.searchOffset < this.totalComics && this.searchOffset !== this.totalComics) ?
                this.initSearch(this.currentText, this.count, this.searchOffset, false, false, false) :
                this.searchOffset = this.totalComics;
        }
    };
    SearchComponent.prototype.onActivate = function () {
        var scrollToTop = window.setInterval(function () {
            var pos = window.pageYOffset;
            (pos > 0) ? window.scrollTo(0, pos - 20) : window.clearInterval(scrollToTop);
        }, 0);
    };
    SearchComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.inputEl.nativeElement.focus(); });
    };
    SearchComponent.prototype.ngOnInit = function () {
        this.linksSearchComic = {
            character: '',
            comic: 'Comics',
            comicHome: 'Comics',
            characterHome: ''
        };
    };
    SearchComponent.prototype.calcPagesForScroll = function () {
        this.pagesScrollList = [];
        var numberPages = this.totalComics / 10;
        for (var i = 0; i <= numberPages; i++) {
            this.pagesScrollList.push(i);
        }
    };
    SearchComponent.prototype.showHideSelectedPage = function () {
        this.calcPagesForScroll();
        this.isOpenPages = !this.isOpenPages;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchComic'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SearchComponent.prototype, "inputEl", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/component/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/component/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_service_marvel_service__WEBPACK_IMPORTED_MODULE_1__["MarvelService"], _service_data_not_image_service__WEBPACK_IMPORTED_MODULE_2__["DataNotImageService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SearchComponent);
    return SearchComponent;
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

module.exports = "<div [ngClass]=\"{ isScrolDown : !detectScrollDown }\" class=\"dropdown col-md-12 p-0 mb-2 position-fixed dropdown-box\">\n    <button class=\"btn btn-secondary dropdown-toggle notranslate\"\n            type=\"button\"\n            id=\"dropdownMenuButton\"\n            data-toggle=\"dropdown\"\n            aria-haspopup=\"true\"\n            aria-expanded=\"false\">\n      Actions\n    </button>\n    <div class=\"w-100 dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n        <div class=\"text-center info-bar\">\n            <div class=\"col-sm-12 mt-4\">\n              <div>{{ textInfo.infoTitle }}</div>\n              <button\n                type=\"button\"\n                class=\"btn btn-toggle active\"\n                data-toggle=\"button\"\n                aria-pressed=\"true\"\n                (click)=\"toggleEnableEmit($event)\"\n                autocomplete=\"off\">\n                <div class=\"handle\"></div>\n              </button>\n            </div>\n            <div class=\"col-sm-12 mt-4\">\n              <div>Disabled infinit scroll</div>\n              <button\n                type=\"button\"\n                class=\"btn btn-toggle btn-toggle-scroll active\"\n                data-toggle=\"button\"\n                aria-pressed=\"true\"\n                (click)=\"toggleScrollEmit($event)\"\n                autocomplete=\"off\">\n                <div class=\"handle\"></div>\n              </button>\n            </div>\n            <div class=\"col-sm-12 mt-4 pb-2\">\n              {{ textInfo.totalTitle }} \n              <span class=\"badge badge-dark\">{{ totalList }}</span>\n            </div>\n        </div>\n    </div>\n  </div>"

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
        this.toggleScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ButtonComponent.prototype.toggleEnableEmit = function (event) {
        this.toggleEnable.emit(event);
    };
    ButtonComponent.prototype.toggleScrollEmit = function (event) {
        this.toggleScroll.emit(event);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ButtonComponent.prototype, "detectScrollDown", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ButtonComponent.prototype, "toggleEnable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ButtonComponent.prototype, "toggleScroll", void 0);
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

/***/ "./src/app/component/shared/dropdown/dropdown.component.css":
/*!******************************************************************!*\
  !*** ./src/app/component/shared/dropdown/dropdown.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/shared/dropdown/dropdown.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/component/shared/dropdown/dropdown.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position-fixed box-selected box-selected-page\">\n    <div class=\"mb-2\">\n        <h3>Change of page</h3>\n        <span class=\"mg-2\">The page changes are {{pagesView}} in {{pagesView}}</span>\n    </div>\n    <div class=\"box-scroll-area\">\n        <ul class=\"notranslate\">\n            <li *ngFor=\"let list of pagesList\"\n                (click)=\"goComic(list*pagesView)\">\n                <a href=\"javascript:void(0)\">\n                    {{ list * pagesView }}\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/component/shared/dropdown/dropdown.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/component/shared/dropdown/dropdown.component.ts ***!
  \*****************************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
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

var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
        this.pagesList = [];
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isOpenPages = true;
    }
    DropdownComponent.prototype.goComic = function (page) {
        this.changePage.emit(page);
    };
    DropdownComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DropdownComponent.prototype, "pagesList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "isOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "pagesView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DropdownComponent.prototype, "changePage", void 0);
    DropdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dropdown',
            template: __webpack_require__(/*! ./dropdown.component.html */ "./src/app/component/shared/dropdown/dropdown.component.html"),
            styles: [__webpack_require__(/*! ./dropdown.component.css */ "./src/app/component/shared/dropdown/dropdown.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DropdownComponent);
    return DropdownComponent;
}());



/***/ }),

/***/ "./src/app/component/shared/links-marvel/links-marvel.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/component/shared/links-marvel/links-marvel.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/shared/links-marvel/links-marvel.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/component/shared/links-marvel/links-marvel.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isInfoPage\" class=\"notranslate\">\n    <a *ngIf=\"link?.urls[0] && link?.urls[0].url\"\n        href=\"{{link?.urls[0].url}}\"\n        target=\"_black\"\n        class=\"badge badge-primary mr-2\">{{ link?.urls[0]?.type }}</a>\n    <a *ngIf=\"link?.urls[1] && link?.urls[1]?.url\"\n        href=\"{{link?.urls[1].url}}\"\n        target=\"_black\"\n        class=\"badge badge-success mr-2\">{{ link?.urls[1]?.type }}</a>\n    <a *ngIf=\"link?.urls[2] && link?.urls[2].url\"\n        href=\"{{link?.urls[2].url}}\"\n        target=\"_black\"\n        class=\"badge badge-warning mr-2\">{{ link?.urls[2]?.type }}</a>\n    <a *ngIf=\"link?.urls[3] && link?.urls[3]?.url\"\n        href=\"{{link?.urls[3].url}}\"\n        target=\"_black\"\n        class=\"badge badge-danger mr-2\">{{ link?.urls[3]?.type }}</a>\n</div>\n\n\n<div *ngIf=\"isInfoPage\">\n    <a *ngIf=\"link?.urls[0] && link.urls[0]?.url\"\n        href=\"{{link?.urls[0].url}}\"\n        target=\"_black\"\n        class=\"badge badge-primary mr-2\">{{ link?.urls[0].type }}</a>\n    <a *ngIf=\"link?.urls[1] && link?.urls[1].url\"\n        href=\"{{link?.urls[1].url}}\"\n        target=\"_black\"\n        class=\"badge badge-success mr-2\">{{ link?.urls[1].type }}</a>\n    <a *ngIf=\"link?.urls[2] && link?.urls[2].url\"\n        href=\"{{link?.urls[2].url}}\"\n        target=\"_black\"\n        class=\"badge badge-warning mr-2\">{{ link?.urls[2].type }}</a>\n    <a *ngIf=\"link?.urls[3] && link?.urls[3].url\"\n        href=\"{{link?.urls[3].url}}\"\n        target=\"_black\"\n        class=\"badge badge-danger mr-2\">{{ link?.urls[3].type }}</a>\n</div>"

/***/ }),

/***/ "./src/app/component/shared/links-marvel/links-marvel.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/component/shared/links-marvel/links-marvel.component.ts ***!
  \*************************************************************************/
/*! exports provided: LinksMarvelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksMarvelComponent", function() { return LinksMarvelComponent; });
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

var LinksMarvelComponent = /** @class */ (function () {
    function LinksMarvelComponent() {
    }
    LinksMarvelComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LinksMarvelComponent.prototype, "link", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LinksMarvelComponent.prototype, "isInfoPage", void 0);
    LinksMarvelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-links-marvel',
            template: __webpack_require__(/*! ./links-marvel.component.html */ "./src/app/component/shared/links-marvel/links-marvel.component.html"),
            styles: [__webpack_require__(/*! ./links-marvel.component.css */ "./src/app/component/shared/links-marvel/links-marvel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LinksMarvelComponent);
    return LinksMarvelComponent;
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

module.exports = "<div class=\"text-center animated fadeIn loading\">\n  <div>\n      <i class=\"fa fa-sync fa-spin fa-5x\"></i>\n  </div>\n</div>"

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

/***/ "./src/app/component/shared/marvel-info/marvel-info.component.css":
/*!************************************************************************!*\
  !*** ./src/app/component/shared/marvel-info/marvel-info.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/shared/marvel-info/marvel-info.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/component/shared/marvel-info/marvel-info.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper dataInfo\" *ngIf=\"dataInfo['id']\">\n    <div class=\"row\">\n        <div class=\"col-md-4\">  \n            <div class=\"card bg-whitetext-white\">\n                <img class=\"card-img-top\" src=\"{{dataInfo.thumbnail.path+'.'+dataInfo.thumbnail.extension}}\" alt=\"image-{{dataInfo.title}}\">\n            </div>\n        </div>\n        <div class=\"col-md-8\">\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">{{ dataInfo.title }}</h3>\n                <p class=\"card-text\">{{ dataInfo.description }}</p>\n                <div>\n                    <h4>Creators</h4>\n                    <div class=\"box-list\">\n                      <div class=\"list-content\">\n                          <a href=\"javascript:void(0)\"\n                            *ngFor=\"let creator of dataInfo.creators.items\"\n                            class=\"badge badge-secondary mr-2\">\n                            Name: {{ creator.name }} - Role: {{ creator.role }}\n                        </a>\n                      </div>\n                    </div>\n                </div>\n                <p class=\"card-text clearfix\">  \n                    <small class=\"text-muted\">© 2018 MARVEL</small>\n                </p>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/component/shared/marvel-info/marvel-info.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/component/shared/marvel-info/marvel-info.component.ts ***!
  \***********************************************************************/
/*! exports provided: MarvelInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarvelInfoComponent", function() { return MarvelInfoComponent; });
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

var MarvelInfoComponent = /** @class */ (function () {
    function MarvelInfoComponent() {
        this.dataInfo = [];
    }
    MarvelInfoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MarvelInfoComponent.prototype, "dataInfo", void 0);
    MarvelInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-marvel-info',
            template: __webpack_require__(/*! ./marvel-info.component.html */ "./src/app/component/shared/marvel-info/marvel-info.component.html"),
            styles: [__webpack_require__(/*! ./marvel-info.component.css */ "./src/app/component/shared/marvel-info/marvel-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MarvelInfoComponent);
    return MarvelInfoComponent;
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

module.exports = "<div class=\"card-columns\">\n    <div class=\"card bg-whitetext-white\" *ngFor=\"let list of dataList\">\n        <div class=\"img-area\">\n          <img class=\"card-img-top\" src=\"{{list.thumbnail.path+'.'+list.thumbnail.extension}}\" alt=\"image-{{list.name}}\">\n        </div>\n        <div class=\"card-body\">\n            <h5 *ngIf=\"list.name\" class=\"card-title notranslate\">{{ list.name }}</h5>\n            <h5 *ngIf=\"list.title\" class=\"card-title notranslate\">{{ list.title }}</h5>\n            <app-links-marvel [link]='list' [isInfoPage]='false'></app-links-marvel>\n            <p class=\"card-text clearfix mt-4\">\n                <small class=\"text-muted\">© 2018 MARVEL</small>\n                <a href=\"javascript:void(0)\"\n                        (click)=\"getMoreInfo(pageLink, list.id)\"\n                        class=\"btn btn-outline-danger btn-sm float-right\">More Info</a>\n                </p>\n        </div>\n    </div>\n</div>\n"

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
            (urlPop === 'image_not_available') ? (dataList.splice(i, 1), i--) : console.log('Image');
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
        this.baseUrl = 'https://gateway.marvel.com/v1/public/';
        this.apiKey = '71827f4b4a448fb6c993a2ff4d38c198';
    }
    // Characters GET
    MarvelService.prototype.getCharacters = function (offsetNumber, limitNumber) {
        var charactersUrl = this.baseUrl + "characters?apikey=" + this.apiKey + "&offset=" + offsetNumber + "&limit=" + limitNumber;
        return this.http.get(charactersUrl);
    };
    MarvelService.prototype.getCharacterInfo = function (id) {
        var characterInfo = this.baseUrl + "characters?apikey=" + this.apiKey + "&id=" + id;
        return this.http.get(characterInfo);
    };
    MarvelService.prototype.getCharacterSerie = function (url) {
        var characterSerie = url + "?apikey=" + this.apiKey;
        return this.http.get(characterSerie);
    };
    MarvelService.prototype.getCharacterComic = function (url) {
        var characterComic = url + "?apikey=" + this.apiKey;
        return this.http.get(characterComic);
    };
    MarvelService.prototype.getCurrentComicsCharacter = function (id) {
        var characterInfo = this.baseUrl + "characters/" + id + "/comics?apikey=" + this.apiKey;
        return this.http.get(characterInfo);
    };
    MarvelService.prototype.getCurrentSeriesCharacter = function (id) {
        var comicsInfo = this.baseUrl + "characters/" + id + "/series?apikey=" + this.apiKey;
        return this.http.get(comicsInfo);
    };
    MarvelService.prototype.characterSearch = function (query, number, offset) {
        var charactersUrl = this.baseUrl + "characters?limit=" + number + "&offset=" + offset + "&nameStartsWith=" + query + "&apikey=" + this.apiKey;
        return this.http.get(charactersUrl);
    };
    MarvelService.prototype.comicSearch = function (query, number, offset) {
        var comicSearchUrl = this.baseUrl + "comics?limit=" + number + "&offset=" + offset + "&titleStartsWith=" + query + "&apikey=" + this.apiKey;
        return this.http.get(comicSearchUrl);
    };
    MarvelService.prototype.comicSearchTitleList = function (query, number, offset) {
        var comicSearchUrl = this.baseUrl + "comics?limit=" + number + "&offset=" + offset + "&titleStartsWith=" + query + "&apikey=" + this.apiKey;
        return this.http.get(comicSearchUrl);
    };
    // Comics GET
    MarvelService.prototype.getComics = function (offsetNumber, limitNumber) {
        var comimcsUrl = this.baseUrl + "comics?apikey=" + this.apiKey + "&offset=" + offsetNumber + "&limit=" + limitNumber;
        return this.http.get(comimcsUrl);
    };
    MarvelService.prototype.getComicInfo = function (id) {
        var comicInfo = this.baseUrl + "comics?apikey=" + this.apiKey + "&id=" + id;
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

module.exports = __webpack_require__(/*! /Users/mi-equipo/Documents/marvel-angular6/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map