import {Component, inject} from "@angular/core";
import {DATA_PROVIDER_TOKEN} from "../consts/data-provider-token";
import {DataTokenOneService} from "../servicies/data-token-one.service";
import {DataProviderModel} from "../models/data-provider";


@Component({
  selector: 'app-products-view',
  imports: [],
  providers: [
    {
      provide: DATA_PROVIDER_TOKEN,
      useExisting: DataTokenOneService,
    }
  ],
  standalone: true,
  templateUrl: './component-one.component.html',
  styleUrl: './component-one.component.scss'
})
export class ComponentOne {
 readonly #dataProvider = inject<DataProviderModel<string>>(DATA_PROVIDER_TOKEN)
}
