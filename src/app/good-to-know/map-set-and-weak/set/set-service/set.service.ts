import {Injectable} from "@angular/core";
import {Dimension} from "../../../services-strategy-factory-facade/models/dimension.model";

@Injectable({ providedIn: 'root' })
export class SelectionService {
  private readonly selectedIds = new Set<number>();

  select(id: number): void {
    this.selectedIds.add(id);
  }

  deselect(id: number): void {
    this.selectedIds.delete(id);
  }

  isSelected(id: number): boolean {
    return this.selectedIds.has(id);
  }

  clear(): void {
    this.selectedIds.clear();
  }

  getSelectedIds(): number[] {
    return Array.from(this.selectedIds);
  }
}

const selectedDimensions = new Set<Dimension>();

function addDimension(dimension: Dimension): void {
  selectedDimensions.add(dimension);
}

function removeDimension(dimension: Dimension): void {
  selectedDimensions.delete(dimension);
}

function isSelected(dimension: Dimension): boolean {
  return selectedDimensions.has(dimension);
}

