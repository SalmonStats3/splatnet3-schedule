export declare enum IminkType {
    NSO = 1,
    APP = 2
}
export declare class IminkRequest {
    method: IminkType;
    naIdToken: string;
    constructor(method: IminkType, naIdToken: string);
}
export declare class IminkResponse {
    f: string;
    request_id: string;
    timestamp: number;
}
