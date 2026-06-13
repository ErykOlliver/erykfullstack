import { MercadoPagoConfig, Preference } from 'mercadopago';
import { typePaymentProps } from './type';

const client = new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN!
});

export async function generatePaymentLink(data: typePaymentProps): Promise<string> {
    const { valuation, projectName, id } = data;

    const preference = new Preference(client);

    console.log("valuation recebido:", valuation, typeof valuation)

    const mpResponse = await preference.create({
        body: {
            items: [{
                id,
                title: projectName,
                quantity: 1,
                unit_price: parseFloat(Number(valuation).toFixed(2)),
                currency_id: 'BRL',
            }],
            metadata: { id },
            payment_methods: {
                excluded_payment_types: [{ id: 'ticket' }],
            }
        }
    });

    return mpResponse.init_point!
}