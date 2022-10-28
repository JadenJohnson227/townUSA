"use strict";
(self["webpackChunkmap_app"] = self["webpackChunkmap_app"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map/map.component */ 2761);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: '', redirectTo: '/map', pathMatch: 'full' },
    { path: 'map', component: _map_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_fs_fs_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/fs/fs.service */ 806);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_links_links_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/links/links.service */ 3730);




class AppComponent {
    constructor(fsService, router, links, route) {
        this.fsService = fsService;
        this.router = router;
        this.links = links;
        this.route = route;
        this.title = links.APP_NAME.replace(' ', ''); //Set the title for the page
        // Uncomment to enable google analytics
        // this.router.events.subscribe(event => {
        //   if (event instanceof NavigationEnd) {
        //     (<any>window).ga('set', 'page', event.urlAfterRedirects);
        //     (<any>window).ga('send', 'pageview');
        //   }
        // });
    }
    //Add more routes here as needed for the main menu
    ngOnInit() {
        let loggedIn = this.fsService.checkLoginStatus();
        if (loggedIn) {
            //this.goHome();
            //todo: set this up
        }
        else if (!window.location.href.includes('fstoken')) {
            if (window.location.href.includes('home')) {
                this.router.navigateByUrl('expired');
            }
            else {
                //this.router.navigateByUrl('start');
            }
        }
    }
    goHome() {
        this.router.navigate([this.links.getHome()]);
    }
    goToRoute(link) {
        if (link.includes('http')) {
            window.open(link, '_blank');
        }
        else if (link === 'home') {
            this.goHome();
        }
        else {
            this.router.navigate([link]);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_fs_fs_service__WEBPACK_IMPORTED_MODULE_0__.FsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_links_links_service__WEBPACK_IMPORTED_MODULE_1__.LinksService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "all-wrap"], [1, "page-wrap"], [1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: [".all-wrap[_ngcontent-%COMP%] {\r\n    min-height: 100vh;\r\n}\r\n.page-wrap[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-height: 100vh;\r\n}\r\n.content[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.header-icon[_ngcontent-%COMP%] {\r\n  vertical-align: text-bottom !important;\r\n}\r\n.home-button[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    padding: 4px 12px;\r\n}\r\n.home-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    vertical-align: middle;\r\n    margin-right: 6px;\r\n}\r\n.header-spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n.menu-compact[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.menu-compact-button[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n.main-toolbar[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n@media screen and (max-width: 600px) {\r\n    .menu-standard[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    .menu-compact[_ngcontent-%COMP%] {\r\n        display: inline;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksT0FBTztBQUNYO0FBQ0E7O0VBRUU7QUFDRjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFFQTtFQUNFLHNDQUFzQztBQUN4QztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsbC13cmFwIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5wYWdlLXdyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG4uY29udGVudCB7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcbi8qXHJcbiAqIE1ha2UgY29tcG9uZW50IGluamVjdGVkIGJ5IHJvdXRlciBmdWxsIGhlaWdodFxyXG4gKi9cclxubWFpbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmhlYWRlci1pY29uIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b20gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhvbWUtYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xyXG59XHJcblxyXG4uaG9tZS1idXR0b24gaW1nIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcbiAgXHJcbi5oZWFkZXItc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLm1lbnUtY29tcGFjdCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubWVudS1jb21wYWN0LWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWFpbi10b29sYmFyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAubWVudS1zdGFuZGFyZCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5tZW51LWNvbXBhY3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/service-worker */ 4933);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material/material.module */ 898);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map/map.component */ 2761);
/* harmony import */ var _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instructions/instructions.component */ 8752);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/search.component */ 6392);
/* harmony import */ var _popup_warning_popup_warning_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popup-warning/popup-warning.component */ 1942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__.ServiceWorkerModule.register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent,
        _map_map_component__WEBPACK_IMPORTED_MODULE_5__.MapComponent,
        _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_6__.InstructionsComponent,
        _search_search_component__WEBPACK_IMPORTED_MODULE_7__.SearchComponent,
        _popup_warning_popup_warning_component__WEBPACK_IMPORTED_MODULE_8__.PopupWarningComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
        _material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__.ServiceWorkerModule] }); })();


/***/ }),

/***/ 3961:
/*!****************************************!*\
  !*** ./src/app/familySearchX/FHTLX.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FHTLX": () => (/* binding */ FHTLX)
/* harmony export */ });
/* harmony import */ var _docCookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docCookies */ 9941);
/* harmony import */ var _FamilySearchX__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FamilySearchX */ 6232);


const TOKEN_LENGTH = 3600; //86400
class FHTLX extends _FamilySearchX__WEBPACK_IMPORTED_MODULE_1__.FamilySearchX {
    constructor() {
        super(...arguments);
        this.PARENT_DOMAIN = '';
    }
    static authServiceRedirect(redirectUri) {
        _FamilySearchX__WEBPACK_IMPORTED_MODULE_1__.FamilySearchX.uploadConfig(redirectUri, (options) => {
            let request = new XMLHttpRequest();
            let uri = "https://auth.familytech.byu.edu/?redirect=" + options.redirectUri;
            request.open("GET", uri);
            request.send();
        }, (error) => {
        });
    }
    static finishAuthService(configLocation, callback, failureUri) {
        let accessToken = null;
        if (accessToken = localStorage.getItem("fs_access_token")) {
            // accessToken = window.location.href.split("fstoken=")[1];
            // console.log("Access Token:", accessToken);
        }
        _FamilySearchX__WEBPACK_IMPORTED_MODULE_1__.FamilySearchX.uploadConfig(configLocation, (initOptions) => {
            let fhtlx = new FHTLX(initOptions);
            // If we already have the token, set it in the cookie.
            if (accessToken) {
                fhtlx.setAccessToken(accessToken);
            }
            let verifyToken = (error, response) => {
                if (!!error) {
                    console.error("Could not obtain auth token.");
                }
                else {
                    callback(fhtlx);
                }
            };
            if (fhtlx.getAccessToken()) {
                callback(fhtlx);
            }
            else if (!fhtlx.oauthResponse(verifyToken) && failureUri) {
                window.location = failureUri;
            }
        }, (error) => {
            console.error("err:", error);
            // window.location = 'login';
            if (failureUri) {
                window.location = failureUri;
            }
        });
    }
    setAccessToken(accessToken) {
        this.accessToken = accessToken;
        if (this.saveAccessToken) {
            // Expire in 24 hours because tokens never last longer than that, though
            // they can expire before that after 1 hour of inactivity.
            _docCookies__WEBPACK_IMPORTED_MODULE_0__.docCookies.setItem(this.tokenCookie, accessToken, TOKEN_LENGTH, this.tokenCookiePath, this.PARENT_DOMAIN);
        }
        return this;
    }
    assignAccessToken(accessToken) {
        this.accessToken = accessToken;
    }
    storeSession(fsSession) {
        this.setAccessToken(fsSession.fs_access_token);
        _docCookies__WEBPACK_IMPORTED_MODULE_0__.docCookies.setItem('FS_SESSION', JSON.stringify(fsSession), TOKEN_LENGTH, this.tokenCookiePath, this.PARENT_DOMAIN);
    }
    readyAccessToken(fsSession) {
        this.accessToken = fsSession.fs_access_token;
        this.userPID = fsSession.fs_user.pid;
    }
    deleteSession() {
        this.deleteAccessToken();
        _docCookies__WEBPACK_IMPORTED_MODULE_0__.docCookies.removeItem('FS_SESSION', this.tokenCookiePath, this.PARENT_DOMAIN);
    }
    static checkAccessToken() {
        let sessionStr = _docCookies__WEBPACK_IMPORTED_MODULE_0__.docCookies.getItem('FS_SESSION');
        if (!!sessionStr) {
            try {
                let fsSession = JSON.parse(sessionStr);
                return fsSession;
            }
            catch (err) {
                return undefined;
            }
        }
        else {
            return undefined;
        }
    }
}


/***/ }),

/***/ 6232:
/*!************************************************!*\
  !*** ./src/app/familySearchX/FamilySearchX.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamilySearchX": () => (/* binding */ FamilySearchX)
