import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { BulletTokenRequest, BulletTokenResponse } from '../dto/bullet_tokens';
import axios from 'axios';
import { plainToClass } from 'class-transformer';

@Injectable()
export class BulletTokensService {
  async get_bullet_tokens(
    request: BulletTokenRequest,
  ): Promise<BulletTokenResponse> {
    const url = 'https://api.lp1.av5ja.srv.nintendo.net/api/bullet_tokens';
    const headers = {
      'X-Web-View-Ver': request['X-Web-View-Ver'],
      'X-NaCountry': request['X-NaCountry'],
      'X-GameWebToken': request['X-GameWebToken'],
    };

    try {
      const response = await axios.post(url, null, { headers: headers });
      const status_code = response.status;
      switch (status_code) {
        case 201:
          return plainToClass(BulletTokenResponse, response.data);
        default:
          throw new HttpException(response.data, status_code);
      }
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
