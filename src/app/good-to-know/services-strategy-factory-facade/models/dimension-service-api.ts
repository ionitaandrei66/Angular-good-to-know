import {DimensionContext} from "./dimension-context.model";
import {HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dimension} from "./dimension.model";

export interface DimensionServiceApi {
  getData(context: DimensionContext): Observable<Dimension[]>;

  setData(context: DimensionContext, dimension: Dimension[]): void;

  getError(context: DimensionContext): Observable<HttpErrorResponse | null>;

  setError(context: DimensionContext, error: HttpErrorResponse): void;

  remove(context: DimensionContext): void;

  clearStore(): void;
}
