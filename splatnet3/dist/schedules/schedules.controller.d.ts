import { ScheduleResponse } from 'src/dto/schedule';
import { SchedulesService } from './schedules.service';
export declare class SchedulesController {
    private readonly service;
    constructor(service: SchedulesService);
    get_schedules(token: any, version?: string): Promise<ScheduleResponse[]>;
    get_all_schedules(): Promise<ScheduleResponse[]>;
}
