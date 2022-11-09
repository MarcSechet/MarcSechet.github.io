"use strict";
(self["webpackChunkangularDemo"] = self["webpackChunkangularDemo"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found/not-found.component */ 1142);
/* harmony import */ var _yu_gi_oh_combo_graph_two_combo_graph_two_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yu-gi-oh/combo-graph-two/combo-graph-two.component */ 1078);
/* harmony import */ var _yu_gi_oh_collection_collection_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./yu-gi-oh/collection/collection-list.component */ 5207);
/* harmony import */ var _yu_gi_oh_collection_deck_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./yu-gi-oh/collection/deck.component */ 1659);
/* harmony import */ var _deck_deactive_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deck-deactive-guard */ 1988);
/* harmony import */ var _yu_gi_oh_collection_collection_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./yu-gi-oh/collection/collection-new.component */ 6676);
/* harmony import */ var _collection_new_deactive_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./collection-new-deactive-guard */ 6128);
/* harmony import */ var _yu_gi_oh_collection_collection_by_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./yu-gi-oh/collection/collection-by-user.component */ 7345);
/* harmony import */ var _yu_gi_oh_collection_card_matcher_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./yu-gi-oh/collection/card-matcher.component */ 8548);
/* harmony import */ var _yu_gi_oh_collection_card_consultation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./yu-gi-oh/collection/card-consultation.component */ 6233);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);













const routes = [
    { path: '', component: _yu_gi_oh_collection_collection_list_component__WEBPACK_IMPORTED_MODULE_2__.CollectionListComponent },
    { path: 'yu-gi-oh/2', component: _yu_gi_oh_combo_graph_two_combo_graph_two_component__WEBPACK_IMPORTED_MODULE_1__.ComboGraphTwoComponent },
    { path: 'yu-gi-oh/collections', component: _yu_gi_oh_collection_collection_list_component__WEBPACK_IMPORTED_MODULE_2__.CollectionListComponent },
    { path: 'yu-gi-oh/decks', component: _yu_gi_oh_collection_collection_list_component__WEBPACK_IMPORTED_MODULE_2__.CollectionListComponent },
    { path: 'yu-gi-oh/decks/by-id/:id', component: _yu_gi_oh_collection_deck_component__WEBPACK_IMPORTED_MODULE_3__.DeckComponent, canDeactivate: [_deck_deactive_guard__WEBPACK_IMPORTED_MODULE_4__.DeckDeactivateGuard] },
    { path: 'yu-gi-oh/collections/by-id/:id', component: _yu_gi_oh_collection_collection_new_component__WEBPACK_IMPORTED_MODULE_5__.CollectionNewComponent, canDeactivate: [_collection_new_deactive_guard__WEBPACK_IMPORTED_MODULE_6__.CollectionNewDeactivateGuard] },
    { path: 'yu-gi-oh/collections/by-user', component: _yu_gi_oh_collection_collection_by_user_component__WEBPACK_IMPORTED_MODULE_7__.CollectionByUserComponent },
    { path: 'yu-gi-oh/collections/by-user/:name', component: _yu_gi_oh_collection_collection_new_component__WEBPACK_IMPORTED_MODULE_5__.CollectionNewComponent },
    { path: 'yu-gi-oh/collections/allCollections', component: _yu_gi_oh_collection_collection_new_component__WEBPACK_IMPORTED_MODULE_5__.CollectionNewComponent },
    { path: 'yu-gi-oh/card-matcher', component: _yu_gi_oh_collection_card_matcher_component__WEBPACK_IMPORTED_MODULE_8__.CardMatcherComponent },
    { path: 'yu-gi-oh/cards', component: _yu_gi_oh_collection_card_consultation_component__WEBPACK_IMPORTED_MODULE_9__.CardConsultationComponent },
    { path: 'not-found', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


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
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ 7266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _yugioh_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yugioh.service */ 5594);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);







class AppComponent {
    constructor(translate, yugiohService, router) {
        this.translate = translate;
        this.yugiohService = yugiohService;
        this.router = router;
        this.title = 'angularDemo';
        this.isFrench = true;
        this.canScroll = true;
        this.isOpen = false;
        this.scrollInProgress = false;
        this.itemActive = 0;
        translate.addLangs(['en', 'fr']);
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
        // CardSet up the language switch
        this.englishCheck = translate.currentLang === 'en';
    }
    ngOnInit() {
        setTimeout(() => this.refreshActiveTab(this.router.url), 100);
    }
    refreshActiveTab(url) {
        if (url.includes('/decks')) {
            this.itemActive = 0;
        }
        else if (url.includes('/collection')) {
            this.itemActive = 1;
        }
        else if (url.includes('/card-matcher')) {
            this.itemActive = 2;
        }
        else if (url.includes('/cards')) {
            this.itemActive = 3;
        }
    }
    onAuxClick($event, url) {
        $event.preventDefault();
        if ($event.which === 2) {
            window.open(url);
            this.refreshActiveTab(url);
        }
    }
    handleRoutingToDeckOrIndividualCollection(event, isCollection) {
        event.preventDefault();
        if (event.which === 2 || event.which === 1) {
            console.log(isCollection);
            const url = '/yu-gi-oh/' + (isCollection ? 'collections' : 'decks');
            console.log(url);
            if (event.which === 1) {
                this.router.navigate([url]);
            }
            else {
                window.open(url, '_blank');
            }
            this.refreshActiveTab(url);
        }
    }
    handleRoutingToCollectionsByUser(event) {
        event.preventDefault();
        if (event.which === 2 || event.which === 1) {
            const url = 'yu-gi-oh/collections/by-user';
            if (event.which === 1) {
                this.router.navigate([url]);
            }
            else {
                window.open(url, '_blank');
            }
            this.refreshActiveTab(url);
        }
    }
    handleRoutingToAllCollection(event) {
        event.preventDefault();
        if (event.which === 2 || event.which === 1) {
            const url = '/yu-gi-oh/collections/' + _global__WEBPACK_IMPORTED_MODULE_0__.idAllCollections;
            if (event.which === 1) {
                this.router.navigate([url]);
            }
            else {
                window.open(url, '_blank');
            }
            this.refreshActiveTab(url);
        }
    }
    handleRoutingToCardMatcher(event) {
        event.preventDefault();
        if (event.which === 2 || event.which === 1) {
            const url = '/yu-gi-oh/card-matcher';
            if (event.which === 1) {
                this.router.navigate([url]);
            }
            else {
                window.open(url, '_blank');
            }
            this.refreshActiveTab(url);
        }
    }
    handleRoutingToCardConsultations(event) {
        event.preventDefault();
        if (event.which === 2 || event.which === 1) {
            const url = '/yu-gi-oh/cards';
            if (event.which === 1) {
                this.router.navigate([url]);
            }
            else {
                window.open(url, '_blank');
            }
            this.refreshActiveTab(url);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_yugioh_service__WEBPACK_IMPORTED_MODULE_1__.YugiohService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 23, vars: 8, consts: [[1, "navbar", "navbar-expand-sm", "navbar-light", "bg-light", 2, "background-color", "rgb(31 31 31) !important"], ["id", "navbarSupportedContent", 1, "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["href", "#", 1, "nav-link", 3, "click", "auxclick"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", 3, "auxclick"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", 2, "background-color", "rgb(31 31 31)"], ["href", "#", 1, "dropdown-item", 3, "click", "auxclick"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "ul", 2)(3, "li", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_a_click_4_listener($event) { return ctx.handleRoutingToDeckOrIndividualCollection($event, false); })("auxclick", function AppComponent_Template_a_auxclick_4_listener($event) { return ctx.handleRoutingToDeckOrIndividualCollection($event, false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Decks");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li", 5)(7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("auxclick", function AppComponent_Template_a_auxclick_7_listener($event) { return ctx.handleRoutingToDeckOrIndividualCollection($event, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Collections ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7)(10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_a_click_10_listener($event) { return ctx.handleRoutingToDeckOrIndividualCollection($event, true); })("auxclick", function AppComponent_Template_a_auxclick_10_listener($event) { return ctx.handleRoutingToDeckOrIndividualCollection($event, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Individuelles");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_a_click_12_listener($event) { return ctx.handleRoutingToCollectionsByUser($event); })("auxclick", function AppComponent_Template_a_auxclick_12_listener($event) { return ctx.handleRoutingToCollectionsByUser($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Par utilisateur");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_a_click_14_listener($event) { return ctx.handleRoutingToAllCollection($event); })("auxclick", function AppComponent_Template_a_auxclick_14_listener($event) { return ctx.handleRoutingToAllCollection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Globale");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li", 3)(17, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_a_click_17_listener($event) { return ctx.handleRoutingToCardMatcher($event); })("auxclick", function AppComponent_Template_a_auxclick_17_listener($event) { return ctx.handleRoutingToCardMatcher($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Card Matcher (Beta)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li", 3)(20, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_a_click_20_listener($event) { return ctx.handleRoutingToCardConsultations($event); })("auxclick", function AppComponent_Template_a_auxclick_20_listener($event) { return ctx.handleRoutingToCardConsultations($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Consultations cartes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.itemActive === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.itemActive === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.itemActive === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.itemActive === 3);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavbar], styles: [".active[_ngcontent-%COMP%] {\n  border-bottom: 4px solid #5bc0eb;\n  content: \" \";\n}\n\n\n\nbutton[_ngcontent-%COMP%] {\n  transition: all 0.5s;\n}\n\n\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  text-align: center;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 5px;\n  text-decoration: none;\n  color: rgb(245, 240, 240);\n  font-weight: 500;\n  text-transform: uppercase;\n  margin: 0 10px;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after, nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  transition: all 0.5s;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: rgb(245, 240, 240);\n}\n\n\n\nnav.stroke[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], nav.fill[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n}\n\nnav.stroke[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after, nav.fill[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 0;\n  content: \".\";\n  color: transparent;\n  background: rgb(245, 240, 240);\n  height: 1px;\n}\n\nnav.stroke[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n}\n\nnav.fill[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: all 2s;\n}\n\nnav.fill[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  text-align: left;\n  content: \".\";\n  margin: 0;\n  opacity: 0;\n}\n\nnav.fill[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: rgb(245, 240, 240);\n  z-index: 1;\n}\n\nnav.fill[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after {\n  z-index: -10;\n  animation: fill 1s forwards;\n  -webkit-animation: fill 1s forwards;\n  -moz-animation: fill 1s forwards;\n  opacity: 1;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:hover, .dropdown-item[_ngcontent-%COMP%]:focus {\n  background-color: rgb(31, 31, 31);\n}\n\n\n\n@-webkit-keyframes fill {\n  0% {\n    width: 0%;\n    height: 1px;\n  }\n  50% {\n    width: 100%;\n    height: 1px;\n  }\n  100% {\n    width: 100%;\n    height: 100%;\n    background: #333;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBLFlBQUE7O0FBQ0E7RUFDRSxvQkFBQTtBQUNGOztBQUVBLGVBQUE7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFHRjs7QUFEQTs7O0VBR0Usb0JBQUE7QUFJRjs7QUFGQTtFQUNFLHlCQUFBO0FBS0Y7O0FBREEsV0FBQTs7QUFDQTs7RUFFRSxrQkFBQTtBQUlGOztBQUZBOztFQUVFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFLRjs7QUFIQTtFQUNFLFdBQUE7QUFNRjs7QUFIQTtFQUNFLGtCQUFBO0FBTUY7O0FBSEE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQU1GOztBQUpBO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0FBT0Y7O0FBTEE7RUFDRSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtBQVFGOztBQUxBO0VBQ0UsaUNBQUE7QUFRRjs7QUFKQSxjQUFBOztBQUNBO0VBQ0U7SUFDRSxTQUFBO0lBQ0EsV0FBQTtFQU9GO0VBTEE7SUFDRSxXQUFBO0lBQ0EsV0FBQTtFQU9GO0VBTEE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VBT0Y7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlIHtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzViYzBlYjtcclxuICBjb250ZW50OiBcIiBcIjtcclxufVxyXG5cclxuLyogQlVUVE9OUyAqL1xyXG5idXR0b24ge1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbn1cclxuXHJcbi8qIE5BVklHQVRJT04gKi9cclxubmF2IHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5uYXYgdWwgbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5uYXYgdWwgbGkgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogcmdiKDI0NSwgMjQwLCAyNDApO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG5uYXYgdWwgbGkgYSxcclxubmF2IHVsIGxpIGE6YWZ0ZXIsXHJcbm5hdiB1bCBsaSBhOmJlZm9yZSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcclxufVxyXG5uYXYgdWwgbGkgYTpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigyNDUsIDI0MCwgMjQwKTtcclxufVxyXG5cclxuXHJcbi8qIHN0cm9rZSAqL1xyXG5uYXYuc3Ryb2tlIHVsIGxpIGEsXHJcbm5hdi5maWxsIHVsIGxpIGEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5uYXYuc3Ryb2tlIHVsIGxpIGE6YWZ0ZXIsXHJcbm5hdi5maWxsIHVsIGxpIGE6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDA7XHJcbiAgY29udGVudDogJy4nO1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjQ1LCAyNDAsIDI0MCk7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbn1cclxubmF2LnN0cm9rZSB1bCBsaSBhOmhvdmVyOmFmdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubmF2LmZpbGwgdWwgbGkgYSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDJzO1xyXG59XHJcblxyXG5uYXYuZmlsbCB1bCBsaSBhOmFmdGVyIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbnRlbnQ6ICcuJztcclxuICBtYXJnaW46IDA7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5uYXYuZmlsbCB1bCBsaSBhOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDI0NSwgMjQwLCAyNDApO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxubmF2LmZpbGwgdWwgbGkgYTpob3ZlcjphZnRlciB7XHJcbiAgei1pbmRleDogLTEwO1xyXG4gIGFuaW1hdGlvbjogZmlsbCAxcyBmb3J3YXJkcztcclxuICAtd2Via2l0LWFuaW1hdGlvbjogZmlsbCAxcyBmb3J3YXJkcztcclxuICAtbW96LWFuaW1hdGlvbjogZmlsbCAxcyBmb3J3YXJkcztcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbTpob3ZlciwgLmRyb3Bkb3duLWl0ZW06Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMSAzMSAzMSk7XHJcbn1cclxuXHJcblxyXG4vKiBLZXlmcmFtZXMgKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZpbGwge1xyXG4gIDAlIHtcclxuICAgIHdpZHRoOiAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('openClose', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
                    transform: 'rotate(360deg)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('closed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
                    transform: 'rotate(-360deg)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('* => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('1s')
                ])
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('sideNavOpenClose', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
                    transform: 'translateX(0)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('closed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
                    transform: 'translateX(-100%)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('* => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('0.5s')
                ])
            ])
        ] } });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./safe.pipe */ 3289);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _drag_drop_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drag-drop.directive */ 2945);
/* harmony import */ var _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upload-file/upload-file.component */ 6794);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ng2-dragula */ 8370);
/* harmony import */ var ngx_color_sketch__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ngx-color/sketch */ 9396);
/* harmony import */ var ngx_color_github__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ngx-color/github */ 6278);
/* harmony import */ var ngx_color_circle__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ngx-color/circle */ 7489);
/* harmony import */ var _empty_layout_empty_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./empty-layout/empty-layout.component */ 2177);
/* harmony import */ var _loading_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading.directive */ 5294);
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loading/loading.component */ 7409);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _error_notifier_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error-notifier.interceptor */ 4365);
/* harmony import */ var _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./snack-bar/snack-bar.component */ 4569);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./not-found/not-found.component */ 1142);
/* harmony import */ var _yu_gi_oh_combo_graph_two_combo_graph_two_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./yu-gi-oh/combo-graph-two/combo-graph-two.component */ 1078);
/* harmony import */ var _yu_gi_oh_collection_collection_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./yu-gi-oh/collection/collection-list.component */ 5207);
/* harmony import */ var _yu_gi_oh_collection_dialog_add_collection_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./yu-gi-oh/collection/dialog-add-collection.component */ 4973);
/* harmony import */ var _dialog_remove_collection_dialog_edit_remove_collection_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialog-remove-collection/dialog-edit-remove-collection.component */ 4045);
/* harmony import */ var _yu_gi_oh_collection_deck_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./yu-gi-oh/collection/deck.component */ 1659);
/* harmony import */ var _yu_gi_oh_collection_tooltip_card_tooltip_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./yu-gi-oh/collection/tooltip-card/tooltip-card.component */ 6014);
/* harmony import */ var _dialog_import_collection_dialog_import_collection_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dialog-import-collection/dialog-import-collection.component */ 5557);
/* harmony import */ var _full_image_dialog_full_image_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./full-image-dialog/full-image-dialog.component */ 5853);
/* harmony import */ var _sort_dialog_sort_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sort-dialog/sort-dialog.component */ 6056);
/* harmony import */ var _deck_deactive_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./deck-deactive-guard */ 1988);
/* harmony import */ var _yu_gi_oh_collection_collection_new_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./yu-gi-oh/collection/collection-new.component */ 6676);
/* harmony import */ var _collection_new_deactive_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./collection-new-deactive-guard */ 6128);
/* harmony import */ var _array_sort_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./array-sort-pipe */ 1109);
/* harmony import */ var _ban_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ban.pipe */ 9041);
/* harmony import */ var _filter_dialog_filter_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./filter-dialog/filter-dialog.component */ 5015);
/* harmony import */ var _yes_no_dialog_yes_no_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./yes-no-dialog/yes-no-dialog.component */ 7662);
/* harmony import */ var _modal_card_detail_modal_card_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./modal-card-detail/modal-card-detail.component */ 7457);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./search/search.component */ 6392);
/* harmony import */ var _yu_gi_oh_collection_deck_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./yu-gi-oh/collection/deck-list.component */ 107);
/* harmony import */ var _yu_gi_oh_collection_collection_by_user_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./yu-gi-oh/collection/collection-by-user.component */ 7345);
/* harmony import */ var _yu_gi_oh_collection_card_matcher_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./yu-gi-oh/collection/card-matcher.component */ 8548);
/* harmony import */ var _yu_gi_oh_collection_card_consultation_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./yu-gi-oh/collection/card-consultation.component */ 6233);
/* harmony import */ var _bar_collection_information_bar_collection_information_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./bar-collection-information/bar-collection-information.component */ 9364);
/* harmony import */ var _send_card_to_other_collection_modal_send_card_to_other_collection_modal_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./send-card-to-other-collection-modal/send-card-to-other-collection-modal.component */ 442);
/* harmony import */ var _dialog_import_ydke_dialog_import_ydke_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./dialog-import-ydke/dialog-import-ydke.component */ 2491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/core */ 2560);






































// import {AuthServiceConfig, GoogleLoginProvider, LoginOpt, SocialLoginModule} from 'angularx-social-login';



































////////////////////////////////////////////////////////////////
////////////////////// SOCIAL LOGIN ////////////////////////////
////////////////////////////////////////////////////////////////
// const googleLoginOptions: LoginOpt = {
//   scope: 'profile email'
//   /*scope: 'profile email https://www.googleapis.com/auth/drive.readonly'*/
// }; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig
//
//
// const config = new AuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider('554774137176-p6pr1qe22srgmp5ab9qmjeh2hfaftrh4.apps.googleusercontent.com', googleLoginOptions)
//   }/*,
//   {
//     id: FacebookLoginProvider.PROVIDER_ID,
//     provider: new FacebookLoginProvider('Facebook-App-Id')
//   }*/
// ]);
//
// export function provideConfig() {
//   return config;
// }
////////////////////////////////////////////////////////////////
//////////////////// END SOCIAL LOGIN //////////////////////////
////////////////////////////////////////////////////////////////
// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_36__.TranslateHttpLoader(http);
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineInjector"]({ providers: [
        // {
        // provide: AuthServiceConfig,
        // useFactory: provideConfig
        // },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_38__.HTTP_INTERCEPTORS, useClass: _error_notifier_interceptor__WEBPACK_IMPORTED_MODULE_8__.ErrorNotifierInterceptor, multi: true },
        _collection_new_deactive_guard__WEBPACK_IMPORTED_MODULE_22__.CollectionNewDeactivateGuard,
        _deck_deactive_guard__WEBPACK_IMPORTED_MODULE_20__.DeckDeactivateGuard
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_39__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_38__.HttpClientModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__.TranslateModule.forRoot({
            loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__.TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_38__.HttpClient]
            }
        }),
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_42__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_42__.ReactiveFormsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_43__.MatCardModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_44__.MatFormFieldModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_45__.NgbModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_46__.MatButtonModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_47__.MatSidenavModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_48__.MatSlideToggleModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_49__.MatRippleModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_50__.MatIconModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_51__.MatSnackBarModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_52__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_53__.MatSelectModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_54__.MatDialogModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_55__.MatCheckboxModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_56__.MatTabsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_57__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_58__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_59__.MatSortModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_60__.MatDividerModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_61__.DragDropModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_62__.MatAutocompleteModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_63__.MatExpansionModule,
        ng2_dragula__WEBPACK_IMPORTED_MODULE_64__.DragulaModule.forRoot(),
        ngx_color_sketch__WEBPACK_IMPORTED_MODULE_65__.ColorSketchModule,
        ngx_color_github__WEBPACK_IMPORTED_MODULE_66__.ColorGithubModule,
        ngx_color_circle__WEBPACK_IMPORTED_MODULE_67__.ColorCircleModule,
        // SocialLoginModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_68__.MatProgressSpinnerModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_69__.MatBadgeModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_70__.MatTooltipModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _safe_pipe__WEBPACK_IMPORTED_MODULE_2__.SafePipe,
        _array_sort_pipe__WEBPACK_IMPORTED_MODULE_23__.ArraySortPipe,
        _drag_drop_directive__WEBPACK_IMPORTED_MODULE_3__.DragDropDirective,
        _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_4__.UploadFileComponent,
        _empty_layout_empty_layout_component__WEBPACK_IMPORTED_MODULE_5__.EmptyLayoutComponent,
        _loading_directive__WEBPACK_IMPORTED_MODULE_6__.LoadingDirective,
        _loading_loading_component__WEBPACK_IMPORTED_MODULE_7__.LoadingComponent,
        _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_9__.SnackBarComponent,
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__.NotFoundComponent,
        _yu_gi_oh_combo_graph_two_combo_graph_two_component__WEBPACK_IMPORTED_MODULE_11__.ComboGraphTwoComponent,
        _yu_gi_oh_collection_collection_new_component__WEBPACK_IMPORTED_MODULE_21__.CollectionNewComponent,
        _yu_gi_oh_collection_collection_list_component__WEBPACK_IMPORTED_MODULE_12__.CollectionListComponent,
        _yu_gi_oh_collection_dialog_add_collection_component__WEBPACK_IMPORTED_MODULE_13__.DialogAddCollectionComponent,
        _dialog_remove_collection_dialog_edit_remove_collection_component__WEBPACK_IMPORTED_MODULE_14__.DialogEditRemoveCollectionComponent,
        _yu_gi_oh_collection_deck_component__WEBPACK_IMPORTED_MODULE_15__.DeckComponent,
        _yu_gi_oh_collection_tooltip_card_tooltip_card_component__WEBPACK_IMPORTED_MODULE_16__.TooltipCardComponent,
        _dialog_import_collection_dialog_import_collection_component__WEBPACK_IMPORTED_MODULE_17__.DialogImportCollectionComponent,
        _full_image_dialog_full_image_dialog_component__WEBPACK_IMPORTED_MODULE_18__.FullImageDialogComponent,
        _sort_dialog_sort_dialog_component__WEBPACK_IMPORTED_MODULE_19__.SortDialogComponent,
        _ban_pipe__WEBPACK_IMPORTED_MODULE_24__.BanPipe,
        _filter_dialog_filter_dialog_component__WEBPACK_IMPORTED_MODULE_25__.FilterDialogComponent,
        _yes_no_dialog_yes_no_dialog_component__WEBPACK_IMPORTED_MODULE_26__.YesNoDialogComponent,
        _modal_card_detail_modal_card_detail_component__WEBPACK_IMPORTED_MODULE_27__.ModalCardDetailComponent,
        _search_search_component__WEBPACK_IMPORTED_MODULE_28__.SearchComponent,
        _yu_gi_oh_collection_deck_list_component__WEBPACK_IMPORTED_MODULE_29__.DeckListComponent,
        _yu_gi_oh_collection_collection_by_user_component__WEBPACK_IMPORTED_MODULE_30__.CollectionByUserComponent,
        _yu_gi_oh_collection_card_matcher_component__WEBPACK_IMPORTED_MODULE_31__.CardMatcherComponent,
        _yu_gi_oh_collection_card_consultation_component__WEBPACK_IMPORTED_MODULE_32__.CardConsultationComponent,
        _bar_collection_information_bar_collection_information_component__WEBPACK_IMPORTED_MODULE_33__.BarCollectionInformationComponent,
        _send_card_to_other_collection_modal_send_card_to_other_collection_modal_component__WEBPACK_IMPORTED_MODULE_34__.SendCardToOtherCollectionModalComponent,
        _dialog_import_ydke_dialog_import_ydke_component__WEBPACK_IMPORTED_MODULE_35__.DialogImportYdkeComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_39__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_38__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__.TranslateModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_42__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_42__.ReactiveFormsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_43__.MatCardModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_44__.MatFormFieldModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_45__.NgbModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_46__.MatButtonModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_47__.MatSidenavModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_48__.MatSlideToggleModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_49__.MatRippleModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_50__.MatIconModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_51__.MatSnackBarModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_52__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_53__.MatSelectModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_54__.MatDialogModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_55__.MatCheckboxModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_56__.MatTabsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_57__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_58__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_59__.MatSortModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_60__.MatDividerModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_61__.DragDropModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_62__.MatAutocompleteModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_63__.MatExpansionModule, ng2_dragula__WEBPACK_IMPORTED_MODULE_64__.DragulaModule, ngx_color_sketch__WEBPACK_IMPORTED_MODULE_65__.ColorSketchModule,
        ngx_color_github__WEBPACK_IMPORTED_MODULE_66__.ColorGithubModule,
        ngx_color_circle__WEBPACK_IMPORTED_MODULE_67__.ColorCircleModule,
        // SocialLoginModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_68__.MatProgressSpinnerModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_69__.MatBadgeModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_70__.MatTooltipModule] }); })();


/***/ }),

/***/ 1109:
/*!************************************!*\
  !*** ./src/app/array-sort-pipe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArraySortPipe": () => (/* binding */ ArraySortPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ArraySortPipe {
    transform(array, field, sortString) {
        if (!Array.isArray(array)) {
            return;
        }
        if (field) {
            if (sortString) {
                array.sort((a, b) => a[field].toLowerCase().localeCompare(b[field].toLowerCase()));
                return array;
            }
            else {
                array.sort((a, b) => {
                    if (a[field] < b[field]) {
                        return -1;
                    }
                    else if (a[field] > b[field]) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
                return array;
            }
        }
        else {
            if (sortString) {
                array.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
                return array;
            }
            else {
                array.sort((a, b) => {
                    if (a < b) {
                        return -1;
                    }
                    else if (a > b) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
                return array;
            }
        }
    }
}
ArraySortPipe.ɵfac = function ArraySortPipe_Factory(t) { return new (t || ArraySortPipe)(); };
ArraySortPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sort", type: ArraySortPipe, pure: true });


/***/ }),

/***/ 9041:
/*!*****************************!*\
  !*** ./src/app/ban.pipe.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BanPipe": () => (/* binding */ BanPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class BanPipe {
    transform(value, ...args) {
        return String(value === 'Banned' ? 0 : value === 'Limited' ? 1 : value === 'Semi-Limited' ? 2 : 3);
    }
}
BanPipe.ɵfac = function BanPipe_Factory(t) { return new (t || BanPipe)(); };
BanPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ban", type: BanPipe, pure: true });


/***/ }),

/***/ 9364:
/*!************************************************************************************!*\
  !*** ./src/app/bar-collection-information/bar-collection-information.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarCollectionInformationComponent": () => (/* binding */ BarCollectionInformationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ 7266);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);





function BarCollectionInformationComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("contextmenu", function BarCollectionInformationComponent_div_1_div_1_Template_img_contextmenu_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.removeImageFromCollection()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.backEndCardUrl + ctx_r1.collection.mainCardApiId + "/image-cropped", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function BarCollectionInformationComponent_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" - Prix total ~", ctx_r2.totalPrice, "\u20AC");
} }
function BarCollectionInformationComponent_div_1_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BarCollectionInformationComponent_div_1_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.saveCollection()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Sauvegarder ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BarCollectionInformationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BarCollectionInformationComponent_div_1_div_1_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BarCollectionInformationComponent_div_1_span_4_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, BarCollectionInformationComponent_div_1_button_6_Template, 2, 0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.collection == null ? null : ctx_r0.collection.mainCardApiId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", ctx_r0.isCollection ? "Collection" : "Deck", " ", ctx_r0.collection.name, " (", ctx_r0.collection.totalItems, " cartes) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.totalPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.staticCollection && ctx_r0.canSave);
} }
class BarCollectionInformationComponent {
    constructor() {
        this.backEndCardUrl = _global__WEBPACK_IMPORTED_MODULE_0__.backendUrl + '/cards/';
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.removeImage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
    }
    saveCollection() {
        this.save.emit();
    }
    removeImageFromCollection() {
        this.removeImage.emit();
    }
}
BarCollectionInformationComponent.ɵfac = function BarCollectionInformationComponent_Factory(t) { return new (t || BarCollectionInformationComponent)(); };
BarCollectionInformationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BarCollectionInformationComponent, selectors: [["app-bar-collection-information"]], inputs: { collection: "collection", staticCollection: "staticCollection", canSave: "canSave", totalPrice: "totalPrice", isCollection: "isCollection" }, outputs: { save: "save", removeImage: "removeImage" }, decls: 2, vars: 1, consts: [[2, "background-color", "rgb(61,61,61)", "width", "100%", "display", "flex", "justify-content", "center"], ["style", "display: flex; align-items: center; padding: 8px", 4, "ngIf"], [2, "display", "flex", "align-items", "center", "padding", "8px"], [4, "ngIf"], [2, "color", "white"], ["mat-stroked-button", "", "style", "color: white; margin-left: 8px; border: 1px solid white !important;", 3, "click", 4, "ngIf"], ["alt", "website icon", 2, "width", "42px", "height", "42px", "border", "0", 3, "src", "contextmenu"], ["mat-stroked-button", "", 2, "color", "white", "margin-left", "8px", "border", "1px solid white !important", 3, "click"]], template: function BarCollectionInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BarCollectionInformationComponent_div_1_Template, 7, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.collection);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXItY29sbGVjdGlvbi1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6128:
/*!**************************************************!*\
  !*** ./src/app/collection-new-deactive-guard.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionNewDeactivateGuard": () => (/* binding */ CollectionNewDeactivateGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class CollectionNewDeactivateGuard {
    canDeactivate(component, currentRoute, currentState, nextState) {
        return component.canDeactivate();
    }
}
CollectionNewDeactivateGuard.ɵfac = function CollectionNewDeactivateGuard_Factory(t) { return new (t || CollectionNewDeactivateGuard)(); };
CollectionNewDeactivateGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CollectionNewDeactivateGuard, factory: CollectionNewDeactivateGuard.ɵfac });


/***/ }),

/***/ 1988:
/*!****************************************!*\
  !*** ./src/app/deck-deactive-guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeckDeactivateGuard": () => (/* binding */ DeckDeactivateGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class DeckDeactivateGuard {
    canDeactivate(component) {
        return component.canDeactivate();
    }
}
DeckDeactivateGuard.ɵfac = function DeckDeactivateGuard_Factory(t) { return new (t || DeckDeactivateGuard)(); };
DeckDeactivateGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DeckDeactivateGuard, factory: DeckDeactivateGuard.ɵfac });


/***/ }),

/***/ 5557:
/*!********************************************************************************!*\
  !*** ./src/app/dialog-import-collection/dialog-import-collection.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogImportCollectionComponent": () => (/* binding */ DialogImportCollectionComponent),
/* harmony export */   "ImportData": () => (/* binding */ ImportData)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _yugioh_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../yugioh.service */ 5594);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ 5892);












function DialogImportCollectionComponent_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const set_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", set_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", set_r2.name, " (", set_r2.code, ")");
} }
function DialogImportCollectionComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", language_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", language_r3, "");
} }
class ImportData {
}
class DialogImportCollectionComponent {
    constructor(dialogRef, data, yugiohService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.sets = [];
        this.activeLanguage = 'fr';
        this.languages = ['fr', 'en'];
        this.selectedIndex = 0;
        if (data?.type === 'DECK') {
            this.placeholder = `Main deck
1 Souleating Oviraptor SR04
1x Aérosol de Destruction
Extra deck
1 Evolzar Dolkka
1 Superdreadnought Rail Cannon Gustav Max
Side deck
6x TrOU noIr
2 Ultimate Conductor Tyranno`;
        }
        else {
            this.placeholder = `1 Souleating Oviraptor SR04
1x Aérosol de Destruction
6x TrOU noIr
2 Ultimate Conductor Tyranno`;
        }
        yugiohService.getSets().subscribe(value => {
            this.sets = value;
            this.activeSet = value[0];
        });
    }
    ngOnInit() {
    }
    onCancelClick() {
        this.dialogRef.close();
    }
    onConfirmClick() {
        const data = new ImportData();
        data.selectedIndex = this.selectedIndex;
        if (this.selectedIndex === 0) {
            data.importText = this.collectionString;
        }
        else if (this.selectedIndex === 1) {
            data.setCode = this.activeSet.code;
            data.language = this.activeLanguage;
        }
        this.dialogRef.close(data);
    }
}
DialogImportCollectionComponent.ɵfac = function DialogImportCollectionComponent_Factory(t) { return new (t || DialogImportCollectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_yugioh_service__WEBPACK_IMPORTED_MODULE_0__.YugiohService)); };
DialogImportCollectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DialogImportCollectionComponent, selectors: [["app-dialog-import-collection"]], decls: 23, vars: 7, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [2, "width", "100%", 3, "selectedIndex", "selectedIndexChange"], ["label", "Import manuel"], ["matInput", "", 2, "height", "300px", "width", "100%", "border", "#3b3b3b 1px solid", "padding", "8px", 3, "placeholder", "ngModel", "ngModelChange"], ["label", "Import par set"], [2, "width", "100%", "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center", "margin-top", "8px"], ["appearance", "outline", "color", "accent", 1, "w-100"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-dialog-actions", ""], ["mat-button", "", "type", "button", 3, "click"], ["mat-button", "", "type", "submit", 3, "click"], [3, "value"]], template: function DialogImportCollectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Importer une collection ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "mat-tab-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedIndexChange", function DialogImportCollectionComponent_Template_mat_tab_group_selectedIndexChange_3_listener($event) { return ctx.selectedIndex = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-tab", 3)(5, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DialogImportCollectionComponent_Template_textarea_ngModelChange_5_listener($event) { return ctx.collectionString = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-tab", 5)(7, "div", 6)(8, "mat-form-field", 7)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Set");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function DialogImportCollectionComponent_Template_mat_select_valueChange_11_listener($event) { return ctx.activeSet = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, DialogImportCollectionComponent_mat_option_12_Template, 2, 3, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 7)(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Langue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function DialogImportCollectionComponent_Template_mat_select_valueChange_16_listener($event) { return ctx.activeLanguage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, DialogImportCollectionComponent_mat_option_17_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10)(19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogImportCollectionComponent_Template_button_click_19_listener() { return ctx.onCancelClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogImportCollectionComponent_Template_button_click_21_listener() { return ctx.onConfirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx.placeholder)("ngModel", ctx.collectionString);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.activeSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sets);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.activeLanguage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.languages);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTab], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2ctaW1wb3J0LWNvbGxlY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2491:
/*!********************************************************************!*\
  !*** ./src/app/dialog-import-ydke/dialog-import-ydke.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogImportYdkeComponent": () => (/* binding */ DialogImportYdkeComponent),
/* harmony export */   "YdkeImportData": () => (/* binding */ YdkeImportData)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 9121);









function DialogImportYdkeComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", language_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", language_r1, "");
} }
class YdkeImportData {
    constructor() {
        this.language = 'fr';
    }
}
class DialogImportYdkeComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.languages = ['fr', 'en'];
        this.data = new YdkeImportData();
    }
    ngOnInit() {
    }
    onCancelClick() {
        this.dialogRef.close();
    }
    onConfirmClick() {
        this.dialogRef.close(this.data);
    }
}
DialogImportYdkeComponent.ɵfac = function DialogImportYdkeComponent_Factory(t) { return new (t || DialogImportYdkeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef)); };
DialogImportYdkeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogImportYdkeComponent, selectors: [["app-dialog-import-ydke"]], decls: 15, vars: 4, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [2, "width", "100%", "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center", "margin-top", "8px"], ["matInput", "", 2, "height", "200px", "width", "95%", "border", "#3b3b3b 1px solid", "padding", "8px", "margin-bottom", "8px", 3, "placeholder", "ngModel", "ngModelChange"], ["appearance", "outline", "color", "accent", 1, "w-100"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-dialog-actions", ""], ["mat-button", "", "type", "button", 3, "click"], ["mat-button", "", "type", "submit", 3, "click"], [3, "value"]], template: function DialogImportYdkeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Import YDKE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogImportYdkeComponent_Template_textarea_ngModelChange_4_listener($event) { return ctx.data.ydkeString = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 4)(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Langue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DialogImportYdkeComponent_Template_mat_select_valueChange_8_listener($event) { return ctx.data.language = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DialogImportYdkeComponent_mat_option_9_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogImportYdkeComponent_Template_button_click_11_listener() { return ctx.onCancelClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogImportYdkeComponent_Template_button_click_13_listener() { return ctx.onConfirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeholder)("ngModel", ctx.data.ydkeString);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.data.language);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2ctaW1wb3J0LXlka2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4045:
/*!*************************************************************************************!*\
  !*** ./src/app/dialog-remove-collection/dialog-edit-remove-collection.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogEditRemoveCollectionComponent": () => (/* binding */ DialogEditRemoveCollectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _yes_no_dialog_yes_no_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../yes-no-dialog/yes-no-dialog.component */ 7662);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var ngx_color_circle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-color/circle */ 7489);









