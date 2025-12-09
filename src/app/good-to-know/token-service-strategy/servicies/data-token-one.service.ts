
import {ComponentOne} from "../component-one/component-one.component";
import {Injectable} from "@angular/core";
import {DataProviderModel} from "../models/data-provider";
import {Observable, of} from "rxjs";


@Injectable({
  providedIn: ComponentOne
})
export class DataTokenOneService implements DataProviderModel<string>{
  fetchDataItems(): void {}

  getTreeItems(): Observable<string[]> {
    return of(['', '']);
  }
}
