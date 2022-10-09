"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const token_controller_1 = require("./token/token.controller");
const splatoon_token_controller_1 = require("./splatoon_token/splatoon_token.controller");
const splatoon_access_token_controller_1 = require("./splatoon_access_token/splatoon_access_token.controller");
const bullet_tokens_controller_1 = require("./bullet_tokens/bullet_tokens.controller");
const session_token_controller_1 = require("./session_token/session_token.controller");
const session_token_service_1 = require("./session_token/session_token.service");
const token_service_1 = require("./token/token.service");
const splatoon_token_service_1 = require("./splatoon_token/splatoon_token.service");
const splatoon_access_token_service_1 = require("./splatoon_access_token/splatoon_access_token.service");
const f_controller_1 = require("./f/f.controller");
const f_service_1 = require("./f/f.service");
const bullet_tokens_service_1 = require("./bullet_tokens/bullet_tokens.service");
const schedules_controller_1 = require("./schedules/schedules.controller");
const schedules_service_1 = require("./schedules/schedules.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [
            app_controller_1.AppController,
            token_controller_1.TokenController,
            splatoon_token_controller_1.SplatoonTokenController,
            splatoon_access_token_controller_1.SplatoonAccessTokenController,
            bullet_tokens_controller_1.BulletTokensController,
            session_token_controller_1.SessionTokenController,
            f_controller_1.FController,
            schedules_controller_1.SchedulesController,
        ],
        providers: [
            app_service_1.AppService,
            session_token_service_1.SessionTokenService,
            token_service_1.TokenService,
            splatoon_token_service_1.SplatoonTokenService,
            splatoon_access_token_service_1.SplatoonAccessTokenService,
            f_service_1.FService,
            bullet_tokens_service_1.BulletTokensService,
            schedules_service_1.SchedulesService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map