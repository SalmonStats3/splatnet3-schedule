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
exports.BulletTokenResponse = exports.BulletTokenRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
class BulletTokenRequest {
    constructor(splatoon_access_token, version) {
        this['X-GameWebToken'] = splatoon_access_token;
        this['X-Web-View-Ver'] = version;
        this['X-NaCountry'] = 'US';
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '1.0.0-42f70e51' }),
    __metadata("design:type", String)
], BulletTokenRequest.prototype, "X-Web-View-Ver", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'US' }),
    __metadata("design:type", String)
], BulletTokenRequest.prototype, "X-NaCountry", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IkpWenU0Z19FX2g3T2tHM1hldXRDS21saFkyUSIsImprdSI6Imh0dHBzOi8vYXBpLWxwMS56bmMuc3J2Lm5pbnRlbmRvLm5ldC92MS9XZWJTZXJ2aWNlL0NlcnRpZmljYXRlL0xpc3QifQ.eyJpc0NoaWxkUmVzdHJpY3RlZCI6ZmFsc2UsImF1ZCI6IjY2MzM2NzcyOTE1NTI3NjgiLCJleHAiOjE2NjUzMzk5ODAsImlhdCI6MTY2NTMxNjU4MCwiaXNzIjoiYXBpLWxwMS56bmMuc3J2Lm5pbnRlbmRvLm5ldCIsImp0aSI6IjI5NDNjYmMxLTJhMzMtNDg2NC04MDk3LTZlMjQ5YzllZjZiOSIsInN1YiI6NTE0NDgwNzEyNzQxNjgzMiwibGlua3MiOnsibmV0d29ya1NlcnZpY2VBY2NvdW50Ijp7ImlkIjoiNTNiNDg0ZDI5ZDllNjdkMSJ9fSwidHlwIjoiaWRfdG9rZW4iLCJtZW1iZXJzaGlwIjp7ImFjdGl2ZSI6dHJ1ZX19.cv_txkPBttwpZkur5L8sZnldZuvysS9qiNVa9hyEbFAw5LsgH5JCP09uYaKnyHN7eMECSP4CbrgVq9FlT_j48owqFHDTf6oKK4WxB0_dOS8CKuvHiCQa29t6e6wYClECcQ2yKl9z71WsO28zzKI7Dq-k5SM8Di0c2_kbKdG3GfUUZawAKZL2oW6WVLkCqel829mT5kJKg2mfW26rSVz_z4sJ3u6FJLzxvXcPWZFt-yQOALdAqa1bu7_sS-Y2a1c7QprKMmFUybXYHD_sos4CxSIfF8OxcqqBx22VQI8VatifCjvy37cNRV9Bs31xdrUrccJz7x5LL202ShLtTYmu8A',
    }),
    __metadata("design:type", String)
], BulletTokenRequest.prototype, "X-GameWebToken", void 0);
exports.BulletTokenRequest = BulletTokenRequest;
class BulletTokenResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '' }),
    __metadata("design:type", String)
], BulletTokenResponse.prototype, "bulletToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'US' }),
    __metadata("design:type", String)
], BulletTokenResponse.prototype, "lang", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: false }),
    __metadata("design:type", Boolean)
], BulletTokenResponse.prototype, "isNoeCountry", void 0);
exports.BulletTokenResponse = BulletTokenResponse;
//# sourceMappingURL=bullet_tokens.js.map