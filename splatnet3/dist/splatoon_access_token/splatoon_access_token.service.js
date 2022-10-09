"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplatoonAccessTokenService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const axios_1 = require("axios");
const splatoon_access_token_1 = require("../dto/splatoon_access_token");
let SplatoonAccessTokenService = class SplatoonAccessTokenService {
    async splatoon_access_token(request) {
        const url = 'https://api-lp1.znc.srv.nintendo.net/v2/Game/GetWebServiceToken';
        const headers = {
            'X-ProductVersion': request.version,
            'X-Platform': 'Android',
            Authorization: `Bearer ${request.naIdToken}`,
        };
        const parameters = {
            parameter: {
                f: request.f,
                id: 4834290508791808,
                registrationToken: request.naIdToken,
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
                    return (0, class_transformer_1.plainToClass)(splatoon_access_token_1.SplatoonAccessTokenResponse, response.data);
                default:
                    throw new common_1.HttpException(response.data, status_code - 9000);
            }
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
};
SplatoonAccessTokenService = __decorate([
    (0, common_1.Injectable)()
], SplatoonAccessTokenService);
exports.SplatoonAccessTokenService = SplatoonAccessTokenService;
//# sourceMappingURL=splatoon_access_token.service.js.map