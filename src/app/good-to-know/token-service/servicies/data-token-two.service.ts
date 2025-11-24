
import {Injectable} from "@angular/core";
import {DataProviderModel} from "../models/data-provider";
import {Observable, of} from "rxjs";
import {ComponentTwo} from "../component-tow/component-two.component";


@Injectable({
  providedIn: ComponentTwo
})
export class DataTokenTwoService implements DataProviderModel<string>{
  fetchDataItems(): void {}

  getTreeItems(): Observable<string[]> {
    return of(['', '']);
  }
}
