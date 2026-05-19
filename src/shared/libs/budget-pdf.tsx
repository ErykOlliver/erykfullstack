import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Line,
  Svg,
  Link,
} from "@react-pdf/renderer";

const C = {
  dark:     "#0F172A",
  accent:   "#EA580C",
  accentL:  "#FFF7ED",
  accentM:  "#FB923C",
  mid:      "#64748B",
  light:    "#F8FAFC",
  border:   "#E2E8F0",
  white:    "#FFFFFF",
  green:    "#16A34A",
  body:     "#334155",
};

const s = StyleSheet.create({
  page: {
    paddingHorizontal: 36,
    paddingVertical: 28,
    fontFamily: "Helvetica",
    backgroundColor: C.white,
    color: C.dark,
    fontSize: 10,
  },

  headerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" },
  headerLeft: { flexDirection: "column" },
  headerRight: { flexDirection: "column", alignItems: "flex-end" },
  docLabel: { fontSize: 7.5, color: C.mid, letterSpacing: 1.5, marginBottom: 3 },
  docTitle: { fontSize: 26, fontFamily: "Helvetica-Bold", color: C.dark, letterSpacing: -0.5 },
  docSub: { fontSize: 9.5, color: C.mid, marginTop: 3 },
  agencyName: { fontSize: 10, fontFamily: "Helvetica-Bold", color: C.dark },
  agencyEmail: { fontSize: 8, color: C.mid, marginTop: 2 },
  docNumber: { fontSize: 8.5, fontFamily: "Helvetica-Bold", color: C.accent, marginBottom: 4 },

  dividerOrange: { height: 2, backgroundColor: C.accent, marginTop: 10, marginBottom: 0 },
  dividerLight:  { height: 0.5, backgroundColor: C.border, marginVertical: 10 },

  sectionHeading: {
    fontSize: 7,
    fontFamily: "Helvetica-Bold",
    color: C.accent,
    letterSpacing: 1.4,
    marginTop: 16,
    marginBottom: 7,
  },

  cardsRow: { flexDirection: "row" },
  card: {
    flex: 1,
    backgroundColor: C.light,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  cardBorderRight: { borderRightWidth: 0.5, borderRightColor: C.border },
  cardLabel: { fontSize: 7.5, color: C.mid, marginBottom: 2 },
  cardValue: { fontSize: 9.5, fontFamily: "Helvetica-Bold", color: C.dark, lineHeight: 1.4 },

  projectName: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    color: C.dark,
    marginBottom: 5,
  },
  bodyText: { fontSize: 9.5, color: C.body, lineHeight: 1.65 },

  featureRow: {
    flexDirection: "row",
    paddingVertical: 5,
    borderBottomWidth: 0.4,
    borderBottomColor: C.border,
    alignItems: "center",
  },
  featureNum: {
    width: 20,
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: C.accent,
    textAlign: "center",
  },
  featureText: { flex: 1, fontSize: 9.5, color: C.body, lineHeight: 1.5 },

  priceBox: {
    flexDirection: "row",
    backgroundColor: C.accentL,
    marginTop: 2,
  },
  priceLeft: {
    flex: 1,
    padding: 14,
    borderLeftWidth: 3,
    borderLeftColor: C.accent,
    borderRightWidth: 0.5,
    borderRightColor: C.border,
  },
  priceRight: { flex: 1, padding: 14 },
  priceLabel: { fontSize: 7.5, color: C.mid, marginBottom: 3 },
  priceValue: { fontSize: 22, fontFamily: "Helvetica-Bold", color: C.dark, lineHeight: 1.2 },
  entryValue: { fontSize: 14, fontFamily: "Helvetica-Bold", color: C.green, lineHeight: 1.2 },
  condText: { fontSize: 7.5, color: C.mid, marginTop: 5 },
  linkText: { fontSize: 8.5, color: C.accent, marginTop: 5 },

  footerText: { fontSize: 7.5, color: C.mid, textAlign: "center" },
});

