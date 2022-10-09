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
exports.SessionTokenController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const session_token_1 = require("../dto/session_token");
const session_token_service_1 = require("./session_token.service");
let SessionTokenController = class SessionTokenController {
    constructor(service) {
        this.service = service;
    }
    session_token(request) {
        return this.service.get_session_token(request);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiTags)(),
    (0, swagger_1.ApiOperation)({ operationId: 'セッショントークン' }),
    (0, swagger_1.ApiOkResponse)(),
    (0, swagger_1.ApiBadRequestResponse)(),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [session_token_1.SessionTokenRequest]),
    __metadata("design:returntype", Promise)
], SessionTokenController.prototype, "session_token", null);
SessionTokenController = __decorate([
    (0, common_1.Controller)('session_token'),
    __metadata("design:paramtypes", [session_token_service_1.SessionTokenService])
], SessionTokenController);
exports.SessionTokenController = SessionTokenController;
//# sourceMappingURL=session_token.controller.js.map