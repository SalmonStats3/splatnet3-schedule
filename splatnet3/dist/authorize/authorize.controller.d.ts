import { AccessTokenRequest } from 'src/dto/access_token';
import { BulletTokenResponse } from 'src/dto/bullet_tokens';
import { AuthorizeService } from './authorize.service';
export declare class AuthorizeController {
    private readonly service;
    constructor(service: AuthorizeService);
    authorize(request: AccessTokenRequest): Promise<BulletTokenResponse>;
    update(request: AccessTokenRequest): Promise<void>;
}