/* harmony export */ });
/*======================================================================================================
[][][][]/
[][][][]    Licensure
[][][][]\

Although this SDK does not directly include any code from the "Lite JS SDK for the FamilySearch API"
github project (https://github.com/FamilySearch/fs-js-lite), it is designed to be compatible therewith.
As such, we will post their MIT licensure statement here, noting that the code in this project is
the exclusive property of Brigam Young University, and was developed by student researchers in the
BYU Family History Technology Lab as an extension to the aformentioned project.

Lite JS SDK for the FamilySearch API License:
--------------------------------------------------------------------------------
MIT License

Copyright (c) 2016 York Solutions

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
--------------------------------------------------------------------------------


======================================================================================================*/
class FSLink {
}
class FSResourceReference {
}
class FSExtensibleData {
}
class FSHypermediaEnabledData extends FSExtensibleData {
    constructor() {
        super(...arguments);
        this.links = {};
    }
}
class FSFamilyView extends FSHypermediaEnabledData {
    constructor() {
        super(...arguments);
        this.children = [];
    }
}
class FSAttribution extends FSExtensibleData {
}
class FSQualifier {
}
class FSSourceReference extends FSHypermediaEnabledData {
    constructor() {
        super(...arguments);
        this.qualifiers = [];
    }
}
class FSNote extends FSHypermediaEnabledData {
}
class FSConclusion extends FSHypermediaEnabledData {
    constructor() {
        super(...arguments);
        this.notes = [];
    }
}
class FSGender extends FSConclusion {
}
class FSTextValue {
}
class FSDate extends FSExtensibleData {
    constructor() {
        super(...arguments);
        this.normalized = [];
    }
}
class FSNamePart extends FSExtensibleData {
    constructor() {
        super(...arguments);
        this.qualifiers = [];
    }
}
class FSNameForm extends FSExtensibleData {
    constructor() {
        super(...arguments);
        this.parts = [];
    }
}
class FSName extends FSConclusion {
    constructor() {
        super(...arguments);
        this.nameForms = [];
    }
}
class FSPlaceReference extends FSExtensibleData {
    constructor() {
        super(...arguments);
        this.normalized = [];
    }
}
class FSFact extends FSConclusion {
    constructor() {
        super(...arguments);
        this.qualifiers = [];
    }
}
class FSDisplayProperties extends FSExtensibleData {
    constructor() {
        super(...arguments);
        this.familiesAsParent = [];
        this.familiesAsChild = [];
    }
}
class FSEvidenceReference extends FSHypermediaEnabledData {
}
class FSSubject extends FSConclusion {
    constructor() {
        super(...arguments);
        this.evidence = [];
        this.media = [];
        this.identifiers = {};
    }
}
class FSPerson extends FSSubject {
    constructor() {
        super(...arguments);
        this.names = [];
        this.facts = [];
    }
}
class FSRelationship extends FSSubject {
    constructor() {
        super(...arguments);
        this.facts = [];
    }
}
class FSChildAndParentRelationship extends FSSubject {
    constructor() {
        super(...arguments);
        this.fatherFacts = [];
        this.motherFacts = [];
    }
}
class FSUser extends FSExtensibleData {
    constructor() {
        super(...arguments);
        this.links = {};
    }
}
// #endregion
/*=============================================================================================
[][][][]/
[][][][]    FamilySearchX Definition
[][][][]\
=============================================================================================*/
// #region FSX Definition
class FamilySearchX extends FamilySearch {
    constructor(options) {
        super(options);
        this.userPID = "";
    }
    /*=============================================================================================
    [][][][]/
    [][][][]    Init & Utils
    [][][][]\
    =============================================================================================*/
    // #region Init and Utils
    /**
     * This method is designed principally as a means of loading up a configuration file.
     * @param uri
     * @param handler
     */
    static uploadConfig(uri, handler, errorHandler) {
        let request = new XMLHttpRequest();
        request.addEventListener("load", function () {
            let data = this.response;
            if (data instanceof String) {
                handler(JSON.parse(data));
            }
            else {
                handler(data);
            }
        });
        request.addEventListener("error", function () {
            errorHandler(this.response);
        });
        request.open("GET", uri);
        request.responseType = "json";
        request.send();
    }
    logout(handler) {
        this.post("/platform/logout", {}, (error, response) => {
            console.log("%c User has been logged out", "color: #ffdd00");
            handler && handler(error, response);
        });
    }
    isPID(field) {
        return !!(/[a-zA-Z0-9]{4}-[a-zA-Z0-9]{3}/g).exec(field);
    }
    // #endregion
    /*=============================================================================================
    [][][][]/
    [][][][]    User API
    [][][][]\
    =============================================================================================*/
    // #region User API
    /**
     * Gets the current user person
     * @param handler
     */
    getCurrentTreePerson(handler) {
        this.get('/platform/tree/current-person', handler);
    }
    /**
     * Gets the information for the current user.
     * @param handler
     */
    getCurrentUser(handler) {
        this.get('/platform/users/current', (error, response) => {
            try {
                if (!error) {
                    let res = (JSON.parse(response.body));
                    let user = res.users[0];
                    this.userPID = user.personId;
                    handler(error, user);
                }
            }
            catch (e) {
                handler({ apiError: error, parsingError: e }, null);
            }
        });
    }
    /**
     * Gets a FamilySearch person information for a user.
     * @param user
     * @param handler
     */
    getPersonFromUser(user, handler) {
        if (!!user.links && !!user.links.person) {
            this.get(user.links.person.href, handler);
        }
        else {
            this.get("/platform/tree/persons/" + user.personId, handler);
        }
    }
    /**
     * Gets the user's ancestry and returns the RAW results.
     * @param handler
     * @param generations
     * @param spouse
     * @param marriageDetails
     * @param descendants
     * @param personDetails
     */
    getUserWithAncestry(handler, generations = 8, spouse = "", marriageDetails, descendants, personDetails) {
        if (!this.userPID) {
            this.getCurrentUser((error, user) => {
                this.getUserWithAncestry(handler, generations, spouse, marriageDetails, descendants, personDetails);
            });
            return;
        }
        else {
            this.getPersonWithAncestry(this.userPID, handler, generations, spouse, marriageDetails, descendants, personDetails);
        }
    }
    /**
     * Gets the user's descendancy and returns the RAW results.
     * @param handler
     * @param generations
     * @param spouse
     * @param marriageDetails
     * @param personDetails
     */
    getUserWithDescendancy(handler, generations = 2, spouse = "", marriageDetails, personDetails) {
        if (!this.userPID) {
            this.getCurrentUser((error, user) => {
                this.getUserWithDescendancy(handler, generations, spouse, marriageDetails, personDetails);
            });
            return;
        }
        else {
            this.getPersonWithDescendancy(this.userPID, handler, generations, spouse, marriageDetails, personDetails);
        }
    }
    // #endregion
    /*=============================================================================================
    [][][][]/
    [][][][]    Person API
    [][][][]\
    =============================================================================================*/
    // #region Person API
    /**
     * Get a particular person's data from the family tree
     * @param pid
     * @param handler
     * @param relatives (Optional) boolean whether or not relatives should be included with the results. Defaults to false
     * @param sourceDescriptions (Optional) boolean whether or not sourceDescriptions should be included with the results. Defaults to false
     */
    getPerson(pid, handler, relatives = false, sourceDescriptions = false) {
        let uri = '/platform/tree/persons/' + pid;
        let params = [];
        if (relatives) {
            params.push("relatives=true");
        }
        if (sourceDescriptions) {
            params.push("sourceDescriptions=true");
        }
        if (params.length) {
            uri += "?" + params.join("&");
        }
        this.get(uri, handler);
    }
    /**
     * Get the data for a collection of people.
     * @param pids
     * @param handler
     */
    getPersons(pids, handler) {
        const limit = 500;
        // Handle inproperly sized requests.
        if (pids.length > limit) {
            console.error("getPersons() called to FS with", pids.length, "ids. The limit is", limit, ".");
            pids = pids.slice(0, limit);
        }
        const list = pids.reduce((curr, pid) => curr += (pid + ","), "").substr(0, -1);
        // Final API call
        this.get('/platform/tree/persons?pids=' + list, handler);
    }
    /**
     * Gets a person with their ancestry and returns the RAW results.
     * @param pid
     * @param handler
     * @param generations
     * @param spouse
     * @param marriageDetails
     * @param descendants
     * @param personDetails
     */
    getPersonWithAncestry(pid, handler, generations = 2, spouse = "", marriageDetails, descendants, personDetails) {
        const maxGenerations = 8;
        const baseUri = "/platform/tree/ancestry?person=" + pid;
        let uri = baseUri;
        if (generations > 0) {
            if (generations > maxGenerations) {
                console.error("getPersonWithDescendancy() requested", generations, "generations. The limit is", maxGenerations, ".");
                generations = maxGenerations;
            }
            uri += "&generations=" + generations;
        }
        if (spouse != "") {
            uri += "&spouse=" + spouse;
        }
        if (marriageDetails) {
            uri += "&marriageDetails=true";
        }
        if (personDetails) {
            uri += "&personDetails=true";
        }
        if (descendants) {
            uri += "&descendants=true";
        }
        console.log(uri);
        this.get(uri, handler);
    }
    /**
     * Gets a person with their descendancy and returns the RAW results.
     * @param pid
     * @param handler
     * @param generations
     * @param spouse
     * @param marriageDetails
     * @param personDetails
     */
    getPersonWithDescendancy(pid, handler, generations = 2, spouse = "", marriageDetails, personDetails) {
        const maxGenerations = 2;
        const baseUri = "/platform/tree/descendancy?person=" + pid;
        let uri = baseUri;
        if (generations > 0) {
            if (generations > maxGenerations) {
                console.error("getPersonWithDescendancy() requested", generations, "generations. The limit is", maxGenerations, ".");
                generations = maxGenerations;
            }
            uri += "&generations=" + generations;
        }
        if (spouse != "") {
            uri += "&spouse=" + spouse;
        }
        if (marriageDetails) {
            uri += "&marriageDetails=true";
        }
        if (personDetails) {
            uri += "&personDetails=true";
        }
        this.get(uri, handler);
    }
    /**
     * Gets a person with their ancestry and returns the processed results.
     * @param pid
     * @param handler
     * @param generations
     * @param spouse
     * @param marriageDetails
     * @param personDetails
     */
    getPersonAncestry(pid, handler, generations) {
        let desc = new FSXAncestryBuilder(this, pid, generations);
        // console.log("Running ancestry!");
        desc.run().then((res) => {
            // console.log("Ancestry Data:", res);
            handler(null, res.people);
        }, (rej) => {
            console.log("Ancestry Failed:", rej);
            handler(rej, []);
        });
    }
    /**
     * Gets a person with their descendancy and returns the processed results.
     * @param pid
     * @param handler
     * @param generations
     * @param spouse
     * @param marriageDetails
     * @param personDetails
     */
    getPersonDescendancy(pid, handler, generations) {
        let desc = new FSXDescendancyBuilder(this, pid, generations);
        // console.log("Running descendancy!");
        desc.run().then((res) => {
            // console.log("Descendancy Data:", res);
            handler(null, res.people);
        }, (rej) => {
            console.log("Descendancy Failed:", rej);
            handler(rej, []);
        });
    }
    /**
     * Gets a person's parents.
     * @param pid
     * @param handler
     */
    getPersonWithParents(pid, handler) {
        this.get("/platform/tree/persons/" + pid + "/parents", handler);
    }
    /**
     * Gets a person's spouses.
     * @param pid
     * @param handler
     */
    getPersonWithSpouses(pid, handler) {
        this.get("/platform/tree/persons/" + pid + "/spouses", handler);
    }
    /**
     * Gets a person's children.
     * @param pid
     * @param handler
     */
    getPersonWithChildren(pid, handler) {
        this.get("/platform/tree/persons/" + pid + "/children", handler);
    }
    /**
     * Gets a person's families.
     * @param pid
     * @param handler
     */
    getPersonWithFamilies(pid, handler, sourceDescriptions) {
        let uri = "/platform/tree/persons/" + pid + "/families";
        if (sourceDescriptions) {
            uri += "?sourceDescriptions=true";
        }
        this.get(uri, handler);
    }
    // #endregion
    /*=============================================================================================
    [][][][]/
    [][][][]    Memories and Sources
    [][][][]\
    =============================================================================================*/
    // #region Memories and Sources
    /**
     * Retrieves the description for a portrait picture attached as the primary portrait for an individual.
     * @param pid
     * @param handler
     * @param defaultUri An unencoded URI for a default image if no portrait is found.
     */
    getPersonPortrait(pid, handler, defaultUri) {
        let uri = "/platform/tree/persons/" + pid + "/portrait";
        if (defaultUri) {
            uri += "?default=" + encodeURIComponent(defaultUri);
        }
        this.get(uri, handler);
    }
    /**
     * Retrieves descriptions for all of the portrait pictures available for an individual.
     * @param pid
     * @param handler
     */
    getPersonPortraits(pid, handler) {
        this.get("/platform/tree/persons/" + pid + "/portraits", handler);
    }
    /**
     * Retrieves descriptions for all of the memories available for an individual.
     * @param pid
     * @param handler
     * @param count <optional> The number of stories to request
     * @param startIndex <optional> The start index for the returned stories
     * @param filter <optional> If there is a particular type of resource desired, a filter may be used. Either "Photo", "Document", or "Story".
     */
    getPersonMemories(pid, handler, count, startIndex, filter) {
        let url = "/platform/tree/persons/" + pid + "/memories";
        let params = [];
        if (count > 0) {
            params.push("count=" + count);
        }
        if (startIndex > 0) {
            params.push("start=" + startIndex);
        }
        if (filter && (filter === "Photo" || filter === "Document" || filter === "Story")) {
            params.push("type=" + filter);
        }
        if (params.length) {
            url += "?" + params.join("&");
        }
        this.get("/platform/tree/persons/" + pid + "/memories", handler);
    }
    /**
     * Retrieves descriptions for all of the story memories available for an individual.
     * @param pid
     * @param handler
     * @param count <optional> The number of stories to request. If blank or negative, requests them all.
     * @param startIndex <optional> The start index for the returned stories If blank or negative, defaults to 0.
     */
    getPersonStoryMemories(pid, handler, count, startIndex) {
        this.getPersonMemories(pid, handler, count, startIndex, "Story");
    }
    /**
     * Retrieves descriptions for all of the document memories available for an individual.
     * @param pid
     * @param handler
     * @param count <optional> The number of documents to request
     * @param startIndex <optional> The start index for the returned documents
     */
    getPersonDocumentMemories(pid, handler, count, startIndex) {
        this.getPersonMemories(pid, handler, count, startIndex, "Document");
    }
    /**
     * Retrieves descriptions for all of the photo memories available for an individual.
     * @param pid
     * @param handler
     * @param count <optional> The number of documents to request
     * @param startIndex <optional> The start index for the returned documents
     */
    getPersonPhotoMemories(pid, handler, count, startIndex) {
        this.getPersonMemories(pid, handler, count, startIndex, "Photo");
    }
    /**
     * Retrieves descriptions for all of the memories available for an individual.
     * @param pid
     * @param handler
     * @param count <optional> The number of photos to request
     * @param startIndex <optional> The start index for the returned photos
     */
    getAllPersonMemories(pid, handler, count, startIndex) {
        this.getPersonMemories(pid, handler, count, startIndex);
    }
    /**
     * Provides a list of all sources attached to a person.
     * @param pid
     * @param handler
     */
    getPersonSources(pid, handler) {
        this.get("/platform/tree/persons/" + pid + "/sources", handler);
    }
    // #endregion
    /*=============================================================================================
    [][][][]/
    [][][][]    Matches & Duplicates
    [][][][]\
    =============================================================================================*/
    // #region Matches
    getPersonDuplicateMatches(pid, handler, includeNotAMatchDeclarations) {
        let uri = "/platform/tree/persons/" + pid + "/matches";
        if (includeNotAMatchDeclarations) {
            uri += "?includeNotAMatchDeclarations=true";
        }
        this.get(uri, { headers: { "Accept": "application/x-gedcomx-atom+json" } }, handler);
    }
    getPersonRecordMatches(pid, handler, status = "pending", count = 5, confidence = -1) {
        let uri = "/platform/tree/persons/" + pid + "/matches";
        let params = [
            "status=" + status,
            "collection=" + encodeURIComponent("records"),
            "count=" + count
        ];
        if (confidence > -1) {
            confidence = Math.min(confidence, 5); // The max cap on this is 5.
            params.push("confidence=" + confidence);
        }
        // Meld all of the query parameters onto the uri
        if (params.length) {
            uri += "?" + params.join("&");
        }
        this.get(uri, { headers: { "Accept": "application/x-gedcomx-atom+json" } }, handler);
    }
    // #endregion
    /*=============================================================================================
    [][][][]/
    [][][][]    Redirect To FamilySearch
    [][][][]\
    =============================================================================================*/
    // #region FamilySearch Redirect
    /**
     * Opens up a new tab to the FamilySearch person page.
     * Differs from viewInFamilySearchTab() in that the API docs say that eventually it might not require the user to reauthenticate.
     * @param pid
     */
    openNewTabFamilySearchPerson(pid) {
        window.open("https://api.familysearch.org/redirect?person=" + pid + "&access_token=" + this.getAccessToken());
    }
    /**
     * Opens up a new tab to the FamilySearch person page.
     * Will definitely require the user to log in to FamilySearch again if they haven't already.
     * @param pid
     */
    viewInFamilySearchTab(pid) {
        window.open("https://familysearch.org/tree/#view=ancestor&person=" + pid);
    }
}
/**
 * FamilySearch currently ships descendancy data with a list of people only connected by a
 * descendancyNumber field in their display properties.
 * The descendancyNumber is currently a d'Aboville number.
 * The FSXdAbovilleParser class provides functionality for converting between the string
 * provided and a parsed data object with easy reference to the d'Aboville numbers for parents and the default spouse.
 */
