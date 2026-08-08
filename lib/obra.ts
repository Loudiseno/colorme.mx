// ============================================================================
// OBRA — fuente única de las galerías de fotografía (ES / EN)
// Generado a partir de los archivos de /public. El pie de foto siempre indica
// «Ciudad, País»; cuando no se conoce la ciudad, sólo el país.
// ============================================================================

export interface ObraPhoto {
  src: string
  alt: string
  /** Pie de foto en español */
  caption: string
  /** Pie de foto en inglés */
  captionEn: string
  /** País, para agrupar la galería de lugares en columnas */
  country: string
  countryEn: string
  /** Encuadre cuando la foto se recorta, p. ej. 'top' o '50% 65%' */
  focus?: string
}

export const lugares: ObraPhoto[] = [
  { src: '/fotografia-lugar-hoi-an-vietnam.jpeg', alt: 'Fotografía de Hoi An, Vietnam, por Lourdes Pérez', caption: 'Hoi An, Vietnam', captionEn: 'Hoi An, Vietnam', country: 'Vietnam', countryEn: 'Vietnam' },
  { src: '/fotografia-lugar-estambul-turquia.jpeg', alt: 'Fotografía de Estambul, Turquía, por Lourdes Pérez', caption: 'Estambul, Turquía', captionEn: 'Istanbul, Turkey', country: 'Turquía', countryEn: 'Turkey' },
  { src: '/fotografia-lugar-trinidad-cuba.jpeg', alt: 'Fotografía de Trinidad, Cuba, por Lourdes Pérez', caption: 'Trinidad, Cuba', captionEn: 'Trinidad, Cuba', country: 'Cuba', countryEn: 'Cuba' },
  { src: '/fotografia-lugar-progreso-mexico.jpeg', alt: 'Fotografía de Progreso, México, por Lourdes Pérez', caption: 'Progreso, México', captionEn: 'Progreso, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/fotografia-lugar-ciudad-de-mexico-mexico.jpeg', alt: 'Fotografía de Ciudad de México, México, por Lourdes Pérez', caption: 'Ciudad de México, México', captionEn: 'Mexico City, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/fotografia-lugar-amsterdam-paises-bajos.jpeg', alt: 'Fotografía de Ámsterdam, Países Bajos, por Lourdes Pérez', caption: 'Ámsterdam, Países Bajos', captionEn: 'Amsterdam, Netherlands', country: 'Países Bajos', countryEn: 'Netherlands' },
  { src: '/fotografia-lugar-ayutthaya-tailandia.jpeg', alt: 'Fotografía de Ayutthaya, Tailandia, por Lourdes Pérez', caption: 'Ayutthaya, Tailandia', captionEn: 'Ayutthaya, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/fotografia-lugar-capadocia-turquia.jpeg', alt: 'Fotografía de Capadocia, Turquía, por Lourdes Pérez', caption: 'Capadocia, Turquía', captionEn: 'Cappadocia, Turkey', country: 'Turquía', countryEn: 'Turkey' },
  { src: '/fotografia-lugar-koh-phi-phi-tailandia.jpeg', alt: 'Fotografía de Koh Phi Phi, Tailandia, por Lourdes Pérez', caption: 'Koh Phi Phi, Tailandia', captionEn: 'Koh Phi Phi, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/fotografia-lugar-goreme-turquia.jpeg', alt: 'Fotografía de Göreme, Turquía, por Lourdes Pérez', caption: 'Göreme, Turquía', captionEn: 'Goreme, Turkey', country: 'Turquía', countryEn: 'Turkey' },
  { src: '/fotografia-lugar-capadocia-turquia-2.jpeg', alt: 'Fotografía de Capadocia, Turquía, por Lourdes Pérez', caption: 'Capadocia, Turquía', captionEn: 'Cappadocia, Turkey', country: 'Turquía', countryEn: 'Turkey' },
  { src: '/fotografia-lugar-bayan-lepas-malasia.jpeg', alt: 'Fotografía de Bayan Lepas, Malasia, por Lourdes Pérez', caption: 'Bayan Lepas, Malasia', captionEn: 'Bayan Lepas, Malaysia', country: 'Malasia', countryEn: 'Malaysia' },
  { src: '/fotografia-lugar-bangkok-tailandia.jpeg', alt: 'Fotografía de Bangkok, Tailandia, por Lourdes Pérez', caption: 'Bangkok, Tailandia', captionEn: 'Bangkok, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/fotografia-lugar-cuba.jpeg', alt: 'Fotografía de Cuba, por Lourdes Pérez', caption: 'Cuba', captionEn: 'Cuba', country: 'Cuba', countryEn: 'Cuba' },
  { src: '/fotografia-lugar-edirne-turquia.jpeg', alt: 'Fotografía de Edirne, Turquía, por Lourdes Pérez', caption: 'Edirne, Turquía', captionEn: 'Edirne, Turkey', country: 'Turquía', countryEn: 'Turkey' },
  { src: '/fotografia-lugar-estambul-turquia-2.jpeg', alt: 'Fotografía de Estambul, Turquía, por Lourdes Pérez', caption: 'Estambul, Turquía', captionEn: 'Istanbul, Turkey', country: 'Turquía', countryEn: 'Turkey' },
  { src: '/fotografia-lugar-hoi-an-vietnam-2.jpeg', alt: 'Fotografía de Hoi An, Vietnam, por Lourdes Pérez', caption: 'Hoi An, Vietnam', captionEn: 'Hoi An, Vietnam', country: 'Vietnam', countryEn: 'Vietnam' },
  { src: '/fotografia-lugar-jaipur-india.jpeg', alt: 'Fotografía de Jaipur, India, por Lourdes Pérez', caption: 'Jaipur, India', captionEn: 'Jaipur, India', country: 'India', countryEn: 'India' },
  { src: '/fotografia-lugar-londres-reino-unido.jpeg', alt: 'Fotografía de Londres, Reino Unido, por Lourdes Pérez', caption: 'Londres, Reino Unido', captionEn: 'London, United Kingdom', country: 'Reino Unido', countryEn: 'United Kingdom' },
  { src: '/fotografia-lugar-lucca-italia.jpeg', alt: 'Fotografía de Lucca, Italia, por Lourdes Pérez', caption: 'Lucca, Italia', captionEn: 'Lucca, Italy', country: 'Italia', countryEn: 'Italy' },
  { src: '/fotografia-lugar-amsterdam-paises-bajos-2.jpeg', alt: 'Fotografía de Ámsterdam, Países Bajos, por Lourdes Pérez', caption: 'Ámsterdam, Países Bajos', captionEn: 'Amsterdam, Netherlands', country: 'Países Bajos', countryEn: 'Netherlands' },
  { src: '/fotografia-lugar-amsterdam-paises-bajos-3.jpeg', alt: 'Fotografía de Ámsterdam, Países Bajos, por Lourdes Pérez', caption: 'Ámsterdam, Países Bajos', captionEn: 'Amsterdam, Netherlands', country: 'Países Bajos', countryEn: 'Netherlands' },
  { src: '/fotografia-lugar-amsterdam-paises-bajos-4.jpeg', alt: 'Fotografía de Ámsterdam, Países Bajos, por Lourdes Pérez', caption: 'Ámsterdam, Países Bajos', captionEn: 'Amsterdam, Netherlands', country: 'Países Bajos', countryEn: 'Netherlands' },
  { src: '/fotografia-lugar-agra-india.jpeg', alt: 'Fotografía de Agra, India, por Lourdes Pérez', caption: 'Agra, India', captionEn: 'Agra, India', country: 'India', countryEn: 'India' },
  { src: '/fotografia-lugar-baja-california-sur-mexico.jpeg', alt: 'Fotografía de Baja California Sur, México, por Lourdes Pérez', caption: 'Baja California Sur, México', captionEn: 'Baja California Sur, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/fotografia-lugar-baja-california-mexico.jpeg', alt: 'Fotografía de Baja California, México, por Lourdes Pérez', caption: 'Baja California, México', captionEn: 'Baja California, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/fotografia-lugar-bangkok-tailandia-2.jpeg', alt: 'Fotografía de Bangkok, Tailandia, por Lourdes Pérez', caption: 'Bangkok, Tailandia', captionEn: 'Bangkok, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/fotografia-lugar-ciudad-de-mexico-mexico-2.jpeg', alt: 'Fotografía de Ciudad de México, México, por Lourdes Pérez', caption: 'Ciudad de México, México', captionEn: 'Mexico City, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/fotografia-lugar-edimburgo-reino-unido.jpeg', alt: 'Fotografía de Edimburgo, Reino Unido, por Lourdes Pérez', caption: 'Edimburgo, Reino Unido', captionEn: 'Edinburgh, United Kingdom', country: 'Reino Unido', countryEn: 'United Kingdom' },
  { src: '/fotografia-lugar-estambul-turquia-3.jpeg', alt: 'Fotografía de Estambul, Turquía, por Lourdes Pérez', caption: 'Estambul, Turquía', captionEn: 'Istanbul, Turkey', country: 'Turquía', countryEn: 'Turkey' },
  { src: '/fotografia-lugar-estambul-turquia-4.jpeg', alt: 'Fotografía de Estambul, Turquía, por Lourdes Pérez', caption: 'Estambul, Turquía', captionEn: 'Istanbul, Turkey', country: 'Turquía', countryEn: 'Turkey' },
  { src: '/fotografia-lugar-estambul-turquia-5.jpeg', alt: 'Fotografía de Estambul, Turquía, por Lourdes Pérez', caption: 'Estambul, Turquía', captionEn: 'Istanbul, Turkey', country: 'Turquía', countryEn: 'Turkey' },
  { src: '/fotografia-lugar-george-town-malasia.jpeg', alt: 'Fotografía de George Town, Malasia, por Lourdes Pérez', caption: 'George Town, Malasia', captionEn: 'George Town, Malaysia', country: 'Malasia', countryEn: 'Malaysia' },
  { src: '/fotografia-lugar-hoi-an-vietnam-3.jpeg', alt: 'Fotografía de Hoi An, Vietnam, por Lourdes Pérez', caption: 'Hoi An, Vietnam', captionEn: 'Hoi An, Vietnam', country: 'Vietnam', countryEn: 'Vietnam' },
  { src: '/fotografia-lugar-jaipur-india-2.jpeg', alt: 'Fotografía de Jaipur, India, por Lourdes Pérez', caption: 'Jaipur, India', captionEn: 'Jaipur, India', country: 'India', countryEn: 'India' },
  { src: '/fotografia-lugar-la-habana-cuba.jpeg', alt: 'Fotografía de La Habana, Cuba, por Lourdes Pérez', caption: 'La Habana, Cuba', captionEn: 'Havana, Cuba', country: 'Cuba', countryEn: 'Cuba' },
  { src: '/fotografia-lugar-la-ventana-mexico.jpeg', alt: 'Fotografía de La Ventana, México, por Lourdes Pérez', caption: 'La Ventana, México', captionEn: 'La Ventana, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/fotografia-lugar-lanzo-italia.jpeg', alt: 'Fotografía de Lanzo, Italia, por Lourdes Pérez', caption: 'Lanzo, Italia', captionEn: 'Lanzo, Italy', country: 'Italia', countryEn: 'Italy' },
  { src: '/fotografia-lugar-mdina-malta.jpeg', alt: 'Fotografía de Mdina, Malta, por Lourdes Pérez', caption: 'Mdina, Malta', captionEn: 'Mdina, Malta', country: 'Malta', countryEn: 'Malta' },
  { src: '/fotografia-lugar-manchester-reino-unido.jpeg', alt: 'Fotografía de Manchester, Reino Unido, por Lourdes Pérez', caption: 'Manchester, Reino Unido', captionEn: 'Manchester, United Kingdom', country: 'Reino Unido', countryEn: 'United Kingdom' },
  { src: '/fotografia-lugar-meteora-grecia.jpeg', alt: 'Fotografía de Meteora, Grecia, por Lourdes Pérez', caption: 'Meteora, Grecia', captionEn: 'Meteora, Greece', country: 'Grecia', countryEn: 'Greece' },
  { src: '/fotografia-lugar-meteora-grecia-2.jpeg', alt: 'Fotografía de Meteora, Grecia, por Lourdes Pérez', caption: 'Meteora, Grecia', captionEn: 'Meteora, Greece', country: 'Grecia', countryEn: 'Greece' },
  { src: '/fotografia-lugar-miami-estados-unidos.jpeg', alt: 'Fotografía de Miami, Estados Unidos, por Lourdes Pérez', caption: 'Miami, Estados Unidos', captionEn: 'Miami, United States', country: 'Estados Unidos', countryEn: 'United States' },
  { src: '/fotografia-lugar-miconos-grecia.jpeg', alt: 'Fotografía de Miconos, Grecia, por Lourdes Pérez', caption: 'Miconos, Grecia', captionEn: 'Mykonos, Greece', country: 'Grecia', countryEn: 'Greece' },
  { src: '/fotografia-lugar-nusa-penida-indonesia.jpeg', alt: 'Fotografía de Nusa Penida, Indonesia, por Lourdes Pérez', caption: 'Nusa Penida, Indonesia', captionEn: 'Nusa Penida, Indonesia', country: 'Indonesia', countryEn: 'Indonesia' },
  { src: '/fotografia-lugar-phi-phi-tailandia.jpeg', alt: 'Fotografía de Phi Phi, Tailandia, por Lourdes Pérez', caption: 'Phi Phi, Tailandia', captionEn: 'Phi Phi, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/fotografia-lugar-progreso-mexico-2.jpeg', alt: 'Fotografía de Progreso, México, por Lourdes Pérez', caption: 'Progreso, México', captionEn: 'Progreso, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/fotografia-lugar-progreso-mexico-3.jpeg', alt: 'Fotografía de Progreso, México, por Lourdes Pérez', caption: 'Progreso, México', captionEn: 'Progreso, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/fotografia-lugar-puebla-mexico.jpeg', alt: 'Fotografía de Puebla, México, por Lourdes Pérez', caption: 'Puebla, México', captionEn: 'Puebla, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/fotografia-lugar-siena-italia.jpeg', alt: 'Fotografía de Siena, Italia, por Lourdes Pérez', caption: 'Siena, Italia', captionEn: 'Siena, Italy', country: 'Italia', countryEn: 'Italy' },
  { src: '/fotografia-lugar-singapur.jpeg', alt: 'Fotografía de Singapur, por Lourdes Pérez', caption: 'Singapur', captionEn: 'Singapore', country: 'Singapur', countryEn: 'Singapore' },
  { src: '/fotografia-lugar-tailandia.jpeg', alt: 'Fotografía de Tailandia, por Lourdes Pérez', caption: 'Tailandia', captionEn: 'Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/fotografia-lugar-tailandia-2.jpeg', alt: 'Fotografía de Tailandia, por Lourdes Pérez', caption: 'Tailandia', captionEn: 'Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/fotografia-lugar-toledo-espana.jpeg', alt: 'Fotografía de Toledo, España, por Lourdes Pérez', caption: 'Toledo, España', captionEn: 'Toledo, Spain', country: 'España', countryEn: 'Spain' },
  { src: '/fotografia-lugar-tulum-mexico.jpeg', alt: 'Fotografía de Tulum, México, por Lourdes Pérez', caption: 'Tulum, México', captionEn: 'Tulum, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/fotografia-lugar-ventana-azul-malta.jpeg', alt: 'Fotografía de Ventana Azul, Malta, por Lourdes Pérez', caption: 'Ventana Azul, Malta', captionEn: 'Ventana Azul, Malta', country: 'Malta', countryEn: 'Malta' },
  { src: '/fotografia-lugar-yucatan-mexico.jpeg', alt: 'Fotografía de Yucatán, México, por Lourdes Pérez', caption: 'Yucatán, México', captionEn: 'Yucatan, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/fotografia-lugar-yucatan-mexico-2.jpeg', alt: 'Fotografía de Yucatán, México, por Lourdes Pérez', caption: 'Yucatán, México', captionEn: 'Yucatan, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/fotografia-lugar-kuala-lumpur-malasia.jpeg', alt: 'Fotografía de Kuala Lumpur, Malasia, por Lourdes Pérez', caption: 'Kuala Lumpur, Malasia', captionEn: 'Kuala Lumpur, Malaysia', country: 'Malasia', countryEn: 'Malaysia' },
  { src: '/fotografia-lugar-baja-california-mexico-2.jpeg', alt: 'Fotografía de Baja California, México, por Lourdes Pérez', caption: 'Baja California, México', captionEn: 'Baja California, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/fotografia-lugar-cologne-alemania.jpeg', alt: 'Fotografía de Cologne, Alemania, por Lourdes Pérez', caption: 'Cologne, Alemania', captionEn: 'Cologne, Germany', country: 'Alemania', countryEn: 'Germany' },
  { src: '/fotografia-lugar-cologne-alemania-2.jpeg', alt: 'Fotografía de Cologne, Alemania, por Lourdes Pérez', caption: 'Cologne, Alemania', captionEn: 'Cologne, Germany', country: 'Alemania', countryEn: 'Germany' },
  { src: '/fotografia-lugar-estambul-turquia-6.jpeg', alt: 'Fotografía de Estambul, Turquía, por Lourdes Pérez', caption: 'Estambul, Turquía', captionEn: 'Istanbul, Turkey', country: 'Turquía', countryEn: 'Turkey' },
  { src: '/fotografia-lugar-florencia-italia.jpeg', alt: 'Fotografía de Florencia, Italia, por Lourdes Pérez', caption: 'Florencia, Italia', captionEn: 'Florence, Italy', country: 'Italia', countryEn: 'Italy' },
  { src: '/fotografia-lugar-hidalgo-mexico.jpeg', alt: 'Fotografía de Hidalgo, México, por Lourdes Pérez', caption: 'Hidalgo, México', captionEn: 'Hidalgo, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/fotografia-lugar-jaipur-india-3.jpeg', alt: 'Fotografía de Jaipur, India, por Lourdes Pérez', caption: 'Jaipur, India', captionEn: 'Jaipur, India', country: 'India', countryEn: 'India' },
  { src: '/fotografia-lugar-uxmal-mexico.jpeg', alt: 'Fotografía de Uxmal, México, por Lourdes Pérez', caption: 'Uxmal, México', captionEn: 'Uxmal, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/fotografia-lugar-bangkok-tailandia-3.jpeg', alt: 'Fotografía de Bangkok, Tailandia, por Lourdes Pérez', caption: 'Bangkok, Tailandia', captionEn: 'Bangkok, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/fotografia-lugar-bangkok-tailandia-4.jpeg', alt: 'Fotografía de Bangkok, Tailandia, por Lourdes Pérez', caption: 'Bangkok, Tailandia', captionEn: 'Bangkok, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/fotografia-lugar-hoi-an-vietnam-4.jpeg', alt: 'Fotografía de Hoi An, Vietnam, por Lourdes Pérez', caption: 'Hoi An, Vietnam', captionEn: 'Hoi An, Vietnam', country: 'Vietnam', countryEn: 'Vietnam' },
  { src: '/fotografia-lugar-hoi-an-vietnam-5.jpeg', alt: 'Fotografía de Hoi An, Vietnam, por Lourdes Pérez', caption: 'Hoi An, Vietnam', captionEn: 'Hoi An, Vietnam', country: 'Vietnam', countryEn: 'Vietnam' },
  { src: '/fotografia-lugar-hoi-an-vietnam-6.jpeg', alt: 'Fotografía de Hoi An, Vietnam, por Lourdes Pérez', caption: 'Hoi An, Vietnam', captionEn: 'Hoi An, Vietnam', country: 'Vietnam', countryEn: 'Vietnam' },
  { src: '/fotografia-lugar-amsterdam-paises-bajos-5.jpeg', alt: 'Fotografía de Ámsterdam, Países Bajos, por Lourdes Pérez', caption: 'Ámsterdam, Países Bajos', captionEn: 'Amsterdam, Netherlands', country: 'Países Bajos', countryEn: 'Netherlands' },
  { src: '/fotografia-lugar-bacalar-mexico.jpeg', alt: 'Fotografía de Bacalar, México, por Lourdes Pérez', caption: 'Bacalar, México', captionEn: 'Bacalar, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/fotografia-lugar-baja-california-sur-mexico-2.jpeg', alt: 'Fotografía de Baja California Sur, México, por Lourdes Pérez', caption: 'Baja California Sur, México', captionEn: 'Baja California Sur, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/fotografia-lugar-balandra-mexico.jpeg', alt: 'Fotografía de Balandra, México, por Lourdes Pérez', caption: 'Balandra, México', captionEn: 'Balandra, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/fotografia-lugar-bali-indonesia.jpeg', alt: 'Fotografía de Bali, Indonesia, por Lourdes Pérez', caption: 'Bali, Indonesia', captionEn: 'Bali, Indonesia', country: 'Indonesia', countryEn: 'Indonesia' },
  { src: '/fotografia-lugar-bangkok-tailandia-5.jpeg', alt: 'Fotografía de Bangkok, Tailandia, por Lourdes Pérez', caption: 'Bangkok, Tailandia', captionEn: 'Bangkok, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/fotografia-lugar-bangkok-tailandia-6.jpeg', alt: 'Fotografía de Bangkok, Tailandia, por Lourdes Pérez', caption: 'Bangkok, Tailandia', captionEn: 'Bangkok, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/fotografia-lugar-batu-caves-malasia.jpeg', alt: 'Fotografía de Batu Caves, Malasia, por Lourdes Pérez', caption: 'Batu Caves, Malasia', captionEn: 'Batu Caves, Malaysia', country: 'Malasia', countryEn: 'Malaysia' },
  { src: '/fotografia-lugar-jaipur-india-4.jpeg', alt: 'Fotografía de Jaipur, India, por Lourdes Pérez', caption: 'Jaipur, India', captionEn: 'Jaipur, India', country: 'India', countryEn: 'India' },
  { src: '/fotografia-lugar-kuala-lumpur-malasia-2.jpeg', alt: 'Fotografía de Kuala Lumpur, Malasia, por Lourdes Pérez', caption: 'Kuala Lumpur, Malasia', captionEn: 'Kuala Lumpur, Malaysia', country: 'Malasia', countryEn: 'Malaysia' },
  { src: '/fotografia-lugar-marple-reino-unido.jpeg', alt: 'Fotografía de Marple, Reino Unido, por Lourdes Pérez', caption: 'Marple, Reino Unido', captionEn: 'Marple, United Kingdom', country: 'Reino Unido', countryEn: 'United Kingdom' },
  { src: '/fotografia-lugar-milan-italia.jpeg', alt: 'Fotografía de Milán, Italia, por Lourdes Pérez', caption: 'Milán, Italia', captionEn: 'Milan, Italy', country: 'Italia', countryEn: 'Italy' },
  { src: '/fotografia-lugar-nusa-penida-indonesia-2.jpeg', alt: 'Fotografía de Nusa Penida, Indonesia, por Lourdes Pérez', caption: 'Nusa Penida, Indonesia', captionEn: 'Nusa Penida, Indonesia', country: 'Indonesia', countryEn: 'Indonesia' },
  { src: '/fotografia-lugar-tulum-mexico-2.jpeg', alt: 'Fotografía de Tulum, México, por Lourdes Pérez', caption: 'Tulum, México', captionEn: 'Tulum, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/fotografia-lugar-gozo-malta.jpeg', alt: 'Fotografía de Gozo, Malta, por Lourdes Pérez', caption: 'Gozo, Malta', captionEn: 'Gozo, Malta', country: 'Malta', countryEn: 'Malta' },
  { src: '/fotografia-lugar-madrid-espana.jpeg', alt: 'Fotografía de Madrid, España, por Lourdes Pérez', caption: 'Madrid, España', captionEn: 'Madrid, Spain', country: 'España', countryEn: 'Spain' },
]

