import { Document, Page, Text, View, StyleSheet, pdf, Image } from '@react-pdf/renderer';
import type { ArtTherapyExercise } from './artTherapyExercises';

// Styles for single-page PDF with brand colors
const styles = StyleSheet.create({
  page: {
    padding: 35,
    fontFamily: 'Helvetica',
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginBottom: 15,
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#B2F7EF',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 'auto',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    marginBottom: 4,
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoBox: {
    backgroundColor: '#F8F8F8',
    padding: 10,
    borderRadius: 6,
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  label: {
    fontSize: 9,
    color: '#000000',
    fontWeight: 'bold',
    width: 120,
  },
  value: {
    fontSize: 9,
    color: '#333333',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 8,
  },
  exerciseTitle: {
    fontSize: 12,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    fontSize: 9,
    color: '#333333',
    marginBottom: 10,
    lineHeight: 1.4,
  },
  subsectionTitle: {
    fontSize: 10,
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 4,
  },
  materialsBox: {
    backgroundColor: '#F8F8F8',
    padding: 8,
    borderRadius: 4,
    marginBottom: 10,
  },
  materialItem: {
    fontSize: 8,
    color: '#333333',
    marginBottom: 2,
    marginLeft: 5,
  },
  instructionItem: {
    fontSize: 8,
    color: '#333333',
    marginBottom: 4,
    lineHeight: 1.3,
    paddingLeft: 10,
  },
  benefitsBox: {
    backgroundColor: '#F8F8F8',
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
    marginBottom: 10,
  },
  benefitsText: {
    fontSize: 8,
    color: '#333333',
    lineHeight: 1.3,
  },
  disclaimer: {
    marginTop: 15,
    paddingTop: 10,
  },
  disclaimerText: {
    fontSize: 7,
    color: '#666666',
    lineHeight: 1.3,
    textAlign: 'justify',
  },
  footer: {
    marginTop: 10,
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    textAlign: 'center',
  },
  copyright: {
    fontSize: 7,
    color: '#999999',
  },
});

interface WorksheetData {
  name: string;
  age: string;
  gender: string;
  griefOrGoal: string;
  emotion: string;
}

// PDF Document Component - Single Page
const WorksheetDocument = ({ data, exercises }: { data: WorksheetData; exercises: ArtTherapyExercise[] }) => {
  const currentDate = new Date().toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const exercise = exercises[0];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header with Logo */}
        <View style={styles.header}>
          <Image
            src="/COLORME_logo-19-768x141.png"
            style={styles.logo}
          />
          <Text style={styles.title}>Ejercicios Personalizados</Text>
        </View>

        {/* Personal Information */}
        <View style={styles.infoBox}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Nombre:</Text>
            <Text style={styles.value}>{data.name}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Fecha:</Text>
            <Text style={styles.value}>{currentDate}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Edad:</Text>
            <Text style={styles.value}>{data.age} años</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Género:</Text>
            <Text style={styles.value}>{data.gender}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Emoción a trabajar:</Text>
            <Text style={styles.value}>{data.emotion}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Lo que estoy procesando:</Text>
            <Text style={styles.value}>{data.griefOrGoal}</Text>
          </View>
        </View>

        {/* Exercise Section */}
        {exercise && (
          <>
            <Text style={styles.exerciseTitle}>{exercise.title}</Text>
            <Text style={styles.description}>{exercise.description}</Text>

            <Text style={styles.subsectionTitle}>⏱ Duración: {exercise.duration}</Text>

            {/* Materials */}
            <Text style={styles.subsectionTitle}>Materiales necesarios:</Text>
            <View style={styles.materialsBox}>
              {exercise.materials.map((material, idx) => (
                <Text key={idx} style={styles.materialItem}>• {material}</Text>
              ))}
            </View>

            {/* Instructions */}
            <Text style={styles.subsectionTitle}>Instrucciones:</Text>
            {exercise.instructions.slice(0, 5).map((instruction, idx) => (
              <Text key={idx} style={styles.instructionItem}>
                {idx + 1}. {instruction}
              </Text>
            ))}

            {/* Benefits */}
            <View style={styles.benefitsBox}>
              <Text style={{ fontSize: 8, fontWeight: 'bold', color: '#000000', marginBottom: 3 }}>
                Beneficios:
              </Text>
              <Text style={styles.benefitsText}>{exercise.benefits}</Text>
            </View>
          </>
        )}

        {/* Disclaimer */}
        <View style={styles.disclaimer}>
          <Text style={styles.disclaimerText}>
            Los ejercicios propuestos son únicamente una sugerencia de trabajo personal, basada en la información proporcionada por el usuario. Bajo ninguna circunstancia sustituyen una consulta, diagnóstico, tratamiento, atención profesional o intervención clínica, psicológica, psiquiátrica o médica.
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.copyright}>Copyright 2026 ColorMe - Todos los derechos reservados</Text>
        </View>
      </Page>
    </Document>
  );
};

// Generate PDF function
export async function generateWorksheetPDF(data: WorksheetData, exercises: ArtTherapyExercise[]) {
  try {
    const blob = await pdf(<WorksheetDocument data={data} exercises={exercises} />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `EjerciciosPersonalizados_${data.name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('PDF Generation Error:', error);
    throw error;
  }
}
