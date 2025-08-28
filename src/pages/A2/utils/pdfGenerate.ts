import { jsPDF } from "jspdf";

function sectionTitle(doc, title, y, margin) {
    doc.setFont("helvetica", "bold");
    doc.setTextColor(30);
    doc.text(title, margin, y);
    doc.setTextColor(0);
    doc.setFont("helvetica", "normal");
    return y + 18;
}

function labeledText(doc, label, value, y, margin, maxWidth = 360) {
    const labelW = 110;
    doc.setFont("helvetica", "bold");
    doc.text(label, margin, y);
    doc.setFont("helvetica", "normal");
    const text = doc.splitTextToSize(value, maxWidth);
    doc.text(text, margin + labelW, y);
    return y + 18 + (Array.isArray(text) ? (text.length - 1) * 14 : 0);
}

export function generatePdfBlobUrl(values) {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const margin = 48;
    let y = margin;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Lê Bá Trình - Frontend Developer", margin, y);
    y += 10;
    doc.setDrawColor(150);
    doc.setLineWidth(1);
    doc.line(margin, y, doc.internal.pageSize.getWidth() - margin, y);
    y += 24;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    y = sectionTitle(doc, "1) Personal Information", y, margin);
    y = labeledText(doc, "Full name:", values.fullName || "—", y, margin);
    y = labeledText(doc, "Email:", values.email || "—", y, margin);
    y = labeledText(doc, "Phone:", values.phone || "—", y, margin);

    y += 6;
    y = sectionTitle(doc, "2) Address & Dates", y, margin);
    y = labeledText(doc, "Address:", values.address || "—", y, margin, 480);
    y = labeledText(doc, "City:", values.city || "—", y, margin);
    y = labeledText(doc, "Country:", values.country || "—", y, margin);
    y = labeledText(doc, "Start date:", values.startDate || "—", y, margin);

    y += 6;
    y = sectionTitle(doc, "3) Preferences", y, margin);
    y = labeledText(doc, "Plan:", values.plan || "—", y, margin);
    y = labeledText(doc, "Quantity:", String(values.quantity ?? "—"), y, margin);

    y += 6;
    doc.setFont("helvetica", "bold");
    doc.text("Notes:", margin, y);
    doc.setFont("helvetica", "normal");
    const maxW = doc.internal.pageSize.getWidth() - margin * 2;
    const wrapped = doc.splitTextToSize((values.notes || "—").trim() || "—", maxW);
    y += 16;
    doc.text(wrapped, margin, y);

    return URL.createObjectURL(doc.output("blob"));
}
