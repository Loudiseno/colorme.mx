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
  { src: '/lugares-hoi-an-1.jpeg', alt: 'Hoi An, Vietnam — fotografía de Lou', caption: 'Hoi An, Vietnam', captionEn: 'Hoi An, Vietnam', country: 'Vietnam', countryEn: 'Vietnam' },
  { src: '/lugares-galata-estambul.jpeg', alt: 'Estambul, Turquía — fotografía de Lou', caption: 'Estambul, Turquía', captionEn: 'Istanbul, Turkey', country: 'Turquía', countryEn: 'Turkey' },
  { src: '/lugares-trinidad-2.jpeg', alt: 'Trinidad, Cuba — fotografía de Lou', caption: 'Trinidad, Cuba', captionEn: 'Trinidad, Cuba', country: 'Cuba', countryEn: 'Cuba' },
  { src: '/lugares-progreso-2.jpeg', alt: 'Progreso, México — fotografía de Lou', caption: 'Progreso, México', captionEn: 'Progreso, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/lugares-ciudad-de-mexico.jpeg', alt: 'Ciudad de México, México — fotografía de Lou', caption: 'Ciudad de México, México', captionEn: 'Mexico City, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/lugares-amsterdam-3.jpeg', alt: 'Ámsterdam, Países Bajos — fotografía de Lou', caption: 'Ámsterdam, Países Bajos', captionEn: 'Amsterdam, Netherlands', country: 'Países Bajos', countryEn: 'Netherlands' },
  { src: '/lugares-ayutthaya.jpeg', alt: 'Ayutthaya, Tailandia — fotografía de Lou', caption: 'Ayutthaya, Tailandia', captionEn: 'Ayutthaya, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/lugares-capadocia-2.jpeg', alt: 'Capadocia, Turquía — fotografía de Lou', caption: 'Capadocia, Turquía', captionEn: 'Cappadocia, Turkey', country: 'Turquía', countryEn: 'Turkey' },
  { src: '/lugares-koh-phi-phi.jpeg', alt: 'Koh Phi Phi, Tailandia — fotografía de Lou', caption: 'Koh Phi Phi, Tailandia', captionEn: 'Koh Phi Phi, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/lugares-goreme.jpeg', alt: 'Göreme, Turquía — fotografía de Lou', caption: 'Göreme, Turquía', captionEn: 'Goreme, Turkey', country: 'Turquía', countryEn: 'Turkey' },
  { src: '/lugares-capadocia-3.jpeg', alt: 'Capadocia, Turquía — fotografía de Lou', caption: 'Capadocia, Turquía', captionEn: 'Cappadocia, Turkey', country: 'Turquía', countryEn: 'Turkey' },
  { src: '/lugares-bayan-lepas.jpeg', alt: 'Bayan Lepas, Malasia — fotografía de Lou', caption: 'Bayan Lepas, Malasia', captionEn: 'Bayan Lepas, Malaysia', country: 'Malasia', countryEn: 'Malaysia' },
  { src: '/lugares-bangkok-1.jpeg', alt: 'Bangkok, Tailandia — fotografía de Lou', caption: 'Bangkok, Tailandia', captionEn: 'Bangkok, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/lugares-la-puerta-cuba.jpeg', alt: 'Cuba — fotografía de Lou', caption: 'Cuba', captionEn: 'Cuba', country: 'Cuba', countryEn: 'Cuba' },
  { src: '/lugares-selimiye-edirne.jpeg', alt: 'Edirne, Turquía — fotografía de Lou', caption: 'Edirne, Turquía', captionEn: 'Edirne, Turkey', country: 'Turquía', countryEn: 'Turkey' },
  { src: '/lugares-basilica-cisterna.jpeg', alt: 'Estambul, Turquía — fotografía de Lou', caption: 'Estambul, Turquía', captionEn: 'Istanbul, Turkey', country: 'Turquía', countryEn: 'Turkey' },
  { src: '/lugares-hoi-an-3.jpeg', alt: 'Hoi An, Vietnam — fotografía de Lou', caption: 'Hoi An, Vietnam', captionEn: 'Hoi An, Vietnam', country: 'Vietnam', countryEn: 'Vietnam' },
  { src: '/lugares-jaipur-2.jpeg', alt: 'Jaipur, India — fotografía de Lou', caption: 'Jaipur, India', captionEn: 'Jaipur, India', country: 'India', countryEn: 'India' },
  { src: '/lugares-londres.jpeg', alt: 'Londres, Reino Unido — fotografía de Lou', caption: 'Londres, Reino Unido', captionEn: 'London, United Kingdom', country: 'Reino Unido', countryEn: 'United Kingdom' },
  { src: '/lugares-lucca.jpeg', alt: 'Lucca, Italia — fotografía de Lou', caption: 'Lucca, Italia', captionEn: 'Lucca, Italy', country: 'Italia', countryEn: 'Italy' },
  { src: '/lugares-amsterdam-2.jpeg', alt: 'Ámsterdam, Países Bajos — fotografía de Lou', caption: 'Ámsterdam, Países Bajos', captionEn: 'Amsterdam, Netherlands', country: 'Países Bajos', countryEn: 'Netherlands' },
  { src: '/lugares-red-district-amsterdam-2.jpeg', alt: 'Ámsterdam, Países Bajos — fotografía de Lou', caption: 'Ámsterdam, Países Bajos', captionEn: 'Amsterdam, Netherlands', country: 'Países Bajos', countryEn: 'Netherlands' },
  { src: '/lugares-red-district-amsterdam.jpeg', alt: 'Ámsterdam, Países Bajos — fotografía de Lou', caption: 'Ámsterdam, Países Bajos', captionEn: 'Amsterdam, Netherlands', country: 'Países Bajos', countryEn: 'Netherlands' },
  { src: '/lugares-agra-taj-mahal.jpeg', alt: 'Agra, India — fotografía de Lou', caption: 'Agra, India', captionEn: 'Agra, India', country: 'India', countryEn: 'India' },
  { src: '/lugares-baja-california-sur.jpeg', alt: 'Baja California Sur, México — fotografía de Lou', caption: 'Baja California Sur, México', captionEn: 'Baja California Sur, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/lugares-baja-california-3.jpeg', alt: 'Baja California, México — fotografía de Lou', caption: 'Baja California, México', captionEn: 'Baja California, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/lugares-bangkok-2.jpeg', alt: 'Bangkok, Tailandia — fotografía de Lou', caption: 'Bangkok, Tailandia', captionEn: 'Bangkok, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/lugares-bellas-artes-cdmx.jpeg', alt: 'Ciudad de México, México — fotografía de Lou', caption: 'Ciudad de México, México', captionEn: 'Mexico City, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/lugares-edimburgo.jpeg', alt: 'Edimburgo, Reino Unido — fotografía de Lou', caption: 'Edimburgo, Reino Unido', captionEn: 'Edinburgh, United Kingdom', country: 'Reino Unido', countryEn: 'United Kingdom' },
  { src: '/lugares-estambul-1.jpeg', alt: 'Estambul, Turquía — fotografía de Lou', caption: 'Estambul, Turquía', captionEn: 'Istanbul, Turkey', country: 'Turquía', countryEn: 'Turkey' },
  { src: '/lugares-estambul-2.jpeg', alt: 'Estambul, Turquía — fotografía de Lou', caption: 'Estambul, Turquía', captionEn: 'Istanbul, Turkey', country: 'Turquía', countryEn: 'Turkey' },
  { src: '/lugares-estambul-3.jpeg', alt: 'Estambul, Turquía — fotografía de Lou', caption: 'Estambul, Turquía', captionEn: 'Istanbul, Turkey', country: 'Turquía', countryEn: 'Turkey' },
  { src: '/lugares-george-town.jpeg', alt: 'George Town, Malasia — fotografía de Lou', caption: 'George Town, Malasia', captionEn: 'George Town, Malaysia', country: 'Malasia', countryEn: 'Malaysia' },
  { src: '/lugares-hoi-an-2.jpeg', alt: 'Hoi An, Vietnam — fotografía de Lou', caption: 'Hoi An, Vietnam', captionEn: 'Hoi An, Vietnam', country: 'Vietnam', countryEn: 'Vietnam' },
  { src: '/lugares-jaipur-3.jpeg', alt: 'Jaipur, India — fotografía de Lou', caption: 'Jaipur, India', captionEn: 'Jaipur, India', country: 'India', countryEn: 'India' },
  { src: '/lugares-malecon-la-habana.jpeg', alt: 'La Habana, Cuba — fotografía de Lou', caption: 'La Habana, Cuba', captionEn: 'Havana, Cuba', country: 'Cuba', countryEn: 'Cuba' },
  { src: '/lugares-la-ventana.jpeg', alt: 'La Ventana, México — fotografía de Lou', caption: 'La Ventana, México', captionEn: 'La Ventana, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/lugares-ponte-del-diavolo-lanzo.jpeg', alt: 'Lanzo, Italia — fotografía de Lou', caption: 'Lanzo, Italia', captionEn: 'Lanzo, Italy', country: 'Italia', countryEn: 'Italy' },
  { src: '/lugares-mdina-malta.jpeg', alt: 'Mdina, Malta — fotografía de Lou', caption: 'Mdina, Malta', captionEn: 'Mdina, Malta', country: 'Malta', countryEn: 'Malta' },
  { src: '/lugares-manchester.jpeg', alt: 'Manchester, Reino Unido — fotografía de Lou', caption: 'Manchester, Reino Unido', captionEn: 'Manchester, United Kingdom', country: 'Reino Unido', countryEn: 'United Kingdom' },
  { src: '/lugares-meteora-2.jpeg', alt: 'Meteora, Grecia — fotografía de Lou', caption: 'Meteora, Grecia', captionEn: 'Meteora, Greece', country: 'Grecia', countryEn: 'Greece' },
  { src: '/lugares-meteora-3.jpeg', alt: 'Meteora, Grecia — fotografía de Lou', caption: 'Meteora, Grecia', captionEn: 'Meteora, Greece', country: 'Grecia', countryEn: 'Greece' },
  { src: '/lugares-miami.jpeg', alt: 'Miami, Estados Unidos — fotografía de Lou', caption: 'Miami, Estados Unidos', captionEn: 'Miami, United States', country: 'Estados Unidos', countryEn: 'United States' },
  { src: '/lugares-miconos.jpeg', alt: 'Miconos, Grecia — fotografía de Lou', caption: 'Miconos, Grecia', captionEn: 'Mykonos, Greece', country: 'Grecia', countryEn: 'Greece' },
  { src: '/lugares-nusa-penida.jpeg', alt: 'Nusa Penida, Indonesia — fotografía de Lou', caption: 'Nusa Penida, Indonesia', captionEn: 'Nusa Penida, Indonesia', country: 'Indonesia', countryEn: 'Indonesia' },
  { src: '/lugares-phi-phi.jpeg', alt: 'Phi Phi, Tailandia — fotografía de Lou', caption: 'Phi Phi, Tailandia', captionEn: 'Phi Phi, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/lugares-progreso-1.jpeg', alt: 'Progreso, México — fotografía de Lou', caption: 'Progreso, México', captionEn: 'Progreso, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/lugares-progreso-3.jpeg', alt: 'Progreso, México — fotografía de Lou', caption: 'Progreso, México', captionEn: 'Progreso, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/lugares-puebla.jpeg', alt: 'Puebla, México — fotografía de Lou', caption: 'Puebla, México', captionEn: 'Puebla, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/lugares-siena.jpeg', alt: 'Siena, Italia — fotografía de Lou', caption: 'Siena, Italia', captionEn: 'Siena, Italy', country: 'Italia', countryEn: 'Italy' },
  { src: '/lugares-singapur.jpeg', alt: 'Singapur — fotografía de Lou', caption: 'Singapur', captionEn: 'Singapore', country: 'Singapur', countryEn: 'Singapore' },
  { src: '/lugares-tailandia-2.jpeg', alt: 'Tailandia — fotografía de Lou', caption: 'Tailandia', captionEn: 'Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/lugares-tailandia-3.jpeg', alt: 'Tailandia — fotografía de Lou', caption: 'Tailandia', captionEn: 'Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/lugares-toledo.jpeg', alt: 'Toledo, España — fotografía de Lou', caption: 'Toledo, España', captionEn: 'Toledo, Spain', country: 'España', countryEn: 'Spain' },
  { src: '/lugares-tulum.jpeg', alt: 'Tulum, México — fotografía de Lou', caption: 'Tulum, México', captionEn: 'Tulum, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/lugares-ventana-azul-malta.jpeg', alt: 'Ventana Azul, Malta — fotografía de Lou', caption: 'Ventana Azul, Malta', captionEn: 'Ventana Azul, Malta', country: 'Malta', countryEn: 'Malta' },
  { src: '/lugares-yucatan-2.jpeg', alt: 'Yucatán, México — fotografía de Lou', caption: 'Yucatán, México', captionEn: 'Yucatan, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/lugares-yucatan.jpeg', alt: 'Yucatán, México — fotografía de Lou', caption: 'Yucatán, México', captionEn: 'Yucatan, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/lugares-kuala-lumpur.jpeg', alt: 'Kuala Lumpur, Malasia — fotografía de Lou', caption: 'Kuala Lumpur, Malasia', captionEn: 'Kuala Lumpur, Malaysia', country: 'Malasia', countryEn: 'Malaysia' },
  { src: '/lugares-baja-california-2.jpeg', alt: 'Baja California, México — fotografía de Lou', caption: 'Baja California, México', captionEn: 'Baja California, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/lugares-cologne-2.jpeg', alt: 'Cologne, Alemania — fotografía de Lou', caption: 'Cologne, Alemania', captionEn: 'Cologne, Germany', country: 'Alemania', countryEn: 'Germany' },
  { src: '/lugares-colonia.jpeg', alt: 'Cologne, Alemania — fotografía de Lou', caption: 'Cologne, Alemania', captionEn: 'Cologne, Germany', country: 'Alemania', countryEn: 'Germany' },
  { src: '/lugares-galata-estambul-2.jpeg', alt: 'Estambul, Turquía — fotografía de Lou', caption: 'Estambul, Turquía', captionEn: 'Istanbul, Turkey', country: 'Turquía', countryEn: 'Turkey' },
  { src: '/lugares-florencia.jpeg', alt: 'Florencia, Italia — fotografía de Lou', caption: 'Florencia, Italia', captionEn: 'Florence, Italy', country: 'Italia', countryEn: 'Italy' },
  { src: '/lugares-hidalgo.jpeg', alt: 'Hidalgo, México — fotografía de Lou', caption: 'Hidalgo, México', captionEn: 'Hidalgo, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/lugares-jaipur.jpeg', alt: 'Jaipur, India — fotografía de Lou', caption: 'Jaipur, India', captionEn: 'Jaipur, India', country: 'India', countryEn: 'India' },
  { src: '/lugares-uxmal.jpeg', alt: 'Uxmal, México — fotografía de Lou', caption: 'Uxmal, México', captionEn: 'Uxmal, Mexico', country: 'México', countryEn: 'Mexico' },
]

