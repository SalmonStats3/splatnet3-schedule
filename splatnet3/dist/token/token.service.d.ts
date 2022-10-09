import { AccessTokenRequest, AccessTokenResponse } from '../dto/access_token';
export declare class TokenService {
    get_access_token(request: AccessTokenRequest): Promise<AccessTokenResponse>;
}
