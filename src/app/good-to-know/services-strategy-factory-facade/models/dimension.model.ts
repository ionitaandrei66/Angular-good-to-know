import {DimensionDto} from "./dimension-dto.model";
import {DimensionOmitModel} from "./dimension-omit.model";

//it will extend DimensionDto and DimensionOmitModel but for DimensionOmitModel is without elementType
export interface Dimension extends DimensionDto, Omit<DimensionOmitModel, 'elementType'>{
  superName: string
}
