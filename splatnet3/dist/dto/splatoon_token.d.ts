export declare class SplatoonTokenBadRequest {
    status: number;
    errorMessage: string;
    correlationId: string;
}
export declare class SplatoonTokenInvalidToken {
    status: number;
    errorMessage: string;
    correlationId: string;
}
export declare class SplatoonTokenUpgradeRequired {
    status: number;
    errorMessage: string;
    correlationId: string;
}
export declare class Membership {
    active: boolean;
}
export declare class SplatoonTokenFriendCode {
    regenerable: boolean;
    regenerableAt: number;
    id: string;
}
export declare class SplatoonTokenNintendo {
    membership: Membership;
}
export declare class SplatoonTokenRequest {
    version: string;
    timestamp: number;
    request_id: string;
    naIdToken: string;
    f: string;
}
export declare class SplatoonTokenPresence {
    state: string;
    updatedAt: number;
    logoutAt: number;
}
export declare class SplatoonTokenCredential {
    accessToken: string;
    expiresIn: number;
}
export declare class SplatoonTokenFirebase {
    accessToken: string;
    expiresIn: number;
}
export declare class SplatoonTokenPermission {
    presence: string;
}
export declare class SplatoonTokenLink {
    nintendo: SplatoonTokenNintendo;
    friendCode: SplatoonTokenFriendCode;
}
export declare class SplatoonTokenUser {
    id: number;
    nsaid: string;
    imageUri: string;
    name: string;
    supportId: string;
    isChildRestricted: boolean;
    etag: string;
    links: SplatoonTokenLink;
    permissions: SplatoonTokenPermission;
    presence: SplatoonTokenPresence;
}
export declare class SplatoonTokenResult {
    user: SplatoonTokenUser;
    webApiServerCredential: SplatoonTokenCredential;
    firebaseCredential: SplatoonTokenFirebase;
}
export declare class SplatoonTokenResponse {
    status: number;
    result: SplatoonTokenResult;
}
