export type typeCreateBudgetProps = {
    quoteNumber: string;
    clientName: string;
    clientContact?: string;
    niche?: string;
    projectName?: string;
    description?: string;
    features?: string[];
    valuation: number;
    entryAmount?: number;
    paymentConditions?: string;
    generatedLink: string;
    deliveryDeadline?: string;
    validUntil?: Date;
}