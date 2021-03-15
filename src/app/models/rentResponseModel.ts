import { RentDetailDto } from "./rentDetailDto";
import { ResponseModel } from "./responseModel";

export interface RentResponseModel extends ResponseModel {
    data: RentDetailDto[];
}