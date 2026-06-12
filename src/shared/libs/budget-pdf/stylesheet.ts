import { StyleSheet } from "@react-pdf/renderer";

const C = {
    dark: "#0F172A",
    accent: "#EA580C",
    accentL: "#FFF7ED",
    accentM: "#FB923C",
    mid: "#64748B",
    light: "#F8FAFC",
    border: "#E2E8F0",
    white: "#FFFFFF",
    green: "#16A34A",
    body: "#334155",
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
    dividerLight: { height: 0.5, backgroundColor: C.border, marginVertical: 10 },

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

export { s, C }