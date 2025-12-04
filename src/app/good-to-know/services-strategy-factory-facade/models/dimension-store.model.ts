import {BehaviorSubject, Observable} from "rxjs";
import {Dimension} from "./dimension.model";
import {HttpErrorResponse} from "@angular/common/http";

export class DimensionStoreModel {
  private readonly data$ = new BehaviorSubject<Dimension[]>([]);
  private readonly error$ = new BehaviorSubject<HttpErrorResponse | null>(null);

  setData(dimensions: Dimension[]): void { this.data$.next(dimensions); }
  getData(): Observable<Dimension[]> { return this.data$.asObservable(); }

  setError(error: HttpErrorResponse): void { this.error$.next(error); }
  getError(): Observable<HttpErrorResponse | null> { return this.error$.asObservable(); }
}
