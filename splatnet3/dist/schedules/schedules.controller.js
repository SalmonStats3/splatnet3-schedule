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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const schedule_1 = require("../dto/schedule");
const schedules_service_1 = require("./schedules.service");
const schedules = require("./schedules.json");
let SchedulesController = class SchedulesController {
    constructor(service) {
        this.service = service;
    }
    get_schedules(token, version = '1.0.0-42f70e51') {
        return this.service.get_schedules(token, version);
    }
    get_all_schedules() {
        return this.service.get_all_schedules();
    }
    add_schedules() {
        return this.service.add_schedules(schedules);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiTags)('スケジュール'),
    (0, swagger_1.ApiOperation)({ operationId: '取得' }),
    (0, swagger_1.ApiOkResponse)({ type: [schedule_1.ScheduleResponse] }),
    __param(0, (0, common_1.Headers)('X-Web-Token')),
    __param(1, (0, common_1.Headers)('X-Web-View-Ver')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SchedulesController.prototype, "get_schedules", null);
__decorate([
    (0, common_1.Get)('all'),
    (0, swagger_1.ApiTags)('スケジュール'),
    (0, swagger_1.ApiOperation)({ operationId: '全件取得' }),
    (0, swagger_1.ApiOkResponse)({ type: [schedule_1.ScheduleResponse] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SchedulesController.prototype, "get_all_schedules", null);
__decorate([
    (0, common_1.Get)('update'),
    (0, swagger_1.ApiTags)('スケジュール'),
    (0, swagger_1.ApiOperation)({ operationId: '追加' }),
    (0, swagger_1.ApiOkResponse)({ type: [schedule_1.ScheduleResponse] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SchedulesController.prototype, "add_schedules", null);
SchedulesController = __decorate([
    (0, common_1.Controller)('schedules'),
    __metadata("design:paramtypes", [schedules_service_1.SchedulesService])
], SchedulesController);
exports.SchedulesController = SchedulesController;
//# sourceMappingURL=schedules.controller.js.map