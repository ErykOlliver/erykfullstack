export type typeCreateBudgetProps = {
    clientName: string;
    clientContact: string | null;
    niche: string | null;
    projectName: string | null;
    description: string | null;
    features: string[];
    valuation: number;
    entryAmount: number | null;
    paymentConditions: string | null;
    deliveryDeadline: string | null;
    validUntil: Date | null;
}

export type typeGetBudgetProps = {
    id: string;
    quoteNumber: string;
    clientName: string;
    clientContact: string | null;
    niche: string | null;
    projectName: string | null;
    description: string | null;
    features: string[];
    valuation: number;
    entryAmount: number | null;
    paymentConditions: string | null;
    generatedLink: string;
    deliveryDeadline: string | null;
    validUntil: Date | null;
}

export type typeCreateBudgetInput = typeCreateBudgetProps & {
    quoteNumber: string;
    generatedLink: string;
}