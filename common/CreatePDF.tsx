// src/components/Invoice.tsx
import React, { ReactNode, useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "jspdf/dist/polyfills.es.js";

const CreatePDF = ({
  children,
  buttonComp,
}: {
  children: ReactNode;
  buttonComp: ReactNode;
}) => {
  const invoiceRef = useRef<HTMLDivElement>(null);

  const generatePDF = async () => {
    const input = invoiceRef.current;
    if (input) {
      const canvas = await html2canvas(input);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProperties = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("invoice.pdf");
    }
  };

  return (
    <>
      <div ref={invoiceRef}>{children}</div>
      <button onClick={generatePDF}>{buttonComp}</button>
    </>
  );
};

export default CreatePDF;
