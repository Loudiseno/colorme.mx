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
      <section className="relative bg-gradient-to-br from-primary/10 via-mist to-canvas-warm py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary-light rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-sage rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink mb-6 animate-fade-up">
            Ejercicios Personalizados
          </h1>
          <p className="text-lg md:text-xl text-charcoal max-w-2xl mx-auto leading-relaxed animate-fade-up stagger-1">
            Crea tus propios ejercicios personalizados de arteterapia. Responde unas preguntas breves y recibe ejercicios diseñados específicamente para ti.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 animate-fade-up stagger-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
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
                <label htmlFor="age" className="block text-sm font-medium text-charcoal mb-2">
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
                <label htmlFor="gender" className="block text-sm font-medium text-charcoal mb-2">
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
                <label htmlFor="griefOrGoal" className="block text-sm font-medium text-charcoal mb-2">
                  ¿Qué estás procesando o qué te gustaría lograr? <span className="text-coral">*</span>
                </label>
                <textarea
                  id="griefOrGoal"
                  name="griefOrGoal"
                  required
                  value={formData.griefOrGoal}
                  onChange={handleChange}
                  rows={4}
                  className="form-input-full resize-none"
                  placeholder="Ej: Estoy procesando la pérdida de un ser querido, una transición de carrera, o quiero trabajar en mi autoestima..."
                />
                <p className="mt-2 text-sm text-slate">
                  Comparte lo que sientes cómodo expresando. Esto nos ayudará a personalizar tus ejercicios.
                </p>
              </div>

              {/* Emotion Field */}
              <div>
                <label htmlFor="emotion" className="block text-sm font-medium text-charcoal mb-2">
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
                <p className="mt-2 text-sm text-slate">
                  Puedes escribir una o varias emociones que estés experimentando.
                </p>
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
              <h3 className="font-display text-lg text-ink mb-2">¿Qué incluyen tus ejercicios personalizados?</h3>
              <ul className="space-y-2 text-charcoal">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Un ejercicio de arteterapia personalizado basado en tu emoción y situación específica</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Instrucciones detalladas paso a paso en español</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Lista de materiales necesarios para cada ejercicio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Beneficios terapéuticos de cada actividad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Formato PDF elegante y profesional listo para imprimir</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-slate mb-4">
              Tus respuestas son privadas y se usan únicamente para generar tus ejercicios personalizados.
            </p>
            <p className="text-sm text-slate">
              ¿Necesitas apoyo adicional?{' '}
              <a href="/#contacto" className="text-primary hover:text-primary-dark underline transition-colors">
                Contáctame
              </a>{' '}
              para sesiones personalizadas de arteterapia.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
