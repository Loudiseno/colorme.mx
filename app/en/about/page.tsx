'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function EnAboutPage() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Hero Section */}
        <header className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-[#B2F7EF] px-8 py-3 rounded-xl mb-6 relative">
                <div className="absolute inset-0 bg-[#B2F7EF] opacity-40 rounded-xl blur-sm"></div>
                <h1 className="text-4xl md:text-5xl text-black relative z-10">
                  Hi, I'm Lou
                </h1>
              </div>
              <p className="text-lg text-black leading-relaxed mb-4">
                <strong>Art therapist, grief counselor, designer, artist and cancer survivor.</strong>
              </p>
              <p className="text-lg text-black/70 leading-relaxed">
                Creativity has always been my way of connecting with the world. My own losses led me to accompany others through change and transformation — through listening, through art, or a blend of both. My training integrates techniques from Mexico, Bali, Thailand, Malaysia and India.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-white rounded-3xl p-6 border border-[#B2F7EF]">
                <Image
                  src="/Lou_hobbies.webp"
                  alt="Lou — art therapist, grief counselor, artist, photographer, designer, traveler and more"
                  width={500}
                  height={488}
                  priority
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Story Section */}
        <section className="mb-16">
          <h2 className="text-3xl text-black mb-6 uppercase tracking-wide">My story</h2>
          <div className="prose prose-lg max-w-none text-black/70">
            <p>
              Some years ago my life changed when I received a cancer diagnosis. I found myself facing the deepest uncertainty I had ever experienced.
            </p>
            <p>
              During treatment I discovered that art — always part of my life as a designer and artist — became a refuge and a language for what I could not put into words, a way to move through my emotions and reconnect with myself.
            </p>
            <p>
              As I began to recover, I knew I wanted to devote myself to accompanying others through their processes, through listening and through art. I am the author of Indeleble (available on Amazon in English and Spanish), a book that tells the story of my cancer journey and the personal transformation that came from it.
            </p>
          </div>
        </section>

        {/* Formation Section */}
        <section className="mb-16">
          <h2 className="text-3xl text-black mb-6 uppercase tracking-wide">My training</h2>
          <div className="prose prose-lg max-w-none text-black/70">
            <h3 className="text-black">Grief counseling</h3>
            <p>
              I certified as a grief counselor at Universidad Iberoamericana, one of Mexico's most respected institutions. This allows me to accompany people through loss, grief and the confrontation with death from a professional, deeply human approach.
            </p>

            <h3 className="text-black">Art as therapy</h3>
            <p>
              I have trained through a range of international courses and approaches: a course as an art therapy practitioner, a specialization in Expressive Arts for Working with Children, and studies in Bali where I deepened practices such as Steiner's Mythical Creatures, wet-on-wet, the expressive line and the abstract family portrait, in a setting that honors ancestral traditions of wellbeing.
            </p>

            <h3 className="text-black">Reiki</h3>
            <p>
              I certified in Rishikesh, India — the world capital of yoga and meditation. This energy-healing practice lets me offer more integrated support.
            </p>

            <h3 className="text-black">Graphic design, painting and photography</h3>
            <p>
              I hold a degree in Graphic Design from Universidad Iberoamericana and later completed a diploma in Photographic Painting at CAC (School of Contemporary Art). I have shown work in solo and group exhibitions of art, photography and intervened photography.
            </p>

            <h3 className="text-black">Other studies and practices</h3>
            <p>
              I have had the privilege of studying and practicing different techniques around the world, enriching my work with multicultural perspectives:
            </p>
            <ul>
              <li><strong>India</strong> — Traditional techniques and their connection to spirituality. Mandala making.</li>
              <li><strong>Thailand</strong> — Meditative art and contemplative practices.</li>
              <li><strong>Malaysia</strong> — A fusion of Asian artistic traditions such as batik.</li>
              <li><strong>Bali</strong> — Balinese artistic traditions and their connection to emotion, along with breathwork (conscious breathing techniques for emotional regulation and releasing tension).</li>
              <li><strong>Mexico</strong> — Palliative care (Universidad Anáhuac) and Facing emotional burnout through compassion (Elisabeth Kübler-Ross Foundation).</li>
            </ul>
          </div>
        </section>

        {/* Previous Career Section */}
        <section className="mb-16">
          <h2 className="text-3xl text-black mb-6 uppercase tracking-wide">Professional background</h2>
          <div className="prose prose-lg max-w-none text-black/70">
            <p>
              Before devoting myself to art as therapy and grief counseling, I had a successful career in the creative and business world, working as a graphic designer, professional photographer, brand director and branding and communications specialist.
            </p>
            <p>
              I have collaborated with corporations such as Grupo Carso, media agencies and startups like Rappi and E1, as well as internationally recognized brands and agencies: Saks Fifth Avenue, WPP, Havas, IPG, Publicis, Kellogg's, Jose Cuervo, Unilever, Nestlé, Heineken, PepsiCo, Adidas, Oscar de la Renta, Lanvin, Cushnie et Ochs and Fashion's Night Out, among others.
            </p>
          </div>
        </section>

        {/* Book Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-0 items-stretch rounded-3xl overflow-hidden border border-[#B2F7EF]">
            <div className="bg-[#B2F7EF]/10 p-8 md:p-10 flex items-center">
              <div>
                <h2 className="text-3xl text-black mb-2"><strong>Indeleble</strong></h2>
                <p className="text-base text-black font-bold mb-6">
                  A true story of resilience and survival through cancer
                </p>
                <div className="space-y-4 leading-relaxed mb-8">
                  <p className="text-black/70">
                    You think you are invincible, until a diagnosis changes everything. When cancer arrives without warning, dreams stop and uncertainty takes over.
                  </p>
                  <p className="text-black/70">
                    But in the middle of the fear something else appears: the strength to face the unthinkable, and the capacity to heal — not only the body, but the soul.
                  </p>
                  <p className="text-black/70">
                    An honest story about life, personal transformation, and the beauty that persists in the chaos.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={siteConfig.book.amazonEs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all"
                  >
                    Spanish edition
                  </a>
                  <a
                    href={siteConfig.book.amazonEn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black/90 transition-all"
                  >
                    English edition
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 md:p-10 flex items-center justify-center">
              <div className="max-w-sm mx-auto">
                <Image
                  src="/libro-indeleble-cancer-resiliencia.webp"
                  alt="Indeleble — a book on resilience and surviving cancer by Lou"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center p-8 bg-white rounded-2xl border border-[#B2F7EF]">
          <h2 className="text-3xl text-black mb-4">
            Would you like me to walk with you?
          </h2>
          <p className="text-black/70 mb-8 max-w-xl mx-auto">
            If you are moving through grief, loss or transformation, I am here to walk with you. The first session is free.
          </p>
          <Link
            href="/#contacto"
            className="bg-[#B2F7EF] text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block"
          >
            Book your free first session
          </Link>
        </section>
      </div>
    </article>
  )
}
