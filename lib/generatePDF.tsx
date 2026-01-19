import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';
import type { ArtTherapyExercise } from './artTherapyExercises';

// Define styles matching the ColorMe brand
const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#FDFCFA',
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#0D9488',
  },
  logoText: {
    fontSize: 24,
    color: '#0D9488',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    color: '#0D9488',
    fontWeight: 'bold',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 11,
    color: '#6B7A8C',
    marginBottom: 4,
  },
  infoSection: {
    backgroundColor: '#F0F7F6',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  infoLabel: {
    fontSize: 10,
    color: '#3D4852',
    fontWeight: 'bold',
    width: 120,
  },
  infoValue: {
    fontSize: 10,
    color: '#1C1C28',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 14,
    color: '#0D9488',
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  exerciseContainer: {
    marginBottom: 20,
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E8F4F3',
  },
  exerciseTitle: {
    fontSize: 12,
    color: '#0F766E',
    fontWeight: 'bold',
    marginBottom: 6,
  },
  exerciseDescription: {
    fontSize: 10,
    color: '#3D4852',
    marginBottom: 8,
    lineHeight: 1.4,
  },
  subsectionTitle: {
    fontSize: 10,
    color: '#0D9488',
    fontWeight: 'bold',
    marginTop: 6,
    marginBottom: 4,
  },
  instructionItem: {
    fontSize: 9,
    color: '#1C1C28',
    marginBottom: 3,
    marginLeft: 10,
    lineHeight: 1.3,
  },
  materials: {
    fontSize: 9,
    color: '#3D4852',
    fontStyle: 'italic',
    marginBottom: 6,
  },
  duration: {
    fontSize: 9,
    color: '#6B7A8C',
    marginBottom: 6,
  },
  benefits: {
    fontSize: 9,
    color: '#0F766E',
    backgroundColor: '#F0F7F6',
    padding: 8,
    borderRadius: 4,
    marginTop: 6,
    lineHeight: 1.3,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#CBD5E1',
  },
  copyright: {
    fontSize: 8,
    color: '#6B7A8C',
  },
  disclaimer: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#FFF9E6',
    borderRadius: 6,
    borderLeftWidth: 3,
    borderLeftColor: '#F59E0B',
  },
  disclaimerText: {
    fontSize: 9,
    color: '#92400E',
    textAlign: 'center',
    lineHeight: 1.4,
    fontStyle: 'italic',
  },
});

interface WorksheetData {
  name: string;
  age: string;
  gender: string;
  griefOrGoal: string;
  emotion: string;
}

