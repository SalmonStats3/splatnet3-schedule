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
exports.SplatoonTokenResponse = exports.SplatoonTokenResult = exports.SplatoonTokenUser = exports.SplatoonTokenLink = exports.SplatoonTokenPermission = exports.SplatoonTokenFirebase = exports.SplatoonTokenCredential = exports.SplatoonTokenPresence = exports.SplatoonTokenRequest = exports.SplatoonTokenNintendo = exports.SplatoonTokenFriendCode = exports.Membership = exports.SplatoonTokenUpgradeRequired = exports.SplatoonTokenInvalidToken = exports.SplatoonTokenBadRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class SplatoonTokenBadRequest {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 9400 }),
    __metadata("design:type", Number)
], SplatoonTokenBadRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Bad request.' }),
    __metadata("design:type", String)
], SplatoonTokenBadRequest.prototype, "errorMessage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '33f960d7-324c66c2' }),
    __metadata("design:type", String)
], SplatoonTokenBadRequest.prototype, "correlationId", void 0);
exports.SplatoonTokenBadRequest = SplatoonTokenBadRequest;
class SplatoonTokenInvalidToken {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 9403 }),
    __metadata("design:type", Number)
], SplatoonTokenInvalidToken.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Invalid token.' }),
    __metadata("design:type", String)
], SplatoonTokenInvalidToken.prototype, "errorMessage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '33f960d7-324c66c2' }),
    __metadata("design:type", String)
], SplatoonTokenInvalidToken.prototype, "correlationId", void 0);
exports.SplatoonTokenInvalidToken = SplatoonTokenInvalidToken;
class SplatoonTokenUpgradeRequired {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 9427 }),
    __metadata("design:type", Number)
], SplatoonTokenUpgradeRequired.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Upgrade required.' }),
    __metadata("design:type", String)
], SplatoonTokenUpgradeRequired.prototype, "errorMessage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '33f960d7-324c66c2' }),
    __metadata("design:type", String)
], SplatoonTokenUpgradeRequired.prototype, "correlationId", void 0);
exports.SplatoonTokenUpgradeRequired = SplatoonTokenUpgradeRequired;
class Membership {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], Membership.prototype, "active", void 0);
exports.Membership = Membership;
class SplatoonTokenFriendCode {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], SplatoonTokenFriendCode.prototype, "regenerable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1513589500 }),
    __metadata("design:type", Number)
], SplatoonTokenFriendCode.prototype, "regenerableAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1384-4712-4713' }),
    __metadata("design:type", String)
], SplatoonTokenFriendCode.prototype, "id", void 0);
exports.SplatoonTokenFriendCode = SplatoonTokenFriendCode;
class SplatoonTokenNintendo {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: true }),
    __metadata("design:type", Membership)
], SplatoonTokenNintendo.prototype, "membership", void 0);
exports.SplatoonTokenNintendo = SplatoonTokenNintendo;
class SplatoonTokenRequest {
    constructor(imink, version, naIdToken) {
        this.version = version;
        this.f = imink.f;
        this.timestamp = imink.timestamp;
        this.request_id = imink.request_id;
        this.naIdToken = naIdToken;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2.3.1',
        required: true,
    }),
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SplatoonTokenRequest.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1661322690000,
        required: true,
    }),
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], SplatoonTokenRequest.prototype, "timestamp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '00000000-0000-0000-0000-000000000000',
        required: true,
    }),
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SplatoonTokenRequest.prototype, "request_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'eyJqa3UiOiJodHRwczovL2FjY291bnRzLm5pbnRlbmRvLmNvbS8xLjAuMC9jZXJ0aWZpY2F0ZXMiLCJraWQiOiI1ZTkwMDRlOC1mMDNiLTRjZTEtYmU2Zi1jNzdlZTM4YTA4MjEiLCJhbGciOiJSUzI1NiJ9.eyJleHAiOjE2MTk0Nzk0NTYsImNvdW50cnkiOiJKUCIsInR5cCI6ImlkX3Rva2VuIiwiYXRfaGFzaCI6InVHUzZvQkJRQUJEN2hWMHJOdnpiS2ciLCJpYXQiOjE2MTk0Nzg1NTYsImlzcyI6Imh0dHBzOi8vYWNjb3VudHMubmludGVuZG8uY29tIiwic3ViIjoiNWFlOGY3YTc4YjBjY2E0ZCIsImF1ZCI6IjcxYjk2M2MxYjdiNmQxMTkiLCJqdGkiOiI0NmJjZmRiMy00MmUyLTRmM2UtYjhlYy1jY2YyYzNmNWZjNGYifQ.qy0QMaQ_QsCajYZkkuHlfRtWETFSUtxKfddtAsRT2EBTGpBxNV2p3VsKtWnNHduH5ZvFKa978sqBmTqjSzfPDJEF2T4JciuXvlQL73zlSPN2GxmI65K030nyvGYebd_d7XRBEEtTKGTWuhHmkk_nglToBlKWr0QG23dWGTA2phJUUU2BKiB44Gdbcq4Fopdtu9wqhtxN2lWc_OtpdHaVlmuQfOXqNHI5ohHFp4wzjrsIUOzUTVtq3Br52c1umWoFxOxnlIHdiNz1bNGWbtY9YfJHdEe1PECyj_oB8cQgkz4DDLHHVFGYz5shtGLZ1JlewVERMQw4JzBD1SiNx1FVWw',
        required: true,
    }),
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SplatoonTokenRequest.prototype, "naIdToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '9e4e5b2e13f46e399adb5f390fd95b2b78de7e3d7e886633f8d16c479382d5e5d44caca68bc19351fe1d0b69c7',
        required: true,
    }),
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SplatoonTokenRequest.prototype, "f", void 0);
exports.SplatoonTokenRequest = SplatoonTokenRequest;
class SplatoonTokenPresence {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'OFFLINE' }),
    __metadata("design:type", String)
], SplatoonTokenPresence.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1648654440 }),
    __metadata("design:type", Number)
], SplatoonTokenPresence.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1648654440 }),
    __metadata("design:type", Number)
], SplatoonTokenPresence.prototype, "logoutAt", void 0);
exports.SplatoonTokenPresence = SplatoonTokenPresence;
class SplatoonTokenCredential {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc0NoaWxkUmVzdHJpY3RlZCI6ZmFsc2UsIm1lbWJlcnNoaXAiOnsiYWN0aXZlIjp0cnVlfSwiYXVkIjoiZjQxN2UxdGlianFkOTFjaDk5dTQ5aXd6NXNuOWNoeTMiLCJleHAiOjE2NDg2OTYwNzQsImlhdCI6MTY0ODY4ODg3NCwiaXNzIjoiYXBpLWxwMS56bmMuc3J2Lm5pbnRlbmRvLm5ldCIsInN1YiI6NjQ0NTQ1NzE2OTk3MzI0OCwidHlwIjoiaWRfdG9rZW4ifQ.UjXgsX4lPi5_3lYCrQh475UkSho2FbsESEsJRw19X_Q',
    }),
    __metadata("design:type", String)
], SplatoonTokenCredential.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 7200 }),
    __metadata("design:type", Number)
], SplatoonTokenCredential.prototype, "expiresIn", void 0);
exports.SplatoonTokenCredential = SplatoonTokenCredential;
class SplatoonTokenFirebase {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '' }),
    __metadata("design:type", String)
], SplatoonTokenFirebase.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 3600 }),
    __metadata("design:type", Number)
], SplatoonTokenFirebase.prototype, "expiresIn", void 0);
exports.SplatoonTokenFirebase = SplatoonTokenFirebase;
class SplatoonTokenPermission {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'FRIENDS' }),
    __metadata("design:type", String)
], SplatoonTokenPermission.prototype, "presence", void 0);
exports.SplatoonTokenPermission = SplatoonTokenPermission;
class SplatoonTokenLink {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", SplatoonTokenNintendo)
], SplatoonTokenLink.prototype, "nintendo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", SplatoonTokenFriendCode)
], SplatoonTokenLink.prototype, "friendCode", void 0);
exports.SplatoonTokenLink = SplatoonTokenLink;
class SplatoonTokenUser {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 6445457169973248 }),
    __metadata("design:type", Number)
], SplatoonTokenUser.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '91d160aa84e88da6' }),
    __metadata("design:type", String)
], SplatoonTokenUser.prototype, "nsaid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://cdn-image-e0d67c509fb203858ebcb2fe3f88c2aa.baas.nintendo.com/1/430d0e57d74d2366',
    }),
    __metadata("design:type", String)
], SplatoonTokenUser.prototype, "imageUri", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Terra' }),
    __metadata("design:type", String)
], SplatoonTokenUser.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1050-7285-6911-2261-7766-2' }),
    __metadata("design:type", String)
], SplatoonTokenUser.prototype, "supportId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: false }),
    __metadata("design:type", Boolean)
], SplatoonTokenUser.prototype, "isChildRestricted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '"b956035ff2461637"' }),
    __metadata("design:type", String)
], SplatoonTokenUser.prototype, "etag", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", SplatoonTokenLink)
], SplatoonTokenUser.prototype, "links", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", SplatoonTokenPermission)
], SplatoonTokenUser.prototype, "permissions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", SplatoonTokenPresence)
], SplatoonTokenUser.prototype, "presence", void 0);
exports.SplatoonTokenUser = SplatoonTokenUser;
class SplatoonTokenResult {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", SplatoonTokenUser)
], SplatoonTokenResult.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", SplatoonTokenCredential)
], SplatoonTokenResult.prototype, "webApiServerCredential", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", SplatoonTokenFirebase)
], SplatoonTokenResult.prototype, "firebaseCredential", void 0);
exports.SplatoonTokenResult = SplatoonTokenResult;
class SplatoonTokenResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SplatoonTokenResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", SplatoonTokenResult)
], SplatoonTokenResponse.prototype, "result", void 0);
exports.SplatoonTokenResponse = SplatoonTokenResponse;
//# sourceMappingURL=splatoon_token.js.map