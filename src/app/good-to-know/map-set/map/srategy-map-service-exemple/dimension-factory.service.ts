import {Injectable} from "@angular/core";
import {DimensionTypeEnum} from "../../../services-strategy-factory-facade/models/dimension-type-enum";
import {DimensionServiceApi} from "../../../services-strategy-factory-facade/models/dimension-service-api";
import {
  ServiceDimensionOne
} from "../../../services-strategy-factory-facade/servicies-that-depend-on-abstract/service-dimension-one";
import {
  ServiceDimensionTwo
} from "../../../services-strategy-factory-facade/servicies-that-depend-on-abstract/service-dimension-two";

@Injectable({ providedIn: 'root' })
export class DimensionFactoryService {
  private readonly handlers = new Map<DimensionTypeEnum, DimensionServiceApi>();

  constructor(
    private readonly serviceDimensionOne: ServiceDimensionOne,
    private readonly serviceDimensionTwo: ServiceDimensionTwo
  ) {
    this.handlers.set(DimensionTypeEnum.DIMENSION_TWO, this.serviceDimensionOne);
    this.handlers.set(DimensionTypeEnum.DIMENSION_TWO, this.serviceDimensionTwo);
  }

  public getDimensionService(dimensionType: DimensionTypeEnum): DimensionServiceApi {
    const handler = this.handlers.get(dimensionType);

    if (!handler) {
      throw new Error(`No service for dimension type: ${dimensionType}`);
    }

    return handler;
  }
}


