export interface Ventas {
    InvoiceID: number;
    CustomerName: string;
    DeliveryMethodName: string;
    PaymentMethodName: string;
    CustomerPurchaseOrderNumber: string;
    Contact: string;
    SalesPerson: string;
    Date: string;
    DeliveryInstructions: string;
    StockItemName: string;
    Quantity: number;
    UnitPrice: number;
    TaxRate: number;
    TaxAmount: number;
    LineProfit: number;
}