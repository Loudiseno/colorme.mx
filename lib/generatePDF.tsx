import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';
import type { ArtTherapyExercise } from './artTherapyExercises';

// Define styles matching the ColorMe brand
const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#FDFCFA', // canvas-soft
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 30,
    borderBottom: 2,
    borderBottomColor: '#0D9488', // primary teal
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#0D9488', // primary teal
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 11,
    color: '#6B7A8C', // slate
    marginBottom: 4,
  },
  infoSection: {
    backgroundColor: '#F0F7F6', // mist
    padding: 15,
    borderRadius: 8,
    marginBottom: 25,
    borderLeft: 4,
    borderLeftColor: '#0D9488',
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  infoLabel: {
    fontSize: 10,
    color: '#3D4852', // charcoal
    fontWeight: 'bold',
    width: 120,
  },
  infoValue: {
    fontSize: 10,
    color: '#1C1C28', // ink
    flex: 1,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#0D9488',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 12,
    paddingBottom: 6,
    borderBottom: 1,
    borderBottomColor: '#B2F7EF', // primary-glow
  },
  exerciseContainer: {
    marginBottom: 20,
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    border: 1,
    borderColor: '#E8F4F3', // frost
  },
  exerciseTitle: {
    fontSize: 13,
    color: '#0F766E', // primary-dark
    fontWeight: 'bold',
    marginBottom: 6,
  },
  exerciseDescription: {
    fontSize: 10,
    color: '#3D4852',
    marginBottom: 10,
    lineHeight: 1.5,
  },
  subsectionTitle: {
    fontSize: 10,
    color: '#0D9488',
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 4,
  },
  instructionItem: {
    fontSize: 9,
    color: '#1C1C28',
    marginBottom: 4,
    marginLeft: 12,
    lineHeight: 1.4,
  },
  materials: {
    fontSize: 9,
    color: '#3D4852',
    fontStyle: 'italic',
    marginBottom: 8,
  },
  benefits: {
    fontSize: 9,
    color: '#0F766E',
    backgroundColor: '#F0F7F6',
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
    lineHeight: 1.4,
  },
  duration: {
    fontSize: 9,
    color: '#6B7A8C',
    marginBottom: 6,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    borderTop: 1,
    borderTopColor: '#CBD5E1',
    paddingTop: 10,
  },
  copyright: {
    fontSize: 8,
    color: '#6B7A8C',
  },
  pageNumber: {
    fontSize: 8,
    color: '#CBD5E1',
    marginTop: 4,
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
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={{ fontSize: 28, color: '#0D9488', fontWeight: 'bold', marginBottom: 8, fontFamily: 'Helvetica-Bold' }}>
            ColorMe
          </Text>
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
        <Text style={{ fontSize: 10, color: '#3D4852', marginBottom: 20, lineHeight: 1.5 }}>
          Estos ejercicios han sido seleccionados específicamente para ti basándose en la emoción que deseas trabajar
          y tu situación actual. Tómate tu tiempo con cada uno, no hay prisa. El proceso creativo en sí mismo es
          terapéutico. Recuerda que no se trata de crear "arte perfecto", sino de expresarte auténticamente.
        </Text>

        {/* Exercises - First page can fit 1-2 exercises */}
        {exercises.slice(0, 2).map((exercise, index) => (
          <View key={exercise.id} style={styles.exerciseContainer} wrap={false}>
            <Text style={styles.exerciseTitle}>
              {index + 1}. {exercise.title}
            </Text>
            <Text style={styles.duration}>⏱ Duración estimada: {exercise.duration}</Text>
            <Text style={styles.exerciseDescription}>{exercise.description}</Text>

            <Text style={styles.subsectionTitle}>Materiales necesarios:</Text>
            <Text style={styles.materials}>{exercise.materials.join(' • ')}</Text>

            <Text style={styles.subsectionTitle}>Instrucciones:</Text>
            {exercise.instructions.map((instruction, idx) => (
              <Text key={idx} style={styles.instructionItem}>
                {idx + 1}. {instruction}
              </Text>
            ))}

            <View style={styles.benefits}>
              <Text style={{ fontSize: 9, fontWeight: 'bold', marginBottom: 3 }}>💚 Beneficios terapéuticos:</Text>
              <Text style={{ fontSize: 9 }}>{exercise.benefits}</Text>
            </View>
          </View>
        ))}

        {/* Footer */}
        <View style={styles.footer} fixed>
          <Text style={styles.copyright}>Copyright 2026 ColorMe • Todos los derechos reservados</Text>
          <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
            `Página ${pageNumber} de ${totalPages}`
          )} />
        </View>
      </Page>

      {/* Additional pages for remaining exercises */}
      {exercises.slice(2).map((exercise, index) => (
        <Page key={exercise.id} size="A4" style={styles.page}>
          <View style={styles.header}>
            <Text style={styles.title}>Guía Personalizada</Text>
            <Text style={styles.subtitle}>{data.name} • {currentDate}</Text>
          </View>

          <View style={styles.exerciseContainer}>
            <Text style={styles.exerciseTitle}>
              {index + 3}. {exercise.title}
            </Text>
            <Text style={styles.duration}>⏱ Duración estimada: {exercise.duration}</Text>
            <Text style={styles.exerciseDescription}>{exercise.description}</Text>

            <Text style={styles.subsectionTitle}>Materiales necesarios:</Text>
            <Text style={styles.materials}>{exercise.materials.join(' • ')}</Text>

            <Text style={styles.subsectionTitle}>Instrucciones:</Text>
            {exercise.instructions.map((instruction, idx) => (
              <Text key={idx} style={styles.instructionItem}>
                {idx + 1}. {instruction}
              </Text>
            ))}

            <View style={styles.benefits}>
              <Text style={{ fontSize: 9, fontWeight: 'bold', marginBottom: 3 }}>💚 Beneficios terapéuticos:</Text>
              <Text style={{ fontSize: 9 }}>{exercise.benefits}</Text>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer} fixed>
            <Text style={styles.copyright}>Copyright 2026 ColorMe • Todos los derechos reservados</Text>
            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
              `Página ${pageNumber} de ${totalPages}`
            )} />
          </View>
        </Page>
      ))}

      {/* Final page with closing message */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Reflexiones Finales</Text>
        </View>

        <Text style={{ fontSize: 12, color: '#0D9488', fontWeight: 'bold', marginBottom: 12 }}>
          Recuerda...
        </Text>

        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 10, color: '#1C1C28', marginBottom: 8, lineHeight: 1.6 }}>
            • No existe el "arte malo" en arteterapia. El proceso es más importante que el resultado.
          </Text>
          <Text style={{ fontSize: 10, color: '#1C1C28', marginBottom: 8, lineHeight: 1.6 }}>
            • Permite que tus emociones fluyan sin juicio. El arte es un espacio seguro para expresarte.
          </Text>
          <Text style={{ fontSize: 10, color: '#1C1C28', marginBottom: 8, lineHeight: 1.6 }}>
            • Puedes repetir estos ejercicios tantas veces como desees. Cada vez será diferente.
          </Text>
          <Text style={{ fontSize: 10, color: '#1C1C28', marginBottom: 8, lineHeight: 1.6 }}>
            • Si un ejercicio te resulta demasiado intenso, está bien pausar y volver cuando te sientas listo/a.
          </Text>
          <Text style={{ fontSize: 10, color: '#1C1C28', marginBottom: 8, lineHeight: 1.6 }}>
            • Considera llevar un diario artístico donde guardes tus creaciones y reflexiones.
          </Text>
        </View>

        <View style={{ ...styles.infoSection, marginTop: 30 }}>
          <Text style={{ fontSize: 11, color: '#0F766E', fontWeight: 'bold', marginBottom: 8 }}>
            ¿Necesitas acompañamiento profesional?
          </Text>
          <Text style={{ fontSize: 10, color: '#3D4852', lineHeight: 1.5 }}>
            Si deseas profundizar en tu proceso de sanación con apoyo personalizado, ofrezco sesiones individuales
            de arteterapia y tanatología. Visita colorme.mx para más información o para agendar una sesión.
          </Text>
        </View>

        <View style={{ marginTop: 40, padding: 20, backgroundColor: '#F0F7F6', borderRadius: 8 }}>
          <Text style={{ fontSize: 10, color: '#3D4852', textAlign: 'center', lineHeight: 1.6 }}>
            "El arte te permite encontrar tu voz cuando las palabras no son suficientes.
            {'\n'}Cada trazo, cada color, es un paso hacia la sanación."
          </Text>
          <Text style={{ fontSize: 9, color: '#6B7A8C', textAlign: 'center', marginTop: 10 }}>
            — Lourdes Estrada
          </Text>
        </View>

        {/* Disclaimer */}
        <View style={{ marginTop: 30, padding: 15, backgroundColor: '#FFF9E6', borderRadius: 8, borderLeft: 3, borderLeftColor: '#F59E0B' }}>
          <Text style={{ fontSize: 9, color: '#92400E', textAlign: 'center', lineHeight: 1.5, fontStyle: 'italic' }}>
            Los ejercicios compartidos son solo una sugerencia de práctica personal y no reemplazan atención profesional, terapéutica o clínica.
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer} fixed>
          <Text style={styles.copyright}>Copyright 2026 ColorMe • Todos los derechos reservados</Text>
          <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
            `Página ${pageNumber} de ${totalPages}`
          )} />
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
