export declare class ScheduleRequest {
    'X-Web-View-Ver': string;
    'X-Web-Token': string;
}
declare enum CoopSetting {
    CoopNormalSetting = "CoopNormalSetting",
    CoopBigRunSetting = "CoopBigRunSetting"
}
export declare class ScheduleResponse {
    start_time: string;
    end_time: string;
    stage_id: number;
    weapon_list: number[];
    rare_weapon: number | null;
    mode: CoopSetting;
    constructor(document: Node);
}
declare class CoopStage {
    id: number;
}
declare class Image {
    url: number;
}
declare class Weapon {
    image: Image;
}
declare class Setting {
    coopStage: CoopStage;
    __isCoopSetting: CoopSetting;
    weapons: Weapon[];
}
export declare class Node {
    startTime: string;
    endTime: string;
    setting: Setting;
}
declare class RegularSchedule {
    nodes: Node[];
}
export declare class CoopGroupingSchedule {
    regularSchedules: RegularSchedule;
    bigRunSchedules: RegularSchedule;
}
declare class DataClass {
    coopGroupingSchedule: CoopGroupingSchedule;
}
export declare class Schedule {
    data: DataClass;
}
export {};
