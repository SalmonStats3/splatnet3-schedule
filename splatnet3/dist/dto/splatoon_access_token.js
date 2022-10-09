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
exports.SplatoonAccessTokenResponse = exports.SplatoonAccessTokenResult = exports.SplatoonAccessTokenRequest = exports.SplatoonAccessTokenUpgradeRequired = exports.SplatoonAccessTokenUnauthorized = exports.SplatoonAccessTokenInvalidToken = exports.SplatoonAccessTokenNoResources = exports.SplatoonAccessTokenBadRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class SplatoonAccessTokenBadRequest {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 9400 }),
    __metadata("design:type", Number)
], SplatoonAccessTokenBadRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Bad request.' }),
    __metadata("design:type", String)
], SplatoonAccessTokenBadRequest.prototype, "errorMessage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '33f960d7-324c66c2' }),
    __metadata("design:type", String)
], SplatoonAccessTokenBadRequest.prototype, "correlationId", void 0);
exports.SplatoonAccessTokenBadRequest = SplatoonAccessTokenBadRequest;
class SplatoonAccessTokenNoResources {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 9402 }),
    __metadata("design:type", Number)
], SplatoonAccessTokenNoResources.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Resource not found.' }),
    __metadata("design:type", String)
], SplatoonAccessTokenNoResources.prototype, "errorMessage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '33f960d7-324c66c2' }),
    __metadata("design:type", String)
], SplatoonAccessTokenNoResources.prototype, "correlationId", void 0);
exports.SplatoonAccessTokenNoResources = SplatoonAccessTokenNoResources;
class SplatoonAccessTokenInvalidToken {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 9403 }),
    __metadata("design:type", Number)
], SplatoonAccessTokenInvalidToken.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Invalid token.' }),
    __metadata("design:type", String)
], SplatoonAccessTokenInvalidToken.prototype, "errorMessage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '33f960d7-324c66c2' }),
    __metadata("design:type", String)
], SplatoonAccessTokenInvalidToken.prototype, "correlationId", void 0);
exports.SplatoonAccessTokenInvalidToken = SplatoonAccessTokenInvalidToken;
class SplatoonAccessTokenUnauthorized {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 9406 }),
    __metadata("design:type", Number)
], SplatoonAccessTokenUnauthorized.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Unauthorized.' }),
    __metadata("design:type", String)
], SplatoonAccessTokenUnauthorized.prototype, "errorMessage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '33f960d7-324c66c2' }),
    __metadata("design:type", String)
], SplatoonAccessTokenUnauthorized.prototype, "correlationId", void 0);
exports.SplatoonAccessTokenUnauthorized = SplatoonAccessTokenUnauthorized;
class SplatoonAccessTokenUpgradeRequired {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 9427 }),
    __metadata("design:type", Number)
], SplatoonAccessTokenUpgradeRequired.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Upgrade required.' }),
    __metadata("design:type", String)
], SplatoonAccessTokenUpgradeRequired.prototype, "errorMessage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '33f960d7-324c66c2' }),
    __metadata("design:type", String)
], SplatoonAccessTokenUpgradeRequired.prototype, "correlationId", void 0);
exports.SplatoonAccessTokenUpgradeRequired = SplatoonAccessTokenUpgradeRequired;
class SplatoonAccessTokenRequest {
    constructor(imink, version, naIdToken) {
        this.version = version;
        this.f = imink.f;
        this.request_id = imink.request_id;
        this.timestamp = imink.timestamp;
        this.naIdToken = naIdToken;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2.3.1',
    }),
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SplatoonAccessTokenRequest.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'fK0khI0DhU8KmMKxX6oixI:APA91bEcKhiHi4acYjs495cIih46knhphM1SEUJo7eBu4cCPXfBSK82XnpnDkCrowl9DWN8v7hqwN2eDnFaclhnOyUKE7N1YXtwtps4ES7oQPMQmFqb86NK_V0hblS2ojYoDpSOa7mOD',
    }),
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SplatoonAccessTokenRequest.prototype, "naIdToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '9e4e5b2e13f46e399adb5f390fd95b2b78de7e3d7e886633f8d16c479382d5e5d44caca68bc19351fe1d0b69c7',
    }),
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SplatoonAccessTokenRequest.prototype, "f", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '00000000-0000-0000-0000-000000000000',
    }),
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SplatoonAccessTokenRequest.prototype, "request_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], SplatoonAccessTokenRequest.prototype, "timestamp", void 0);
exports.SplatoonAccessTokenRequest = SplatoonAccessTokenRequest;
class SplatoonAccessTokenResult {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImI3ZXhudVJhTG05SlpaRWxHMEl5RExnMGk1MCIsImprdSI6Imh0dHBzOi8vYXBpLWxwMS56bmMuc3J2Lm5pbnRlbmRvLm5ldC92MS9XZWJTZXJ2aWNlL0NlcnRpZmljYXRlL0xpc3QifQ.eyJpc0NoaWxkUmVzdHJpY3RlZCI6ZmFsc2UsImF1ZCI6IjV2bzJpMmtteng2cHMxbDF2anNqZ25qczk5eW16Y3cwIiwiZXhwIjoxNjQ4Njk2MjkxLCJpYXQiOjE2NDg2ODkwOTEsImlzcyI6ImFwaS1scDEuem5jLnNydi5uaW50ZW5kby5uZXQiLCJqdGkiOiI1YzUyMzA0Yy1kYjYyLTRlN2UtYjk2NS00MGE0OWJjNDNiNDEiLCJzdWIiOjY0NDU0NTcxNjk5NzMyNDgsImxpbmtzIjp7Im5ldHdvcmtTZXJ2aWNlQWNjb3VudCI6eyJpZCI6IjkxZDE2MGFhODRlODhkYTYifX0sInR5cCI6ImlkX3Rva2VuIiwibWVtYmVyc2hpcCI6eyJhY3RpdmUiOnRydWV9fQ.Ba-ZzlxhReetMFpB7lHFJ_a4OW4C1CohLV3JSWjoD2V5Tj4Sl5mcPt7mSHYDkmIX_K2hHwrJNoCWxZivpamUq_rkPf8NXAwcOM0OtaqHfvVO_6knuiJ7A2N0z55T3C1h6ww2bNiwKgZ0eNcyys2O8WtKn0aNzBZOi8UiVfW2EwiN7su7IcZJrOh0f8e-IB3Yo6PKzucq1O0vEgyBAW4R2RgAstSQuCZf1gpxCmeO3IUDs4cmgQ8fawqq1QtHlg7soXEryB7FXk1xO6aUNoIss-zGJWcvINNwpf7XKtgnhaokvLT9bIqRIjWisa_9Lszb6tXkr4N_Nu7TyqF7Nij8sQ',
    }),
    __metadata("design:type", String)
], SplatoonAccessTokenResult.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 7200 }),
    __metadata("design:type", Number)
], SplatoonAccessTokenResult.prototype, "expiresIn", void 0);
exports.SplatoonAccessTokenResult = SplatoonAccessTokenResult;
class SplatoonAccessTokenResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0 }),
    __metadata("design:type", Number)
], SplatoonAccessTokenResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", SplatoonAccessTokenResult)
], SplatoonAccessTokenResponse.prototype, "result", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'BB294B86-5C4A-433C-86A9-B7E54742542E-119883ef' }),
    __metadata("design:type", String)
], SplatoonAccessTokenResponse.prototype, "correlationId", void 0);
exports.SplatoonAccessTokenResponse = SplatoonAccessTokenResponse;
//# sourceMappingURL=splatoon_access_token.js.map