class FSXdAbovilleParser {
    constructor() { }
    /**
     * Extracts relevant data from a descendancy number
     * @param daboId the d'Aboville identifier for a particular person within a tree.
     */
    static getData(daboId) {
        let parts = daboId.split(".");
        const out = {
            parentA: "",
            parentB: "",
            spouse: "",
            subject: parts.join("."),
            generation: parts.length - 1
        };
        // Calculate Spouse
        out.spouse = parts.slice(0, -1).join(".") + (parts.length > 1 ? "." : "") + this.toggleSpouse(parts[parts.length - 1]);
        const last = parts[parts.length - 1];
        parts = parts.slice(0, -1);
        if (parts.length && !this.isSpouse(last)) {
            if (this.isSpouse(parts[parts.length - 1])) {
                out.parentA = parts.slice(0, -1).join(".") + (parts.length > 1 ? "." : "") + this.toggleSpouse(parts[parts.length - 1]);
                out.parentB = parts.join(".");
            }
            else {
                out.parentA = parts.join(".");
                out.parentB = parts.slice(0, -1).join(".") + (parts.length > 1 ? "." : "") + this.toggleSpouse(parts[parts.length - 1]);
            }
        }
        return out;
    }
    static isSpouse(target) {
        return (target.indexOf("-S") !== -1);
    }
    static toggleSpouse(target) {
        if (!this.isSpouse(target)) {
            return target + "-S";
        }
        else {
            return target.split("-S")[0];
        }
    }
}
class FSXPedigreeBuilder {
    constructor(fsx, pid, generations) {
        this.fsx = fsx;
        this.pid = pid;
        this.generations = generations;
        if (generations > this.getMaxRecommendedGenerations()) {
            console.error("You requested downloading", this.generations, "generations of data. This may take a while.");
        }
        this.cache = {};
    }
    run() {
        let allPeople = [];
        return new Promise((resolve, reject) => {
            let leavesOutStanding = 0;
            let runStep = (pid, generationsRemaining) => {
                // console.log("Step:", generationsRemaining);
                let nextSet = Math.min(generationsRemaining, this.getMaxGenerations());
                leavesOutStanding++;
                this.runGenerations(pid, nextSet).then((data) => {
                    generationsRemaining -= nextSet;
                    allPeople = allPeople.concat(data.allPeople);
                    if (--leavesOutStanding === 0) {
                        resolve({
                            root: this.pid,
                            people: allPeople
                        });
                        return;
                    }
                    if (generationsRemaining !== 0 && data.leafIds.length != 0) {
                        data.leafIds.forEach((leaf) => {
                            runStep(leaf, generationsRemaining);
                        });
                    }
                }, (rejection) => {
                    reject(rejection);
                });
            };
            runStep(this.pid, this.generations);
        });
    }
    /**
     * Descendancy data does not ship with relationship references. We're going to add them, so we
     * generate the appropriate arrays in the display properties.
     * @param person
     */
    addRelationshipArrays(person) {
        if (!person.display.familiesAsParent) {
            person.display.familiesAsParent = [];
        }
        if (!person.display.familiesAsChild) {
            person.display.familiesAsChild = [];
        }
    }
    /**
     * Adds a child for a person under a particular spouse.
     * @param subject The person receiving a child
     * @param spouseId The ID of the other parent of the child
     * @param childId The PID of the child
     */
    addChild(subject, spouseId, childId) {
        let spouseView;
        const childObject = {
            resource: "FSXChildof-" + subject.id + "," + spouseId + ":" + childId,
            resourceId: childId
        };
        if (!subject.display.familiesAsParent.some((view) => {
            if (view.parent1.resourceId === subject.id || view.parent2.resourceId === subject.id) {
                spouseView = view;
                if (!view.children.some((ref) => {
                    return ref.resourceId === childId;
                })) {
                    view.children.push(childObject);
                }
                return true;
            }
            return false;
        })) {
            spouseView = new FSFamilyView();
            spouseView.links = {};
            spouseView.id = "FSXFamilyViewof-" + subject.id + "," + spouseId;
            spouseView.parent1 = {
                resource: "FSXSpouseof-" + subject.id + ":" + spouseId,
                resourceId: subject.id
            };
            spouseView.parent2 = {
                resource: "FSXSpouseof-" + spouseId + ":" + subject.id,
                resourceId: spouseId
            };
            spouseView.children = [
                childObject
            ];
            subject.display.familiesAsParent.push(spouseView);
        }
    }
    /**
     * Adds a spouse to a person, creating a families as parent entry with the designated spouse.
     * @param subject The person receiving a child
     * @param spouseId The ID of the spouse
     */
    addSpouse(subject, spouseId) {
        let spouseView;
        if (!subject.display.familiesAsParent.some((view) => {
            return (view.parent1.resourceId === spouseId || view.parent2.resourceId === spouseId);
        })) {
            spouseView = new FSFamilyView();
            spouseView.links = {};
            spouseView.id = "FSXFamilyViewof-" + subject.id + "," + spouseId;
            spouseView.parent1 = {
                resource: "FSXSpouseof-" + subject.id + ":" + spouseId,
                resourceId: subject.id
            };
            spouseView.parent2 = {
                resource: "FSXSpouseof-" + spouseId + ":" + subject.id,
                resourceId: spouseId
            };
            spouseView.children = [];
            subject.display.familiesAsParent.push(spouseView);
        }
        // console.log("Added spouse:", subject.id, spouseId, spouseView);
    }
    /**
     * Adds a spouse to a person, creating a families as parent entry with the designated spouse.
     * @param subject The person receiving a child
     * @param spouseId The ID of the spouse
     */
    addParents(subject, parentAId, parentBId) {
        let spouseView;
        const childReference = {
            resource: "FSXChildof-" + parentAId + "," + parentBId + ":" + subject.id,
            resourceId: subject.id
        };
        if (!subject.display.familiesAsChild.some((view) => {
            if ((view.parent1.resourceId == parentAId && view.parent2.resourceId === parentBId) ||
                (view.parent1.resourceId == parentBId && view.parent2.resourceId === parentAId)) { // If there is already a view with these two parents
                if (!view.children.some((ref) => {
                    return (ref.resourceId === subject.id);
                })) { // Then include them in this family
                    view.children.push(childReference);
                }
                return true;
            }
            return false;
        })) { // Then make one.
            spouseView = new FSFamilyView();
            spouseView.links = {};
            spouseView.id = "FSXFamilyViewof-" + parentAId + "," + parentBId;
            spouseView.parent1 = {
                resource: "FSXSpouseof-" + parentAId + ":" + parentBId,
                resourceId: parentAId
            };
            spouseView.parent2 = {
                resource: "FSXSpouseof-" + parentBId + ":" + parentAId,
                resourceId: parentBId
            };
            spouseView.children = [childReference];
            subject.display.familiesAsChild.push(spouseView);
        }
        // console.log("Added parents:", subject.id, parentAId, parentBId);
    }
}
class FSXDescendancyBuilder extends FSXPedigreeBuilder {
    getMaxGenerations() {
        return FSXDescendancyBuilder.MAX_GENERATIONS_PER_CALL;
    }
    getMaxRecommendedGenerations() {
        return FSXDescendancyBuilder.MAX_GENERATIONS_RECOMMENDED;
    }
    runGenerations(pid, generations) {
        return new Promise((resolve, reject) => {
            this.fsx.getPersonWithDescendancy(this.pid, (error, response) => {
                if (error) {
                    reject(error);
                    return;
                }
                if (!!response.data) { // Check for JSON data.
                    resolve(this.connectDescendancyData(response.data.persons, generations));
                    return;
                }
                resolve();
            }, generations, "", true, true);
        });
    }
    /**
     * Given a group of people, it will attach the PID's of linked family members to the people,
     * creating a tree that is more intuitive than using the d'Aboville numbers.
     * @param people
     */
    connectDescendancyData(people, generations) {
        let leaves = [];
        let descMap = {};
        // Cache, fill out the relationship areas, and store the descendancyNumber;
        people.forEach((subject) => {
            if (!this.cache[subject.id]) {
                this.cache[subject.id] = subject;
            }
            this.addRelationshipArrays(subject);
            descMap[subject.display.descendancyNumber] = subject.id;
        });
        let data, parentAId, parentBId, spouseId, parentA, parentB, spouse;
        let i = 0;
        people.forEach((subject) => {
            data = FSXdAbovilleParser.getData(subject.display.descendancyNumber); // Get the d'Aboville parsing
            if (data.generation === generations) {
                leaves.push(subject.id);
            }
            parentAId = descMap[data.parentA];
            parentBId = descMap[data.parentB];
            spouseId = descMap[data.spouse];
            if (!!parentAId) { // If the first parent exists, add this person as a child
                parentA = this.cache[parentAId];
                this.addChild(parentA, parentBId, subject.id);
            }
            if (!!parentBId) { // If the second parent exists, add this person as a child
                parentB = this.cache[parentBId];
                this.addChild(parentB, parentAId, subject.id);
            }
            if (!!parentAId || !!parentBId) { // If either parent exists, add them
                this.addParents(subject, parentAId, parentBId);
            }
            if (!!spouseId) { // If the spouse exists, add them as a spouse.
                spouse = this.cache[spouseId];
                this.addSpouse(subject, spouseId);
            }
        });
        return {
            allPeople: people,
            leafIds: leaves
        };
    }
}
FSXDescendancyBuilder.MAX_GENERATIONS_PER_CALL = 2;
FSXDescendancyBuilder.MAX_GENERATIONS_RECOMMENDED = 5;
class FSXAncestryBuilder extends FSXPedigreeBuilder {
    getMaxGenerations() {
        return FSXAncestryBuilder.MAX_GENERATIONS_PER_CALL;
    }
    getMaxRecommendedGenerations() {
        return FSXAncestryBuilder.MAX_GENERATIONS_RECOMMENDED;
    }
    runGenerations(pid, generations) {
        return new Promise((resolve, reject) => {
            this.fsx.getPersonWithAncestry(this.pid, (error, response) => {
                if (error) {
                    reject(error);
                    return;
                }
                if (!!response.data) { // Check for JSON data.
                    resolve(this.connectAncestryData(response.data.persons, generations));
                    return;
                }
                resolve();
            }, generations, "", true, false, true);
        });
    }
    connectAncestryData(people, generations) {
        let leaves = [];
        let ahnenMap = {};
        // Cache, fill out the relationship areas, and store the descendancyNumber;
        people.forEach((subject) => {
            if (!this.cache[subject.id]) {
                this.cache[subject.id] = subject;
            }
            this.addRelationshipArrays(subject);
            ahnenMap[subject.display.ascendancyNumber] = subject.id;
        });
        let ahnen, ahnenNumber, parentAAhnen, parentBAhnen, spouseAhnen, parentAId, parentBId, spouseId, parentA, parentB, spouse;
        let i = 0;
        people.forEach((subject) => {
            ahnen = subject.display.ascendancyNumber;
            if (FSXdAbovilleParser.isSpouse(ahnen)) {
                let spouseAhnen = FSXdAbovilleParser.toggleSpouse(ahnen);
                this.addSpouse(subject, spouseAhnen);
                this.addSpouse(this.cache[ahnenMap[spouseAhnen]], ahnen);
                return;
            }
            ahnenNumber = parseInt(ahnen);
            parentAId = ahnenMap[ahnenNumber * 2];
            parentBId = ahnenMap[ahnenNumber * 2 + 1];
            spouseId = ahnenMap[FSXdAbovilleParser.toggleSpouse(ahnen)];
            if (!!parentAId) { // If the first parent exists, add this person as a child
                parentA = this.cache[parentAId];
                this.addChild(parentA, parentBId, subject.id);
            }
            if (!!parentBId) { // If the second parent exists, add this person as a child
                parentB = this.cache[parentBId];
                this.addChild(parentB, parentAId, subject.id);
            }
            if (!!parentAId || !!parentBId) { // If either parent exists, add them
                this.addParents(subject, parentAId, parentBId);
            }
            else if (ahnenNumber >= (i = Math.pow(2, generations)) && ahnenNumber < 2 * i) {
                leaves.push(subject.id);
            }
            if (!!spouseId) { // If the spouse exists, add them as a spouse.
                spouse = this.cache[spouseId];
                this.addSpouse(subject, spouseId);
            }
        });
        return {
            allPeople: people,
            leafIds: leaves
        };
    }
}
FSXAncestryBuilder.MAX_GENERATIONS_PER_CALL = 8;
FSXAncestryBuilder.MAX_GENERATIONS_RECOMMENDED = 16;
// #endregion