export const gente: ObraPhoto[] = [
  { src: '/gente-ellas-nusa-penida.jpeg', alt: 'Nusa Penida, Indonesia — fotografía de Lou', caption: 'Nusa Penida, Indonesia', captionEn: 'Nusa Penida, Indonesia', country: 'Indonesia', countryEn: 'Indonesia' },
  { src: '/gente-bali-2.jpeg', alt: 'Bali, Indonesia — fotografía de Lou', caption: 'Bali, Indonesia', captionEn: 'Bali, Indonesia', country: 'Indonesia', countryEn: 'Indonesia', focus: 'top' },
  { src: '/gente-vietnam-2.jpeg', alt: 'Hoi An, Vietnam — fotografía de Lou', caption: 'Hoi An, Vietnam', captionEn: 'Hoi An, Vietnam', country: 'Vietnam', countryEn: 'Vietnam', focus: '50% 65%' },
  { src: '/gente-india-3.jpeg', alt: 'Mumbai, India — fotografía de Lou', caption: 'Mumbai, India', captionEn: 'Mumbai, India', country: 'India', countryEn: 'India' },
  { src: '/gente-vietnam-8.jpeg', alt: 'Hoi An, Vietnam — fotografía de Lou', caption: 'Hoi An, Vietnam', captionEn: 'Hoi An, Vietnam', country: 'Vietnam', countryEn: 'Vietnam' },
  { src: '/gente-india-7.jpeg', alt: 'Jaipur, India — fotografía de Lou', caption: 'Jaipur, India', captionEn: 'Jaipur, India', country: 'India', countryEn: 'India' },
  { src: '/gente-bali-4.jpeg', alt: 'Bali, Indonesia — fotografía de Lou', caption: 'Bali, Indonesia', captionEn: 'Bali, Indonesia', country: 'Indonesia', countryEn: 'Indonesia' },
  { src: '/gente-india-2.jpeg', alt: 'Mumbai, India — fotografía de Lou', caption: 'Mumbai, India', captionEn: 'Mumbai, India', country: 'India', countryEn: 'India' },
  { src: '/gente-india-11.jpeg', alt: 'Jaipur, India — fotografía de Lou', caption: 'Jaipur, India', captionEn: 'Jaipur, India', country: 'India', countryEn: 'India' },
  { src: '/gente-india-12.jpeg', alt: 'Jaipur, India — fotografía de Lou', caption: 'Jaipur, India', captionEn: 'Jaipur, India', country: 'India', countryEn: 'India' },
  { src: '/gente-india-17.jpeg', alt: 'Rishikesh, India — fotografía de Lou', caption: 'Rishikesh, India', captionEn: 'Rishikesh, India', country: 'India', countryEn: 'India' },
  { src: '/gente-india-19.jpeg', alt: 'Delhi, India — fotografía de Lou', caption: 'Delhi, India', captionEn: 'Delhi, India', country: 'India', countryEn: 'India' },
  { src: '/gente-india-9.jpeg', alt: 'Jaipur, India — fotografía de Lou', caption: 'Jaipur, India', captionEn: 'Jaipur, India', country: 'India', countryEn: 'India' },
  { src: '/gente-tailandia-1.jpeg', alt: 'Damnoen Saduak, Tailandia — fotografía de Lou', caption: 'Damnoen Saduak, Tailandia', captionEn: 'Damnoen Saduak, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/gente-tailandia-6.jpeg', alt: 'Damnoen Saduak, Tailandia — fotografía de Lou', caption: 'Damnoen Saduak, Tailandia', captionEn: 'Damnoen Saduak, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/gente-vietnam-1.jpeg', alt: 'Da Nang, Vietnam — fotografía de Lou', caption: 'Da Nang, Vietnam', captionEn: 'Da Nang, Vietnam', country: 'Vietnam', countryEn: 'Vietnam' },
  { src: '/gente-vietnam-4.jpeg', alt: 'Hoi An, Vietnam — fotografía de Lou', caption: 'Hoi An, Vietnam', captionEn: 'Hoi An, Vietnam', country: 'Vietnam', countryEn: 'Vietnam' },
  { src: '/gente-india-10.jpeg', alt: 'Jaipur, India — fotografía de Lou', caption: 'Jaipur, India', captionEn: 'Jaipur, India', country: 'India', countryEn: 'India' },
  { src: '/gente-bali-1.jpeg', alt: 'Bali, Indonesia — fotografía de Lou', caption: 'Bali, Indonesia', captionEn: 'Bali, Indonesia', country: 'Indonesia', countryEn: 'Indonesia' },
  { src: '/gente-bali-3.jpeg', alt: 'Bali, Indonesia — fotografía de Lou', caption: 'Bali, Indonesia', captionEn: 'Bali, Indonesia', country: 'Indonesia', countryEn: 'Indonesia' },
  { src: '/gente-bali-6.jpeg', alt: 'Bali, Indonesia — fotografía de Lou', caption: 'Bali, Indonesia', captionEn: 'Bali, Indonesia', country: 'Indonesia', countryEn: 'Indonesia' },
  { src: '/gente-india-1.jpeg', alt: 'Mumbai, India — fotografía de Lou', caption: 'Mumbai, India', captionEn: 'Mumbai, India', country: 'India', countryEn: 'India' },
  { src: '/gente-india-16.jpeg', alt: 'Rishikesh, India — fotografía de Lou', caption: 'Rishikesh, India', captionEn: 'Rishikesh, India', country: 'India', countryEn: 'India' },
  { src: '/gente-india-18.jpeg', alt: 'Rishikesh, India — fotografía de Lou', caption: 'Rishikesh, India', captionEn: 'Rishikesh, India', country: 'India', countryEn: 'India' },
  { src: '/gente-india-20.jpeg', alt: 'Agra, India — fotografía de Lou', caption: 'Agra, India', captionEn: 'Agra, India', country: 'India', countryEn: 'India' },
  { src: '/gente-india-4.jpeg', alt: 'Pune, India — fotografía de Lou', caption: 'Pune, India', captionEn: 'Pune, India', country: 'India', countryEn: 'India' },
  { src: '/gente-india-5.jpeg', alt: 'Jaipur, India — fotografía de Lou', caption: 'Jaipur, India', captionEn: 'Jaipur, India', country: 'India', countryEn: 'India' },
  { src: '/gente-india-6.jpeg', alt: 'Mumbai, India — fotografía de Lou', caption: 'Mumbai, India', captionEn: 'Mumbai, India', country: 'India', countryEn: 'India' },
  { src: '/gente-india-8.jpeg', alt: 'Mumbai, India — fotografía de Lou', caption: 'Mumbai, India', captionEn: 'Mumbai, India', country: 'India', countryEn: 'India' },
  { src: '/gente-oaxaquena-oaxaca.jpeg', alt: 'Oaxaca, México — fotografía de Lou', caption: 'Oaxaca, México', captionEn: 'Oaxaca, Mexico', country: 'México', countryEn: 'Mexico' },
  { src: '/gente-tailandia-3.jpeg', alt: 'Khlong Damnoen Saduak, Tailandia — fotografía de Lou', caption: 'Khlong Damnoen Saduak, Tailandia', captionEn: 'Khlong Damnoen Saduak, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/gente-tailandia-4.jpeg', alt: 'Khlong Damnoen Saduak, Tailandia — fotografía de Lou', caption: 'Khlong Damnoen Saduak, Tailandia', captionEn: 'Khlong Damnoen Saduak, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/gente-tailandia-5.jpeg', alt: 'Damnoen Saduak, Tailandia — fotografía de Lou', caption: 'Damnoen Saduak, Tailandia', captionEn: 'Damnoen Saduak, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/gente-tailandia-7.jpeg', alt: 'Bangkok, Tailandia — fotografía de Lou', caption: 'Bangkok, Tailandia', captionEn: 'Bangkok, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/gente-vietnam-3.jpeg', alt: 'Hoi An, Vietnam — fotografía de Lou', caption: 'Hoi An, Vietnam', captionEn: 'Hoi An, Vietnam', country: 'Vietnam', countryEn: 'Vietnam' },
  { src: '/gente-vietnam-6.jpeg', alt: 'Hoi An, Vietnam — fotografía de Lou', caption: 'Hoi An, Vietnam', captionEn: 'Hoi An, Vietnam', country: 'Vietnam', countryEn: 'Vietnam' },
  { src: '/gente-vietnam-7.jpeg', alt: 'Hoi An, Vietnam — fotografía de Lou', caption: 'Hoi An, Vietnam', captionEn: 'Hoi An, Vietnam', country: 'Vietnam', countryEn: 'Vietnam' },
  { src: '/gente-turquia-1.jpeg', alt: 'Fatih, Turquía — fotografía de Lou', caption: 'Fatih, Turquía', captionEn: 'Fatih, Turkey', country: 'Turquía', countryEn: 'Turkey' },
  { src: '/gente-bali-5.jpeg', alt: 'Bali, Indonesia — fotografía de Lou', caption: 'Bali, Indonesia', captionEn: 'Bali, Indonesia', country: 'Indonesia', countryEn: 'Indonesia' },
  { src: '/gente-bali-7.jpeg', alt: 'Bali, Indonesia — fotografía de Lou', caption: 'Bali, Indonesia', captionEn: 'Bali, Indonesia', country: 'Indonesia', countryEn: 'Indonesia' },
  { src: '/gente-india-13.jpeg', alt: 'Jaipur, India — fotografía de Lou', caption: 'Jaipur, India', captionEn: 'Jaipur, India', country: 'India', countryEn: 'India' },
  { src: '/gente-vietnam-5.jpeg', alt: 'Khlong Damnoen Saduak, Tailandia — fotografía de Lou', caption: 'Khlong Damnoen Saduak, Tailandia', captionEn: 'Khlong Damnoen Saduak, Thailand', country: 'Tailandia', countryEn: 'Thailand' },
  { src: '/gente-india-14.jpeg', alt: 'Jaipur, India — fotografía de Lou', caption: 'Jaipur, India', captionEn: 'Jaipur, India', country: 'India', countryEn: 'India' },
  { src: '/gente-malasia-1.jpeg', alt: 'George Town, Malasia — fotografía de Lou', caption: 'George Town, Malasia', captionEn: 'George Town, Malaysia', country: 'Malasia', countryEn: 'Malaysia' },
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
    src: `/foto-intervenida-${i + 1}.jpg`,
    alt: `Fotografía intervenida ${i + 1} — obra de Lou`,
    altEn: `Intervened photography ${i + 1} — artwork by Lou`,
  })),
  {
    src: '/reinterpretando-cuba.jpeg',
    alt: 'La Habana, Cuba — fotografía intervenida',
    altEn: 'Havana, Cuba — intervened photography',
    caption: 'La Habana, Cuba\nFotografía intervenida con acuarela\n90 × 60 cm',
    captionEn: 'Havana, Cuba\nPhotograph intervened with watercolour\n90 × 60 cm',
  },
  {
    src: '/reinterpretando-firenze.jpeg',
    alt: 'Florencia, Italia — fotografía intervenida',
    altEn: 'Florence, Italy — intervened photography',
    caption: 'Florencia, Italia\nFotografía intervenida con acuarela\n90 × 60 cm',
    captionEn: 'Florence, Italy\nPhotograph intervened with watercolour\n90 × 60 cm',
  },
  {
    src: '/reinterpretando-lucca.jpeg',
    alt: 'Lucca, Italia — fotografía intervenida',
    altEn: 'Lucca, Italy — intervened photography',
    caption: 'Lucca, Italia\nFotografía intervenida con acuarela\n90 × 60 cm',
    captionEn: 'Lucca, Italy\nPhotograph intervened with watercolour\n90 × 60 cm',
  },
  {
    src: '/reinterpretando-malta.jpeg',
    alt: 'Gozo, Malta — fotografía intervenida',
    altEn: 'Gozo, Malta — intervened photography',
    caption: 'Gozo, Malta\nFotografía intervenida con acuarela\n90 × 60 cm',
    captionEn: 'Gozo, Malta\nPhotograph intervened with watercolour\n90 × 60 cm',
  },
  {
    src: '/reinterpretando-progreso.jpeg',
    alt: 'Progreso, México — fotografía intervenida',
    altEn: 'Progreso, Mexico — intervened photography',
    caption: 'Progreso, México\nFotografía intervenida con acuarela\n90 × 60 cm',
    captionEn: 'Progreso, Mexico\nPhotograph intervened with watercolour\n90 × 60 cm',
  },
  {
    src: '/reinterpretando-valle-de-bravo.jpeg',
    alt: 'Valle de Bravo, México — fotografía intervenida',
    altEn: 'Valle de Bravo, Mexico — intervened photography',
    caption: 'Valle de Bravo, México\nFotografía intervenida con acuarela\n90 × 60 cm',
    captionEn: 'Valle de Bravo, Mexico\nPhotograph intervened with watercolour\n90 × 60 cm',
  },
]

