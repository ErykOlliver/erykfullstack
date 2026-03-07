import { typeMailProps } from "@/src/modules/mail/type";

export async function postMail(data: typeMailProps) {
    const response = await fetch(`/api/sendmail`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        cache: 'no-store'
    })

    return response.json()
}