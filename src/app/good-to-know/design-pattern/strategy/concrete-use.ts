// @Component()
import {PricingService} from "./strategy-service/strategy-service";
import {PricingMode} from "./interfaces/enum-for-strategy";

export class ProductComponent {
  constructor(private readonly pricingService: PricingService) {}

  getFinalPrice(basePrice: number, mode: PricingMode): number {
    return this.pricingService.calculatePrice(basePrice, mode);
  }
}