/***/ }),

/***/ 9941:
/*!*********************************************!*\
  !*** ./src/app/familySearchX/docCookies.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "docCookies": () => (/* binding */ docCookies)
/* harmony export */ });
/*\
|*|
|*|  :: cookies.js ::
|*|
|*|  A complete cookies reader/writer framework with full unicode support.
|*|
|*|  Revision #3 - July 13th, 2017
|*|
|*|  https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
|*|  https://developer.mozilla.org/User:fusionchess
|*|  https://github.com/madmurphy/cookies.js
|*|
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
|*|  Syntaxes:
|*|
|*|  * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
|*|  * docCookies.getItem(name)
|*|  * docCookies.removeItem(name[, path[, domain]])
|*|  * docCookies.hasItem(name)
|*|  * docCookies.keys()
|*|
\*/
var docCookies = {
    getItem: function (sKey) {
        if (!sKey) {
            return null;
        }
        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },
    setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
            return false;
        }
        var sExpires = "";
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                    /*
                    Note: Despite officially defined in RFC 6265, the use of `max-age` is not compatible with any
                    version of Internet Explorer, Edge and some mobile browsers. Therefore passing a number to
                    the end parameter might not work as expected. A possible solution might be to convert the the
                    relative time to an absolute time. For instance, replacing the previous line with:
                    */
                    /*
                    sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; expires=" + (new Date(vEnd * 1e3 + Date.now())).toUTCString();
                    */
                    break;
                case String:
                    sExpires = "; expires=" + vEnd;
                    break;
                case Date:
                    sExpires = "; expires=" + vEnd.toUTCString();
                    break;
            }
        }
        let cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
        document.cookie = cookie;
        return true;
    },
    removeItem: function (sKey, sPath, sDomain) {
        if (!this.hasItem(sKey)) {
            return false;
        }
        document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
        return true;
    },
    hasItem: function (sKey) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
            return false;
        }
        return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    },
    keys: function () {
        var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
            aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
        }
        return aKeys;
    }
};


/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_links_links_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/links/links.service */ 3730);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ 6131);




function FooterComponent_div_1_mat_list_item_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-item", 6)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const link_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", link_r3.href, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](link_r3.name);
} }
function FooterComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FooterComponent_div_1_mat_list_item_4_Template, 3, 2, "mat-list-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const section_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](section_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", section_r1.links);
} }
/**
 * Footer page for displaying links to the other fhtl websites.
 */
class FooterComponent {
    constructor(links) {
        this.links = links;
        this.footer = [
            {
                title: 'Support Fhtl',
                links: [
                    {
                        href: links.FHTL.home,
                        name: 'Home'
                    },
                    {
                        href: links.FHTL.contact,
                        name: 'Contact'
                    },
                    {
                        href: links.FHTL.people,
                        name: 'People'
                    },
                    {
                        href: links.FHTL.donate,
                        name: 'Donate'
                    }
                ]
            },
            {
                title: 'Research',
                links: [
                    {
                        href: links.FHTL.relativeFinder,
                        name: 'Relative Finder'
                    },
                    {
                        href: links.FHTL.virtualPedigreee,
                        name: 'Virtual Pedigree'
                    },
                    {
                        href: links.FHTL.descendancyExplorer,
                        name: 'Descendancy Explorer'
                    },
                    {
                        href: links.FHTL.treeSweeper,
                        name: 'Tree Sweeper'
                    } //TODO add brownie in the future
                ]
            },
            {
                title: 'Visualize',
                links: [
                    {
                        href: links.FHTL.pedigreePie,
                        name: 'Pedigree Pie'
                    },
                    {
                        href: links.FHTL.onePageGenealogy,
                        name: 'One Page Genealogy'
                    },
                    {
                        href: links.FHTL.familyCalendar,
                        name: 'Family Calendar'
                    }
                ]
            },
            {
                title: 'Play',
                links: [
                    {
                        href: links.FHTL.geneopardy,
                        name: 'Geneopardy'
                    },
                    {
                        href: links.FHTL.wheelOfFamilyFortune,
                        name: 'Wheel of Family Fortune'
                    },
                    {
                        href: links.FHTL.ancestorGames,
                        name: 'Ancestor Games'
                    },
                    {
                        href: links.FHTL.recordQuest,
                        name: 'Record Quest'
                    }
                ]
            }
        ];
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_links_links_service__WEBPACK_IMPORTED_MODULE_0__.LinksService)); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 1, consts: [[1, "section-holder"], ["class", "column", 4, "ngFor", "ngForOf"], [1, "column"], [1, "section-title"], ["dense", ""], ["class", "link-item", 4, "ngFor", "ngForOf"], [1, "link-item"], ["target", "_blank", 1, "fhtl-link", 3, "href"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FooterComponent_div_1_Template, 5, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.footer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItem], styles: [".section-title[_ngcontent-%COMP%] {\r\n    padding-left: 14px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: lighter;\r\n    color: white;\r\n    margin: 0;\r\n    font-size: 22px;\r\n}\r\n\r\n.fhtl-link[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: 14px;\r\n    text-decoration: none;\r\n}\r\n\r\n.fhtl-link[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.section-holder[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    background-color: #3f51b5; \r\n    padding: 30px;\r\n}\r\n\r\n.column[_ngcontent-%COMP%] {\r\n    display: block;\r\n    padding: 0px 30px;\r\n}\r\n\r\n.link-item[_ngcontent-%COMP%] {\r\n    height: 30px !important;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n    .section-holder[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n    .column[_ngcontent-%COMP%] {\r\n        padding-bottom: 20px;\r\n        width: 50%;\r\n        display: inline-block;\r\n        box-sizing: border-box;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 620px) {\r\n    .section-holder[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n    .column[_ngcontent-%COMP%] {\r\n        padding-bottom: 20px;\r\n        display: block;\r\n        margin: auto;\r\n        width: 250px; \r\n    }\r\n    .link-item[_ngcontent-%COMP%] {\r\n        height: 24px !important;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlDQUF5QztJQUN6QyxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHlCQUF5QixFQUFFLHNEQUFzRDtJQUNqRixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLFVBQVU7UUFDVixxQkFBcUI7UUFDckIsc0JBQXNCO0lBQzFCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixjQUFjO1FBQ2QsWUFBWTtRQUNaLFlBQVksRUFBRSwyQ0FBMkM7SUFDN0Q7SUFDQTtRQUNJLHVCQUF1QjtJQUMzQjtBQUNKIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLmZodGwtbGluayB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5maHRsLWxpbms6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn0gXHJcblxyXG4uc2VjdGlvbi1ob2xkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTsgLyogVXBkYXRlIGFzIG5lZWRlZCB0byBtYXRjaCB0aGUgY2hvc2VuIGNvbG9yIHNjaGVtZSAqL1xyXG4gICAgcGFkZGluZzogMzBweDtcclxufVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDBweCAzMHB4O1xyXG59XHJcblxyXG4ubGluay1pdGVtIHtcclxuICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLnNlY3Rpb24taG9sZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5jb2x1bW4ge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XHJcbiAgICAuc2VjdGlvbi1ob2xkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmNvbHVtbiB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDsgLypUaGlzIG51bWJlciBpcyBzZW1pLWhhcmRjb2RlZCwgYnV0IHdvcmtzKi9cclxuICAgIH1cclxuICAgIC5saW5rLWl0ZW0ge1xyXG4gICAgICAgIGhlaWdodDogMjRweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 8752:
/*!********************************************************!*\
  !*** ./src/app/instructions/instructions.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstructionsComponent": () => (/* binding */ InstructionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 7317);



class InstructionsComponent {
    constructor() { }
    ngOnInit() {
    }
}
InstructionsComponent.ɵfac = function InstructionsComponent_Factory(t) { return new (t || InstructionsComponent)(); };
InstructionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstructionsComponent, selectors: [["app-instructions"]], decls: 22, vars: 0, consts: [["mat-title", ""], ["href", "https://docs.google.com/document/d/1MMoN7U5eNtrz3Yv3hnWjeRGs5ijwztg19QjNG_bQ4d8/edit", "target", "_blank", "rel", "noreferrer noopener"], ["href", "https://youtu.be/xtmXtmdxjNk", "target", "_blank", "rel", "noreferrer noopener"], ["mat-button", "", "mat-dialog-close", ""]], template: function InstructionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Map App Instructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The Map App is a way of accessing customized family history hints based on a person's surname or the county they lived in.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol")(5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Using the options button, choose what kind of task hint you want to generate. By default this application returns record attachment hints that can be broken down into three difficulty categories.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Start by typing a surname or county a person lived in and pressing the search button. The application will load up to 200 results for your search.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Click on one of the marker pins you want to work on. Click the blue text with the surname and place and it will take you directly to the FamilySearch sourcelinker on your browser. The first time you do this, you will need to log in to FamilySearch.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Once you are in sourcelinker, compare the record information (which is on the left of the screen) with the information about the person on the Family Tree (which is on the right of the screen) and decide if the record should be attached. If you think it is a match, click \u201Ccompare\u201D, then \u201Cadd\u201D to move the residence information over to the tree, and then \u201Cattach\u201D.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\nFor detailed instructions, click ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\nand a help video can be found ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-dialog-actions")(20, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0cnVjdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 2761:
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 5836);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/backend.service */ 600);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 5758);





/*
interface search {
  projectName: string,
  name: string,
  loc: string,
  option: any,
  difficulty: any
}
*/
/**
 * MapComponent
 * @param showSearch determines if search component is shown
 * @param map map configuration
 * @param defaultIcon attributes common to each icon
 * @param easyIcon sets icon color for easy record attachments
 * @param mediumIcon sets icon color for medium record attachments
 * @param hardIcon sets icon color for hard record attachments
 * @param icons markers for the map
 * @param startingCoords default latitude and longitude position
 * @param startingZoom default zoom
 * @param searchType the type of record
 */
