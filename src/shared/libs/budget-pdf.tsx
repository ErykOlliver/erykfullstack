import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    backgroundColor: '#FFFFFF',
    color: '#1A1A1A',
  },
  header: {
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 10,
    color: '#6B7280',
    marginTop: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#374151',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  text: {
    fontSize: 11,
    lineHeight: 1.6,
    color: '#4B5563',
  },
  priceBox: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#F9FAFB',
    borderRadius: 4,
    borderLeftWidth: 3,
    borderLeftColor: '#111827',
  },
  priceText: {
    fontSize: 14,
    fontWeight: 'bold',
  }
});

interface OrcamentoProps {
  clientName: string;
  niche: string;
  description: string;
  valuation: number;
  paymentLink: string;
}

export const BudgetPdf = ({ clientName, niche, description, valuation, paymentLink }: OrcamentoProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Proposta Comercial</Text>
        <Text style={styles.subtitle}>Desenvolvimento de Software Customizado</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cliente</Text>
        <Text style={styles.text}>Nome/Empresa: {clientName}</Text>
        <Text style={styles.text}>Segmento/Nicho: {niche}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Escopo e Descrição</Text>
        <Text style={styles.text}>{description}</Text>
      </View>

      <View style={styles.priceBox}>
        <Text style={[styles.text, { marginBottom: 5 }]}>Investimento Total:</Text>
        <Text style={styles.priceText}>
          {valuation.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </Text>
        <Text style={[styles.text, { marginTop: 10, fontSize: 10, color: '#2563EB' }]}>
          Clique aqui para efetuar o pagamento de entrada (50%): {paymentLink}
        </Text>
      </View>
    </Page>
  </Document>
);