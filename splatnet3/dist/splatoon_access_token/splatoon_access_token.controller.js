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
exports.SplatoonAccessTokenController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const splatoon_access_token_1 = require("../dto/splatoon_access_token");
const splatoon_access_token_service_1 = require("./splatoon_access_token.service");
let SplatoonAccessTokenController = class SplatoonAccessTokenController {
    constructor(service) {
        this.service = service;
    }
    async get_splatoon_access_token(request) {
        return this.service.splatoon_access_token(request);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiTags)(),
    (0, swagger_1.ApiOperation)({ operationId: 'スプラトゥーンアクセストークン' }),
    (0, swagger_1.ApiOkResponse)(),
    (0, swagger_1.ApiBadRequestResponse)(),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [splatoon_access_token_1.SplatoonAccessTokenRequest]),
    __metadata("design:returntype", Promise)
], SplatoonAccessTokenController.prototype, "get_splatoon_access_token", null);
SplatoonAccessTokenController = __decorate([
    (0, common_1.Controller)('splatoon_access_token'),
    __metadata("design:paramtypes", [splatoon_access_token_service_1.SplatoonAccessTokenService])
], SplatoonAccessTokenController);
exports.SplatoonAccessTokenController = SplatoonAccessTokenController;
//# sourceMappingURL=splatoon_access_token.controller.js.map