import {Injectable} from "@angular/core";
import {ServiceDimensionOne} from "../servicies-that-depend-on-abstract/service-dimension-one";
import {ServiceDimensionTwo} from "../servicies-that-depend-on-abstract/service-dimension-two";
import {DimensionServiceApi} from "../models/dimension-service-api";
import {DimensionTypeEnum} from "../models/dimension-type-enum";

@Injectable()
export class DimensionFactoryService {
  constructor(
    private readonly serviceOne: ServiceDimensionOne,
    private readonly serviceTwo: ServiceDimensionTwo
  ) {
  }

  public getDimensionService(dimensionType: DimensionTypeEnum): DimensionServiceApi {
    switch (dimensionType) {
      case DimensionTypeEnum.DIMENSION_ONE:
        return this.serviceOne
      case DimensionTypeEnum.DIMENSION_TWO:
        return this.serviceTwo
      default:
        throw Error('No service for dimension type: ' + dimensionType)
    }
  }

  public getAllServices(): DimensionServiceApi[] {
    return [
      this.serviceOne,
      this.serviceOne
    ]
  }
}