class DialogEditRemoveCollectionComponent {
    constructor(dialogRef, data, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    onCancelClick() {
        this.dialogRef.close();
    }
    onRemoveClick() {
        this.dialog.open(_yes_no_dialog_yes_no_dialog_component__WEBPACK_IMPORTED_MODULE_0__.YesNoDialogComponent, {
            width: '400px',
        }).afterClosed().subscribe(value => {
            if (value) {
                this.data.result = 'REMOVE';
                this.dialogRef.close(this.data);
            }
        });
    }
    onConfirmClick() {
        this.data.result = 'OK';
        this.dialogRef.close(this.data);
    }
    changeComplete($event) {
        this.data.color = $event.color.hex;
    }
}
DialogEditRemoveCollectionComponent.ɵfac = function DialogEditRemoveCollectionComponent_Factory(t) { return new (t || DialogEditRemoveCollectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog)); };
DialogEditRemoveCollectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DialogEditRemoveCollectionComponent, selectors: [["app-dialog-remove-collection"]], decls: 28, vars: 4, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [2, "width", "100%"], ["matInput", "", 3, "ngModel", "ngModelChange"], [2, "display", "flex", "align-items", "center", "justify-content", "center"], [2, "width", "50%"], [2, "width", "50%", "display", "flex", "align-items", "center", "justify-content", "center"], [3, "color", "onChangeComplete"], ["mat-dialog-actions", ""], ["mat-button", "", "type", "button", 3, "click"], ["mat-button", "", "type", "submit", 3, "click"]], template: function DialogEditRemoveCollectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Edition / Suppression");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "div")(4, "mat-form-field", 2)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DialogEditRemoveCollectionComponent_Template_input_ngModelChange_7_listener($event) { return ctx.data.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div")(9, "mat-form-field", 2)(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Cr\u00E9\u00E9 par");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DialogEditRemoveCollectionComponent_Template_input_ngModelChange_12_listener($event) { return ctx.data.createdBy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4)(14, "div", 5)(15, "mat-form-field", 2)(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Couleur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DialogEditRemoveCollectionComponent_Template_input_ngModelChange_18_listener($event) { return ctx.data.color = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 6)(20, "color-circle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onChangeComplete", function DialogEditRemoveCollectionComponent_Template_color_circle_onChangeComplete_20_listener($event) { return ctx.changeComplete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8)(22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogEditRemoveCollectionComponent_Template_button_click_22_listener() { return ctx.onCancelClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogEditRemoveCollectionComponent_Template_button_click_24_listener() { return ctx.onRemoveClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Supprimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogEditRemoveCollectionComponent_Template_button_click_26_listener() { return ctx.onConfirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Mettre \u00E0 jour");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.data.createdBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.data.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx.data.color);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, ngx_color_circle__WEBPACK_IMPORTED_MODULE_7__.CircleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2ctZWRpdC1yZW1vdmUtY29sbGVjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2945:
/*!****************************************!*\
  !*** ./src/app/drag-drop.directive.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragDropDirective": () => (/* binding */ DragDropDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class DragDropDirective {
    constructor() {
        this.onFileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        //@HostBinding('style.background-color') public background = '#white';
        this.opacity = '1';
    }
    // Dragover listener
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        //this.background = '#9ecbec';
        this.opacity = '0.8';
    }
    // Dragleave listener
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        //this.background = '#f5fcff';
        this.opacity = '1';
    }
    // Drop listener
    ondrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        // this.background = '#f5fcff';
        this.opacity = '1';
        const files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.onFileDropped.emit(files);
        }
    }
}
DragDropDirective.ɵfac = function DragDropDirective_Factory(t) { return new (t || DragDropDirective)(); };
DragDropDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DragDropDirective, selectors: [["", "appDragDrop", ""]], hostVars: 2, hostBindings: function DragDropDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function DragDropDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function DragDropDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function DragDropDirective_drop_HostBindingHandler($event) { return ctx.ondrop($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", ctx.opacity);
    } }, outputs: { onFileDropped: "onFileDropped" } });


/***/ }),

/***/ 2177:
/*!********************************************************!*\
  !*** ./src/app/empty-layout/empty-layout.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyLayoutComponent": () => (/* binding */ EmptyLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);




function EmptyLayoutComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-top", ctx_r0.displayHorizontal ? "0" : "8px")("margin-left", ctx_r0.displayHorizontal ? "8px" : "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", ctx_r0.message);
} }
class EmptyLayoutComponent {
    constructor() { }
}
EmptyLayoutComponent.ɵfac = function EmptyLayoutComponent_Factory(t) { return new (t || EmptyLayoutComponent)(); };
EmptyLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmptyLayoutComponent, selectors: [["app-empty-layout"]], inputs: { hideBackground: "hideBackground", displayHorizontal: "displayHorizontal", message: "message", iconFontSize: "iconFontSize" }, decls: 4, vars: 11, consts: [[1, "flex-center", "bg-third", 2, "border-radius", "24px"], ["aria-hidden", "false", "aria-label", "Empty layout icon", 2, "height", "auto", "width", "auto"], [3, "margin-top", "margin-left", "translate", 4, "ngIf"], [3, "translate"]], template: function EmptyLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " error_outline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmptyLayoutComponent_div_3_Template, 1, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("flex-direction", ctx.displayHorizontal ? "row" : "column")("background-color", ctx.hideBackground ? "transparent" : "")("padding", ctx.hideBackground ? "0px" : "1rem")("margin", ctx.hideBackground ? "0px" : "0.5rem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-size", ctx.iconFontSize ? ctx.iconFontSize + "px" : "24px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXB0eS1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4365:
/*!***********************************************!*\
  !*** ./src/app/error-notifier.interceptor.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorNotifierInterceptor": () => (/* binding */ ErrorNotifierInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snack-bar/snack-bar.component */ 4569);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3935);







class ErrorNotifierInterceptor {
    constructor(snackBar, router, translate) {
        this.snackBar = snackBar;
        this.router = router;
        this.translate = translate;
    }
    intercept(req, next) {
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse) {
                // console.log(event);
                const splitUrl = req.url.split('/');
                const endpoint = splitUrl[splitUrl.length - 1];
                // A 2XX status code is contained in the event and the event is not a GET, or login or logout
                if (req.method.localeCompare('GET') !== 0
                    && endpoint.localeCompare('login') !== 0
                    && endpoint.localeCompare('logout') !== 0
                    && Math.floor(event.status / 100) === 2
                    && !req.url.includes('/cards')) {
                    const params = {
                        isSuccess: true,
                        body: req.body,
                        endpoint,
                        url: req.url,
                        extraMessage: null,
                        doAction: () => this.snackBar.dismiss()
                    };
                    this.snackBar.openFromComponent(_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_0__.SnackBarComponent, {
                        data: params,
                        duration: 5000
                    });
                }
            }
        }, (error) => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpErrorResponse) {
                const splitUrl = req.url.split('/');
                if (error.status === 404) {
                    this.router.navigateByUrl('/not-found', { replaceUrl: true });
                }
                else if (error.status === 401) {
                    this.translate.get('UNAUTHORIZED').subscribe(value => {
                        const params = {
                            isSuccess: false,
                            body: req.body,
                            endpoint: splitUrl[splitUrl.length - 1],
                            url: req.url,
                            extraMessage: value,
                            doAction: () => {
                                // retry
                                console.log('ok');
                                this.snackBar.dismiss();
                                /*return next.handle(req);*/ // TODO : find how to do the retry
                            }
                        };
                        this.snackBar.openFromComponent(_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_0__.SnackBarComponent, {
                            data: params,
                            duration: 200000
                        });
                    });
                }
                else if (Math.floor(error.status / 100) >= 4) { // 4XX or 5XX status code (except 404 because it's processed before)
                    const params = {
                        isSuccess: false,
                        body: req.body,
                        endpoint: splitUrl[splitUrl.length - 1],
                        url: req.url,
                        extraMessage: null,
                        doAction: () => {
                            // retry
                            console.log('ok');
                            this.snackBar.dismiss();
                            /*return next.handle(req);*/ // TODO : find how to do the retry
                        }
                    };
                    this.snackBar.openFromComponent(_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_0__.SnackBarComponent, {
                        data: params,
                        duration: 200000
                    });
                }
            }
        }));
    }
}
ErrorNotifierInterceptor.ɵfac = function ErrorNotifierInterceptor_Factory(t) { return new (t || ErrorNotifierInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService)); };
ErrorNotifierInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ErrorNotifierInterceptor, factory: ErrorNotifierInterceptor.ɵfac });


/***/ }),

/***/ 5015:
/*!**********************************************************!*\
  !*** ./src/app/filter-dialog/filter-dialog.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterDialogComponent": () => (/* binding */ FilterDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _yugioh_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../yugioh.service */ 5594);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _filter_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-dto */ 880);















function FilterDialogComponent_div_8_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FilterDialogComponent_div_8_div_4_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const cardtype_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.toggle(cardtype_r9, ctx_r10.activeCardTypes));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const cardtype_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r8.activeCardTypes.indexOf(cardtype_r9) !== -1 ? "selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cardtype_r9, " ");
  }
}

function FilterDialogComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Type de carte");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, FilterDialogComponent_div_8_div_4_Template, 2, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.cardTypes);
  }
}

function FilterDialogComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FilterDialogComponent_div_13_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const attribute_r12 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.toggle(attribute_r12, ctx_r13.activeAttributes));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const attribute_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.activeAttributes.indexOf(attribute_r12) !== -1 ? "selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", attribute_r12, " ");
  }
}

function FilterDialogComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FilterDialogComponent_div_18_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const level_r15 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.toggle(level_r15, ctx_r16.activeLevels));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const level_r15 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r2.activeLevels.indexOf(level_r15) !== -1 ? "selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", level_r15, " ");
  }
}

function FilterDialogComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FilterDialogComponent_div_23_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const race_r18 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.toggle(race_r18, ctx_r19.activeMonsterRaces));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const race_r18 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r3.activeMonsterRaces.indexOf(race_r18) !== -1 ? "selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", race_r18, " ");
  }
}

function FilterDialogComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FilterDialogComponent_div_28_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const spell_r21 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.toggle(spell_r21, ctx_r22.activeSpellRaces));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const spell_r21 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r4.activeSpellRaces.indexOf(spell_r21) !== -1 ? "selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", spell_r21, " ");
  }
}

function FilterDialogComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FilterDialogComponent_div_33_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);
      const trap_r24 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.toggle(trap_r24, ctx_r25.activeTrapRaces));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const trap_r24 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r5.activeTrapRaces.indexOf(trap_r24) !== -1 ? "selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", trap_r24, " ");
  }
}

function FilterDialogComponent_mat_option_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r27, " ");
  }
}

class FilterDialogComponent {
  constructor(data, dialogRef, yugiohService) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.yugiohService = yugiohService;
    this.cardTypes = ['Normal', 'Effect', 'Fusion', 'Ritual', 'Synchro', 'Xyz', 'Pendulum', 'Link', 'Spell', 'Trap'];
    this.activeCardTypes = [];
    this.attributes = ['LIGHT', 'DARK', 'WATER', 'FIRE', 'EARTH', 'WIND', 'DIVINE'];
    this.activeAttributes = [];
    this.levels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    this.activeLevels = [];
    this.monsterRaces = ['Aqua', 'Beast', 'Beast-Warrior', 'Creator-God', 'Cyberse', 'Dinosaur', 'Divine-Beast', 'Dragon', 'Fairy', 'Fiend', 'Fish', 'Insect', 'Machine', 'Plant', 'Psychic', 'Pyro', 'Reptile', 'Rock', 'Sea Serpent', 'Spellcaster', 'Thunder', 'Warrior', 'Winged Beast', 'Wyrm', 'Zombie'];
    this.activeMonsterRaces = [];
    this.spellRaces = ['Normal', 'Field', 'Equip', 'Continuous', 'Quick-Play', 'Ritual'];
    this.activeSpellRaces = [];
    this.trapRaces = ['Normal', 'Continuous', 'Counter'];
    this.activeTrapRaces = [];
    this.archetypeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('');
    this.activeArchetype = '';
    this.options = [];
    this.filteredOptions = this.archetypeControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(value => this._filter(value || '')));
    this.tmpFilterDto = JSON.parse(JSON.stringify(data));
    console.log(this.tmpFilterDto);
    this.activeLevels = this.tmpFilterDto.levels;
    this.activeAttributes = this.tmpFilterDto.attributes;
    this.activeCardTypes = this.tmpFilterDto.cardTypes;
    this.activeMonsterRaces = this.tmpFilterDto.monsterRaces;
    this.activeSpellRaces = this.tmpFilterDto.spellRaces;
    this.activeTrapRaces = this.tmpFilterDto.trapRaces;
    this.archetypeControl.setValue(this.tmpFilterDto.archetype);
  }

  ngOnInit() {
    this.yugiohService.getArchetypes().subscribe(value => this.options = value);
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  onConfirmClick() {
    this.data.attributes = this.activeAttributes;
    this.data.levels = this.activeLevels;
    this.data.cardTypes = this.activeCardTypes;
    this.data.monsterRaces = this.activeMonsterRaces;
    this.data.spellRaces = this.activeSpellRaces;
    this.data.trapRaces = this.activeTrapRaces;
    this.data.archetype = this.activeArchetype;
    console.log(this.data);
    this.dialogRef.close();
  }

  toggle(filter, filterList) {
    const index = filterList.indexOf(filter);

    if (index === -1) {
      // Not present
      filterList.push(filter);
    } else {
      // Present
      filterList.splice(index, 1);
    }
  }

  clear() {
    this.activeAttributes = [];
    this.activeLevels = [];
    this.activeCardTypes = [];
    this.activeMonsterRaces = [];
    this.activeSpellRaces = [];
    this.activeTrapRaces = [];
    this.archetypeControl.setValue(undefined);
  }

  _filter(value) {
    const filterValue = value.toLowerCase();
    this.activeArchetype = value;
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}

FilterDialogComponent.ɵfac = function FilterDialogComponent_Factory(t) {
  return new (t || FilterDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_yugioh_service__WEBPACK_IMPORTED_MODULE_0__.YugiohService));
};

FilterDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FilterDialogComponent,
  selectors: [["app-filter-dialog"]],
  decls: 48,
  vars: 11,
  consts: [["mat-dialog-title", ""], [2, "display", "flex", "justify-content", "space-between"], ["mat-button", "", "type", "button", 3, "click"], ["mat-dialog-content", ""], ["style", "display: flex;", 4, "ngIf"], [2, "display", "flex"], [2, "width", "20%", "margin-right", "8px"], [2, "display", "flex", "width", "80%", "flex-wrap", "wrap"], ["style", "cursor: pointer; padding: 8px; margin: 2px;  border-radius: 4px; border: 1px black solid;", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["appearance", "fill", 1, "example-full-width"], ["type", "text", "placeholder", "Branded...", "matInput", "", 3, "formControl", "matAutocomplete"], ["autoActiveFirstOption", ""], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-dialog-actions", ""], [2, "cursor", "pointer", "padding", "8px", "margin", "2px", "border-radius", "4px", "border", "1px black solid", 3, "ngClass", "click"], [3, "value"]],
  template: function FilterDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0)(1, "div", 1)(2, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Filtres");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div")(5, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FilterDialogComponent_Template_button_click_5_listener() {
        return ctx.clear();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "R\u00E9initialiser");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, FilterDialogComponent_div_8_Template, 5, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5)(10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Attribut");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, FilterDialogComponent_div_13_Template, 2, 2, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5)(15, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Level / Rank / Link");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, FilterDialogComponent_div_18_Template, 2, 2, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 5)(20, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Type de monstre");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, FilterDialogComponent_div_23_Template, 2, 2, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 5)(25, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Type de magie");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, FilterDialogComponent_div_28_Template, 2, 2, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 5)(30, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Type de pi\u00E8ge");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, FilterDialogComponent_div_33_Template, 2, 2, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 5)(35, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Arch\u00E9type");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "mat-autocomplete", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, FilterDialogComponent_mat_option_41_Template, 2, 2, "mat-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](42, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 14)(44, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FilterDialogComponent_Template_button_click_44_listener() {
        return ctx.onCancelClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Annuler");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FilterDialogComponent_Template_button_click_46_listener() {
        return ctx.onConfirmClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Ok");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](40);

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.collectionView);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.attributes);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.levels);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.monsterRaces);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.spellRaces);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.trapRaces);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.archetypeControl)("matAutocomplete", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](42, 9, ctx.filteredOptions));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: [".selected[_ngcontent-%COMP%] {\n  background-color: #959da9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGIiwiZmlsZSI6ImZpbHRlci1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NTlkYTk7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 880:
/*!*********************************************!*\
  !*** ./src/app/filter-dialog/filter-dto.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterDto": () => (/* binding */ FilterDto)
/* harmony export */ });
class FilterDto {
    constructor() {
        this.attributes = [];
        this.levels = [];
        this.cardTypes = [];
        this.monsterRaces = [];
        this.spellRaces = [];
        this.trapRaces = [];
        this.collectionView = true;
    }
}


/***/ }),

/***/ 5853:
/*!******************************************************************!*\
  !*** ./src/app/full-image-dialog/full-image-dialog.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullImageDialogComponent": () => (/* binding */ FullImageDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);




class FullImageDialogComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    onClose() {
        this.dialogRef.close(true);
    }
}
FullImageDialogComponent.ɵfac = function FullImageDialogComponent_Factory(t) { return new (t || FullImageDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef)); };
FullImageDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullImageDialogComponent, selectors: [["app-full-image-dialog"]], decls: 5, vars: 1, consts: [[2, "max-height", "100vh"], [3, "src"], ["align", "center"], ["mat-button", "", "mat-dialog-close", ""]], template: function FullImageDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-actions", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.data, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLWltYWdlLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7266:
/*!***************************!*\
  !*** ./src/app/global.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "backendUrl": () => (/* binding */ backendUrl),
/* harmony export */   "httpOptions": () => (/* binding */ httpOptions),
/* harmony export */   "idAllCollections": () => (/* binding */ idAllCollections),
/* harmony export */   "ygoproApiUrl": () => (/* binding */ ygoproApiUrl)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);

// export const backendUrl = 'https://smash-production.up.railway.app';
const backendUrl = 'https://smash-back.herokuapp.com';
// export const backendUrl = 'http://localhost:8080';
const ygoproApiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
const idAllCollections = 'allCollections';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Content-Type': 'application/json',
    })
};


/***/ }),

/***/ 5294:
/*!**************************************!*\
  !*** ./src/app/loading.directive.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingDirective": () => (/* binding */ LoadingDirective)
/* harmony export */ });
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading/loading.component */ 7409);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class LoadingDirective {
    constructor(templateRef, vcRef, componentFactoryResolver) {
        this.templateRef = templateRef;
        this.vcRef = vcRef;
        this.componentFactoryResolver = componentFactoryResolver;
        // Create resolver for loading component
        this.loadingFactory = this.componentFactoryResolver.resolveComponentFactory(_loading_loading_component__WEBPACK_IMPORTED_MODULE_0__.LoadingComponent);
    }
    set appLoading(loading) {
        this.vcRef.clear();
        if (loading) {
            // create and embed an instance of the loading component
            this.loadingComponent = this.vcRef.createComponent(this.loadingFactory);
        }
        else {
            // embed the contents of the host template
            this.vcRef.createEmbeddedView(this.templateRef);
        }
    }
}
LoadingDirective.ɵfac = function LoadingDirective_Factory(t) { return new (t || LoadingDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver)); };
LoadingDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: LoadingDirective, selectors: [["", "appLoading", ""]], inputs: { appLoading: "appLoading" } });


/***/ }),

/***/ 7409:
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingComponent": () => (/* binding */ LoadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);



class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 5, vars: 0, consts: [[1, "flex-center", "p-3", "m-1", 2, "flex-direction", "column"], ["translate", "", 2, "margin-bottom", "8px", "font-size", "large"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "LOADING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateDirective, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__.MatProgressSpinner], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7457:
/*!******************************************************************!*\
  !*** ./src/app/modal-card-detail/modal-card-detail.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalCardDetailComponent": () => (/* binding */ ModalCardDetailComponent)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ 7266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _yugioh_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../yugioh.service */ 5594);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ 1528);





function ModalCardDetailComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](", ", ctx_r0.card.atk, " ATK, ", ctx_r0.card.def, " DEF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Level / Rank / Link : ", ctx_r0.card.level, "");
} }
function ModalCardDetailComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Prix CardMarket : ", ctx_r1.cardmarketPrice, "\u20AC");
} }
class ModalCardDetailComponent {
    constructor(yugiohService) {
        this.yugiohService = yugiohService;
        this.backEndCardUrl = _global__WEBPACK_IMPORTED_MODULE_0__.backendUrl + '/cards/';
        console.log(this.card);
    }
    ngOnInit() {
        this.yugiohService.getCardPriceById(this.card?.apiId)
            .subscribe(value => {
            if (value?.data && value.data.length > 0) {
                if (value.data[0]?.card_prices && value.data[0].card_prices.length > 0) {
                    this.cardmarketPrice = value.data[0].card_prices[0].cardmarket_price;
                }
            }
        });
    }
}
ModalCardDetailComponent.ɵfac = function ModalCardDetailComponent_Factory(t) { return new (t || ModalCardDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_yugioh_service__WEBPACK_IMPORTED_MODULE_1__.YugiohService)); };
ModalCardDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ModalCardDetailComponent, selectors: [["app-modal-card-detail"]], inputs: { card: "card" }, decls: 16, vars: 8, consts: [[2, "opacity", "1", "padding", "8px"], [2, "display", "flex", "justify-content", "space-between"], [2, "display", "flex", "flex-direction", "column"], [2, "font-weight", "bolder", "font-size", "20px", "height", "100%"], [4, "ngIf"], ["alt", "Character picture", 1, "img-fluid", 2, "margin-right", "4px", "width", "124px", "height", "124px", "border", "0", 3, "src"], [2, "width", "94%", "margin-left", "3%", "margin-top", "4px", "padding-bottom", "4px", "color", "black"]], template: function ModalCardDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ModalCardDetailComponent_span_9_Template, 4, 3, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div")(13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ModalCardDetailComponent_div_15_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.card.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.card.race, ", ", ctx.card.attribute, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.card.type, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.card.type !== "Spell Card" && ctx.card.type !== "Trap Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.backEndCardUrl + ctx.card.apiId + "/image-cropped", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.card.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cardmarketPrice);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__.MatDivider], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1jYXJkLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1142:
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);




class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 8, vars: 0, consts: [[1, "flex-center", 2, "flex-direction", "column", "height", "100%"], [2, "margin-top", "10%", "font-size", "5rem"], [1, "far", "fa-frown-open"], ["translate", "", 2, "line-height", "1"], ["mat-stroked-button", "", "routerLink", "/", 2, "margin-top", "16px"], ["translate", ""]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "404-MESSAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "GO-BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateDirective, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3289:
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);


class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
SafePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _filter_dialog_filter_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter-dialog/filter-dto */ 880);
/* harmony import */ var _filter_dialog_filter_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter-dialog/filter-dialog.component */ 5015);
/* harmony import */ var ydke__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ydke */ 8459);
/* harmony import */ var _yu_gi_oh_collection_collection_import_pojo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../yu-gi-oh/collection/collection-import-pojo */ 6212);
/* harmony import */ var _sort_dialog_sort_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sort-dialog/sort-dialog.component */ 6056);
/* harmony import */ var _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sort-dialog/card-sort */ 6202);
/* harmony import */ var _dialog_import_ydke_dialog_import_ydke_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialog-import-ydke/dialog-import-ydke.component */ 2491);
/* harmony import */ var _yu_gi_oh_collection_ydke_import_pojo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../yu-gi-oh/collection/ydke-import-pojo */ 1176);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 8562);


















function SearchComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SearchComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r5.openImportDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Import ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SearchComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SearchComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r7.download()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Export ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SearchComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SearchComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.exportAsYdke()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " YDKE export ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SearchComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SearchComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r11.importAsYdke()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " YDKE import ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SearchComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SearchComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); ctx_r13.searchValue = ""; return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r13.refreshSearchValue()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
class SearchComponent {
    constructor(dialog, snackBar) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.showYdke = true;
        this.showDownloadAndUpload = true;
        this.searchValueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.filterDto = new _filter_dialog_filter_dto__WEBPACK_IMPORTED_MODULE_0__.FilterDto();
        this.filterDtoChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.sort = _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_5__.CardSort.alphabeticalAsc;
        this.sortChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.downloadClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.importYdkeClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.exportYdkeClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.importDialogClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    }
    ngOnInit() {
        // TODO : afficher filtre icon avec border si filterDto != null
    }
    refreshSearchValue() {
        this.searchValueChanged.emit(this.searchValue);
    }
    isFiltered() {
        return this.filterDto.attributes.length > 0
            || this.filterDto.levels.length > 0
            || this.filterDto.cardTypes.length > 0
            || this.filterDto.monsterRaces.length > 0
            || this.filterDto.spellRaces.length > 0
            || this.filterDto.trapRaces.length > 0
            || this.filterDto.archetype;
    }
    openFilterDialog() {
        const dialog = this.dialog.open(_filter_dialog_filter_dialog_component__WEBPACK_IMPORTED_MODULE_1__.FilterDialogComponent, {
            width: '500px',
            data: this.filterDto
        });
        dialog.afterClosed().subscribe(() => {
            this.filterDtoChanged.emit(this.filterDto);
        });
    }
    download() {
        this.downloadClicked.emit();
    }
    exportAsYdke() {
        this.exportYdkeClicked.emit();
    }
    importAsYdke() {
        this.dialog.open(_dialog_import_ydke_dialog_import_ydke_component__WEBPACK_IMPORTED_MODULE_6__.DialogImportYdkeComponent, {
            width: '500px',
        }).afterClosed().subscribe((data) => {
            if (data) {
                this.filterDtoChanged.emit(this.filterDto);
                const deck = ydke__WEBPACK_IMPORTED_MODULE_2__.parseURL(data.ydkeString);
                const lines = new Array();
                const mapMainApiIdQuantity = new Map();
                deck.main.forEach(apiId => {
                    const quantity = mapMainApiIdQuantity.get(apiId);
                    if (quantity) {
                        mapMainApiIdQuantity.set(apiId, quantity + 1);
                    }
                    else {
                        mapMainApiIdQuantity.set(apiId, 1);
                    }
                });
                const mapExtraApiIdQuantity = new Map();
                deck.extra.forEach(apiId => {
                    const quantity = mapExtraApiIdQuantity.get(apiId);
                    if (quantity) {
                        mapExtraApiIdQuantity.set(apiId, quantity + 1);
                    }
                    else {
                        mapExtraApiIdQuantity.set(apiId, 1);
                    }
                });
                const mapSideApiIdQuantity = new Map();
                deck.side.forEach(apiId => {
                    const quantity = mapSideApiIdQuantity.get(apiId);
                    if (quantity) {
                        mapSideApiIdQuantity.set(apiId, quantity + 1);
                    }
                    else {
                        mapSideApiIdQuantity.set(apiId, 1);
                    }
                });
                mapMainApiIdQuantity.forEach((value, key) => lines.push(new _yu_gi_oh_collection_collection_import_pojo__WEBPACK_IMPORTED_MODULE_3__.CollectionImportPojo(value, null, null, 0, String(key))));
                mapExtraApiIdQuantity.forEach((value, key) => lines.push(new _yu_gi_oh_collection_collection_import_pojo__WEBPACK_IMPORTED_MODULE_3__.CollectionImportPojo(value, null, null, 1, String(key))));
                mapSideApiIdQuantity.forEach((value, key) => lines.push(new _yu_gi_oh_collection_collection_import_pojo__WEBPACK_IMPORTED_MODULE_3__.CollectionImportPojo(value, null, null, 2, String(key))));
                console.log(lines);
                this.importYdkeClicked.emit(new _yu_gi_oh_collection_ydke_import_pojo__WEBPACK_IMPORTED_MODULE_7__.YdkeImportPojo(data.language, lines));
            }
        });
    }
    openImportDialog() {
        this.importDialogClicked.emit();
    }
    openSortDialog() {
        const dialogRef = this.dialog.open(_sort_dialog_sort_dialog_component__WEBPACK_IMPORTED_MODULE_4__.SortDialogComponent, {
            width: '300px',
            data: {
                sort: this.sort !== undefined ? this.sort : null,
                collectionView: true
            }
        });
        dialogRef.afterClosed().subscribe(value => {
            this.sort = value;
            this.sortChanged.emit(this.sort);
        });
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar)); };
SearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], inputs: { showYdke: "showYdke", showDownloadAndUpload: "showDownloadAndUpload", searchValue: "searchValue" }, outputs: { searchValueChanged: "searchValueChanged", filterDtoChanged: "filterDtoChanged", sortChanged: "sortChanged", downloadClicked: "downloadClicked", importYdkeClicked: "importYdkeClicked", exportYdkeClicked: "exportYdkeClicked", importDialogClicked: "importDialogClicked" }, decls: 18, vars: 7, consts: [[2, "display", "flex", "flex-direction", "column", "align-items", "center"], [2, "margin-top", "4px"], ["mat-stroked-button", "", 3, "click", 4, "ngIf"], ["style", "margin-left: 4px", "mat-stroked-button", "", 3, "click", 4, "ngIf"], [2, "display", "flex", "align-items", "center", "justify-content", "center", "flex-wrap", "wrap"], [3, "ngClass", "click"], ["appearance", "outline", 2, "width", "400px"], ["matInput", "", "type", "text", "accept", "image/png, image/jpeg", 3, "ngModel", "ngModelChange", "keyup"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], [3, "click"], ["mat-stroked-button", "", 3, "click"], ["mat-stroked-button", "", 2, "margin-left", "4px", 3, "click"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, SearchComponent_button_2_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, SearchComponent_button_3_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, SearchComponent_button_4_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, SearchComponent_button_5_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 4)(7, "div")(8, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SearchComponent_Template_mat_icon_click_8_listener() { return ctx.openFilterDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " filter_alt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-form-field", 6)(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Recherche de cartes");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_13_listener($event) { return ctx.searchValue = $event; })("keyup", function SearchComponent_Template_input_keyup_13_listener() { return ctx.refreshSearchValue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, SearchComponent_button_14_Template, 3, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div")(16, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SearchComponent_Template_mat_icon_click_16_listener() { return ctx.openSortDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, " sort ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showDownloadAndUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showDownloadAndUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showYdke);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showYdke);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx.isFiltered() ? "selected" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.searchValue);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatSuffix, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput], styles: ["mat-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.selected[_ngcontent-%COMP%] {\n  border: 1px #959da9 solid;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtaWNvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIGJvcmRlcjogMXB4ICM5NTlkYTkgc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 442:
/*!******************************************************************************************************!*\
  !*** ./src/app/send-card-to-other-collection-modal/send-card-to-other-collection-modal.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendCardToOtherCollectionModalComponent": () => (/* binding */ SendCardToOtherCollectionModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _yugioh_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../yugioh.service */ 5594);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);













function SendCardToOtherCollectionModalComponent_mat_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 3, option_r2.type) + " - " + option_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, option_r2.type), " - ", option_r2.name, " ");
  }
}

class SendCardToOtherCollectionModalComponent {
  constructor(yugiohService, dialogRef) {
    this.yugiohService = yugiohService;
    this.dialogRef = dialogRef;
    this.options = [];
  }

  ngOnInit() {
    // TODO : gect collections & decks even lighter (only id & name)
    // TODO : add quantity (ex: send 1 card out of 3)
    this.yugiohService.getCollections().subscribe(collections => this.options = collections);
    this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(localStorage.getItem('send-card-to-other-collection-id-and-name') ?? '');
    this.filteredOptions = this.myControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(value => {
      const name = typeof value === 'string' ? value : value?.name;
      localStorage.setItem('send-card-to-other-collection-id-and-name', name);
      return name ? this._filter(name) : this.options.slice();
    }));
  }

  _filter(name) {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  onConfirmClick() {
    const collectionLight = this.options.find(option => option?.name === this.myControl.value.split(' - ')[1]);
    console.log(this.myControl.value);
    console.log(this.options);
    console.log(collectionLight);
    this.dialogRef.close(collectionLight);
  }

  onCancelClick() {
    this.dialogRef.close();
  }

}

SendCardToOtherCollectionModalComponent.ɵfac = function SendCardToOtherCollectionModalComponent_Factory(t) {
  return new (t || SendCardToOtherCollectionModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_yugioh_service__WEBPACK_IMPORTED_MODULE_0__.YugiohService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef));
};

SendCardToOtherCollectionModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SendCardToOtherCollectionModalComponent,
  selectors: [["app-send-card-to-other-collection-modal"]],
  decls: 17,
  vars: 5,
  consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "example-form"], ["appearance", "outline", 2, "width", "100%"], ["type", "text", "aria-label", "Envoie vers une autre collection ou deck", "matInput", "", 3, "formControl", "matAutocomplete"], ["autoActiveFirstOption", ""], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-dialog-actions", ""], ["mat-button", "", "type", "button", 3, "click"], ["mat-button", "", "type", "button", "cdkFocusInitial", "", 3, "click"], [3, "value"]],
  template: function SendCardToOtherCollectionModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Envoie vers une autre collection ou deck");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "form", 2)(4, "mat-form-field", 3)(5, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Collection ou Deck");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-autocomplete", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SendCardToOtherCollectionModalComponent_mat_option_10_Template, 4, 7, "mat-option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8)(13, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SendCardToOtherCollectionModalComponent_Template_button_click_13_listener() {
        return ctx.onCancelClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Annuler");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SendCardToOtherCollectionModalComponent_Template_button_click_15_listener() {
        return ctx.onConfirmClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Ok");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.myControl)("matAutocomplete", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 3, ctx.filteredOptions));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__.MatAutocompleteTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZW5kLWNhcmQtdG8tb3RoZXItY29sbGVjdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 4569:
/*!**************************************************!*\
  !*** ./src/app/snack-bar/snack-bar.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackBarComponent": () => (/* binding */ SnackBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);





function SnackBarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Service ", ctx_r0.data.endpoint, " executed with success");
} }
function SnackBarComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.data.extraMessage);
} }
function SnackBarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SnackBarComponent_div_2_div_2_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Service ", ctx_r1.data.endpoint, " failed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.data.extraMessage);
} }
class SnackBarComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
    doAction() {
        this.data.doAction();
    }
}
SnackBarComponent.ɵfac = function SnackBarComponent_Factory(t) { return new (t || SnackBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MAT_SNACK_BAR_DATA)); };
SnackBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SnackBarComponent, selectors: [["app-snack-bar"]], decls: 6, vars: 3, consts: [[2, "display", "flex", "justify-content", "space-between", "word-break", "break-word", "align-items", "center"], ["style", "width:70%;", 4, "ngIf"], [2, "width", "30%"], ["mat-stroked-button", "", 2, "float", "right", 3, "click"], [3, "translate"], [2, "width", "70%"], [4, "ngIf"]], template: function SnackBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SnackBarComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SnackBarComponent_div_2_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SnackBarComponent_Template_button_click_4_listener() { return ctx.doAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.isSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.data.isSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", ctx.data.isSuccess ? "OK" : "RETRY");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbmFjay1iYXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6202:
/*!******************************************!*\
  !*** ./src/app/sort-dialog/card-sort.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardSort": () => (/* binding */ CardSort)
/* harmony export */ });
var CardSort;
(function (CardSort) {
    CardSort[CardSort["alphabeticalAsc"] = 0] = "alphabeticalAsc";
    CardSort[CardSort["alphabeticalDesc"] = 1] = "alphabeticalDesc";
    CardSort[CardSort["nbOwnedAsc"] = 2] = "nbOwnedAsc";
    CardSort[CardSort["nbOwnedDesc"] = 3] = "nbOwnedDesc";
    CardSort[CardSort["rarityAsc"] = 4] = "rarityAsc";
    CardSort[CardSort["rarityDesc"] = 5] = "rarityDesc";
    CardSort[CardSort["levelRankLinkAsc"] = 6] = "levelRankLinkAsc";
    CardSort[CardSort["levelRankLinkDesc"] = 7] = "levelRankLinkDesc";
    CardSort[CardSort["atkAsc"] = 8] = "atkAsc";
    CardSort[CardSort["atkDesc"] = 9] = "atkDesc";
    CardSort[CardSort["defAsc"] = 10] = "defAsc";
    CardSort[CardSort["defDesc"] = 11] = "defDesc";
    CardSort[CardSort["priceAsc"] = 12] = "priceAsc";
    CardSort[CardSort["priceDesc"] = 13] = "priceDesc";
})(CardSort || (CardSort = {}));


/***/ }),

/***/ 6056:
/*!******************************************************!*\
  !*** ./src/app/sort-dialog/sort-dialog.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortDialogComponent": () => (/* binding */ SortDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _card_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-sort */ 6202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);







function SortDialogComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Nombre poss\u00E9d\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div")(4, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortDialogComponent_div_11_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.onConfirmClick(ctx_r3.CardSort.nbOwnedAsc)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " arrow_upward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortDialogComponent_div_11_Template_mat_icon_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.onConfirmClick(ctx_r5.CardSort.nbOwnedDesc)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " arrow_downward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.sort === ctx_r0.CardSort.nbOwnedAsc ? "selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.sort === ctx_r0.CardSort.nbOwnedDesc ? "selected" : "");
} }
function SortDialogComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Raret\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div")(4, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortDialogComponent_div_12_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.onConfirmClick(ctx_r6.CardSort.rarityAsc)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " arrow_upward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortDialogComponent_div_12_Template_mat_icon_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.onConfirmClick(ctx_r8.CardSort.rarityDesc)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " arrow_downward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.sort === ctx_r1.CardSort.rarityAsc ? "selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.sort === ctx_r1.CardSort.rarityDesc ? "selected" : "");
} }
function SortDialogComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Prix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div")(4, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortDialogComponent_div_37_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.onConfirmClick(ctx_r9.CardSort.priceAsc)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " arrow_upward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortDialogComponent_div_37_Template_mat_icon_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.onConfirmClick(ctx_r11.CardSort.priceDesc)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " arrow_downward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r2.sort === ctx_r2.CardSort.priceAsc ? "selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r2.sort === ctx_r2.CardSort.priceDesc ? "selected" : "");
} }
class SortDialogComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.CardSort = _card_sort__WEBPACK_IMPORTED_MODULE_0__.CardSort;
        this.sort = _card_sort__WEBPACK_IMPORTED_MODULE_0__.CardSort.alphabeticalAsc;
        this.collectionView = true;
        this.sort = data.sort;
        this.collectionView = data.collectionView;
    }
    onCancelClick() {
        this.dialogRef.close(this.data.sort);
    }
    onConfirmClick(chosenFilter) {
        this.dialogRef.close(chosenFilter);
    }
}
SortDialogComponent.ɵfac = function SortDialogComponent_Factory(t) { return new (t || SortDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef)); };
SortDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SortDialogComponent, selectors: [["app-sort-dialog"]], decls: 41, vars: 11, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [2, "display", "flex", "justify-content", "space-between"], [2, "position", "relative", "left", "8px", "cursor", "pointer", 3, "ngClass", "click"], ["style", "display: flex; justify-content: space-between", 4, "ngIf"], ["mat-dialog-actions", ""], ["mat-button", "", "type", "button", 3, "click"]], template: function SortDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Tri ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "A-Z");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div")(7, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortDialogComponent_Template_mat_icon_click_7_listener() { return ctx.onConfirmClick(ctx.CardSort.alphabeticalAsc); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " arrow_upward ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortDialogComponent_Template_mat_icon_click_9_listener() { return ctx.onConfirmClick(ctx.CardSort.alphabeticalDesc); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " arrow_downward ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SortDialogComponent_div_11_Template, 8, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SortDialogComponent_div_12_Template, 8, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 2)(14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Level / Rank / Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div")(17, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortDialogComponent_Template_mat_icon_click_17_listener() { return ctx.onConfirmClick(ctx.CardSort.levelRankLinkAsc); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " arrow_upward ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortDialogComponent_Template_mat_icon_click_19_listener() { return ctx.onConfirmClick(ctx.CardSort.levelRankLinkDesc); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " arrow_downward ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 2)(22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "ATK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div")(25, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortDialogComponent_Template_mat_icon_click_25_listener() { return ctx.onConfirmClick(ctx.CardSort.atkAsc); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " arrow_upward ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortDialogComponent_Template_mat_icon_click_27_listener() { return ctx.onConfirmClick(ctx.CardSort.atkDesc); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " arrow_downward ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 2)(30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "DEF");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div")(33, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortDialogComponent_Template_mat_icon_click_33_listener() { return ctx.onConfirmClick(ctx.CardSort.defAsc); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " arrow_upward ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortDialogComponent_Template_mat_icon_click_35_listener() { return ctx.onConfirmClick(ctx.CardSort.defDesc); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " arrow_downward ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, SortDialogComponent_div_37_Template, 8, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 5)(39, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortDialogComponent_Template_button_click_39_listener() { return ctx.onCancelClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.sort === ctx.CardSort.alphabeticalAsc ? "selected" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.sort === ctx.CardSort.alphabeticalDesc ? "selected" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.collectionView);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.sort === ctx.CardSort.levelRankLinkAsc ? "selected" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.sort === ctx.CardSort.levelRankLinkDesc ? "selected" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.sort === ctx.CardSort.atkAsc ? "selected" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.sort === ctx.CardSort.atkDesc ? "selected" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.sort === ctx.CardSort.defAsc ? "selected" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.sort === ctx.CardSort.defDesc ? "selected" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.collectionView);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions], styles: [".selected[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px black solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvcnQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtBQUNGIiwiZmlsZSI6InNvcnQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdGVkIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 6794:
/*!******************************************************!*\
  !*** ./src/app/upload-file/upload-file.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadFileComponent": () => (/* binding */ UploadFileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _drag_drop_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../drag-drop.directive */ 2945);





const _c0 = function () { return { "color": "white" }; };
function UploadFileComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadFileComponent_div_3_Template_mat_icon_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.deleteImage()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
} }
class UploadFileComponent {
    constructor() {
        this.fileUploaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
    }
    uploadFile(event) {
        // for (let index = 0; index < event.length; index++) {
        const element = event[0]; // we keep only the 1st image
        const reader = new FileReader();
        reader.readAsDataURL(element);
        reader.onload = () => {
            this.fileUploaded.emit(element);
            this.imagePreview = reader.result;
        };
        // }
    }
    deleteImage() {
        this.fileUploaded.emit(null);
        this.imagePreview = null;
    }
}
UploadFileComponent.ɵfac = function UploadFileComponent_Factory(t) { return new (t || UploadFileComponent)(); };
UploadFileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UploadFileComponent, selectors: [["app-upload-file"]], outputs: { fileUploaded: "fileUploaded" }, decls: 4, vars: 1, consts: [["appDragDrop", "", 1, "uploadfilecontainer", 3, "click", "onFileDropped"], ["hidden", "", "type", "file", 3, "change"], ["fileInput", ""], ["class", "file-preview", 4, "ngIf"], [1, "file-preview"], ["height", "120px", 2, "height", "150px", "margin-right", "16px", 3, "src"], ["aria-hidden", "false", "aria-label", "Delte icon", 1, "delete-file", 3, "ngStyle", "click"]], template: function UploadFileComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadFileComponent_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.click()); })("onFileDropped", function UploadFileComponent_Template_div_onFileDropped_0_listener($event) { return ctx.uploadFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UploadFileComponent_Template_input_change_1_listener($event) { return ctx.uploadFile($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UploadFileComponent_div_3_Template, 4, 3, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imagePreview);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _drag_drop_directive__WEBPACK_IMPORTED_MODULE_0__.DragDropDirective], styles: [".uploadfilecontainer[_ngcontent-%COMP%] {\n  background-image: url('download.svg');\n  background-repeat: no-repeat;\n  background-size: 50px;\n  background-position: center;\n  background-color: #cdcddd;\n  height: 150px;\n  width: 50%;\n  margin: 20px auto;\n  border: 1px solid #17313a;\n  border-radius: 10px;\n}\n\n.uploadfilecontainer[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #becbd2 !important;\n}\n\n.file-preview[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  margin: 10px auto;\n  padding: 5px;\n}\n\n.file-preview[_ngcontent-%COMP%]   .delete-file[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n\n.file-preview[_ngcontent-%COMP%]   .delete-file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC1maWxlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFx2YXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHFDQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJDTlc7RURPWCxhQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLG9DQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7QUFESiIsImZpbGUiOiJ1cGxvYWQtZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi92YXIuc2Nzc1wiO1xyXG5cclxuLnVwbG9hZGZpbGVjb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9kb3dubG9hZC5zdmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNlY29uZDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItZGl2aWRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnVwbG9hZGZpbGVjb250YWluZXI6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXRoaXJkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWxlLXByZXZpZXcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmZpbGUtcHJldmlldyAuZGVsZXRlLWZpbGUge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5maWxlLXByZXZpZXcgLmRlbGV0ZS1maWxlIGltZyB7XHJcbiAgICB3aWR0aDogNTBweDtcclxufVxyXG4iLCIkY29sb3ItcHJpbWFyeTogI2ZmZmZmZjtcclxuJGNvbG9yLXNlY29uZDogI2NkY2RkZDtcclxuJGNvbG9yLXRoaXJkOiAjYmVjYmQyO1xyXG4kY29sb3ItZm91cnRoOiAjOTU5ZGE5O1xyXG4kY29sb3ItaG92ZXI6IHJnYigxMjMsIDE0NCwgMTUyKTtcclxuXHJcbiR0ZXh0LWNvbG9yLXdoaXRlOiBoc2xhKDAsIDAlLCAwJSwgMC45KTtcclxuJHRleHQtY29sb3ItY29udGVudDogIzg4YTBhNztcclxuJHRleHQtY29sb3ItYWNjZW50OiAjZmZhYjQwO1xyXG4kY29sb3ItZGl2aWRlOiAjMTczMTNhO1xyXG4kYm9yZGVyLWNvbG9yLW91dGxpbmU6IHJnYigzNCwgMTIyLCAxNzMpO1xyXG4kYm9yZGVyLWNvbG9yLW91dGxpbmUtZm9jdXNlZDogcmdiKDM0LCAxMjIsIDE3Myk7XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7662:
/*!**********************************************************!*\
  !*** ./src/app/yes-no-dialog/yes-no-dialog.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YesNoDialogComponent": () => (/* binding */ YesNoDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);



class YesNoDialogComponent {
    constructor() { }
    ngOnInit() {
    }
}
YesNoDialogComponent.ɵfac = function YesNoDialogComponent_Factory(t) { return new (t || YesNoDialogComponent)(); };
YesNoDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YesNoDialogComponent, selectors: [["app-yes-no-dialog"]], decls: 10, vars: 2, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-button", "", 3, "mat-dialog-close"]], template: function YesNoDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Suppression");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Etes-vous s\u00FBr ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Non");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Oui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ5ZXMtbm8tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6233:
/*!********************************************************************!*\
  !*** ./src/app/yu-gi-oh/collection/card-consultation.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardConsultationComponent": () => (/* binding */ CardConsultationComponent)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 5913);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _filter_dialog_filter_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../filter-dialog/filter-dto */ 880);
/* harmony import */ var _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sort-dialog/card-sort */ 6202);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var _sort_dialog_sort_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sort-dialog/sort-dialog.component */ 6056);
/* harmony import */ var _filter_dialog_filter_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../filter-dialog/filter-dialog.component */ 5015);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global */ 7266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _yugioh_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../yugioh.service */ 5594);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _modal_card_detail_modal_card_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modal-card-detail/modal-card-detail.component */ 7457);
/* harmony import */ var _ban_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ban.pipe */ 9041);






















const _c0 = ["matPaginator"];
function CardConsultationComponent_div_13_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-modal-card-detail", 19);
} if (rf & 2) {
    const card_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("card", card_r3);
} }
function CardConsultationComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CardConsultationComponent_div_13_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r8.open(_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "ban");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 15)(4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, CardConsultationComponent_div_13_ng_template_8_Template, 1, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx_r1.mainDeckMap.get(card_r3.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 6, card_r3.banListInfo == null ? null : card_r3.banListInfo.banTcg))("matBadgeHidden", (card_r3.banListInfo == null ? null : card_r3.banListInfo.banTcg) === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r1.backEndCardUrl + card_r3.apiId + "/image", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](card_r3.name);
} }
const _c1 = function () { return [5, 10, 25, 100]; };
class CardConsultationComponent {
    constructor(yugiohService, snackBar, dialog, router, modalService) {
        this.yugiohService = yugiohService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.router = router;
        this.modalService = modalService;
        this.backEndCardUrl = _global__WEBPACK_IMPORTED_MODULE_5__.backendUrl + '/cards/';
        this.totalNumberOfCards = 0;
        this.defaultPageSize = 25;
        this.globalCards = new Array();
        this.mainDeckMap = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.cardColorMap;
        this.searchSub2$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
        this.filterDto = new _filter_dialog_filter_dto__WEBPACK_IMPORTED_MODULE_1__.FilterDto();
        this.sort = _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_2__.CardSort.alphabeticalAsc;
    }
    ngOnInit() {
        this.searchSub2$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(400), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.distinctUntilChanged)()).subscribe(() => {
            this.refreshPaginator();
        });
    }
    ngAfterViewInit() {
        this.refreshPaginator();
    }
    refreshPaginator() {
        this.matPaginator.pageIndex = 0;
        this.matPaginator._changePageSize(this.matPaginator.pageSize);
    }
    applyCardFilterForGlobalCards($event, inputElement) {
        let searchValue;
        if ($event) {
            searchValue = $event.target.value;
        }
        else {
            searchValue = '';
        }
        this.cardSearchValue2 = searchValue;
        this.searchSub2$.next(searchValue);
        inputElement.focus();
    }
    onPageChanged($event) {
        console.log('pageChanged');
        this.yugiohService.getCardsPaginated($event.pageIndex, $event.pageSize, this.sort, this.cardSearchValue2, this.filterDto)
            .subscribe(response => {
            this.globalCards = response.body;
            this.totalNumberOfCards = Number(response.headers.get('pageTotalElements'));
        });
    }
    openSortDialog() {
        const dialogRef = this.dialog.open(_sort_dialog_sort_dialog_component__WEBPACK_IMPORTED_MODULE_3__.SortDialogComponent, {
            width: '300px',
            data: {
                sort: this.sort !== undefined ? this.sort : null,
                collectionView: false
            }
        });
        dialogRef.afterClosed().subscribe(value => {
            console.log(value);
            this.sort = value;
            this.refreshPaginator();
        });
    }
    filter() {
        this.filterDto.collectionView = false;
        const dialog = this.dialog.open(_filter_dialog_filter_dialog_component__WEBPACK_IMPORTED_MODULE_4__.FilterDialogComponent, {
            width: '500px',
            data: this.filterDto
        });
        dialog.afterClosed().subscribe(() => {
            console.log(this.filterDto);
            this.refreshPaginator();
        });
    }
    isFiltered() {
        return this.filterDto.attributes.length > 0
            || this.filterDto.levels.length > 0
            || this.filterDto.cardTypes.length > 0
            || this.filterDto.monsterRaces.length > 0
            || this.filterDto.spellRaces.length > 0
            || this.filterDto.trapRaces.length > 0
            || this.filterDto.archetype;
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            // this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
}
CardConsultationComponent.ɵfac = function CardConsultationComponent_Factory(t) { return new (t || CardConsultationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_yugioh_service__WEBPACK_IMPORTED_MODULE_6__.YugiohService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModal)); };
CardConsultationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: CardConsultationComponent, selectors: [["app-card-consultation"]], viewQuery: function CardConsultationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.matPaginator = _t.first);
    } }, decls: 16, vars: 7, consts: [[2, "display", "flex", "flex-direction", "column", "align-items", "center"], [2, "width", "80%", "padding", "1rem", "display", "flex", "align-items", "center"], [2, "position", "relative", "margin", "8px", "cursor", "pointer", 3, "ngClass", "click"], [1, "bAXgkK"], [1, "qmUrg"], ["id", "sidebar-search-input-for-cards", "placeholder", "Rechercher une carte", "tabindex", "0", 3, "ngModel", "keyup", "ngModelChange"], ["inputElement2", ""], [1, "jNdboZ", 3, "click"], [2, "position", "relative", "margin", "8px", "cursor", "pointer", 3, "click"], [1, "card-group-container"], ["class", "card-container", 3, "background-color", "click", 4, "ngFor", "ngForOf"], ["aria-label", "Select page", 2, "padding-bottom", "1vh", 3, "length", "pageSize", "pageSizeOptions", "page"], ["matPaginator", ""], [1, "card-container", 3, "click"], [1, "card-container-inside", 3, "matBadge", "matBadgeHidden"], [1, "card-name"], [2, "display", "flex", "align-items", "center"], ["alt", "website icon", 2, "width", "42px", "height", "42px", "border", "0", "margin-right", "8px", 3, "src"], ["content", ""], [3, "card"]], template: function CardConsultationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CardConsultationComponent_Template_mat_icon_click_2_listener() { return ctx.filter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " filter_alt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup", function CardConsultationComponent_Template_input_keyup_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](7); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.applyCardFilterForGlobalCards($event, _r0)); })("ngModelChange", function CardConsultationComponent_Template_input_ngModelChange_6_listener($event) { return ctx.cardSearchValue2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CardConsultationComponent_Template_mat_icon_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](7); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.applyCardFilterForGlobalCards(null, _r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, " clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CardConsultationComponent_Template_mat_icon_click_10_listener() { return ctx.openSortDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, " sort ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, CardConsultationComponent_div_13_Template, 10, 8, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "mat-paginator", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("page", function CardConsultationComponent_Template_mat_paginator_page_14_listener($event) { return ctx.onPageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx.isFiltered() ? "selected" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.cardSearchValue2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.globalCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("length", ctx.totalNumberOfCards)("pageSize", ctx.defaultPageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](6, _c1));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginator, _angular_material_badge__WEBPACK_IMPORTED_MODULE_21__.MatBadge, _modal_card_detail_modal_card_detail_component__WEBPACK_IMPORTED_MODULE_7__.ModalCardDetailComponent, _ban_pipe__WEBPACK_IMPORTED_MODULE_8__.BanPipe], styles: [".selected[_ngcontent-%COMP%] {\n  border: 1px #959da9 solid;\n  border-radius: 4px;\n}\n\n.card-group-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 100%;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  width: 30%;\n  margin: 8px;\n}\n\n.card-container[_ngcontent-%COMP%]:hover {\n  border: 1px #424548 solid;\n}\n\n.card-container-inside[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  color: rgb(0, 0, 0);\n  font-size: 1rem;\n  font-weight: 500;\n  position: relative;\n  align-items: center;\n  display: flex;\n}\n\n.card-quantity[_ngcontent-%COMP%] {\n  background: rgb(255, 255, 255);\n  border-right: 1px solid rgb(255, 255, 255);\n  color: rgb(119, 119, 119);\n  font-size: 0.9rem;\n  font-weight: 400;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 25px;\n  align-items: center;\n  display: flex;\n}\n\n.card-name[_ngcontent-%COMP%] {\n  flex: 1 1 0%;\n  white-space: pre-line;\n  overflow: hidden;\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  color: rgb(0, 0, 0);\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n.bAXgkK[_ngcontent-%COMP%] {\n  width: 100%;\n  position: sticky;\n  top: 0;\n  align-items: center;\n  display: flex;\n  padding: 0.5rem 1rem;\n  border: #bbb solid 2px;\n  border-radius: 8px;\n}\n\n.qmUrg[_ngcontent-%COMP%] {\n  background: rgb(255, 255, 255);\n  border-radius: 3px;\n  height: 38px;\n  width: 100%;\n  display: flex;\n}\n\n.bAXgkK[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0px;\n  height: 100%;\n  padding: 0.5rem;\n  width: 100%;\n  box-shadow: none !important;\n}\n\n.jNdboZ[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtY29uc3VsdGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsbUJBQUE7RUFDQSxhQUFBO0FBQUY7O0FBR0E7RUFDRSw4QkFBQTtFQUNBLDBDQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEsbUJBQUE7RUFDQSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUVBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUFGOztBQUdBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUFBRiIsImZpbGUiOiJjYXJkLWNvbnN1bHRhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3RlZCB7XHJcbiAgYm9yZGVyOiAxcHggIzk1OWRhOSBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcblxyXG4uY2FyZC1ncm91cC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB3aWR0aDogMzAlO1xyXG4gIG1hcmdpbjogOHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXI6aG92ZXIge1xyXG4gIGJvcmRlcjogMXB4ICM0MjQ1NDggc29saWQ7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lci1pbnNpZGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNhcmQtcXVhbnRpdHkge1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgY29sb3I6IHJnYigxMTksIDExOSwgMTE5KTtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY2FyZC1uYW1lIHtcclxuICBmbGV4OiAxIDEgMCU7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY2FyZC10ZXh0IHtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uYkFYZ2tLIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgYm9yZGVyOiAjYmJiIHNvbGlkIDJweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5xbVVyZyB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBoZWlnaHQ6IDM4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmJBWGdrSyBpbnB1dCB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5qTmRib1oge1xyXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 8548:
/*!***************************************************************!*\
  !*** ./src/app/yu-gi-oh/collection/card-matcher.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardMatcherComponent": () => (/* binding */ CardMatcherComponent)
/* harmony export */ });
/* harmony import */ var _collection_import_pojo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection-import-pojo */ 6212);
/* harmony import */ var _collection_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collection-item */ 245);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ 1621);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _yugioh_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../yugioh.service */ 5594);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 8562);











function CardMatcherComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Prix total estim\u00E9 : ", ctx_r0.totalPrice, "\u20AC ");
} }
function CardMatcherComponent_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const missingLine_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](missingLine_r6.cardName);
} }
function CardMatcherComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Les cartes suivantes n'existent pas :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CardMatcherComponent_div_6_div_3_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.missingLines);
} }
function CardMatcherComponent_div_8_div_3_ng_template_4_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const set_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](set_r12);
} }
function CardMatcherComponent_div_8_div_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Trouv\u00E9 dans les collections :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CardMatcherComponent_div_8_div_3_ng_template_4_div_9_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const foundCollectionItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Version fran\u00E7aise ? ", foundCollectionItem_r8.foundInFrench ? "oui" : "non", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Version anglaise ? ", foundCollectionItem_r8.foundInEnglish ? "oui" : "non", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Prix \u00E0 l'unit\u00E9 : ", foundCollectionItem_r8.price, "\u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", foundCollectionItem_r8.setsFound);
} }
function CardMatcherComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "help_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CardMatcherComponent_div_8_div_3_ng_template_4_Template, 10, 4, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const foundCollectionItem_r8 = ctx.$implicit;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", foundCollectionItem_r8.cardName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbTooltip", _r9)("container", "body");
} }
function CardMatcherComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CardMatcherComponent_div_8_div_3_Template, 6, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Trouv\u00E9 (prix estim\u00E9 ", ctx_r2.foundCollectionItemsPrice, "\u20AC) :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.foundCollectionItems);
} }
function CardMatcherComponent_div_9_div_3_ng_template_4_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const set_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](set_r19);
} }
function CardMatcherComponent_div_9_div_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Trouv\u00E9 dans les collections :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CardMatcherComponent_div_9_div_3_ng_template_4_div_9_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const incompleteCollectionItem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Version fran\u00E7aise ? ", incompleteCollectionItem_r15.foundInFrench ? "oui" : "non", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Version anglaise ? ", incompleteCollectionItem_r15.foundInEnglish ? "oui" : "non", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Prix \u00E0 l'unit\u00E9 : ", incompleteCollectionItem_r15.price, "\u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", incompleteCollectionItem_r15.setsFound);
} }
function CardMatcherComponent_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "help_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CardMatcherComponent_div_9_div_3_ng_template_4_Template, 10, 4, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const incompleteCollectionItem_r15 = ctx.$implicit;
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", incompleteCollectionItem_r15.quantity, " ", incompleteCollectionItem_r15.cardName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbTooltip", _r16)("container", "body");
} }
function CardMatcherComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CardMatcherComponent_div_9_div_3_Template, 6, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Manquant en partie (prix estim\u00E9 ", ctx_r3.incompleteCollectionItemsPrice, "\u20AC) :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.incompleteCollectionItems);
} }
function CardMatcherComponent_div_10_div_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const missingCollectionItem_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Prix \u00E0 l'unit\u00E9 : ", missingCollectionItem_r22.price, "\u20AC");
} }
function CardMatcherComponent_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "help_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CardMatcherComponent_div_10_div_3_ng_template_4_Template, 3, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const missingCollectionItem_r22 = ctx.$implicit;
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", missingCollectionItem_r22.cardName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbTooltip", _r23)("container", "body");
} }
function CardMatcherComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CardMatcherComponent_div_10_div_3_Template, 6, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Dans aucune collection (prix estim\u00E9 ", ctx_r4.missingCollectionItemsPrice, "\u20AC) :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.missingCollectionItems);
} }
class CardMatcherComponent {
    constructor(yugiohService) {
        this.yugiohService = yugiohService;
        this.placeholder = `1 Souleating Oviraptor
1x Aérosol de Destruction
6x TrOU noIr
2 Ultimate Conductor Tyranno

Ne pas mettre de set, il faut forcément mettre un nombre avant le nom de la carte`;
        this.cardsForComparison = '';
        this.foundLines = new Array();
        this.missingLines = new Array();
        this.foundCollectionItems = new Array();
        this.incompleteCollectionItems = new Array();
        this.missingCollectionItems = new Array();
    }
    ngOnInit() {
    }
    getCardsForComparison() {
        this.totalPrice = 0;
        const cardLines = this.cardsForComparison.split(/[\r\n]+/);
        console.log(cardLines);
        const lines = new Array();
        for (const line of cardLines) {
            if (line && line.trim().length > 0) {
                if (line.charAt(0) >= '0' && line.charAt(0) <= '9') { // first character is a number
                    const lineSplit = line.trim().split(/ +/); // to handle cases like "  first    middle    last    "
                    // tslint:disable-next-line:max-line-length
                    const cardNumber = lineSplit[0].split('x')[0];
                    let cardName = '';
                    // tslint:disable-next-line:prefer-for-of
                    for (let i = 1; i < lineSplit.length; i++) {
                        if (lineSplit[i] && lineSplit.length > 0) {
                            cardName += lineSplit[i] + ' ';
                        }
                    }
                    lines.push(new _collection_import_pojo__WEBPACK_IMPORTED_MODULE_0__.CollectionImportPojo(Number(cardNumber), cardName.trim(), null, 0));
                }
            }
        }
        console.log(lines);
        this.foundCollectionItems = undefined;
        this.incompleteCollectionItems = undefined;
        this.missingCollectionItems = undefined;
        this.foundLines = [];
        this.missingLines = [];
        let nbLinesGot = lines.length;
        // TODO : JS pipe or something like that
        for (const line of lines) {
            this.yugiohService.getCardbyName(line.cardName).subscribe(value => {
                line.cardApiId = value.apiId;
                this.foundLines.push(line);
                console.log(this.foundLines);
                nbLinesGot -= 1;
                if (nbLinesGot === 0) {
                    this.compareToCollections();
                }
            }, error => {
                this.missingLines.push(line);
                nbLinesGot -= 1;
                if (nbLinesGot === 0) {
                    this.compareToCollections();
                }
            });
        }
    }
    compareToCollections() {
        const collectionItems = [];
        this.foundLines.forEach(line => {
            const card = new _card__WEBPACK_IMPORTED_MODULE_2__.Card();
            card.name = line.cardName;
            card.apiId = line.cardApiId;
            const collectionItem = new _collection_item__WEBPACK_IMPORTED_MODULE_1__.CollectionItem(0, card, null);
            collectionItem.quantity = line.cardNumber;
            collectionItems.push(collectionItem);
        });
        this.generateTotalPrice(collectionItems);
        this.findCardsInCollectionAndAssociatePrices(collectionItems);
    }
    generateTotalPrice(collectionItems) {
        const apiIds = collectionItems.map(value => value.card.apiId);
        this.yugiohService.getCardsPriceById(apiIds)
            .subscribe(value => {
            console.log(value);
            if (value?.data && value.data.length > 0) {
                const map = new Map();
                for (const data of value.data) {
                    map.set(String(data.id), data.card_prices[0].cardmarket_price);
                }
                this.totalPrice = 0;
                console.log(map);
                collectionItems.forEach(item => {
                    const price = Number(map.get(item.card.apiId));
                    if (price) {
                        this.totalPrice += price * item.quantity;
                        item.card.price = price;
                    }
                    else {
                        console.log(item.card.apiId);
                        item.card.price = 0;
                    }
                });
                console.log(this.totalPrice);
                // Keep only last 2 digits
                this.totalPrice = Number(this.totalPrice.toFixed(2));
                this.findCardsInCollectionAndAssociatePrices(collectionItems);
            }
        });
    }
    findCardsInCollectionAndAssociatePrices(collectionItems) {
        this.foundCollectionItemsPrice = 0;
        this.incompleteCollectionItemsPrice = 0;
        this.missingCollectionItemsPrice = 0;
        this.yugiohService.findCardsInCollection(collectionItems)
            .subscribe(value => {
            console.log(value);
            value[0].forEach(item => {
                item.price = collectionItems.filter(itemm => itemm.card.name === item.cardName)[0]?.card?.price;
                this.foundCollectionItemsPrice += item.price;
            });
            value[1].forEach(item => {
                item.price = collectionItems.filter(itemm => itemm.card.name === item.cardName)[0]?.card?.price;
                this.incompleteCollectionItemsPrice += item.price;
            });
            value[2].forEach(item => {
                item.price = collectionItems.filter(itemm => itemm.card.name === item.cardName)[0]?.card?.price;
                this.missingCollectionItemsPrice += item.price;
            });
            // Keep only last 2 digits
            this.foundCollectionItemsPrice = Number(this.foundCollectionItemsPrice.toFixed(2));
            this.incompleteCollectionItemsPrice = Number(this.incompleteCollectionItemsPrice.toFixed(2));
            this.missingCollectionItemsPrice = Number(this.missingCollectionItemsPrice.toFixed(2));
            this.foundCollectionItems = value[0];
            this.incompleteCollectionItems = value[1];
            this.missingCollectionItems = value[2];
        });
    }
}
CardMatcherComponent.ɵfac = function CardMatcherComponent_Factory(t) { return new (t || CardMatcherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_yugioh_service__WEBPACK_IMPORTED_MODULE_3__.YugiohService)); };
CardMatcherComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CardMatcherComponent, selectors: [["app-card-matcher"]], decls: 11, vars: 7, consts: [[2, "display", "flex"], [2, "width", "50%", "display", "flex", "flex-direction", "column", "align-items", "center", "margin-top", "8px", "margin-left", "2%", "margin-right", "1%"], ["mat-raised-button", "", 2, "margin", "8px", "width", "fit-content", 3, "click"], ["matInput", "", 2, "height", "300px", "width", "100%", "border", "#3b3b3b 1px solid", "padding", "8px", "margin-bottom", "4px", 3, "placeholder", "ngModel", "ngModelChange"], ["style", "align-self: start; margin-bottom: 8px;", 4, "ngIf"], ["style", "align-self: start", 4, "ngIf"], [2, "width", "50%", "display", "flex", "flex-direction", "column", "margin-top", "8px", "margin-left", "1%", "margin-right", "2%"], ["style", "margin-bottom: 8px", 4, "ngIf"], [4, "ngIf"], [2, "align-self", "start", "margin-bottom", "8px"], [2, "align-self", "start"], ["style", "margin-left: 8px;", 4, "ngFor", "ngForOf"], [2, "margin-left", "8px"], [2, "margin-bottom", "8px"], [2, "font-size", "24px"], ["style", "margin-left: 8px; display:flex; align-items:center", 4, "ngFor", "ngForOf"], [2, "margin-left", "8px", "display", "flex", "align-items", "center"], [2, "margin-left", "4px", 3, "ngbTooltip", "container"], ["tipContent", ""], [2, "background", "black", "padding", "8px", "border-radius", "8px"], ["style", "margin-left: 4px", 4, "ngFor", "ngForOf"], [2, "margin-left", "4px"]], template: function CardMatcherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CardMatcherComponent_Template_button_click_2_listener() { return ctx.getCardsForComparison(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Rechercher cartes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CardMatcherComponent_Template_textarea_ngModelChange_4_listener($event) { return ctx.cardsForComparison = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CardMatcherComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, CardMatcherComponent_div_6_Template, 4, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CardMatcherComponent_div_8_Template, 4, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CardMatcherComponent_div_9_Template, 4, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, CardMatcherComponent_div_10_Template, 4, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx.placeholder)("ngModel", ctx.cardsForComparison);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.totalPrice && ctx.totalPrice > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.missingLines && ctx.missingLines.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.foundCollectionItems && ctx.foundCollectionItems.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.incompleteCollectionItems && ctx.incompleteCollectionItems.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.missingCollectionItems && ctx.missingCollectionItems.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLW1hdGNoZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1621:
/*!*********************************************!*\
  !*** ./src/app/yu-gi-oh/collection/card.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card)
/* harmony export */ });
class Card {
    constructor() {
        this.setCodes = [];
        // tslint:disable-next-line:variable-name
        this.card_prices = [];
    }
}


/***/ }),

/***/ 7345:
/*!*********************************************************************!*\
  !*** ./src/app/yu-gi-oh/collection/collection-by-user.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionByUserComponent": () => (/* binding */ CollectionByUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _yugioh_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../yugioh.service */ 5594);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _array_sort_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../array-sort-pipe */ 1109);






function CollectionByUserComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("auxclick", function CollectionByUserComponent_div_1_Template_div_auxclick_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const creator_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.handleRouting($event, creator_r1)); })("click", function CollectionByUserComponent_div_1_Template_div_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const creator_r1 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.handleRouting($event, creator_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const creator_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", creator_r1, " ");
} }
class CollectionByUserComponent {
    constructor(router, yugiohService, snackBar) {
        this.router = router;
        this.yugiohService = yugiohService;
        this.snackBar = snackBar;
        this.collectionCreators = new Array();
    }
    ngOnInit() {
        this.yugiohService.getCollections()
            .subscribe(collections => {
            const set = new Set();
            collections.forEach(collection => {
                if (collection.createdBy) {
                    set.add(collection.createdBy);
                }
            });
            this.collectionCreators = Array.from(set);
        }, () => this.openSnackBar('Erreur lors de la récupération des collections', 'OK'));
    }
    handleRouting(event, creator) {
        event.preventDefault();
        if (event.which === 2 || event.which === 1) {
            const url = '/yu-gi-oh/collections/by-user/' + creator;
            if (event.which === 1) {
                this.router.navigate([url]);
            }
            else {
                window.open(url, '_blank');
            }
        }
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 3000,
        });
    }
}
CollectionByUserComponent.ɵfac = function CollectionByUserComponent_Factory(t) { return new (t || CollectionByUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_yugioh_service__WEBPACK_IMPORTED_MODULE_0__.YugiohService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar)); };
CollectionByUserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CollectionByUserComponent, selectors: [["app-collection-by-user"]], decls: 3, vars: 5, consts: [[2, "width", "100%", "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center", "margin-top", "8px"], ["class", "collection-light", 3, "auxclick", "click", 4, "ngFor", "ngForOf"], [1, "collection-light", 3, "auxclick", "click"], [2, "font-weight", "500", "font-size", "18px"]], template: function CollectionByUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CollectionByUserComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](2, 1, ctx.collectionCreators, null, true));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _array_sort_pipe__WEBPACK_IMPORTED_MODULE_1__.ArraySortPipe], styles: [".collection-light[_ngcontent-%COMP%] {\n  width: 80%;\n  max-width: 400px;\n  border: #bbb solid 2px;\n  border-radius: 8px;\n  padding: 8px;\n  margin: 4px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24tYnktdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUVBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFBRiIsImZpbGUiOiJjb2xsZWN0aW9uLWJ5LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sbGVjdGlvbi1saWdodCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG5cclxuICBib3JkZXI6ICNiYmIgc29saWQgMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6212:
/*!***************************************************************!*\
  !*** ./src/app/yu-gi-oh/collection/collection-import-pojo.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionImportPojo": () => (/* binding */ CollectionImportPojo)
/* harmony export */ });
class CollectionImportPojo {
    constructor(cardNumber, cardName, cardCode, position, cardApiId) {
        this.cardNumber = cardNumber;
        this.cardName = cardName;
        this.cardCode = cardCode;
        this.position = position;
        this.cardApiId = cardApiId;
    }
}


/***/ }),

/***/ 245:
/*!********************************************************!*\
  !*** ./src/app/yu-gi-oh/collection/collection-item.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionItem": () => (/* binding */ CollectionItem)
/* harmony export */ });
class CollectionItem {
    constructor(position, card, set) {
        this.quantity = 1;
        this.position = position;
        this.card = card;
        this.set = set;
    }
}


/***/ }),

/***/ 1729:
/*!*********************************************************!*\
  !*** ./src/app/yu-gi-oh/collection/collection-light.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionLight": () => (/* binding */ CollectionLight)
/* harmony export */ });
class CollectionLight {
    constructor(name, type, createdBy, color) {
        this.name = name;
        this.type = type;
        this.createdBy = createdBy;
        this.color = color;
    }
}


/***/ }),

/***/ 5207:
/*!******************************************************************!*\
  !*** ./src/app/yu-gi-oh/collection/collection-list.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionListComponent": () => (/* binding */ CollectionListComponent)
/* harmony export */ });
/* harmony import */ var _dialog_add_collection_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog-add-collection.component */ 4973);
/* harmony import */ var _dialog_remove_collection_dialog_edit_remove_collection_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dialog-remove-collection/dialog-edit-remove-collection.component */ 4045);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _collection_light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection-light */ 1729);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global */ 7266);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ 5226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _yugioh_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../yugioh.service */ 5594);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _array_sort_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../array-sort-pipe */ 1109);




















function CollectionListComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Cr\u00E9ateurs");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CollectionListComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CollectionListComponent_div_3_div_3_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); const creator_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.toggle(creator_r5, ctx_r6.activeCollectionCreators)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const creator_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r4.activeCollectionCreators.indexOf(creator_r5) !== -1 ? "selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", creator_r5, " ");
} }
function CollectionListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CollectionListComponent_div_3_div_1_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CollectionListComponent_div_3_div_3_Template, 2, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.collectionCreators.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.collectionCreators);
} }
const _c0 = function (a0) { return { "background": a0 }; };
function CollectionListComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 24);
} if (rf & 2) {
    const collection_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](1, _c0, "linear-gradient(to left, rgba(255,255,255,0) 20%,rgba(255,255,255,1)), url(" + ctx_r9.backEndCardUrl + collection_r8.mainCardApiId + "/image-cropped)"));
} }
function CollectionListComponent_div_12_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" - ", collection_r8.createdBy, "");
} }
function CollectionListComponent_div_12_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", collection_r8.nbCards, " cartes");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", collection_r8.nbMonsters, " monstres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", collection_r8.nbSpells, " magies ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", collection_r8.nbTraps, " pi\u00E8ges ");
} }
function CollectionListComponent_div_12_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", collection_r8.nbCards, " cartes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Main ", collection_r8.nbMainDeck, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Extra ", collection_r8.nbExtraDeck, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Side ", collection_r8.nbSideDeck, " ");
} }
function CollectionListComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("auxclick", function CollectionListComponent_div_12_Template_div_auxclick_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const collection_r8 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r17.handleRouting($event, collection_r8)); })("click", function CollectionListComponent_div_12_Template_div_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const collection_r8 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r19.handleRouting($event, collection_r8)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CollectionListComponent_div_12_div_1_Template, 1, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 19)(3, "div", 20)(4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, CollectionListComponent_div_12_span_6_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div")(8, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CollectionListComponent_div_12_Template_mat_icon_click_8_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const collection_r8 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r20.openEditOrRemoveCollectionDialog($event, collection_r8)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, CollectionListComponent_div_12_div_10_Template, 8, 4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, CollectionListComponent_div_12_div_11_Template, 8, 4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const collection_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", collection_r8.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", collection_r8 == null ? null : collection_r8.mainCardApiId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", collection_r8.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", collection_r8.createdBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.isCollection);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r2.isCollection);
} }
class CollectionListComponent {
    constructor(yugiohService, snackBar, dialog, router, modalService) {
        this.yugiohService = yugiohService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.router = router;
        this.modalService = modalService;
        this.backEndCardUrl = _global__WEBPACK_IMPORTED_MODULE_3__.backendUrl + '/cards/';
        this.collections = [];
        this.collectionCreators = new Array();
        this.activeCollectionCreators = [];
        this.searchSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.numberOfTimesMKeyPressedInARow = 0;
    }
    ngOnInit() {
        this.isCollection = this.router.url.includes('collections'); // Moche
        this.getCollections();
        this.searchSub$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(400), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)()).subscribe((filterValue) => {
            this.getCollections(filterValue);
        });
    }
    handleKeyboardEvent(event) {
        if (event.key === 'm') {
            this.numberOfTimesMKeyPressedInARow++;
            if (this.numberOfTimesMKeyPressedInARow >= 10) {
                console.log('10 times');
                this.downloadAll();
                this.numberOfTimesMKeyPressedInARow = 0;
            }
        }
        else {
            this.numberOfTimesMKeyPressedInARow = 0;
        }
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 3000,
        });
    }
    getCollections(filter) {
        this.yugiohService.getCollections(filter, this.isCollection ? 'COLLECTION' : 'DECK')
            .subscribe(collections => {
            this.collections = collections;
            const set = new Set();
            this.collections.forEach(collection => {
                if (collection.createdBy) {
                    set.add(collection.createdBy);
                }
            });
            this.collectionCreators = Array.from(set);
        }, () => this.openSnackBar('Erreur lors de la récupération des collections', 'OK'));
    }
    addCollection(collectionDialogData) {
        const collection = new _collection_light__WEBPACK_IMPORTED_MODULE_2__.CollectionLight(collectionDialogData.name, collectionDialogData.type, collectionDialogData.createdBy, collectionDialogData.color);
        this.yugiohService.addOrUpdateCollectionLight(collection)
            .subscribe(() => this.getCollections(), () => this.openSnackBar('Erreur lors de la création de la collection', 'OK'));
    }
    openDialog() {
        const dialogRef = this.dialog.open(_dialog_add_collection_component__WEBPACK_IMPORTED_MODULE_0__.DialogAddCollectionComponent, {
            width: '700px',
            data: { type: this.isCollection ? 'COLLECTION' : 'DECK' }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
            this.addCollection(result);
        });
    }
    openEditOrRemoveCollectionDialog($event, collection) {
        $event.stopPropagation();
        const dialogRef = this.dialog.open(_dialog_remove_collection_dialog_edit_remove_collection_component__WEBPACK_IMPORTED_MODULE_1__.DialogEditRemoveCollectionComponent, {
            width: '700px',
            data: {
                id: collection.id,
                name: collection.name,
                createdBy: collection.createdBy,
                type: collection.type,
                color: collection.color
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
            if (result.result === 'REMOVE') {
                this.yugiohService.removeCollectionById(collection.id)
                    .subscribe(() => this.getCollections());
            }
            else if (result.result === 'OK') {
                console.log('addOrUpdate');
                console.log(result);
                this.yugiohService.addOrUpdateCollectionLight(result)
                    .subscribe(() => this.getCollections());
            }
        });
    }
    handleRouting(event, collection) {
        event.preventDefault();
        if (event.which === 2 || event.which === 1) {
            const url = '/yu-gi-oh/' + (this.isCollection ? 'collections' : 'decks') + ('/by-id/' + collection.id);
            console.log(url);
            if (event.which === 1) {
                this.router.navigate([url], { queryParams: { searchValue: this.cardSearchValue } });
            }
            else {
                let queryParam = '';
                if (this.cardSearchValue) {
                    queryParam += '?searchValue=' + this.cardSearchValue;
                }
                window.open(url + queryParam, '_blank');
            }
        }
    }
    applyCardFilter($event, inputElement) {
        let searchValue;
        if ($event) {
            searchValue = $event.target.value;
        }
        else {
            searchValue = '';
        }
        this.cardSearchValue = searchValue;
        this.searchSub$.next(searchValue);
        inputElement.focus();
    }
    downloadAll() {
        const collections = [...this.collections];
        collections.forEach(collectionLight => {
            this.yugiohService.getCollectionById(String(collectionLight.id)).subscribe(collection => {
                const strings = new Array();
                if (collection.type === 'COLLECTION') {
                    for (const value of collection.items) {
                        let code;
                        if (value?.set?.code) {
                            code = value?.set?.code;
                        }
                        else {
                            code = '';
                        }
                        strings.push(value.quantity + ' ' + value.card.name + ' ' + code);
                    }
                }
                else {
                    const mainDeckCards = new Array();
                    const extraDeckCards = new Array();
                    const sideDeckCards = new Array();
                    collection.items.forEach(item => {
                        if (item.position === 0) {
                            mainDeckCards.push(item);
                        }
                        else if (item.position === 1) {
                            extraDeckCards.push(item);
                        }
                        else if (item.position === 2) {
                            sideDeckCards.push(item);
                        }
                    });
                    strings.push('main deck');
                    mainDeckCards.forEach(value => {
                        let code;
                        if (value.set?.code) {
                            code = value.set?.code;
                        }
                        else {
                            code = '';
                        }
                        strings.push(value.quantity + ' ' + value.card.name + ' ' + code);
                    });
                    strings.push('extra deck');
                    extraDeckCards.forEach(value => {
                        let code;
                        if (value.set?.code) {
                            code = value.set?.code;
                        }
                        else {
                            code = '';
                        }
                        strings.push(value.quantity + ' ' + value.card.name + ' ' + code);
                    });
                    strings.push('side deck');
                    sideDeckCards.forEach(value => {
                        let code;
                        if (value.set?.code) {
                            code = value.set?.code;
                        }
                        else {
                            code = '';
                        }
                        strings.push(value.quantity + ' ' + value.card.name + ' ' + code);
                    });
                }
                const stringToDownload = strings.join('\r\n');
                const data = new Blob([stringToDownload], { type: 'text/plain;charset=utf-8' });
                const filename = collection.name + '.json';
                const options = {
                    autoBom: false,
                };
                (0,file_saver__WEBPACK_IMPORTED_MODULE_4__.saveAs)(data, filename, options);
            });
        });
    }
    // Filter creators or deck
    toggle(filter, filterList) {
        const index = filterList.indexOf(filter);
        if (index === -1) { // Not present
            filterList.push(filter);
        }
        else { // Present
            filterList.splice(index, 1);
        }
    }
    getCollectionsToDisplay() {
        return this.activeCollectionCreators.length === 0
            ? this.collections
            : this.collections.filter(deck => this.activeCollectionCreators.includes(deck.createdBy));
    }
}
CollectionListComponent.ɵfac = function CollectionListComponent_Factory(t) { return new (t || CollectionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_yugioh_service__WEBPACK_IMPORTED_MODULE_5__.YugiohService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModal)); };
CollectionListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CollectionListComponent, selectors: [["app-collection-list"]], hostBindings: function CollectionListComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown", function CollectionListComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveDocument"]);
    } }, decls: 14, vars: 8, consts: [[2, "width", "100%", "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center"], ["mat-raised-button", "", 2, "margin", "8px", 3, "click"], ["style", "display: flex; align-items: center", 4, "ngIf"], [2, "width", "80%"], [1, "bAXgkK"], [1, "qmUrg"], ["id", "sidebar-search-input", "placeholder", "Rechercher une carte dans les collections", "tabindex", "0", 3, "ngModel", "keyup", "ngModelChange"], ["inputElement", ""], [1, "jNdboZ", 3, "click"], [2, "width", "100%", "display", "flex", "justify-content", "center", "flex-wrap", "wrap", "margin-top", "8px"], ["class", "collection", 3, "background-color", "auxclick", "click", 4, "ngFor", "ngForOf"], [2, "display", "flex", "align-items", "center"], ["style", "margin-right: 8px", 4, "ngIf"], [2, "display", "flex", "flex-wrap", "wrap"], ["style", "cursor: pointer; padding: 8px; margin: 2px;  border-radius: 4px; border: 1px black solid;", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [2, "margin-right", "8px"], [2, "cursor", "pointer", "padding", "8px", "margin", "2px", "border-radius", "4px", "border", "1px black solid", 3, "ngClass", "click"], [1, "collection", 3, "auxclick", "click"], ["class", "bg-image", 3, "ngStyle", 4, "ngIf"], [2, "position", "relative", "margin-left", "8px", "margin-right", "8px"], [2, "display", "flex"], [2, "flex-grow", "1", "font-weight", "500", "font-size", "18px"], [4, "ngIf"], ["matSuffix", "", 3, "click"], [1, "bg-image", 3, "ngStyle"]], template: function CollectionListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CollectionListComponent_Template_button_click_1_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CollectionListComponent_div_3_Template, 4, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function CollectionListComponent_Template_input_keyup_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](8); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.applyCardFilter($event, _r1)); })("ngModelChange", function CollectionListComponent_Template_input_ngModelChange_7_listener($event) { return ctx.cardSearchValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CollectionListComponent_Template_mat_icon_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](8); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.applyCardFilter(null, _r1)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, CollectionListComponent_div_12_Template, 12, 7, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Ajouter ", ctx.isCollection ? "une collection" : "un deck", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.collectionCreators);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.cardSearchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](13, 4, ctx.getCollectionsToDisplay(), "name", true));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatSuffix, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _array_sort_pipe__WEBPACK_IMPORTED_MODULE_6__.ArraySortPipe], styles: [".collection[_ngcontent-%COMP%] {\n  width: 80%;\n  max-width: 400px;\n  border: #bbb solid 2px;\n  border-radius: 8px;\n  padding: 8px;\n  margin: 4px;\n  cursor: pointer;\n  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;\n  position: relative;\n  overflow: hidden;\n  flex-wrap: wrap;\n  height: 180px;\n}\n\n.selected[_ngcontent-%COMP%] {\n  background-color: #959da9;\n}\n\n.card-group-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 100%;\n}\n\n.list-card-name[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  color: rgb(255, 255, 255);\n}\n\n.selected[_ngcontent-%COMP%] {\n  border: 1px #959da9 solid;\n  border-radius: 4px;\n}\n\n.list-card-content[_ngcontent-%COMP%] {\n  color: rgb(255, 255, 255);\n  font-size: 12px;\n}\n\n.list-card-mat-icon[_ngcontent-%COMP%] {\n  color: rgb(255, 255, 255);\n  font-size: 12px;\n  font-weight: bold;\n  background-color: rgb(55, 55, 55);\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n\n.list-card-mat-icon[_ngcontent-%COMP%]:hover {\n  background-color: rgb(58, 134, 255);\n}\n\n.category-cards[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n  margin-top: 0.25rem;\n  color: rgb(0, 0, 0);\n  font-size: 1rem;\n  font-weight: 800;\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  transition: all 0.1s ease 0s;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  width: 30%;\n  margin: 8px;\n}\n\n.card-container[_ngcontent-%COMP%]:hover {\n  border: 1px #424548 solid;\n}\n\n.card-container-inside[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  color: rgb(0, 0, 0);\n  font-size: 1rem;\n  font-weight: 500;\n  position: relative;\n  align-items: center;\n  display: flex;\n}\n\n.card-quantity[_ngcontent-%COMP%] {\n  background: rgb(255, 255, 255);\n  border-right: 1px solid rgb(255, 255, 255);\n  color: rgb(119, 119, 119);\n  font-size: 0.9rem;\n  font-weight: 400;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 25px;\n  align-items: center;\n  display: flex;\n}\n\n.card-name[_ngcontent-%COMP%] {\n  flex: 1 1 0%;\n  white-space: pre-line;\n  overflow: hidden;\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  color: rgb(0, 0, 0);\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n.bg-image[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  right: -45px;\n  width: 321px;\n  height: 321px;\n}\n\n.bg-image-blur[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  filter: blur(50px);\n}\n\n.bAXgkK[_ngcontent-%COMP%] {\n  width: 100%;\n  position: sticky;\n  top: 0;\n  align-items: center;\n  display: flex;\n  padding: 0.5rem 1rem;\n  border: #bbb solid 2px;\n  border-radius: 8px;\n}\n\n.qmUrg[_ngcontent-%COMP%] {\n  background: rgb(255, 255, 255);\n  border-radius: 3px;\n  height: 38px;\n  width: 100%;\n  display: flex;\n}\n\n.bAXgkK[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0px;\n  height: 100%;\n  padding: 0.5rem;\n  width: 100%;\n  box-shadow: none !important;\n}\n\n.jNdboZ[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUVBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFFQSxpRUFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FBRkY7O0FBS0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLG1DQUFBO0FBRkY7O0FBS0E7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtFQUNBLGFBQUE7RUFFQSw4QkFBQTtFQUNBLDRCQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0VBQ0EsYUFBQTtBQUZGOztBQUtBO0VBQ0UsOEJBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLG1CQUFBO0VBQ0EsYUFBQTtBQUZGOztBQUtBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUZGOztBQUtBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFGRjs7QUFLQTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBRkY7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FBRkYiLCJmaWxlIjoiY29sbGVjdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbGxlY3Rpb24ge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuXHJcbiAgYm9yZGVyOiAjYmJiIHNvbGlkIDJweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIG1hcmdpbjogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgdGV4dC1zaGFkb3c6IC0xcHggMCB3aGl0ZSwgMCAxcHggd2hpdGUsIDFweCAwIHdoaXRlLCAwIC0xcHggd2hpdGU7XHJcblxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBoZWlnaHQ6IDE4MHB4O1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NTlkYTk7XHJcbn1cclxuXHJcbi5jYXJkLWdyb3VwLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5saXN0LWNhcmQtbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIGJvcmRlcjogMXB4ICM5NTlkYTkgc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4ubGlzdC1jYXJkLWNvbnRlbnQge1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubGlzdC1jYXJkLW1hdC1pY29uIHtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTUsIDU1LCA1NSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi10b3A6IDFweDtcclxuICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbn1cclxuXHJcbi5saXN0LWNhcmQtbWF0LWljb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1OCwgMTM0LCAyNTUpO1xyXG59XHJcblxyXG4uY2F0ZWdvcnktY2FyZHMge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UgMHM7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgYm9yZGVyOiAxcHggIzQyNDU0OCBzb2xpZDtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyLWluc2lkZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY2FyZC1xdWFudGl0eSB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBjb2xvcjogcmdiKDExOSwgMTE5LCAxMTkpO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jYXJkLW5hbWUge1xyXG4gIGZsZXg6IDEgMSAwJTtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jYXJkLXRleHQge1xyXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5iZy1pbWFnZSB7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOi0xMHB4O1xyXG4gIHJpZ2h0Oi00NXB4O1xyXG4gIHdpZHRoOiAzMjFweDtcclxuICBoZWlnaHQ6IDMyMXB4O1xyXG59XHJcblxyXG4uYmctaW1hZ2UtYmx1ciB7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDowO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIGZpbHRlcjogYmx1cig1MHB4KTtcclxufVxyXG5cclxuLmJBWGdrSyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGJvcmRlcjogI2JiYiBzb2xpZCAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4ucW1Vcmcge1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5iQVhna0sgaW5wdXQge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uak5kYm9aIHtcclxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 6676:
/*!*****************************************************************!*\
  !*** ./src/app/yu-gi-oh/collection/collection-new.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionNewComponent": () => (/* binding */ CollectionNewComponent)
/* harmony export */ });
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection */ 3405);
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./position */ 8138);
/* harmony import */ var _collection_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection-item */ 245);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var _dialog_import_collection_dialog_import_collection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialog-import-collection/dialog-import-collection.component */ 5557);
/* harmony import */ var _collection_import_pojo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collection-import-pojo */ 6212);
/* harmony import */ var _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sort-dialog/card-sort */ 6202);
/* harmony import */ var _sort_dialog_sort_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../sort-dialog/sort-dialog.component */ 6056);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../global */ 7266);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! file-saver */ 5226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _filter_dialog_filter_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../filter-dialog/filter-dto */ 880);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ 5913);
/* harmony import */ var _send_card_to_other_collection_modal_send_card_to_other_collection_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../send-card-to-other-collection-modal/send-card-to-other-collection-modal.component */ 442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _yugioh_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../yugioh.service */ 5594);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _tooltip_card_tooltip_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tooltip-card/tooltip-card.component */ 6014);
/* harmony import */ var _modal_card_detail_modal_card_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../modal-card-detail/modal-card-detail.component */ 7457);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../search/search.component */ 6392);
/* harmony import */ var _bar_collection_information_bar_collection_information_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../bar-collection-information/bar-collection-information.component */ 9364);
/* harmony import */ var _array_sort_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../array-sort-pipe */ 1109);
/* harmony import */ var _ban_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ban.pipe */ 9041);







































const _c0 = ["inputElement"];
function CollectionNewComponent_div_1_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const searchType_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", searchType_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", searchType_r8, " ");
} }
function CollectionNewComponent_div_1_div_11_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} }
function CollectionNewComponent_div_1_div_11_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate2"]("", card_r9.atk, " / ", card_r9.def, "");
} }
function CollectionNewComponent_div_1_div_11_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 31)(1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("contextmenu", function CollectionNewComponent_div_1_div_11_div_12_Template_div_contextmenu_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r19); const set_r16 = restoredCtx.$implicit; const card_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r17.removeCollectionItem(card_r9, set_r16, ctx_r17.Position.MAIN_DECK)); })("click", function CollectionNewComponent_div_1_div_11_div_12_Template_div_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r19); const set_r16 = restoredCtx.$implicit; const card_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r20.addCollectionItem(card_r9, set_r16, ctx_r20.Position.MAIN_DECK)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const set_r16 = ctx.$implicit;
    const card_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](set_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", (card_r9 == null ? null : card_r9.mapMainDeckQuantity == null ? null : card_r9.mapMainDeckQuantity.get(set_r16)) ? card_r9 == null ? null : card_r9.mapMainDeckQuantity.get(set_r16) : "C", " ");
} }
function CollectionNewComponent_div_1_div_11_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-tooltip-card", 34);
} if (rf & 2) {
    const card_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("card", card_r9);
} }
function CollectionNewComponent_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 24)(4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, CollectionNewComponent_div_1_div_11_span_8_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, CollectionNewComponent_div_1_div_11_div_10_Template, 2, 2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](12, CollectionNewComponent_div_1_div_11_div_12_Template, 5, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](13, "sort");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](14, CollectionNewComponent_div_1_div_11_ng_template_14_Template, 1, 1, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r9 = ctx.$implicit;
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](15);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngbTooltip", _r13)("container", "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("src", ctx_r7.backEndCardUrl + card_r9.apiId + "/image", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](card_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", card_r9.attribute, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", card_r9.type !== "Spell Card" && card_r9.type !== "Trap Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", card_r9.race, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", card_r9.type !== "Spell Card" && card_r9.type !== "Trap Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](13, 9, card_r9.setCodes));
} }
function CollectionNewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 11)(1, "div", 0)(2, "mat-form-field", 12)(3, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function CollectionNewComponent_div_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r24.cardSearchValue = $event); })("keyup", function CollectionNewComponent_div_1_Template_input_keyup_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r26.applyCardFilter($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CollectionNewComponent_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r27.applyCardFilter(null)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "mat-form-field", 16)(9, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("valueChange", function CollectionNewComponent_div_1_Template_mat_select_valueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r25); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r28.searchBy = $event); })("selectionChange", function CollectionNewComponent_div_1_Template_mat_select_selectionChange_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r25); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r29.cardSearchTypeChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, CollectionNewComponent_div_1_mat_option_10_Template, 2, 2, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, CollectionNewComponent_div_1_div_11_Template, 16, 11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](12, "sort");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵstyleProp"]("font-size", 14, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("placeholder", "Recherche par ")("ngModel", ctx_r0.cardSearchValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵstyleProp"]("font-size", 14, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", ctx_r0.searchBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r0.searchTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](12, 9, ctx_r0.cards, "name"));
} }
function CollectionNewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 35)(1, "div", 36)(2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
} }
function CollectionNewComponent_div_8_mat_expansion_panel_3_div_6_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" (", item_r33.owner, " )");
} }
function CollectionNewComponent_div_8_mat_expansion_panel_3_div_6_mat_icon_13_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "mat-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CollectionNewComponent_div_8_mat_expansion_panel_3_div_6_mat_icon_13_Template_mat_icon_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r44); const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3); ctx_r42.addCollectionItemSimple(item_r33); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event.stopPropagation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "add_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} }
function CollectionNewComponent_div_8_mat_expansion_panel_3_div_6_mat_icon_14_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "mat-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CollectionNewComponent_div_8_mat_expansion_panel_3_div_6_mat_icon_14_Template_mat_icon_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r47); const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3); ctx_r45.removeCollectionItemSimple(item_r33); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event.stopPropagation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "remove_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} }
function CollectionNewComponent_div_8_mat_expansion_panel_3_div_6_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 58)(1, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CollectionNewComponent_div_8_mat_expansion_panel_3_div_6_div_15_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r50); const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r48.setCardAsCollectionImage($event, item_r33.card.apiId)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "Choisir en tant qu'image de deck ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CollectionNewComponent_div_8_mat_expansion_panel_3_div_6_div_15_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r50); const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r51.openSendToAnotherCollection($event, item_r33)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4, "Envoyer vers un autre deck / collection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} }
function CollectionNewComponent_div_8_mat_expansion_panel_3_div_6_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-modal-card-detail", 34);
} if (rf & 2) {
    const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("card", item_r33.card);
} }
function CollectionNewComponent_div_8_mat_expansion_panel_3_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CollectionNewComponent_div_8_mat_expansion_panel_3_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r56); const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](17); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r55.open(_r39)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CollectionNewComponent_div_8_mat_expansion_panel_3_div_6_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r56); const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](_r34.close()); })("contextmenu", function CollectionNewComponent_div_8_mat_expansion_panel_3_div_6_Template_div_contextmenu_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r56); const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](1); _r34.open(); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "ban");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "strong", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 50)(7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](8, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, CollectionNewComponent_div_8_mat_expansion_panel_3_div_6_span_11_Template, 2, 1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](13, CollectionNewComponent_div_8_mat_expansion_panel_3_div_6_mat_icon_13_Template, 2, 0, "mat-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](14, CollectionNewComponent_div_8_mat_expansion_panel_3_div_6_mat_icon_14_Template, 2, 0, "mat-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](15, CollectionNewComponent_div_8_mat_expansion_panel_3_div_6_div_15_Template, 5, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](16, CollectionNewComponent_div_8_mat_expansion_panel_3_div_6_ng_template_16_Template, 1, 1, "ng-template", null, 55, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("container", "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵstyleProp"]("background-color", ctx_r32.mainDeckMap.get(item_r33.card.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 12, item_r33.card == null ? null : item_r33.card.banListInfo == null ? null : item_r33.card.banListInfo.banTcg))("matBadgeHidden", (item_r33.card == null ? null : item_r33.card.banListInfo == null ? null : item_r33.card.banListInfo.banTcg) === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", item_r33.quantity, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("src", ctx_r32.backEndCardUrl + (item_r33 == null ? null : item_r33.card == null ? null : item_r33.card.apiId) + "/image-cropped", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", item_r33.card.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r33.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r32.staticCollection);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r32.staticCollection);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r32.staticCollection);
} }
function CollectionNewComponent_div_8_mat_expansion_panel_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "mat-expansion-panel", 42)(1, "mat-expansion-panel-header")(2, "mat-panel-title")(3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, CollectionNewComponent_div_8_mat_expansion_panel_3_div_6_Template, 18, 14, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const set_r31 = ctx.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("expanded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate4"](" ", set_r31, " ", ctx_r30.getSetName(set_r31), " - ", ctx_r30.setNumberOfCardsMap.get(set_r31), " ", ctx_r30.getSetNumberOfCards(set_r31), " cartes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r30.setMap.get(set_r31));
} }
function CollectionNewComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 38)(1, "div", 39)(2, "mat-accordion", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, CollectionNewComponent_div_8_mat_expansion_panel_3_Template, 7, 6, "mat-expansion-panel", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r2.getKeys());
} }
function CollectionNewComponent_div_10_div_1_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-modal-card-detail", 34);
} if (rf & 2) {
    const item_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("card", item_r60.card);
} }
function CollectionNewComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CollectionNewComponent_div_10_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r66); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](11); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r65.open(_r61)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "ban");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "strong", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 50)(6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](7, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, CollectionNewComponent_div_10_div_1_ng_template_10_Template, 1, 1, "ng-template", null, 55, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r60 = ctx.$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵstyleProp"]("background-color", ctx_r59.mainDeckMap.get(item_r60.card.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 7, item_r60.card.banListInfo == null ? null : item_r60.card.banListInfo.banTcg))("matBadgeHidden", (item_r60.card.banListInfo == null ? null : item_r60.card.banListInfo.banTcg) === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", item_r60.quantity, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("src", ctx_r59.backEndCardUrl + item_r60.card.apiId + "/image-cropped", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", item_r60.card.name, " ");
} }
function CollectionNewComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, CollectionNewComponent_div_10_div_1_Template, 12, 9, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r3.flatCollection.items);
} }
function CollectionNewComponent_div_12_div_1_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-modal-card-detail", 34);
} if (rf & 2) {
    const entry_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("card", entry_r68[0]);
} }
function CollectionNewComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CollectionNewComponent_div_12_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r74); const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](11); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r73.open(_r69)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "ban");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 50)(4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](5, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, CollectionNewComponent_div_12_div_1_ng_template_10_Template, 1, 1, "ng-template", null, 55, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r68 = ctx.$implicit;
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵstyleProp"]("background-color", ctx_r67.mainDeckMap.get(entry_r68[0].type));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 7, entry_r68[0] == null ? null : entry_r68[0].banListInfo == null ? null : entry_r68[0].banListInfo.banTcg))("matBadgeHidden", (entry_r68[0] == null ? null : entry_r68[0].banListInfo == null ? null : entry_r68[0].banListInfo.banTcg) === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("src", ctx_r67.backEndCardUrl + entry_r68[0].apiId + "/image-cropped", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", entry_r68[0].name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("\u00A0- Prix ", entry_r68[1], "\u20AC");
} }
function CollectionNewComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, CollectionNewComponent_div_12_div_1_Template, 12, 9, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r4.cardPriceEntries);
} }
class CollectionNewComponent {
    constructor(yugiohService, snackBar, route, dialog, config, modalService, router) {
        this.yugiohService = yugiohService;
        this.snackBar = snackBar;
        this.route = route;
        this.dialog = dialog;
        this.modalService = modalService;
        this.router = router;
        this.backEndCardUrl = _global__WEBPACK_IMPORTED_MODULE_7__.backendUrl + '/cards/';
        this.canSave = false;
        this.cards = [];
        this.Position = _position__WEBPACK_IMPORTED_MODULE_1__.Position;
        this.sort = _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_5__.CardSort.alphabeticalAsc;
        this.setMap = new Map();
        this.setNumberOfCardsMap = new Map();
        this.searchSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.Subject();
        this.isFullCollection = false;
        this.cardPriceMap = new Map();
        this.mainDeckMap = _utils__WEBPACK_IMPORTED_MODULE_10__.Utils.cardColorMap;
        this.filterDto = new _filter_dialog_filter_dto__WEBPACK_IMPORTED_MODULE_9__.FilterDto();
        this.searchTypes = ['nom', 'set', 'id'];
        this.searchBy = 'nom';
        config.openDelay = 400;
    }
    ngOnInit() {
        this.yugiohService.getCardsbyName()
            .subscribe(cards => {
            this.cards = cards;
            if (this.collection) {
                this.refreshCollectionView();
            }
        });
        const url = this.router.url; // Moche
        console.log(url);
        this.deckSearchValue = this.route.snapshot.queryParamMap.get('searchValue');
        const idOrCreatedBy = url.split('/').slice(-1)[0]; // Get last item
        if (url.includes(_global__WEBPACK_IMPORTED_MODULE_7__.idAllCollections)) {
            this.staticCollection = true;
            this.yugiohService.getCollectionsFull()
                .subscribe(collections => {
                const aggregatedCollection = new _collection__WEBPACK_IMPORTED_MODULE_0__.Collection(idOrCreatedBy, 'COLLECTION');
                const mapApiIdOwnerItems = new Map();
                collections.forEach(collection => {
                    collection.items.forEach(item => {
                        item.owner = collection.createdBy;
                        const mapItem = mapApiIdOwnerItems.get(item.card.apiId + item?.set?.code + item.owner);
                        if (mapItem) {
                            mapItem.quantity += item.quantity;
                        }
                        else {
                            mapApiIdOwnerItems.set(item.card.apiId + item?.set?.code + item.owner, item);
                        }
                    });
                });
                aggregatedCollection.items.push(...mapApiIdOwnerItems.values());
                this.collection = aggregatedCollection;
                this.collection.id = null; // TODO TODO -> IMPORTANT : KEEP NULL AT ALL COSTS OR ELSE IT WILL MESS UP WITH EXISTING COLLECTIONS !
                this.isFullCollection = true;
                this.generateTotalPrice(); // TODO : YUGI-1 AMELIORER ROBUSTESSE
                this.refreshCollectionView();
            });
        }
        else if (url.includes('by-id')) {
            this.staticCollection = false;
            this.yugiohService.getCollectionById(idOrCreatedBy)
                .subscribe(collection => {
                this.collection = collection;
                this.isFullCollection = true;
                this.generateTotalPrice();
                this.refreshCollectionView();
            });
        }
        else {
            this.staticCollection = true;
            this.yugiohService.getCollectionsByCreator(idOrCreatedBy)
                .subscribe(collections => {
                const aggregatedCollection = new _collection__WEBPACK_IMPORTED_MODULE_0__.Collection(idOrCreatedBy, 'COLLECTION');
                const mapApiIdOwnerItems = new Map();
                collections.forEach(collection => {
                    collection.items.forEach(item => {
                        const mapItem = mapApiIdOwnerItems.get(item.card.apiId + item?.set?.code);
                        if (mapItem) {
                            mapItem.quantity += item.quantity;
                        }
                        else {
                            mapApiIdOwnerItems.set(item.card.apiId + item?.set?.code, item);
                        }
                    });
                });
                aggregatedCollection.items.push(...mapApiIdOwnerItems.values());
                this.collection = aggregatedCollection;
                this.collection.id = null; // TODO TODO -> IMPORTANT : KEEP NULL AT ALL COSTS OR ELSE IT WILL MESS UP WITH EXISTING COLLECTIONS !
                this.isFullCollection = true;
                this.generateTotalPrice();
                this.refreshCollectionView();
            });
        }
        this.yugiohService.getSets().subscribe(sets => this.sets = sets, () => this.openSnackBar('Erreur lors de la récupération des sets', 'OK'));
        this.searchSub$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.debounceTime)(400), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.distinctUntilChanged)()).subscribe((filterValue) => {
            this.searchCardWithString(filterValue);
        });
    }
    generateTotalPrice() {
        if (!this.totalPrice) {
            const apiIds = this.collection.items.map(value => value.card.apiId);
            this.yugiohService.getCardsPriceById(apiIds)
                .subscribe(value => {
                console.log(value);
                if (value?.data && value.data.length > 0) {
                    const map = new Map();
                    for (const data of value.data) {
                        map.set(String(data.id), data.card_prices[0].cardmarket_price);
                        const foundCard = this.collection.items.map(item => item.card)
                            .find(c => c.apiId === String(data.id));
                        if (!foundCard) {
                            console.log(data); // TODO : mieux afficher cette erreur (en faire une liste ou que sais-je
                        }
                        else {
                            this.cardPriceMap.set(foundCard, data.card_prices[0].cardmarket_price);
                        }
                    }
                    // sort
                    this.cardPriceEntries = Array.from(new Map([...this.cardPriceMap.entries()].sort((a, b) => b[1] - a[1])).entries());
                    console.log(this.cardPriceEntries);
                    console.log(map);
                    this.totalPrice = 0;
                    this.collection.items.forEach(item => {
                        const price = Number(map.get(item.card.apiId));
                        if (price) {
                            this.totalPrice += price * item.quantity;
                            item.card.price = price;
                        }
                        else {
                            console.log(item.card.apiId);
                            item.card.price = 0;
                        }
                    });
                    console.log(this.totalPrice);
                    // Keep only last 2 digits
                    this.totalPrice = Number(this.totalPrice.toFixed(2));
                }
            });
        }
    }
    searchCardWithString(search) {
        let cardsObservable;
        if (this.searchBy === 'id') {
            cardsObservable = this.yugiohService.getCardsByApiId(search.trim().toLowerCase());
        }
        else if (this.searchBy === 'nom') {
            cardsObservable = this.yugiohService.getCardsbyName(search.trim().toLowerCase());
        }
        else if (this.searchBy === 'set') {
            cardsObservable = this.yugiohService.getCardsBySet(search.trim().toLowerCase());
        }
        cardsObservable
            .subscribe(cards => {
            this.cards = cards;
            if (this.collection) {
                this.refreshCollectionView();
            }
        });
    }
    ngAfterViewInit() {
    }
    handleKeyboardEvent(event) {
        if (event.code === 'Escape') {
            setTimeout(() => {
                this.searchInput.nativeElement.blur();
                this.searchInput.nativeElement.focus();
            }, 15);
        }
    }
    applyCardFilter($event) {
        let searchValue;
        console.log($event);
        if ($event) {
            if ($event.code === 'Escape') {
                searchValue = '';
            }
            else {
                searchValue = $event.target.value;
            }
        }
        else {
            searchValue = '';
        }
        this.cardSearchValue = searchValue;
        this.searchSub$.next(searchValue);
    }
    addCollectionItemSimple(item) {
        item.quantity += 1;
        this.localUpdateCollection(true);
    }
    removeCollectionItemSimple(item) {
        console.log(this.collection.items.length);
        if (item.quantity > 1) {
            item.quantity -= 1;
        }
        else {
            this.collection.items.splice(this.collection.items.indexOf(item), 1);
        }
        this.localUpdateCollection(true);
    }
    addCollectionItem(card, setCode, position) {
        let isUpdate = false;
        const set = this.sets.filter(cardSet => cardSet.code === setCode)[0];
        for (const item of this.collection.items) {
            if (item.card.id === card.id && item.position === position && item?.set?.code === set.code) {
                item.quantity += 1;
                isUpdate = true;
            }
        }
        if (!isUpdate) {
            this.collection.items.push(new _collection_item__WEBPACK_IMPORTED_MODULE_2__.CollectionItem(position, card, set));
        }
        this.localUpdateCollection(true);
    }
    removeCollectionItem(card, setCode, position) {
        const set = this.sets.filter(cardSet => cardSet.code === setCode)[0];
        for (const item of this.collection.items) {
            if (item.card.id === card.id && item.position === position && item?.set?.code === set.code) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                }
                else {
                    this.collection.items.splice(this.collection.items.indexOf(item), 1);
                }
            }
        }
        this.localUpdateCollection(true);
        return false;
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 3000,
        });
    }
    getKeys() {
        return Array.from(this.setMap.keys());
    }
    getSetNumberOfCards(set) {
        const nbCards = this.sets.find(value => set === value.code)?.numCards;
        return nbCards ? ' / ' + nbCards : '';
    }
    getSetName(set) {
        if (this.sets) {
            const name = this.sets.find(value => set === value.code)?.name;
            return name ? '  (' + name + ') ' : '';
        }
    }
    refreshCollectionView() {
        this.setMap.clear();
        this.setNumberOfCardsMap.clear();
        this.setMap.set('SANS CODE', new Array());
        this.setNumberOfCardsMap.set('SANS CODE', 0);
        this.flatCollection = new _collection__WEBPACK_IMPORTED_MODULE_0__.Collection(null, null);
        this.sortCollection(this.collection.items);
        // Pour enlever les doublons fr/en dans le comptage du nombre de cartes d'un set
        const alreadyIncludedCardInSetMap = new Map(); // setCode - apiId[]
        alreadyIncludedCardInSetMap.set('SANS CODE', []);
        this.collection.items.filter(item => !this.deckSearchValue || this.deckSearchValue.length === 0
            || item.card.name.toLowerCase().includes(this.deckSearchValue.toLowerCase()))
            .filter(item => this.applyFilters(item))
            .forEach(collectionItem => {
            // Duplicate found, return
            let isDuplicate = false;
            if (alreadyIncludedCardInSetMap.get(collectionItem?.set?.code)?.includes(collectionItem.card.apiId)) {
                isDuplicate = true;
            }
            if (collectionItem.set) {
                if (this.setMap.has(collectionItem.set.code)) {
                    this.setMap.get(collectionItem.set.code).push(collectionItem);
                    if (!isDuplicate) {
                        this.setNumberOfCardsMap.set(collectionItem.set.code, this.setNumberOfCardsMap.get(collectionItem.set.code) + 1);
                    }
                }
                else {
                    this.setMap.set(collectionItem.set.code, [collectionItem]);
                    if (!isDuplicate) {
                        this.setNumberOfCardsMap.set(collectionItem.set.code, 1);
                    }
                }
                if (alreadyIncludedCardInSetMap.has(collectionItem.set.code)) {
                    alreadyIncludedCardInSetMap.get(collectionItem.set.code).push(collectionItem.card.apiId);
                }
                else {
                    alreadyIncludedCardInSetMap.set(collectionItem.set.code, [collectionItem.card.apiId]);
                }
            }
            else {
                this.setMap.get('SANS CODE').push(collectionItem);
                if (!isDuplicate) {
                    this.setNumberOfCardsMap.set('SANS CODE', this.setNumberOfCardsMap.get('SANS CODE') + 1);
                }
                alreadyIncludedCardInSetMap.get('SANS CODE').push(collectionItem.card.apiId);
            }
            this.flatCollection.items.push(collectionItem);
        });
        this.collection.totalItems = this.collection.items.map(value => value.quantity)
            .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        // Order setMap by key in alphabetical order
        this.setMap = new Map([...this.setMap].sort());
        /*this.setMap.forEach(collectionsItems => {
          // collectionsItems.sort((a, b) => a.card.name.localeCompare(b.card.name) || a.card.type.localeCompare(b.card.type));
          collectionsItems.sort((a, b) => a.card.type.localeCompare(b.card.type) || a.card.name.localeCompare(b.card.name));
        });*/
        this.populateCardValues();
    }
    sortCollection(items) {
        // nb, lelve, atk, def , price
        switch (this.sort) {
            case _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_5__.CardSort.alphabeticalAsc:
                items.sort((a, b) => a.card.type.localeCompare(b.card.type) || a.card.name.localeCompare(b.card.name));
                break;
            case _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_5__.CardSort.alphabeticalDesc:
                items.sort((a, b) => a.card.type.localeCompare(b.card.type) || b.card.name.localeCompare(a.card.name));
                break;
            case _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_5__.CardSort.nbOwnedAsc:
                items.sort((a, b) => a.card.type.localeCompare(b.card.type) || a.quantity - b.quantity);
                break;
            case _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_5__.CardSort.nbOwnedDesc:
                items.sort((a, b) => a.card.type.localeCompare(b.card.type) || b.quantity - a.quantity);
                break;
            case _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_5__.CardSort.levelRankLinkAsc:
                items.sort((a, b) => a.card.type.localeCompare(b.card.type) || a.card.level - b.card.level);
                break;
            case _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_5__.CardSort.levelRankLinkDesc:
                items.sort((a, b) => a.card.type.localeCompare(b.card.type) || b.card.level - a.card.level);
                break;
            case _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_5__.CardSort.atkAsc:
                items.sort((a, b) => a.card.type.localeCompare(b.card.type) || a.card.atk - b.card.atk);
                break;
            case _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_5__.CardSort.atkDesc:
                items.sort((a, b) => a.card.type.localeCompare(b.card.type) || b.card.atk - a.card.atk);
                break;
            case _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_5__.CardSort.defAsc:
                items.sort((a, b) => a.card.type.localeCompare(b.card.type) || a.card.def - b.card.def);
                break;
            case _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_5__.CardSort.defDesc:
                items.sort((a, b) => a.card.type.localeCompare(b.card.type) || b.card.def - a.card.def);
                break;
            case _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_5__.CardSort.priceAsc:
                items.sort((a, b) => a.card.type.localeCompare(b.card.type) || a.card.price - b.card.price);
                break;
            case _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_5__.CardSort.priceDesc:
                items.sort((a, b) => a.card.type.localeCompare(b.card.type) || b.card.price - a.card.price);
                break;
        }
    }
    applyFilters(item) {
        if (this.filterDto?.cardTypes.length > 0
            && this.filterDto.cardTypes.filter(value => item.card.type.toLowerCase().includes(value.toLowerCase())).length === 0) {
            return false;
        }
        // Si filtre présent et attribute pas dans la liste de filtre alors on l'enlève
        if (this.filterDto?.attributes.length > 0 && this.filterDto.attributes.indexOf(item.card.attribute) === -1) {
            return false;
        }
        // Si filtre présent et level pas dans la liste de filtre alors on l'enlève
        if (this.filterDto?.levels.length > 0 && this.filterDto.levels.indexOf(item.card.level) === -1) {
            return false;
        }
        // Si filtre présent et monster race pas dans la liste de filtre alors on l'enlève
        if (this.filterDto?.monsterRaces.length > 0 && this.filterDto.monsterRaces.indexOf(item.card.race) === -1) {
            return false;
        }
        // Si filtre présent et spell race pas dans la liste de filtre alors on l'enlève
        if (this.filterDto?.spellRaces.length > 0 && this.filterDto.spellRaces.indexOf(item.card.race) === -1) {
            return false;
        }
        // Si filtre présent et trap race pas dans la liste de filtre alors on l'enlève
        if (this.filterDto?.trapRaces.length > 0 && this.filterDto.trapRaces.indexOf(item.card.race) === -1) {
            return false;
        }
        // Si filtre présent et archétype différent du filtre alors on l'enlève
        if (this.filterDto.archetype && item.card.archetype !== this.filterDto.archetype) {
            return false;
        }
        return true;
    }
    populateCardValues() {
        this.cards.forEach(card => {
            card.mapMainDeckQuantity = new Map();
            this.collection?.items.forEach(item => {
                if (item.card.name === card.name && item.set) {
                    card.mapMainDeckQuantity.set(item.set.code, item.quantity);
                    return;
                }
            });
        });
    }
    openSortDialog() {
        const dialogRef = this.dialog.open(_sort_dialog_sort_dialog_component__WEBPACK_IMPORTED_MODULE_6__.SortDialogComponent, {
            width: '300px',
            data: {
                sort: this.sort !== undefined ? this.sort : null,
                collectionView: true
            }
        });
        dialogRef.afterClosed().subscribe(value => {
            this.sort = value;
            this.refreshCollectionView();
        });
    }
    saveDeck() {
        this.yugiohService.addOrUpdateCollection(this.collection)
            .subscribe(collection => {
            this.collection = collection;
            this.refreshCollectionView();
            this.localUpdateCollection(false);
        }, () => this.openSnackBar('Erreur lors de la sauvegarde', 'OK'));
    }
    localUpdateCollection(canSave) {
        this.canSave = canSave;
        this.refreshCollectionView();
        if (canSave) {
            window.onbeforeunload = (e) => {
                // IE & Firefox
                if (e) {
                    e.returnValue = 'Are you sure?';
                }
                // For Safari
                return 'Are you sure?';
            };
        }
        else {
            window.onbeforeunload = null; // no alert on close window
        }
    }
    canDeactivate() {
        if (this.canSave) {
            if (confirm('Les modification apportées à la collection n\'ont pas été sauvegardées. Quitter quand même ?')) {
                window.onbeforeunload = null; // no alert on close window
                return true;
            }
            else {
                return false;
            }
        }
        window.onbeforeunload = null; // no alert on close window
        return true;
    }
    onClick($event) {
        $event.preventDefault();
        if ($event.which === 2) {
            window.open('/');
        }
    }
    setCardAsCollectionImage($event, cardApidId) {
        $event?.stopPropagation();
        // TODO : disable for static collection
        if (!this.staticCollection) {
            this.collection.mainCardApiId = cardApidId;
            this.localUpdateCollection(true);
            return false;
        }
    }
    openSendToAnotherCollection($event, item) {
        $event?.stopPropagation();
        if (!this.staticCollection) {
            this.dialog.open(_send_card_to_other_collection_modal_send_card_to_other_collection_modal_component__WEBPACK_IMPORTED_MODULE_11__.SendCardToOtherCollectionModalComponent, {
                width: '400px',
            }).afterClosed().subscribe(collectionLight => {
                console.log(collectionLight);
                if (collectionLight) {
                    const collectionItemInputPojo = new _collection_import_pojo__WEBPACK_IMPORTED_MODULE_4__.CollectionImportPojo(item.quantity, item.card.name, item.set?.code, item.position, item.card.apiId);
                    console.log(collectionItemInputPojo);
                    this.yugiohService.importCollection(collectionLight.id, [collectionItemInputPojo]).subscribe(value => {
                        // If error
                        if (value.notAddedPojos && value.notAddedPojos.length > 0) {
                            this.snackBar.open('Carte ' + item.card.name + ' n\'a pas pu être envoyée vers la collection ' + collectionLight.name + '.');
                        }
                        else { // Ok
                            this.snackBar.open('Carte ' + item.card.name + ' envoyée vers la collection ' + collectionLight.name + '.');
                            const indexToDelete = this.collection.items.indexOf(item);
                            this.collection.items.splice(indexToDelete, 1);
                            this.localUpdateCollection(true);
                        }
                    });
                }
            });
        }
    }
    cardSearchTypeChange() {
        this.searchCardWithString(this.cardSearchValue);
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            // this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    // Search deck section
    searchValueChanged($event) {
        this.deckSearchValue = $event;
        this.refreshCollectionView();
    }
    applyFilter(filterDto) {
        this.filterDto = filterDto;
        this.refreshCollectionView();
    }
    applySort(sort) {
        this.sort = sort;
        this.refreshCollectionView();
    }
    download() {
        const strings = new Array();
        for (const value of this.collection.items) {
            let code;
            if (value?.set?.code) {
                code = value?.set?.code;
            }
            else {
                code = '';
            }
            strings.push(value.quantity + ' ' + value.card.name + ' ' + code);
        }
        const stringToDownload = strings.join('\r\n');
        const data = new Blob([stringToDownload], { type: 'text/plain;charset=utf-8' });
        const filename = this.collection.name + '.json';
        const options = {
            autoBom: false,
        };
        (0,file_saver__WEBPACK_IMPORTED_MODULE_8__.saveAs)(data, filename, options);
    }
    openImportDialog() {
        const dialogRef = this.dialog.open(_dialog_import_collection_dialog_import_collection_component__WEBPACK_IMPORTED_MODULE_3__.DialogImportCollectionComponent, {
            width: '400px',
            data: this.collection
        });
        dialogRef.afterClosed().subscribe(result => {
            const importData = result;
            console.log('The dialog was closed');
            if (importData.selectedIndex === 0) {
                const cardLines = result.importText.split(/[\r\n]+/);
                console.log(cardLines);
                const lines = new Array();
                for (const line of cardLines) {
                    if (line && line.trim().length > 0) {
                        if (line.charAt(0) >= '0' && line.charAt(0) <= '9') { // first character is a number
                            const lineSplit = line.trim().split(/ +/); // to handle cases like "  first    middle    last    "
                            // tslint:disable-next-line:max-line-length
                            const linePotentialSet = this.sets.filter(value => value.code.toLowerCase() === lineSplit[lineSplit.length - 1].toLowerCase());
                            const cardNumber = lineSplit[0].charAt(0); // TODO : DOESN'T WORK FOR NUMBER higher than 9 because we only keep the first character
                            let cardName = '';
                            const cardCode = linePotentialSet && linePotentialSet.length > 0 ? linePotentialSet[0].code : null;
                            // tslint:disable-next-line:prefer-for-of
                            for (let i = 1; i < (cardCode ? lineSplit.length - 1 : lineSplit.length); i++) {
                                if (lineSplit[i] && lineSplit.length > 0) {
                                    cardName += lineSplit[i] + ' ';
                                }
                            }
                            lines.push(new _collection_import_pojo__WEBPACK_IMPORTED_MODULE_4__.CollectionImportPojo(cardNumber, cardName.trim(), cardCode, 0));
                        }
                    }
                }
                this.yugiohService.importCollection(this.collection.id, lines).subscribe(value => {
                    this.collection = value.collection;
                    this.localUpdateCollection(false);
                    if (value.notAddedPojos?.length > 0) {
                        this.openSnackBar('Cartes non ajoutées : ' + value.notAddedPojos.toString(), 'OK');
                    }
                });
            }
            else {
                this.yugiohService.importCollectionBySet(this.collection.id, importData.setCode, importData.language).subscribe(value => {
                    this.collection = value;
                    this.localUpdateCollection(false);
                });
            }
        });
    }
}
CollectionNewComponent.ɵfac = function CollectionNewComponent_Factory(t) { return new (t || CollectionNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_yugioh_service__WEBPACK_IMPORTED_MODULE_12__.YugiohService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbTooltipConfig), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.Router)); };
CollectionNewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({ type: CollectionNewComponent, selectors: [["app-collection-new"]], viewQuery: function CollectionNewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
    } }, hostBindings: function CollectionNewComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("keydown", function CollectionNewComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresolveDocument"]);
    } }, decls: 13, vars: 13, consts: [[2, "display", "flex"], ["style", "min-width: 300px; max-width: 300px; display: flex; flex-direction: column; height: calc(100vh - 58px); overflow-y: auto; background-color: rgb(15 15 15); padding-left: 4px; padding-right: 4px", "class", "card-column", 4, "ngIf"], [2, "width", "100%", "max-height", "calc(100vh - 58px)", "display", "flex", "flex-direction", "column", "overflow-y", "auto"], [3, "canSave", "collection", "staticCollection", "totalPrice", "isCollection", "save", "removeImage"], [3, "showYdke", "showDownloadAndUpload", "searchValue", "searchValueChanged", "filterDtoChanged", "sortChanged", "downloadClicked", "importDialogClicked"], ["label", "Cartes"], ["style", "flex-grow: 1; max-height: calc(100vh - 58px);", 4, "ngIf"], ["style", "flex-grow: 1; height: 100%; overflow-y: auto;", 4, "ngIf"], ["label", "Vue plate"], ["style", "width: 95%; margin-left: 2.5%", 4, "ngIf"], ["label", "Prix"], [1, "card-column", 2, "min-width", "300px", "max-width", "300px", "display", "flex", "flex-direction", "column", "height", "calc(100vh - 58px)", "overflow-y", "auto", "background-color", "rgb(15 15 15)", "padding-left", "4px", "padding-right", "4px"], ["appearance", "outline", 2, "width", "75%"], ["id", "sidebar-search-input", "matInput", "", 3, "placeholder", "ngModel", "ngModelChange", "keyup"], ["inputElement", ""], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["appearance", "outline", 2, "width", "25%"], [3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["style", "display:flex; width: 100%;", 3, "ngbTooltip", "container", 4, "ngFor", "ngForOf"], [3, "value"], [2, "display", "flex", "width", "100%", 3, "ngbTooltip", "container"], [2, "width", "20%"], ["alt", "Character picture", 1, "img-fluid", 2, "margin-right", "4px", 3, "src"], [2, "width", "65%"], [1, "list-card-name"], [1, "list-card-content"], [4, "ngIf"], ["class", "list-card-content", 4, "ngIf"], ["style", "display: flex; align-items: center", 4, "ngFor", "ngForOf"], ["tipContent", ""], [2, "display", "flex", "align-items", "center"], [1, "list-card-content", 2, "width", "38px"], [1, "list-card-mat-icon", 2, "border-radius", "6px", 3, "contextmenu", "click"], [3, "card"], [2, "flex-grow", "1", "max-height", "calc(100vh - 58px)"], [2, "width", "100%"], [2, "display", "flex", "align-items", "center", "justify-content", "center", "margin-top", "20vh"], [2, "flex-grow", "1", "height", "100%", "overflow-y", "auto"], [2, "padding-bottom", "1vh"], ["multi", ""], [3, "expanded", 4, "ngFor", "ngForOf"], [3, "expanded"], [1, "category-cards"], [1, "card-group-container"], ["class", "card-container", "ngbDropdown", "", 3, "container", "click", 4, "ngFor", "ngForOf"], ["ngbDropdown", "", 1, "card-container", 3, "container", "click"], ["myDrop", "ngbDropdown"], ["ngbDropdownToggle", "", 1, "card-container-inside", 3, "matBadge", "matBadgeHidden", "click", "contextmenu"], [1, "card-quantity"], [1, "card-name"], ["alt", "website icon", 2, "width", "42px", "height", "42px", "border", "0", "margin-right", "8px", 3, "src"], ["style", "font-weight: bold;", 4, "ngIf"], [3, "click", 4, "ngIf"], ["ngbDropdownMenu", "", 4, "ngIf"], ["content", ""], [2, "font-weight", "bold"], [3, "click"], ["ngbDropdownMenu", ""], ["ngbDropdownItem", "", 3, "click"], [2, "width", "95%", "margin-left", "2.5%"], ["class", "card-container", "style", "width: 100%", 3, "click", 4, "ngFor", "ngForOf"], [1, "card-container", 2, "width", "100%", 3, "click"], [1, "card-container-inside", 2, "margin", "2px", 3, "matBadge", "matBadgeHidden"], [1, "card-container-inside", 3, "matBadge", "matBadgeHidden"]], template: function CollectionNewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, CollectionNewComponent_div_1_Template, 13, 12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 2)(3, "app-bar-collection-information", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("save", function CollectionNewComponent_Template_app_bar_collection_information_save_3_listener() { return ctx.saveDeck(); })("removeImage", function CollectionNewComponent_Template_app_bar_collection_information_removeImage_3_listener() { return ctx.setCardAsCollectionImage(null, null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "app-search", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("searchValueChanged", function CollectionNewComponent_Template_app_search_searchValueChanged_4_listener($event) { return ctx.searchValueChanged($event); })("filterDtoChanged", function CollectionNewComponent_Template_app_search_filterDtoChanged_4_listener($event) { return ctx.applyFilter($event); })("sortChanged", function CollectionNewComponent_Template_app_search_sortChanged_4_listener($event) { return ctx.applySort($event); })("downloadClicked", function CollectionNewComponent_Template_app_search_downloadClicked_4_listener() { return ctx.download(); })("importDialogClicked", function CollectionNewComponent_Template_app_search_importDialogClicked_4_listener() { return ctx.openImportDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "mat-tab-group")(6, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, CollectionNewComponent_div_7_Template, 4, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, CollectionNewComponent_div_8_Template, 4, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "mat-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, CollectionNewComponent_div_10_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "mat-tab", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](12, CollectionNewComponent_div_12_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx.staticCollection);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("canSave", ctx.canSave)("collection", ctx.collection)("staticCollection", ctx.staticCollection)("totalPrice", ctx.totalPrice)("isCollection", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("showYdke", false)("showDownloadAndUpload", !ctx.staticCollection)("searchValue", ctx.deckSearchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx.isFullCollection);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isFullCollection);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.flatCollection);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.collection && ctx.cardPriceEntries);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__.MatSuffix, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbDropdownItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_32__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_33__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_34__.MatOption, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__.MatTab, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_36__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_36__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_36__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_36__.MatExpansionPanelTitle, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_37__.MatProgressSpinner, _angular_material_badge__WEBPACK_IMPORTED_MODULE_38__.MatBadge, _tooltip_card_tooltip_card_component__WEBPACK_IMPORTED_MODULE_13__.TooltipCardComponent, _modal_card_detail_modal_card_detail_component__WEBPACK_IMPORTED_MODULE_14__.ModalCardDetailComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_15__.SearchComponent, _bar_collection_information_bar_collection_information_component__WEBPACK_IMPORTED_MODULE_16__.BarCollectionInformationComponent, _array_sort_pipe__WEBPACK_IMPORTED_MODULE_17__.ArraySortPipe, _ban_pipe__WEBPACK_IMPORTED_MODULE_18__.BanPipe], styles: ["mat-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.selected[_ngcontent-%COMP%] {\n  border: 1px #959da9 solid;\n  border-radius: 4px;\n}\n\n@media screen and (max-width: 701px) {\n  .card-column[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n\n.card-group-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.list-card-name[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  color: rgb(255, 255, 255);\n}\n\n.list-card-content[_ngcontent-%COMP%] {\n  color: rgb(255, 255, 255);\n  font-size: 12px;\n}\n\n.list-card-mat-icon[_ngcontent-%COMP%] {\n  color: rgb(255, 255, 255);\n  font-size: 12px;\n  font-weight: bold;\n  background-color: rgb(55, 55, 55);\n  padding: 8px;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n\n.list-card-mat-icon[_ngcontent-%COMP%]:hover {\n  background-color: rgb(58, 134, 255);\n}\n\n.category-cards[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n  margin-top: 0.25rem;\n  color: rgb(0, 0, 0);\n  font-size: 1rem;\n  font-weight: 800;\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  transition: all 0.1s ease 0s;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  width: 50%;\n  padding: 1px 16px;\n}\n\n@media (max-width: 992px) {\n  .card-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.card-container[_ngcontent-%COMP%]:hover {\n  border: 1px #424548 solid;\n}\n\n.card-container-inside[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  color: rgb(0, 0, 0);\n  font-size: 1rem;\n  font-weight: 500;\n  padding: 0px 0.5rem 0px 25px;\n  position: relative;\n  align-items: center;\n  display: flex;\n}\n\n.card-quantity[_ngcontent-%COMP%] {\n  background: rgb(255, 255, 255);\n  border-right: 1px solid rgb(255, 255, 255);\n  color: rgb(119, 119, 119);\n  font-size: 0.9rem;\n  font-weight: 400;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 25px;\n  align-items: center;\n  display: flex;\n}\n\n.card-name[_ngcontent-%COMP%] {\n  flex: 1 1 0%;\n  white-space: pre-line;\n  overflow: hidden;\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  padding: 8px;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  color: rgb(0, 0, 0);\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n.bAXgkK[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  align-items: center;\n  display: flex;\n  padding: 0.5rem 1rem;\n  background: black;\n}\n\n.qmUrg[_ngcontent-%COMP%] {\n  background: rgb(255, 255, 255);\n  border-radius: 3px;\n  height: 38px;\n  width: 100%;\n  display: flex;\n}\n\n.bAXgkK[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0px;\n  height: 100%;\n  padding: 0.5rem;\n  width: 100%;\n  box-shadow: none !important;\n}\n\n.jNdboZ[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24tbmV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSx3QkFBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUlBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsbUNBQUE7QUFERjs7QUFJQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLG1CQUFBO0VBQ0EsYUFBQTtFQUVBLDhCQUFBO0VBQ0EsNEJBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSxXQUFBO0VBREY7QUFDRjs7QUFJQTtFQUNFLHlCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0VBQ0EsYUFBQTtBQUZGOztBQUtBO0VBQ0UsOEJBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLG1CQUFBO0VBQ0EsYUFBQTtBQUZGOztBQUtBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFGRjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBTUE7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBSEY7O0FBTUE7RUFDRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQUhGIiwiZmlsZSI6ImNvbGxlY3Rpb24tbmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWljb24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNlbGVjdGVkIHtcclxuICBib3JkZXI6IDFweCAjOTU5ZGE5IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAxcHgpIHtcclxuICAuY2FyZC1jb2x1bW4ge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQtZ3JvdXAtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmxpc3QtY2FyZC1uYW1lIHtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcblxyXG4ubGlzdC1jYXJkLWNvbnRlbnQge1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubGlzdC1jYXJkLW1hdC1pY29uIHtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTUsIDU1LCA1NSk7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG59XHJcblxyXG4ubGlzdC1jYXJkLW1hdC1pY29uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTgsIDEzNCwgMjU1KTtcclxufVxyXG5cclxuLmNhdGVnb3J5LWNhcmRzIHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlIDBzO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB3aWR0aDogNTAlO1xyXG4gIHBhZGRpbmc6IDFweCAxNnB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuY2FyZC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXI6aG92ZXIge1xyXG4gIGJvcmRlcjogMXB4ICM0MjQ1NDggc29saWQ7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lci1pbnNpZGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBhZGRpbmc6IDBweCAwLjVyZW0gMHB4IDI1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY2FyZC1xdWFudGl0eSB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBjb2xvcjogcmdiKDExOSwgMTE5LCAxMTkpO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jYXJkLW5hbWUge1xyXG4gIGZsZXg6IDEgMSAwJTtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4uY2FyZC10ZXh0IHtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5cclxuLmJBWGdrSyB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcblxyXG4ucW1Vcmcge1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5iQVhna0sgaW5wdXQge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uak5kYm9aIHtcclxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 3405:
/*!***************************************************!*\
  !*** ./src/app/yu-gi-oh/collection/collection.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Collection": () => (/* binding */ Collection)
/* harmony export */ });
class Collection {
    constructor(name, type) {
        this.items = [];
        this.images = [];
        this.name = name;
        this.type = type;
    }
}


/***/ }),

/***/ 107:
/*!************************************************************!*\
  !*** ./src/app/yu-gi-oh/collection/deck-list.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeckListComponent": () => (/* binding */ DeckListComponent)
/* harmony export */ });
/* harmony import */ var _dialog_add_collection_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog-add-collection.component */ 4973);
/* harmony import */ var _dialog_remove_collection_dialog_edit_remove_collection_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dialog-remove-collection/dialog-edit-remove-collection.component */ 4045);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _collection_light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection-light */ 1729);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global */ 7266);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ 5226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _collection_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collection-item */ 245);
/* harmony import */ var _collection_import_pojo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./collection-import-pojo */ 6212);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card */ 1621);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ 5913);
/* harmony import */ var _filter_dialog_filter_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../filter-dialog/filter-dialog.component */ 5015);
/* harmony import */ var _filter_dialog_filter_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../filter-dialog/filter-dto */ 880);
/* harmony import */ var _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../sort-dialog/card-sort */ 6202);
/* harmony import */ var _sort_dialog_sort_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../sort-dialog/sort-dialog.component */ 6056);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _yugioh_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../yugioh.service */ 5594);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);






















