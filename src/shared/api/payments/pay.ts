import { generatePaymentLink } from './generate-payment';
import { typePaymentProps } from './type';

export async function generatePayment(data: typePaymentProps) {
    return await generatePaymentLink(data)
}