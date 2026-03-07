import { Html, Head, Preview, Body, Container, Text, Heading, Section } from '@react-email/components';
import { typeMailProps } from './type';


export default function MailTemplate({ mail, message, name }: typeMailProps) {
    return (
        <Html>
            <Head />
            <Preview>Novo contato de {name}</Preview>
            <Body style={{ backgroundColor: '#f6f9fc', padding: '20px' }}>
                <Container style={{ backgroundColor: '#ffffff', border: '1px solid #e1e1e1', padding: '40px' }}>
                    <Heading>Novo contato via Portfólio</Heading>
                    <Section>
                        <Text><strong>Nome:</strong> {name}</Text>
                        <Text><strong>E-mail:</strong> {mail}</Text>
                        <Text><strong>Mensagem:</strong></Text>
                        <Text style={{ fontStyle: 'italic' }}>{message}</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}