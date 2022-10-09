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
exports.IminkResponse = exports.IminkRequest = exports.IminkType = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
var IminkType;
(function (IminkType) {
    IminkType[IminkType["NSO"] = 1] = "NSO";
    IminkType[IminkType["APP"] = 2] = "APP";
})(IminkType = exports.IminkType || (exports.IminkType = {}));
class IminkRequest {
    constructor(method, naIdToken) {
        this.method = method;
        this.naIdToken = naIdToken;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ enum: IminkType, default: IminkType.NSO }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], IminkRequest.prototype, "method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: 'eyJraWQiOiIxZDkwOWFhNC1lZDExLTQzZWUtODEyZS00NzZhNzQ1YTY5YmUiLCJqa3UiOiJodHRwczovL2FjY291bnRzLm5pbnRlbmRvLmNvbS8xLjAuMC9jZXJ0aWZpY2F0ZXMiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1YWU4ZjdhNzhiMGNjYTRkIiwiZXhwIjoxNjY1MzE1Nzg5LCJqdGkiOiJjNDMwNjQ0NS04NDBhLTQ4ZTEtYjYyZS0zYWVmYWRkOTZiNmEiLCJhYzpzY3AiOlswLDgsOSwxNywyM10sImF1ZCI6IjcxYjk2M2MxYjdiNmQxMTkiLCJhYzpncnQiOjY0LCJpc3MiOiJodHRwczovL2FjY291bnRzLm5pbnRlbmRvLmNvbSIsImlhdCI6MTY2NTMxNDg4OSwidHlwIjoidG9rZW4ifQ.bf0hGoTZE8WN962BoUBh2xyY4SQq4GGdvuYsB1C_gu5RmleCRumK5XkCqNPcR1m17Zlh68oUqJx4xaRLSWNvPmjR1m76oo37N2TkV9U5ObssC-iI-FkIIkfrxlXK0nayqcxwcHLG4kHUO1QFsLuC6st2dPHt7d4yP8r88g8n1Jx27KMeB4u_JvIr3AXFPtgW0-VA4gEn_phYz7Vi4InA61bBVryhXqQIIi_-3rKapQVPgknKMYpLG9Eig8q6meILFQyOP9moy8UYZmnIpRSCgp8BM2Ze3kia3Rt66fTp2dmAukFmWbjku-kf4BK1eb8fxPoBffv6LHXkZFfgi7JO1Q',
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], IminkRequest.prototype, "naIdToken", void 0);
exports.IminkRequest = IminkRequest;
class IminkResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], IminkResponse.prototype, "f", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], IminkResponse.prototype, "request_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], IminkResponse.prototype, "timestamp", void 0);
exports.IminkResponse = IminkResponse;
//# sourceMappingURL=imink.js.map