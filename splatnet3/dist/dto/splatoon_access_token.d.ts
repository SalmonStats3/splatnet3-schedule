export declare class SplatoonAccessTokenBadRequest {
    status: number;
    errorMessage: string;
    correlationId: string;
}
export declare class SplatoonAccessTokenNoResources {
    status: number;
    errorMessage: string;
    correlationId: string;
}
export declare class SplatoonAccessTokenInvalidToken {
    status: number;
    errorMessage: string;
    correlationId: string;
}
export declare class SplatoonAccessTokenUnauthorized {
    status: number;
    errorMessage: string;
    correlationId: string;
}
export declare class SplatoonAccessTokenUpgradeRequired {
    status: number;
    errorMessage: string;
    correlationId: string;
}
export declare class SplatoonAccessTokenRequest {
    version: string;
    naIdToken: string;
    f: string;
    request_id: string;
    timestamp: number;
}
export declare class SplatoonAccessTokenResult {
    accessToken: string;
    expiresIn: number;
}
export declare class SplatoonAccessTokenResponse {
    status: number;
    result: SplatoonAccessTokenResult;
    correlationId: string;
}
