import { typeNetworkProps } from "@/src/modules/network/type"
import { ApiResponse } from "./type"

export async function getNetworks() {
    const networks = await fetch(`${process.env.NEXT_URL}/api/networks`, {
        cache: 'no-store'
    })

    const json: ApiResponse = await networks.json()

    const data = json.data

    return data
}

export async function deleteNetwork(id: number) {
    return await fetch(`${process.env.NEXT_PUBLIC_NEXT_URL}/api/networks/${id}`, {
        method: 'DELETE'
    })
}

export async function postNetwork(data: typeNetworkProps) {
    const network = await fetch(`${process.env.NEXT_PUBLIC_NEXT_URL}/api/networks/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        cache: 'no-store'
    })

    return await network.json()
}

