import { ScheduleResponse } from 'src/dto/schedule';
export declare class SchedulesService {
    get_schedules(token: string, version: string): Promise<ScheduleResponse[]>;
}
