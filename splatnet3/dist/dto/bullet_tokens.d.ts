export declare class BulletTokenRequest {
    'X-Web-View-Ver': string;
    'X-NaCountry': string;
    'X-GameWebToken': string;
    constructor(splatoon_access_token: string, version: string);
}
export declare class BulletTokenResponse {
    bulletToken: string;
    lang: string;
    isNoeCountry: boolean;
}
