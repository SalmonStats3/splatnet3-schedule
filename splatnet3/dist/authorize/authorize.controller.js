"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const access_token_1 = require("../dto/access_token");
const authorize_service_1 = require("./authorize.service");
let AuthorizeController = class AuthorizeController {
    constructor(service) {
        this.service = service;
    }
    authorize(request) {
        return this.service.authorize(request);
    }
    update(request) {
        return this.service.update(request);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiTags)('認証'),
    (0, swagger_1.ApiOperation)({ operationId: 'ログイン' }),
    (0, swagger_1.ApiOkResponse)(),
    (0, swagger_1.ApiBadRequestResponse)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [access_token_1.AccessTokenRequest]),
    __metadata("design:returntype", Promise)
], AuthorizeController.prototype, "authorize", null);
__decorate([
    (0, common_1.Post)('update'),
    (0, swagger_1.ApiTags)('認証'),
    (0, swagger_1.ApiOperation)({ operationId: 'スケジュール自動追加' }),
    (0, swagger_1.ApiOkResponse)(),
    (0, swagger_1.ApiBadRequestResponse)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [access_token_1.AccessTokenRequest]),
    __metadata("design:returntype", Promise)
], AuthorizeController.prototype, "update", null);
AuthorizeController = __decorate([
    (0, common_1.Controller)('authorize'),
    __metadata("design:paramtypes", [authorize_service_1.AuthorizeService])
], AuthorizeController);
exports.AuthorizeController = AuthorizeController;
//# sourceMappingURL=authorize.controller.js.map