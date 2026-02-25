import { createNetwork } from "@/src/modules/network/services/create-network";
import { listNetwork } from "@/src/modules/network/services/list-network";
import { typeNetworkProps } from "@/src/modules/network/type";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const networks = await listNetwork()

        return NextResponse.json({
            status: 'success',
            data: networks
        })
    } catch (error) {
        NextResponse.json({
            status: 'error',
            message: 'error: Erro ao buscar redes sociais',
            error
        }, { status: 500 })
    }
}

export async function POST(req: Request) {
    const body: typeNetworkProps = await req.json()

    try {
        const network = await createNetwork(body)

        return NextResponse.json({
            status: 'success',
            data: network
        }, { status: 201 })
    } catch (error) {
        return NextResponse.json({
            status: 'error',
            message: 'error: Erro ao criar rede social',
            error
        }, { status: 500 })
    }

}
