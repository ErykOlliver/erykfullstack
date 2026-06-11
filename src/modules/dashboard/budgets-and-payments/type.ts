export type typeCreateBudgetProps = {
    clientName: string;
    clientContact?: string;
    niche?: string;
    projectName?: string;
    description?: string;
    features?: string[];
    valuation: number;
    entryAmount?: number;
    paymentConditions?: string;
    deliveryDeadline?: string;
    validUntil?: Date;
}

export type typeCreateBudgetInput = typeCreateBudgetProps & {
    quoteNumber: string;
    generatedLink: string;
}