class MapComponent {
    constructor(backendService, blankSearchMessage, popupWarning) {
        this.backendService = backendService;
        this.blankSearchMessage = blankSearchMessage;
        this.popupWarning = popupWarning;
        this.showSearch = false;
        this.showPopup = false;
        this.tabError = false;
        this.numTabs = 5;
        this.map = null;
        this.defaultIcon = null;
        this.easyIcon = null;
        this.mediumIcon = null;
        this.hardIcon = null;
        this.icons = new leaflet__WEBPACK_IMPORTED_MODULE_0__.layerGroup();
        this.startingCoords = [40, -100];
        this.startingZoom = 5; //The higher the number the more zoomed in
        this.searchZoom = 3;
        this.searchType = "Record Attachment";
        this.preserveScroll = false;
        this.currentData = null;
        this.hintCount = 0;
        this.projectShown = false;
    }
    ngAfterViewInit() {
        this.initMap();
        this.configureIcon();
        this.addPins();
    }
    /**
     * Generates the Map
     * */
    initMap() {
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_0__.map("map", {
            center: this.startingCoords,
            zoom: this.startingZoom,
            zoomControl: false,
            tap: false,
        });
        const tiles = leaflet__WEBPACK_IMPORTED_MODULE_0__.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 18,
            minZoom: 3,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        });
        tiles.addTo(this.map);
        //So the user cannot scroll off of the map
        //Numbers derived from Leaflet website
        this.map.setMaxBounds([
            [256, 256],
            [-256, -256],
        ]);
        //Set zoom in, zoom out buttons to be in the top right, hides zoom buttons in mobile
        if (!leaflet__WEBPACK_IMPORTED_MODULE_0__.Browser.mobile) {
            leaflet__WEBPACK_IMPORTED_MODULE_0__.control.zoom({
                position: "topright",
            })
                .addTo(this.map);
        }
    }
    /**
     * Sets attributes for the icon to be
     * displayed when showing records
     * */
    configureIcon() {
        this.defaultIcon = leaflet__WEBPACK_IMPORTED_MODULE_0__.icon({
            iconUrl: "../assets/icons/mapIcon.png",
            iconSize: [45, 45],
            iconAnchor: [22.5, 45],
            popupAnchor: [0, -40],
        });
        this.easyIcon = leaflet__WEBPACK_IMPORTED_MODULE_0__.icon({
            iconUrl: "../assets/icons/greenIcon.png",
            iconSize: [45, 45],
            iconAnchor: [22.5, 45],
            popupAnchor: [0, -40],
        });
        this.mediumIcon = leaflet__WEBPACK_IMPORTED_MODULE_0__.icon({
            iconUrl: "../assets/icons/blueIcon.png",
            iconSize: [45, 45],
            iconAnchor: [22.5, 45],
            popupAnchor: [0, -40],
        });
        this.hardIcon = leaflet__WEBPACK_IMPORTED_MODULE_0__.icon({
            iconUrl: "../assets/icons/purpleIcon.png",
            iconSize: [45, 45],
            iconAnchor: [22.5, 45],
            popupAnchor: [0, -40],
        });
    }
    /**
      *Adds pins for each of the connected websites
    **/
    addPins() {
        let data = [
            { "url": "http://connectedtempe.surge.sh/", "latitude": 33.41, "longitude": -111.94, "state": "Arizona", "county": "Early Tempe" },
            { "url": "http://connectedus.surge.sh/", "latitude": 38.89, "longitude": -77.03, "state": "Famous People", "county": "USA" },
            { "url": "http://connectedherriman.surge.sh/", "latitude": 40.51, "longitude": -112.03, "state": "Utah", "county": "Herriman" },
            { "url": "http://connectedcody.surge.sh/", "latitude": 44.52, "longitude": -109.05, "state": "Wyoming", "county": "Cody" },
            { "url": "http://connectedmesa.surge.sh/", "latitude": 33.41, "longitude": -111.83, "state": "Arizona", "county": "Mesa" }
        ];
        let results = data;
        this.currentData = results;
        for (let i = 0; i < results.length; i++) {
            var marker = leaflet__WEBPACK_IMPORTED_MODULE_0__.marker([results[i].latitude, results[i].longitude], {
                icon: this.defaultIcon,
            });
            //Prevents popups from displaying null as locations
            if (results[i].state == null) {
                results[i].state = "";
            }
            if (results[i].county == null) {
                results[i].state = "";
            }
            var popupContent = `<b>
      <a class="popup-click" href="${results[i].url}" target='_blank' rel='noreferrer noopener'>
      </br>${results[i].county}, ${results[i].state}
      </a>

      </b>`;
            marker.bindPopup(popupContent);
            this.icons.addLayer(marker);
        }
        this.icons.addTo(this.map);
    }
    /**
     * Called whenever the page is clicked. Only used to identify when a popup is clicked to perform a backend call.
     *
     */
    pageClicked(event) {
        var _a;
        let classes = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.classList;
        if (classes == null || !classes.contains("popup-click"))
            return;
        let url = event.target.href;
        let hint = event.target.childNodes[1].innerText;
        //this.backendService.updateUrl(url, hint);
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_backend_service__WEBPACK_IMPORTED_MODULE_1__.BackendService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog)); };
MapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], decls: 2, vars: 0, consts: [[1, "map-container"], ["id", "map", 3, "click"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MapComponent_Template_div_click_1_listener($event) { return ctx.pageClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } }, styles: [".map-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  \r\n  touch-action: none;\r\n}\r\n\r\n#map[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\n.search-icon[_ngcontent-%COMP%] {\r\n  filter: invert(100%);\r\n  width: auto;\r\n  height: 80px;\r\n  display: block;\r\n}\r\n\r\n.refresh-icon[_ngcontent-%COMP%] {\r\n  font-size: 50px;\r\n  height: 50px;\r\n  width: 50px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  background-color: #002e5d;\r\n  width: 100px;\r\n  height: 100px;\r\n  margin: 50px;\r\n  padding: 50px;\r\n}\r\n\r\n.search-button[_ngcontent-%COMP%] {\r\n  background-color: #002e5d;\r\n  display: flex;\r\n  position: relative;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 2;\r\n}\r\n\r\n#justify[_ngcontent-%COMP%] {\r\n  transition: transform .5s;\r\n}\r\n\r\n#justify[_ngcontent-%COMP%]:hover {\r\n  transform: scaleX(.95) scaleY(.95) scaleZ(.95);\r\n  background-color: #003c77;\r\n}\r\n\r\n#justify[_ngcontent-%COMP%]:hover   #joseph-smith[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n#justify[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.button-text[_ngcontent-%COMP%] {\r\n  display: none;\r\n  font-size: 20px;\r\n  text-align: center;\r\n  margin-top: 12px;\r\n}\r\n\r\n#reset-text[_ngcontent-%COMP%] {\r\n  display: none;\r\n  font-size: 20px;\r\n  text-align: center;\r\n  margin-top: 12px;\r\n}\r\n\r\n.tab-button[_ngcontent-%COMP%] {\r\n  background-color: #002e5d;\r\n  display: flex;\r\n  position: relative;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 150px;\r\n  height: 25px;\r\n  padding: 25px;\r\n  margin: 10px 50px 50px 0;\r\n}\r\n\r\n#tab-field[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n}\r\n\r\n.mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%] {\r\n  background-color: rgba(255, 255, 255, .5) !important;\r\n}\r\n\r\n.count-label[_ngcontent-%COMP%] {\r\n  left: 0;\r\n  bottom: 0;\r\n  position: absolute;\r\n  margin: 25px;\r\n}\r\n\r\n.count-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  padding: 10px;\r\n  background-color: rgba(0, 0, 0, .1);\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCwrQ0FBK0M7RUFDL0Msa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLE9BQU87RUFDUCxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUNBQW1DOztBQUVyQyIsImZpbGUiOiJtYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIC8qIFRvIHByZXZlbnQgYXV0by1zY3JvbGwgYmVoYXZpb3Igb24gYnJvd3NlciAqL1xyXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcclxufVxyXG5cclxuI21hcCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2VhcmNoLWljb24ge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogODBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnJlZnJlc2gtaWNvbiB7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyZTVkO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG1hcmdpbjogNTBweDtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMmU1ZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbiNqdXN0aWZ5IHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzO1xyXG59XHJcblxyXG4janVzdGlmeTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLjk1KSBzY2FsZVkoLjk1KSBzY2FsZVooLjk1KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzYzc3O1xyXG59XHJcblxyXG4janVzdGlmeTpob3ZlciAjam9zZXBoLXNtaXRoIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4janVzdGlmeTpob3ZlciBwIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmJ1dHRvbi10ZXh0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG5cclxuI3Jlc2V0LXRleHQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcblxyXG4udGFiLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMmU1ZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBtYXJnaW46IDEwcHggNTBweCA1MHB4IDA7XHJcbn1cclxuXHJcbiN0YWItZmllbGQge1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpICFpbXBvcnRhbnQ7XHJcbn0gXHJcblxyXG4uY291bnQtbGFiZWwge1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW46IDI1cHg7XHJcbn1cclxuXHJcbi5jb3VudC1sYWJlbCBwIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4xKTtcclxuXHJcbn0iXX0= */"] });


/***/ }),

/***/ 898:
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ 3346);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tree */ 4972);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ 3188);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ 1196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

















class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__.MatProgressSpinnerModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenavModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__.MatGridListModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBarModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule,
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_14__.MatTreeModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule,
        ], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__.MatProgressSpinnerModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenavModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__.MatGridListModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBarModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_14__.MatTreeModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__.MatProgressSpinnerModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenavModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__.MatGridListModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBarModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_14__.MatTreeModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__.MatProgressSpinnerModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenavModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__.MatGridListModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBarModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_14__.MatTreeModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule] }); })();


/***/ }),

/***/ 1942:
/*!**********************************************************!*\
  !*** ./src/app/popup-warning/popup-warning.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupWarningComponent": () => (/* binding */ PopupWarningComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/chips */ 1196);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 7317);




class PopupWarningComponent {
    constructor() { }
    ngOnInit() {
    }
}
PopupWarningComponent.ɵfac = function PopupWarningComponent_Factory(t) { return new (t || PopupWarningComponent)(); };
PopupWarningComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopupWarningComponent, selectors: [["app-popup-warning"]], decls: 22, vars: 0, consts: [["mat-title", ""], [1, "center"], [2, "display", "inline"], ["target", "_blank", "href", "https://support.google.com/chrome/answer/95472?hl=en&co=GENIE.Platform%3DDesktop"], ["target", "_blank", "href", "https://support.mozilla.org/en-US/kb/pop-blocker-settings-exceptions-troubleshooting"], ["target", "_blank", "href", "https://support.apple.com/guide/safari/block-pop-ups-sfri40696/mac"], ["target", "_blank", "href", "https://support.microsoft.com/en-us/Search/results?query=enable+popups"], ["mat-button", "", "mat-dialog-close", ""]], template: function PopupWarningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pop-ups Blocked!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content")(3, "div")(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Please adjust your browser settings to allow pop-ups in order to use this feature. If you need help enabling pop-ups, please see the help references for your specific browser below: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-chip-list", 1)(7, "mat-chip", 2)(8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Chrome (recommended browser)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-chip", 2)(11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Firefox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-chip", 2)(14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Safari");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-chip", 2)(17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Edge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-dialog-actions")(20, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__.MatChip, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose], styles: [".center[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  font-size: medium;\r\n  color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwLXdhcm5pbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkIiwiZmlsZSI6InBvcHVwLXdhcm5pbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmEge1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 6392:
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instructions/instructions.component */ 8752);
/* harmony import */ var _search_communityProjects_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search/communityProjects.json */ 799);
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/backend.service */ 600);
/* harmony import */ var _services_filter_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/filter-state.service */ 2936);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ 3188);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 8133);



















