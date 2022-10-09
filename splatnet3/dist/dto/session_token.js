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
exports.SessionTokenResponse = exports.SessionTokenRequest = exports.SessionTokenBadRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class SessionTokenBadRequest {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'invalid_request' }),
    __metadata("design:type", String)
], SessionTokenBadRequest.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'The provided session_token_code is expired' }),
    __metadata("design:type", String)
], SessionTokenBadRequest.prototype, "error_description", void 0);
exports.SessionTokenBadRequest = SessionTokenBadRequest;
class SessionTokenRequest {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FjY291bnRzLm5pbnRlbmRvLmNvbSIsInN0YzpzY3AiOlswLDgsOSwxNywyM10sImp0aSI6IjM1NzQ1MTg5MTkxIiwic3RjOmMiOiJ0ejdaMGhfM2RLMTBYLTc5SlREWUUyaG5seGU1dWhYd0tsUldoQUdBb1ZZIiwic3RjOm0iOiJTMjU2Iiwic3ViIjoiNWFlOGY3YTc4YjBjY2E0ZCIsInR5cCI6InNlc3Npb25fdG9rZW5fY29kZSIsImV4cCI6MTYxOTQ3OTE0OSwiYXVkIjoiNzFiOTYzYzFiN2I2ZDExOSIsImlhdCI6MTYxOTQ3ODU0OX0.XSFscPYMGbcaLLJxBA-fIO0zzt1bWs4X39oZGOs4jrI',
    }),
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)((param) => {
        const regex = new RegExp('session_token_code=(.*)&');
        const session_token_code = regex.test(param.value)
            ? regex.exec(param.value)[1]
            : param.value;
        return session_token_code;
    }),
    __metadata("design:type", String)
], SessionTokenRequest.prototype, "session_token_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'RwKTiEojlJbQInnPCHBitkNHehgICjFsstWUvOkGQibeuukvXx',
    }),
    __metadata("design:type", String)
], SessionTokenRequest.prototype, "session_token_code_verifier", void 0);
exports.SessionTokenRequest = SessionTokenRequest;
class SessionTokenResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FjY291bnRzLm5pbnRlbmRvLmNvbSIsInN1YiI6IjVhZThmN2E3OGIwY2NhNGQiLCJleHAiOjE2MTk0ODIxNTUsImlhdCI6MTYxOTQ3ODU1NSwidHlwIjoiY29kZSIsImF1ZCI6IjcxYjk2M2MxYjdiNmQxMTkiLCJhYzpzY3AiOlswLDgsOSwxNywyM10sImp0aSI6IjM1NzQ1MTYxODQzIn0.vT1aaYdqHaAinY0BKGDeG2cAUqS5DOndH02keQxZXxw',
    }),
    __metadata("design:type", String)
], SessionTokenResponse.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'eyJhbGciOiJIUzI1NiJ9.eyJzdDpzY3AiOlswLDgsOSwxNywyM10sInN1YiI6IjVhZThmN2E3OGIwY2NhNGQiLCJleHAiOjE2ODI1NTA1NTUsImlzcyI6Imh0dHBzOi8vYWNjb3VudHMubmludGVuZG8uY29tIiwidHlwIjoic2Vzc2lvbl90b2tlbiIsImlhdCI6MTYxOTQ3ODU1NSwiYXVkIjoiNzFiOTYzYzFiN2I2ZDExOSIsImp0aSI6IjUwNjgwMjkzODEifQ.CwI0tqAv186pEgo7HKn_q--l8fB-jmwFu6iJNNvY_W8',
    }),
    __metadata("design:type", String)
], SessionTokenResponse.prototype, "session_token", void 0);
exports.SessionTokenResponse = SessionTokenResponse;
//# sourceMappingURL=session_token.js.map