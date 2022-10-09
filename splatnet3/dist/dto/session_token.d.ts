export declare class SessionTokenBadRequest {
    error: string;
    error_description: string;
}
export declare class SessionTokenRequest {
    readonly session_token_code: string;
    readonly session_token_code_verifier: string;
}
export declare class SessionTokenResponse {
    readonly code: string;
    readonly session_token: string;
}
