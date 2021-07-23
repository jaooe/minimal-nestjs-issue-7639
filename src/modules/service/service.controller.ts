import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import service from '../../proto/service.types';

@Controller('Service')
export class ServiceController {
  @GrpcMethod('Service', 'searchCustomerAndStore')
  async searchCustomerAndStore(
    aniRequestData: service.service.IRequestData,
  ): Promise<service.service.IResponse> {
    return {
      responseCode: 1,
    };
  }
}
