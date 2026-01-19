import { Document, Page, Text, View, StyleSheet, pdf, Image } from '@react-pdf/renderer';
import type { ArtTherapyExercise } from './artTherapyExercises';

// Styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    backgroundColor: '#FDFCFA',
  },
  header: {
    marginBottom: 25,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#0D9488',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 'auto',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    marginBottom: 8,
    color: '#0D9488',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 11,
    color: '#6B7A8C',
    textAlign: 'center',
  },
  infoBox: {
    backgroundColor: '#F0F7F6',
    padding: 15,
    borderRadius: 8,
    marginBottom: 25,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  label: {
    fontSize: 10,
    color: '#3D4852',
    fontWeight: 'bold',
    width: 140,
  },
  value: {
    fontSize: 10,
    color: '#1C1C28',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#0D9488',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 12,
  },
  exerciseTitle: {
    fontSize: 14,
    color: '#0F766E',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 11,
    color: '#3D4852',
    marginBottom: 15,
    lineHeight: 1.5,
  },
  subsectionTitle: {
    fontSize: 11,
    color: '#0D9488',
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 6,
  },
  materialsBox: {
    backgroundColor: '#F0F7F6',
    padding: 12,
    borderRadius: 6,
    marginBottom: 15,
  },
  materialItem: {
    fontSize: 10,
    color: '#1C1C28',
    marginBottom: 4,
    marginLeft: 5,
  },
  instructionItem: {
    fontSize: 10,
    color: '#1C1C28',
    marginBottom: 8,
    lineHeight: 1.5,
    paddingLeft: 15,
  },
  benefitsBox: {
    backgroundColor: '#E8F4F3',
    padding: 12,
    borderRadius: 6,
    marginTop: 15,
    marginBottom: 20,
  },
  benefitsText: {
    fontSize: 10,
    color: '#0F766E',
    lineHeight: 1.5,
  },
  disclaimer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#FFF9E6',
    borderRadius: 6,
    borderLeftWidth: 3,
    borderLeftColor: '#F59E0B',
  },
  disclaimerText: {
    fontSize: 9,
    color: '#92400E',
    lineHeight: 1.5,
    textAlign: 'justify',
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

  const exercise = exercises[0]; // Solo usamos el primer ejercicio

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header with Logo */}
        <View style={styles.header}>
          <Image
            src="/COLORME_logo-19-768x141.png"
            style={styles.logo}
          />
          <Text style={styles.title}>Guía Personalizada de Arteterapia</Text>
          <Text style={styles.subtitle}>Ejercicio terapéutico diseñado especialmente para ti</Text>
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
        <Text style={styles.sectionTitle}>Tu Ejercicio Personalizado</Text>

        {exercise && (
          <>
            <Text style={styles.exerciseTitle}>{exercise.title}</Text>

            <Text style={styles.description}>{exercise.description}</Text>

            <Text style={styles.subsectionTitle}>⏱ Duración estimada: {exercise.duration}</Text>

            {/* Materials */}
            <Text style={styles.subsectionTitle}>Materiales necesarios:</Text>
            <View style={styles.materialsBox}>
              {exercise.materials.map((material, idx) => (
                <Text key={idx} style={styles.materialItem}>
                  • {material}
                </Text>
              ))}
            </View>

            {/* Instructions */}
            <Text style={styles.subsectionTitle}>Instrucciones paso a paso:</Text>
            {exercise.instructions.map((instruction, idx) => (
              <View key={idx} style={{ marginBottom: 10 }}>
                <Text style={styles.instructionItem}>
                  <Text style={{ fontWeight: 'bold' }}>{idx + 1}.</Text> {instruction}
                </Text>
              </View>
            ))}

            {/* Benefits */}
            <View style={styles.benefitsBox}>
              <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#0F766E', marginBottom: 6 }}>
                💚 Beneficios terapéuticos:
              </Text>
              <Text style={styles.benefitsText}>{exercise.benefits}</Text>
            </View>

            {/* Additional Note */}
            <View style={{ marginTop: 20, padding: 12, backgroundColor: '#F0F7F6', borderRadius: 6 }}>
              <Text style={{ fontSize: 10, color: '#3D4852', lineHeight: 1.5 }}>
                <Text style={{ fontWeight: 'bold' }}>Nota importante: </Text>
                Recuerda que no se trata de crear "arte perfecto", sino de expresarte auténticamente.
                Tómate tu tiempo con este ejercicio. El proceso creativo en sí mismo es terapéutico.
                Permite que tus emociones fluyan sin juicio.
              </Text>
            </View>
          </>
        )}

        {/* Disclaimer */}
        <View style={styles.disclaimer}>
          <Text style={styles.disclaimerText}>
            Los ejercicios propuestos son únicamente una sugerencia de trabajo personal, basada en la información
            proporcionada por el usuario. Bajo ninguna circunstancia sustituyen una consulta, diagnóstico, tratamiento,
            atención profesional o intervención clínica, psicológica, psiquiátrica o médica.
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer} fixed>
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
    link.download = `GuiaPersonalizada_${data.name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('PDF Generation Error:', error);
    throw error;
  }
}
