import { IDrug } from "app/interfaces/drug";

export interface IDrugTable {
    IDTType: number;
    IDTTitle: string;
    IDTCol: string[];
    IDTRows: IDrug[];
}
