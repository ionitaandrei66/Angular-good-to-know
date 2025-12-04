import {Injectable} from "@angular/core";
import {DimensionStoreModel} from "../models/dimension-store.model";
import {HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dimension} from "../models/dimension.model";
import {DimensionContext} from "../models/dimension-context.model";
import {DimensionServiceApi} from "../models/dimension-service-api";

@Injectable()
export abstract class AbstractServiceModel implements DimensionServiceApi{
  private dimensionStore: {[key in DimensionContext]?: DimensionStoreModel } = {};

  public getData(context: DimensionContext): Observable<Dimension[]> {
    return this.getStoreInstance(context).getData();
  }

  public setData(context: DimensionContext, dimensions: Dimension[]): void {
    this.getStoreInstance(context).setData(dimensions);
  }

  public remove(context: DimensionContext): void {
    delete this.dimensionStore[context];
  }

  public clearStore(): void {
    this.dimensionStore = {};
  }

  public getError(context: DimensionContext): Observable<HttpErrorResponse | null> {
    return this.getStoreInstance(context).getError();
  }

  public setError(context: DimensionContext, error: HttpErrorResponse): void {
    return this.getStoreInstance(context).setError(error);
  }

  private getStoreInstance(context: DimensionContext): DimensionStoreModel {
    if (this.dimensionStore[context]) {
      return <DimensionStoreModel>this.dimensionStore[context];
    }

    this.dimensionStore[context] = new DimensionStoreModel();
    return <DimensionStoreModel>this.dimensionStore[context];
  }
}