function SearchComponent_mat_icon_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "keyboard_arrow_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SearchComponent_mat_list_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-list-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r9, " ");
} }
function SearchComponent_div_20_mat_list_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-list-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const diffi_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", diffi_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", diffi_r12, " ");
} }
function SearchComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34)(1, "mat-selection-list", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SearchComponent_div_20_Template_mat_selection_list_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.difficulty = $event; })("selectionChange", function SearchComponent_div_20_Template_mat_selection_list_selectionChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.updateDiff(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SearchComponent_div_20_mat_list_option_3_Template, 2, 2, "mat-list-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r3.difficulty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.difficultyList);
} }
function SearchComponent_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r16, " ");
} }
function SearchComponent_mat_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r17, " ");
} }
function SearchComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SearchComponent_div_44_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const proj_r18 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.projectClicked(proj_r18.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const proj_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](proj_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](proj_r18.description);
} }
/**SearchComponent
 * @param surname the name to search by
 * @param location the location to search by
 * @param ...
 * @param suggestTimer used to only give suggestions when the user stops typing
 * @param waitInterval the amount of time to wait between typing and giving suggestions
 * */
class SearchComponent {
    constructor(backendService, filterService, emptySearchMessage, instructions) {
        this.backendService = backendService;
        this.filterService = filterService;
        this.emptySearchMessage = emptySearchMessage;
        this.instructions = instructions;
        this.surname = "";
        this.location = "";
        this.option = ["Record Attachment"];
        this.difficulty = ["Easy", "Medium"];
        this.autocomplete = [];
        this.waitInterval = 150; //modify this number to change the speed of autocomplete
        this.panelOpenState = false;
        this.projectName = "";
        this.projects = _search_communityProjects_json__WEBPACK_IMPORTED_MODULE_1__;
        this.searchToMap = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.searchProjects = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        // this.menuList = [
        //   "Record Attachment",
        //   "Possible Duplicates",
        //   "Connect Families",
        //   "Find Death Dates",
        // ];
        this.menuList = ["Record Attachment"];
        this.difficultyList = ["Easy", "Medium", "Hard"];
        //this.difficultyList = ["Easier", "Normal", "Harder"];
    }
    ngOnInit() {
        this.difficulty = this.filterService.getDiff();
        this.option = [this.filterService.getType()];
    }
    updateDiff() {
        console.log("Change Diff");
        this.filterService.changeDiff(this.difficulty);
    }
    updateType() {
        console.log("Change Type");
        this.filterService.changeType(this.option[0]);
    }
    /**
     * Opens the Instructions Component as Mat-Dialog
     * */
    displayInstructions() {
        this.instructions.open(_instructions_instructions_component__WEBPACK_IMPORTED_MODULE_0__.InstructionsComponent, {
            panelClass: "helpDialog",
            autoFocus: false, //prevents scrolling to the bottom upon opening
        });
    }
    getSuggestionsName() {
        //reset timer
        clearTimeout(this.suggestTimer);
        if (this.surname === "") {
            this.autocomplete = [];
            return;
        }
        this.suggestTimer = setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let suggestions = yield this.backendService.getSuggestName(this.surname, "", this.difficulty, this.option[0]);
            let temp = [];
            for (let i = 0; i < suggestions.body.length; i++) {
                if (i >= 10) {
                    break;
                }
                let record = suggestions.body[i];
                temp.push(record.surname);
            }
            this.autocomplete = temp;
        }), this.waitInterval);
    }
    getSuggestionsLocation() {
        //reset timer
        clearTimeout(this.suggestTimer);
        if (this.location === "") {
            this.autocomplete = [];
            return;
        }
        this.suggestTimer = setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let suggestions = yield this.backendService.getSuggestLoc("", this.location, this.difficulty, this.option[0]);
            let temp = [];
            /*
            for (let i = 0; i < suggestions.body.length; i++) {
              if (i >= 10) {
                break;
              }
              let record = suggestions.body[i];
              if (record.state == null && record.county == null) {
                continue;
              } else if (record.state == null) {
                temp.push(record.county);
              } else if (record.county == null) {
                temp.push(record.state);
              } else {
                temp.push(record.county + ", " + record.state);
              }
            }
            */
            //New way, might have some bugs but works for now
            for (let i = 0; i < suggestions.body.length; ++i) {
                temp.push(suggestions.body[i]);
            }
            this.autocomplete = temp;
        }), this.waitInterval);
    }
    clearSuggestions() {
        this.autocomplete = [];
    }
    showProjects() {
        //console.log("SHOW PROJECTS");
        document.getElementById("project-tab").style.backgroundColor = "#f5f5f5";
        document.getElementById("search-tab").style.backgroundColor = "#d8d8d8";
        document.getElementById("search-display").style.display = "none";
        document.getElementById("project-display").style.display = "block";
    }
    showSearch() {
        //console.log("SHOW SEARCH");
        document.getElementById("search-tab").style.backgroundColor = "#f5f5f5";
        document.getElementById("project-tab").style.backgroundColor = "#d8d8d8";
        document.getElementById("project-display").style.display = "none";
        document.getElementById("search-display").style.display = "block";
    }
    populateMap() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.surname === "" && this.location === "") {
                this.emptySearchMessage.open("Please Enter a Name or Location", "Dismiss", { duration: 3000, panelClass: ["warning-snackbar"] });
                return;
            }
            this.emptySearchMessage.dismiss();
            this.searchToMap.emit({
                name: this.surname,
                loc: this.location,
                option: this.option[0],
                difficulty: this.difficulty,
            });
        });
    }
    projectClicked(name = "") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log("a project was clicked, emitting");
            this.projectName = name;
            this.searchProjects.emit({
                projectName: this.projectName,
                name: this.surname,
                loc: this.location,
                option: this.option[0],
                difficulty: this.difficulty,
            });
        });
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_backend_service__WEBPACK_IMPORTED_MODULE_2__.BackendService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_filter_state_service__WEBPACK_IMPORTED_MODULE_3__.FilterStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog)); };
SearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], outputs: { searchToMap: "searchToMap", searchProjects: "searchProjects" }, decls: 63, vars: 12, consts: [["id", "flex-container"], [1, "main-container"], [1, "title-container"], ["id", "search-display", 1, "body-content"], ["mat-button", "", 3, "click"], ["hideToggle", "", 1, "options-panel,", "mat-elevation-z0", 3, "opened", "closed"], ["class", "arrow-icon", 4, "ngIf"], [1, "panel-title"], [3, "multiple", "ngModel", "ngModelChange", "selectionChange"], ["options", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "difficulty", 4, "ngIf"], [1, "inputs"], ["appearance", "outline"], ["matInput", "", "placeholder", "Price", 3, "ngModel", "matAutocomplete", "keyup", "keydown.enter", "focus", "ngModelChange"], ["auto", "matAutocomplete"], ["matInput", "", "placeholder", "Denton, Texas", 3, "ngModel", "matAutocomplete", "keyup", "keydown.enter", "focus", "ngModelChange"], ["id", "project-display", 1, "body-content"], [1, "all-project-container"], ["class", "project-container", 3, "click", 4, "ngFor", "ngForOf"], [1, "scroll-cue"], [1, "scroll-text"], ["src", "https://s3.us-west-2.amazonaws.com/map-app.familytech.byu.edu/51-519289_down-arrow-png-image-background-black-arrow-down.png", "alt", "", 1, "scroll-img"], [1, "footer-container"], ["src", "../../assets/images/byuLogo.png", "alt", "BYU Logo"], [1, "labLinks"], ["href", "https://rll.byu.edu", "target", "_blank", "rel", "noreferrer noopener"], ["href", "https://familytech.byu.edu", "target", "_blank", "rel", "noreferrer noopener"], ["id", "tab-container"], ["id", "search-tab", 1, "tab", "search", 3, "click"], ["id", "search-tab-text"], ["id", "project-tab", 1, "tab", "project", 3, "click"], [1, "arrow-icon"], [3, "value"], [1, "difficulty"], [3, "ngModel", "ngModelChange", "selectionChange"], ["diff", ""], [1, "project-container", 3, "click"], [1, "project-title"], [1, "project-description"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Customized Family History Hints");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3)(5, "h3")(6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Welcome to the Map App!");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Generate customized record hints based on a person's surname or the county they lived in. Filter by difficulty or type of hints using the options button ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_10_listener() { return ctx.displayInstructions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Detailed Instructions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-expansion-panel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("opened", function SearchComponent_Template_mat_expansion_panel_opened_12_listener() { return ctx.panelOpenState = true; })("closed", function SearchComponent_Template_mat_expansion_panel_closed_12_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, SearchComponent_mat_icon_14_Template, 2, 0, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-panel-title", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " Options ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-selection-list", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_mat_selection_list_ngModelChange_17_listener($event) { return ctx.option = $event; })("selectionChange", function SearchComponent_Template_mat_selection_list_selectionChange_17_listener() { return ctx.updateType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, SearchComponent_mat_list_option_19_Template, 2, 2, "mat-list-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, SearchComponent_div_20_Template, 4, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 12)(23, "mat-form-field", 13)(24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Surname");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function SearchComponent_Template_input_keyup_26_listener() { return ctx.getSuggestionsName(); })("keydown.enter", function SearchComponent_Template_input_keydown_enter_26_listener() { return ctx.populateMap(); })("focus", function SearchComponent_Template_input_focus_26_listener() { return ctx.clearSuggestions(); })("ngModelChange", function SearchComponent_Template_input_ngModelChange_26_listener($event) { return ctx.surname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-autocomplete", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, SearchComponent_mat_option_29_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-form-field", 13)(31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function SearchComponent_Template_input_keyup_33_listener() { return ctx.getSuggestionsLocation(); })("keydown.enter", function SearchComponent_Template_input_keydown_enter_33_listener() { return ctx.populateMap(); })("focus", function SearchComponent_Template_input_focus_33_listener() { return ctx.clearSuggestions(); })("ngModelChange", function SearchComponent_Template_input_ngModelChange_33_listener($event) { return ctx.location = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "mat-autocomplete", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, SearchComponent_mat_option_36_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_37_listener() { return ctx.populateMap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 17)(40, "h3")(41, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Participate in One of Our Projects!");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, SearchComponent_div_44_Template, 5, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 20)(46, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "SCROLL");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 25)(52, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Record Linking Lab");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Family History Technology Lab");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 28)(57, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SearchComponent_Template_div_click_57_listener() { return ctx.showSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SearchComponent_Template_div_click_60_listener() { return ctx.showProjects(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.panelOpenState);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("multiple", false)("ngModel", ctx.option);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.menuList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (_r1.selectedOptions.selected[0] == null ? null : _r1.selectedOptions.selected[0].value) === "Record Attachment");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.surname)("matAutocomplete", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.autocomplete);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.location)("matAutocomplete", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.autocomplete);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionPanelHeader, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionPanelTitle, _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatSelectionList, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatListOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocompleteTrigger, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption], styles: [".main-container[_ngcontent-%COMP%] {\r\n    z-index: 2;\r\n    border-radius: 25px;\r\n    max-width: 400px;\r\n    background: rgb(248, 248, 248);\r\n    box-shadow: 5px 5px 15px rgb(0 0 0 / 30%);\r\n    \r\n    max-height: 95%;\r\n    overflow-y: auto;\r\n\r\n    \r\n    -ms-overflow-style: none;  \r\n    scrollbar-width: none;  \r\n}\r\n\r\n\r\n\r\n.main-container[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.footer-container[_ngcontent-%COMP%], .title-container[_ngcontent-%COMP%] {\r\n    color: rgb(248, 248, 248);\r\n    background-color: #002E5D;\r\n    text-align: center;\r\n}\r\n\r\n.footer-text[_ngcontent-%COMP%]{\r\n    color: rgb(248, 248, 248);\r\n    text-decoration: none;\r\n    text-align: center;\r\n}\r\n\r\n.footer-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    margin:0;\r\n}\r\n\r\n.title-container[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    margin: 0;\r\n    font-size: 24px;\r\n    font-weight: 400 !important; \r\n    border-top-left-radius: 25px;\r\n    border-top-right-radius: 25px;\r\n}\r\n\r\n.body-content[_ngcontent-%COMP%] {\r\n    \r\n    padding: 10px 5px 10px 5px;\r\n    text-align: center;\r\n}\r\n\r\n.body-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    padding-bottom: 5px;\r\n    margin: 0;\r\n    border-radius: 1px solid black;\r\n    font-size: large;\r\n}\r\n\r\n.inputs[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.footer-container[_ngcontent-%COMP%] {\r\n    border-bottom-left-radius: 25px;\r\n    border-bottom-right-radius: 25px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.footer-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color:rgb(248, 248, 248);\r\n}\r\n\r\n.footer-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.footer-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-height: 40px;\r\n    padding-bottom: 5px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.labLinks[_ngcontent-%COMP%] {\r\n    \r\n    padding: 5px 10px 5px 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: left;\r\n}\r\n\r\n#tab-container[_ngcontent-%COMP%] {\r\n    z-index: 2;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: auto;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%] {\r\n    background: #f5f5f5;\r\n    border-radius: 0px 13px 13px 0px;\r\n    width: 35px;\r\n    height: 100px;\r\n    border: solid 1px #bdbdbd;\r\n    box-shadow: 5px 5px 15px rgb(0 0 0 / 30%);\r\n    \r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    writing-mode: vertical-rl;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.search[_ngcontent-%COMP%] {\r\n    margin-top: 38px;\r\n}\r\n\r\n.project[_ngcontent-%COMP%] {\r\n    background-color: #d8d8d8;\r\n}\r\n\r\n#project-display[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.all-project-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    overflow-y: auto;\r\n    height: 329px;\r\n}\r\n\r\n.project-container[_ngcontent-%COMP%] {\r\n    border: 0.5px solid #D9D9D9;\r\n    border-radius: 8px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.project-container[_ngcontent-%COMP%]:hover {\r\n    background: #F0F0F0;\r\n}\r\n\r\n.project-title[_ngcontent-%COMP%] {\r\n   text-align: left;\r\n   font-size: 18px;\r\n   margin-left: 10px;\r\n   margin-right: 10px;\r\n   margin-top: 10px;\r\n   margin-bottom: 3px;\r\n}\r\n\r\n.project-description[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    margin: 0;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n#search-tab-text[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    text-align: center;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-weight: bold;\r\n}\r\n\r\n#flex-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex: row;\r\n    position: absolute;\r\n    transform: translate(-50%, -50%);\r\n    display: flex;\r\n    flex-direction: row;\r\n    left: 50%;\r\n    top: 50%;\r\n}\r\n\r\n.scroll-text[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    margin-bottom: 5px;\r\n    margin-top: 2px;\r\n    letter-spacing: 0.08em;\r\n    \r\n}\r\n\r\n.scroll-cue[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: 100%;\r\n    justify-content: center;\r\n    opacity: 50%\r\n}\r\n\r\n.scroll-img[_ngcontent-%COMP%] {\r\n    width: 25px;\r\n    height: 10px;\r\n    margin-bottom: 5px;\r\n    margin-top: 4px;\r\n    -webkit-animation: pulse 3s ease-out infinite;\r\n            animation: pulse 3s ease-out infinite;\r\n  }\r\n\r\n@-webkit-keyframes pulse {\r\n    0% {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n    50% {\r\n      opacity: .8;\r\n      transform: translateY(5px);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n\r\n@keyframes pulse {\r\n    0% {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n    50% {\r\n      opacity: .8;\r\n      transform: translateY(5px);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n.panel-title[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-weight: 500;\r\n}\r\n\r\n.mat-expansion-panel[_ngcontent-%COMP%] {\r\n    background-color: rgb(248, 248, 248);\r\n}\r\n\r\n.mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded)   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover {\r\n    background: rgb(248, 248, 248);\r\n}\r\n\r\n.arrow-icon[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 25px;\r\n}\r\n\r\n\r\n\r\n  .cdk-overlay-pane {\r\n    width: auto !important;\r\n    min-width: 200px;\r\n\r\n    \r\n    -ms-overflow-style: none;  \r\n    scrollbar-width: none;  \r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 450px) {\r\n    \r\n    .main-container[_ngcontent-%COMP%] {\r\n        width: 90%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLHlDQUF5QztJQUN6Qzs7O3VDQUdtQztJQUNuQyxlQUFlO0lBQ2YsZ0JBQWdCOztJQUVoQixtQkFBbUI7SUFDbkIsd0JBQXdCLEdBQUcsZ0JBQWdCO0lBQzNDLHFCQUFxQixHQUFHLFlBQVk7QUFDeEM7O0FBRUEsZ0RBQWdEOztBQUNoRDtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksUUFBUTtBQUNaOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxlQUFlO0lBQ2YsMkJBQTJCLEVBQUUsMkJBQTJCO0lBQ3hELDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsd0JBQXdCO0FBQzVCOztBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHlDQUF5QztJQUN6Qyw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFHQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7R0FDRyxnQkFBZ0I7R0FDaEIsZUFBZTtHQUNmLGlCQUFpQjtHQUNqQixrQkFBa0I7R0FDbEIsZ0JBQWdCO0dBQ2hCLGtCQUFrQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFFBQVE7QUFDWjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QiwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiw2Q0FBcUM7WUFBckMscUNBQXFDO0VBQ3ZDOztBQUVBO0lBQ0U7TUFDRSxVQUFVO01BQ1YsZUFBZTtJQUNqQjtJQUNBO01BQ0UsV0FBVztNQUNYLDBCQUEwQjtJQUM1QjtJQUNBO01BQ0UsVUFBVTtNQUNWLGVBQWU7SUFDakI7RUFDRjs7QUFiQTtJQUNFO01BQ0UsVUFBVTtNQUNWLGVBQWU7SUFDakI7SUFDQTtNQUNFLFdBQVc7TUFDWCwwQkFBMEI7SUFDNUI7SUFDQTtNQUNFLFVBQVU7TUFDVixlQUFlO0lBQ2pCO0VBQ0Y7O0FBRUE7Ozs7Ozs7Ozs7OztLQVlHOztBQUlMLFlBQVk7O0FBQ1o7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUEscUNBQXFDOztBQUNyQztJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7O0lBRWhCLG1CQUFtQjtJQUNuQix3QkFBd0IsR0FBRyxnQkFBZ0I7SUFDM0MscUJBQXFCLEdBQUcsWUFBWTtBQUN4Qzs7QUFFQSxXQUFXOztBQUNYO0lBQ0ksd0NBQXdDO0lBQ3hDO1FBQ0ksVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI0OCwgMjQ4LCAyNDgpO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IHJnYigwIDAgMCAvIDMwJSk7XHJcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAqL1xyXG4gICAgbWF4LWhlaWdodDogOTUlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuXHJcbiAgICAvKiBIaWRlIHNjcm9sbGJhciAqL1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cclxufVxyXG5cclxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xyXG4ubWFpbi1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5mb290ZXItY29udGFpbmVyLCAudGl0bGUtY29udGFpbmVyIHtcclxuICAgIGNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyRTVEO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb290ZXItdGV4dHtcclxuICAgIGNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZvb3Rlci10ZXh0IGgze1xyXG4gICAgbWFyZ2luOjA7XHJcbn1cclxuLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7IC8qTm90ZSwgc3ViamVjdCB0byBjaGFuZ2UgKi9cclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcclxufVxyXG5cclxuLmJvZHktY29udGVudCB7XHJcbiAgICAvKiB0b3AgfCByaWdodCB8IGJvdHRvbSB8IGxlZnQgKi9cclxuICAgIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYm9keS1jb250ZW50IGgzIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4uaW5wdXRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZvb3Rlci1jb250YWluZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmZvb3Rlci1jb250YWluZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjpyZ2IoMjQ4LCAyNDgsIDI0OCk7XHJcbn1cclxuLmZvb3Rlci1jb250YWluZXIgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uZm9vdGVyLWNvbnRhaW5lciBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5sYWJMaW5rcyB7XHJcbiAgICAvKiB0b3AgfCByaWdodCB8IGJvdHRvbSB8IGxlZnQgKi9cclxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbiN0YWItY29udGFpbmVyIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi50YWIge1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxM3B4IDEzcHggMHB4O1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2JkYmRiZDtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCByZ2IoMCAwIDAgLyAzMCUpO1xyXG4gICAgLyogdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XHJcbn1cclxuXHJcbi50YWI6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuLnNlYXJjaCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzOHB4O1xyXG59XHJcblxyXG4ucHJvamVjdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkOGQ4O1xyXG59XHJcblxyXG4jcHJvamVjdC1kaXNwbGF5IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5hbGwtcHJvamVjdC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAzMjlweDtcclxufVxyXG5cclxuLnByb2plY3QtY29udGFpbmVyIHtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgI0Q5RDlEOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjBGMEYwO1xyXG59XHJcblxyXG4ucHJvamVjdC10aXRsZSB7XHJcbiAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG59XHJcblxyXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4jc2VhcmNoLXRhYi10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiNmbGV4LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogcm93O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG59XHJcblxyXG4uc2Nyb2xsLXRleHQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcclxuICAgIC8qIGFuaW1hdGlvbjogcHVsc2UyIDJzIDNzIGVhc2Utb3V0IGluZmluaXRlOyAqL1xyXG59XHJcblxyXG4uc2Nyb2xsLWN1ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiA1MCVcclxufVxyXG5cclxuLnNjcm9sbC1pbWcge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBhbmltYXRpb246IHB1bHNlIDNzIGVhc2Utb3V0IGluZmluaXRlO1xyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIG9wYWNpdHk6IC44O1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiBAa2V5ZnJhbWVzIHB1bHNlMiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIG9wYWNpdHk6IC44O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICB9ICovXHJcblxyXG5cclxuXHJcbi8qIE9wdGlvbnMgKi9cclxuLnBhbmVsLXRpdGxle1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XHJcbn1cclxuLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XHJcbn1cclxuXHJcbi5hcnJvdy1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4vKiBGb3IgYXV0b2NvbXBsZXRlIHN1Z2dlc3Rpb25zIGJveCAqL1xyXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LXBhbmUge1xyXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcblxyXG4gICAgLyogSGlkZSBzY3JvbGxiYXIgKi9cclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIElFIGFuZCBFZGdlICovXHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICAvKiBGaXJlZm94ICovXHJcbn1cclxuXHJcbi8qIE1vYmlsZSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAvKlRlc3QgdGhpcyBib3VuZGFyeSwgaXQncyBkZWZhdWx0IHBhZ2UqL1xyXG4gICAgLm1haW4tY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 600:
/*!*********************************************!*\
  !*** ./src/app/services/backend.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackendService": () => (/* binding */ BackendService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class BackendService {
    constructor(http) {
        this.http = http;
        // private apiPath: string =  'https://map-app-backend-prd.byu-dept-fhtl-prd.amazon.byu.edu/api/v2/'
        this.apiPath = 'http://localhost:8000/api/v2/';
    }
    awaitGetLastValueFrom(url, params) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            // https://www.youtube.com/watch?v=3aeK5SfWBSU
            let wait = 0;
            let result = null;
            if (!params)
                params = { observe: 'response' };
            else if (!params.hasOwnProperty('observe'))
                params.observe = 'response';
            const data$ = this.http.get(url, params);
            do {
                //debugger
                if (wait > 0)
                    yield new Promise(resolve => setTimeout(resolve, wait)); //wait between checks
                try {
                    const result = (_a = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.lastValueFrom)(data$, { defaultValue: 'Default on null' })) !== null && _a !== void 0 ? _a : 'Default on undefined';
                    return result;
                }
                catch (err) {
                    console.log("GOT AN ERROR");
                    console.log(err);
                    if (err.status < 500 && err.status > 0)
                        return err.hasOwnProperty("body") ? err.body : null;
                }
                if (wait < 15000)
                    wait += 1000;
            } while (result == null);
        });
    }
    /**
     *
     * @param name The name being searched
     * @param loc The location being searched
     * @param filterType The filter parameters to decide what we are searching (e.g. duplicates, records, etc.)
     *                   Possible values (case sensitive): Possible Duplicates, Connect Families,Find Death Dates ,Record Attachment
     * @param filterDifficulty If the filter is for source linking, pass an array of strings including at least
     *                          one of the following: 'Easy', 'Medium' or 'Hard'.
     */
    getSearchName(name = "", loc = "", filterType, filterDifficulty) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            if (name === "" && loc === "") {
                throw new Error("Search must not be empty.");
            }
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('name', name);
            params = params.append('loc', loc);
            params = params.append("filterType", filterType);
            if (filterType == "Record Attachment") {
                for (let i = 0; i < filterDifficulty.length; i++) {
                    params = params.append("filterDifficulty", filterDifficulty[i]);
                }
            }
            return this.awaitGetLastValueFrom(this.apiPath + 'searchname?' + params.toString());
        });
    }
    getSearchLoc(name = "", loc = "", filterType, filterDifficulty) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            if (name === "" && loc === "") {
                throw new Error("Search must not be empty.");
            }
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('name', name);
            params = params.append('loc', loc);
            params = params.append("filterType", filterType);
            if (filterType == "Record Attachment") {
                for (let i = 0; i < filterDifficulty.length; i++) {
                    params = params.append("filterDifficulty", filterDifficulty[i]);
                }
            }
            return this.awaitGetLastValueFrom(this.apiPath + 'searchloc?' + params.toString());
        });
    }
    getProject(projectName = "", name = "", loc = "", filterType, filterDifficulty) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('projectName', projectName);
            params = params.append('name', name);
            params = params.append('loc', loc);
            params = params.append("filterType", filterType);
            if (filterType == "Record Attachment") {
                for (let i = 0; i < filterDifficulty.length; i++) {
                    params = params.append("filterDifficulty", filterDifficulty[i]);
                }
            }
            console.log("Params: ", params);
            return this.awaitGetLastValueFrom(this.apiPath + 'project?' + params.toString());
        });
    }
    getSuggestName(name = "", loc = "", filterDifficulty, filterType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            //debugger
            if (name === "" && loc === "") {
                return null;
            }
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('loc', loc);
            params = params.append('name', name);
            params = params.append("filterType", filterType);
            if (filterType == "Record Attachment") {
                for (let i = 0; i < filterDifficulty.length; i++) {
                    params = params.append("filterDifficulty", filterDifficulty[i]);
                }
            }
            return this.awaitGetLastValueFrom(this.apiPath + "suggestname?" + params.toString());
        });
    }
    getSuggestLoc(name = "", loc = "", filterDifficulty, filterType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            //debugger
            if (name === "" && loc === "") {
                return null;
            }
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('loc', loc);
            params = params.append('name', name);
            params = params.append("filterType", filterType);
            if (filterType == "Record Attachment") {
                for (let i = 0; i < filterDifficulty.length; i++) {
                    params = params.append("filterDifficulty", filterDifficulty[i]);
                }
            }
            return this.awaitGetLastValueFrom(this.apiPath + "suggestloc?" + params.toString());
        });
    }
    updateUrl(url = "", hintType = "") {
        console.log("url: ", url);
        console.log("hintType: ", hintType);
        if (url === "") {
            throw new Error("URL must not be empty.");
        }
        this.awaitGetLastValueFrom(`${this.apiPath}update?url=${encodeURIComponent(url)}&filterType=${encodeURIComponent(hintType)}`);
    }
}
BackendService.ɵfac = function BackendService_Factory(t) { return new (t || BackendService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
BackendService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: BackendService, factory: BackendService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2936:
/*!**************************************************!*\
  !*** ./src/app/services/filter-state.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterStateService": () => (/* binding */ FilterStateService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FilterStateService {
    constructor() {
        this.hintType = "Record Attachment";
        //private difficulty: string[] = ["Easier", "Normal"];
        this.difficulty = ["Easy", "Medium"];
    }
    changeType(type) {
        this.hintType = type;
    }
    changeDiff(diff) {
        this.difficulty = diff;
    }
    getDiff() {
        return this.difficulty;
    }
    getType() {
        return this.hintType;
    }
}
FilterStateService.ɵfac = function FilterStateService_Factory(t) { return new (t || FilterStateService)(); };
FilterStateService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FilterStateService, factory: FilterStateService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 806:
/*!*******************************************!*\
  !*** ./src/app/services/fs/fs.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FsService": () => (/* binding */ FsService)
/* harmony export */ });
/* harmony import */ var _familySearchX_FHTLX__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../familySearchX/FHTLX */ 3961);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _links_links_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../links/links.service */ 3730);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils.service */ 9265);






