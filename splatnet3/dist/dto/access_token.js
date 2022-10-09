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
exports.AccessTokenResponse = exports.AccessTokenRequest = exports.AccessTokenInvalidGrant = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class AccessTokenInvalidGrant {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        examples: ['invalid_grant', 'invalid_client', 'invalid_request'],
    }),
    __metadata("design:type", String)
], AccessTokenInvalidGrant.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        examples: [
            'The provided grant is invalid',
            'Client authentication failed',
            'The request does not satisfy the schema',
        ],
    }),
    __metadata("design:type", String)
], AccessTokenInvalidGrant.prototype, "error_description", void 0);
exports.AccessTokenInvalidGrant = AccessTokenInvalidGrant;
class AccessTokenRequest {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        example: 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MjgyMjY3NjksInR5cCI6InNlc3Npb25fdG9rZW4iLCJzdDpzY3AiOlswLDgsOSwxNywyM10sImF1ZCI6IjcxYjk2M2MxYjdiNmQxMTkiLCJzdWIiOiI1YWU4ZjdhNzhiMGNjYTRkIiwiaWF0IjoxNjY1MTU0NzY5LCJqdGkiOjEwMDY3NTUxMTgyLCJpc3MiOiJodHRwczovL2FjY291bnRzLm5pbnRlbmRvLmNvbSJ9.h5bOCthewRPK8GfZPY-zZeUUx-_JwA0CDFFFtRTy3NU',
    }),
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AccessTokenRequest.prototype, "session_token", void 0);
exports.AccessTokenRequest = AccessTokenRequest;
class AccessTokenResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg1ZTNjN2FkLTBlMTQtNDIxMi1hZTg5LTExMjIwZmM3MDMzYSIsImprdSI6Imh0dHBzOi8vYWNjb3VudHMubmludGVuZG8uY29tLzEuMC4wL2NlcnRpZmljYXRlcyJ9.eyJhdWQiOiI3MWI5NjNjMWI3YjZkMTE5Iiwic3ViIjoiNWFlOGY3YTc4YjBjY2E0ZCIsImp0aSI6IjgyYzUzM2NjLWJkNzQtNDkwOC04NjVkLTAwOWM2MGM5MWY0NiIsImFjOnNjcCI6WzAsOCw5LDE3LDIzXSwiaWF0IjoxNjE5NDc4NTU2LCJpc3MiOiJodHRwczovL2FjY291bnRzLm5pbnRlbmRvLmNvbSIsImFjOmdydCI6NjQsInR5cCI6InRva2VuIiwiZXhwIjoxNjE5NDc5NDU2fQ.lXFbLqUIVFegSHzFvH3aLp1HOB3iwajs107YLt0MePrcqLDvmTpu_MNewGrnpX0BAAfB79lDGt7MFmi6HKcIQxacaExP7tIHYowmHBU5eDM4VSbZJq7LP8SMftRAcvDA1-bNOr3_uFhqtXP18mDDZRYfB7lEXVbcj3sdkNPrWlyic-vHwZTQ-qwMTWPLZzYwwGjage1OfpRwwC-YrU0hpgg-DIj5yTN-eCrwkp48rsQU_MOCw5--HRW90x-LU6rjK7_CgHG3Qafz4pvuYmRzDl3WWtoSGUdZCh6wF3SKta0GzReZIIic-iog3eo21vgagWbnEWz_86iYjsF9DAnPzQ',
    }),
    __metadata("design:type", String)
], AccessTokenResponse.prototype, "access_token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: ['openid', 'user', 'user.birthday', 'user.mii', 'user.screenName'],
    }),
    __metadata("design:type", Array)
], AccessTokenResponse.prototype, "scope", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Bearer' }),
    __metadata("design:type", String)
], AccessTokenResponse.prototype, "token_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'eyJqa3UiOiJodHRwczovL2FjY291bnRzLm5pbnRlbmRvLmNvbS8xLjAuMC9jZXJ0aWZpY2F0ZXMiLCJraWQiOiI1ZTkwMDRlOC1mMDNiLTRjZTEtYmU2Zi1jNzdlZTM4YTA4MjEiLCJhbGciOiJSUzI1NiJ9.eyJleHAiOjE2MTk0Nzk0NTYsImNvdW50cnkiOiJKUCIsInR5cCI6ImlkX3Rva2VuIiwiYXRfaGFzaCI6InVHUzZvQkJRQUJEN2hWMHJOdnpiS2ciLCJpYXQiOjE2MTk0Nzg1NTYsImlzcyI6Imh0dHBzOi8vYWNjb3VudHMubmludGVuZG8uY29tIiwic3ViIjoiNWFlOGY3YTc4YjBjY2E0ZCIsImF1ZCI6IjcxYjk2M2MxYjdiNmQxMTkiLCJqdGkiOiI0NmJjZmRiMy00MmUyLTRmM2UtYjhlYy1jY2YyYzNmNWZjNGYifQ.qy0QMaQ_QsCajYZkkuHlfRtWETFSUtxKfddtAsRT2EBTGpBxNV2p3VsKtWnNHduH5ZvFKa978sqBmTqjSzfPDJEF2T4JciuXvlQL73zlSPN2GxmI65K030nyvGYebd_d7XRBEEtTKGTWuhHmkk_nglToBlKWr0QG23dWGTA2phJUUU2BKiB44Gdbcq4Fopdtu9wqhtxN2lWc_OtpdHaVlmuQfOXqNHI5ohHFp4wzjrsIUOzUTVtq3Br52c1umWoFxOxnlIHdiNz1bNGWbtY9YfJHdEe1PECyj_oB8cQgkz4DDLHHVFGYz5shtGLZ1JlewVERMQw4JzBD1SiNx1FVWw',
    }),
    __metadata("design:type", String)
], AccessTokenResponse.prototype, "id_token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 900 }),
    __metadata("design:type", Number)
], AccessTokenResponse.prototype, "expires_in", void 0);
exports.AccessTokenResponse = AccessTokenResponse;
//# sourceMappingURL=access_token.js.map