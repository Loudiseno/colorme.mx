import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function HowLongDoesGriefLast() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/en/blog" className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8">
          <ArrowLeft size={18} /> Back to blog
        </Link>

        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">GRIEF</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            How Long Does Grief Last? An Honest Answer
          </h1>
          <p className="text-black/60 italic">By Lou | Art Therapist &amp; Grief Counselor</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/cuanto-dura-el-duelo.webp" alt="How long does grief last?" width={300} height={200} priority className="w-full h-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p>&quot;When will I stop feeling this pain?&quot;</p>

          <p>
            It&apos;s the question we all ask when we&apos;re moving through grief. We need to know this
            won&apos;t last forever. We need a light at the end of the tunnel. Let me give you an honest
            answer.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">The short answer</h2>

          <p>There is no expiration date for grief.</p>

          <p>
            There&apos;s no day when you wake up and say, &quot;There, it&apos;s over.&quot; There&apos;s no formula of
            X months to process a loss. But here&apos;s something important to know:{' '}
            <strong>grief does not stay this intense forever</strong>. That part is a promise.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">What does research say about the timeline?</h2>

          <p>Studies talk about ranges, not exact dates.</p>

          <p>
            Most people experience a significant drop in the most intense symptoms somewhere
            between 6 and 12 months after the loss. This doesn&apos;t mean they &quot;get over&quot; grief. It
            means the sharpest pain starts to become more manageable.
          </p>

          <p>
            Complicated or prolonged grief is identified when intense symptoms persist well beyond
            12 months without improvement. This happens in roughly 10–15% of grieving people. Every
            person and every loss is different, so these ranges are only general references.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">What influences how long grief lasts</h2>

          <p>Not all griefs are the same. These variables shape the process:</p>

          <p><strong>The type of loss.</strong> The impact on your daily life depends on what you lost and what it meant to you.</p>
          <p><strong>The circumstances.</strong> A sudden or traumatic loss usually takes longer to process than an anticipated one, where there was a chance to prepare.</p>
          <p><strong>Your personal history.</strong> Previous unresolved losses can be reactivated. A history of depression or anxiety can make the process more complex.</p>
          <p><strong>Your support network.</strong> People with solid social support tend to process grief more healthily. Isolation can prolong the pain.</p>
          <p><strong>Whether there was closure.</strong> Many people who couldn&apos;t say goodbye experience longer griefs.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">The phases of grief</h2>

          <p>
            The Kübler-Ross model of five stages (denial, anger, bargaining, depression and
            acceptance) is well known, but it&apos;s important to understand these stages aren&apos;t linear
            or universal. Real grief is more fluid.
          </p>

          <p>
            You can feel acceptance one day and deep sadness the next. You can be fine for weeks and
            then hit an unexpected hard moment. You can hold contradictory emotions in the same day.
            This is completely normal. It doesn&apos;t mean you&apos;re going backward.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Signs your grief is moving forward</h2>

          <p>Grief doesn&apos;t move in a straight line, but there are signs of progress:</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>You start having more calm days than hard ones.</li>
            <li>Memories begin to bring tenderness alongside the pain.</li>
            <li>You can talk about your loss more calmly.</li>
            <li>You find moments of genuine wellbeing without feeling guilty.</li>
            <li>You start to imagine a future, even a different one than you had planned.</li>
            <li>Your body begins to find its rhythm again: better sleep, better appetite, more energy.</li>
          </ul>

          <p>None of these signs mean you&apos;ve &quot;gotten over&quot; grief. They mean you&apos;re learning to live with it.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">When grief needs professional attention</h2>

          <p>Normal grief is painful. Complicated grief can be disabling. Consider seeking professional help if, after several months, you experience:</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Difficulty with the basic activities of daily life.</li>
            <li>Persistent thoughts of harming yourself.</li>
            <li>Using alcohol or substances to numb the pain.</li>
            <li>A significant decline in your physical health.</li>
            <li>A sense that the pain hasn&apos;t eased in intensity at all.</li>
            <li>Prolonged isolation from all of your relationships.</li>
          </ul>

          <p>Complicated grief is treatable. You don&apos;t have to stay trapped in the pain.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">What you can do while grieving</h2>

          <p>You can&apos;t speed up the process, but you can move through it more gently.</p>

          <p><strong>Allow your emotions.</strong> Suppressing what you feel doesn&apos;t make it disappear — it only postpones it. It&apos;s okay to not be okay.</p>
          <p><strong>Care for your body.</strong> Eat even without hunger. Rest even when it&apos;s hard. Move your body, even a short walk.</p>
          <p><strong>Look for ways to express it.</strong> Art, writing and music can help you channel emotions that words can&apos;t reach.</p>
          <p><strong>Accept the ups and downs.</strong> Special dates, anniversaries and places full of memories can reawaken the pain. That&apos;s part of the process.</p>
          <p><strong>Honor your own pace.</strong> Someone else&apos;s grief has nothing to do with yours. Each person processes in their own way.</p>

          <p className="italic text-black/60 mt-8">Grief takes the time it needs to take. And that time is valid.</p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Book your free first session</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            If you&apos;re moving through grief and need a safe space to process what you feel, I can
            support you.
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
