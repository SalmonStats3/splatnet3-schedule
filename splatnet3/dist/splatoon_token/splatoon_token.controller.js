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
exports.SplatoonTokenController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const splatoon_token_1 = require("../dto/splatoon_token");
const splatoon_token_service_1 = require("./splatoon_token.service");
let SplatoonTokenController = class SplatoonTokenController {
    constructor(service) {
        this.service = service;
    }
    session_token(request) {
        return this.service.get_splatoon_token(request);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiTags)(),
    (0, swagger_1.ApiOperation)({ operationId: 'スプラトゥーントークン' }),
    (0, swagger_1.ApiOkResponse)(),
    (0, swagger_1.ApiBadRequestResponse)(),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [splatoon_token_1.SplatoonTokenRequest]),
    __metadata("design:returntype", Promise)
], SplatoonTokenController.prototype, "session_token", null);
SplatoonTokenController = __decorate([
    (0, common_1.Controller)('splatoon_token'),
    __metadata("design:paramtypes", [splatoon_token_service_1.SplatoonTokenService])
], SplatoonTokenController);
exports.SplatoonTokenController = SplatoonTokenController;
//# sourceMappingURL=splatoon_token.controller.js.map