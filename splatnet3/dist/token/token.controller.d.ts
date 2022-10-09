import { AccessTokenRequest, AccessTokenResponse } from '../dto/access_token';
import { TokenService } from './token.service';
export declare class TokenController {
    private readonly service;
    constructor(service: TokenService);
    session_token(request: AccessTokenRequest): Promise<AccessTokenResponse>;
}
