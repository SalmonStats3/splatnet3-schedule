"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulesService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const axios_1 = require("axios");
const schedule_1 = require("../dto/schedule");
let SchedulesService = class SchedulesService {
    async get_schedules(token, version) {
        const url = 'https://api.lp1.av5ja.srv.nintendo.net/api/graphql';
        const parameters = {
            variables: {},
            extensions: {
                persistedQuery: {
                    version: 1,
                    sha256Hash: '7d4bb0565342b7385ceb97d109e14897',
                },
            },
        };
        axios_1.default.defaults.headers.common = {
            Authorization: `Bearer ${token}`,
            'X-Web-View-Ver': version,
        };
        try {
            const response = await axios_1.default.post(url, parameters);
            const results = (0, class_transformer_1.plainToClass)(schedule_1.Schedule, response.data).data.coopGroupingSchedule.regularSchedules.nodes.map((node) => new schedule_1.ScheduleResponse(node));
            return results;
        }
        catch (error) {
            throw new common_1.HttpException(error.resonse.data, error.response.status);
        }
    }
};
SchedulesService = __decorate([
    (0, common_1.Injectable)()
], SchedulesService);
exports.SchedulesService = SchedulesService;
//# sourceMappingURL=schedules.service.js.map