export const gente: ObraPhoto[] = [
  { src: '/fotografia-gente-nusa-penida-indonesia.jpeg', alt: 'Retrato de Nusa Penida, Indonesia, por Lourdes Pérez', caption: 'Nusa Penida, Indonesia', captionEn: 'Nusa Penida, Indonesia', country: 'Indonesia', countryEn: 'Indonesia' },
  { src: '/fotografia-gente-bali-indonesia.jpeg', alt: 'Retrato de Bali, Indonesia, por Lourdes Pérez', caption: 'Bali, Indonesia', captionEn: 'Bali, Indonesia', country: 'Indonesia', countryEn: 'Indonesia', focus: 'top' },
  { src: '/fotografia-gente-hoi-an-vietnam.jpeg', alt: 'Retrato de Hoi An, Vietnam, por Lourdes Pérez', caption: 'Hoi An, Vietnam', captionEn: 'Hoi An, Vietnam', country: 'Vietnam', countryEn: 'Vietnam', focus: '50% 65%' },
  { src: '/fotografia-gente-mumbai-india.jpeg', alt: 'Retrato de Mumbai, India, por Lourdes Pérez', caption: 'Mumbai, India', captionEn: 'Mumbai, India', country: 'India', countryEn: 'India' },
  { src: '/fotografia-gente-hoi-an-vietnam-2.jpeg', alt: 'Retrato de Hoi An, Vietnam, por Lourdes Pérez', caption: 'Hoi An, Vietnam', captionEn: 'Hoi An, Vietnam', country: 'Vietnam', countryEn: 'Vietnam' },
  { src: '/fotografia-gente-jaipur-india.jpeg', alt: 'Retrato de Jaipur, India, por Lourdes Pérez', caption: 'Jaipur, India', captionEn: 'Jaipur, India', country: 'India', countryEn: 'India' },
  { src: '/fotografia-gente-bali-indonesia-2.jpeg', alt: 'Retrato de Bali, Indonesia, por Lourdes Pérez', caption: 'Bali, Indonesia', captionEn: 'Bali, Indonesia', country: 'Indonesia', countryEn: 'Indonesia' },
  { src: '/fotografia-gente-mumbai-india-2.jpeg', alt: 'Retrato de Mumbai, India, por Lourdes Pérez', caption: 'Mumbai, India', captionEn: 'Mumbai, India', country: 'India', countryEn: 'India' },
  { src: '/fotografia-gente-jaipur-india-2.jpeg', alt: 'Retrato de Jaipur, India, por Lourdes Pérez', caption: 'Jaipur, India', captionEn: 'Jaipur, India', country: 'India', countryEn: 'India' },
  { src: '/fotografia-gente-jaipur-india-3.jpeg', alt: 'Retrato de Jaipur, India, por Lourdes Pérez', caption: 'Jaipur, India', captionEn: 'Jaipur, India', country: 'India', countryEn: 'India' },
  { src: '/fotografia-gente-rishikesh-india.jpeg', alt: 'Retrato de Rishikesh, India, por Lourdes Pérez', caption: 'Rishikesh, India', captionEn: 'Rishikesh, India', country: 'India', countryEn: 'India' },
  { src: '/fotografia-gente-delhi-india.jpeg', alt: 'Retrato de Delhi, India, por Lourdes Pérez', caption: 'Delhi, India', captionEn: 'Delhi, India', country: 'India', countryEn: 'India' },
  { src: '/fotografia-gente-jaipur-india-4.jpeg', alt: 'Retrato de Jaipur, India, por Lourdes Pérez', caption: 'Jaipur, India', captionEn: 'Jaipur, India', country: 'India', countryEn: 'India' },
  { src: '/fotografia-gente-damnoen-saduak-tailandia.jpeg', alt: 'Retrato de Damnoen Saduak, Tailandia, por Lourdes Pérez', caption: 'Damnoen Saduak, Tailandia', captionEn: 'Damnoen Saduak, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/fotografia-gente-damnoen-saduak-tailandia-2.jpeg', alt: 'Retrato de Damnoen Saduak, Tailandia, por Lourdes Pérez', caption: 'Damnoen Saduak, Tailandia', captionEn: 'Damnoen Saduak, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/fotografia-gente-da-nang-vietnam.jpeg', alt: 'Retrato de Da Nang, Vietnam, por Lourdes Pérez', caption: 'Da Nang, Vietnam', captionEn: 'Da Nang, Vietnam', country: 'Vietnam', countryEn: 'Vietnam' },
  { src: '/fotografia-gente-hoi-an-vietnam-3.jpeg', alt: 'Retrato de Hoi An, Vietnam, por Lourdes Pérez', caption: 'Hoi An, Vietnam', captionEn: 'Hoi An, Vietnam', country: 'Vietnam', countryEn: 'Vietnam' },
  { src: '/fotografia-gente-bangkok-tailandia.jpeg', alt: 'Retrato de Bangkok, Tailandia, por Lourdes Pérez', caption: 'Bangkok, Tailandia', captionEn: 'Bangkok, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/fotografia-gente-jaipur-india-5.jpeg', alt: 'Retrato de Jaipur, India, por Lourdes Pérez', caption: 'Jaipur, India', captionEn: 'Jaipur, India', country: 'India', countryEn: 'India' },
  { src: '/fotografia-gente-bali-indonesia-3.jpeg', alt: 'Retrato de Bali, Indonesia, por Lourdes Pérez', caption: 'Bali, Indonesia', captionEn: 'Bali, Indonesia', country: 'Indonesia', countryEn: 'Indonesia' },
  { src: '/fotografia-gente-bali-indonesia-4.jpeg', alt: 'Retrato de Bali, Indonesia, por Lourdes Pérez', caption: 'Bali, Indonesia', captionEn: 'Bali, Indonesia', country: 'Indonesia', countryEn: 'Indonesia' },
  { src: '/fotografia-gente-bali-indonesia-5.jpeg', alt: 'Retrato de Bali, Indonesia, por Lourdes Pérez', caption: 'Bali, Indonesia', captionEn: 'Bali, Indonesia', country: 'Indonesia', countryEn: 'Indonesia' },
  { src: '/fotografia-gente-mumbai-india-3.jpeg', alt: 'Retrato de Mumbai, India, por Lourdes Pérez', caption: 'Mumbai, India', captionEn: 'Mumbai, India', country: 'India', countryEn: 'India' },
  { src: '/fotografia-gente-rishikesh-india-2.jpeg', alt: 'Retrato de Rishikesh, India, por Lourdes Pérez', caption: 'Rishikesh, India', captionEn: 'Rishikesh, India', country: 'India', countryEn: 'India' },
  { src: '/fotografia-gente-rishikesh-india-3.jpeg', alt: 'Retrato de Rishikesh, India, por Lourdes Pérez', caption: 'Rishikesh, India', captionEn: 'Rishikesh, India', country: 'India', countryEn: 'India' },
  { src: '/fotografia-gente-agra-india.jpeg', alt: 'Retrato de Agra, India, por Lourdes Pérez', caption: 'Agra, India', captionEn: 'Agra, India', country: 'India', countryEn: 'India' },
  { src: '/fotografia-gente-pune-india.jpeg', alt: 'Retrato de Pune, India, por Lourdes Pérez', caption: 'Pune, India', captionEn: 'Pune, India', country: 'India', countryEn: 'India' },
  { src: '/fotografia-gente-jaipur-india-6.jpeg', alt: 'Retrato de Jaipur, India, por Lourdes Pérez', caption: 'Jaipur, India', captionEn: 'Jaipur, India', country: 'India', countryEn: 'India' },
  { src: '/fotografia-gente-mumbai-india-4.jpeg', alt: 'Retrato de Mumbai, India, por Lourdes Pérez', caption: 'Mumbai, India', captionEn: 'Mumbai, India', country: 'India', countryEn: 'India' },
  { src: '/fotografia-gente-mumbai-india-5.jpeg', alt: 'Retrato de Mumbai, India, por Lourdes Pérez', caption: 'Mumbai, India', captionEn: 'Mumbai, India', country: 'India', countryEn: 'India' },
  { src: '/fotografia-gente-oaxaca-mexico.jpeg', alt: 'Retrato de Oaxaca, México, por Lourdes Pérez', caption: 'Oaxaca, México', captionEn: 'Oaxaca, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/fotografia-gente-khlong-damnoen-saduak-tailandia.jpeg', alt: 'Retrato de Khlong Damnoen Saduak, Tailandia, por Lourdes Pérez', caption: 'Khlong Damnoen Saduak, Tailandia', captionEn: 'Khlong Damnoen Saduak, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/fotografia-gente-khlong-damnoen-saduak-tailandia-2.jpeg', alt: 'Retrato de Khlong Damnoen Saduak, Tailandia, por Lourdes Pérez', caption: 'Khlong Damnoen Saduak, Tailandia', captionEn: 'Khlong Damnoen Saduak, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/fotografia-gente-damnoen-saduak-tailandia-3.jpeg', alt: 'Retrato de Damnoen Saduak, Tailandia, por Lourdes Pérez', caption: 'Damnoen Saduak, Tailandia', captionEn: 'Damnoen Saduak, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/fotografia-gente-bangkok-tailandia-2.jpeg', alt: 'Retrato de Bangkok, Tailandia, por Lourdes Pérez', caption: 'Bangkok, Tailandia', captionEn: 'Bangkok, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/fotografia-gente-hoi-an-vietnam-4.jpeg', alt: 'Retrato de Hoi An, Vietnam, por Lourdes Pérez', caption: 'Hoi An, Vietnam', captionEn: 'Hoi An, Vietnam', country: 'Vietnam', countryEn: 'Vietnam' },
  { src: '/fotografia-gente-hoi-an-vietnam-5.jpeg', alt: 'Retrato de Hoi An, Vietnam, por Lourdes Pérez', caption: 'Hoi An, Vietnam', captionEn: 'Hoi An, Vietnam', country: 'Vietnam', countryEn: 'Vietnam' },
  { src: '/fotografia-gente-hoi-an-vietnam-6.jpeg', alt: 'Retrato de Hoi An, Vietnam, por Lourdes Pérez', caption: 'Hoi An, Vietnam', captionEn: 'Hoi An, Vietnam', country: 'Vietnam', countryEn: 'Vietnam' },
  { src: '/fotografia-gente-fatih-turquia.jpeg', alt: 'Retrato de Fatih, Turquía, por Lourdes Pérez', caption: 'Fatih, Turquía', captionEn: 'Fatih, Turkey', country: 'Turquía', countryEn: 'Turkey' },
  { src: '/fotografia-gente-bali-indonesia-6.jpeg', alt: 'Retrato de Bali, Indonesia, por Lourdes Pérez', caption: 'Bali, Indonesia', captionEn: 'Bali, Indonesia', country: 'Indonesia', countryEn: 'Indonesia' },
  { src: '/fotografia-gente-bali-indonesia-7.jpeg', alt: 'Retrato de Bali, Indonesia, por Lourdes Pérez', caption: 'Bali, Indonesia', captionEn: 'Bali, Indonesia', country: 'Indonesia', countryEn: 'Indonesia' },
  { src: '/fotografia-gente-jaipur-india-7.jpeg', alt: 'Retrato de Jaipur, India, por Lourdes Pérez', caption: 'Jaipur, India', captionEn: 'Jaipur, India', country: 'India', countryEn: 'India' },
  { src: '/fotografia-gente-khlong-damnoen-saduak-tailandia-3.jpeg', alt: 'Retrato de Khlong Damnoen Saduak, Tailandia, por Lourdes Pérez', caption: 'Khlong Damnoen Saduak, Tailandia', captionEn: 'Khlong Damnoen Saduak, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/fotografia-gente-jaipur-india-8.jpeg', alt: 'Retrato de Jaipur, India, por Lourdes Pérez', caption: 'Jaipur, India', captionEn: 'Jaipur, India', country: 'India', countryEn: 'India' },
  { src: '/fotografia-gente-george-town-malasia.jpeg', alt: 'Retrato de George Town, Malasia, por Lourdes Pérez', caption: 'George Town, Malasia', captionEn: 'George Town, Malaysia', country: 'Malasia', countryEn: 'Malaysia' },
  { src: '/fotografia-gente-bali-indonesia-8.jpeg', alt: 'Retrato de Bali, Indonesia, por Lourdes Pérez', caption: 'Bali, Indonesia', captionEn: 'Bali, Indonesia', country: 'Indonesia', countryEn: 'Indonesia' },
  { src: '/fotografia-gente-guerrero-mexico.jpeg', alt: 'Retrato de Guerrero, México, por Lourdes Pérez', caption: 'Guerrero, México', captionEn: 'Guerrero, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/fotografia-gente-jaipur-india-9.jpeg', alt: 'Retrato de Jaipur, India, por Lourdes Pérez', caption: 'Jaipur, India', captionEn: 'Jaipur, India', country: 'India', countryEn: 'India' },
]

