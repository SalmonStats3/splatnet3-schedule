export declare class ScheduleRequest {
    bullet_token: string;
}
export declare class ScheduleResponse {
    startTime: string;
    endTime: string;
    stage: number;
    weapon_list: number[];
    rare_weapon: number | null;
    constructor(node: Node);
}
declare class CoopStage {
    coopStageId: number;
}
declare class Image {
    url: number;
}
declare class Weapon {
    image: Image;
}
declare class Setting {
    coopStage: CoopStage;
    weapons: Weapon[];
}
declare class Node {
    startTime: string;
    endTime: string;
    setting: Setting;
}
declare class RegularSchedule {
    nodes: Node[];
}
declare class CoopGroupingSchedule {
    regularSchedules: RegularSchedule;
}
declare class DataClass {
    coopGroupingSchedule: CoopGroupingSchedule;
}
export declare class Schedule {
    data: DataClass;
}
export {};