const _c0 = ["matPaginator"];
class DeckListComponent {
    constructor(yugiohService, snackBar, dialog, router, modalService) {
        this.yugiohService = yugiohService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.router = router;
        this.modalService = modalService;
        this.backEndCardUrl = _global__WEBPACK_IMPORTED_MODULE_3__.backendUrl + '/cards/';
        this.collections = [];
        this.decks = [];
        this.collectionCreators = new Array();
        this.activeCollectionCreators = [];
        this.deckCreators = new Array();
        this.activeDeckCreators = [];
        this.searchSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject();
        this.searchSubDeck$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject();
        this.numberOfTimesMKeyPressedInARow = 0;
        this.placeholder = `1 Souleating Oviraptor
1x Aérosol de Destruction
6x TrOU noIr
2 Ultimate Conductor Tyranno

Ne pas mettre de set, il faut forcément mettre un nombre avant le nom de la carte`;
        this.cardsForComparison = '';
        this.foundLines = new Array();
        this.missingLines = new Array();
        this.foundCollectionItems = new Array();
        this.incompleteCollectionItems = new Array();
        this.missingCollectionItems = new Array();
        // Cards consultation
        this.totalNumberOfCards = 0;
        this.defaultPageSize = 25;
        this.globalCards = new Array();
        this.mainDeckMap = _utils__WEBPACK_IMPORTED_MODULE_8__.Utils.cardColorMap;
        this.searchSub2$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject();
        this.filterDto = new _filter_dialog_filter_dto__WEBPACK_IMPORTED_MODULE_10__.FilterDto();
        this.sort = _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_11__.CardSort.alphabeticalAsc;
    }
    ngOnInit() {
        this.getCollections();
        this.searchSub$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.debounceTime)(400), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.distinctUntilChanged)()).subscribe((filterValue) => {
            this.getCollections(filterValue);
        });
        this.searchSubDeck$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.debounceTime)(400), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.distinctUntilChanged)()).subscribe((filterValue) => {
            this.getCollections(filterValue);
        });
        this.searchSub2$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.debounceTime)(400), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.distinctUntilChanged)()).subscribe(() => {
            this.refreshPaginator();
        });
    }
    ngAfterViewInit() {
        this.refreshPaginator();
    }
    handleKeyboardEvent(event) {
        if (event.key === 'm') {
            this.numberOfTimesMKeyPressedInARow++;
            if (this.numberOfTimesMKeyPressedInARow >= 10) {
                console.log('10 times');
                this.downloadAll();
                this.numberOfTimesMKeyPressedInARow = 0;
            }
        }
        else {
            this.numberOfTimesMKeyPressedInARow = 0;
        }
    }
    refreshPaginator() {
        this.matPaginator.pageIndex = 0;
        this.matPaginator._changePageSize(this.matPaginator.pageSize);
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 3000,
        });
    }
    getCollections(filter) {
        this.yugiohService.getCollections(filter)
            .subscribe(collections => {
            this.collections = collections.filter(collection => collection.type === 'COLLECTION');
            this.decks = collections.filter(collection => collection.type === 'DECK');
            const set = new Set();
            this.collections.forEach(collection => {
                if (collection.createdBy) {
                    set.add(collection.createdBy);
                }
            });
            this.collectionCreators = Array.from(set);
            const set2 = new Set();
            this.decks.forEach(deck => {
                if (deck.createdBy) {
                    set2.add(deck.createdBy);
                }
            });
            this.deckCreators = Array.from(set2);
        }, () => this.openSnackBar('Erreur lors de la récupération des collections', 'OK'));
    }
    addCollection(collectionDialogData) {
        const collection = new _collection_light__WEBPACK_IMPORTED_MODULE_2__.CollectionLight(collectionDialogData.name, collectionDialogData.type, collectionDialogData.createdBy, collectionDialogData.color);
        this.yugiohService.addOrUpdateCollectionLight(collection)
            .subscribe(() => this.getCollections(), () => this.openSnackBar('Erreur lors de la création de la collection', 'OK'));
    }
    openDialog(type) {
        const dialogRef = this.dialog.open(_dialog_add_collection_component__WEBPACK_IMPORTED_MODULE_0__.DialogAddCollectionComponent, {
            width: '700px',
            data: { type }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
            this.addCollection(result);
        });
    }
    openEditOrRemoveCollectionDialog($event, collection) {
        $event.stopPropagation();
        const dialogRef = this.dialog.open(_dialog_remove_collection_dialog_edit_remove_collection_component__WEBPACK_IMPORTED_MODULE_1__.DialogEditRemoveCollectionComponent, {
            width: '700px',
            data: {
                id: collection.id,
                name: collection.name,
                createdBy: collection.createdBy,
                type: collection.type,
                color: collection.color
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
            if (result.result === 'REMOVE') {
                this.yugiohService.removeCollectionById(collection.id)
                    .subscribe(() => this.getCollections());
            }
            else if (result.result === 'OK') {
                console.log('addOrUpdate');
                console.log(result);
                this.yugiohService.addOrUpdateCollectionLight(result)
                    .subscribe(() => this.getCollections());
            }
        });
    }
    handleRouting(event, collection) {
        event.preventDefault();
        if (event.which === 2 || event.which === 1) {
            let collectionType;
            if (collection.type === 'DECK') {
                collectionType = 'decks';
            }
            else if (collection.type === 'COLLECTION') {
                collectionType = 'collections';
            }
            const url = '/yu-gi-oh/' + collectionType + '/' + collection.id;
            if (event.which === 1) {
                this.router.navigate([url], { queryParams: { cardSearchValue: this.cardSearchValue } });
            }
            else {
                let queryParam = '';
                if (this.cardSearchValue) {
                    queryParam += '?searchValue=' + this.cardSearchValue;
                }
                window.open(url + queryParam, '_blank');
            }
        }
    }
    handleRouting2(event, creator) {
        event.preventDefault();
        if (event.which === 2 || event.which === 1) {
            const url = '/yu-gi-oh/collections/' + creator;
            if (event.which === 1) {
                this.router.navigate([url]);
            }
            else {
                window.open(url, '_blank');
            }
        }
    }
    handleRouting3(event) {
        event.preventDefault();
        if (event.which === 2 || event.which === 1) {
            const url = '/yu-gi-oh/collections/' + _global__WEBPACK_IMPORTED_MODULE_3__.idAllCollections;
            if (event.which === 1) {
                this.router.navigate([url]);
            }
            else {
                window.open(url, '_blank');
            }
        }
    }
    applyCardFilterForDecks($event, inputElement) {
        let searchValue;
        if ($event) {
            searchValue = $event.target.value;
        }
        else {
            searchValue = '';
        }
        this.cardSearchValueDeck = searchValue;
        this.searchSubDeck$.next(searchValue);
        inputElement.focus();
    }
    applyCardFilter($event, inputElement) {
        let searchValue;
        if ($event) {
            searchValue = $event.target.value;
        }
        else {
            searchValue = '';
        }
        this.cardSearchValue = searchValue;
        this.searchSub$.next(searchValue);
        inputElement.focus();
    }
    applyCardFilterForGlobalCards($event, inputElement) {
        let searchValue;
        if ($event) {
            searchValue = $event.target.value;
        }
        else {
            searchValue = '';
        }
        this.cardSearchValue2 = searchValue;
        this.searchSub2$.next(searchValue);
        inputElement.focus();
    }
    downloadAll() {
        const collectionsAndDecks = [...this.collections, ...this.decks];
        collectionsAndDecks.forEach(collectionLight => {
            this.yugiohService.getCollectionById(String(collectionLight.id)).subscribe(collection => {
                const strings = new Array();
                if (collection.type === 'COLLECTION') {
                    for (const value of collection.items) {
                        let code;
                        if (value?.set?.code) {
                            code = value?.set?.code;
                        }
                        else {
                            code = '';
                        }
                        strings.push(value.quantity + ' ' + value.card.name + ' ' + code);
                    }
                }
                else {
                    const mainDeckCards = new Array();
                    const extraDeckCards = new Array();
                    const sideDeckCards = new Array();
                    collection.items.forEach(item => {
                        if (item.position === 0) {
                            mainDeckCards.push(item);
                        }
                        else if (item.position === 1) {
                            extraDeckCards.push(item);
                        }
                        else if (item.position === 2) {
                            sideDeckCards.push(item);
                        }
                    });
                    strings.push('main deck');
                    mainDeckCards.forEach(value => {
                        let code;
                        if (value.set?.code) {
                            code = value.set?.code;
                        }
                        else {
                            code = '';
                        }
                        strings.push(value.quantity + ' ' + value.card.name + ' ' + code);
                    });
                    strings.push('extra deck');
                    extraDeckCards.forEach(value => {
                        let code;
                        if (value.set?.code) {
                            code = value.set?.code;
                        }
                        else {
                            code = '';
                        }
                        strings.push(value.quantity + ' ' + value.card.name + ' ' + code);
                    });
                    strings.push('side deck');
                    sideDeckCards.forEach(value => {
                        let code;
                        if (value.set?.code) {
                            code = value.set?.code;
                        }
                        else {
                            code = '';
                        }
                        strings.push(value.quantity + ' ' + value.card.name + ' ' + code);
                    });
                }
                const stringToDownload = strings.join('\r\n');
                const data = new Blob([stringToDownload], { type: 'text/plain;charset=utf-8' });
                const filename = collection.name + '.json';
                const options = {
                    autoBom: false,
                };
                (0,file_saver__WEBPACK_IMPORTED_MODULE_4__.saveAs)(data, filename, options);
            });
        });
    }
    getCardsForComparison() {
        this.totalPrice = 0;
        const cardLines = this.cardsForComparison.split(/[\r\n]+/);
        console.log(cardLines);
        const lines = new Array();
        for (const line of cardLines) {
            if (line && line.trim().length > 0) {
                if (line.charAt(0) >= '0' && line.charAt(0) <= '9') { // first character is a number
                    const lineSplit = line.trim().split(/ +/); // to handle cases like "  first    middle    last    "
                    // tslint:disable-next-line:max-line-length
                    const cardNumber = lineSplit[0].split('x')[0];
                    let cardName = '';
                    // tslint:disable-next-line:prefer-for-of
                    for (let i = 1; i < lineSplit.length; i++) {
                        if (lineSplit[i] && lineSplit.length > 0) {
                            cardName += lineSplit[i] + ' ';
                        }
                    }
                    lines.push(new _collection_import_pojo__WEBPACK_IMPORTED_MODULE_6__.CollectionImportPojo(Number(cardNumber), cardName.trim(), null, 0));
                }
            }
        }
        console.log(lines);
        this.foundCollectionItems = undefined;
        this.incompleteCollectionItems = undefined;
        this.missingCollectionItems = undefined;
        this.foundLines = [];
        this.missingLines = [];
        let nbLinesGot = lines.length;
        // TODO : JS pipe or something like that
        for (const line of lines) {
            this.yugiohService.getCardbyName(line.cardName).subscribe(value => {
                line.cardApiId = value.apiId;
                this.foundLines.push(line);
                console.log(this.foundLines);
                nbLinesGot -= 1;
                if (nbLinesGot === 0) {
                    this.compareToCollections();
                }
            }, error => {
                this.missingLines.push(line);
                nbLinesGot -= 1;
                if (nbLinesGot === 0) {
                    this.compareToCollections();
                }
            });
        }
    }
    compareToCollections() {
        const collectionItems = [];
        this.foundLines.forEach(line => {
            const card = new _card__WEBPACK_IMPORTED_MODULE_7__.Card();
            card.name = line.cardName;
            card.apiId = line.cardApiId;
            const collectionItem = new _collection_item__WEBPACK_IMPORTED_MODULE_5__.CollectionItem(0, card, null);
            collectionItem.quantity = line.cardNumber;
            collectionItems.push(collectionItem);
        });
        this.generateTotalPrice(collectionItems); // TODO : YUGI-1 AMELIORER ROBUSTESSE
        this.findCardsInCollectionAndAssociatePrices(collectionItems);
    }
    generateTotalPrice(collectionItems) {
        const apiIds = collectionItems.map(value => value.card.apiId);
        this.yugiohService.getCardsPriceById(apiIds)
            .subscribe(value => {
            console.log(value);
            if (value?.data && value.data.length > 0) {
                const map = new Map();
                for (const data of value.data) {
                    map.set(String(data.id), data.card_prices[0].cardmarket_price);
                }
                this.totalPrice = 0;
                console.log(map);
                collectionItems.forEach(item => {
                    const price = Number(map.get(item.card.apiId));
                    if (price) {
                        this.totalPrice += price * item.quantity;
                        item.card.price = price;
                    }
                    else {
                        console.log(item.card.apiId);
                        item.card.price = 0;
                    }
                });
                console.log(this.totalPrice);
                // Keep only last 2 digits
                this.totalPrice = Number(this.totalPrice.toFixed(2));
                this.findCardsInCollectionAndAssociatePrices(collectionItems);
            }
        });
    }
    findCardsInCollectionAndAssociatePrices(collectionItems) {
        this.foundCollectionItemsPrice = 0;
        this.incompleteCollectionItemsPrice = 0;
        this.missingCollectionItemsPrice = 0;
        this.yugiohService.findCardsInCollection(collectionItems)
            .subscribe(value => {
            console.log(value);
            value[0].forEach(item => {
                item.price = collectionItems.filter(itemm => itemm.card.name === item.cardName)[0]?.card?.price;
                this.foundCollectionItemsPrice += item.price;
            });
            value[1].forEach(item => {
                item.price = collectionItems.filter(itemm => itemm.card.name === item.cardName)[0]?.card?.price;
                this.incompleteCollectionItemsPrice += item.price;
            });
            value[2].forEach(item => {
                item.price = collectionItems.filter(itemm => itemm.card.name === item.cardName)[0]?.card?.price;
                this.missingCollectionItemsPrice += item.price;
            });
            // Keep only last 2 digits
            this.foundCollectionItemsPrice = Number(this.foundCollectionItemsPrice.toFixed(2));
            this.incompleteCollectionItemsPrice = Number(this.incompleteCollectionItemsPrice.toFixed(2));
            this.missingCollectionItemsPrice = Number(this.missingCollectionItemsPrice.toFixed(2));
            this.foundCollectionItems = value[0];
            this.incompleteCollectionItems = value[1];
            this.missingCollectionItems = value[2];
        });
    }
    onPageChanged($event) {
        console.log('pageChanged');
        this.yugiohService.getCardsPaginated($event.pageIndex, $event.pageSize, this.sort, this.cardSearchValue2, this.filterDto)
            .subscribe(response => {
            this.globalCards = response.body;
            this.totalNumberOfCards = Number(response.headers.get('pageTotalElements'));
        });
    }
    open(content, ngbTooltip) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            // this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
        for (let i = 0; i < 11; i++) {
            setTimeout(() => ngbTooltip.close(), 100 * i);
        }
    }
    openSortDialog() {
        const dialogRef = this.dialog.open(_sort_dialog_sort_dialog_component__WEBPACK_IMPORTED_MODULE_12__.SortDialogComponent, {
            width: '300px',
            data: {
                sort: this.sort !== undefined ? this.sort : null,
                collectionView: false
            }
        });
        dialogRef.afterClosed().subscribe(value => {
            console.log(value);
            this.sort = value;
            this.refreshPaginator();
        });
    }
    filter() {
        this.filterDto.collectionView = false;
        const dialog = this.dialog.open(_filter_dialog_filter_dialog_component__WEBPACK_IMPORTED_MODULE_9__.FilterDialogComponent, {
            width: '500px',
            data: this.filterDto
        });
        dialog.afterClosed().subscribe(() => {
            console.log(this.filterDto);
            this.refreshPaginator();
        });
    }
    isFiltered() {
        return this.filterDto.attributes.length > 0
            || this.filterDto.levels.length > 0
            || this.filterDto.cardTypes.length > 0
            || this.filterDto.monsterRaces.length > 0
            || this.filterDto.spellRaces.length > 0
            || this.filterDto.trapRaces.length > 0
            || this.filterDto.archetype;
    }
    // Filter creators or deck
    toggle(filter, filterList) {
        const index = filterList.indexOf(filter);
        if (index === -1) { // Not present
            filterList.push(filter);
        }
        else { // Present
            filterList.splice(index, 1);
        }
    }
    getDecksToDisplay() {
        return this.activeDeckCreators.length === 0
            ? this.decks
            : this.decks.filter(deck => this.activeDeckCreators.includes(deck.createdBy));
    }
    getCollectionsToDisplay() {
        return this.activeCollectionCreators.length === 0
            ? this.collections
            : this.collections.filter(deck => this.activeCollectionCreators.includes(deck.createdBy));
    }
}
DeckListComponent.ɵfac = function DeckListComponent_Factory(t) { return new (t || DeckListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_yugioh_service__WEBPACK_IMPORTED_MODULE_13__.YugiohService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModal)); };
DeckListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({ type: DeckListComponent, selectors: [["app-deck-list"]], viewQuery: function DeckListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.matPaginator = _t.first);
    } }, hostBindings: function DeckListComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("keydown", function DeckListComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresolveDocument"]);
    } }, decls: 2, vars: 0, template: function DeckListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "deck-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    } }, styles: [".collection[_ngcontent-%COMP%] {\n  width: 80%;\n  max-width: 400px;\n  border: #bbb solid 2px;\n  border-radius: 8px;\n  padding: 8px;\n  margin: 4px;\n  cursor: pointer;\n  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;\n  position: relative;\n  overflow: hidden;\n  flex-wrap: wrap;\n  height: 180px;\n}\n\n.selected[_ngcontent-%COMP%] {\n  background-color: #959da9;\n}\n\n.card-group-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 100%;\n}\n\n.list-card-name[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  color: rgb(255, 255, 255);\n}\n\n.selected[_ngcontent-%COMP%] {\n  border: 1px #959da9 solid;\n  border-radius: 4px;\n}\n\n.list-card-content[_ngcontent-%COMP%] {\n  color: rgb(255, 255, 255);\n  font-size: 12px;\n}\n\n.list-card-mat-icon[_ngcontent-%COMP%] {\n  color: rgb(255, 255, 255);\n  font-size: 12px;\n  font-weight: bold;\n  background-color: rgb(55, 55, 55);\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n\n.list-card-mat-icon[_ngcontent-%COMP%]:hover {\n  background-color: rgb(58, 134, 255);\n}\n\n.category-cards[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n  margin-top: 0.25rem;\n  color: rgb(0, 0, 0);\n  font-size: 1rem;\n  font-weight: 800;\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  transition: all 0.1s ease 0s;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  width: 30%;\n  margin: 8px;\n}\n\n.card-container[_ngcontent-%COMP%]:hover {\n  border: 1px #424548 solid;\n}\n\n.card-container-inside[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  color: rgb(0, 0, 0);\n  font-size: 1rem;\n  font-weight: 500;\n  position: relative;\n  align-items: center;\n  display: flex;\n}\n\n.card-quantity[_ngcontent-%COMP%] {\n  background: rgb(255, 255, 255);\n  border-right: 1px solid rgb(255, 255, 255);\n  color: rgb(119, 119, 119);\n  font-size: 0.9rem;\n  font-weight: 400;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 25px;\n  align-items: center;\n  display: flex;\n}\n\n.card-name[_ngcontent-%COMP%] {\n  flex: 1 1 0%;\n  white-space: pre-line;\n  overflow: hidden;\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  color: rgb(0, 0, 0);\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n.collection-light[_ngcontent-%COMP%] {\n  width: 80%;\n  max-width: 400px;\n  border: #bbb solid 2px;\n  border-radius: 8px;\n  padding: 8px;\n  margin: 4px;\n  cursor: pointer;\n}\n\n.bg-image[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  right: -45px;\n  width: 321px;\n  height: 321px;\n}\n\n.bg-image-blur[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  filter: blur(50px);\n}\n\n.bAXgkK[_ngcontent-%COMP%] {\n  width: 100%;\n  position: sticky;\n  top: 0;\n  align-items: center;\n  display: flex;\n  padding: 0.5rem 1rem;\n  border: #bbb solid 2px;\n  border-radius: 8px;\n}\n\n.qmUrg[_ngcontent-%COMP%] {\n  background: rgb(255, 255, 255);\n  border-radius: 3px;\n  height: 38px;\n  width: 100%;\n  display: flex;\n}\n\n.bAXgkK[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0px;\n  height: 100%;\n  padding: 0.5rem;\n  width: 100%;\n  box-shadow: none !important;\n}\n\n.jNdboZ[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2stbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUVBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFFQSxpRUFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FBRkY7O0FBS0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLG1DQUFBO0FBRkY7O0FBS0E7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtFQUNBLGFBQUE7RUFFQSw4QkFBQTtFQUNBLDRCQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0VBQ0EsYUFBQTtBQUZGOztBQUtBO0VBQ0UsOEJBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLG1CQUFBO0VBQ0EsYUFBQTtBQUZGOztBQUtBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUZGOztBQUtBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUVBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFIRjs7QUFNQTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBSEY7O0FBTUE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FBSEYiLCJmaWxlIjoiZGVjay1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbGxlY3Rpb24ge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuXHJcbiAgYm9yZGVyOiAjYmJiIHNvbGlkIDJweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIG1hcmdpbjogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgdGV4dC1zaGFkb3c6IC0xcHggMCB3aGl0ZSwgMCAxcHggd2hpdGUsIDFweCAwIHdoaXRlLCAwIC0xcHggd2hpdGU7XHJcblxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBoZWlnaHQ6IDE4MHB4O1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NTlkYTk7XHJcbn1cclxuXHJcbi5jYXJkLWdyb3VwLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5saXN0LWNhcmQtbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIGJvcmRlcjogMXB4ICM5NTlkYTkgc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4ubGlzdC1jYXJkLWNvbnRlbnQge1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubGlzdC1jYXJkLW1hdC1pY29uIHtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTUsIDU1LCA1NSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi10b3A6IDFweDtcclxuICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbn1cclxuXHJcbi5saXN0LWNhcmQtbWF0LWljb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1OCwgMTM0LCAyNTUpO1xyXG59XHJcblxyXG4uY2F0ZWdvcnktY2FyZHMge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UgMHM7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgYm9yZGVyOiAxcHggIzQyNDU0OCBzb2xpZDtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyLWluc2lkZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY2FyZC1xdWFudGl0eSB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBjb2xvcjogcmdiKDExOSwgMTE5LCAxMTkpO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jYXJkLW5hbWUge1xyXG4gIGZsZXg6IDEgMSAwJTtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jYXJkLXRleHQge1xyXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5jb2xsZWN0aW9uLWxpZ2h0IHtcclxuICB3aWR0aDogODAlO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcblxyXG4gIGJvcmRlcjogI2JiYiBzb2xpZCAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBtYXJnaW46IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5iZy1pbWFnZSB7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOi0xMHB4O1xyXG4gIHJpZ2h0Oi00NXB4O1xyXG4gIHdpZHRoOiAzMjFweDtcclxuICBoZWlnaHQ6IDMyMXB4O1xyXG59XHJcblxyXG4uYmctaW1hZ2UtYmx1ciB7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDowO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIGZpbHRlcjogYmx1cig1MHB4KTtcclxufVxyXG5cclxuLmJBWGdrSyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGJvcmRlcjogI2JiYiBzb2xpZCAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4ucW1Vcmcge1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5iQVhna0sgaW5wdXQge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uak5kYm9aIHtcclxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 1659:
/*!*******************************************************!*\
  !*** ./src/app/yu-gi-oh/collection/deck.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeckComponent": () => (/* binding */ DeckComponent)
