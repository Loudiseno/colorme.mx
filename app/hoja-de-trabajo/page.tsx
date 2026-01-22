'use client';

import { useState } from 'react';
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    try {
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
    } catch (error) {
      console.error('Error generating PDF:', error);
      // Show more detailed error in development
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
            Ejercicios Personalizados
          </h1>
          <p className="text-lg text-black/80 max-w-2xl mx-auto">
            Responde unas breves preguntas y recibe un ejercicio diseñado exclusivamente para lo que sientes hoy.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-10">
        <div className="max-w-3xl mx-auto px-6">
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
                  className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-black/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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

          {/* Disclaimers */}
          <div className="mt-6 space-y-2 text-xs text-gray-500 text-center max-w-2xl mx-auto">
            <p>
              Tus respuestas son privadas.
            </p>
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