export const producto: ObraPiece[] = [1, 3, 2, 4, 5].map((n) => ({
  src: `/foto-producto-${n}.jpeg`,
  alt: `Fotografía de producto ${n} — obra de Lou`,
  altEn: `Product photography ${n} — artwork by Lou`,
}))

export const pinturas: ObraPiece[] = [
  {
    src: '/pintura-azul.jpeg',
    alt: 'Azul — acrílico',
    altEn: 'Azul — acrylic',
    caption: 'Azul\nAcrílico\n80 × 80 cm',
    captionEn: 'Azul\nAcrylic\n80 × 80 cm',
  },
  {
    src: '/acuarela-llueve.jpg',
    alt: 'Llueve — acuarela, ilustración del libro Indeleble',
    altEn: 'Llueve — watercolor, illustration from the book Indeleble',
    caption: 'Llueve\nAcuarela\n21.6 × 27.9 cm\nIlustración del libro «Indeleble»',
    captionEn: 'Llueve\nWatercolor\n21.6 × 27.9 cm\nIllustration from the book «Indeleble»',
  },
  {
    src: '/pintura-rastros.jpeg',
    alt: 'Rastros — acrílico',
    altEn: 'Rastros — acrylic',
    caption: 'Rastros\nAcrílico\n120 × 60 cm',
    captionEn: 'Rastros\nAcrylic\n120 × 60 cm',
  },
  {
    src: '/acuarela-mariposa.jpg',
    alt: 'Mariposa — acuarela',
    altEn: 'Mariposa — watercolor',
    caption: 'Mariposa\nAcuarela\n14.8 × 21 cm',
    captionEn: 'Mariposa\nWatercolor\n14.8 × 21 cm',
  },
  {
    src: '/acuarela-flamingo.jpg',
    alt: 'Flamingo — acuarela',
    altEn: 'Flamingo — watercolor',
    caption: 'Flamingo\nAcuarela\n14.8 × 21 cm',
    captionEn: 'Flamingo\nWatercolor\n14.8 × 21 cm',
  },
  {
    src: '/acuarela-fe.jpg',
    alt: 'Fe — acuarela',
    altEn: 'Fe — watercolor',
    caption: 'Fe\nAcuarela\n21.6 × 27.9 cm',
    captionEn: 'Fe\nWatercolor\n21.6 × 27.9 cm',
  },
  {
    src: '/acuarela-ballena.jpg',
    alt: 'Ballena — acuarela',
    altEn: 'Ballena — watercolor',
    caption: 'Ballena\nAcuarela\n21 × 14.8 cm',
    captionEn: 'Ballena\nWatercolor\n21 × 14.8 cm',
  },
  {
    src: '/pintura-despues-de-ti.jpeg',
    alt: 'Después de ti — acrílico',
    altEn: 'Después de ti — acrylic',
    caption: 'Después de ti\nAcrílico\n120 × 90 cm',
    captionEn: 'Después de ti\nAcrylic\n120 × 90 cm',
  },
  {
    src: '/pintura-matices.jpeg',
    alt: 'Matices — acrílico',
    altEn: 'Matices — acrylic',
    caption: 'Matices\nAcrílico\n120 × 60 cm',
    captionEn: 'Matices\nAcrylic\n120 × 60 cm',
  },
]

export const mixtas: ObraPiece[] = [
  {
    src: '/mixta-vuela.jpeg',
    alt: 'Vuela — técnica mixta',
    altEn: 'Vuela — mixed media',
    caption:
      'Vuela\nTécnica mixta\n60 × 90 cm\nPeriódico «La Nazione», número especial de Centenario, Italia, 1959',
    captionEn:
      'Vuela\nMixed media\n60 × 90 cm\nNewspaper «La Nazione», Centenary special edition, Italy, 1959',
  },
  {
    src: '/mixta-old-brandy.jpeg',
    alt: 'Old Brandy — técnica mixta',
    altEn: 'Old Brandy — mixed media',
    caption:
      'Old Brandy\nTécnica mixta\n90 × 60 cm\nPeriódico «La Nazione», número especial de Centenario, Italia, 1959',
    captionEn:
      'Old Brandy\nMixed media\n90 × 60 cm\nNewspaper «La Nazione», Centenary special edition, Italy, 1959',
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
