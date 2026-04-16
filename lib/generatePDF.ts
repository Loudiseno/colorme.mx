import { jsPDF } from 'jspdf';

interface FormData {
  name: string;
  age: string;
  gender: string;
  griefOrGoal: string;
  emotion: string;
}

interface Exercise {
  title: string;
  materials: string[];
  instructions: string[];
  duration: string;
  description?: string;
  benefits?: string;
}

export async function generateWorksheetPDF(formData: FormData, exercises: Exercise[]) {
  const pdf = new jsPDF();
  const pageWidth = 210; // A4 width in mm
  const pageHeight = 297; // A4 height in mm
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);

  // Load and add COLORME_logonegro.png logo at top center
  let headerY = 15;
  try {
    const logoResponse = await fetch('/COLORME_logonegro.png');
    const logoBlob = await logoResponse.blob();
    const logoDataUrl = await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(logoBlob);
    });
    const logoWidth = 50;
    const logoHeight = 9;
    const logoX = (pageWidth - logoWidth) / 2;
    pdf.addImage(logoDataUrl, 'PNG', logoX, headerY, logoWidth, logoHeight);
    headerY += logoHeight + 3;
  } catch {
    pdf.setFontSize(20);
    pdf.setFont('helvetica', 'bold');
    pdf.text('ColorMe', pageWidth / 2, headerY + 6, { align: 'center' });
    headerY += 12;
  }

  // Add title
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(0, 0, 0);
  pdf.text('Ejercicio Creativo Personalizado', pageWidth / 2, headerY + 4, { align: 'center' });
  headerY += 8;

  // Add date
  const now = new Date();
  const dateStr = now.toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  pdf.setFontSize(8);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(140, 140, 140);
  pdf.text(dateStr, pageWidth / 2, headerY + 4, { align: 'center' });
  headerY += 7;

  // Cyan separator line
  pdf.setDrawColor(178, 247, 239);
  pdf.setLineWidth(0.8);
  pdf.line(margin, headerY, pageWidth - margin, headerY);
  headerY += 6;

  let yPos = headerY;

  // Add user info section
  pdf.setFontSize(9);
  pdf.setTextColor(0, 0, 0);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Para:', margin, yPos);
  pdf.setFont('helvetica', 'normal');
  pdf.text(`${formData.name}, ${formData.age} anos`, margin + 15, yPos);
  yPos += 6;

  pdf.setFont('helvetica', 'bold');
  pdf.text('Emocion a trabajar:', margin, yPos);
  pdf.setFont('helvetica', 'normal');
  pdf.text(formData.emotion, margin + 40, yPos);
  yPos += 8;

  pdf.setFont('helvetica', 'bold');
  pdf.text('Momento actual:', margin, yPos);
  yPos += 5;
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(9);
  const momentLines = pdf.splitTextToSize(formData.griefOrGoal, contentWidth);
  pdf.text(momentLines, margin, yPos);
  yPos += (momentLines.length * 4.5) + 6;

  // Add exercise if available
  if (exercises && exercises.length > 0) {
    const exercise = exercises[0];

    // Exercise title
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text(exercise.title, margin, yPos);
    yPos += 6;

    // Time estimate (avoiding special characters)
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'italic');
    pdf.text(`Tiempo estimado: ${exercise.duration}`, margin, yPos);
    yPos += 7;

    // Description if available
    if (exercise.description) {
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      const descLines = pdf.splitTextToSize(exercise.description, contentWidth);
      pdf.text(descLines, margin, yPos);
      yPos += (descLines.length * 4.5) + 4;
    }

    // Materials
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Materiales:', margin, yPos);
    yPos += 5;
    pdf.setFont('helvetica', 'normal');
    exercise.materials.forEach((material) => {
      const matLines = pdf.splitTextToSize(`- ${material}`, contentWidth - 10);
      pdf.text(matLines, margin + 5, yPos);
      yPos += matLines.length * 4.5;
    });
    yPos += 4;

    // Instructions
    pdf.setFont('helvetica', 'bold');
    pdf.text('Pasos:', margin, yPos);
    yPos += 5;
    pdf.setFont('helvetica', 'normal');
    const maxInstructions = Math.min(exercise.instructions.length, 5);
    for (let i = 0; i < maxInstructions; i++) {
      const stepLines = pdf.splitTextToSize(`${i + 1}. ${exercise.instructions[i]}`, contentWidth - 10);
      pdf.text(stepLines, margin + 5, yPos);
      yPos += (stepLines.length * 4.5) + 2;
    }

    // Benefits if available
    if (exercise.benefits) {
      yPos += 2;
      pdf.setFont('helvetica', 'bold');
      pdf.text('Beneficios:', margin, yPos);
      yPos += 5;
      pdf.setFont('helvetica', 'normal');
      const benefitLines = pdf.splitTextToSize(exercise.benefits, contentWidth);
      pdf.text(benefitLines, margin, yPos);
    }
  }

  // Footer disclaimer at bottom
  pdf.setFontSize(6.5);
  pdf.setFont('helvetica', 'italic');
  pdf.setTextColor(100, 100, 100);
  const disclaimer = 'Los ejercicios son una herramienta de exploracion personal, no un tratamiento. Bajo ninguna circunstancia reemplazan atencion profesional psicologica o medica.';
  const disclaimerLines = pdf.splitTextToSize(disclaimer, contentWidth);
  pdf.text(disclaimerLines, pageWidth / 2, pageHeight - 16, { align: 'center' });

  // Copyright
  pdf.setFontSize(6.5);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Copyright 2026 ColorMe - Todos los derechos reservados', pageWidth / 2, pageHeight - 8, { align: 'center' });

  // Download the PDF
  pdf.save(`ejercicio-personalizado-${formData.name.replace(/\s+/g, '-').toLowerCase()}-${new Date().toISOString().split('T')[0]}.pdf`);
}
