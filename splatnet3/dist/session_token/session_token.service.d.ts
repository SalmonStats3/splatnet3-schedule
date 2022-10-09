import { SessionTokenRequest, SessionTokenResponse } from '../dto/session_token';
export declare class SessionTokenService {
    get_session_token(request: SessionTokenRequest): Promise<SessionTokenResponse>;
}
