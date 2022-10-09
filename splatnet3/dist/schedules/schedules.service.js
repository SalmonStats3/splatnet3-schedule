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
const lite_1 = require("firebase/firestore/lite");
const app_1 = require("firebase/app");
const firebaseConfig = {
    apiKey: 'AIzaSyBl8OR-wdFLZ3HnnTUzEq4t4eXce5Xu8gE',
    authDomain: 'tkgstratorwork.firebaseapp.com',
    projectId: 'tkgstratorwork',
    storageBucket: 'tkgstratorwork.appspot.com',
    messagingSenderId: '245057171773',
    appId: '1:245057171773:web:2397fbf88981d07569d554',
    measurementId: 'G-3XC9LXLCNL',
};
let SchedulesService = class SchedulesService {
    constructor() {
        this.app = (0, app_1.initializeApp)(firebaseConfig);
        this.db = (0, lite_1.getFirestore)(this.app);
    }
    async add_schedules(results) {
        results.forEach(async (result) => {
            await (0, lite_1.setDoc)((0, lite_1.doc)(this.db, 'schedules', result.startTime), {
                stage: result.stage,
                startTime: result.startTime,
                endTime: result.endTime,
                weaponList: result.weaponList,
                rareWeapon: result.rareWeapon,
            });
        });
    }
    async get_all_schedules() {
        const schedules = (await (0, lite_1.getDocs)((0, lite_1.collection)(this.db, 'schedules'))).docs.map((doc) => doc.data());
        const results = schedules.map((schedule) => schedule);
        return results;
    }
    async get_schedules(token, version) {
        if (token === undefined) {
            throw new common_1.BadRequestException('X-Web-Token is required');
        }
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
            results.forEach(async (result) => {
                await (0, lite_1.setDoc)((0, lite_1.doc)(this.db, 'schedules', result.startTime), {
                    stage: result.stage,
                    startTime: result.startTime,
                    endTime: result.endTime,
                    weaponList: result.weaponList,
                    rareWeapon: result.rareWeapon,
                });
            });
            return results;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException('X-Web-Token is expired');
        }
    }
};
SchedulesService = __decorate([
    (0, common_1.Injectable)()
], SchedulesService);
exports.SchedulesService = SchedulesService;
//# sourceMappingURL=schedules.service.js.map