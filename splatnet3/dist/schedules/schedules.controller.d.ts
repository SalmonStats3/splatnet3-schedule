import { ScheduleResponse } from 'src/dto/schedule';
import { SchedulesService } from './schedules.service';
export declare class SchedulesController {
    private readonly service;
    constructor(service: SchedulesService);
    get_schedules(token: any, version: any): Promise<ScheduleResponse[]>;
}
