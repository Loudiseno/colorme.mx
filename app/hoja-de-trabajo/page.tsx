'use client';

import { useState, useRef, useEffect } from 'react';
import { matchExercises } from '@/lib/artTherapyExercises';
import Image from 'next/image';

export default function WorksheetPage() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    griefOrGoal: '',
    emotion: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [lineWidth, setLineWidth] = useState(3);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const colors = [
    '#000000', // Black
    '#FF0000', // Red
    '#FF6B00', // Orange
    '#FFD700', // Gold
    '#00FF00', // Green
    '#B2F7EF', // Cyan (brand color)
    '#0000FF', // Blue
    '#800080', // Purple
    '#FF1493', // Pink
    '#8B4513', // Brown
    '#808080', // Gray
    '#FFFFFF', // White
  ];

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, []);

  // Drawing functions
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      setIsDrawing(true);
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.strokeStyle = selectedColor;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'round';
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  // Touch drawing functions for mobile
  const startTouchDrawing = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      setIsDrawing(true);
    }
  };

  const touchDraw = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.strokeStyle = selectedColor;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'round';
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  const stopTouchDrawing = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  };

  const downloadDrawing = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      // Import jsPDF dynamically
      const { jsPDF } = await import('jspdf');
      const pdf = new jsPDF();
      const pageWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const margin = 20;

      // Add ColorMe logo text at top center
      pdf.setFontSize(22);
      pdf.setFont('helvetica', 'bold');
      pdf.text('ColorMe', pageWidth / 2, 25, { align: 'center' });

      // Add title "Mapa Interior" on another line
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Mapa Interior', pageWidth / 2, 38, { align: 'center' });

      // Add date with much less weight
      const now = new Date();
      const dateStr = now.toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(120, 120, 120);
      pdf.text(dateStr, pageWidth / 2, 46, { align: 'center' });

      // Add cyan line below date
      pdf.setDrawColor(178, 247, 239); // #B2F7EF in RGB
      pdf.setLineWidth(0.8);
      pdf.line(margin, 50, pageWidth - margin, 50);

      // Add canvas image centered on the page
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 160; // Width in mm
      const imgHeight = 120; // Maintain 4:3 aspect ratio
      const imgX = (pageWidth - imgWidth) / 2; // Center horizontally
      const imgY = 58; // Position after cyan line
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth, imgHeight);

      // Add footer disclaimer at bottom
      const disclaimerY = pageHeight - 18;
      pdf.setFontSize(7);
      pdf.setFont('helvetica', 'italic');
      pdf.setTextColor(100, 100, 100);
      const disclaimer = 'Los ejercicios son una herramienta de exploración personal, no un tratamiento. Bajo ninguna circunstancia reemplazan atención profesional psicológica o médica.';
      const disclaimerLines = pdf.splitTextToSize(disclaimer, pageWidth - (margin * 2));
      pdf.text(disclaimerLines, pageWidth / 2, disclaimerY, { align: 'center' });

      // Add copyright
      pdf.setFontSize(7);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(100, 100, 100);
      pdf.text('Copyright 2026 ColorMe - Todos los derechos reservados', pageWidth / 2, pageHeight - 8, { align: 'center' });

      // Download
      pdf.save(`mapa-interior-${new Date().toISOString().split('T')[0]}.pdf`);
    } catch (error) {
      console.error('Error generating drawing PDF:', error);
      alert('Hubo un error al generar el PDF. Por favor intenta de nuevo.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    try {
      // Send email notification
      await fetch('/api/worksheet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Import PDF generation dynamically (client-side only)
      const { generateWorksheetPDF } = await import('@/lib/generatePDF');

      // Match exercises based on user input
      const exercises = matchExercises(
        formData.emotion,
        formData.griefOrGoal,
        parseInt(formData.age) || 25,
        1 // Get only 1 most relevant exercise
      );

      // Generate and download PDF
      await generateWorksheetPDF(formData, exercises);

      // Success message
      alert('¡Tu ejercicio personalizado ha sido generado! Revisa tu carpeta de descargas.');
    } catch (error) {
      console.error('Error generating PDF:', error);
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      console.error('Detalles del error:', errorMessage);
      alert(`Hubo un error al generar tus ejercicios personalizados. Por favor intenta de nuevo.\n\n${process.env.NODE_ENV === 'development' ? `Error: ${errorMessage}` : ''}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-[#B2F7EF]/10 py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl text-black mb-4">
            Exploraciones creativas
          </h1>
          <p className="text-lg text-black/80 max-w-2xl mx-auto">
            Dos ejercicios diseñados para ayudarte a explorar y expresar lo que sientes.
          </p>
        </div>
      </section>

      {/* Exercise 1: Form-based personalized exercise */}
      <section className="py-10">
        <div className="max-w-3xl mx-auto px-6">
          {/* Exercise Header with Badge */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#B2F7EF] flex items-center justify-center flex-shrink-0">
              <span className="text-black text-xl font-bold">1</span>
            </div>
            <h2 className="text-3xl text-black font-semibold">Ejercicio creativo personalizado</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 animate-fade-up stagger-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-base font-semibold text-black mb-2">
                  Tu nombre <span className="text-black">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input-full"
                  placeholder="Escribe tu nombre"
                />
              </div>

              {/* Age Field */}
              <div>
                <label htmlFor="age" className="block text-base font-semibold text-black mb-2">
                  Tu edad <span className="text-coral">*</span>
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  required
                  min="1"
                  max="120"
                  value={formData.age}
                  onChange={handleChange}
                  className="form-input-full"
                  placeholder="Ej: 25"
                />
              </div>

              {/* Gender Field */}
              <div>
                <label htmlFor="gender" className="block text-base font-semibold text-black mb-2">
                  Género <span className="text-coral">*</span>
                </label>
                <select
                  id="gender"
                  name="gender"
                  required
                  value={formData.gender}
                  onChange={handleChange}
                  className="form-input-full"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Masculino">Masculino</option>
                  <option value="No binario">No binario</option>
                  <option value="Prefiero no decir">Prefiero no decir</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              {/* Grief/Goal Field */}
              <div>
                <label htmlFor="griefOrGoal" className="block text-base font-semibold text-black mb-2">
                  Compárteme un poco sobre tu momento actual <span className="text-slate font-normal">(Por ejemplo: una pérdida, un cambio importante, una transición…)</span> <span className="text-coral">*</span>
                </label>
                <textarea
                  id="griefOrGoal"
                  name="griefOrGoal"
                  required
                  value={formData.griefOrGoal}
                  onChange={handleChange}
                  rows={4}
                  className="form-input-full resize-none"
                  placeholder="Escribe sobre lo que estás viviendo..."
                />
              </div>

              {/* Emotion Field */}
              <div>
                <label htmlFor="emotion" className="block text-base font-semibold text-black mb-2">
                  ¿Con qué emoción te gustaría trabajar? <span className="text-coral">*</span>
                </label>
                <input
                  type="text"
                  id="emotion"
                  name="emotion"
                  required
                  value={formData.emotion}
                  onChange={handleChange}
                  className="form-input-full"
                  placeholder="Ej: tristeza, ansiedad, enojo, miedo, alegría, confusión..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex justify-center">
                <button
                  type="submit"
                  disabled={isGenerating}
                  className="bg-[#B2F7EF] text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? 'Generando...' : 'Generar ejercicio'}
                </button>
              </div>
            </form>

            {/* Info Box */}
            <div className="mt-6 p-5 bg-[#B2F7EF]/10 rounded-xl border-l-4 border-[#B2F7EF]">
              <h3 className="text-base font-semibold text-black mb-3">¿Qué incluye tu ejercicio?</h3>
              <ul className="space-y-1.5 text-sm text-black/80">
                <li className="flex items-start gap-2">
                  <span className="text-[#B2F7EF] mt-0.5">✓</span>
                  <span>Instrucciones paso a paso</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B2F7EF] mt-0.5">✓</span>
                  <span>Lista de materiales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B2F7EF] mt-0.5">✓</span>
                  <span>PDF descargable</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Exercise 2: Drawing Canvas */}
      <section className="py-10 bg-[#B2F7EF]/5">
        <div className="max-w-3xl mx-auto px-6">
          {/* Exercise Header with Badge */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#B2F7EF] flex items-center justify-center flex-shrink-0">
              <span className="text-black text-xl font-bold">2</span>
            </div>
            <h2 className="text-3xl text-black font-semibold">Mapa Interior</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-lg text-black mb-2 font-semibold">
              ¿Si pudieras darle un color o una forma a lo que sientes, cómo se vería tu mundo interior?
            </p>
            <p className="text-black/70 mb-8">
              Usa este espacio para expresar lo que esté presente hoy, sin pensar si está bien o mal.
            </p>

            {/* Color Palette */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-black mb-2">
                Selector de colores:
              </label>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === color
                        ? 'border-black scale-110'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{
                      backgroundColor: color,
                      boxShadow: color === '#FFFFFF' ? 'inset 0 0 0 1px #e5e7eb' : 'none'
                    }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Line Width Selector */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-black mb-2">
                Selector de grosor de trazo: {lineWidth}px
              </label>
              <input
                type="range"
                min="1"
                max="20"
                value={lineWidth}
                onChange={(e) => setLineWidth(parseInt(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Canvas */}
            <div className="mb-4 border-2 border-gray-300 rounded-lg overflow-hidden">
              <canvas
                ref={canvasRef}
                width={800}
                height={600}
                className="w-full cursor-crosshair bg-white"
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startTouchDrawing}
                onTouchMove={touchDraw}
                onTouchEnd={stopTouchDrawing}
              />
            </div>

            {/* Canvas Controls */}
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                type="button"
                onClick={clearCanvas}
                className="bg-gray-200 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-300 transition-all"
              >
                Reiniciar lienzo
              </button>
              <button
                type="button"
                onClick={downloadDrawing}
                className="bg-[#B2F7EF] text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all"
              >
                Descargar como PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimers */}
      <section className="py-6">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-2 text-xs text-gray-500 text-center max-w-2xl mx-auto">
            <p>
              Los ejercicios son una herramienta de exploración personal, no un tratamiento. Bajo ninguna circunstancia reemplazan atención profesional psicológica o médica.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="mt-6 text-center">
            <p className="text-sm text-black mb-3">
              ¿Necesitas apoyo profesional?
            </p>
            <a href="/#contacto" className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block">
              Contactar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
