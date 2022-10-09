import { SessionTokenRequest, SessionTokenResponse } from '../dto/session_token';
import { SessionTokenService } from './session_token.service';
export declare class SessionTokenController {
    private readonly service;
    constructor(service: SessionTokenService);
    session_token(request: SessionTokenRequest): Promise<SessionTokenResponse>;
}
