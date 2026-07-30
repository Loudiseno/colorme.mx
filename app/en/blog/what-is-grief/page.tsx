import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function WhatIsGrief() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/en/blog" className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8">
          <ArrowLeft size={18} /> Back to blog
        </Link>

        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">GRIEF</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            What Is Grief? Understanding Loss and How to Move Through It
          </h1>
          <p className="text-black/60 italic">By Lou | Art Therapist &amp; Grief Counselor</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/el-duelo.webp" alt="A person moving through grief" width={300} height={200} priority className="w-full h-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">Life can change in a single second.</p>

          <p>
            An unexpected diagnosis. A call you never imagined getting. Silence where there used
            to be a voice. All at once, the world you knew fractures, and you&apos;re left standing in
            front of an emptiness you don&apos;t know how to name.
          </p>

          <p>
            Maybe you haven&apos;t slept well in days. Maybe you catch yourself crying for no clear
            reason in the middle of the afternoon. Maybe there&apos;s a weight on your chest that
            won&apos;t lift — a tangle of sadness, anger, guilt and fear, all at once.
          </p>

          <p>
            If any of this sounds familiar, you&apos;re likely moving through grief. And I need you to
            understand something essential: what you feel is completely valid. You&apos;re not
            overreacting. You&apos;re not being weak. You&apos;re being human.
          </p>

          <p>
            Let&apos;s walk through what grief really is, why it hurts so much, and how you can move
            through it without losing yourself along the way.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">What does it mean to grieve?</h2>

          <p>
            Grief is the emotional, physical and psychological response we have when we lose
            something meaningful. It&apos;s the internal process that lets us take in the absence,
            reorganize our reality, and eventually find a new way to live.
          </p>

          <p>
            Contrary to what many people believe, grief is not an illness or a sign of weakness.
            It&apos;s an adaptive, natural function of the mind that helps us integrate loss and keep
            going. Without grief, healing wouldn&apos;t be possible.
          </p>

          <p>
            And this matters: grief has no expiration date. There is no point at which you
            &quot;should&quot; be better. Each body, each story, each bond needs its own time.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Beyond death: the invisible griefs</h2>

          <p>
            When we hear the word &quot;grief,&quot; we automatically think of the death of a loved one.
            And yes — losing someone you love is devastating. But grief has far more faces than we
            usually recognize.
          </p>

          <p>
            There are losses that society doesn&apos;t validate, that the people around us minimize,
            that we even refuse to acknowledge ourselves. These are the invisible griefs, and they
            hurt just as much — or more — because we carry them in silence.
          </p>

          <h3 className="text-xl text-black font-semibold mt-6 mb-3">Relational losses</h3>
          <p>
            The death of a family member, yes. But also the death of a pet — that companion who
            was with you every day for years. The end of a relationship you built a life around. A
            divorce that split your world in two. The distancing of a child, a parent, a friend
            who no longer answers your messages.
          </p>

          <h3 className="text-xl text-black font-semibold mt-6 mb-3">Losses of identity</h3>
          <p>
            Some griefs happen inside you. Losing the job that defined you. Going through a crisis
            where you no longer recognize who you are. Letting go of dreams you&apos;d nourished for
            years. Facing the feeling of failure when life took a different turn than you planned.
          </p>

          <h3 className="text-xl text-black font-semibold mt-6 mb-3">Losses of health</h3>
          <p>
            Receiving a diagnosis that changes everything. Learning to live with a chronic
            illness. Facing a new disability. Discovering you won&apos;t be able to have biological
            children. Your body isn&apos;t what it was — and that is grieved too.
          </p>

          <h3 className="text-xl text-black font-semibold mt-6 mb-3">Ambiguous losses</h3>
          <p>
            The ones without closure, without a clear goodbye. A disappearance without answers. A
            miscarriage no one mentions. A move that pulled you away from your home. All of these
            losses deserve to be named. All of them deserve room for the pain.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">The path of grief: are there really stages?</h2>

          <p>
            You&apos;ve probably heard of Elisabeth Kübler-Ross&apos;s five stages of grief: denial,
            anger, bargaining, depression and acceptance. This model has helped millions of people
            understand that grief has different emotional moments.
          </p>

          <p>But I need to be honest with you: grief doesn&apos;t work like a staircase.</p>

          <p>
            You won&apos;t climb neatly from one step to the next until you reach a summit called
            &quot;moving on.&quot; Grief is more like the ocean: waves come and go. Some days you feel
            calm, and the next a wave drags you back into the deepest sadness.
          </p>

          <p>
            You can feel acceptance in the morning and anger at night. You can have a whole week of
            peace and then fall apart over a song, a smell, a date. All of that is normal. It
            doesn&apos;t mean you&apos;re going backward or doing it wrong. It means you&apos;re human,
            processing something enormous.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Grief lives in the body too</h2>

          <p>
            Grief doesn&apos;t live only in your mind. It settles into your body with symptoms that can
            confuse or frighten you: trouble sleeping — too much or not at all; changes in
            appetite; extreme fatigue; a tight chest, a lump in the throat, an empty feeling in the
            stomach. Muscle aches, tension and frequent headaches are common too, and your immune
            system weakens, leaving you more likely to get sick.
          </p>

          <p>
            Caring for your body during this process isn&apos;t a luxury — it&apos;s a need. Rest, even
            when sleep is hard. Eat, even when you&apos;re not hungry. Move, even if it&apos;s just a few
            minutes of walking. Your body needs resources to move through this storm.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">When does grief need professional help?</h2>

          <p>Grief is a natural process, but sometimes it becomes complicated and needs specialized support. Consider reaching out for help if:</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>The pain doesn&apos;t ease with time, but instead grows more intense.</li>
            <li>It feels impossible to carry out the basic activities of daily life.</li>
            <li>You&apos;ve stopped taking care of yourself: not eating, not sleeping, neglecting personal hygiene.</li>
            <li>You&apos;ve fully isolated yourself from the people who love you.</li>
            <li>You feel life has no meaning, or you have thoughts of harming yourself.</li>
            <li>Many months have passed and you feel exactly the same as the first day.</li>
          </ul>

          <p>Asking for help isn&apos;t giving up. It&apos;s recognizing that some weights are too heavy to carry alone.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">What no one tells you about grief</h2>

          <p>
            Grief changes you. You won&apos;t go back to being who you were before the loss, and
            that&apos;s okay. The goal isn&apos;t to return to your old life but to build a new one that
            holds what happened.
          </p>

          <p>
            Over time, the pain doesn&apos;t disappear — it transforms. It stops filling every corner
            of your mind and begins to live alongside other emotions. One day, without realizing
            it, you&apos;ll discover you can remember without falling apart. That the sadness is still
            there but no longer drowns you. That honoring the person you lost can also include
            living your own life.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">You don&apos;t have to go through grief alone</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            If you&apos;re moving through a loss and need a safe space to process what you feel, I&apos;m
            here to support you.
          </p>
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all">
            Book your free first session
          </a>
        </div>

        <div className="mt-10">
          <Link href="/en/blog" className="text-black hover:text-black/70 inline-flex items-center gap-2">
            <ArrowLeft size={18} /> Back to blog
          </Link>
        </div>
      </div>
    </article>
  )
}
