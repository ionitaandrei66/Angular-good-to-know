import {InjectionToken} from "@angular/core";
import {DataProviderModel} from "../models/data-provider";

export const DATA_PROVIDER_TOKEN: InjectionToken<DataProviderModel> =
  new InjectionToken<DataProviderModel>('DataProvider')
