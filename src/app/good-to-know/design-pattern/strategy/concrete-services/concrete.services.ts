import {Injectable} from "@angular/core";
import {PricingStrategy} from "../interfaces/interface.strategy";

@Injectable()
export class StandardPricingStrategy implements PricingStrategy {
  calculate(basePrice: number): number {
    return basePrice;
  }
}

@Injectable()
export class DiscountPricingStrategy implements PricingStrategy {
  calculate(basePrice: number): number {
    return basePrice * 0.9; // 10% discount
  }
}

@Injectable()
export class PremiumPricingStrategy implements PricingStrategy {
  calculate(basePrice: number): number {
    return basePrice * 1.2; // 20% markup
  }
}
