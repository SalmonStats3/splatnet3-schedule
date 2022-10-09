export declare class ScheduleRequest {
    'X-Web-View-Ver': string;
    'X-Web-Token': string;
}
export declare class ScheduleResponse {
    startTime: string;
    endTime: string;
    stage: number;
    weaponList: number[];
    rareWeapon: number | null;
    constructor(document: Node);
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
