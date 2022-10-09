"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionTokenService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const axios_1 = require("axios");
const session_token_1 = require("../dto/session_token");
let SessionTokenService = class SessionTokenService {
    async get_session_token(request) {
        const url = 'https://accounts.nintendo.com/connect/1.0.0/api/session_token';
        const parameters = new URLSearchParams();
        parameters.append('client_id', '71b963c1b7b6d119');
        parameters.append('session_token_code', request.session_token_code);
        parameters.append('session_token_code_verifier', request.session_token_code_verifier);
        try {
            const response = await axios_1.default.post(url, parameters);
            return (0, class_transformer_1.plainToClass)(session_token_1.SessionTokenResponse, response.data);
        }
        catch (error) {
            throw new common_1.HttpException(error.response.data, error.response.status);
        }
    }
};
SessionTokenService = __decorate([
    (0, common_1.Injectable)()
], SessionTokenService);
exports.SessionTokenService = SessionTokenService;
//# sourceMappingURL=session_token.service.js.map