class FsService {
    constructor(http, links, router, utils) {
        this.http = http;
        this.links = links;
        this.router = router;
        this.utils = utils;
        this.isLoggedIn = false;
    }
    /**
     * Verify that the auth service is up and running before trying to redirect.
     */
    verifyAuthReady() {
        return this.http.get(this.links.getAuthRedirect(`${window.location.origin}/home`), {
            responseType: 'text',
            observe: 'response'
        });
    }
    isAuthenticated() {
        return true;
    }
    setLoggedIn(fsSession) {
        this.FhtlX.readyAccessToken(fsSession);
        this.links.setHomeLoggedIn();
        this.isLoggedIn = true;
    }
    logIn(fstoken) {
        this.fsSession = this.parseJwt(fstoken);
        this.initFhtlX();
        this.FhtlX.storeSession(this.fsSession);
        this.setLoggedIn(this.fsSession);
    }
    initFhtlX() {
        let initOptions = {
            environment: 'production',
            appKey: 'app Key :)',
            redirectUri: 'Put your redirect uri here if you want',
            saveAccessToken: true
        };
        this.FhtlX = new _familySearchX_FHTLX__WEBPACK_IMPORTED_MODULE_0__.FHTLX(initOptions);
    }
    checkLoginStatus() {
        this.fsSession = _familySearchX_FHTLX__WEBPACK_IMPORTED_MODULE_0__.FHTLX.checkAccessToken();
        if (!!this.fsSession) {
            this.initFhtlX();
            this.setLoggedIn(this.fsSession);
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * Takes a JWT token and returns the resulting javascript object.
     * Called to parse the fstoken returned by the auth service upon
     * successfully logging in.
     * @param token a JWT token with FsSession info
     */
    parseJwt(token) {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }
}
FsService.ɵfac = function FsService_Factory(t) { return new (t || FsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_links_links_service__WEBPACK_IMPORTED_MODULE_1__.LinksService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilsService)); };
FsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: FsService, factory: FsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3730:
/*!*************************************************!*\
  !*** ./src/app/services/links/links.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinksService": () => (/* binding */ LinksService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class LinksService {
    constructor() {
        this.FHTL = {
            auth: 'https://auth.familytech.byu.edu',
            home: 'https://familytech.byu.edu',
            contact: 'https://familytech.byu.edu/contact.html',
            donate: 'https://familytech.byu.edu/donate.html',
            people: 'https://familytech.byu.edu/people.html',
            relativeFinder: 'https://www.relativefinder.org',
            virtualPedigreee: 'http://virtual-pedigree.familytech.byu.edu',
            descendancyExplorer: 'http://descend.familytech.byu.edu',
            treeSweeper: 'https://treesweeper.familytech.byu.edu',
            brownie: 'https://familytech.byu.edu/apps/brownie.html',
            pedigreePie: 'http://pedigree-pie.familytech.byu.edu',
            onePageGenealogy: 'http://opg.familytech.byu.edu',
            familyCalendar: 'https://calendar.familytech.byu.edu',
            geneopardy: 'https://geneopardy.familytech.byu.edu',
            wheelOfFamilyFortune: 'https://wheel.familytech.byu.edu',
            ancestorGames: 'https://ancestorgames.familytech.byu.edu',
            recordQuest: 'https://recordquest.familytech.byu.edu',
        };
        this.FS = 'https://www.familysearch.org/';
        this.APP_NAME = 'AngularTemplate';
        this.home = 'start';
        this.mainMenu = [
            { name: 'Home', href: 'home', icon: 'home' },
            //{name: 'Help', href: 'help', icon: 'help'},
            { name: 'Contact', href: 'https://familytech.byu.edu/contact.html', icon: 'contact_mail' },
            //{name: 'About', href: 'about'},
        ];
    }
    getHome() {
        return this.home;
    }
    setHomeLoggedIn() {
        this.home = 'home';
        this.mainMenu.push({
            name: 'Logout',
            href: 'logout',
            icon: 'supervised_user'
        });
    }
    logOut() {
        this.mainMenu.pop();
        this.home = 'start';
    }
    /**
     *
     * @param redirect the url to return to upon signing in. Defaults to the current url
     */
    getAuthRedirect(redirect = window.location.href) {
        return `${this.FHTL.auth}?redirect=${redirect}`;
    }
}
LinksService.ɵfac = function LinksService_Factory(t) { return new (t || LinksService)(); };
LinksService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LinksService, factory: LinksService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9265:
/*!*************************************************!*\
  !*** ./src/app/services/utils/utils.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilsService": () => (/* binding */ UtilsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ 4244);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);




