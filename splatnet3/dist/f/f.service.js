'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.FService = void 0;
const common_1 = require('@nestjs/common');
const class_transformer_1 = require('class-transformer');
const axios_1 = require('axios');
const imink_1 = require('../dto/imink');
let FService = class FService {
  async get_imink(request) {
    const url = 'https://api.imink.app/f';
    const parameters = {
      hash_method: request.method.valueOf(),
      token: request.naIdToken,
    };
    try {
      const response = await axios_1.default.post(url, parameters);
      return (0, class_transformer_1.plainToClass)(
        imink_1.IminkResponse,
        response.data,
      );
    } catch (error) {
      throw new common_1.HttpException(
        error.response.data,
        error.response.status,
      );
    }
  }
};
FService = __decorate([(0, common_1.Injectable)()], FService);
exports.FService = FService;
//# sourceMappingURL=f.service.js.map