/* harmony export */ });
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection */ 3405);
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./position */ 8138);
/* harmony import */ var _collection_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection-item */ 245);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 2425);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var _dialog_import_collection_dialog_import_collection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialog-import-collection/dialog-import-collection.component */ 5557);
/* harmony import */ var _collection_import_pojo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collection-import-pojo */ 6212);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _full_image_dialog_full_image_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../full-image-dialog/full-image-dialog.component */ 5853);
/* harmony import */ var _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../sort-dialog/card-sort */ 6202);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../global */ 7266);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./image */ 9628);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! file-saver */ 5226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _filter_dialog_filter_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../filter-dialog/filter-dto */ 880);
/* harmony import */ var ydke__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ydke */ 8459);
/* harmony import */ var _send_card_to_other_collection_modal_send_card_to_other_collection_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../send-card-to-other-collection-modal/send-card-to-other-collection-modal.component */ 442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _yugioh_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../yugioh.service */ 5594);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng2-dragula */ 8370);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _tooltip_card_tooltip_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tooltip-card/tooltip-card.component */ 6014);
/* harmony import */ var _modal_card_detail_modal_card_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../modal-card-detail/modal-card-detail.component */ 7457);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../search/search.component */ 6392);
/* harmony import */ var _bar_collection_information_bar_collection_information_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../bar-collection-information/bar-collection-information.component */ 9364);
/* harmony import */ var _array_sort_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../array-sort-pipe */ 1109);
/* harmony import */ var _ban_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../ban.pipe */ 9041);









