class UtilsService {
    constructor(dialog, overlay, snackBar) {
        this.dialog = dialog;
        this.overlay = overlay;
        this.snackBar = snackBar;
    }
    /**
     * Displays the given modal component, and injects the data.
     * @param component
     * @param data
     * @param width
     * @param height
     */
    displayModal(component, data, width = '600px', height = 'auto') {
        let dialogRef = this.dialog.open(component, {
            data: data,
            width: width,
            height: height,
            scrollStrategy: this.overlay.scrollStrategies.block()
        });
        return dialogRef;
    }
    /**
     * Displays a material snackbar with message and button
     * @param message
     * @param buttonText
     */
    displaySnack(message, buttonText) {
        let snackBarRef = this.snackBar.open(message, buttonText);
        setTimeout(() => {
            if (!!snackBarRef) {
                snackBarRef.dismiss();
            }
        }, 6000);
    }
    /**
     * Takes a string and hashes in into a hex color.
     * @param str
     */
    stringToColor(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        let color = '#';
        for (let i = 0; i < 3; i++) {
            let value = (hash >> (i * 8)) & 0xFF;
            color += ('00' + value.toString(16)).substr(-2);
        }
        return color;
    }
    // from stackoverflow https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
    shadeColor(color, percent) {
        let f = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent, R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
        return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
    }
    /**
     * Takes a string and converts it to a color (a hash such that all events of a given name will return the same color).
     * The resulting color is then converted into an object representing the state and color of a material design checkbox,
     * e.g. primary and secondary colors, and whether the checkbox is active or not (set to true for all).
     * @param str
     */
    stringToColors(str) {
        let color = this.stringToColor(str);
        return {
            primary: color,
            secondary: this.shadeColor(color, 0.5),
            active: true
        };
    }
    /**
     * FamilySearch events have date strings with (potentally), a start date, end date,
     * and year. If the data is in a recognizable format, it will parse the dates and return them.
     * @param date
     */
    parseDates(date) {
        if (!!date && Number.isInteger(parseInt(date[0])) && date.split('/')[0].length > 4) {
            let dates = date.split('/');
            let year = dates[0].split(' ').pop();
            return [new Date(dates[0]), new Date(dates[1]), year];
        }
        else {
            return [undefined, undefined, undefined];
        }
    }
    /**
     * Parses the event type from the fs info
     * @param type the event type
     */
    parseType(type) {
        return decodeURIComponent(type.split('/').pop().toLowerCase()).replace('data:,', '');
    }
}
UtilsService.ɵfac = function UtilsService_Factory(t) { return new (t || UtilsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar)); };
UtilsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilsService, factory: UtilsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 799:
/*!***********************************************!*\
  !*** ./src/app/search/communityProjects.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"name":"Denton, Texas","description":"The goal is to make sure that everyone that lived in Denton, Texas, up until 1940, has a profile on the family tree. The project is being done in honor of Elder Luke Carter, one of two missionaries who died in a car accident in May while serving in Denton, Texas.","location":"Denton, Texas"},{"id":2,"name":"African American Families","description":"We have been working to improve the coverage of African Americans on the Family Tree as a way to create new discovery experiences. We have been working with volunteers to connect these individuals to their extended family members using record hints and public member trees on other websites.","location":null},{"id":3,"name":"Mesquite, Texas","description":"This project is being done in honor of Aaron Lowe and Ty Jordan, both of whom grew up in Mesquite, Texas and were integral parts of the Utah University Football team. We want to bring more coverage to the family tree in this area and build up the community to remember both Aaron and Ty. ","location":"Mesquite, Texas"}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map