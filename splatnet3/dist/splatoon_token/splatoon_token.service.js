"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplatoonTokenService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const class_transformer_1 = require("class-transformer");
const splatoon_token_1 = require("../dto/splatoon_token");
let SplatoonTokenService = class SplatoonTokenService {
    async get_splatoon_token(request) {
        const version = '2.3.1';
        const url = 'https://api-lp1.znc.srv.nintendo.net/v3/Account/Login';
        const headers = {
            'X-ProductVersion': version,
            'X-Platform': 'Android',
        };
        const parameters = {
            parameter: {
                f: request.f,
                language: 'en-GB',
                naBirthday: '1990-01-01',
                naCountry: 'US',
                naIdToken: request.naIdToken,
                requestId: request.request_id,
                timestamp: request.timestamp,
            },
            requestId: request.request_id,
        };
        try {
            const response = await axios_1.default.post(url, parameters, { headers: headers });
            const status_code = response.data.status;
            switch (status_code) {
                case 0:
                    return (0, class_transformer_1.plainToClass)(splatoon_token_1.SplatoonTokenResponse, response.data);
                default:
                    throw new common_1.HttpException(response.data, status_code - 9000);
            }
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
};
SplatoonTokenService = __decorate([
    (0, common_1.Injectable)()
], SplatoonTokenService);
exports.SplatoonTokenService = SplatoonTokenService;
//# sourceMappingURL=splatoon_token.service.js.map