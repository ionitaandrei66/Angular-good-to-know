import {Injectable} from "@angular/core";
import {DimensionTypeEnum} from "../models/dimension-type-enum";
import {DimensionContext} from "../models/dimension-context.model";
import {DimensionReadDataFacadeService} from "../facade-read-service/dimension-read-data-facade.service";

@Injectable()
export class DimensionOneService {
  constructor(
    private readonly dimensionReadDataFacadeService: DimensionReadDataFacadeService
  ) {}

  public getDimensionOne() {
 return this.dimensionReadDataFacadeService.get(
   DimensionTypeEnum.DIMENSION_ONE,
   DimensionContext.DIMENSION_ONE
 )
  }
}