const _c0 = ["inputElement"];
function DeckComponent_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const searchType_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("value", searchType_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", searchType_r15, " ");
} }
function DeckComponent_div_12_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} }
function DeckComponent_div_12_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"]("", card_r16.atk, " / ", card_r16.def, "");
} }
function DeckComponent_div_12_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("contextmenu", function DeckComponent_div_12_div_12_div_3_Template_div_contextmenu_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r28); const set_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit; const card_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r26.removeCollectionItem(card_r16, set_r23, ctx_r26.Position.MAIN_DECK)); })("click", function DeckComponent_div_12_div_12_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r28); const set_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit; const card_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r30.addCollectionItem(card_r16, set_r23, ctx_r30.Position.MAIN_DECK)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const set_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const card_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("", (card_r16 == null ? null : card_r16.mapMainDeckQuantity == null ? null : card_r16.mapMainDeckQuantity.get(set_r23)) ? card_r16 == null ? null : card_r16.mapMainDeckQuantity.get(set_r23) : "M", " ");
} }
function DeckComponent_div_12_div_12_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("contextmenu", function DeckComponent_div_12_div_12_div_4_Template_div_contextmenu_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r37); const set_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit; const card_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r35.removeCollectionItem(card_r16, set_r23, ctx_r35.Position.EXTRA_DECK)); })("click", function DeckComponent_div_12_div_12_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r37); const set_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit; const card_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r39.addCollectionItem(card_r16, set_r23, ctx_r39.Position.EXTRA_DECK)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const set_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const card_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", (card_r16 == null ? null : card_r16.mapExtraDeckQuantity == null ? null : card_r16.mapExtraDeckQuantity.get(set_r23)) ? card_r16 == null ? null : card_r16.mapExtraDeckQuantity.get(set_r23) : "E", " ");
} }
function DeckComponent_div_12_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 49)(1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, DeckComponent_div_12_div_12_div_3_Template, 2, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, DeckComponent_div_12_div_12_div_4_Template, 2, 1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("contextmenu", function DeckComponent_div_12_div_12_Template_div_contextmenu_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r46); const set_r23 = restoredCtx.$implicit; const card_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r44.removeCollectionItem(card_r16, set_r23, ctx_r44.Position.SIDE_DECK)); })("click", function DeckComponent_div_12_div_12_Template_div_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r46); const set_r23 = restoredCtx.$implicit; const card_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r47.addCollectionItem(card_r16, set_r23, ctx_r47.Position.SIDE_DECK)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const set_r23 = ctx.$implicit;
    const card_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](set_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r19.mainDeckMap.get(card_r16.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", card_r16.type !== "Spell Card" && card_r16.type !== "Trap Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("", (card_r16 == null ? null : card_r16.mapSideDeckQuantity == null ? null : card_r16.mapSideDeckQuantity.get(set_r23)) ? card_r16 == null ? null : card_r16.mapSideDeckQuantity.get(set_r23) : "S", " ");
} }
function DeckComponent_div_12_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "app-tooltip-card", 56);
} if (rf & 2) {
    const card_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("card", card_r16);
} }
function DeckComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 39)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "div", 42)(4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](8, DeckComponent_div_12_span_8_Template, 2, 0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](10, DeckComponent_div_12_div_10_Template, 2, 2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](12, DeckComponent_div_12_div_12_Template, 7, 4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](13, "sort");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](14, DeckComponent_div_12_ng_template_14_Template, 1, 1, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r16 = ctx.$implicit;
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](15);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngbTooltip", _r20)("container", "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpropertyInterpolate"]("src", ctx_r2.backEndCardUrl + card_r16.apiId + "/image", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](card_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("", card_r16.attribute, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", card_r16.type !== "Spell Card" && card_r16.type !== "Trap Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", card_r16.race, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", card_r16.type !== "Spell Card" && card_r16.type !== "Trap Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](13, 9, card_r16.setCodes));
} }
function DeckComponent_div_30_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" - ", item_r51.set.code, "");
} }
function DeckComponent_div_30_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "app-modal-card-detail", 56);
} if (rf & 2) {
    const item_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("card", item_r51.card);
} }
function DeckComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_30_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r60); const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](23); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r59.open(_r54)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_30_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r60); const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](_r52.close()); })("contextmenu", function DeckComponent_div_30_Template_div_contextmenu_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r60); const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1); _r52.open(); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](3, "ban");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "strong", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "div", 61)(7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](8, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](11, DeckComponent_div_30_span_11_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](12, "div")(13, "mat-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_30_Template_mat_icon_click_13_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r60); const item_r51 = restoredCtx.$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); ctx_r63.addCollectionItemSimple(item_r51); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"]($event.stopPropagation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](14, "add_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](15, "mat-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_30_Template_mat_icon_click_15_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r60); const item_r51 = restoredCtx.$implicit; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); ctx_r64.removeCollectionItemSimple(item_r51); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"]($event.stopPropagation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](16, " remove_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](17, "div", 64)(18, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_30_Template_button_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r60); const item_r51 = restoredCtx.$implicit; const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r65.setCardAsCollectionImage(item_r51.card.apiId)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](19, "Choisir en tant qu'image de deck ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](20, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_30_Template_button_click_20_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r60); const item_r51 = restoredCtx.$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r66.openSendToAnotherCollection($event, item_r51)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](21, "Envoyer vers un autre deck / collection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](22, DeckComponent_div_30_ng_template_22_Template, 1, 1, "ng-template", null, 66, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r51 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("className", item_r51.card.type + "|" + " card-container")("container", "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵstyleProp"]("background-color", ctx_r3.mainDeckMap.get(item_r51.card.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](3, 10, item_r51.card == null ? null : item_r51.card.banListInfo == null ? null : item_r51.card.banListInfo.banTcg))("matBadgeHidden", (item_r51.card == null ? null : item_r51.card.banListInfo == null ? null : item_r51.card.banListInfo.banTcg) === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("", item_r51.quantity, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("src", ctx_r3.backEndCardUrl + (item_r51 == null ? null : item_r51.card == null ? null : item_r51.card.apiId) + "/image-cropped", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("", item_r51.card.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r51.set == null ? null : item_r51.set.code);
} }
function DeckComponent_div_37_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" - ", item_r67.set.code, "");
} }
function DeckComponent_div_37_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "app-modal-card-detail", 56);
} if (rf & 2) {
    const item_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("card", item_r67.card);
} }
function DeckComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_37_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r76); const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](23); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r75.open(_r70)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_37_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r76); const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](_r68.close()); })("contextmenu", function DeckComponent_div_37_Template_div_contextmenu_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r76); const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1); _r68.open(); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](3, "ban");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "strong", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "div", 61)(7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](8, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](11, DeckComponent_div_37_span_11_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](12, "div")(13, "mat-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_37_Template_mat_icon_click_13_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r76); const item_r67 = restoredCtx.$implicit; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); ctx_r79.addCollectionItemSimple(item_r67); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"]($event.stopPropagation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](14, "add_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](15, "mat-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_37_Template_mat_icon_click_15_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r76); const item_r67 = restoredCtx.$implicit; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); ctx_r80.removeCollectionItemSimple(item_r67); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"]($event.stopPropagation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](16, " remove_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](17, "div", 64)(18, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_37_Template_button_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r76); const item_r67 = restoredCtx.$implicit; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r81.setCardAsCollectionImage(item_r67.card.apiId)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](19, "Choisir en tant qu'image de deck ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](20, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_37_Template_button_click_20_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r76); const item_r67 = restoredCtx.$implicit; const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r82.openSendToAnotherCollection($event, item_r67)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](21, "Envoyer vers un autre deck / collection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](22, DeckComponent_div_37_ng_template_22_Template, 1, 1, "ng-template", null, 66, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r67 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("className", item_r67.card.type + "|" + " card-container")("container", "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵstyleProp"]("background-color", ctx_r4.mainDeckMap.get(item_r67.card.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](3, 10, item_r67.card == null ? null : item_r67.card.banListInfo == null ? null : item_r67.card.banListInfo.banTcg))("matBadgeHidden", (item_r67.card == null ? null : item_r67.card.banListInfo == null ? null : item_r67.card.banListInfo.banTcg) === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("", item_r67.quantity, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("src", ctx_r4.backEndCardUrl + (item_r67 == null ? null : item_r67.card == null ? null : item_r67.card.apiId) + "/image-cropped", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("", item_r67.card.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r67.set == null ? null : item_r67.set.code);
} }
function DeckComponent_div_44_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" - ", item_r83.set.code, "");
} }
function DeckComponent_div_44_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "app-modal-card-detail", 56);
} if (rf & 2) {
    const item_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("card", item_r83.card);
} }
function DeckComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_44_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r92); const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](23); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r91.open(_r86)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_44_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r92); const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](_r84.close()); })("contextmenu", function DeckComponent_div_44_Template_div_contextmenu_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r92); const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1); _r84.open(); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](3, "ban");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "strong", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "div", 61)(7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](8, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](11, DeckComponent_div_44_span_11_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](12, "div")(13, "mat-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_44_Template_mat_icon_click_13_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r92); const item_r83 = restoredCtx.$implicit; const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); ctx_r95.addCollectionItemSimple(item_r83); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"]($event.stopPropagation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](14, "add_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](15, "mat-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_44_Template_mat_icon_click_15_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r92); const item_r83 = restoredCtx.$implicit; const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); ctx_r96.removeCollectionItemSimple(item_r83); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"]($event.stopPropagation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](16, " remove_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](17, "div", 64)(18, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_44_Template_button_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r92); const item_r83 = restoredCtx.$implicit; const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r97.setCardAsCollectionImage(item_r83.card.apiId)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](19, "Choisir en tant qu'image de deck ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](20, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_44_Template_button_click_20_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r92); const item_r83 = restoredCtx.$implicit; const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r98.openSendToAnotherCollection($event, item_r83)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](21, "Envoyer vers un autre deck / collection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](22, DeckComponent_div_44_ng_template_22_Template, 1, 1, "ng-template", null, 66, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r83 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("className", item_r83.card.type + "|" + " card-container")("container", "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵstyleProp"]("background-color", ctx_r5.mainDeckMap.get(item_r83.card.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](3, 10, item_r83.card == null ? null : item_r83.card.banListInfo == null ? null : item_r83.card.banListInfo.banTcg))("matBadgeHidden", (item_r83.card == null ? null : item_r83.card.banListInfo == null ? null : item_r83.card.banListInfo.banTcg) === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("", item_r83.quantity, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("src", ctx_r5.backEndCardUrl + (item_r83 == null ? null : item_r83.card == null ? null : item_r83.card.apiId) + "/image-cropped", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("", item_r83.card.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r83.set == null ? null : item_r83.set.code);
} }
function DeckComponent_div_53_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" - ", item_r99.set.code, "");
} }
function DeckComponent_div_53_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "app-modal-card-detail", 56);
} if (rf & 2) {
    const item_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("card", item_r99.card);
} }
function DeckComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_53_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r108); const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](23); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r107.open(_r102)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_53_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r108); const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](_r100.close()); })("contextmenu", function DeckComponent_div_53_Template_div_contextmenu_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r108); const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1); _r100.open(); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](3, "ban");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "strong", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "div", 61)(7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](8, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](11, DeckComponent_div_53_span_11_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](12, "div")(13, "mat-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_53_Template_mat_icon_click_13_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r108); const item_r99 = restoredCtx.$implicit; const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); ctx_r111.addCollectionItemSimple(item_r99); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"]($event.stopPropagation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](14, "add_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](15, "mat-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_53_Template_mat_icon_click_15_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r108); const item_r99 = restoredCtx.$implicit; const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); ctx_r112.removeCollectionItemSimple(item_r99); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"]($event.stopPropagation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](16, " remove_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](17, "div", 64)(18, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_53_Template_button_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r108); const item_r99 = restoredCtx.$implicit; const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r113.setCardAsCollectionImage(item_r99.card.apiId)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](19, "Choisir en tant qu'image de deck ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](20, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_53_Template_button_click_20_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r108); const item_r99 = restoredCtx.$implicit; const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r114.openSendToAnotherCollection($event, item_r99)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](21, "Envoyer vers un autre deck / collection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](22, DeckComponent_div_53_ng_template_22_Template, 1, 1, "ng-template", null, 66, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r99 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("className", item_r99.card.type + "|" + " card-container")("container", "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵstyleProp"]("background-color", ctx_r6.extraDeckMap.get(item_r99.card.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](3, 10, item_r99.card == null ? null : item_r99.card.banListInfo == null ? null : item_r99.card.banListInfo.banTcg))("matBadgeHidden", (item_r99.card == null ? null : item_r99.card.banListInfo == null ? null : item_r99.card.banListInfo.banTcg) === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("", item_r99.quantity, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("src", ctx_r6.backEndCardUrl + (item_r99 == null ? null : item_r99.card == null ? null : item_r99.card.apiId) + "/image-cropped", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("", item_r99.card.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r99.set == null ? null : item_r99.set.code);
} }
function DeckComponent_div_60_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" - ", item_r115.set.code, "");
} }
function DeckComponent_div_60_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "app-modal-card-detail", 56);
} if (rf & 2) {
    const item_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("card", item_r115.card);
} }
function DeckComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_60_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r124); const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](23); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r123.open(_r118)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_60_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r124); const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](_r116.close()); })("contextmenu", function DeckComponent_div_60_Template_div_contextmenu_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r124); const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1); _r116.open(); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](3, "ban");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "strong", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "div", 61)(7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](8, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](11, DeckComponent_div_60_span_11_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](12, "div")(13, "mat-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_60_Template_mat_icon_click_13_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r124); const item_r115 = restoredCtx.$implicit; const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); ctx_r127.addCollectionItemSimple(item_r115); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"]($event.stopPropagation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](14, "add_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](15, "mat-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_60_Template_mat_icon_click_15_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r124); const item_r115 = restoredCtx.$implicit; const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); ctx_r128.removeCollectionItemSimple(item_r115); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"]($event.stopPropagation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](16, " remove_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](17, "div", 64)(18, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_60_Template_button_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r124); const item_r115 = restoredCtx.$implicit; const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r129.setCardAsCollectionImage(item_r115.card.apiId)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](19, "Choisir en tant qu'image de deck ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](20, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_60_Template_button_click_20_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r124); const item_r115 = restoredCtx.$implicit; const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r130.openSendToAnotherCollection($event, item_r115)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](21, "Envoyer vers un autre deck / collection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](22, DeckComponent_div_60_ng_template_22_Template, 1, 1, "ng-template", null, 66, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r115 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("className", item_r115.card.type + "|" + " card-container")("container", "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵstyleProp"]("background-color", ctx_r7.sideDeckMap.get(item_r115.card.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](3, 10, item_r115.card == null ? null : item_r115.card.banListInfo == null ? null : item_r115.card.banListInfo.banTcg))("matBadgeHidden", (item_r115.card == null ? null : item_r115.card.banListInfo == null ? null : item_r115.card.banListInfo.banTcg) === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("", item_r115.quantity, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("src", ctx_r7.backEndCardUrl + (item_r115 == null ? null : item_r115.card == null ? null : item_r115.card.apiId) + "/image-cropped", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("", item_r115.card.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r115.set == null ? null : item_r115.set.code);
} }
function DeckComponent_div_72_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "app-modal-card-detail", 56);
} if (rf & 2) {
    const item_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("card", item_r131.card);
} }
function DeckComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    const _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_72_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r138); const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](15); const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r137.open(_r133)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_72_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r138); const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](_r132.close()); })("contextmenu", function DeckComponent_div_72_Template_div_contextmenu_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r138); const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1); _r132.open(); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](3, "ban");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "strong", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "div", 61)(7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](8, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](11, "div", 64)(12, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_72_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r138); const item_r131 = restoredCtx.$implicit; const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r141.setCardAsCollectionImage(item_r131.card.apiId)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](13, "Choisir en tant qu'image de deck ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](14, DeckComponent_div_72_ng_template_14_Template, 1, 1, "ng-template", null, 66, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r131 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("className", item_r131.card.type + "|" + " card-container")("container", "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵstyleProp"]("background-color", ctx_r8.mainDeckMap.get(item_r131.card.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](3, 9, item_r131.card == null ? null : item_r131.card.banListInfo == null ? null : item_r131.card.banListInfo.banTcg))("matBadgeHidden", (item_r131.card == null ? null : item_r131.card.banListInfo == null ? null : item_r131.card.banListInfo.banTcg) === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("", item_r131.quantity, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("src", ctx_r8.backEndCardUrl + (item_r131 == null ? null : item_r131.card == null ? null : item_r131.card.apiId) + "/image-cropped", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](item_r131.card.name);
} }
function DeckComponent_div_79_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "app-modal-card-detail", 56);
} if (rf & 2) {
    const item_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("card", item_r142.card);
} }
function DeckComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    const _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_79_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r149); const _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](15); const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r148.open(_r144)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_79_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r149); const _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](_r143.close()); })("contextmenu", function DeckComponent_div_79_Template_div_contextmenu_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r149); const _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1); _r143.open(); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](3, "ban");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "strong", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "div", 61)(7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](8, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](11, "div", 64)(12, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_79_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r149); const item_r142 = restoredCtx.$implicit; const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r152.setCardAsCollectionImage(item_r142.card.apiId)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](13, "Choisir en tant qu'image de deck ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](14, DeckComponent_div_79_ng_template_14_Template, 1, 1, "ng-template", null, 66, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r142 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("className", item_r142.card.type + "|" + " card-container")("container", "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵstyleProp"]("background-color", ctx_r9.mainDeckMap.get(item_r142.card.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](3, 9, item_r142.card == null ? null : item_r142.card.banListInfo == null ? null : item_r142.card.banListInfo.banTcg))("matBadgeHidden", (item_r142.card == null ? null : item_r142.card.banListInfo == null ? null : item_r142.card.banListInfo.banTcg) === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("", item_r142.quantity, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("src", ctx_r9.backEndCardUrl + (item_r142 == null ? null : item_r142.card == null ? null : item_r142.card.apiId) + "/image-cropped", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](item_r142.card.name);
} }
function DeckComponent_div_86_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "app-modal-card-detail", 56);
} if (rf & 2) {
    const item_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("card", item_r153.card);
} }
function DeckComponent_div_86_Template(rf, ctx) { if (rf & 1) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_86_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r160); const _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](15); const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r159.open(_r155)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_86_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r160); const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](_r154.close()); })("contextmenu", function DeckComponent_div_86_Template_div_contextmenu_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r160); const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1); _r154.open(); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](3, "ban");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "strong", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "div", 61)(7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](8, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](11, "div", 64)(12, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_86_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r160); const item_r153 = restoredCtx.$implicit; const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r163.setCardAsCollectionImage(item_r153.card.apiId)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](13, "Choisir en tant qu'image de deck ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](14, DeckComponent_div_86_ng_template_14_Template, 1, 1, "ng-template", null, 66, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r153 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("className", item_r153.card.type + "|" + " card-container")("container", "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵstyleProp"]("background-color", ctx_r10.mainDeckMap.get(item_r153.card.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](3, 9, item_r153.card == null ? null : item_r153.card.banListInfo == null ? null : item_r153.card.banListInfo.banTcg))("matBadgeHidden", (item_r153.card == null ? null : item_r153.card.banListInfo == null ? null : item_r153.card.banListInfo.banTcg) === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("", item_r153.quantity, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("src", ctx_r10.backEndCardUrl + (item_r153 == null ? null : item_r153.card == null ? null : item_r153.card.apiId) + "/image-cropped", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](item_r153.card.name);
} }
function DeckComponent_div_95_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "app-modal-card-detail", 56);
} if (rf & 2) {
    const item_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("card", item_r164.card);
} }
function DeckComponent_div_95_Template(rf, ctx) { if (rf & 1) {
    const _r171 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_95_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r171); const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](15); const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r170.open(_r166)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_95_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r171); const _r165 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](_r165.close()); })("contextmenu", function DeckComponent_div_95_Template_div_contextmenu_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r171); const _r165 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1); _r165.open(); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](3, "ban");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "strong", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "div", 61)(7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](8, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](11, "div", 64)(12, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_95_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r171); const item_r164 = restoredCtx.$implicit; const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r174.setCardAsCollectionImage(item_r164.card.apiId)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](13, "Choisir en tant qu'image de deck ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](14, DeckComponent_div_95_ng_template_14_Template, 1, 1, "ng-template", null, 66, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r164 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("className", item_r164.card.type + "|" + " card-container")("container", "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵstyleProp"]("background-color", ctx_r11.extraDeckMap.get(item_r164.card.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](3, 9, item_r164.card == null ? null : item_r164.card.banListInfo == null ? null : item_r164.card.banListInfo.banTcg))("matBadgeHidden", (item_r164.card == null ? null : item_r164.card.banListInfo == null ? null : item_r164.card.banListInfo.banTcg) === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("", item_r164.quantity, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("src", ctx_r11.backEndCardUrl + (item_r164 == null ? null : item_r164.card == null ? null : item_r164.card.apiId) + "/image-cropped", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](item_r164.card.name);
} }
function DeckComponent_div_102_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "app-modal-card-detail", 56);
} if (rf & 2) {
    const item_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("card", item_r175.card);
} }
function DeckComponent_div_102_Template(rf, ctx) { if (rf & 1) {
    const _r182 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_102_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r182); const _r177 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](15); const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r181.open(_r177)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_102_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r182); const _r176 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](_r176.close()); })("contextmenu", function DeckComponent_div_102_Template_div_contextmenu_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r182); const _r176 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1); _r176.open(); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](3, "ban");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "strong", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "div", 61)(7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](8, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](11, "div", 64)(12, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_102_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r182); const item_r175 = restoredCtx.$implicit; const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r185.setCardAsCollectionImage(item_r175.card.apiId)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](13, "Choisir en tant qu'image de deck ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](14, DeckComponent_div_102_ng_template_14_Template, 1, 1, "ng-template", null, 66, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r175 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("className", item_r175.card.type + "|" + " card-container")("container", "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵstyleProp"]("background-color", ctx_r12.sideDeckMap.get(item_r175.card.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](3, 9, item_r175.card == null ? null : item_r175.card.banListInfo == null ? null : item_r175.card.banListInfo.banTcg))("matBadgeHidden", (item_r175.card == null ? null : item_r175.card.banListInfo == null ? null : item_r175.card.banListInfo.banTcg) === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("", item_r175.quantity, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("src", ctx_r12.backEndCardUrl + (item_r175 == null ? null : item_r175.card == null ? null : item_r175.card.apiId) + "/image-cropped", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](item_r175.card.name);
} }
function DeckComponent_div_104_div_1_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "app-modal-card-detail", 56);
} if (rf & 2) {
    const entry_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("card", entry_r187[0]);
} }
function DeckComponent_div_104_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r193 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_104_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r193); const _r188 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](11); const ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r192.open(_r188)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](2, "ban");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "div", 61)(4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](5, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](10, DeckComponent_div_104_div_1_ng_template_10_Template, 1, 1, "ng-template", null, 66, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r187 = ctx.$implicit;
    const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵstyleProp"]("background-color", ctx_r186.mainDeckMap.get(entry_r187[0].type));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](2, 7, entry_r187[0] == null ? null : entry_r187[0].banListInfo == null ? null : entry_r187[0].banListInfo.banTcg))("matBadgeHidden", (entry_r187[0] == null ? null : entry_r187[0].banListInfo == null ? null : entry_r187[0].banListInfo.banTcg) === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("src", ctx_r186.backEndCardUrl + entry_r187[0].apiId + "/image-cropped", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("", entry_r187[0].name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("\u00A0- Prix ", entry_r187[1], "\u20AC");
} }
function DeckComponent_div_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, DeckComponent_div_104_div_1_Template, 12, 9, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r13.cardPriceEntries);
} }
const _c1 = function () { return { "color": "black" }; };
function DeckComponent_div_106_div_7_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r201 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 79)(1, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_106_div_7_div_1_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r201); const image_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit; const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r199.openFullWidthImageDialog(image_r197)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "mat-icon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_106_div_7_div_1_div_1_Template_mat_icon_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r201); const image_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit; const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r202.deleteImage(image_r197)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](3, "delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const image_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpropertyInterpolate"]("src", ctx_r198.backEndCollectionsUrl + ctx_r198.collection.id + "/images/" + image_r197.id, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction0"](2, _c1));
} }
function DeckComponent_div_106_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, DeckComponent_div_106_div_7_div_1_div_1_Template, 4, 3, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r197 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", image_r197.id);
} }
function DeckComponent_div_106_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, DeckComponent_div_106_div_7_div_1_Template, 2, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r195.collection.images);
} }
function DeckComponent_div_106_Template(rf, ctx) { if (rf & 1) {
    const _r206 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 71)(1, "textarea", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("ngModelChange", function DeckComponent_div_106_Template_textarea_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r206); const ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r205.collection.comment = $event); })("change", function DeckComponent_div_106_Template_textarea_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r206); const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r207.textAreaChanged()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_div_106_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r206); const _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](6); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](_r194.click()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4, "Ajouter Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "input", 74, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("change", function DeckComponent_div_106_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r206); const ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r209.uploadFile($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](7, DeckComponent_div_106_div_7_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngModel", ctx_r14.collection.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r14.collection == null ? null : ctx_r14.collection.images);
} }
class DeckComponent {
    constructor(yugiohService, snackBar, modalService, route, dialog, config, dragulaService) {
        this.yugiohService = yugiohService;
        this.snackBar = snackBar;
        this.modalService = modalService;
        this.route = route;
        this.dialog = dialog;
        this.dragulaService = dragulaService;
        this.backEndCardUrl = _global__WEBPACK_IMPORTED_MODULE_7__.backendUrl + '/cards/';
        this.backEndCollectionsUrl = _global__WEBPACK_IMPORTED_MODULE_7__.backendUrl + '/collections/';
        this.canSave = false;
        this.cards = [];
        this.Position = _position__WEBPACK_IMPORTED_MODULE_1__.Position;
        this.sort = _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_6__.CardSort.alphabeticalAsc;
        this.mainDeckMonstersItems = [];
        this.mainDeckSpellsItems = [];
        this.mainDeckTrapsItems = [];
        this.extraDeckItems = [];
        this.sideDeckItems = [];
        this.mainDeckMonstersCompetitiveViewItems = [];
        this.mainDeckSpellsCompetitiveViewItems = [];
        this.mainDeckTrapsCompetitiveViewItems = [];
        this.extraDeckCompetitiveViewItems = [];
        this.sideDeckCompetitiveViewItems = [];
        this.searchSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_21__.Subject();
        this.mainDeckMap = new Map([
            ['Effect Monster', 'rgba(139, 98, 32, 0.3)'],
            ['Flip Effect Monster', 'rgba(139, 98, 32, 0.3)'],
            ['Flip Tuner Effect Monster', 'rgba(139, 98, 32, 0.3)'],
            ['Gemini Monster', 'rgba(139, 98, 32, 0.3)'],
            ['Normal Monster', 'rgba(237, 227, 213, 1)'],
            ['Normal Tuner Monster', 'rgba(237, 227, 213, 1)'],
            ['Pendulum Effect Monster', 'rgba(115, 131, 112, 1)'],
            ['Pendulum Flip Effect Monster', 'rgba(115, 131, 112 , 1)'],
            ['Pendulum Normal Monster', 'rgba(115, 131, 112 , 1)'],
            ['Pendulum Tuner Effect Monster', 'rgba(115, 131, 112 , 1)'],
            ['Ritual Effect Monster', 'rgba(200, 210, 234, 1)'],
            ['Ritual Monster', 'rgba(200, 210, 234 , 1)'],
            ['Skill Card', 'rgb(233, 219, 223)'],
            ['Spell Card', 'rgb(220, 234, 236)'],
            ['Spirit Monster', 'rgba(139, 98, 32, 0.3)'],
            ['Toon Monster', 'rgba(139, 98, 32, 0.3)'],
            ['Trap Card', 'rgb(233, 219, 223)'],
            ['Tuner Monster', 'rgba(139, 98, 32, 0.3)'],
            ['Union Effect Monster', 'rgba(139, 98, 32, 0.3)'],
        ]);
        this.extraDeckMap = new Map([
            ['Fusion Monster', 'rgb(216 206 231)'],
            ['Link Monster', 'rgb(57 93 168)'],
            ['Pendulum Effect Fusion Monster', 'rgb(216 206 231)'],
            ['Synchro Monster', 'rgb(238 238 238)'],
            ['Synchro Pendulum Effect Monster', 'rgb(238 238 238)'],
            ['Synchro Tuner Monster', 'rgb(238 238 238)'],
            ['XYZ Monster', 'rgb(193 193 193)'],
            ['XYZ Pendulum Effect Monster', 'rgb(193 193 193)'],
        ]);
        this.sideDeckMap = new Map([
            ['Effect Monster', 'rgba(139, 98, 32, 0.3)'],
            ['Flip Effect Monster', 'rgba(139, 98, 32, 0.3)'],
            ['Flip Tuner Effect Monster', 'rgba(139, 98, 32, 0.3)'],
            ['Gemini Monster', 'rgba(139, 98, 32, 0.3)'],
            ['Normal Monster', 'rgba(237, 227, 213, 1)'],
            ['Normal Tuner Monster', 'rgba(237, 227, 213, 1)'],
            ['Pendulum Effect Monster', 'rgba(115, 131, 112, 1)'],
            ['Pendulum Flip Effect Monster', 'rgba(115, 131, 112 , 1)'],
            ['Pendulum Normal Monster', 'rgba(115, 131, 112 , 1)'],
            ['Pendulum Tuner Effect Monster', 'rgba(115, 131, 112 , 1)'],
            ['Ritual Effect Monster', 'rgba(200, 210, 234, 1)'],
            ['Ritual Monster', 'rgba(200, 210, 234 , 1)'],
            ['Skill Card', 'rgb(233, 219, 223)'],
            ['Spell Card', 'rgb(220, 234, 236)'],
            ['Spirit Monster', 'rgba(139, 98, 32, 0.3)'],
            ['Toon Monster', 'rgba(139, 98, 32, 0.3)'],
            ['Trap Card', 'rgb(233, 219, 223)'],
            ['Tuner Monster', 'rgba(139, 98, 32, 0.3)'],
            ['Union Effect Monster', 'rgba(139, 98, 32, 0.3)'],
            ['Fusion Monster', 'rgb(216 206 231)'],
            ['Link Monster', 'rgb(57 93 168)'],
            ['Pendulum Effect Fusion Monster', 'rgb(216 206 231)'],
            ['Synchro Monster', 'rgb(238 238 238)'],
            ['Synchro Pendulum Effect Monster', 'rgb(238 238 238)'],
            ['Synchro Tuner Monster', 'rgb(238 238 238)'],
            ['XYZ Monster', 'rgb(193 193 193)'],
            ['XYZ Pendulum Effect Monster', 'rgb(193 193 193)'],
        ]);
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_22__.Subscription();
        this.dragulaName = 'CARDS';
        this.filterDto = new _filter_dialog_filter_dto__WEBPACK_IMPORTED_MODULE_10__.FilterDto();
        this.searchTypes = ['nom', 'set', 'id'];
        this.searchBy = 'nom';
        this.cardPriceMap = new Map();
        config.openDelay = 400;
        this.subs.add(dragulaService.dropModel(this.dragulaName)
            .subscribe(({ el, target, source, sourceModel, targetModel, item }) => {
            const collectionItem = item;
            collectionItem.position =
                target.id === 'id-main-monsters' || target.id === 'id-main-spells' || target.id === 'id-main-traps'
                    ? _position__WEBPACK_IMPORTED_MODULE_1__.Position.MAIN_DECK : target.id === 'id-side' ? _position__WEBPACK_IMPORTED_MODULE_1__.Position.SIDE_DECK : _position__WEBPACK_IMPORTED_MODULE_1__.Position.EXTRA_DECK;
            // Fuse collectionItem with same apiId but not in the same object. Happens when 1 raigeki is in spell zone
            // and 1 raigeki is side deck, when one raigeki is moved to the other zone then we have 2 CollectionItems with 1 raigeki,
            // instead, we want 1 CollectionItem we 2 raigeki
            const duplicateApiId = this.collection.items.filter(value => value.card.apiId === collectionItem.card.apiId
                && collectionItem.position === value.position
                && value.set.code === collectionItem.set.code
                && value.card.language === collectionItem.card.language);
            console.log(duplicateApiId);
            if (duplicateApiId.length === 2) {
                duplicateApiId[0].quantity += duplicateApiId[1].quantity;
                this.collection.items.splice(this.collection.items.indexOf(duplicateApiId[1]), 1);
            }
            console.log('UPDATE LOCALE COLLECTION');
            setTimeout(() => {
                this.localUpdateCollection(true);
            }, 25); // needed or else the reordering of the items in the UI is not done properly
        }));
        dragulaService.createGroup(this.dragulaName, {
            accepts: (el, target, source, sibling) => {
                // To avoid dragging from right to left container
                const cardType = el.classList.value.split('|')[0];
                console.log(cardType);
                switch (source.id) {
                    case 'id-main-monsters':
                        return target.id === 'id-main-monsters' || target.id === 'id-side';
                    case 'id-main-spells':
                        return target.id === 'id-main-spells' || target.id === 'id-side';
                    case 'id-main-traps':
                        return target.id === 'id-main-traps' || target.id === 'id-side';
                    case 'id-extra':
                        return target.id === 'id-extra' || target.id === 'id-side';
                    case 'id-side': {
                        if (target.id === 'id-main-monsters') {
                            console.log(this.mainDeckMap.get(cardType) && cardType.toLowerCase().includes('monster') !== undefined);
                            return this.mainDeckMap.get(cardType) && cardType.toLowerCase().includes('monster') !== undefined;
                        }
                        else if (target.id === 'id-main-spells') {
                            console.log(this.mainDeckMap.get(cardType) && cardType.toLowerCase().includes('spell') !== undefined);
                            return this.mainDeckMap.get(cardType) && cardType.toLowerCase().includes('spell') !== undefined;
                        }
                        else if (target.id === 'id-main-traps') {
                            console.log(this.mainDeckMap.get(cardType) && cardType.toLowerCase().includes('trap') !== undefined);
                            return this.mainDeckMap.get(cardType) && cardType.toLowerCase().includes('trap') !== undefined;
                        }
                        else if (target.id === 'id-extra') {
                            console.log(this.extraDeckMap.get(cardType));
                            return this.extraDeckMap.get(cardType) !== undefined;
                        }
                        else {
                            return true;
                        }
                    }
                    default:
                        return true;
                }
            }
        });
    }
    ngOnInit() {
        const localFilterDto = JSON.parse(localStorage.getItem('filterDto'));
        this.filterDto = localFilterDto ? localFilterDto : new _filter_dialog_filter_dto__WEBPACK_IMPORTED_MODULE_10__.FilterDto();
        this.yugiohService.getCardsbyName()
            .subscribe(cards => {
            this.cards = cards;
            if (this.collection) {
                this.refreshCollectionView();
            }
        });
        this.deckSearchValue = this.route.snapshot.queryParamMap.get('searchValue');
        this.yugiohService.getCollectionById(this.route.snapshot.paramMap.get('id'))
            .subscribe(collection => {
            this.collection = collection;
            this.generateTotalPrice();
            this.refreshCollectionView();
        });
        this.yugiohService.getSets().subscribe(sets => this.sets = sets, () => this.openSnackBar('Erreur lors de la récupération des sets', 'OK'));
        this.searchSub$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.debounceTime)(400), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.distinctUntilChanged)()).subscribe((filterValue) => {
            this.searchCardWithString(filterValue);
        });
    }
    generateTotalPrice() {
        if (!this.totalPrice) {
            const apiIds = this.collection.items.map(value => value.card.apiId);
            this.yugiohService.getCardsPriceById(apiIds)
                .subscribe(value => {
                console.log(value);
                if (value?.data && value.data.length > 0) {
                    const map = new Map();
                    for (const data of value.data) {
                        const foundCard = this.collection.items.map(item => item.card)
                            .find(c => c.apiId === String(data.id));
                        if (!foundCard) {
                            console.log(data); // TODO : mieux afficher cette erreur (en faire une liste ou que sais-je
                        }
                        else {
                            this.cardPriceMap.set(foundCard, data.card_prices[0].cardmarket_price);
                        }
                    }
                    // sort
                    this.cardPriceEntries = Array.from(new Map([...this.cardPriceMap.entries()].sort((a, b) => b[1] - a[1])).entries());
                    console.log(map);
                    this.totalPrice = 0;
                    this.collection.items.forEach(item => {
                        const price = Number(map.get(item.card.apiId));
                        if (price) {
                            this.totalPrice += price * item.quantity;
                            item.card.price = price;
                        }
                        else {
                            console.log(item.card.apiId);
                            item.card.price = 0;
                        }
                    });
                    console.log(this.totalPrice);
                    // Keep only last 2 digits
                    this.totalPrice = Number(this.totalPrice.toFixed(2));
                }
            });
        }
    }
    searchCardWithString(search) {
        let cardsObservable;
        if (this.searchBy === 'id') {
            cardsObservable = this.yugiohService.getCardsByApiId(search.trim().toLowerCase());
        }
        else if (this.searchBy === 'nom') {
            cardsObservable = this.yugiohService.getCardsbyName(search.trim().toLowerCase());
        }
        else if (this.searchBy === 'set') {
            cardsObservable = this.yugiohService.getCardsBySet(search.trim().toLowerCase());
        }
        cardsObservable
            .subscribe(cards => {
            this.cards = cards;
            if (this.collection) {
                this.refreshCollectionView();
            }
        });
    }
    ngAfterViewInit() {
    }
    ngOnDestroy() {
        // destroy all the subscriptions at once
        this.subs.unsubscribe();
        this.dragulaService.destroy(this.dragulaName);
    }
    handleKeyboardEvent(event) {
        if (event.code === 'Escape') {
            setTimeout(() => {
                this.searchInput.nativeElement.blur();
                this.searchInput.nativeElement.focus();
            }, 15);
        }
    }
    applyCardFilter($event) {
        console.log($event);
        let searchValue;
        if ($event) {
            if ($event.code === 'Escape') {
                searchValue = '';
            }
            else {
                console.log($event.target.value);
                searchValue = $event.target.value;
            }
        }
        else {
            searchValue = '';
        }
        this.searchCardValue = searchValue;
        this.searchSub$.next(searchValue);
    }
    addCollectionItemSimple(item) {
        if (item.quantity < 3) { // TODO : handle quantity
            item.quantity += 1;
            this.localUpdateCollection(true);
        }
    }
    removeCollectionItemSimple(item) {
        console.log(this.collection.items.length);
        if (item.quantity > 1) {
            item.quantity -= 1;
        }
        else {
            this.collection.items.splice(this.collection.items.indexOf(item), 1);
        }
        this.localUpdateCollection(true);
    }
    addCollectionItem(card, setCode, position) {
        let isUpdate = false;
        const set = this.sets.filter(cardSet => cardSet.code === setCode)[0];
        for (const item of this.collection.items) {
            if (item.card.id === card.id && item.position === position && item?.set?.code === set?.code) {
                if (item.quantity < 3) {
                    item.quantity += 1;
                    isUpdate = true;
                }
                else {
                    return;
                }
            }
        }
        if (!isUpdate) {
            this.collection.items.push(new _collection_item__WEBPACK_IMPORTED_MODULE_2__.CollectionItem(position, card, set));
        }
        this.localUpdateCollection(true);
    }
    removeCollectionItem(card, setCode, position) {
        console.log('removeCollectionItem');
        const set = this.sets.filter(cardSet => cardSet.code === setCode)[0];
        for (const item of this.collection.items) {
            // TODO : fix issues with enum between spring and angular
            if (item.card.id === card.id && item.position === position && item?.set?.code === set.code) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                }
                else {
                    this.collection.items.splice(this.collection.items.indexOf(item), 1);
                }
            }
        }
        this.localUpdateCollection(true);
        return false;
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 3000,
        });
    }
    refreshCollectionView() {
        this.mainDeckSpellsItems = [];
        this.mainDeckTrapsItems = [];
        this.mainDeckMonstersItems = [];
        this.extraDeckItems = [];
        this.sideDeckItems = [];
        this.nbMainDeckMonstersItems = 0;
        this.nbMainDeckSpellsItems = 0;
        this.nbMainDeckTrapsItems = 0;
        this.nbExtraDeckItems = 0;
        this.nbSideDeckItems = 0;
        this.sortCollection(this.collection.items);
        for (const item of this.collection.items) {
            if (this.deckSearchValue && this.deckSearchValue.length > 0
                && !item.card.name.toLowerCase().includes(this.deckSearchValue.toLowerCase())) {
                continue;
            }
            if (!this.applyFilters(item)) {
                continue;
            }
            switch (item.position) {
                case _position__WEBPACK_IMPORTED_MODULE_1__.Position.MAIN_DECK:
                    if (item.card.type === 'Spell Card') {
                        this.mainDeckSpellsItems.push(item);
                    }
                    else if (item.card.type === 'Trap Card') {
                        this.mainDeckTrapsItems.push(item);
                    }
                    else {
                        this.mainDeckMonstersItems.push(item);
                    }
                    break;
                case _position__WEBPACK_IMPORTED_MODULE_1__.Position.EXTRA_DECK:
                    this.extraDeckItems.push(item);
                    break;
                case _position__WEBPACK_IMPORTED_MODULE_1__.Position.SIDE_DECK:
                    this.sideDeckItems.push(item);
                    break;
                default:
                    break;
            }
        }
        for (const item of this.mainDeckMonstersItems) {
            this.nbMainDeckMonstersItems += item.quantity;
        }
        for (const item of this.mainDeckSpellsItems) {
            this.nbMainDeckSpellsItems += item.quantity;
        }
        for (const item of this.mainDeckTrapsItems) {
            this.nbMainDeckTrapsItems += item.quantity;
        }
        for (const item of this.extraDeckItems) {
            this.nbExtraDeckItems += item.quantity;
        }
        for (const item of this.sideDeckItems) {
            this.nbSideDeckItems += item.quantity;
        }
        this.collection.totalItems = this.collection.items.map(value => value.quantity)
            .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        this.refreshCompetitiveCollectionView();
        this.populateCardValues();
    }
    refreshCompetitiveCollectionView() {
        this.mainDeckSpellsCompetitiveViewItems = [];
        this.mainDeckTrapsCompetitiveViewItems = [];
        this.mainDeckMonstersCompetitiveViewItems = [];
        this.extraDeckCompetitiveViewItems = [];
        this.sideDeckCompetitiveViewItems = [];
        this.nbMainDeckMonstersCompetitiveViewItems = 0;
        this.nbMainDeckSpellsCompetitiveViewItems = 0;
        this.nbMainDeckTrapsCompetitiveViewItems = 0;
        this.nbExtraDeckCompetitiveViewItems = 0;
        this.nbSideDeckCompetitiveViewItems = 0;
        this.competitiveViewCollection = this.aggregateItems(this.collection);
        this.sortCollection(this.competitiveViewCollection.items);
        for (const item of this.competitiveViewCollection.items) {
            // Osef des filtres ?
            if (this.deckSearchValue && this.deckSearchValue.length > 0
                && !item.card.name.toLowerCase().includes(this.deckSearchValue.toLowerCase())) {
                continue;
            }
            if (!this.applyFilters(item)) {
                continue;
            }
            switch (item.position) {
                case _position__WEBPACK_IMPORTED_MODULE_1__.Position.MAIN_DECK:
                    if (item.card.type === 'Spell Card') {
                        this.mainDeckSpellsCompetitiveViewItems.push(item);
                    }
                    else if (item.card.type === 'Trap Card') {
                        this.mainDeckTrapsCompetitiveViewItems.push(item);
                    }
                    else {
                        this.mainDeckMonstersCompetitiveViewItems.push(item);
                    }
                    break;
                case _position__WEBPACK_IMPORTED_MODULE_1__.Position.EXTRA_DECK:
                    this.extraDeckCompetitiveViewItems.push(item);
                    break;
                case _position__WEBPACK_IMPORTED_MODULE_1__.Position.SIDE_DECK:
                    this.sideDeckCompetitiveViewItems.push(item);
                    break;
                default:
                    break;
            }
        }
        for (const item of this.mainDeckMonstersCompetitiveViewItems) {
            this.nbMainDeckMonstersCompetitiveViewItems += item.quantity;
        }
        for (const item of this.mainDeckSpellsCompetitiveViewItems) {
            this.nbMainDeckSpellsCompetitiveViewItems += item.quantity;
        }
        for (const item of this.mainDeckTrapsCompetitiveViewItems) {
            this.nbMainDeckTrapsCompetitiveViewItems += item.quantity;
        }
        for (const item of this.extraDeckCompetitiveViewItems) {
            this.nbExtraDeckCompetitiveViewItems += item.quantity;
        }
        for (const item of this.sideDeckCompetitiveViewItems) {
            this.nbSideDeckCompetitiveViewItems += item.quantity;
        }
        this.competitiveViewCollection.totalItems = this.competitiveViewCollection.items.map(value => value.quantity)
            .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    }
    sortCollection(items) {
        // nb, lelve, atk, def , price
        switch (this.sort) {
            case _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_6__.CardSort.alphabeticalAsc:
                items.sort((a, b) => a.card.type.localeCompare(b.card.type) || a.card.name.localeCompare(b.card.name));
                break;
            case _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_6__.CardSort.alphabeticalDesc:
                items.sort((a, b) => a.card.type.localeCompare(b.card.type) || b.card.name.localeCompare(a.card.name));
                break;
            case _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_6__.CardSort.nbOwnedAsc:
                items.sort((a, b) => a.card.type.localeCompare(b.card.type) || a.quantity - b.quantity);
                break;
            case _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_6__.CardSort.nbOwnedDesc:
                items.sort((a, b) => a.card.type.localeCompare(b.card.type) || b.quantity - a.quantity);
                break;
            case _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_6__.CardSort.levelRankLinkAsc:
                items.sort((a, b) => a.card.type.localeCompare(b.card.type) || a.card.level - b.card.level);
                break;
            case _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_6__.CardSort.levelRankLinkDesc:
                items.sort((a, b) => a.card.type.localeCompare(b.card.type) || b.card.level - a.card.level);
                break;
            case _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_6__.CardSort.atkAsc:
                items.sort((a, b) => a.card.type.localeCompare(b.card.type) || a.card.atk - b.card.atk);
                break;
            case _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_6__.CardSort.atkDesc:
                items.sort((a, b) => a.card.type.localeCompare(b.card.type) || b.card.atk - a.card.atk);
                break;
            case _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_6__.CardSort.defAsc:
                items.sort((a, b) => a.card.type.localeCompare(b.card.type) || a.card.def - b.card.def);
                break;
            case _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_6__.CardSort.defDesc:
                items.sort((a, b) => a.card.type.localeCompare(b.card.type) || b.card.def - a.card.def);
                break;
            case _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_6__.CardSort.priceAsc:
                items.sort((a, b) => a.card.type.localeCompare(b.card.type) || a.card.price - b.card.price);
                break;
            case _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_6__.CardSort.priceDesc:
                items.sort((a, b) => a.card.type.localeCompare(b.card.type) || b.card.price - a.card.price);
                break;
        }
        // TODO : filter by card type, monster, xyz, etc
    }
    aggregateItems(collection) {
        collection = JSON.parse(JSON.stringify(collection));
        const aggregatedCollection = new _collection__WEBPACK_IMPORTED_MODULE_0__.Collection(collection.name, 'DECK');
        const mapApiIdAndPositionItems = new Map();
        collection.items.forEach(item => {
            const mapItem = mapApiIdAndPositionItems.get(item.card.apiId + item.position);
            if (mapItem) {
                mapItem.quantity += item.quantity;
            }
            else {
                mapApiIdAndPositionItems.set(item.card.apiId + item.position, item);
            }
        });
        aggregatedCollection.items.push(...mapApiIdAndPositionItems.values());
        collection = aggregatedCollection;
        collection.id = null; // TODO TODO -> IMPORTANT : KEEP NULL AT ALL COSTS OR ELSE IT WILL MESS UP WITH EXISTING COLLECTIONS !
        return collection;
    }
    applyFilters(item) {
        // Si filtre présent et cardType pas dans la liste de filtre alors on l'enlève
        if (this.filterDto?.cardTypes.length > 0
            && this.filterDto.cardTypes.filter(value => item.card.type.toLowerCase().includes(value.toLowerCase())).length === 0) {
            return false;
        }
        // Si filtre présent et attribute pas dans la liste de filtre alors on l'enlève
        if (this.filterDto?.attributes.length > 0 && this.filterDto.attributes.indexOf(item.card.attribute) === -1) {
            return false;
        }
        // Si filtre présent et level pas dans la liste de filtre alors on l'enlève
        if (this.filterDto?.levels.length > 0 && this.filterDto.levels.indexOf(item.card.level) === -1) {
            return false;
        }
        // Si filtre présent et monster race pas dans la liste de filtre alors on l'enlève
        if (this.filterDto?.monsterRaces.length > 0 && this.filterDto.monsterRaces.indexOf(item.card.race) === -1) {
            return false;
        }
        // Si filtre présent et spell race pas dans la liste de filtre alors on l'enlève
        if (this.filterDto?.spellRaces.length > 0 && this.filterDto.spellRaces.indexOf(item.card.race) === -1) {
            return false;
        }
        // Si filtre présent et trap race pas dans la liste de filtre alors on l'enlève
        if (this.filterDto?.trapRaces.length > 0 && this.filterDto.trapRaces.indexOf(item.card.race) === -1) {
            return false;
        }
        // Si filtre présent et archétype différent du filtre alors on l'enlève
        if (this.filterDto.archetype && item.card.archetype !== this.filterDto.archetype) {
            return false;
        }
        return true;
    }
    populateCardValues() {
        this.cards.forEach(card => {
            card.mapMainDeckQuantity = new Map();
            card.mapExtraDeckQuantity = new Map();
            card.mapSideDeckQuantity = new Map();
            this.collection?.items.forEach(item => {
                if (item.card.name === card.name && item.set) {
                    if (item.position === 0) {
                        card.mapMainDeckQuantity.set(item.set.code, item.quantity);
                    }
                    else if (item.position === 1) {
                        card.mapExtraDeckQuantity.set(item.set.code, item.quantity);
                    }
                    else if (item.position === 2) {
                        card.mapSideDeckQuantity.set(item.set.code, item.quantity);
                    }
                    return;
                }
            });
        });
    }
    uploadFile(event) {
        // for (let index = 0; index < event.length; index++) {
        const element = event.target.files[0]; // we keep only the 1st image
        if (!this.collection.images) {
            this.collection.images = [];
        }
        const reader = new FileReader();
        reader.readAsDataURL(element);
        reader.onload = () => {
            const imageWithoutBase64Prefix = reader.result.toString().split(',')[1];
            if (this.collection.images) {
                this.collection.images.push(new _image__WEBPACK_IMPORTED_MODULE_8__.Image(imageWithoutBase64Prefix));
            }
            else {
                this.collection.images = [new _image__WEBPACK_IMPORTED_MODULE_8__.Image(imageWithoutBase64Prefix)];
            }
            this.localUpdateCollection(true);
        };
    }
    openFullWidthImageDialog(image) {
        const imageUrl = _global__WEBPACK_IMPORTED_MODULE_7__.backendUrl + '/collections/' + this.collection.id + '/images/' + image.id;
        this.dialog.open(_full_image_dialog_full_image_dialog_component__WEBPACK_IMPORTED_MODULE_5__.FullImageDialogComponent, {
            maxWidth: '100vw',
            maxHeight: '100vh',
            height: '100%',
            width: '100%',
            panelClass: 'full-screen-modal',
            data: imageUrl
        });
    }
    deleteImage(image) {
        this.collection.images.splice(this.collection.images.indexOf(image), 1);
        this.localUpdateCollection(true);
    }
    saveDeck() {
        // Reorganize position of collectionItems before saving collections
        this.mainDeckMonstersItems.forEach(value => value.position = _position__WEBPACK_IMPORTED_MODULE_1__.Position.MAIN_DECK);
        this.mainDeckSpellsItems.forEach(value => value.position = _position__WEBPACK_IMPORTED_MODULE_1__.Position.MAIN_DECK);
        this.mainDeckTrapsItems.forEach(value => value.position = _position__WEBPACK_IMPORTED_MODULE_1__.Position.MAIN_DECK);
        this.extraDeckItems.forEach(value => value.position = _position__WEBPACK_IMPORTED_MODULE_1__.Position.EXTRA_DECK);
        this.sideDeckItems.forEach(value => value.position = _position__WEBPACK_IMPORTED_MODULE_1__.Position.SIDE_DECK);
        this.yugiohService.addOrUpdateCollection(this.collection)
            .subscribe(collection => {
            this.collection = collection;
            this.refreshCollectionView();
            this.localUpdateCollection(false);
        }, () => this.openSnackBar('Erreur lors de la sauvegarde', 'OK'));
    }
    localUpdateCollection(canSave) {
        this.canSave = canSave;
        console.log(this.collection);
        this.refreshCollectionView();
        if (canSave) {
            window.onbeforeunload = (e) => {
                // IE & Firefox
                if (e) {
                    e.returnValue = 'Are you sure?';
                }
                // For Safari
                return 'Are you sure?';
            };
        }
        else {
            window.onbeforeunload = null; // no alert on close window
        }
    }
    canDeactivate() {
        if (this.canSave) {
            if (confirm('Les modification apportées au deck n\'ont pas été sauvegardées. Quitter quand même ?')) {
                window.onbeforeunload = null; // no alert on close window
                return true;
            }
            else {
                return false;
            }
        }
        window.onbeforeunload = null; // no alert on close window
        return true;
    }
    onClick($event) {
        $event.preventDefault();
        if ($event.which === 2) {
            window.open('/');
        }
    }
    setCardAsCollectionImage(cardApidId) {
        this.collection.mainCardApiId = cardApidId;
        this.localUpdateCollection(true);
        return false;
    }
    openSendToAnotherCollection($event, item) {
        $event?.stopPropagation();
        this.dialog.open(_send_card_to_other_collection_modal_send_card_to_other_collection_modal_component__WEBPACK_IMPORTED_MODULE_12__.SendCardToOtherCollectionModalComponent, {
            width: '400px',
        }).afterClosed().subscribe(collectionLight => {
            console.log(collectionLight);
            if (collectionLight) {
                const collectionItemInputPojo = new _collection_import_pojo__WEBPACK_IMPORTED_MODULE_4__.CollectionImportPojo(item.quantity, item.card.name, item.set?.code, item.position, item.card.apiId);
                console.log(collectionItemInputPojo);
                this.yugiohService.importCollection(collectionLight.id, [collectionItemInputPojo]).subscribe(value => {
                    // If error
                    if (value.notAddedPojos && value.notAddedPojos.length > 0) {
                        this.snackBar.open('Carte ' + item.card.name + ' n\'a pas pu être envoyée vers la collection ' + collectionLight.name + '.');
                    }
                    else { // Ok
                        this.snackBar.open('Carte ' + item.card.name + ' envoyée vers la collection ' + collectionLight.name + '.');
                        const indexToDelete = this.collection.items.indexOf(item);
                        this.collection.items.splice(indexToDelete, 1);
                        this.localUpdateCollection(true);
                    }
                });
            }
        });
    }
    cardSearchTypeChange() {
        this.searchCardWithString(this.searchCardValue);
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            // this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    textAreaChanged() {
        this.localUpdateCollection(true);
    }
    // Search deck section
    searchValueChanged($event) {
        this.deckSearchValue = $event;
        this.refreshCollectionView();
    }
    applyFilter(filterDto) {
        this.filterDto = filterDto;
        this.refreshCollectionView();
    }
    applySort(sort) {
        this.sort = sort;
        this.refreshCollectionView();
    }
    download() {
        const strings = new Array();
        strings.push('main deck');
        this.mainDeckMonstersItems.forEach(value => {
            let code;
            if (value.set?.code) {
                code = value.set?.code;
            }
            else {
                code = '';
            }
            strings.push(value.quantity + ' ' + value.card.name + ' ' + code);
        });
        this.mainDeckSpellsItems.forEach(value => {
            let code;
            if (value.set?.code) {
                code = value.set?.code;
            }
            else {
                code = '';
            }
            strings.push(value.quantity + ' ' + value.card.name + ' ' + code);
        });
        this.mainDeckTrapsItems.forEach(value => {
            let code;
            if (value.set?.code) {
                code = value.set?.code;
            }
            else {
                code = '';
            }
            strings.push(value.quantity + ' ' + value.card.name + ' ' + code);
        });
        strings.push('extra deck');
        this.extraDeckItems.forEach(value => {
            let code;
            if (value.set?.code) {
                code = value.set?.code;
            }
            else {
                code = '';
            }
            strings.push(value.quantity + ' ' + value.card.name + ' ' + code);
        });
        strings.push('side deck');
        this.sideDeckItems.forEach(value => {
            let code;
            if (value.set?.code) {
                code = value.set?.code;
            }
            else {
                code = '';
            }
            strings.push(value.quantity + ' ' + value.card.name + ' ' + code);
        });
        const stringToDownload = strings.join('\r\n');
        const data = new Blob([stringToDownload], { type: 'text/plain;charset=utf-8' });
        const filename = this.collection.name + '.json';
        const options = {
            autoBom: false,
        };
        (0,file_saver__WEBPACK_IMPORTED_MODULE_9__.saveAs)(data, filename, options);
    }
    // TODO : show when lines in the array are ignored (ex: kuriboh because of alternate art)
    // TODO : refonte gestion cartes car dans ygopro api il y a autant de cartes de même noms qu'il y a d'art alternatif (kuriboh = 2, etc)
    // TODO : refonte cartes entité et utilisé seulement api_id en tant que nouvele id
    importAsYdke(ydkeImportPojo) {
        this.yugiohService.importCollectionYdke(this.collection.id, ydkeImportPojo.collectionImportPojos, ydkeImportPojo.language)
            .subscribe(collection => {
            this.collection = collection;
            this.localUpdateCollection(false);
        });
    }
    exportAsYdke() {
        const ydkeString = ydke__WEBPACK_IMPORTED_MODULE_11__.toURL({
            main: Uint32Array.from([...this.extractIds(this.mainDeckMonstersItems),
                ...this.extractIds(this.mainDeckSpellsItems),
                ...this.extractIds(this.mainDeckTrapsItems)]),
            extra: Uint32Array.from(this.extractIds(this.extraDeckItems)),
            side: Uint32Array.from(this.extractIds(this.sideDeckItems))
        });
        // Copy to clipboard
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = ydkeString;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.openSnackBar('Deck copié dans le presse papier', 'OK');
    }
    extractIds(collectionItems) {
        const array = [];
        collectionItems.forEach(item => Array.from(Array(item.quantity).keys()).forEach(() => array.push(Number(item.card.apiId))));
        return array;
    }
    openImportDialog() {
        const dialogRef = this.dialog.open(_dialog_import_collection_dialog_import_collection_component__WEBPACK_IMPORTED_MODULE_3__.DialogImportCollectionComponent, {
            width: '400px',
            data: this.collection
        });
        dialogRef.afterClosed().subscribe(result => {
            const importData = result;
            console.log('The dialog was closed');
            if (importData.selectedIndex === 0) {
                const cardLines = result.importText.split(/[\r\n]+/);
                console.log(cardLines);
                const lines = new Array();
                const indexMainLine = cardLines.findIndex(element => element.includes('main'));
                const indexExtraLine = cardLines.findIndex(element => element.includes('extra'));
                const indexSideLine = cardLines.findIndex(element => element.includes('side'));
                for (let i = indexMainLine + 1; i < cardLines.length; i++) {
                    if (i === indexExtraLine || i === indexSideLine) {
                        i++; // skip line 'EXTRA' and 'SIDE'
                    }
                    const line = cardLines[i];
                    console.log(line);
                    if (line && line.trim().length > 0) {
                        const lineSplit = line.trim().split(/ +/); // to handle cases like "  first    middle    last    "
                        // tslint:disable-next-line:max-line-length
                        const linePotentialSet = this.sets.filter(value => value?.code.toLowerCase() === lineSplit[lineSplit.length - 1]
                            .toLowerCase());
                        // TODO : DOESN'T WORK FOR NUMBER higher than 9 because we only keep the first character
                        const cardNumber = lineSplit[0].charAt(0);
                        const position = i < indexExtraLine ? 0 : i < indexSideLine ? 1 : 2;
                        let cardName = '';
                        const cardCode = linePotentialSet && linePotentialSet.length > 0 ? linePotentialSet[0].code : null;
                        // tslint:disable-next-line:prefer-for-of
                        for (let j = 1; j < (cardCode ? lineSplit.length - 1 : lineSplit.length); j++) {
                            if (lineSplit[j] && lineSplit.length > 0) {
                                cardName += lineSplit[j] + ' ';
                            }
                        }
                        lines.push(new _collection_import_pojo__WEBPACK_IMPORTED_MODULE_4__.CollectionImportPojo(cardNumber, cardName.trim(), cardCode, position));
                    }
                }
                this.yugiohService.importCollection(this.collection.id, lines).subscribe(value => {
                    this.collection = value.collection;
                    this.localUpdateCollection(false);
                    if (value.notAddedPojos?.length > 0) {
                        this.openSnackBar('Cartes non ajoutées : ' + value.notAddedPojos.toString(), 'OK');
                    }
                });
            }
            else {
                this.yugiohService.importCollectionBySet(this.collection.id, importData.setCode, importData.language).subscribe(value => {
                    this.collection = value;
                    this.localUpdateCollection(false);
                });
            }
        });
    }
}
DeckComponent.ɵfac = function DeckComponent_Factory(t) { return new (t || DeckComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_yugioh_service__WEBPACK_IMPORTED_MODULE_13__.YugiohService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_27__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbTooltipConfig), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](ng2_dragula__WEBPACK_IMPORTED_MODULE_29__.DragulaService)); };
DeckComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineComponent"]({ type: DeckComponent, selectors: [["app-deck"]], viewQuery: function DeckComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
    } }, hostBindings: function DeckComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("keydown", function DeckComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresolveDocument"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbTooltipConfig])], decls: 107, vars: 61, consts: [[2, "display", "flex"], [1, "card-column", 2, "min-width", "300px", "max-width", "300px", "display", "flex", "flex-direction", "column", "height", "calc(100vh - 58px)", "overflow-y", "auto", "background-color", "rgb(15 15 15)", "padding-left", "4px", "padding-right", "4px"], ["appearance", "outline", 2, "width", "75%"], ["id", "sidebar-search-input", "matInput", "", 3, "placeholder", "ngModel", "ngModelChange", "keyup"], ["inputElement", ""], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["appearance", "outline", 2, "width", "25%"], [3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["style", "display:flex; width: 100%;", 3, "ngbTooltip", "container", 4, "ngFor", "ngForOf"], [2, "width", "100%", "max-height", "calc(100vh - 58px)", "display", "flex", "flex-direction", "column", "overflow-y", "auto"], [3, "canSave", "collection", "totalPrice", "isCollection", "save", "removeImage"], [3, "searchValue", "searchValueChanged", "filterDtoChanged", "sortChanged", "downloadClicked", "importYdkeClicked", "exportYdkeClicked", "importDialogClicked"], ["label", "Cartes"], [1, "container-fluid", 2, "display", "flex", "flex-direction", "column", "height", "100%", "padding-right", "0"], [1, "row", 2, "width", "100%"], [1, "col-lg-6", 2, "padding-right", "1vw", "padding-left", "1vw", "padding-bottom", "1vh"], ["multi", ""], [3, "expanded"], [1, "category-cards", 2, "margin-top", "0"], ["id", "id-main-monsters", 2, "min-height", "20px", 3, "dragula", "dragulaModel", "dragulaModelChange"], ["ngbDropdown", "", 3, "className", "container", "click", 4, "ngFor", "ngForOf"], [1, "category-cards"], ["id", "id-main-spells", 2, "min-height", "20px", 3, "dragula", "dragulaModel", "dragulaModelChange"], ["id", "id-main-traps", 2, "min-height", "20px", 3, "dragula", "dragulaModel", "dragulaModelChange"], [1, "col-lg-6", 2, "padding-right", "1vw", "padding-left", "1vw", "padding-bottom", "1vw"], ["id", "id-extra", 2, "min-height", "20px", 3, "dragula", "dragulaModel", "dragulaModelChange"], ["id", "id-side", 2, "min-height", "20px", 3, "dragula", "dragulaModel", "dragulaModelChange"], ["label", "Vue compact"], ["id", "id-main-monsters-2", 2, "min-height", "20px"], ["id", "id-main-spells-2", 2, "min-height", "20px"], ["id", "id-main-traps-2", 2, "min-height", "20px"], ["id", "id-extra-2", 2, "min-height", "20px"], ["id", "id-side-2", 2, "min-height", "20px"], ["label", "Prix"], ["style", "width: 95%; margin-left: 2.5%", 4, "ngIf"], ["label", "Commentaires & Images"], ["style", "width: 100%;", 4, "ngIf"], [3, "value"], [2, "display", "flex", "width", "100%", 3, "ngbTooltip", "container"], [2, "width", "20%"], ["alt", "Character picture", 1, "img-fluid", 2, "margin-right", "4px", 3, "src"], [2, "width", "45%"], [1, "list-card-name"], [1, "list-card-content"], [4, "ngIf"], ["class", "list-card-content", 4, "ngIf"], ["style", "display: flex; align-items: center", 4, "ngFor", "ngForOf"], ["tipContent", ""], [2, "display", "flex", "align-items", "center"], [1, "list-card-content", 2, "width", "38px"], ["class", "list-card-mat-icon", "style", "border-radius: 6px 0 0 6px;", 3, "contextmenu", "click", 4, "ngIf"], ["class", "list-card-mat-icon", 3, "contextmenu", "click", 4, "ngIf"], [1, "list-card-mat-icon", 2, "border-radius", "0 6px 6px 0", 3, "contextmenu", "click"], [1, "list-card-mat-icon", 2, "border-radius", "6px 0 0 6px", 3, "contextmenu", "click"], [1, "list-card-mat-icon", 3, "contextmenu", "click"], [3, "card"], ["ngbDropdown", "", 3, "className", "container", "click"], ["myDrop", "ngbDropdown"], ["ngbDropdownToggle", "", 1, "card-container-inside", 3, "matBadge", "matBadgeHidden", "click", "contextmenu"], [1, "card-quantity"], [1, "card-name"], ["alt", "website icon", 2, "width", "42px", "height", "42px", "border", "0", "margin-right", "8px", 3, "src"], [3, "click"], ["ngbDropdownMenu", ""], ["ngbDropdownItem", "", 3, "click"], ["content", ""], [2, "width", "95%", "margin-left", "2.5%"], ["class", "card-container", "style", "width: 100%", 3, "click", 4, "ngFor", "ngForOf"], [1, "card-container", 2, "width", "100%", 3, "click"], [1, "card-container-inside", 3, "matBadge", "matBadgeHidden"], [2, "width", "100%"], ["matInput", "", "placeholder", "Commentaire...", 2, "width", "90%", "height", "90px", "border", "#3b3b3b 1px solid", "padding", "8px", "margin", "8px", 3, "ngModel", "ngModelChange", "change"], ["mat-raised-button", "", 2, "margin", "8px", 3, "click"], ["id", "inputImage", "hidden", "", "type", "file", 3, "change"], ["fileInput", ""], ["style", "margin: 16px", 4, "ngFor", "ngForOf"], [2, "margin", "16px"], ["class", "file-preview", 4, "ngIf"], [1, "file-preview"], ["height", "120px", 2, "height", "150px", "margin-right", "16px", 3, "src", "click"], ["aria-hidden", "false", "aria-label", "Delte icon", 1, "delete-file", 3, "ngStyle", "click"]], template: function DeckComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 0)(3, "mat-form-field", 2)(4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("ngModelChange", function DeckComponent_Template_input_ngModelChange_4_listener($event) { return ctx.searchCardValue = $event; })("keyup", function DeckComponent_Template_input_keyup_4_listener($event) { return ctx.applyCardFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DeckComponent_Template_button_click_6_listener() { return ctx.applyCardFilter(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](8, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "mat-form-field", 6)(10, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("valueChange", function DeckComponent_Template_mat_select_valueChange_10_listener($event) { return ctx.searchBy = $event; })("selectionChange", function DeckComponent_Template_mat_select_selectionChange_10_listener() { return ctx.cardSearchTypeChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](11, DeckComponent_mat_option_11_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](12, DeckComponent_div_12_Template, 16, 11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](13, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](14, "div", 10)(15, "app-bar-collection-information", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("save", function DeckComponent_Template_app_bar_collection_information_save_15_listener() { return ctx.saveDeck(); })("removeImage", function DeckComponent_Template_app_bar_collection_information_removeImage_15_listener() { return ctx.setCardAsCollectionImage(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](16, "app-search", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("searchValueChanged", function DeckComponent_Template_app_search_searchValueChanged_16_listener($event) { return ctx.searchValueChanged($event); })("filterDtoChanged", function DeckComponent_Template_app_search_filterDtoChanged_16_listener($event) { return ctx.applyFilter($event); })("sortChanged", function DeckComponent_Template_app_search_sortChanged_16_listener($event) { return ctx.applySort($event); })("downloadClicked", function DeckComponent_Template_app_search_downloadClicked_16_listener() { return ctx.download(); })("importYdkeClicked", function DeckComponent_Template_app_search_importYdkeClicked_16_listener($event) { return ctx.importAsYdke($event); })("exportYdkeClicked", function DeckComponent_Template_app_search_exportYdkeClicked_16_listener() { return ctx.exportAsYdke(); })("importDialogClicked", function DeckComponent_Template_app_search_importDialogClicked_16_listener() { return ctx.openImportDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](17, "div")(18, "mat-tab-group")(19, "mat-tab", 13)(20, "div", 14)(21, "div", 15)(22, "div", 16)(23, "mat-accordion", 17)(24, "mat-expansion-panel", 18)(25, "mat-expansion-panel-header")(26, "mat-panel-title")(27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("dragulaModelChange", function DeckComponent_Template_div_dragulaModelChange_29_listener($event) { return ctx.mainDeckMonstersItems = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](30, DeckComponent_div_30_Template, 24, 12, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](31, "mat-expansion-panel", 18)(32, "mat-expansion-panel-header")(33, "mat-panel-title")(34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("dragulaModelChange", function DeckComponent_Template_div_dragulaModelChange_36_listener($event) { return ctx.mainDeckSpellsItems = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](37, DeckComponent_div_37_Template, 24, 12, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](38, "mat-expansion-panel", 18)(39, "mat-expansion-panel-header")(40, "mat-panel-title")(41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("dragulaModelChange", function DeckComponent_Template_div_dragulaModelChange_43_listener($event) { return ctx.mainDeckTrapsItems = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](44, DeckComponent_div_44_Template, 24, 12, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](45, "div", 25)(46, "mat-accordion", 17)(47, "mat-expansion-panel", 18)(48, "mat-expansion-panel-header")(49, "mat-panel-title")(50, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("dragulaModelChange", function DeckComponent_Template_div_dragulaModelChange_52_listener($event) { return ctx.extraDeckItems = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](53, DeckComponent_div_53_Template, 24, 12, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](54, "mat-expansion-panel", 18)(55, "mat-expansion-panel-header")(56, "mat-panel-title")(57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("dragulaModelChange", function DeckComponent_Template_div_dragulaModelChange_59_listener($event) { return ctx.sideDeckItems = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](60, DeckComponent_div_60_Template, 24, 12, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](61, "mat-tab", 28)(62, "div", 14)(63, "div", 15)(64, "div", 16)(65, "mat-accordion", 17)(66, "mat-expansion-panel", 18)(67, "mat-expansion-panel-header")(68, "mat-panel-title")(69, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](71, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](72, DeckComponent_div_72_Template, 16, 11, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](73, "mat-expansion-panel", 18)(74, "mat-expansion-panel-header")(75, "mat-panel-title")(76, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](78, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](79, DeckComponent_div_79_Template, 16, 11, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](80, "mat-expansion-panel", 18)(81, "mat-expansion-panel-header")(82, "mat-panel-title")(83, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](85, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](86, DeckComponent_div_86_Template, 16, 11, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](87, "div", 25)(88, "mat-accordion", 17)(89, "mat-expansion-panel", 18)(90, "mat-expansion-panel-header")(91, "mat-panel-title")(92, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](94, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](95, DeckComponent_div_95_Template, 16, 11, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](96, "mat-expansion-panel", 18)(97, "mat-expansion-panel-header")(98, "mat-panel-title")(99, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](101, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](102, DeckComponent_div_102_Template, 16, 11, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](103, "mat-tab", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](104, DeckComponent_div_104_Template, 2, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](105, "mat-tab", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](106, DeckComponent_div_106_Template, 8, 2, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵstyleProp"]("font-size", 14, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("placeholder", "Recherche par ")("ngModel", ctx.searchCardValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵstyleProp"]("font-size", 14, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("value", ctx.searchBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx.searchTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind2"](13, 58, ctx.cards, "name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("canSave", ctx.canSave)("collection", ctx.collection)("totalPrice", ctx.totalPrice)("isCollection", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("searchValue", ctx.deckSearchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"](" Main Deck (", ctx.nbMainDeckMonstersItems + ctx.nbMainDeckSpellsItems + ctx.nbMainDeckTrapsItems, "), Monstres (", ctx.nbMainDeckMonstersItems, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("dragula", ctx.dragulaName)("dragulaModel", ctx.mainDeckMonstersItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx.mainDeckMonstersItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" Magies (", ctx.nbMainDeckSpellsItems, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("dragula", ctx.dragulaName)("dragulaModel", ctx.mainDeckSpellsItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx.mainDeckSpellsItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" Pi\u00E8ges (", ctx.nbMainDeckTrapsItems, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("dragula", ctx.dragulaName)("dragulaModel", ctx.mainDeckTrapsItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx.mainDeckTrapsItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" Extra Deck (", ctx.nbExtraDeckItems, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("dragula", ctx.dragulaName)("dragulaModel", ctx.extraDeckItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx.extraDeckItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" Side Deck (", ctx.nbSideDeckItems, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("dragula", ctx.dragulaName)("dragulaModel", ctx.sideDeckItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx.sideDeckItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"](" Main Deck (", ctx.nbMainDeckMonstersCompetitiveViewItems + ctx.nbMainDeckSpellsCompetitiveViewItems + ctx.nbMainDeckTrapsCompetitiveViewItems, " ), Monstres (", ctx.nbMainDeckMonstersCompetitiveViewItems, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx.mainDeckMonstersCompetitiveViewItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" Magies (", ctx.nbMainDeckSpellsCompetitiveViewItems, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx.mainDeckSpellsCompetitiveViewItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" Pi\u00E8ges (", ctx.nbMainDeckTrapsCompetitiveViewItems, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx.mainDeckTrapsCompetitiveViewItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" Extra Deck (", ctx.nbExtraDeckCompetitiveViewItems, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx.extraDeckCompetitiveViewItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" Side Deck (", ctx.nbSideDeckCompetitiveViewItems, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx.sideDeckCompetitiveViewItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.collection && ctx.cardPriceEntries);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.collection);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_30__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatSuffix, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbDropdownItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_33__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_35__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_36__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_37__.MatOption, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__.MatTab, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_39__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_39__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_39__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_39__.MatExpansionPanelTitle, ng2_dragula__WEBPACK_IMPORTED_MODULE_29__.DragulaDirective, _angular_material_badge__WEBPACK_IMPORTED_MODULE_40__.MatBadge, _tooltip_card_tooltip_card_component__WEBPACK_IMPORTED_MODULE_14__.TooltipCardComponent, _modal_card_detail_modal_card_detail_component__WEBPACK_IMPORTED_MODULE_15__.ModalCardDetailComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_16__.SearchComponent, _bar_collection_information_bar_collection_information_component__WEBPACK_IMPORTED_MODULE_17__.BarCollectionInformationComponent, _array_sort_pipe__WEBPACK_IMPORTED_MODULE_18__.ArraySortPipe, _ban_pipe__WEBPACK_IMPORTED_MODULE_19__.BanPipe], styles: ["mat-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.selected[_ngcontent-%COMP%] {\n  border: 1px #959da9 solid;\n  border-radius: 4px;\n}\n\n@media screen and (max-width: 701px) {\n  .card-column[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n\n.list-card-name[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  color: rgb(255, 255, 255);\n}\n\n.mat-divider[_ngcontent-%COMP%] {\n  border-top-color: white;\n}\n\n.list-card-content[_ngcontent-%COMP%] {\n  color: rgb(255, 255, 255);\n  font-size: 12px;\n}\n\n.list-card-mat-icon[_ngcontent-%COMP%] {\n  color: rgb(255, 255, 255);\n  font-size: 12px;\n  font-weight: bold;\n  background-color: rgb(55, 55, 55);\n  padding: 8px;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n\n.list-card-mat-icon[_ngcontent-%COMP%]:hover {\n  background-color: rgb(58, 134, 255);\n}\n\n.category-cards[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n  margin-top: 0.25rem;\n  color: rgb(0, 0, 0);\n  font-size: 1rem;\n  font-weight: 800;\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  transition: all 0.1s ease 0s;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  display: block;\n  padding: 1px;\n  text-decoration: none;\n  width: 100%;\n}\n\n.card-container[_ngcontent-%COMP%]:hover {\n  border: 1px #424548 solid;\n}\n\n.card-container-inside[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  color: rgb(0, 0, 0);\n  font-size: 1rem;\n  font-weight: 500;\n  padding: 0px 0.5rem 0px 25px;\n  position: relative;\n  align-items: center;\n  display: flex;\n}\n\n.card-quantity[_ngcontent-%COMP%] {\n  background: rgb(255, 255, 255);\n  border-right: 1px solid rgb(255, 255, 255);\n  color: rgb(119, 119, 119);\n  font-size: 0.9rem;\n  font-weight: 400;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 25px;\n  align-items: center;\n  display: flex;\n}\n\n.card-name[_ngcontent-%COMP%] {\n  flex: 1 1 0%;\n  white-space: pre-line;\n  overflow: hidden;\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  padding: 8px;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  color: rgb(0, 0, 0);\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n.bAXgkK[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  align-items: center;\n  display: flex;\n  padding: 0.5rem 1rem;\n  background: black;\n}\n\n.qmUrg[_ngcontent-%COMP%] {\n  background: rgb(255, 255, 255);\n  border-radius: 3px;\n  height: 38px;\n  width: 100%;\n  display: flex;\n}\n\n.bAXgkK[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0px;\n  height: 100%;\n  padding: 0.5rem;\n  width: 100%;\n  box-shadow: none !important;\n}\n\n.jNdboZ[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHdCQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFHQTtFQUNFLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxtQ0FBQTtBQUFGOztBQUdBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsbUJBQUE7RUFDQSxhQUFBO0VBRUEsOEJBQUE7RUFDQSw0QkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0VBQ0EsYUFBQTtBQUFGOztBQUdBO0VBQ0UsOEJBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLG1CQUFBO0VBQ0EsYUFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQURGIiwiZmlsZSI6ImRlY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtaWNvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIGJvcmRlcjogMXB4ICM5NTlkYTkgc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDFweCkge1xyXG4gIC5jYXJkLWNvbHVtbiB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubGlzdC1jYXJkLW5hbWUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxuLm1hdC1kaXZpZGVyIHtcclxuICBib3JkZXItdG9wLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxpc3QtY2FyZC1jb250ZW50IHtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmxpc3QtY2FyZC1tYXQtaWNvbiB7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU1LCA1NSwgNTUpO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDFweDtcclxufVxyXG5cclxuLmxpc3QtY2FyZC1tYXQtaWNvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCAxMzQsIDI1NSk7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1jYXJkcyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcclxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZSAwcztcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXI6aG92ZXIge1xyXG4gIGJvcmRlciA6IDFweCAjNDI0NTQ4IHNvbGlkO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXItaW5zaWRlIHtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nOiAwcHggMC41cmVtIDBweCAyNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNhcmQtcXVhbnRpdHkge1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgY29sb3I6IHJnYigxMTksIDExOSwgMTE5KTtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY2FyZC1uYW1lIHtcclxuICBmbGV4OiAxIDEgMCU7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuLmNhcmQtdGV4dCB7XHJcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuXHJcbi5iQVhna0sge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxufVxyXG5cclxuLnFtVXJnIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGhlaWdodDogMzhweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYkFYZ2tLIGlucHV0IHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmpOZGJvWiB7XHJcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 4973:
/*!************************************************************************!*\
  !*** ./src/app/yu-gi-oh/collection/dialog-add-collection.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogAddCollectionComponent": () => (/* binding */ DialogAddCollectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var ngx_color_circle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-color/circle */ 7489);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);









