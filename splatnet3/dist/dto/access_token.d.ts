export declare class AccessTokenInvalidGrant {
    error: string;
    error_description: string;
}
export declare class AccessTokenRequest {
    readonly session_token: string;
}
export declare class AccessTokenResponse {
    readonly access_token: string;
    readonly scope: string[];
    readonly token_type: string;
    readonly id_token: string;
    readonly expires_in: number;
}
