import { SplatoonTokenRequest, SplatoonTokenResponse } from '../dto/splatoon_token';
import { SplatoonTokenService } from './splatoon_token.service';
export declare class SplatoonTokenController {
    private readonly service;
    constructor(service: SplatoonTokenService);
    session_token(request: SplatoonTokenRequest): Promise<SplatoonTokenResponse>;
}
