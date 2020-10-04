export interface Inventario{
    StockItemName: string;
    SupplierName: string;
    ColorName: string;
    PackageTypeName: string[];
    QuantityPerOuter: number;
    Brand: string;
    Size: string;
    TaxRate: number;
    UnitPrice: number;
    RecommendedRetailPrice: number;
    TypicalWeightPerUnit: number;
    SearchDetails: string;
    StockItemID: number;
    BinLocation: string;
    Holdings: string;
    StockGroupName: string;
}