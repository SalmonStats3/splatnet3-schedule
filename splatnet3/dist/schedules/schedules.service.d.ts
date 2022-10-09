import { ScheduleResponse } from 'src/dto/schedule';
export declare class SchedulesService {
    readonly app: import("@firebase/app").FirebaseApp;
    readonly db: import("firebase/firestore/lite").Firestore;
    add_schedules(results: ScheduleResponse[]): Promise<void>;
    get_all_schedules(): Promise<ScheduleResponse[]>;
    get_schedules(token: string, version: string): Promise<ScheduleResponse[]>;
}
