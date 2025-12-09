import {PricingMode} from "../interfaces/enum-for-strategy";
import {
  DiscountPricingStrategy,
  PremiumPricingStrategy,
  StandardPricingStrategy
} from "../concrete-services/concrete.services";
import {Injectable} from "@angular/core";
import {PricingStrategy} from "../interfaces/interface.strategy";

@Injectable({ providedIn: 'root' })
export class PricingService {
  private strategies = new Map<PricingMode, PricingStrategy>();

  constructor(
    standard: StandardPricingStrategy,
    discount: DiscountPricingStrategy,
    premium: PremiumPricingStrategy
  ) {
    this.strategies.set(PricingMode.STANDARD, standard);
    this.strategies.set(PricingMode.DISCOUNT, discount);
    this.strategies.set(PricingMode.PREMIUM, premium);
  }

  public getStrategy(mode: PricingMode): PricingStrategy {
    const strategy = this.strategies.get(mode);
    if (!strategy) {
      throw new Error(`No pricing strategy registered for mode: ${mode}`);
    }
    return strategy;
  }

  public calculatePrice(basePrice: number, mode: PricingMode): number {
    return this.getStrategy(mode).calculate(basePrice);
  }
}