// PDF Document Component
const WorksheetDocument = ({ data, exercises }: { data: WorksheetData; exercises: ArtTherapyExercise[] }) => {
  const currentDate = new Date().toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Document>
      {/* First Page */}
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logoText}>ColorMe</Text>
          <Text style={styles.title}>Guía Personalizada de Arteterapia</Text>
          <Text style={styles.subtitle}>Ejercicios terapéuticos diseñados especialmente para ti</Text>
        </View>

        {/* Personal Information */}
        <View style={styles.infoSection}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Nombre:</Text>
            <Text style={styles.infoValue}>{data.name}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Fecha:</Text>
            <Text style={styles.infoValue}>{currentDate}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Edad:</Text>
            <Text style={styles.infoValue}>{data.age} años</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Género:</Text>
            <Text style={styles.infoValue}>{data.gender}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Emoción a trabajar:</Text>
            <Text style={styles.infoValue}>{data.emotion}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Objetivo/Proceso:</Text>
            <Text style={styles.infoValue}>{data.griefOrGoal}</Text>
          </View>
        </View>

        {/* Introduction */}
        <Text style={styles.sectionTitle}>Tus Ejercicios Personalizados</Text>
        <Text style={{ fontSize: 10, color: '#3D4852', marginBottom: 15, lineHeight: 1.4 }}>
          Estos ejercicios han sido seleccionados específicamente para ti. Tómate tu tiempo con cada uno. El proceso creativo en sí mismo es terapéutico. Recuerda que no se trata de crear "arte perfecto", sino de expresarte auténticamente.
        </Text>

        {/* First Exercise */}
        {exercises.length > 0 && (
          <View style={styles.exerciseContainer} wrap={false}>
            <Text style={styles.exerciseTitle}>1. {exercises[0].title}</Text>
            <Text style={styles.duration}>Duración: {exercises[0].duration}</Text>
            <Text style={styles.exerciseDescription}>{exercises[0].description}</Text>

            <Text style={styles.subsectionTitle}>Materiales necesarios:</Text>
            <Text style={styles.materials}>{exercises[0].materials.join(', ')}</Text>

            <Text style={styles.subsectionTitle}>Instrucciones:</Text>
            {exercises[0].instructions.map((instruction, idx) => (
              <Text key={idx} style={styles.instructionItem}>
                {idx + 1}. {instruction}
              </Text>
            ))}

            <Text style={styles.benefits}>Beneficios: {exercises[0].benefits}</Text>
          </View>
        )}

        {/* Footer */}
        <View style={styles.footer} fixed>
          <Text style={styles.copyright}>Copyright 2026 ColorMe - Todos los derechos reservados</Text>
        </View>
      </Page>

      {/* Additional Pages for Remaining Exercises */}
      {exercises.slice(1).map((exercise, index) => (
        <Page key={exercise.id} size="A4" style={styles.page}>
          <View style={styles.header}>
            <Text style={styles.title}>Guía Personalizada</Text>
            <Text style={styles.subtitle}>{data.name} - {currentDate}</Text>
          </View>

          <View style={styles.exerciseContainer}>
            <Text style={styles.exerciseTitle}>{index + 2}. {exercise.title}</Text>
            <Text style={styles.duration}>Duración: {exercise.duration}</Text>
            <Text style={styles.exerciseDescription}>{exercise.description}</Text>

            <Text style={styles.subsectionTitle}>Materiales necesarios:</Text>
            <Text style={styles.materials}>{exercise.materials.join(', ')}</Text>

            <Text style={styles.subsectionTitle}>Instrucciones:</Text>
            {exercise.instructions.map((instruction, idx) => (
              <Text key={idx} style={styles.instructionItem}>
                {idx + 1}. {instruction}
              </Text>
            ))}

            <Text style={styles.benefits}>Beneficios: {exercise.benefits}</Text>
          </View>

          <View style={styles.footer} fixed>
            <Text style={styles.copyright}>Copyright 2026 ColorMe - Todos los derechos reservados</Text>
          </View>
        </Page>
      ))}

      {/* Final Page with Disclaimer */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Reflexiones Finales</Text>
        </View>

        <Text style={styles.sectionTitle}>Recuerda...</Text>

        <Text style={{ fontSize: 10, color: '#1C1C28', marginBottom: 8, lineHeight: 1.5 }}>
          • No existe el "arte malo" en arteterapia. El proceso es más importante que el resultado.
        </Text>
        <Text style={{ fontSize: 10, color: '#1C1C28', marginBottom: 8, lineHeight: 1.5 }}>
          • Permite que tus emociones fluyan sin juicio. El arte es un espacio seguro para expresarte.
        </Text>
        <Text style={{ fontSize: 10, color: '#1C1C28', marginBottom: 8, lineHeight: 1.5 }}>
          • Puedes repetir estos ejercicios tantas veces como desees. Cada vez será diferente.
        </Text>
        <Text style={{ fontSize: 10, color: '#1C1C28', marginBottom: 8, lineHeight: 1.5 }}>
          • Si un ejercicio te resulta demasiado intenso, está bien pausar y volver cuando te sientas listo/a.
        </Text>

        <View style={{ marginTop: 20, padding: 15, backgroundColor: '#F0F7F6', borderRadius: 6 }}>
          <Text style={{ fontSize: 11, color: '#0F766E', fontWeight: 'bold', marginBottom: 6 }}>
            ¿Necesitas acompañamiento profesional?
          </Text>
          <Text style={{ fontSize: 10, color: '#3D4852', lineHeight: 1.4 }}>
            Si deseas profundizar en tu proceso de sanación con apoyo personalizado, ofrezco sesiones individuales de arteterapia y tanatología. Visita colorme.mx para más información.
          </Text>
        </View>

        {/* Disclaimer */}
        <View style={styles.disclaimer}>
          <Text style={styles.disclaimerText}>
            Los ejercicios compartidos son solo una sugerencia de práctica personal y no reemplazan atención profesional, terapéutica o clínica.
          </Text>
        </View>

        <View style={styles.footer} fixed>
          <Text style={styles.copyright}>Copyright 2026 ColorMe - Todos los derechos reservados</Text>
        </View>
      </Page>
    </Document>
  );
};

// Function to generate and download the PDF
export async function generateWorksheetPDF(data: WorksheetData, exercises: ArtTherapyExercise[]) {
  try {
    const blob = await pdf(<WorksheetDocument data={data} exercises={exercises} />).toBlob();

    // Create download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `GuiaPersonalizada_${data.name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
}
