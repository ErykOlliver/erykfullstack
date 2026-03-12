import { Html, Head, Preview, Body, Container, Text, Heading, Section } from '@react-email/components';
import { typeMailProps } from './type';


export function LeadTemplate({ name, mail, phone }: typeMailProps) {
    return (
        <Html>
            <Head />
            <Preview>Novo contato do site</Preview>

            <Body>
                <Container>
                    <Heading>Novo Lead pelo Portfólio</Heading>

                    <Text><strong>Nome:</strong> {name}</Text>
                    <Text><strong>Email:</strong> {mail}</Text>
                    <Text><strong>Telefone:</strong> {phone}</Text>
                </Container>
            </Body>
        </Html>
    )
}

export function ClientTemplate({ name }: typeMailProps) {
    return (
        <Html>
            <Head />
            <Preview>Recebemos seu contato</Preview>

            <Body>
                <Container>

                    <Heading>Obrigado pelo contato, {name}!</Heading>

                    <Text>
                        Recebi sua mensagem através do meu portfólio.
                    </Text>

                    <Text>
                        Vou analisar as informações enviadas e retornar
                        em até <strong>24 horas</strong>.
                    </Text>

                    <Text>
                        Caso seja algo urgente, você também pode me chamar
                        diretamente pelo WhatsApp.
                    </Text>

                    <Text>
                        — Eryk Olliver
                    </Text>

                </Container>
            </Body>
        </Html>
    )
}