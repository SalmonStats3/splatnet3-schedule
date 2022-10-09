import { HttpException, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import axios from 'axios';
import { IminkRequest, IminkResponse } from '../dto/imink';

@Injectable()
export class FService {
  async get_imink(request: IminkRequest): Promise<IminkResponse> {
    const url = 'https://api.imink.app/f';
    const parameters = {
      hash_method: request.method.valueOf(),
      token: request.naIdToken,
    };

    try {
      const response = await axios.post(url, parameters);
      return plainToClass(IminkResponse, response.data);
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status);
    }
  }
}
