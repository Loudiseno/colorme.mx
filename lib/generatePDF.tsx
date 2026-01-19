import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';
import type { ArtTherapyExercise } from './artTherapyExercises';

// Minimal styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#0D9488',
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
  },
  section: {
    marginBottom: 15,
  },
});

interface WorksheetData {
  name: string;
  age: string;
  gender: string;
  griefOrGoal: string;
  emotion: string;
}

// Minimal PDF Document
const WorksheetDocument = ({ data, exercises }: { data: WorksheetData; exercises: ArtTherapyExercise[] }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>ColorMe - Guía Personalizada</Text>

      <View style={styles.section}>
        <Text style={styles.text}>Nombre: {data.name}</Text>
        <Text style={styles.text}>Edad: {data.age}</Text>
        <Text style={styles.text}>Género: {data.gender}</Text>
        <Text style={styles.text}>Emoción: {data.emotion}</Text>
      </View>

      <Text style={styles.title}>Tus Ejercicios</Text>

      {exercises.map((exercise, index) => (
        <View key={index} style={styles.section}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 5 }}>
            {index + 1}. {exercise.title}
          </Text>
          <Text style={styles.text}>{exercise.description}</Text>
          <Text style={styles.text}>Duración: {exercise.duration}</Text>
        </View>
      ))}

      <View style={{ marginTop: 30, padding: 10, backgroundColor: '#FFF9E6' }}>
        <Text style={{ fontSize: 10, textAlign: 'center' }}>
          Los ejercicios compartidos son solo una sugerencia de práctica personal
          y no reemplazan atención profesional, terapéutica o clínica.
        </Text>
      </View>

      <Text style={{ fontSize: 10, textAlign: 'center', marginTop: 20 }}>
        Copyright 2026 ColorMe - Todos los derechos reservados
      </Text>
    </Page>
  </Document>
);

// Generate PDF function
export async function generateWorksheetPDF(data: WorksheetData, exercises: ArtTherapyExercise[]) {
  try {
    const blob = await pdf(<WorksheetDocument data={data} exercises={exercises} />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `GuiaPersonalizada_${data.name.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('PDF Generation Error:', error);
    throw error;
  }
}
