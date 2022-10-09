import { BulletTokenRequest, BulletTokenResponse } from '../dto/bullet_tokens';
import { BulletTokensService } from './bullet_tokens.service';
export declare class BulletTokensController {
    private readonly service;
    constructor(service: BulletTokensService);
    session_token(request: BulletTokenRequest): Promise<BulletTokenResponse>;
}
