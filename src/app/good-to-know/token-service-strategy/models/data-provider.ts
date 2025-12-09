import {Observable} from "rxjs";

export interface DataProviderModel<T = unknown> {
  fetchDataItems(): void;
  getTreeItems(): Observable<T[]>;
}