/** Traduce las fotos al idioma pedido, para pasarlas a los carruseles. */
export function localize(photos: ObraPhoto[], en = false) {
  return photos.map((p) => ({
    src: p.src,
    alt: p.alt,
    caption: en ? p.captionEn : p.caption,
    focus: p.focus,
  }))
}

/** Agrupa por país conservando el orden de aparición. */
export function groupByCountry(photos: ObraPhoto[], en = false) {
  const groups = new Map<string, ObraPhoto[]>()
  for (const p of photos) {
    const key = en ? p.countryEn : p.country
    const list = groups.get(key)
    if (list) list.push(p)
    else groups.set(key, [p])
  }
  return [...groups.entries()].map(([country, items]) => ({ country, items }))
}

// ---------------------------------------------------------------------------
// Fotografía intervenida, producto, pintura y técnicas mixtas
// La ficha de cada obra va en tres líneas: nombre, técnica y medida.
// ---------------------------------------------------------------------------

export interface ObraPiece {
  src: string
  alt: string
  altEn: string
  caption?: string
  captionEn?: string
}

// Las once numeradas van primero; las de Reinterpretando cierran la sección.
export const intervenida: ObraPiece[] = [
  ...Array.from({ length: 11 }, (_, i) => ({
    src: `/fotografia-intervenida-lourdes-perez-${i + 1}.jpg`,
    alt: `Fotografía intervenida ${i + 1}, obra de Lourdes Pérez`,
    altEn: `Intervened photography ${i + 1}, artwork by Lourdes Pérez`,
  })),
  {
    src: '/fotografia-intervenida-la-habana-cuba-reinterpretando.jpeg',
    alt: 'La Habana, Cuba, fotografía intervenida con acuarela, por Lourdes Pérez',
    altEn: 'Havana, Cuba, photograph intervened with watercolour, by Lourdes Pérez',
    caption: 'La Habana, Cuba\nFotografía intervenida con acuarela\n90 × 60 cm',
    captionEn: 'Havana, Cuba\nPhotograph intervened with watercolour\n90 × 60 cm',
  },
  {
    src: '/fotografia-intervenida-florencia-italia-reinterpretando.jpeg',
    alt: 'Florencia, Italia, fotografía intervenida con acuarela, por Lourdes Pérez',
    altEn: 'Florence, Italy, photograph intervened with watercolour, by Lourdes Pérez',
    caption: 'Florencia, Italia\nFotografía intervenida con acuarela\n90 × 60 cm',
    captionEn: 'Florence, Italy\nPhotograph intervened with watercolour\n90 × 60 cm',
  },
  {
    src: '/fotografia-intervenida-lucca-italia-reinterpretando.jpeg',
    alt: 'Lucca, Italia, fotografía intervenida con acuarela, por Lourdes Pérez',
    altEn: 'Lucca, Italy, photograph intervened with watercolour, by Lourdes Pérez',
    caption: 'Lucca, Italia\nFotografía intervenida con acuarela\n90 × 60 cm',
    captionEn: 'Lucca, Italy\nPhotograph intervened with watercolour\n90 × 60 cm',
  },
  {
    src: '/fotografia-intervenida-gozo-malta-reinterpretando.jpeg',
    alt: 'Gozo, Malta, fotografía intervenida con acuarela, por Lourdes Pérez',
    altEn: 'Gozo, Malta, photograph intervened with watercolour, by Lourdes Pérez',
    caption: 'Gozo, Malta\nFotografía intervenida con acuarela\n90 × 60 cm',
    captionEn: 'Gozo, Malta\nPhotograph intervened with watercolour\n90 × 60 cm',
  },
  {
    src: '/fotografia-intervenida-progreso-mexico-reinterpretando.jpeg',
    alt: 'Progreso, México, fotografía intervenida con acuarela, por Lourdes Pérez',
    altEn: 'Progreso, Mexico, photograph intervened with watercolour, by Lourdes Pérez',
    caption: 'Progreso, México\nFotografía intervenida con acuarela\n90 × 60 cm',
    captionEn: 'Progreso, Mexico\nPhotograph intervened with watercolour\n90 × 60 cm',
  },
  {
    src: '/fotografia-intervenida-valle-de-bravo-mexico-reinterpretando.jpeg',
    alt: 'Valle de Bravo, México, fotografía intervenida con acuarela, por Lourdes Pérez',
    altEn: 'Valle de Bravo, Mexico, photograph intervened with watercolour, by Lourdes Pérez',
    caption: 'Valle de Bravo, México\nFotografía intervenida con acuarela\n90 × 60 cm',
    captionEn: 'Valle de Bravo, Mexico\nPhotograph intervened with watercolour\n90 × 60 cm',
  },
]

