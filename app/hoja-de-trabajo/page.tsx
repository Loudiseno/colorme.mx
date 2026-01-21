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
    <div className="min-h-screen bg-canvas">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-mist to-canvas-warm py-12 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary-light rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-sage rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink mb-6 animate-fade-up">
            Ejercicios Personalizados
          </h1>
          <p className="text-lg md:text-xl text-charcoal max-w-2xl mx-auto leading-relaxed animate-fade-up stagger-1">
            Cada momento pide algo diferente. Cuéntame qué estás viviendo hoy para crear un ejercicio pensado para ti. No necesitas experiencia ni técnica. Busca un lugar tranquilo y disfruta tu proceso.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 animate-fade-up stagger-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-base font-semibold text-charcoal mb-2">
                  Tu nombre <span className="text-coral">*</span>
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
                <label htmlFor="age" className="block text-base font-semibold text-charcoal mb-2">
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
                <label htmlFor="gender" className="block text-base font-semibold text-charcoal mb-2">
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
                <label htmlFor="griefOrGoal" className="block text-base font-semibold text-charcoal mb-2">
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
                <label htmlFor="emotion" className="block text-base font-semibold text-charcoal mb-2">
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
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isGenerating}
                  className="w-full btn-gradient text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Generando tus ejercicios personalizados...
                    </span>
                  ) : (
                    'Generar Mis Ejercicios Personalizados'
                  )}
                </button>
              </div>
            </form>

            {/* Info Box */}
            <div className="mt-8 p-6 bg-mist rounded-xl border-l-4 border-primary">
              <h3 className="font-display text-lg text-ink mb-3">¿Qué incluyen tus ejercicios personalizados?</h3>
              <ul className="space-y-2 text-base text-charcoal">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Instrucciones paso a paso.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Lista de materiales sugeridos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>PDF listo para descargar e imprimir cuando quieras usar.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Disclaimers */}
          <div className="mt-8 space-y-4 text-sm text-slate text-center max-w-2xl mx-auto">
            <p>
              Tus respuestas son privadas y se usan únicamente para generar tus ejercicios personalizados.
            </p>
            <p>
              Los ejercicios propuestos son únicamente una sugerencia de trabajo personal, basada en la información proporcionada por el usuario. Bajo ninguna circunstancia sustituyen una consulta, diagnóstico, tratamiento, atención profesional o intervención clínica, psicológica, psiquiátrica o médica.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="mt-8 text-center">
            <p className="text-base text-charcoal mb-4">
              ¿Necesitas apoyo adicional? Contáctame para sesiones personalizadas.
            </p>
            <a href="/#contacto" className="btn-primary inline-block">
              Ir al cuestionario de contacto
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
