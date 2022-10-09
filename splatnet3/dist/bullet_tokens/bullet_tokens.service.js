"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulletTokensService = void 0;
const common_1 = require("@nestjs/common");
const bullet_tokens_1 = require("../dto/bullet_tokens");
const axios_1 = require("axios");
const class_transformer_1 = require("class-transformer");
let BulletTokensService = class BulletTokensService {
    async get_bullet_tokens(request) {
        const url = 'https://api.lp1.av5ja.srv.nintendo.net/api/bullet_tokens';
        const headers = {
            'X-Web-View-Ver': request['X-Web-View-Ver'],
            'X-NaCountry': request['X-NaCountry'],
            'X-GameWebToken': request['X-GameWebToken'],
        };
        try {
            const response = await axios_1.default.post(url, null, { headers: headers });
            const status_code = response.status;
            switch (status_code) {
                case 201:
                    return (0, class_transformer_1.plainToClass)(bullet_tokens_1.BulletTokenResponse, response.data);
                default:
                    throw new common_1.HttpException(response.data, status_code);
            }
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
};
BulletTokensService = __decorate([
    (0, common_1.Injectable)()
], BulletTokensService);
exports.BulletTokensService = BulletTokensService;
//# sourceMappingURL=bullet_tokens.service.js.map