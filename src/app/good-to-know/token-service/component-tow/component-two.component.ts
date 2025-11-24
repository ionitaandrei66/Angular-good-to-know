import {Component, inject} from "@angular/core";
import {DATA_PROVIDER_TOKEN} from "../consts/data-provider-token";
import {DataTokenTwoService} from "../servicies/data-token-two.service";
import {DataProviderModel} from "../models/data-provider";


@Component({
  selector: 'app-component-two',
  imports: [],
  providers: [
    {
      provide: DATA_PROVIDER_TOKEN,
      useExisting: DataTokenTwoService,
    }
  ],
  standalone: true,
  templateUrl: './component-two.component.html',
  styleUrl: './component-two.component.scss'
})
export class ComponentTwo {
  readonly #dataProvider = inject<DataProviderModel<string>>(DATA_PROVIDER_TOKEN)
}
