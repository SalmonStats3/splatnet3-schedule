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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizeService = void 0;
const common_1 = require("@nestjs/common");
const bullet_tokens_service_1 = require("../bullet_tokens/bullet_tokens.service");
const bullet_tokens_1 = require("../dto/bullet_tokens");
const imink_1 = require("../dto/imink");
const splatoon_access_token_1 = require("../dto/splatoon_access_token");
const splatoon_token_1 = require("../dto/splatoon_token");
const f_service_1 = require("../f/f.service");
const schedules_service_1 = require("../schedules/schedules.service");
const splatoon_access_token_service_1 = require("../splatoon_access_token/splatoon_access_token.service");
const splatoon_token_service_1 = require("../splatoon_token/splatoon_token.service");
const token_service_1 = require("../token/token.service");
let AuthorizeService = class AuthorizeService {
    constructor(f, token, service, game, bullet, schedule) {
        this.f = f;
        this.token = token;
        this.service = service;
        this.game = game;
        this.bullet = bullet;
        this.schedule = schedule;
    }
    async update(request) {
        const web_version = '2.0.0-18810d39';
        try {
            const bullet_token = await (await this.authorize(request)).bulletToken;
            await this.schedule.get_schedules(bullet_token, web_version);
        }
        catch (error) {
            throw new common_1.UnauthorizedException();
        }
    }
    async authorize(request) {
        const version = '2.4.0';
        const web_version = '2.0.0-18810d39';
        const access_token = await (await this.token.get_access_token(request)).access_token;
        const imink_nso = await this.f.get_imink(new imink_1.IminkRequest(imink_1.IminkType.NSO, access_token));
        const splatoon_token = (await this.service.get_splatoon_token(new splatoon_token_1.SplatoonTokenRequest(imink_nso, version, access_token))).result.webApiServerCredential.accessToken;
        const imink_app = await this.f.get_imink(new imink_1.IminkRequest(imink_1.IminkType.APP, splatoon_token));
        const splatoon_access_token = (await this.game.splatoon_access_token(new splatoon_access_token_1.SplatoonAccessTokenRequest(imink_app, version, splatoon_token))).result.accessToken;
        return await this.bullet.get_bullet_tokens(new bullet_tokens_1.BulletTokenRequest(splatoon_access_token, web_version));
    }
};
AuthorizeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [f_service_1.FService,
        token_service_1.TokenService,
        splatoon_token_service_1.SplatoonTokenService,
        splatoon_access_token_service_1.SplatoonAccessTokenService,
        bullet_tokens_service_1.BulletTokensService,
        schedules_service_1.SchedulesService])
], AuthorizeService);
exports.AuthorizeService = AuthorizeService;
//# sourceMappingURL=authorize.service.js.map