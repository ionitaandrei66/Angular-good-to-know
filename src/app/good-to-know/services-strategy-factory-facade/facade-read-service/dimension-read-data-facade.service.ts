import {DimensionTypeEnum} from "../models/dimension-type-enum";
import {DimensionContext} from "../models/dimension-context.model";
import {HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dimension} from "../models/dimension.model";
import {DimensionFactoryService} from "../factory-service/dimension-factory.service";
import {Injectable} from "@angular/core";

@Injectable()
export class DimensionReadDataFacadeService {
  constructor(
    private readonly dimensionFactoryService: DimensionFactoryService
  ) {}

  public get(
    dimensionType: DimensionTypeEnum,
    dimensionContext: DimensionContext
  ): Observable<Dimension[]> {
    return this.dimensionFactoryService
      .getDimensionService(dimensionType)
      .getData(dimensionContext);
  }

  public getError(
    dimensionType: DimensionTypeEnum,
    dimensionContext: DimensionContext
  ): Observable<HttpErrorResponse | null> {
    return this.dimensionFactoryService
      .getDimensionService(dimensionType)
      .getError(dimensionContext);
  }
}