export const producto: ObraPiece[] = [1, 3, 2, 4, 5].map((n) => ({
  src: `/fotografia-producto-gastronomia-lourdes-perez-${n}.jpeg`,
  alt: `Fotografía de producto y gastronómica ${n}, por Lourdes Pérez`,
  altEn: `Product and food photography ${n}, by Lourdes Pérez`,
}))

export const pinturas: ObraPiece[] = [
  {
    src: '/pintura-obra-azul.jpeg',
    alt: 'Azul, acrílico, obra de Lourdes Pérez',
    altEn: 'Azul, acrylic, artwork by Lourdes Pérez',
    caption: 'Azul\nAcrílico\n80 × 80 cm',
    captionEn: 'Azul\nAcrylic\n80 × 80 cm',
  },
  {
    src: '/pintura-obra-llueve.jpg',
    alt: 'Llueve, acuarela, obra de Lourdes Pérez',
    altEn: 'Llueve, watercolor, artwork by Lourdes Pérez',
    caption: 'Llueve\nAcuarela\n21.6 × 27.9 cm\nIlustración del libro «Indeleble»',
    captionEn: 'Llueve\nWatercolor\n21.6 × 27.9 cm\nIllustration from the book «Indeleble»',
  },
  {
    src: '/pintura-obra-rastros.jpeg',
    alt: 'Rastros, acrílico, obra de Lourdes Pérez',
    altEn: 'Rastros, acrylic, artwork by Lourdes Pérez',
    caption: 'Rastros\nAcrílico\n120 × 60 cm',
    captionEn: 'Rastros\nAcrylic\n120 × 60 cm',
  },
  {
    src: '/pintura-obra-mariposa.jpg',
    alt: 'Mariposa, acuarela, obra de Lourdes Pérez',
    altEn: 'Mariposa, watercolor, artwork by Lourdes Pérez',
    caption: 'Mariposa\nAcuarela\n14.8 × 21 cm',
    captionEn: 'Mariposa\nWatercolor\n14.8 × 21 cm',
  },
  {
    src: '/pintura-obra-flamingo.jpg',
    alt: 'Flamingo, acuarela, obra de Lourdes Pérez',
    altEn: 'Flamingo, watercolor, artwork by Lourdes Pérez',
    caption: 'Flamingo\nAcuarela\n14.8 × 21 cm',
    captionEn: 'Flamingo\nWatercolor\n14.8 × 21 cm',
  },
  {
    src: '/pintura-obra-fe.jpg',
    alt: 'Fe, acuarela, obra de Lourdes Pérez',
    altEn: 'Fe, watercolor, artwork by Lourdes Pérez',
    caption: 'Fe\nAcuarela\n21.6 × 27.9 cm',
    captionEn: 'Fe\nWatercolor\n21.6 × 27.9 cm',
  },
  {
    src: '/pintura-obra-ballena.jpg',
    alt: 'Ballena, acuarela, obra de Lourdes Pérez',
    altEn: 'Ballena, watercolor, artwork by Lourdes Pérez',
    caption: 'Ballena\nAcuarela\n21 × 14.8 cm',
    captionEn: 'Ballena\nWatercolor\n21 × 14.8 cm',
  },
  {
    src: '/pintura-obra-despues-de-ti.jpeg',
    alt: 'Después de ti, acrílico, obra de Lourdes Pérez',
    altEn: 'Después de ti, acrylic, artwork by Lourdes Pérez',
    caption: 'Después de ti\nAcrílico\n120 × 90 cm',
    captionEn: 'Después de ti\nAcrylic\n120 × 90 cm',
  },
  {
    src: '/pintura-obra-matices.jpeg',
    alt: 'Matices, acrílico, obra de Lourdes Pérez',
    altEn: 'Matices, acrylic, artwork by Lourdes Pérez',
    caption: 'Matices\nAcrílico\n120 × 60 cm',
    captionEn: 'Matices\nAcrylic\n120 × 60 cm',
  },
]

