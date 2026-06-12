import { typeGetBudgetProps } from "@/src/modules/dashboard/budgets-and-payments/type";
import { Document, Page, Text, View, StyleSheet, Line, Svg, Link } from "@react-pdf/renderer";
import { C, s } from "./stylesheet";


const brl = (v: number) =>
  "R$ " +
  v
    .toFixed(2)
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

type BudgetPdfProps = Pick<typeGetBudgetProps,
  'quoteNumber' | 'clientName' | 'clientContact' | 'niche' |
  'projectName' | 'description' | 'features' | 'valuation' |
  'entryAmount' | 'paymentConditions' | 'generatedLink' |
  'deliveryDeadline' | 'validUntil'
>


const HR = ({ color = C.border, thickness = 0.5 }: { color?: string; thickness?: number }) => (
  <Svg height={thickness + 1} style={{ marginVertical: 8 }}>
    <Line x1="0" y1="0" x2="595" y2="0" strokeWidth={thickness} stroke={color} />
  </Svg>
);

const InfoCards = ({
  items,
}: {
  items: { label: string; value: string }[];
}) => (
  <View style={s.cardsRow}>
    {items.map((item, i) => (
      <View
        key={i}
        style={[s.card, i < items.length - 1 ? s.cardBorderRight : {}]}
      >
        <Text style={s.cardLabel}>{item.label}</Text>
        <Text style={s.cardValue}>{item.value}</Text>
      </View>
    ))}
  </View>
);

const FeatureList = ({ features }: { features: string[] }) => (
  <View>
    {features.map((f, i) => (
      <View key={i} style={s.featureRow}>
        <Text style={s.featureNum}>{String(i + 1).padStart(2, "0")}</Text>
        <Text style={s.featureText}>{f}</Text>
      </View>
    ))}
  </View>
);

export const BudgetPdf = ({
  quoteNumber,
  clientName,
  clientContact,
  niche,
  projectName,
  description,
  features,
  valuation,
  entryAmount,
  paymentConditions,
  generatedLink,
  deliveryDeadline,
  validUntil,
}: BudgetPdfProps) => (
  
  <Document title={`Proposta Comercial — ${quoteNumber}`} author="Eryk Olliver Full-Stack">
    <Page size="A4" style={s.page}>

      <View style={s.headerRow}>
        <View style={s.headerLeft}>
          <Text style={s.docLabel}>PROPOSTA COMERCIAL</Text>
          <Text style={s.docTitle}>Desenvolvimento de{"\n"}Software</Text>
          <Text style={s.docSub}>Sob medida · Entrega ágil · Qualidade garantida</Text>
        </View>
        <View style={s.headerRight}>
          <Text style={s.docNumber}>Nº {quoteNumber}</Text>
          <Text style={s.agencyName}>Eryk Olliver Full-Stack</Text>
          <Text style={s.agencyEmail}>contato@studiodev.com.br</Text>
        </View>
      </View>

      <View style={s.dividerOrange} />

      <Text style={s.sectionHeading}>INFORMAÇÕES DO CLIENTE</Text>
      <InfoCards
        items={[
          { label: "CLIENTE / EMPRESA", value: clientName },
          { label: "CONTATO", value: clientContact || "Não informado" },
          { label: "SEGMENTO / NICHO", value: niche || "Não informado" },
        ]}
      />

      <Text style={s.sectionHeading}>SOBRE O PROJETO</Text>
      <Text style={s.projectName}>{projectName}</Text>
      <Text style={s.bodyText}>{description}</Text>

      <Text style={s.sectionHeading}>ESCOPO DE FUNCIONALIDADES</Text>
      <FeatureList features={features} />

      <Text style={s.sectionHeading}>PRAZOS E VALIDADE</Text>
      <InfoCards
        items={[
          { label: "PRAZO DE ENTREGA", value: deliveryDeadline || "Não informado" },
          { label: "PUBLICAÇÃO DO ORÇAMENTO", value: String(validUntil) || "Não informado" },
          { label: "VALIDADE DA PROPOSTA", value: String(validUntil) || "Não informado" },
        ]}
      />

      <Text style={s.sectionHeading}>INVESTIMENTO</Text>
      <View style={s.priceBox}>
        <View style={s.priceLeft}>
          <Text style={s.priceLabel}>VALOR TOTAL DO PROJETO</Text>
          <Text style={s.priceValue}>{brl(valuation)}</Text>
          <Text style={s.condText}>Condições: {paymentConditions}</Text>
        </View>
        <View style={s.priceRight}>
          <Text style={s.priceLabel}>PAGAMENTO DE ENTRADA (50%)</Text>
          <Text style={s.entryValue}>{brl(entryAmount || 0)}</Text>
          <Link src={generatedLink} style={s.linkText}>
            {generatedLink}
          </Link>
        </View>
      </View>

      <HR color={C.border} thickness={0.5} />
      <Text style={s.footerText}>
        Proposta {quoteNumber} · Válida até {String(validUntil)} · Este documento é
        confidencial e destinado exclusivamente ao cliente indicado.
      </Text>

    </Page>
  </Document>
);

export default BudgetPdf;