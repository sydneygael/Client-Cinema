"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var main_service_1 = require('./main.service');
var RealisateurService = (function (_super) {
    __extends(RealisateurService, _super);
    function RealisateurService(http) {
        _super.call(this, http);
        this.baseUrl = this.baseUrl + "realisateurs";
    }
    RealisateurService.prototype.getRealisateurs = function () {
        return this.http.get(this.baseUrl).map(function (response) { return response.json().realisateur; });
    };
    RealisateurService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RealisateurService);
    return RealisateurService;
}(main_service_1.MainService));
exports.RealisateurService = RealisateurService;
//# sourceMappingURL=realisateur.service.js.map