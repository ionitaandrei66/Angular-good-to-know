import {Injectable} from "@angular/core";

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