const brl = (v: number) =>
  "R$ " +
  v
    .toFixed(2)
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const DATA = {
  numero:         "ORC-2025-0047",
  clientName:     "Nexora Tecnologia Ltda.",
  clientContact:  "Fernanda Lopes — fernanda@nexora.com.br",
  niche:          "SaaS / Gestão de Projetos Corporativos",
  projectName:    "Plataforma Web NexaDesk",
  description:
    "Desenvolvimento de uma plataforma SaaS voltada à gestão de projetos e times " +
    "corporativos, com módulos de kanban interativo, relatórios em tempo real, controle " +
    "de acesso por papéis (RBAC), integrações via API REST e notificações multicanal. " +
    "O sistema será entregue com painel administrativo, área do cliente e aplicativo " +
    "mobile responsivo (PWA).",
  features: [
    "Dashboard analítico com métricas em tempo real e exportação CSV/PDF",
    "Quadro Kanban drag-and-drop com swimlanes e dependências entre tarefas",
    "Autenticação OAuth 2.0 + 2FA e controle de acesso por papéis (RBAC)",
    "Relatórios gerenciais com filtros avançados e gráficos interativos",
    "API REST documentada (OpenAPI 3.0) para integrações externas",
    "Notificações em tempo real via WebSocket (e-mail, push e Slack)",
    "Aplicativo mobile responsivo (PWA) com suporte offline",
    "Painel administrativo para gestão de usuários, planos e faturamento",
    "Infraestrutura escalável em nuvem (AWS) com CI/CD automatizado",
    "Documentação técnica completa e treinamento de onboarding",
  ],
  prazo:       "90 dias corridos após aprovação e pagamento da entrada",
  pubDate:     "30 de maio de 2025",
  valDate:     "27 de junho de 2025",
  valor:       48500.0,
  paymentLink: "https://pay.nexora.dev/entrada-orcamento-0047",
};


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

export const BudgetPdf = () => (
  <Document title={`Proposta Comercial — ${DATA.numero}`} author="Studio Dev">
    <Page size="A4" style={s.page}>

      <View style={s.headerRow}>
        <View style={s.headerLeft}>
          <Text style={s.docLabel}>PROPOSTA COMERCIAL</Text>
          <Text style={s.docTitle}>Desenvolvimento de{"\n"}Software</Text>
          <Text style={s.docSub}>Sob medida · Entrega ágil · Qualidade garantida</Text>
        </View>
        <View style={s.headerRight}>
          <Text style={s.docNumber}>Nº {DATA.numero}</Text>
          <Text style={s.agencyName}>Studio Dev</Text>
          <Text style={s.agencyEmail}>contato@studiodev.com.br</Text>
        </View>
      </View>

      <View style={s.dividerOrange} />

      <Text style={s.sectionHeading}>INFORMAÇÕES DO CLIENTE</Text>
      <InfoCards
        items={[
          { label: "CLIENTE / EMPRESA", value: DATA.clientName },
          { label: "CONTATO",           value: DATA.clientContact },
          { label: "SEGMENTO / NICHO",  value: DATA.niche },
        ]}
      />

      <Text style={s.sectionHeading}>SOBRE O PROJETO</Text>
      <Text style={s.projectName}>{DATA.projectName}</Text>
      <Text style={s.bodyText}>{DATA.description}</Text>

      <Text style={s.sectionHeading}>ESCOPO DE FUNCIONALIDADES</Text>
      <FeatureList features={DATA.features} />

      <Text style={s.sectionHeading}>PRAZOS E VALIDADE</Text>
      <InfoCards
        items={[
          { label: "PRAZO DE ENTREGA",            value: DATA.prazo },
          { label: "PUBLICAÇÃO DO ORÇAMENTO",     value: DATA.pubDate },
          { label: "VALIDADE DA PROPOSTA",        value: DATA.valDate },
        ]}
      />

      <Text style={s.sectionHeading}>INVESTIMENTO</Text>
      <View style={s.priceBox}>
        <View style={s.priceLeft}>
          <Text style={s.priceLabel}>VALOR TOTAL DO PROJETO</Text>
          <Text style={s.priceValue}>{brl(DATA.valor)}</Text>
          <Text style={s.condText}>Condições: 50% na aprovação · 50% na entrega</Text>
        </View>
        <View style={s.priceRight}>
          <Text style={s.priceLabel}>PAGAMENTO DE ENTRADA (50%)</Text>
          <Text style={s.entryValue}>{brl(DATA.valor / 2)}</Text>
          <Link src={DATA.paymentLink} style={s.linkText}>
            {DATA.paymentLink}
          </Link>
        </View>
      </View>

      <HR color={C.border} thickness={0.5} />
      <Text style={s.footerText}>
        Proposta {DATA.numero} · Válida até {DATA.valDate} · Este documento é
        confidencial e destinado exclusivamente ao cliente indicado.
      </Text>

    </Page>
  </Document>
);

export default BudgetPdf;