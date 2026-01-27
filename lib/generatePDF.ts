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
  steps: string[];
  timeEstimate: string;
}

export async function generateWorksheetPDF(formData: FormData, exercises: Exercise[]) {
  const pdf = new jsPDF();
  const pageWidth = 210; // A4 width in mm
  const pageHeight = 297; // A4 height in mm
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);

  // Add logo at top center
  pdf.setFontSize(20);
  pdf.setFont('helvetica', 'bold');
  pdf.text('ColorMe', pageWidth / 2, 20, { align: 'center' });

  // Add date
  const now = new Date();
  const dateStr = now.toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.text(dateStr, pageWidth / 2, 28, { align: 'center' });

  // Add title
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Ejercicio Creativo Personalizado', pageWidth / 2, 40, { align: 'center' });

  let yPos = 50;

  // Add user info section
  pdf.setFontSize(11);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Para:', margin, yPos);
  pdf.setFont('helvetica', 'normal');
  pdf.text(`${formData.name}, ${formData.age} años`, margin + 15, yPos);
  yPos += 8;

  // Add emotion focus
  pdf.setFont('helvetica', 'bold');
  pdf.text('Emoción a trabajar:', margin, yPos);
  pdf.setFont('helvetica', 'normal');
  pdf.text(formData.emotion, margin + 45, yPos);
  yPos += 10;

  // Add moment description
  pdf.setFont('helvetica', 'bold');
  pdf.text('Momento actual:', margin, yPos);
  yPos += 6;
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(10);
  const momentLines = pdf.splitTextToSize(formData.griefOrGoal, contentWidth);
  pdf.text(momentLines, margin, yPos);
  yPos += (momentLines.length * 5) + 10;

  // Add exercise if available
  if (exercises && exercises.length > 0) {
    const exercise = exercises[0];

    // Exercise title
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text(exercise.title, margin, yPos);
    yPos += 8;

    // Time estimate
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'italic');
    pdf.text(`Tiempo estimado: ${exercise.timeEstimate}`, margin, yPos);
    yPos += 10;

    // Materials
    pdf.setFont('helvetica', 'bold');
    pdf.text('Materiales:', margin, yPos);
    yPos += 6;
    pdf.setFont('helvetica', 'normal');
    exercise.materials.forEach((material) => {
      pdf.text(`• ${material}`, margin + 5, yPos);
      yPos += 5;
    });
    yPos += 5;

    // Steps
    pdf.setFont('helvetica', 'bold');
    pdf.text('Pasos:', margin, yPos);
    yPos += 6;
    pdf.setFont('helvetica', 'normal');
    exercise.steps.forEach((step, index) => {
      const stepLines = pdf.splitTextToSize(`${index + 1}. ${step}`, contentWidth - 10);
      pdf.text(stepLines, margin + 5, yPos);
      yPos += (stepLines.length * 5) + 3;
    });
  }

  // Add disclaimer at bottom
  const disclaimerY = pageHeight - 25;
  pdf.setFontSize(8);
  pdf.setFont('helvetica', 'italic');
  pdf.setTextColor(100, 100, 100);
  const disclaimer = 'Los ejercicios son una herramienta de exploración personal, no un tratamiento. Bajo ninguna circunstancia reemplazan atención profesional psicológica o médica.';
  const disclaimerLines = pdf.splitTextToSize(disclaimer, contentWidth);
  pdf.text(disclaimerLines, pageWidth / 2, disclaimerY, { align: 'center' });

  // Add copyright
  pdf.setFontSize(7);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Copyright 2026 ColorMe - Todos los derechos reservados', pageWidth / 2, pageHeight - 10, { align: 'center' });

  // Download the PDF
  pdf.save(`ejercicio-personalizado-${formData.name.replace(/\s+/g, '-').toLowerCase()}-${new Date().toISOString().split('T')[0]}.pdf`);
}