class DialogAddCollectionComponent {
    constructor(dialogRef, dialogData) {
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        this.collectionTypes = ['DECK', 'COLLECTION'];
        this.data = {
            name: '',
            type: 'DECK',
            createdBy: '',
            color: ''
        };
        this.data.type = dialogData.type;
    }
    changeComplete($event) {
        this.data.color = $event.color.hex;
    }
}
DialogAddCollectionComponent.ɵfac = function DialogAddCollectionComponent_Factory(t) { return new (t || DialogAddCollectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
DialogAddCollectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogAddCollectionComponent, selectors: [["app-dialog-collection"]], decls: 25, vars: 8, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [2, "width", "100%"], ["matInput", "", "autofocus", "", 3, "ngModel", "ngModelChange"], ["matInput", "", 3, "ngModel", "ngModelChange"], [2, "display", "flex", "align-items", "center", "justify-content", "center"], [2, "width", "50%"], [2, "width", "50%", "display", "flex", "align-items", "center", "justify-content", "center"], [3, "color", "onChangeComplete"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "mat-dialog-close"]], template: function DialogAddCollectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1)(4, "div")(5, "mat-form-field", 2)(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogAddCollectionComponent_Template_input_ngModelChange_8_listener($event) { return ctx.data.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div")(10, "mat-form-field", 2)(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cr\u00E9\u00E9 par");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogAddCollectionComponent_Template_input_ngModelChange_13_listener($event) { return ctx.data.createdBy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5)(15, "div", 6)(16, "mat-form-field", 2)(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Couleur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogAddCollectionComponent_Template_input_ngModelChange_19_listener($event) { return ctx.data.color = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7)(21, "color-circle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChangeComplete", function DialogAddCollectionComponent_Template_color_circle_onChangeComplete_21_listener($event) { return ctx.changeComplete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9)(23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Ajouter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ajout ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx.data.type), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.createdBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.data.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, ngx_color_circle__WEBPACK_IMPORTED_MODULE_6__.CircleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.LowerCasePipe], encapsulation: 2 });


/***/ }),

/***/ 9628:
/*!**********************************************!*\
  !*** ./src/app/yu-gi-oh/collection/image.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Image": () => (/* binding */ Image)
/* harmony export */ });
class Image {
    constructor(data) {
        this.data = data;
    }
}


/***/ }),

/***/ 8138:
/*!*************************************************!*\
  !*** ./src/app/yu-gi-oh/collection/position.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Position": () => (/* binding */ Position)
/* harmony export */ });
var Position;
(function (Position) {
    // NONE,
    Position[Position["MAIN_DECK"] = 0] = "MAIN_DECK";
    Position[Position["EXTRA_DECK"] = 1] = "EXTRA_DECK";
    Position[Position["SIDE_DECK"] = 2] = "SIDE_DECK";
})(Position || (Position = {}));


/***/ }),

/***/ 6014:
/*!****************************************************************************!*\
  !*** ./src/app/yu-gi-oh/collection/tooltip-card/tooltip-card.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipCardComponent": () => (/* binding */ TooltipCardComponent)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../global */ 7266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _yugioh_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../yugioh.service */ 5594);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ 1528);





function TooltipCardComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](", ", ctx_r0.card.atk, ", ", ctx_r0.card.def, ", Level / Rank / Link : ", ctx_r0.card.level, "");
} }
function TooltipCardComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Prix CardMarket : ", ctx_r1.cardmarketPrice, "\u20AC");
} }
class TooltipCardComponent {
    constructor(yugiohService) {
        this.yugiohService = yugiohService;
        this.backEndCardUrl = _global__WEBPACK_IMPORTED_MODULE_0__.backendUrl + '/cards/';
    }
    ngOnInit() {
        this.yugiohService.getCardPriceById(this.card?.apiId)
            .subscribe(value => {
            if (value?.data && value.data.length > 0) {
                if (value.data[0]?.card_prices && value.data[0].card_prices.length > 0) {
                    this.cardmarketPrice = value.data[0].card_prices[0].cardmarket_price;
                }
            }
        });
    }
}
TooltipCardComponent.ɵfac = function TooltipCardComponent_Factory(t) { return new (t || TooltipCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_yugioh_service__WEBPACK_IMPORTED_MODULE_1__.YugiohService)); };
TooltipCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TooltipCardComponent, selectors: [["app-tooltip-card"]], inputs: { card: "card" }, decls: 17, vars: 8, consts: [[2, "display", "flex", "opacity", "1"], [2, "width", "300px"], ["alt", "Character picture", 1, "img-fluid", 2, "margin-right", "4px", 3, "src"], [2, "width", "30vw", "margin-left", "6px", "border", "1px #bebebe solid", "height", "fit-content"], [2, "display", "flex", "flex-direction", "column", "justify-content", "center", "align-content", "center", "background-color", "blue"], [2, "font-weight", "bolder", "font-size", "20px"], [2, "padding-bottom", "4px"], [2, "width", "94%", "margin-left", "3%"], [2, "padding", "4px"], [4, "ngIf"], [2, "padding", "4px", "background-color", "white", "color", "black"]], template: function TooltipCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "mat-divider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, TooltipCardComponent_span_12_Template, 2, 3, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10)(14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, TooltipCardComponent_div_16_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.backEndCardUrl + ctx.card.apiId + "/image", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.card.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.card.race, ", ", ctx.card.attribute, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.card.type, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.card.type !== "Spell Card" && ctx.card.type !== "Trap Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.card.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cardmarketPrice);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__.MatDivider], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sdGlwLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5913:
/*!**********************************************!*\
  !*** ./src/app/yu-gi-oh/collection/utils.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Utils": () => (/* binding */ Utils)
/* harmony export */ });
class Utils {
}
Utils.cardColorMap = new Map([
    ['Effect Monster', 'rgba(139, 98, 32, 0.3)'],
    ['Flip Effect Monster', 'rgba(139, 98, 32, 0.3)'],
    ['Flip Tuner Effect Monster', 'rgba(139, 98, 32, 0.3)'],
    ['Gemini Monster', 'rgba(139, 98, 32, 0.3)'],
    ['Normal Monster', 'rgba(237, 227, 213, 1)'],
    ['Normal Tuner Monster', 'rgba(237, 227, 213, 1)'],
    ['Pendulum Effect Monster', 'rgba(115, 131, 112, 1)'],
    ['Pendulum Flip Effect Monster', 'rgba(115, 131, 112 , 1)'],
    ['Pendulum Normal Monster', 'rgba(115, 131, 112 , 1)'],
    ['Pendulum Tuner Effect Monster', 'rgba(115, 131, 112 , 1)'],
    ['Ritual Effect Monster', 'rgba(200, 210, 234, 1)'],
    ['Ritual Monster', 'rgba(200, 210, 234 , 1)'],
    ['Skill Card', 'rgb(233, 219, 223)'],
    ['Spell Card', 'rgb(220, 234, 236)'],
    ['Spirit Monster', 'rgba(139, 98, 32, 0.3)'],
    ['Toon Monster', 'rgba(139, 98, 32, 0.3)'],
    ['Trap Card', 'rgb(233, 219, 223)'],
    ['Tuner Monster', 'rgba(139, 98, 32, 0.3)'],
    ['Union Effect Monster', 'rgba(139, 98, 32, 0.3)'],
    ['Fusion Monster', 'rgb(216 206 231)'],
    ['Link Monster', 'rgb(57 93 168)'],
    ['Pendulum Effect Fusion Monster', 'rgb(216 206 231)'],
    ['Synchro Monster', 'rgb(238 238 238)'],
    ['Synchro Pendulum Effect Monster', 'rgb(238 238 238)'],
    ['Synchro Tuner Monster', 'rgb(238 238 238)'],
    ['XYZ Monster', 'rgb(193 193 193)'],
    ['XYZ Pendulum Effect Monster', 'rgb(193 193 193)']
]);


/***/ }),

/***/ 1176:
/*!*********************************************************!*\
  !*** ./src/app/yu-gi-oh/collection/ydke-import-pojo.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YdkeImportPojo": () => (/* binding */ YdkeImportPojo)
/* harmony export */ });
class YdkeImportPojo {
    constructor(language, collectionImportPojos) {
        this.collectionImportPojos = [];
        this.language = language;
        this.collectionImportPojos = collectionImportPojos;
    }
}


/***/ }),

/***/ 1451:
/*!*******************************************************!*\
  !*** ./src/app/yu-gi-oh/combo-graph-two/card-node.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardNode": () => (/* binding */ CardNode)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ 9485);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

class CardNode {
    constructor(name, image, typeOfSummon, target) {
        this.children = [];
        this.brothers = []; // card needed beside a parent to create the child (ex: oviraptor would need a 4* card to XYZ summon a child)
        this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)();
        this.name = name;
        this.image = image;
        this.typeOfSummon = typeOfSummon;
        this.children = [];
        this.brothers = [];
        this.target = target;
    }
}


/***/ }),

/***/ 4532:
/*!**************************************************!*\
  !*** ./src/app/yu-gi-oh/combo-graph-two/card.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card)
/* harmony export */ });
class Card {
    constructor(apiId, name, image) {
        this.apiId = apiId;
        this.name = name;
        this.image = image;
    }
}


/***/ }),

/***/ 1078:
/*!***********************************************************************!*\
  !*** ./src/app/yu-gi-oh/combo-graph-two/combo-graph-two.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComboGraphTwoComponent": () => (/* binding */ ComboGraphTwoComponent)
/* harmony export */ });
/* harmony import */ var _card_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-node */ 1451);
/* harmony import */ var _type_of_summon_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type-of-summon.enum */ 6945);
/* harmony import */ var leader_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leader-line */ 7206);
/* harmony import */ var leader_line__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leader_line__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card */ 4532);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4350);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _yugioh_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../yugioh.service */ 5594);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 2156);











const _c0 = ["aaaaaa"];
function ComboGraphTwoComponent_div_2_div_1_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    const node_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", "data:image/jpg;base64," + node_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function ComboGraphTwoComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ComboGraphTwoComponent_div_2_div_1_img_2_Template, 1, 1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const node_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", node_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", node_r5.image);
} }
function ComboGraphTwoComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ComboGraphTwoComponent_div_2_div_1_Template, 3, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const isFirst_r3 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("margin-top", isFirst_r3 ? "0" : "4vh");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", row_r2);
} }
class ComboGraphTwoComponent {
    constructor(yugiohService) {
        this.yugiohService = yugiohService;
    }
    ngOnInit() {
        const insertIntoArray = (arr, value) => {
            return arr.reduce((result, element, index, array) => {
                result.push(element);
                if (index < array.length - 1) {
                    result.push(value);
                }
                return result;
            }, []);
        };
        const ovi = new _card__WEBPACK_IMPORTED_MODULE_3__.Card('44335251');
        const misc = new _card__WEBPACK_IMPORTED_MODULE_3__.Card('38572779');
        const archosaur = new _card__WEBPACK_IMPORTED_MODULE_3__.Card('98022050');
        const petite = new _card__WEBPACK_IMPORTED_MODULE_3__.Card('82946847');
        const doublePill = new _card__WEBPACK_IMPORTED_MODULE_3__.Card('38179121');
        const uct = new _card__WEBPACK_IMPORTED_MODULE_3__.Card('18940556');
        (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)([
            this.yugiohService.getCardById(petite.apiId),
            this.yugiohService.getCardById(ovi.apiId),
            this.yugiohService.getCardById(misc.apiId),
            this.yugiohService.getCardById(doublePill.apiId),
            this.yugiohService.getCardById(uct.apiId),
            this.yugiohService.getCardById(archosaur.apiId)
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((data) => {
            return data;
        })).subscribe(data => {
            const node1 = new _card_node__WEBPACK_IMPORTED_MODULE_0__.CardNode(data[1].name, data[1].image);
            const node2 = new _card_node__WEBPACK_IMPORTED_MODULE_0__.CardNode(data[2].name, data[2].image, _type_of_summon_enum__WEBPACK_IMPORTED_MODULE_1__.TypeOfSummon.SPECIAL);
            const node3 = new _card_node__WEBPACK_IMPORTED_MODULE_0__.CardNode(data[5].name, data[5].image, _type_of_summon_enum__WEBPACK_IMPORTED_MODULE_1__.TypeOfSummon.BANISH);
            const node4 = new _card_node__WEBPACK_IMPORTED_MODULE_0__.CardNode(data[3].name, data[3].image, _type_of_summon_enum__WEBPACK_IMPORTED_MODULE_1__.TypeOfSummon.DRAW);
            const node4Brother1 = new _card_node__WEBPACK_IMPORTED_MODULE_0__.CardNode(data[1].name, data[1].image);
            const node4Brother2 = new _card_node__WEBPACK_IMPORTED_MODULE_0__.CardNode(data[1].name, data[1].image);
            const node5 = new _card_node__WEBPACK_IMPORTED_MODULE_0__.CardNode(data[4].name, data[4].image, _type_of_summon_enum__WEBPACK_IMPORTED_MODULE_1__.TypeOfSummon.SPECIAL);
            node4Brother1.target = node5;
            node4Brother2.target = node5;
            this.addChild(node1, node2);
            this.addChild(node2, node3);
            this.addChild(node3, node4);
            this.addChild(node4, node5);
            this.addBrother(node4, node4Brother1);
            this.addBrother(node4, node4Brother2);
            this.flowchart = [[]];
            this.createFlowchart(node1, 0);
            // this.createHiddenNodesRow(1);
            this.flowchart = insertIntoArray(this.flowchart, []);
            console.log(this.flowchart);
            this.createHiddenNodes(1);
            this.drawFlowChartArrows();
            console.log(this.flowchart);
        }, err => {
            console.error(err);
        });
    }
    createFlowchart(node, rowIndex) {
        console.log(this.flowchart.length);
        if (rowIndex === this.flowchart.length) {
            this.flowchart.push([node].concat(node.brothers));
        }
        else {
            this.flowchart[rowIndex].push(node);
            node.brothers.forEach(value => this.flowchart[rowIndex].push(value));
        }
        if (Array.isArray(node.children) && node.children.length) {
            rowIndex += 1;
            for (const childNode of node.children) {
                //rowIndex = this.handleBrothers(node, rowIndex);
                this.createFlowchart(childNode, rowIndex);
                //this.drawArrow(node, childNode);
            }
        }
    }
    createHiddenNodesRow(rowIndex) {
        console.log('creating nodes rows');
        if (rowIndex % 2 === 0 || rowIndex > this.flowchart.length - 2) {
            return;
        }
        this.flowchart.splice(rowIndex, 0, []); // Create a new row for hidden nodes
        this.createHiddenNodesRow(rowIndex + 2);
    }
    createHiddenNodes(rowIndex) {
        // -1 because the last row doesn't need hidden nodes
        // rowIndex % 2 === 0 because the hidden row has only odd index because the first one is always a normal row
        if (rowIndex % 2 === 0 || rowIndex >= this.flowchart.length - 1) {
            return;
        }
        console.log('creating nodes for row ' + rowIndex);
        const hiddenNodes = [];
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.flowchart[rowIndex - 1].length; i++) { // there is as much hidden nodes as node on the row on top of it
            const nodeOnTop = this.flowchart[rowIndex - 1][i]; // It is the node right on top of the fake node so the "parent" of the fake node
            const hiddenNode = new _card_node__WEBPACK_IMPORTED_MODULE_0__.CardNode();
            console.log(nodeOnTop);
            hiddenNode.fakeNode = true;
            if (Array.isArray(nodeOnTop.brothers) && nodeOnTop.brothers.length) { // If the parent has brothers then we need to fuse arrows
                console.log('assigning new target on fake nodes');
                // We get the child node impacted by looking for the node which has the same id as the one in the brothers of the nodeOnTop
                const childImpactedByArrowFusion = this.flowchart[rowIndex + 1].find(child => child.id === nodeOnTop.brothers[0].target.id);
                // set the target for hidden node
                hiddenNode.target = childImpactedByArrowFusion;
                // Replace the arrow destination of parent and brothers from the child to the hidden cardNode to fuse the arrows
                nodeOnTop.brothers.forEach(node => node.target = hiddenNode);
                console.log('child');
                console.log(childImpactedByArrowFusion);
                const childToChangeForNodeOnTopIndex = nodeOnTop.children.findIndex(child => child === hiddenNode.target);
                nodeOnTop.children[childToChangeForNodeOnTopIndex] = hiddenNode;
            }
            hiddenNodes.push(hiddenNode);
        }
        this.flowchart[rowIndex] = hiddenNodes;
        this.createHiddenNodes(rowIndex + 2); //
    }
    drawFlowChartArrows() {
        this.flowchart.forEach(row => {
            row.forEach(node => {
                if (node.target) {
                    if (node.target.fakeNode) {
                        this.drawLineWithBottomSocket(node, node.target, false, 'disc');
                    }
                    else {
                        this.drawArrowWithStartLabel(node, node.target);
                    }
                }
                if (Array.isArray(node.children) && node.children.length) {
                    for (const child of node.children) {
                        if (child.fakeNode) {
                            this.drawLine(node, child, false, 'disc');
                        }
                        else {
                            this.drawArrow(node, child);
                        }
                    }
                }
                if (Array.isArray(node.brothers) && node.brothers.length) {
                    for (const brother of node.brothers) { // TODO : fix issue of arrow overlapping if multiple brothers (z-index probably)
                        this.drawLine(node, brother, false, 'behind');
                    }
                }
            });
        });
    }
    drawArrow(parent, child) {
        setTimeout(() => {
            const a = new LeaderLine(document.getElementById(parent.id), document.getElementById(child.id), {
                middleLabel: _type_of_summon_enum__WEBPACK_IMPORTED_MODULE_1__.TypeOfSummon[child.typeOfSummon],
                path: 'magnet',
                startSocket: 'bottom',
                endSocket: 'top'
            });
        }, 200);
    }
    drawLine(parent, child, showLabel, endPlug, startSocket) {
        setTimeout(() => {
            const a = new LeaderLine(document.getElementById(parent.id), document.getElementById(child.id), {
                middleLabel: showLabel ? _type_of_summon_enum__WEBPACK_IMPORTED_MODULE_1__.TypeOfSummon[child.typeOfSummon] : '',
                endPlug: endPlug ? endPlug : 'behind',
                path: 'magnet'
            });
        }, 200);
    }
    drawLineWithBottomSocket(parent, child, showLabel, endPlug) {
        setTimeout(() => {
            const a = new LeaderLine(document.getElementById(parent.id), document.getElementById(child.id), {
                middleLabel: showLabel ? _type_of_summon_enum__WEBPACK_IMPORTED_MODULE_1__.TypeOfSummon[child.typeOfSummon] : '',
                endPlug: endPlug ? endPlug : 'behind',
                path: 'magnet',
                startSocket: 'bottom'
            });
        }, 200);
    }
    drawArrowWithStartLabel(parent, child) {
        setTimeout(() => {
            const a = new LeaderLine(document.getElementById(parent.id), document.getElementById(child.id), {
                middleLabel: _type_of_summon_enum__WEBPACK_IMPORTED_MODULE_1__.TypeOfSummon[child.typeOfSummon],
                path: 'magnet'
            });
        }, 200);
    }
    addChild(parent, child) {
        if (parent.children === null) {
            parent.children = [];
        }
        parent.children.push(child);
    }
    addBrother(parent, brother) {
        if (parent.brothers === null) {
            parent.brothers = [];
        }
        parent.brothers.push(brother);
    }
}
ComboGraphTwoComponent.ɵfac = function ComboGraphTwoComponent_Factory(t) { return new (t || ComboGraphTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_yugioh_service__WEBPACK_IMPORTED_MODULE_4__.YugiohService)); };
ComboGraphTwoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ComboGraphTwoComponent, selectors: [["app-combo-graph-two"]], viewQuery: function ComboGraphTwoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.divs = _t);
    } }, decls: 3, vars: 1, consts: [[2, "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center"], ["aaaaaa", ""], ["style", "display: flex; align-items: center; max-width: 70vw;", 3, "margin-top", 4, "ngFor", "ngForOf"], [2, "display", "flex", "align-items", "center", "max-width", "70vw"], [4, "ngFor", "ngForOf"], [1, "example-card", 3, "id"], ["height", "267", "width", "186", "mat-card-image", "", "alt", "card picture", 3, "src", 4, "ngIf"], ["height", "267", "width", "186", "mat-card-image", "", "alt", "card picture", 3, "src"]], template: function ComboGraphTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ComboGraphTwoComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.flowchart);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardImage], styles: [".example-card[_ngcontent-%COMP%] {\n  background-color: #3b3b3b;\n  color: white;\n  margin: 10px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWJvLWdyYXBoLXR3by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtBQUNGIiwiZmlsZSI6ImNvbWJvLWdyYXBoLXR3by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjNiM2I7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 6945:
/*!*****************************************************************!*\
  !*** ./src/app/yu-gi-oh/combo-graph-two/type-of-summon.enum.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeOfSummon": () => (/* binding */ TypeOfSummon)
/* harmony export */ });
var TypeOfSummon;
(function (TypeOfSummon) {
    TypeOfSummon[TypeOfSummon["NORMAL"] = 0] = "NORMAL";
    TypeOfSummon[TypeOfSummon["SPECIAL"] = 1] = "SPECIAL";
    TypeOfSummon[TypeOfSummon["XYZ"] = 2] = "XYZ";
    TypeOfSummon[TypeOfSummon["SYNCHRO"] = 3] = "SYNCHRO";
    TypeOfSummon[TypeOfSummon["LINK"] = 4] = "LINK";
    TypeOfSummon[TypeOfSummon["RITUAL"] = 5] = "RITUAL";
    TypeOfSummon[TypeOfSummon["DRAW"] = 6] = "DRAW";
    TypeOfSummon[TypeOfSummon["BANISH"] = 7] = "BANISH";
    TypeOfSummon[TypeOfSummon["SEND_TO_GRAVEYARD"] = 8] = "SEND_TO_GRAVEYARD";
})(TypeOfSummon || (TypeOfSummon = {}));


/***/ }),

/***/ 5594:
/*!***********************************!*\
  !*** ./src/app/yugioh.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YugiohService": () => (/* binding */ YugiohService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ 7266);
/* harmony import */ var _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sort-dialog/card-sort */ 6202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class YugiohService {
    constructor(http) {
        this.http = http;
    }
    getCardById(apiId) {
        return this.http.get(_global__WEBPACK_IMPORTED_MODULE_0__.backendUrl + '/cards/' + apiId, { headers: _global__WEBPACK_IMPORTED_MODULE_0__.httpOptions.headers });
    }
    getCardPriceById(apiId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams()
            .set('id', apiId);
        return this.http.get(_global__WEBPACK_IMPORTED_MODULE_0__.ygoproApiUrl, { params, headers: _global__WEBPACK_IMPORTED_MODULE_0__.httpOptions.headers });
    }
    getCardsPriceById(apiIds) {
        console.log(apiIds);
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams()
            .set('id', apiIds.join(','));
        return this.http.get(_global__WEBPACK_IMPORTED_MODULE_0__.ygoproApiUrl, { params, headers: _global__WEBPACK_IMPORTED_MODULE_0__.httpOptions.headers });
    }
    getCardsbyName(filter = '') {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams()
            .set('filter', filter);
        return this.http.post(_global__WEBPACK_IMPORTED_MODULE_0__.backendUrl + '/cards', {}, { params, headers: _global__WEBPACK_IMPORTED_MODULE_0__.httpOptions.headers });
    }
    getCardsPaginated(pageIndex, pageSize, sort, filter = '', filters) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('pageSize', String(pageSize))
            .set('pageIndex', String(pageIndex)).set('filter', filter).set('sort', _sort_dialog_card_sort__WEBPACK_IMPORTED_MODULE_1__.CardSort[sort]);
        return this.http.post(_global__WEBPACK_IMPORTED_MODULE_0__.backendUrl + '/cards', filters, { params, headers: _global__WEBPACK_IMPORTED_MODULE_0__.httpOptions.headers, observe: 'response' });
    }
    getCardbyName(name) {
        return this.http.get(_global__WEBPACK_IMPORTED_MODULE_0__.backendUrl + '/cards/name/' + name, { headers: _global__WEBPACK_IMPORTED_MODULE_0__.httpOptions.headers });
    }
    findCardsInCollection(collectionsItems) {
        return this.http.post(_global__WEBPACK_IMPORTED_MODULE_0__.backendUrl + '/findCardsInCollection', collectionsItems, { headers: _global__WEBPACK_IMPORTED_MODULE_0__.httpOptions.headers });
    }
    getCardsByApiId(apidId) {
        return this.http.get(_global__WEBPACK_IMPORTED_MODULE_0__.backendUrl + '/cards/apiId/' + apidId, { headers: _global__WEBPACK_IMPORTED_MODULE_0__.httpOptions.headers });
    }
    getCardsBySet(set) {
        return this.http.get(_global__WEBPACK_IMPORTED_MODULE_0__.backendUrl + '/cards/set/' + set, { headers: _global__WEBPACK_IMPORTED_MODULE_0__.httpOptions.headers });
    }
    getSets() {
        return this.http.get(_global__WEBPACK_IMPORTED_MODULE_0__.backendUrl + '/sets', { headers: _global__WEBPACK_IMPORTED_MODULE_0__.httpOptions.headers });
    }
    getCollections(filter, collectionType) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        if (filter) {
            params = params.set('filter', filter);
        }
        if (collectionType) {
            params = params.set('collectionType', collectionType);
        }
        return this.http.get(_global__WEBPACK_IMPORTED_MODULE_0__.backendUrl + '/collections', { params, headers: _global__WEBPACK_IMPORTED_MODULE_0__.httpOptions.headers });
    }
    getCollectionsFull() {
        return this.http.get(_global__WEBPACK_IMPORTED_MODULE_0__.backendUrl + '/collections/full', { headers: _global__WEBPACK_IMPORTED_MODULE_0__.httpOptions.headers });
    }
    removeCollectionById(id) {
        return this.http.delete(_global__WEBPACK_IMPORTED_MODULE_0__.backendUrl + '/collections/' + id, { headers: _global__WEBPACK_IMPORTED_MODULE_0__.httpOptions.headers });
    }
    getCollectionById(id) {
        return this.http.get(_global__WEBPACK_IMPORTED_MODULE_0__.backendUrl + '/collections/' + id, { headers: _global__WEBPACK_IMPORTED_MODULE_0__.httpOptions.headers });
    }
    getCollectionsByCreator(createdBy) {
        return this.http.get(_global__WEBPACK_IMPORTED_MODULE_0__.backendUrl + '/collections/by-creator/' + createdBy, { headers: _global__WEBPACK_IMPORTED_MODULE_0__.httpOptions.headers });
    }
    addOrUpdateCollectionLight(collection) {
        return this.http.post(_global__WEBPACK_IMPORTED_MODULE_0__.backendUrl + '/collections/light', collection, { headers: _global__WEBPACK_IMPORTED_MODULE_0__.httpOptions.headers });
    }
    addOrUpdateCollection(collection) {
        return this.http.post(_global__WEBPACK_IMPORTED_MODULE_0__.backendUrl + '/collections', collection, { headers: _global__WEBPACK_IMPORTED_MODULE_0__.httpOptions.headers });
    }
    importCollection(id, collectionPojos) {
        return this.http.post(_global__WEBPACK_IMPORTED_MODULE_0__.backendUrl + '/collections/' + id + '/import', collectionPojos, { headers: _global__WEBPACK_IMPORTED_MODULE_0__.httpOptions.headers });
    }
    importCollectionYdke(id, collectionPojos, language) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('language', language);
        return this.http.post(_global__WEBPACK_IMPORTED_MODULE_0__.backendUrl + '/collections/' + id + '/importYdke', collectionPojos, { params, headers: _global__WEBPACK_IMPORTED_MODULE_0__.httpOptions.headers });
    }
    importCollectionBySet(id, setCode, language) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('language', language);
        return this.http.post(_global__WEBPACK_IMPORTED_MODULE_0__.backendUrl + '/collections/' + id + '/import/' + setCode, {}, { params, headers: _global__WEBPACK_IMPORTED_MODULE_0__.httpOptions.headers });
    }
    getArchetypes() {
        return this.http.get(_global__WEBPACK_IMPORTED_MODULE_0__.backendUrl + '/archetypes', { headers: _global__WEBPACK_IMPORTED_MODULE_0__.httpOptions.headers });
    }
}
YugiohService.ɵfac = function YugiohService_Factory(t) { return new (t || YugiohService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
YugiohService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: YugiohService, factory: YugiohService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map