export const mixtas: ObraPiece[] = [
  {
    src: '/tecnica-mixta-obra-cup-of-tea.jpeg',
    alt: 'Cup of Tea, técnica mixta sobre mapa original de la ordnance survey (reino unido), obra de Lourdes Pérez',
    altEn: 'Cup of Tea, mixed media on an original ordnance survey map (united kingdom), artwork by Lourdes Pérez',
    caption: 'Cup of Tea\nTécnica mixta sobre mapa original de la Ordnance Survey (Reino Unido)\n65 × 76 cm',
    captionEn: 'Cup of Tea\nMixed media on an original Ordnance Survey map (United Kingdom)\n65 × 76 cm',
  },
  {
    src: '/tecnica-mixta-obra-old-brandy.jpeg',
    alt: 'Old Brandy, técnica mixta, obra de Lourdes Pérez',
    altEn: 'Old Brandy, mixed media, artwork by Lourdes Pérez',
    caption:
      'Old Brandy\nTécnica mixta\n90 × 60 cm\nPeriódico «La Nazione», número especial de Centenario, Italia, 1959',
    captionEn:
      'Old Brandy\nMixed media\n90 × 60 cm\nNewspaper «La Nazione», Centenary special edition, Italy, 1959',
  },
  {
    src: '/tecnica-mixta-obra-bee.jpeg',
    alt: 'Bee, técnica mixta sobre mapa original de la ordnance survey (reino unido), obra de Lourdes Pérez',
    altEn: 'Bee, mixed media on an original ordnance survey map (united kingdom), artwork by Lourdes Pérez',
    caption: 'Bee\nTécnica mixta sobre mapa original de la Ordnance Survey (Reino Unido)\n65 × 76 cm',
    captionEn: 'Bee\nMixed media on an original Ordnance Survey map (United Kingdom)\n65 × 76 cm',
  },
  {
    src: '/tecnica-mixta-obra-el-taxi.jpeg',
    alt: 'El Taxi, técnica mixta sobre mapa original de la ordnance survey (reino unido), obra de Lourdes Pérez',
    altEn: 'El Taxi, mixed media on an original ordnance survey map (united kingdom), artwork by Lourdes Pérez',
    caption: 'El Taxi\nTécnica mixta sobre mapa original de la Ordnance Survey (Reino Unido)\n65 × 76 cm',
    captionEn: 'El Taxi\nMixed media on an original Ordnance Survey map (United Kingdom)\n65 × 76 cm',
  },
  {
    src: '/tecnica-mixta-obra-coming-home.jpeg',
    alt: 'Coming Home, técnica mixta sobre mapa original de la ordnance survey (reino unido), obra de Lourdes Pérez',
    altEn: 'Coming Home, mixed media on an original ordnance survey map (united kingdom), artwork by Lourdes Pérez',
    caption: 'Coming Home\nTécnica mixta sobre mapa original de la Ordnance Survey (Reino Unido)\n65 × 76 cm',
    captionEn: 'Coming Home\nMixed media on an original Ordnance Survey map (United Kingdom)\n65 × 76 cm',
  },
  {
    src: '/tecnica-mixta-obra-alright.jpeg',
    alt: 'Alright, técnica mixta sobre mapa original de la ordnance survey (reino unido), obra de Lourdes Pérez',
    altEn: 'Alright, mixed media on an original ordnance survey map (united kingdom), artwork by Lourdes Pérez',
    caption: 'Alright\nTécnica mixta sobre mapa original de la Ordnance Survey (Reino Unido)\n65 × 76 cm',
    captionEn: 'Alright\nMixed media on an original Ordnance Survey map (United Kingdom)\n65 × 76 cm',
  },
  {
    src: '/tecnica-mixta-obra-wonderwall.jpeg',
    alt: 'Wonderwall, técnica mixta sobre mapa original de la ordnance survey (reino unido), obra de Lourdes Pérez',
    altEn: 'Wonderwall, mixed media on an original ordnance survey map (united kingdom), artwork by Lourdes Pérez',
    caption: 'Wonderwall\nTécnica mixta sobre mapa original de la Ordnance Survey (Reino Unido)\n65 × 76 cm',
    captionEn: 'Wonderwall\nMixed media on an original Ordnance Survey map (United Kingdom)\n65 × 76 cm',
  },
  {
    src: '/tecnica-mixta-obra-taxi.jpeg',
    alt: 'Taxi, técnica mixta sobre mapa original de la ordnance survey (reino unido), obra de Lourdes Pérez',
    altEn: 'Taxi, mixed media on an original ordnance survey map (united kingdom), artwork by Lourdes Pérez',
    caption: 'Taxi\nTécnica mixta sobre mapa original de la Ordnance Survey (Reino Unido)\n65 × 76 cm',
    captionEn: 'Taxi\nMixed media on an original Ordnance Survey map (United Kingdom)\n65 × 76 cm',
  },
  {
    src: '/tecnica-mixta-obra-vuela.jpeg',
    alt: 'Vuela, técnica mixta, obra de Lourdes Pérez',
    altEn: 'Vuela, mixed media, artwork by Lourdes Pérez',
    caption:
      'Vuela\nTécnica mixta\n60 × 90 cm\nPeriódico «La Nazione», número especial de Centenario, Italia, 1959',
    captionEn:
      'Vuela\nMixed media\n60 × 90 cm\nNewspaper «La Nazione», Centenary special edition, Italy, 1959',
  },
]

/** Adapta las piezas al idioma pedido. */
export function localizePieces(pieces: ObraPiece[], en = false) {
  return pieces.map((p) => ({
    src: p.src,
    alt: en ? p.altEn : p.alt,
    caption: en ? p.captionEn : p.caption,
  }))
}
