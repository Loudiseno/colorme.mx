// ============================================================================
// BLOG EN INGLÉS (SEO) — CONTENIDO
// ============================================================================
//
// Artículos en inglés optimizados para SEO, servidos en /en/blog/<slug>.
// Enfoque data-driven: para agregar un artículo nuevo solo añade un objeto
// a `enArticles`. La ruta, el sitemap, los metadatos y el schema se generan
// solos a partir de estos datos.
// ============================================================================

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string }

export interface FaqItem {
  q: string
  a: string
}

export interface EnArticle {
  slug: string
  category: string
  /** H1 en la página */
  title: string
  /** <title> del navegador y buscadores */
  metaTitle: string
  /** meta description */
  description: string
  keywords: string[]
  image: string
  imageAlt: string
  datePublished: string
  dateModified?: string
  readingTime: string
  content: Block[]
  faq?: FaqItem[]
  /** slugs de otros artículos en inglés relacionados */
  related?: string[]
}

export const enArticles: EnArticle[] = [
  // --------------------------------------------------------------------------
  {
    slug: 'how-long-does-grief-last',
    category: 'Grief',
    title: 'How Long Does Grief Last? An Honest Answer',
    metaTitle: 'How Long Does Grief Last? An Honest Answer | ColorMe',
    description:
      'Grief has no expiration date, but the pain does not stay at the same intensity forever. An honest look at how long grief lasts and how it changes over time.',
    keywords: [
      'how long does grief last',
      'how long does grief last after losing a loved one',
      'grief timeline',
      'stages of grief',
      'grieving process',
      'complicated grief',
    ],
    image: '/cuanto-dura-el-duelo.webp',
    imageAlt: 'How long does grief last — the truth about the length of the grieving process',
    datePublished: '2026-07-30',
    readingTime: '6 min read',
    content: [
      { type: 'p', text: '“When will this pain stop?”' },
      {
        type: 'p',
        text: 'It is the question almost everyone asks while grieving. We need to believe it will not last forever. We need a light at the end of the tunnel. So let me give you an honest answer.',
      },
      { type: 'h2', text: 'The short answer' },
      {
        type: 'p',
        text: 'There is no expiration date for grief. There is no morning when you wake up and say, “Alright, it is over.” There is no formula that says a loss takes exactly six months or a year to process.',
      },
      {
        type: 'p',
        text: 'But here is the part that matters just as much: the pain does not stay at the same intensity forever. What changes is not that you forget — it is that you learn to carry the loss differently.',
      },
      { type: 'h2', text: 'Why grief has no fixed timeline' },
      {
        type: 'p',
        text: 'Grief is not a problem to be solved; it is a relationship that continues in a new form. Its length depends on many things: who you lost, how you lost them, the role that person played in your life, your support network, and your own history with loss.',
      },
      {
        type: 'p',
        text: 'This is why comparing your grief to someone else’s is rarely helpful. Two people can lose the same person and grieve on completely different schedules — and both are normal.',
      },
      { type: 'h2', text: 'What the first year often looks like' },
      {
        type: 'p',
        text: 'The first year is frequently the hardest because it is full of “firsts”: the first birthday, the first holiday season, the first anniversary of the death. Each one can reopen the wound. Many people describe waves — moments of relative calm interrupted by sudden, intense pain triggered by a song, a smell, or an empty chair.',
      },
      {
        type: 'p',
        text: 'Those waves are not a sign you are going backward. They are how grief moves. Over time, the waves usually come less often and feel less overwhelming, even if they never disappear entirely.',
      },
      { type: 'h2', text: 'Grief changes — it does not simply “end”' },
      {
        type: 'quote',
        text: 'You do not get over grief. You grow around it. Your life gets bigger, and the loss becomes one part of a fuller story.',
      },
      {
        type: 'p',
        text: 'A helpful way to picture it: imagine the grief as a ball inside a box, with a pain button on one wall. At first the ball is huge and hits the button constantly. As months pass the ball shrinks — so it hits the button less often. But when it does, it still hurts just as much. That is why grief can surprise you years later, and why that is completely normal.',
      },
      { type: 'h2', text: 'When it may be more than “normal” grief' },
      {
        type: 'p',
        text: 'Sometimes grief gets stuck. If, many months after the loss, you notice any of the following, it may be worth reaching out for professional support:',
      },
      {
        type: 'ul',
        items: [
          'You feel unable to function in daily life with no easing over time.',
          'You are avoiding all reminders of the person, or clinging so tightly you cannot move at all.',
          'You feel persistent guilt, worthlessness, or thoughts that life is not worth living.',
          'You are using alcohol, substances, or overwork to avoid feeling anything.',
        ],
      },
      {
        type: 'p',
        text: 'Asking for help is not a failure to grieve “correctly.” It is one of the wisest, most loving things you can do for yourself.',
      },
      { type: 'h2', text: 'A gentler way through' },
      {
        type: 'p',
        text: 'You do not have to talk your way through grief if words feel impossible. Art therapy offers another door — a way to give shape to what you feel when language falls short. Drawing, color, and simple creative rituals can help you process loss at your own pace, without needing to explain or justify a thing.',
      },
      {
        type: 'p',
        text: 'However long your grief lasts, you are not doing it wrong. Be patient with yourself. Healing is not forgetting — it is learning to live with love and loss in the same heart.',
      },
    ],
    faq: [
      {
        q: 'Is it normal to grieve for years?',
        a: 'Yes. Grief can soften over years while still resurfacing on anniversaries, birthdays, or unexpected moments. Ongoing grief is not a sign that something is wrong with you.',
      },
      {
        q: 'How long is “too long” to grieve?',
        a: 'There is no fixed limit. What matters is not the calendar but whether the grief is easing over time and whether you can still engage with life. If it stays disabling with no relief, consider professional support.',
      },
      {
        q: 'Does grief ever fully go away?',
        a: 'Most people do not stop missing the person they lost. Instead, the pain becomes less constant and less overwhelming, and the love remains. You grow around the grief rather than erasing it.',
      },
    ],
    related: ['seven-stages-of-grief', 'grief-after-losing-a-parent'],
  },

  // --------------------------------------------------------------------------
  {
    slug: 'seven-stages-of-grief',
    category: 'Grief',
    title: 'The 7 Stages of Grief: What They Really Look Like',
    metaTitle: 'The 7 Stages of Grief: What They Really Look Like | ColorMe',
    description:
      'The 7 stages of grief explained honestly — and why grief is never a straight line. A compassionate guide to what each stage feels like and how to move through them.',
    keywords: [
      '7 stages of grief',
      'seven stages of grief',
      'stages of grief',
      'grief stages in order',
      'what are the stages of grief',
      'grieving process',
    ],
    image: '/el-duelo.webp',
    imageAlt: 'The 7 stages of grief and what each one really feels like',
    datePublished: '2026-07-30',
    readingTime: '7 min read',
    content: [
      {
        type: 'p',
        text: 'You may have heard that grief comes in stages. It is a comforting idea — if there are steps, maybe there is a finish line. But the truth is gentler and messier than a checklist.',
      },
      {
        type: 'p',
        text: 'The stages are real, but they are not a straight staircase you climb once. They are more like weather: they come, they pass, they return. Understanding them can help you feel less alone and less “broken” when your grief does not behave the way you expected.',
      },
      { type: 'h2', text: 'The 7 stages of grief' },
      { type: 'h3', text: '1. Shock' },
      {
        type: 'p',
        text: 'In the first hours and days, the mind protects you with numbness. You may feel strangely calm, detached, or unable to cry. This is not coldness — it is your nervous system buffering a blow too big to absorb all at once.',
      },
      { type: 'h3', text: '2. Denial' },
      {
        type: 'p',
        text: 'Part of you keeps expecting the person to walk through the door or call your phone. Denial is not stupidity; it is the heart taking in an unbearable reality in small, survivable doses.',
      },
      { type: 'h3', text: '3. Anger' },
      {
        type: 'p',
        text: 'Anger can point in every direction — at doctors, at yourself, at the person who died, at God, at the unfairness of it all. It often masks a deeper pain. Anger is not a moral failing; it is grief with nowhere to go.',
      },
      { type: 'h3', text: '4. Bargaining' },
      {
        type: 'p',
        text: 'This is the “what if” and “if only” stage. If only I had called sooner. What if we had seen another doctor. Bargaining is the mind searching for a way the outcome could have been different, trying to regain a sense of control.',
      },
      { type: 'h3', text: '5. Depression' },
      {
        type: 'p',
        text: 'When the reality settles in, deep sadness follows. Energy drains away, the world feels grey, and even simple tasks feel enormous. This is not a disorder to rush past — it is the natural weight of love with nowhere to land.',
      },
      { type: 'h3', text: '6. Acceptance' },
      {
        type: 'p',
        text: 'Acceptance does not mean you are “okay” with the loss or that you stop missing the person. It means you begin to accept the reality of it and to find a way to live alongside it.',
      },
      { type: 'h3', text: '7. Meaning' },
      {
        type: 'p',
        text: 'Many people describe a final movement: finding meaning. Not a silver lining that erases the pain, but a way to carry the person forward — through memory, ritual, creativity, or how you choose to live.',
      },
      { type: 'h2', text: 'Why grief is not a straight line' },
      {
        type: 'quote',
        text: 'You might feel acceptance on Monday and be back in anger by Thursday. That is not regression. That is grief.',
      },
      {
        type: 'p',
        text: 'You will not necessarily feel all seven stages, and rarely in order. You may skip some, revisit others, or feel two at once. There is no “right” sequence. The stages are a map to help you name your experience — not a schedule you must obey.',
      },
      { type: 'h2', text: 'How creativity helps you move through the stages' },
      {
        type: 'p',
        text: 'Some feelings are too big or too tangled for words. Art therapy gives grief a place to go. You do not need to know how to draw — a scribble in the color of your anger, a page for what you wish you had said, a small image of a memory. Externalising the emotion often loosens its grip and helps you move, gently, toward acceptance and meaning.',
      },
      { type: 'h2', text: 'When to reach out for support' },
      {
        type: 'p',
        text: 'If you feel stuck in one stage for a long time, if the pain is not easing at all, or if you cannot function day to day, professional accompaniment can help. You do not have to navigate the stages alone.',
      },
    ],
    faq: [
      {
        q: 'What are the 7 stages of grief in order?',
        a: 'They are commonly listed as shock, denial, anger, bargaining, depression, acceptance, and meaning. In real life they rarely happen in a neat order — you may skip, repeat, or feel several at once.',
      },
      {
        q: 'Do you have to go through all seven stages?',
        a: 'No. The stages describe common experiences, not mandatory steps. Everyone grieves differently, and skipping or revisiting stages is completely normal.',
      },
      {
        q: 'What is the hardest stage of grief?',
        a: 'It varies from person to person. For many, the depression stage feels heaviest, while others struggle most with anger or bargaining. There is no universal “worst” stage.',
      },
    ],
    related: ['how-long-does-grief-last', 'grief-after-losing-a-parent'],
  },

  // --------------------------------------------------------------------------
  {
    slug: 'what-is-art-therapy',
    category: 'Art Therapy',
    title: 'What Is Art Therapy? Benefits and How It Works',
    metaTitle: 'What Is Art Therapy? Benefits and How It Works | ColorMe',
    description:
      'Art therapy uses the creative process to heal emotions — no artistic skill required. Learn what art therapy is, how a session works, and its proven benefits.',
    keywords: [
      'what is art therapy',
      'art therapy',
      'art therapy benefits',
      'how does art therapy work',
      'art therapy for adults',
      'creative therapy',
    ],
    image: '/arteterapia.webp',
    imageAlt: 'What is art therapy — using the creative process to heal emotions',
    datePublished: '2026-07-30',
    readingTime: '6 min read',
    content: [
      {
        type: 'p',
        text: 'Art therapy is a form of psychotherapy that uses the creative process — drawing, painting, collage, clay, color — to explore emotions, reduce stress, and work through difficult experiences. The goal is not to make beautiful art. The goal is to make contact with what you feel.',
      },
      { type: 'h2', text: 'You do not need to be an artist' },
      {
        type: 'p',
        text: 'This is the first thing everyone worries about, so let us settle it: art therapy has nothing to do with talent. Stick figures, scribbles, and messy color are perfect. In fact, the “worse” the drawing, the freer it often is. You are not being judged on technique — the image is simply a bridge to your inner world.',
      },
      { type: 'h2', text: 'Why it works when words are not enough' },
      {
        type: 'p',
        text: 'Much of what we feel lives below language — in the body, in images, in sensation. Trauma and grief especially can be hard to put into words. Making art bypasses the part of the brain that edits and explains, letting buried feelings surface safely, at your own pace.',
      },
      {
        type: 'quote',
        text: 'Art gives a shape to what has no words yet. Once you can see it on the page, you can begin to work with it.',
      },
      { type: 'h2', text: 'What a session actually looks like' },
      {
        type: 'p',
        text: 'A typical session has three gentle movements:',
      },
      {
        type: 'ul',
        items: [
          'A short check-in to notice how you are arriving and what you would like to explore.',
          'A creative invitation — for example, “draw where you feel the tension in your body,” or “use color to show today’s mood.” There is no wrong response.',
          'A reflection, where you and the therapist look at the image together and gently unpack what came up. You always stay in control of how much you share.',
        ],
      },
      { type: 'h2', text: 'The benefits of art therapy' },
      {
        type: 'ul',
        items: [
          'Lowers stress and calms the nervous system.',
          'Helps process grief, trauma, and anxiety without needing to relive them in words.',
          'Improves self-awareness and emotional regulation.',
          'Rebuilds a sense of control and self-expression after a difficult time.',
          'Increases self-esteem through the simple act of creating something.',
        ],
      },
      { type: 'h2', text: 'Who is art therapy for?' },
      {
        type: 'p',
        text: 'Art therapy helps children, adults, and older adults facing grief, anxiety, chronic illness, trauma, life transitions, or simply the wish to understand themselves better. It is especially valuable for people who find traditional talk therapy difficult or who feel “stuck” putting their experience into words.',
      },
      { type: 'h2', text: 'Art therapy vs. an art class' },
      {
        type: 'p',
        text: 'An art class teaches you to make art. Art therapy uses art to help you heal, guided by a trained therapist who holds the emotional process safely. The focus is never the final product — it is you, and what the creative process reveals and releases.',
      },
      { type: 'h2', text: 'Getting started' },
      {
        type: 'p',
        text: 'You do not need supplies, skill, or a plan. You only need willingness to show up and make a mark. If you are curious, a first orientation session is a gentle way to see how it feels.',
      },
    ],
    faq: [
      {
        q: 'Do I need to be good at art for art therapy?',
        a: 'No. Art therapy requires zero artistic skill. Scribbles, stick figures, and abstract color are exactly right — the process matters, not the result.',
      },
      {
        q: 'What can art therapy help with?',
        a: 'It supports grief, anxiety, trauma, stress, chronic illness, life transitions, and self-understanding. It is especially helpful when feelings are hard to put into words.',
      },
      {
        q: 'Is art therapy real therapy?',
        a: 'Yes. Art therapy is an established form of psychotherapy delivered by trained professionals, using the creative process as the therapeutic tool.',
      },
    ],
    related: ['art-therapy-for-anxiety', 'art-therapy-for-cancer'],
  },

  // --------------------------------------------------------------------------
  {
    slug: 'art-therapy-for-anxiety',
    category: 'Art Therapy',
    title: 'Art Therapy for Anxiety: How Creativity Calms the Nervous System',
    metaTitle: 'Art Therapy for Anxiety: How Creativity Calms You | ColorMe',
    description:
      'Art therapy for anxiety uses simple creative practices to quiet a racing mind and regulate the nervous system. Learn how it works, plus 4 exercises to try today.',
    keywords: [
      'art therapy for anxiety',
      'art therapy anxiety',
      'creative ways to reduce anxiety',
      'art exercises for anxiety',
      'how to calm anxiety',
      'art therapy techniques',
    ],
    image: '/arteterapia-ansiedad.webp',
    imageAlt: 'Art therapy for anxiety — creativity that calms the nervous system',
    datePublished: '2026-07-30',
    readingTime: '6 min read',
    content: [
      {
        type: 'p',
        text: 'Anxiety keeps the mind sprinting into a future that has not happened yet. Art therapy does something quietly powerful: it brings you back to your hands, your breath, and this present moment. You cannot worry about tomorrow and stay fully absorbed in mixing a color at the same time.',
      },
      { type: 'h2', text: 'Why creativity calms anxiety' },
      {
        type: 'p',
        text: 'When you make art, several things happen at once. Repetitive, rhythmic movements (shading, coloring, kneading clay) soothe the nervous system much like rocking or deep breathing. Focusing on a simple creative task interrupts the loop of anxious thoughts. And giving your worry a shape on paper makes it feel smaller and more manageable than the vague dread swirling inside.',
      },
      {
        type: 'quote',
        text: 'You cannot always think your way out of anxiety. Sometimes you have to make your way out.',
      },
      { type: 'h2', text: '4 simple art exercises to try today' },
      { type: 'h3', text: '1. Scribble release' },
      {
        type: 'p',
        text: 'Take a pencil and scribble hard and fast on a page for 60 seconds, letting the tension pour out through your hand. Then slow down and turn part of the scribble into a shape or image. This moves anxious energy out of the body and into something you can see.',
      },
      { type: 'h3', text: '2. Color your feeling' },
      {
        type: 'p',
        text: 'Ask yourself: if this anxiety had a color, what would it be? Fill a page with it, using pressure and movement that match the feeling. There is nothing to “make” — you are simply giving the emotion a place to exist outside of you.',
      },
      { type: 'h3', text: '3. The worry container' },
      {
        type: 'p',
        text: 'Draw a box, a jar, or a container of any kind. Inside it, write or draw the worries you are carrying today. Closing the lid is a symbolic way of telling your mind: these are held here for now, I can set them down.',
      },
      { type: 'h3', text: '4. Mindful patterns' },
      {
        type: 'p',
        text: 'Draw slow, repeating patterns — small circles, waves, dots — filling a page. This meditative repetition anchors your attention and gently slows a racing mind, similar to a moving meditation.',
      },
      { type: 'h2', text: 'What to expect' },
      {
        type: 'p',
        text: 'You may not feel instant bliss — and that is okay. The aim is not to erase anxiety but to lower its volume and remind your body that it is safe right now. Practiced regularly, even for ten minutes, these tools build a reliable way to come back to yourself.',
      },
      { type: 'h2', text: 'When to seek professional support' },
      {
        type: 'p',
        text: 'Self-care exercises are wonderful, but they are not a replacement for help when anxiety is taking over your life. If anxiety is constant, interfering with sleep, work, or relationships, working with an art therapist gives you a safe space to explore the roots of it — not just manage the symptoms.',
      },
    ],
    faq: [
      {
        q: 'Can art therapy really help with anxiety?',
        a: 'Yes. Creative, rhythmic activity calms the nervous system, interrupts anxious thought loops, and helps externalise worry, making it feel more manageable.',
      },
      {
        q: 'What art is good for anxiety?',
        a: 'Simple, repetitive, low-pressure activities work best — scribbling, coloring, drawing patterns, or working with clay. The absorption matters more than the medium.',
      },
      {
        q: 'How often should I do art for anxiety?',
        a: 'Even 10 minutes a few times a week can help. Consistency matters more than duration — a small, regular practice builds a reliable way to self-soothe.',
      },
    ],
    related: ['what-is-art-therapy', 'art-therapy-for-cancer'],
  },

  // --------------------------------------------------------------------------
  {
    slug: 'grief-after-losing-a-parent',
    category: 'Grief',
    title: 'Grief After Losing a Parent: Navigating One of Life’s Deepest Losses',
    metaTitle: 'Grief After Losing a Parent: How to Cope | ColorMe',
    description:
      'Losing a parent reshapes your whole world. A compassionate guide to grief after losing a mother or father, complicated relationships, and ways to cope.',
    keywords: [
      'grief after losing a parent',
      'losing a parent',
      'grief losing mother',
      'grief losing father',
      'coping with parent death',
      'how to deal with losing a parent',
    ],
    image: '/duelo-muerte-mama.webp',
    imageAlt: 'Grief after losing a parent — navigating one of life’s deepest losses',
    datePublished: '2026-07-30',
    readingTime: '7 min read',
    content: [
      {
        type: 'p',
        text: 'Losing a parent is one of the most universal and yet most under-acknowledged losses there is. People may expect you to “bounce back” quickly — after all, it is part of life. But the death of a mother or father can shake the very ground you stand on, no matter your age.',
      },
      { type: 'h2', text: 'Why losing a parent hits so deeply' },
      {
        type: 'p',
        text: 'Your parents were, for most of your life, your first sense of home and safety. Losing them can bring a profound feeling of being unanchored — even if you are a fully grown adult with a family of your own. Many people describe suddenly feeling like an orphan, or like the generational “buffer” between them and mortality is gone.',
      },
      { type: 'h2', text: 'When the relationship was complicated' },
      {
        type: 'p',
        text: 'Not every parent-child bond is simple. If your relationship was distant, painful, or unresolved, grief can be especially confusing. You might mourn not only the parent you lost, but the parent you never had — and the conversations that can now never happen. This grief is real and valid, even if it is tangled with relief, anger, or guilt.',
      },
      {
        type: 'quote',
        text: 'You can grieve someone who hurt you. You can miss them and be relieved at the same time. Grief holds contradictions.',
      },
      { type: 'h2', text: 'The secondary losses no one warns you about' },
      {
        type: 'p',
        text: 'Losing a parent is rarely just one loss. It often brings a cascade of smaller ones:',
      },
      {
        type: 'ul',
        items: [
          'The family home, and the traditions that lived there.',
          'Your role as someone’s child, and the unconditional support that came with it.',
          'The keeper of family history and memories only they held.',
          'Relationships with siblings or relatives that shift once a parent is gone.',
        ],
      },
      { type: 'h2', text: 'Gentle ways to cope' },
      {
        type: 'ul',
        items: [
          'Let yourself feel whatever comes — sadness, anger, numbness, even relief. None of it is wrong.',
          'Create small rituals: cook their recipe, visit a place they loved, light a candle on hard days.',
          'Tell their story. Writing or making art about your parent keeps the bond alive in a new form.',
          'Protect your energy around people who minimise your loss. You do not owe anyone a timeline.',
        ],
      },
      { type: 'h2', text: 'How art can help you carry it' },
      {
        type: 'p',
        text: 'When the feelings are too big or too contradictory for words, art gives them somewhere to go. A page of color for the day’s mood, a drawn letter to the parent you lost, an image of a shared memory — these creative acts help you process the loss and hold onto the love without needing to explain it to anyone.',
      },
      { type: 'h2', text: 'When to reach out for support' },
      {
        type: 'p',
        text: 'If your grief feels frozen, if guilt or unresolved feelings weigh on you, or if you simply do not want to walk this alone, accompaniment from a grief professional can help. There is no shame in needing support to grieve one of the biggest losses a person can face.',
      },
    ],
    faq: [
      {
        q: 'Why is losing a parent so hard even as an adult?',
        a: 'Parents represent your earliest sense of safety and identity. Losing them can leave you feeling unanchored and confront you with your own mortality, regardless of your age.',
      },
      {
        q: 'How do you grieve a parent you had a difficult relationship with?',
        a: 'Complicated grief is valid. You may mourn both the parent you lost and the relationship you never had. Allowing contradictory feelings — grief, relief, anger, love — is part of healing.',
      },
      {
        q: 'How long does grief last after losing a parent?',
        a: 'There is no set timeline. The intense pain usually softens over the first year or two, but missing your parent — especially on anniversaries and milestones — can continue for life and is completely normal.',
      },
    ],
    related: ['how-long-does-grief-last', 'seven-stages-of-grief'],
  },

  // --------------------------------------------------------------------------
  {
    slug: 'art-therapy-for-cancer',
    category: 'Art Therapy',
    title: 'Art Therapy for Cancer Patients: Healing Beyond the Body',
    metaTitle: 'Art Therapy for Cancer Patients: Healing Beyond the Body | ColorMe',
    description:
      'Art therapy helps cancer patients process fear, reclaim identity, and find calm during treatment. Learn the benefits and simple creative practices to try.',
    keywords: [
      'art therapy for cancer',
      'art therapy cancer patients',
      'creative therapy cancer',
      'coping with cancer emotionally',
      'art therapy chemotherapy',
      'cancer emotional support',
    ],
    image: '/cancer-y-arteterapia.webp',
    imageAlt: 'Art therapy for cancer patients — healing beyond the body',
    datePublished: '2026-07-30',
    readingTime: '6 min read',
    content: [
      {
        type: 'p',
        text: 'A cancer diagnosis changes everything in an instant. Beyond the physical treatment, there is an emotional storm: fear, uncertainty, loss of control, and a shifting sense of who you are. Art therapy offers a space to tend to that inner world — the part of healing that scans and medications cannot reach.',
      },
      { type: 'h2', text: 'The emotional weight of cancer' },
      {
        type: 'p',
        text: 'Patients often feel they must “stay strong” for everyone around them, leaving little room for their own fear and grief. Those unspoken emotions do not disappear — they build. Art therapy gives them a safe, private outlet, without the pressure to find the right words or protect anyone else’s feelings.',
      },
      { type: 'h2', text: 'What art therapy offers during treatment' },
      {
        type: 'ul',
        items: [
          'Relief from anxiety and treatment-related stress.',
          'A sense of control and choice at a time when so much feels decided for you.',
          'A way to process fear, anger, and grief without having to explain them.',
          'A reconnection with identity beyond the label of “patient.”',
          'Moments of calm, focus, and even joy during long treatment days.',
        ],
      },
      {
        type: 'quote',
        text: 'You are not your diagnosis. Creativity reminds you that the person inside is still whole, still here, still you.',
      },
      { type: 'h2', text: 'Simple creative practices to try' },
      {
        type: 'ul',
        items: [
          'Draw or color how your body feels today — no explanation needed, just honesty on the page.',
          'Make a “strength image”: a symbol, color, or scene that represents what keeps you going.',
          'Keep a small visual journal through treatment, one page per session or per week.',
          'Create something for the future — a picture of a place you want to visit or a moment you look forward to.',
        ],
      },
      { type: 'h2', text: 'For caregivers and loved ones' },
      {
        type: 'p',
        text: 'Cancer affects the whole family. Caregivers carry their own fear and exhaustion, often with even less permission to fall apart. The same creative practices can help partners, children, and friends process what they are living through and stay emotionally connected to the person they love.',
      },
      { type: 'h2', text: 'A story of resilience' },
      {
        type: 'p',
        text: 'The book Indeleble was born from exactly this journey — a real story of facing cancer, transformation, and the beauty that persists in the middle of the storm. Told with watercolor illustrations, it is a companion for anyone living through a diagnosis, or walking beside someone who is.',
      },
      { type: 'h2', text: 'Finding support' },
      {
        type: 'p',
        text: 'You do not have to hold all of it alone. Whether through a structured art therapy process or small daily creative rituals, tending to your emotional health is part of your healing — not a luxury, and not a distraction from it.',
      },
    ],
    faq: [
      {
        q: 'How does art therapy help cancer patients?',
        a: 'It reduces anxiety and stress, restores a sense of control, and gives patients a safe way to process fear and grief without needing words — supporting emotional wellbeing alongside medical treatment.',
      },
      {
        q: 'Do you need art skills to benefit?',
        a: 'No. The benefit comes from the creative process itself, not from artistic ability. Simple color, shapes, and images are enough.',
      },
      {
        q: 'Can family members and caregivers use art therapy too?',
        a: 'Absolutely. Caregivers carry heavy emotions of their own. Creative practices help them process fear and exhaustion and stay connected to their loved one.',
      },
    ],
    related: ['what-is-art-therapy', 'art-therapy-for-anxiety'],
  },

  // --------------------------------------------------------------------------
  {
    slug: 'anticipatory-grief',
    category: 'Grief',
    title: 'Anticipatory Grief: Mourning Someone Who Is Still Here',
    metaTitle: 'Anticipatory Grief: Mourning Someone Still Here | ColorMe',
    description:
      'Anticipatory grief is the pain of mourning a loss before it happens. Learn what it is, why it feels so confusing, and how to cope when someone you love is dying.',
    keywords: [
      'anticipatory grief',
      'grieving before death',
      'anticipatory grief symptoms',
      'mourning someone who is still alive',
      'grief before a loss',
      'terminal illness grief',
    ],
    image: '/duelo-anticipado.webp',
    imageAlt: 'Anticipatory grief — mourning someone who is still here',
    datePublished: '2026-07-30',
    readingTime: '6 min read',
    content: [
      {
        type: 'p',
        text: 'Grief does not always wait for death. When someone you love is seriously ill, ageing, or fading from a condition like dementia, you can begin to mourn while they are still here. This is called anticipatory grief — and it is one of the most confusing, isolating forms of loss.',
      },
      { type: 'h2', text: 'What is anticipatory grief?' },
      {
        type: 'p',
        text: 'Anticipatory grief is the emotional response to an expected loss. You grieve the future you will not have, the decline you are watching, and the slow goodbyes along the way. It is common among caregivers, families facing a terminal diagnosis, and anyone loving someone through a long illness.',
      },
      { type: 'h2', text: 'Why it feels so confusing' },
      {
        type: 'p',
        text: 'Part of you is still hoping, caring, and showing up each day. Another part is already aching for a loss that has not happened. You may feel guilty for grieving “too soon,” or for the exhaustion and even relief that creep in. None of this makes you a bad person. It makes you human, carrying an impossible weight.',
      },
      {
        type: 'quote',
        text: 'Anticipatory grief is love and loss happening at the same time. You are saying hello and goodbye in the same breath.',
      },
      { type: 'h2', text: 'What it can look like' },
      {
        type: 'ul',
        items: [
          'Waves of sadness, dread, or anxiety about what is coming.',
          'Guilt for imagining life after the loss — or for wishing the suffering would end.',
          'Emotional numbness or “pulling away” to protect yourself.',
          'Exhaustion from holding hope and grief at once.',
        ],
      },
      { type: 'h2', text: 'Gentle ways to cope' },
      {
        type: 'ul',
        items: [
          'Let both feelings exist: you can love someone fully and grieve them at the same time.',
          'Say what matters now. Anticipatory grief can be an invitation to express love, forgiveness, and gratitude while there is still time.',
          'Care for yourself too. Caregiver burnout is real — rest is not a betrayal.',
          'Use art or writing to hold feelings too big to say out loud.',
        ],
      },
      { type: 'h2', text: 'How art helps in this in-between' },
      {
        type: 'p',
        text: 'When you cannot say the words — to them or to yourself — art can. A drawn letter, an image of a shared memory, a page of color for the day’s emotion: these give your anticipatory grief a safe place to live, so it does not have to be carried silently.',
      },
      { type: 'h2', text: 'You do not have to carry it alone' },
      {
        type: 'p',
        text: 'Anticipatory grief is real grief, and it deserves support. If you are walking someone toward the end of their life, accompaniment for you matters just as much as care for them.',
      },
    ],
    faq: [
      {
        q: 'Is it normal to grieve before someone dies?',
        a: 'Yes. Anticipatory grief is a well-recognised experience, especially for caregivers and families facing a terminal illness. Mourning a loss before it happens does not mean you are giving up hope.',
      },
      {
        q: 'Does anticipatory grief make the loss easier later?',
        a: 'Not necessarily. It does not “use up” your grief. After the death you may still grieve deeply — but having expressed love and said goodbye can bring some peace.',
      },
      {
        q: 'Is feeling relief when someone dies wrong?',
        a: 'No. Relief after a long illness — that their suffering is over, or that caregiving has ended — is common and human. It does not mean you loved them any less.',
      },
    ],
    related: ['how-long-does-grief-last', 'grief-after-losing-a-parent'],
  },

  // --------------------------------------------------------------------------
  {
    slug: 'pet-loss-grief',
    category: 'Grief',
    title: 'Pet Loss Grief: Why Losing a Pet Hurts So Much',
    metaTitle: 'Pet Loss Grief: Why It Hurts So Much & How to Cope | ColorMe',
    description:
      'Losing a pet is a real and profound loss. Learn why pet loss grief hurts so deeply, why your pain is valid, and gentle ways to cope and honour your companion.',
    keywords: [
      'pet loss grief',
      'losing a pet',
      'grief over pet death',
      'how to cope with pet loss',
      'pet loss support',
      'mourning a pet',
    ],
    image: '/duelo-por-mascota.webp',
    imageAlt: 'Pet loss grief — why losing a pet hurts so much',
    datePublished: '2026-07-30',
    readingTime: '5 min read',
    content: [
      {
        type: 'p',
        text: 'If you have lost a pet and the grief has floored you, you are not overreacting. Losing an animal companion can hurt as much as losing a person — sometimes more. Your pain is real, and it is valid.',
      },
      { type: 'h2', text: 'Why pet loss cuts so deep' },
      {
        type: 'p',
        text: 'A pet offers something rare: unconditional love with no judgement. They are woven into the fabric of daily life — the morning greeting, the walk, the warm weight beside you. When they die, you lose not just a companion but a constant source of comfort and a witness to your everyday world.',
      },
      { type: 'h2', text: 'The pain of disenfranchised grief' },
      {
        type: 'p',
        text: 'Part of what makes pet loss so hard is that society often minimises it. “It was just a dog.” “You can get another one.” These comments can leave you grieving in silence, feeling you have no right to hurt this much. This is called disenfranchised grief — real loss that goes unacknowledged.',
      },
      {
        type: 'quote',
        text: 'The size of your grief reflects the size of the love. There is no “just” about it.',
      },
      { type: 'h2', text: 'Gentle ways to cope' },
      {
        type: 'ul',
        items: [
          'Let yourself grieve fully, without apologising for it.',
          'Create a small ritual or memorial — a photo, a paw print, a special spot.',
          'Make art about your pet: draw a favourite memory or a portrait, however imperfect.',
          'Talk to people who understand, and protect your energy around those who dismiss it.',
        ],
      },
      { type: 'h2', text: 'Honouring the bond through art' },
      {
        type: 'p',
        text: 'Creating something in memory of your pet can be deeply healing — a drawing, a page of the things you loved about them, a colour that reminds you of them. It keeps the bond alive in a new form and gives your grief a place to go.',
      },
      { type: 'h2', text: 'When to seek support' },
      {
        type: 'p',
        text: 'If the grief feels overwhelming, or the world around you does not understand, you do not have to carry it alone. Support for pet loss is not silly — it is a compassionate response to a genuine loss.',
      },
    ],
    faq: [
      {
        q: 'Why does losing a pet hurt so much?',
        a: 'Pets offer unconditional love and are part of your daily routine and sense of comfort. Losing them removes a constant companion, so the grief can be as intense as losing a person.',
      },
      {
        q: 'Is it normal to grieve a pet more than a person?',
        a: 'Yes. The depth of grief reflects the bond, not the species. Intense grief over a pet is normal and valid.',
      },
      {
        q: 'How long does grief over a pet last?',
        a: 'There is no set timeline. The sharpest pain usually eases over weeks and months, but missing your companion can continue and may resurface on anniversaries.',
      },
    ],
    related: ['how-long-does-grief-last', 'seven-stages-of-grief'],
  },

  // --------------------------------------------------------------------------
  {
    slug: 'complicated-grief',
    category: 'Grief',
    title: 'Complicated Grief: When Grief Gets Stuck',
    metaTitle: 'Complicated Grief: Signs, Causes & When to Get Help | ColorMe',
    description:
      'Complicated grief is when the pain of loss stays intense and disabling over time. Learn the signs, why grief gets stuck, and when to reach out for support.',
    keywords: [
      'complicated grief',
      'prolonged grief disorder',
      'signs of complicated grief',
      'stuck in grief',
      'grief that won’t go away',
      'when to get help for grief',
    ],
    image: '/duelo-complicado.webp',
    imageAlt: 'Complicated grief — when grief gets stuck',
    datePublished: '2026-07-30',
    readingTime: '6 min read',
    content: [
      {
        type: 'p',
        text: 'Grief is painful, but for most people it slowly softens and becomes possible to live with. Sometimes, though, grief gets stuck. The pain stays as raw as day one, months or years later, and it starts to take over life. This is often called complicated grief, or prolonged grief.',
      },
      { type: 'h2', text: 'What is complicated grief?' },
      {
        type: 'p',
        text: 'Complicated grief is a persistent, intense form of mourning that does not ease over time and significantly interferes with daily functioning. It is not a weakness or a failure to “move on” — it is a signal that the loss is too heavy to carry alone.',
      },
      { type: 'h2', text: 'Signs grief may be stuck' },
      {
        type: 'ul',
        items: [
          'Intense longing or preoccupation with the person that does not lessen over many months.',
          'An inability to accept the reality of the death.',
          'Avoiding all reminders — or being unable to do anything but focus on the loss.',
          'Feeling that life has no meaning, or that a part of you died too.',
          'Struggling to function at work, at home, or in relationships with no improvement.',
        ],
      },
      { type: 'h2', text: 'Why grief gets stuck' },
      {
        type: 'p',
        text: 'Certain losses carry a higher risk: a sudden or traumatic death, the loss of a child, a very dependent relationship, multiple losses at once, or a lack of support. Unresolved feelings — guilt, anger, things left unsaid — can also keep grief frozen in place.',
      },
      {
        type: 'quote',
        text: 'Needing help to grieve is not a sign that you loved wrong. It is a sign that you loved deeply.',
      },
      { type: 'h2', text: 'How support helps' },
      {
        type: 'p',
        text: 'Complicated grief usually does not resolve on its own — but it responds well to support. Grief-focused accompaniment helps you face the loss safely, work through what is stuck, and slowly find a way to live alongside it. Art therapy can be especially helpful when the pain is too tangled or too deep for words.',
      },
      { type: 'h2', text: 'When to reach out' },
      {
        type: 'p',
        text: 'If, well after a loss, the grief is still all-consuming and life feels impossible — or if you have thoughts that you would be better off gone — please reach out to a professional. You deserve support, and healing is possible.',
      },
    ],
    faq: [
      {
        q: 'What is the difference between normal and complicated grief?',
        a: 'Normal grief gradually softens and becomes livable. Complicated grief stays intense and disabling over a long period and keeps interfering with daily life without easing.',
      },
      {
        q: 'How long before grief is considered “complicated”?',
        a: 'There is no exact cutoff, but grief that remains severe and disabling roughly a year or more after the loss, with no improvement, may be complicated grief worth discussing with a professional.',
      },
      {
        q: 'Can complicated grief be treated?',
        a: 'Yes. Grief-focused therapy and approaches like art therapy help people process what is stuck and gradually find a way to live with the loss.',
      },
    ],
    related: ['how-long-does-grief-last', 'seven-stages-of-grief'],
  },

  // --------------------------------------------------------------------------
  {
    slug: 'art-therapy-exercises',
    category: 'Art Therapy',
    title: '8 Art Therapy Exercises You Can Do at Home',
    metaTitle: '8 Art Therapy Exercises You Can Do at Home | ColorMe',
    description:
      'Simple art therapy exercises to process emotions, reduce stress, and reconnect with yourself — no art skills or special supplies needed. Try them at home today.',
    keywords: [
      'art therapy exercises',
      'art therapy activities',
      'art therapy exercises at home',
      'art therapy techniques',
      'art journaling prompts',
      'creative exercises for emotions',
    ],
    image: '/ejercicios-arteterapia.webp',
    imageAlt: 'Art therapy exercises you can do at home',
    datePublished: '2026-07-30',
    readingTime: '6 min read',
    content: [
      {
        type: 'p',
        text: 'You do not need a studio, expensive materials, or any artistic skill to benefit from art therapy at home. A pen and paper are enough. These eight exercises help you process emotions, calm your mind, and reconnect with yourself. There is no wrong way to do them.',
      },
      { type: 'h2', text: 'Before you begin' },
      {
        type: 'p',
        text: 'Find a quiet ten minutes. Let go of making anything “good.” The goal is honesty, not beauty. If a feeling comes up, that is the exercise working.',
      },
      { type: 'h2', text: '8 exercises to try' },
      { type: 'h3', text: '1. Emotion color map' },
      {
        type: 'p',
        text: 'Fill a page with colors that match how you feel right now — no shapes needed, just color and movement. It gives shape to emotions that are hard to name.',
      },
      { type: 'h3', text: '2. Scribble and find' },
      {
        type: 'p',
        text: 'Scribble freely for a minute, then look for an image hidden in the lines and bring it out. This loosens control and invites the subconscious in.',
      },
      { type: 'h3', text: '3. Draw your safe place' },
      {
        type: 'p',
        text: 'Draw a place — real or imagined — where you feel completely safe. Return to it on hard days as a grounding anchor.',
      },
      { type: 'h3', text: '4. The worry container' },
      {
        type: 'p',
        text: 'Draw a jar or box and place your worries inside it. Closing the lid tells your mind you can set them down for now.',
      },
      { type: 'h3', text: '5. A letter you will not send' },
      {
        type: 'p',
        text: 'Write or draw a message to someone — living or gone — saying what you never got to say. This is powerful for grief and unfinished goodbyes.',
      },
      { type: 'h3', text: '6. Mandala for focus' },
      {
        type: 'p',
        text: 'Draw a circle and fill it with repeating patterns from the centre outward. The rhythm quiets a racing mind, like a moving meditation.',
      },
      { type: 'h3', text: '7. Gratitude page' },
      {
        type: 'p',
        text: 'Draw or collage small things you are grateful for today. It gently shifts attention toward what is still good.',
      },
      { type: 'h3', text: '8. Then and now' },
      {
        type: 'p',
        text: 'Divide a page in two: how you felt before a hard event, and how you feel now. It helps you see movement and honour how far you have come.',
      },
      {
        type: 'quote',
        text: 'The page cannot judge you. That is exactly why it can hold what words cannot.',
      },
      { type: 'h2', text: 'When to go deeper' },
      {
        type: 'p',
        text: 'These exercises are wonderful self-care, but they are not a substitute for support when you are struggling. If painful feelings surface and feel too big to hold alone, working with an art therapist gives you a safe space to explore them.',
      },
    ],
    faq: [
      {
        q: 'What supplies do I need for art therapy at home?',
        a: 'Very little — paper and a pen, pencil, or crayons are enough. The process matters far more than the materials.',
      },
      {
        q: 'Do art therapy exercises really work?',
        a: 'Yes. Simple creative activities help regulate the nervous system, externalise difficult emotions, and build self-awareness, even done on your own.',
      },
      {
        q: 'Can I do art therapy exercises if I can’t draw?',
        a: 'Absolutely. These exercises need no skill. Color, scribbles, and simple shapes are exactly right.',
      },
    ],
    related: ['what-is-art-therapy', 'art-therapy-for-anxiety'],
  },

  // --------------------------------------------------------------------------
  {
    slug: 'art-therapy-for-children',
    category: 'Art Therapy',
    title: 'Art Therapy for Children: Helping Kids Express Big Feelings',
    metaTitle: 'Art Therapy for Children: Helping Kids Express Feelings | ColorMe',
    description:
      'Children often cannot put big feelings into words — but they can draw them. Learn how art therapy helps kids process emotions, grief, and anxiety, and how to support them.',
    keywords: [
      'art therapy for children',
      'art therapy for kids',
      'helping children express emotions',
      'art therapy child grief',
      'children and anxiety art',
      'creative therapy for kids',
    ],
    image: '/arteterapia-ninos.webp',
    imageAlt: 'Art therapy for children — helping kids express big feelings',
    datePublished: '2026-07-30',
    readingTime: '6 min read',
    content: [
      {
        type: 'p',
        text: 'Children feel just as deeply as adults, but they rarely have the words to explain it. A four-year-old cannot say “I feel anxious and abandoned.” But they can draw a tiny figure alone in a big, dark space. For kids, art is a natural language — and art therapy meets them exactly where they are.',
      },
      { type: 'h2', text: 'Why art works so well for children' },
      {
        type: 'p',
        text: 'Play and drawing are how children naturally process the world. Through art, feelings that are too big, too scary, or too confusing to say out loud can come out safely on the page. It gives adults a window into a child’s inner world — and gives the child a sense of relief and control.',
      },
      { type: 'h2', text: 'What art therapy can help children with' },
      {
        type: 'ul',
        items: [
          'Grief and loss, including the death of a loved one or a pet.',
          'Anxiety, fears, and worries they cannot explain.',
          'Big life changes: divorce, a new sibling, moving, or starting school.',
          'Trauma or difficult experiences that are hard to talk about.',
          'Building confidence, emotional vocabulary, and self-regulation.',
        ],
      },
      {
        type: 'quote',
        text: 'A child may not be able to tell you what happened. But often, they can show you.',
      },
      { type: 'h2', text: 'How a session works' },
      {
        type: 'p',
        text: 'In child art therapy, a trained therapist creates a safe, playful space with simple materials. The child is invited to draw, paint, or build freely. The therapist gently notices themes and feelings in the work, following the child’s lead rather than directing them. There is never pressure to explain or perform.',
      },
      { type: 'h2', text: 'Simple ways parents can support at home' },
      {
        type: 'ul',
        items: [
          'Offer art materials and time, without correcting or judging the result.',
          'Ask open, curious questions: “Tell me about your drawing,” instead of “What is that?”',
          'Let them lead — do not force meaning or interpret their art for them.',
          'Notice and name feelings gently: “It looks like this part feels stormy.”',
        ],
      },
      { type: 'h2', text: 'When to seek professional support' },
      {
        type: 'p',
        text: 'If a child is struggling with grief, anxiety, big behavioural changes, or a difficult experience, a professional art therapist can help them process it safely. Early support gives children tools that last a lifetime.',
      },
    ],
    faq: [
      {
        q: 'At what age can a child start art therapy?',
        a: 'Children as young as three or four can benefit, since drawing and play are natural ways for them to express feelings. Art therapy is adapted to each child’s age and stage.',
      },
      {
        q: 'How does art therapy help a grieving child?',
        a: 'It lets children express grief they cannot put into words, gives them a safe outlet for confusing feelings, and offers a sense of control and relief during a frightening time.',
      },
      {
        q: 'What can parents do at home?',
        a: 'Provide art materials and unhurried time, ask open and curious questions, let the child lead, and gently name feelings — without judging or correcting their art.',
      },
    ],
    related: ['what-is-art-therapy', 'art-therapy-for-anxiety'],
  },

  // --------------------------------------------------------------------------
  {
    slug: 'miscarriage-and-pregnancy-loss',
    category: 'Grief',
    title: 'Miscarriage & Pregnancy Loss: Grieving a Baby the World Never Met',
    metaTitle: 'Miscarriage & Pregnancy Loss: Grieving Your Baby | ColorMe',
    description:
      'Miscarriage and pregnancy loss bring a real, profound grief that is too often unseen. Your baby existed and your pain is valid. Gentle guidance for grieving and healing.',
    keywords: [
      'miscarriage grief',
      'pregnancy loss',
      'grieving a miscarriage',
      'stillbirth grief',
      'perinatal loss',
      'coping with pregnancy loss',
    ],
    image: '/duelo-perinatal.webp',
    imageAlt: 'Miscarriage and pregnancy loss — grieving a baby the world never met',
    datePublished: '2026-07-30',
    readingTime: '6 min read',
    content: [
      {
        type: 'p',
        text: 'When you lose a baby to miscarriage, stillbirth, or in the first days of life, you do not just lose a pregnancy. You lose a future — the name you imagined, the first steps, the whole life you had already begun to dream. Your baby existed, and your grief is real.',
      },
      { type: 'h2', text: 'A grief the world often cannot see' },
      {
        type: 'p',
        text: 'Perinatal loss is one of the loneliest griefs, because others often never met your baby and may not know what to say. Some stay silent, or offer well-meaning words that wound — “at least it was early,” “you can try again.” But your bond with your baby was real from the start, and so is your loss.',
      },
      {
        type: 'quote',
        text: 'No length of pregnancy determines the size of the love — or the size of the grief.',
      },
      { type: 'h2', text: 'What you might be feeling' },
      {
        type: 'ul',
        items: [
          'Deep sadness and longing for the baby you will not raise.',
          'Guilt or the endless question of whether you did something wrong (you almost certainly did not).',
          'Anger, envy around others’ pregnancies, or fear about the future.',
          'A sense of isolation, as if you are grieving alone.',
        ],
      },
      { type: 'h2', text: 'For partners, too' },
      {
        type: 'p',
        text: 'Partners grieve this loss as well, often silently while trying to be strong. There is no right way to grieve a baby, and no comparison of whose pain is greater. Both of you are allowed to mourn.',
      },
      { type: 'h2', text: 'Ways to honour your baby and your grief' },
      {
        type: 'ul',
        items: [
          'Name your baby, if that feels right to you.',
          'Create something in their memory: a drawing, a small ritual, a keepsake, a candle.',
          'Mark meaningful dates in your own way, without pressure.',
          'Use art to express what has no words — a page of color, an image of the love you carry.',
        ],
      },
      { type: 'h2', text: 'You do not have to grieve alone' },
      {
        type: 'p',
        text: 'This loss deserves acknowledgement and support. If the grief feels overwhelming, or those around you cannot hold it, compassionate accompaniment can help you carry it and heal at your own pace.',
      },
    ],
    faq: [
      {
        q: 'Is it normal to grieve deeply after an early miscarriage?',
        a: 'Yes. Grief is not measured by how many weeks the pregnancy lasted. The bond and the dreams were real from the beginning, so profound grief is completely valid.',
      },
      {
        q: 'Was the miscarriage my fault?',
        a: 'Almost always, no. The vast majority of miscarriages are caused by factors entirely outside your control. Guilt is common, but it does not mean you did anything wrong.',
      },
      {
        q: 'How can I support my partner after pregnancy loss?',
        a: 'Acknowledge that they are grieving too, make space for both of your feelings without comparison, and consider grieving together through ritual, conversation, or creative expression.',
      },
    ],
    related: ['how-long-does-grief-last', 'seven-stages-of-grief'],
  },

  // --------------------------------------------------------------------------
  {
    slug: 'what-to-say-to-someone-grieving',
    category: 'Grief',
    title: 'What to Say to Someone Who Is Grieving (and What Not to Say)',
    metaTitle: 'What to Say to Someone Grieving (and What Not To) | ColorMe',
    description:
      'Not sure what to say to someone who is grieving? A simple, compassionate guide to words that comfort, phrases to avoid, and how to truly show up for someone in loss.',
    keywords: [
      'what to say to someone grieving',
      'what to say to someone who lost a loved one',
      'comforting words for grief',
      'what not to say to someone grieving',
      'how to support a grieving friend',
      'condolence messages',
    ],
    image: '/como-acompanar-duelo.webp',
    imageAlt: 'What to say to someone who is grieving',
    datePublished: '2026-07-30',
    readingTime: '5 min read',
    content: [
      {
        type: 'p',
        text: 'When someone we love is grieving, we freeze. We are so afraid of saying the wrong thing that we sometimes say nothing at all. But your presence matters far more than finding perfect words. Here is how to show up.',
      },
      { type: 'h2', text: 'What helps to say' },
      {
        type: 'ul',
        items: [
          '“I’m so sorry. I’m here for you.”',
          '“I don’t know what to say, but I’m not going anywhere.”',
          '“Tell me about them.” — inviting memories is a gift.',
          '“It’s okay to feel however you feel.”',
          '“I’m bringing dinner on Tuesday.” — specific help beats “let me know if you need anything.”',
        ],
      },
      { type: 'h2', text: 'What to avoid' },
      {
        type: 'ul',
        items: [
          '“Everything happens for a reason.”',
          '“At least they lived a long life / at least it was quick.”',
          '“They’re in a better place now.”',
          '“I know exactly how you feel.”',
          '“You need to be strong” or “It’s time to move on.”',
        ],
      },
      {
        type: 'quote',
        text: 'Grief does not need to be fixed. It needs to be witnessed.',
      },
      { type: 'h2', text: 'Why those phrases hurt' },
      {
        type: 'p',
        text: 'Most unhelpful comments try to minimise the pain or rush the person past it. Even when kindly meant, they can leave a grieving person feeling unseen or pressured to hide what they feel. You do not need to explain the loss or find a silver lining — you just need to stay.',
      },
      { type: 'h2', text: 'Showing up beyond words' },
      {
        type: 'ul',
        items: [
          'Keep checking in — grief lasts long after the funeral, when others disappear.',
          'Remember dates: anniversaries and birthdays are especially hard.',
          'Say the person’s name. Fear of “reminding” them is a myth — they never forgot.',
          'Offer concrete, practical help rather than putting the burden on them to ask.',
        ],
      },
      { type: 'h2', text: 'When they need more support' },
      {
        type: 'p',
        text: 'If someone’s grief seems to be swallowing them whole with no relief over time, gently encouraging professional support — and offering to help them find it — can be an act of deep love.',
      },
    ],
    faq: [
      {
        q: 'What is the best thing to say to someone grieving?',
        a: 'Simple, honest presence works best: “I’m so sorry, I’m here for you.” Inviting them to talk about the person they lost, and offering specific help, means more than perfect words.',
      },
      {
        q: 'What should you not say to someone grieving?',
        a: 'Avoid phrases that minimise or rush the loss, like “everything happens for a reason,” “at least…,” “they’re in a better place,” or “it’s time to move on.”',
      },
      {
        q: 'Is it okay to mention the person who died?',
        a: 'Yes. Saying their name and sharing memories is usually comforting. The grieving person has not forgotten them — being able to talk about them often helps.',
      },
    ],
    related: ['seven-stages-of-grief', 'grief-after-losing-a-parent'],
  },

  // --------------------------------------------------------------------------
  {
    slug: 'art-therapy-for-trauma',
    category: 'Art Therapy',
    title: 'Art Therapy for Trauma: Healing What Words Can’t Reach',
    metaTitle: 'Art Therapy for Trauma: Healing Beyond Words | ColorMe',
    description:
      'Trauma often lives beyond language, stored in the body and images. Learn how art therapy helps process trauma safely and gently, and what to expect from the work.',
    keywords: [
      'art therapy for trauma',
      'trauma art therapy',
      'healing trauma with art',
      'creative trauma therapy',
      'art therapy PTSD',
      'processing trauma',
    ],
    image: '/arte-y-trauma.webp',
    imageAlt: 'Art therapy for trauma — healing what words cannot reach',
    datePublished: '2026-07-30',
    readingTime: '6 min read',
    content: [
      {
        type: 'p',
        text: 'Trauma is not stored the way ordinary memories are. It lives in the body, in sensations and images, often in a place words cannot easily reach. This is why talking alone sometimes is not enough — and why art therapy can be so powerful for healing trauma.',
      },
      { type: 'h2', text: 'Why trauma resists words' },
      {
        type: 'p',
        text: 'During overwhelming experiences, the brain’s language centres can go offline while sensory and emotional memory keeps recording. Later, the trauma may surface as flashbacks, tension, or dread rather than a clear story. Art offers a different route in — through image, color, and the body — allowing what is wordless to be expressed safely.',
      },
      {
        type: 'quote',
        text: 'You do not have to relive a trauma to heal it. Sometimes you only have to give it a shape.',
      },
      { type: 'h2', text: 'How art therapy helps' },
      {
        type: 'ul',
        items: [
          'Lets you express the experience without having to narrate it out loud.',
          'Creates distance and safety — the feeling goes onto the page, not back into the body.',
          'Helps regulate the nervous system through rhythmic, grounding creativity.',
          'Restores a sense of control and choice that trauma took away.',
          'Rebuilds a sense of self beyond the traumatic event.',
        ],
      },
      { type: 'h2', text: 'Safety comes first' },
      {
        type: 'p',
        text: 'Trauma work should never be rushed. A trained art therapist moves at your pace, building safety and grounding before approaching anything painful. You are always in control of how much you explore and share. The goal is not to reopen wounds, but to help them heal.',
      },
      { type: 'h2', text: 'A note on doing this alone' },
      {
        type: 'p',
        text: 'Gentle creative practices can support you, but trauma is best explored with professional guidance, because difficult material can surface. If you have experienced trauma, working with a therapist gives you a safe container to process it.',
      },
    ],
    faq: [
      {
        q: 'How does art therapy help with trauma?',
        a: 'It allows trauma stored in the body and images to be expressed without words, creates safe distance from painful memories, regulates the nervous system, and restores a sense of control.',
      },
      {
        q: 'Do I have to talk about my trauma in art therapy?',
        a: 'No. A key benefit is that you can express and process trauma through images without narrating it aloud. You always control how much you share.',
      },
      {
        q: 'Is art therapy safe for trauma?',
        a: 'When guided by a trained therapist who prioritises grounding and pacing, yes. Trauma-informed art therapy is designed to help wounds heal, not reopen them.',
      },
    ],
    related: ['what-is-art-therapy', 'art-therapy-for-anxiety'],
  },

  // --------------------------------------------------------------------------
  {
    slug: 'what-is-a-thanatologist',
    category: 'Thanatology',
    title: 'What Is a Thanatologist? How Grief Specialists Help',
    metaTitle: 'What Is a Thanatologist? How Grief Specialists Help | ColorMe',
    description:
      'A thanatologist is a specialist in death, dying, and grief who accompanies people through loss. Learn what thanatology is, what a thanatologist does, and when to see one.',
    keywords: [
      'what is a thanatologist',
      'thanatology',
      'grief specialist',
      'death and dying specialist',
      'grief counselor',
      'thanatologist meaning',
    ],
    image: '/tanatologia-acompanamiento-duelo.webp',
    imageAlt: 'What is a thanatologist — a specialist who accompanies people through grief',
    datePublished: '2026-07-30',
    readingTime: '5 min read',
    content: [
      {
        type: 'p',
        text: 'The word “thanatologist” is unfamiliar to many people — but the work is deeply human. A thanatologist is a professional who specialises in death, dying, and grief, accompanying people through some of the hardest passages of life.',
      },
      { type: 'h2', text: 'What is thanatology?' },
      {
        type: 'p',
        text: 'Thanatology is the study of death and the processes surrounding it — including grief, loss, and how we cope. It draws on psychology, philosophy, and the practical care of the dying and the bereaved. The name comes from Thánatos, the Greek personification of death.',
      },
      { type: 'h2', text: 'What does a thanatologist do?' },
      {
        type: 'ul',
        items: [
          'Accompanies people through grief after the death of a loved one.',
          'Supports those facing a terminal diagnosis, and their families.',
          'Helps with anticipatory grief and end-of-life processes.',
          'Guides people through non-death losses too: divorce, illness, major life change.',
          'Offers tools and a safe, non-judgemental space to process loss.',
        ],
      },
      {
        type: 'quote',
        text: 'A thanatologist does not take the pain away. They walk beside you so you do not have to face it alone.',
      },
      { type: 'h2', text: 'When might you see a thanatologist?' },
      {
        type: 'p',
        text: 'You might reach out when a loss feels too heavy to carry alone, when you are supporting a dying loved one, when grief has become stuck, or when you simply want compassionate guidance through a painful transition. You do not have to be “in crisis” to deserve support.',
      },
      { type: 'h2', text: 'Thanatology and art therapy together' },
      {
        type: 'p',
        text: 'Combining thanatology with art therapy is especially powerful: the thanatologist holds the grief process with expertise, while art gives you a language for feelings too big for words. Together, they offer a gentle, whole-person way through loss.',
      },
    ],
    faq: [
      {
        q: 'What does a thanatologist do?',
        a: 'A thanatologist specialises in death, dying, and grief. They accompany people through bereavement, terminal illness, anticipatory grief, and other losses, offering tools and a safe space to process them.',
      },
      {
        q: 'What is the difference between a thanatologist and a therapist?',
        a: 'A thanatologist focuses specifically on death, dying, and grief-related processes, while a general therapist addresses a broader range of mental-health concerns. Many people benefit from a specialist in loss.',
      },
      {
        q: 'When should I see a thanatologist?',
        a: 'Consider it when a loss feels overwhelming, when supporting a dying loved one, when grief feels stuck, or when you want compassionate guidance through any painful transition.',
      },
    ],
    related: ['seven-stages-of-grief', 'how-long-does-grief-last'],
  },

  // --------------------------------------------------------------------------
  {
    slug: 'healing-mandalas',
    category: 'Art Therapy',
    title: 'Healing Mandalas: How Drawing Circles Calms the Mind',
    metaTitle: 'Healing Mandalas: How Drawing Circles Calms the Mind | ColorMe',
    description:
      'Mandalas are more than pretty patterns — drawing and coloring them calms anxiety and focuses the mind. Learn the meaning of healing mandalas and how to make your own.',
    keywords: [
      'healing mandalas',
      'mandala meaning',
      'mandala art therapy',
      'how to draw a mandala',
      'mandalas for anxiety',
      'benefits of coloring mandalas',
    ],
    image: '/mandalas-terapeuticos.webp',
    imageAlt: 'Healing mandalas — how drawing circles calms the mind',
    datePublished: '2026-07-30',
    readingTime: '5 min read',
    content: [
      {
        type: 'p',
        text: 'A mandala is a circular design radiating from a centre point. For thousands of years, across many cultures, mandalas have been used for meditation, prayer, and healing. In art therapy, they are a simple, powerful tool for calming the mind and returning to yourself.',
      },
      { type: 'h2', text: 'What mandalas represent' },
      {
        type: 'p',
        text: 'The word “mandala” means “circle” in Sanskrit. The circle symbolises wholeness, unity, and the cycles of life. Working from the centre outward can feel like an act of gathering yourself — of finding a still point in the middle of everything.',
      },
      { type: 'h2', text: 'Why they calm the mind' },
      {
        type: 'ul',
        items: [
          'The repetitive, symmetrical patterns act like a moving meditation.',
          'Focusing on the design gently interrupts anxious thought loops.',
          'The predictable structure feels safe and contained when life feels chaotic.',
          'Choosing colors and patterns is soothing and quietly self-expressive.',
        ],
      },
      {
        type: 'quote',
        text: 'When the world feels scattered, a mandala gives your attention somewhere gentle to rest.',
      },
      { type: 'h2', text: 'How to make your own healing mandala' },
      {
        type: 'ul',
        items: [
          'Draw a dot in the centre of your page and a light circle around it.',
          'Add simple shapes radiating outward — petals, dots, waves — repeating them around the circle.',
          'Work slowly, letting each ring build on the last. There is no “right” design.',
          'Add color intuitively, choosing whatever feels calming or true today.',
        ],
      },
      { type: 'h2', text: 'Using mandalas in daily life' },
      {
        type: 'p',
        text: 'You do not need to be an artist. Even coloring a pre-drawn mandala for ten minutes can lower stress and steady a racing mind. Keep a small mandala practice for hard days — it is a portable way to come back to calm.',
      },
    ],
    faq: [
      {
        q: 'What is the meaning of a mandala?',
        a: 'A mandala is a circular design symbolising wholeness, unity, and the cycles of life. Across many cultures it has been used for meditation, prayer, and healing.',
      },
      {
        q: 'How do mandalas help with anxiety?',
        a: 'Drawing or coloring their repetitive, symmetrical patterns works like a moving meditation, interrupting anxious thoughts and offering a calming, contained focus.',
      },
      {
        q: 'Do I need to be artistic to make a mandala?',
        a: 'No. Simple repeated shapes from a central point are all you need, and even coloring a pre-drawn mandala provides the calming benefits.',
      },
    ],
    related: ['art-therapy-for-anxiety', 'art-therapy-exercises'],
  },

  // --------------------------------------------------------------------------
  {
    slug: 'grief-and-guilt',
    category: 'Grief',
    title: 'Grief and Guilt: Making Peace with “I Should Have…”',
    metaTitle: 'Grief and Guilt: Making Peace with “I Should Have” | ColorMe',
    description:
      'Guilt is one of grief’s heaviest companions. Learn why we feel guilty after a loss, the forms grief guilt takes, and gentle ways to make peace and forgive yourself.',
    keywords: [
      'grief and guilt',
      'guilt after death',
      'survivor guilt',
      'feeling guilty after loss',
      'grief guilt',
      'self-forgiveness grief',
    ],
    image: '/verguenza-duelo.webp',
    imageAlt: 'Grief and guilt — making peace with “I should have”',
    datePublished: '2026-07-30',
    readingTime: '5 min read',
    content: [
      {
        type: 'p',
        text: 'Alongside the sadness of grief often comes a quieter, sharper pain: guilt. The endless “I should have,” “if only,” and “why didn’t I.” If guilt is weighing on your grief, you are not alone — and you are not the failure your mind is telling you that you are.',
      },
      { type: 'h2', text: 'Why guilt and grief go together' },
      {
        type: 'p',
        text: 'Guilt is often the mind’s attempt to make sense of the senseless. If we could have done something differently, then maybe the loss was preventable — and maybe the world is less random than it feels. Guilt gives us a false sense of control over something utterly out of our hands.',
      },
      { type: 'h2', text: 'Common forms of grief guilt' },
      {
        type: 'ul',
        items: [
          '“I should have done more” — for what you did or didn’t do before the death.',
          'Guilt over things left unsaid, or a last conversation that went badly.',
          'Relief guilt — feeling relief after a long illness, then guilt for the relief.',
          'Survivor guilt — “Why them and not me?”',
          'Guilt for laughing, healing, or living again.',
        ],
      },
      {
        type: 'quote',
        text: 'You made the best decisions you could with the information, love, and strength you had at the time. That is all any of us can do.',
      },
      { type: 'h2', text: 'Gentle steps toward self-forgiveness' },
      {
        type: 'ul',
        items: [
          'Name the guilt out loud or on paper — unspoken, it grows in the dark.',
          'Ask what you would say to a friend who felt this. Offer yourself the same compassion.',
          'Separate responsibility from hindsight: you could not have known then what you know now.',
          'Write or draw a letter to the person, saying what guilt keeps you from saying.',
        ],
      },
      { type: 'h2', text: 'When guilt won’t loosen its grip' },
      {
        type: 'p',
        text: 'If guilt is keeping you stuck, tormenting you, or convincing you that you do not deserve to heal, please reach out for support. Grief guilt is common and workable — you do not have to carry it as a life sentence.',
      },
    ],
    faq: [
      {
        q: 'Why do I feel so guilty after losing someone?',
        a: 'Guilt is often the mind’s way of seeking control over an uncontrollable loss. Believing you could have changed the outcome can feel less frightening than accepting how powerless we sometimes are.',
      },
      {
        q: 'Is it normal to feel relief when someone dies?',
        a: 'Yes, especially after a long illness or difficult relationship. Relief does not mean you did not love them, and it is nothing to be ashamed of.',
      },
      {
        q: 'How do I stop feeling guilty about a loss?',
        a: 'Name the guilt, offer yourself the compassion you’d give a friend, separate what you knew then from hindsight, and seek support if the guilt stays stuck. Self-forgiveness is a process, not a single moment.',
      },
    ],
    related: ['seven-stages-of-grief', 'grief-after-losing-a-parent'],
  },

  // --------------------------------------------------------------------------
  {
    slug: 'grief-during-the-holidays',
    category: 'Grief',
    title: 'Grief During the Holidays: Surviving the Season After a Loss',
    metaTitle: 'Grief During the Holidays: Surviving the Season | ColorMe',
    description:
      'The holidays can be unbearable when you are grieving. Gentle, practical ways to survive Christmas and the season after a loss, honour your person, and protect your heart.',
    keywords: [
      'grief during the holidays',
      'grief at christmas',
      'first christmas after loss',
      'holidays after death of loved one',
      'coping with grief holidays',
      'grief and the holiday season',
    ],
    image: '/hombre-en-duelo.webp',
    imageAlt: 'Grief during the holidays — surviving the season after a loss',
    datePublished: '2026-07-30',
    readingTime: '5 min read',
    content: [
      {
        type: 'p',
        text: 'When the world is lit up with celebration and togetherness, grief can feel unbearably loud. The empty chair, the traditions that now ache, the pressure to be merry — the holidays after a loss can be one of the hardest stretches of the year. Be gentle with yourself. You are allowed to do this differently.',
      },
      { type: 'h2', text: 'Why the holidays hurt so much' },
      {
        type: 'p',
        text: 'Holidays are built around family, ritual, and memory — exactly the places your loss lives. Everything from a song to a recipe can bring a wave of grief. And the contrast between the joy around you and the pain inside you can make you feel painfully alone.',
      },
      { type: 'h2', text: 'Gentle ways to get through' },
      {
        type: 'ul',
        items: [
          'Give yourself permission to opt out of what feels too painful. You do not owe anyone your presence.',
          'Decide in advance how much you can handle, and have an exit plan for gatherings.',
          'Keep, change, or skip traditions — whatever your heart needs this year.',
          'Include your person: light a candle, set a place, share a memory, cook their dish.',
          'Let others help. Say yes to support and no to obligation.',
        ],
      },
      {
        type: 'quote',
        text: 'You do not have to be festive to be worthy of care. Surviving the day is enough.',
      },
      { type: 'h2', text: 'Making space for your person' },
      {
        type: 'p',
        text: 'Many people find comfort in a small ritual of remembrance: an ornament, a drawing, a letter, a moment of quiet with their name. Creating something — even a simple page of color for how you feel — can hold the grief so it does not have to be carried in silence through the celebrations.',
      },
      { type: 'h2', text: 'When you need more support' },
      {
        type: 'p',
        text: 'If the season feels impossible, you do not have to white-knuckle through it alone. Reaching out for accompaniment during the hardest weeks of the year is a kindness to yourself, not a weakness.',
      },
    ],
    faq: [
      {
        q: 'How do I cope with the first holiday after a loss?',
        a: 'Lower your expectations, decide in advance what you can handle, keep or skip traditions freely, and find a small way to include your person. Surviving the day gently is enough.',
      },
      {
        q: 'Is it okay to skip holiday celebrations while grieving?',
        a: 'Yes. You are allowed to opt out of anything too painful. Protecting your heart is not selfish — it is necessary.',
      },
      {
        q: 'How can I honour my loved one during the holidays?',
        a: 'Light a candle, set a place at the table, cook their favourite dish, share memories, or create a small keepsake or drawing in their memory.',
      },
    ],
    related: ['how-long-does-grief-last', 'what-to-say-to-someone-grieving'],
  },

  // --------------------------------------------------------------------------
  {
    slug: 'coping-with-sudden-loss',
    category: 'Grief',
    title: 'Coping With Sudden Loss: When Goodbye Never Came',
    metaTitle: 'Coping With Sudden Loss: When Goodbye Never Came | ColorMe',
    description:
      'Sudden, unexpected loss carries a unique kind of shock and trauma. Understand why sudden death grief is so disorienting and find gentle ways to begin to cope.',
    keywords: [
      'sudden loss grief',
      'coping with sudden death',
      'unexpected death grief',
      'traumatic loss',
      'sudden death of a loved one',
      'grief after accident',
    ],
    image: '/superar-perdida-ser-querido.webp',
    imageAlt: 'Coping with sudden loss — when goodbye never came',
    datePublished: '2026-07-30',
    readingTime: '5 min read',
    content: [
      {
        type: 'p',
        text: 'When someone dies suddenly — an accident, a heart attack, an overnight tragedy — the ground vanishes beneath you. There was no warning, no chance to say goodbye, no time to prepare. Sudden loss is not just grief; it is grief tangled with shock and trauma.',
      },
      { type: 'h2', text: 'Why sudden loss is so disorienting' },
      {
        type: 'p',
        text: 'Your mind was given no time to absorb the reality, so it keeps rejecting it. You may replay the last ordinary moments, struggle to believe it is real, or feel frozen and numb. This is your nervous system trying to protect you from a blow it could not see coming.',
      },
      {
        type: 'quote',
        text: 'With sudden loss, the mind has to catch up to a reality the heart was never warned about.',
      },
      { type: 'h2', text: 'Common experiences' },
      {
        type: 'ul',
        items: [
          'Shock, disbelief, and a sense of unreality that can last a long time.',
          'Intrusive thoughts or images, especially with a traumatic death.',
          'Guilt over things left unsaid or a goodbye that never happened.',
          'Anxiety and a new fear that catastrophe can strike anytime.',
        ],
      },
      { type: 'h2', text: 'Gentle first steps' },
      {
        type: 'ul',
        items: [
          'Take it one hour at a time. You do not have to process it all at once.',
          'Lean on practical support for daily tasks while you are in shock.',
          'Find safe ways to say the goodbye you never got — a letter, a drawing, a spoken message.',
          'Be patient: trauma-touched grief often takes longer to settle.',
        ],
      },
      { type: 'h2', text: 'When to reach for support' },
      {
        type: 'p',
        text: 'Because sudden loss can carry trauma, professional support is especially valuable. If you are haunted by intrusive images, unable to function, or stuck in shock, a grief or trauma specialist can help you find solid ground again.',
      },
    ],
    faq: [
      {
        q: 'Why is sudden death harder to grieve?',
        a: 'There is no time to prepare or say goodbye, so the mind struggles to accept the reality. Sudden loss often combines grief with shock and trauma, which can make it more disorienting and longer to settle.',
      },
      {
        q: 'How do you cope when you didn’t get to say goodbye?',
        a: 'Create your own goodbye in a safe way — write a letter, make a drawing, speak the words aloud, or hold a small ritual. Unsaid things can still be expressed and released.',
      },
      {
        q: 'Is trauma part of sudden loss?',
        a: 'Often, yes, especially with accidents or violent deaths. Intrusive images and heightened anxiety are common, and trauma-informed support can help significantly.',
      },
    ],
    related: ['seven-stages-of-grief', 'complicated-grief'],
  },

  // --------------------------------------------------------------------------
  {
    slug: 'journaling-for-grief',
    category: 'Art Therapy',
    title: 'Journaling for Grief: Writing and Drawing Your Way Through Loss',
    metaTitle: 'Journaling for Grief: Writing Through Loss | ColorMe',
    description:
      'Grief journaling gives your pain a safe place to go. Discover the benefits of journaling through loss, plus simple prompts that combine writing and art to help you heal.',
    keywords: [
      'journaling for grief',
      'grief journal',
      'grief journal prompts',
      'writing to heal grief',
      'expressive writing loss',
      'art journaling grief',
    ],
    image: '/beneficios-del-arte.webp',
    imageAlt: 'Journaling for grief — writing and drawing your way through loss',
    datePublished: '2026-07-30',
    readingTime: '5 min read',
    content: [
      {
        type: 'p',
        text: 'Grief needs somewhere to go. When it stays locked inside, it can feel like it is swallowing you. A journal — one where you can both write and draw — offers a private, judgement-free place to pour it out, at your own pace, on your own terms.',
      },
      { type: 'h2', text: 'Why journaling helps you grieve' },
      {
        type: 'ul',
        items: [
          'It gives shapeless, overwhelming feelings a form you can see and hold.',
          'It lets you say the things you cannot say out loud to anyone.',
          'It keeps your bond with the person alive through memory and words.',
          'It becomes a record of your healing — proof of how far you have come.',
        ],
      },
      {
        type: 'quote',
        text: 'The page asks nothing of you. It just listens.',
      },
      { type: 'h2', text: 'Prompts to begin' },
      {
        type: 'ul',
        items: [
          '“Today my grief feels like…” — then draw it in color, no words needed.',
          'Write a letter to the person you lost. Tell them what you never got to say.',
          'Describe a memory you never want to forget, in as much detail as you can.',
          'List the small, ordinary things you miss most.',
          '“What I need right now is…” — an act of gentle self-listening.',
        ],
      },
      { type: 'h2', text: 'Combine words and art' },
      {
        type: 'p',
        text: 'You do not have to choose between writing and drawing. Some feelings come out in words; others only in color, line, or image. Let your journal hold both. A page can be half letter, half scribble — whatever your grief needs that day.',
      },
      { type: 'h2', text: 'A gentle reminder' },
      {
        type: 'p',
        text: 'There is no right way and no schedule. Skip days. Write one line. Fill ten pages. Journaling is not homework — it is a companion. And if the feelings that surface feel too heavy to hold alone, that is a sign to reach out for support, not to stop.',
      },
    ],
    faq: [
      {
        q: 'Does journaling really help with grief?',
        a: 'Yes. Expressive writing and drawing help externalise overwhelming emotions, preserve memories, and track healing over time, giving grief a safe place to be felt and released.',
      },
      {
        q: 'What should I write in a grief journal?',
        a: 'Anything honest — how your grief feels today, a letter to the person you lost, memories you cherish, things you miss, or what you need right now. There is no wrong entry.',
      },
      {
        q: 'How often should I journal while grieving?',
        a: 'As often or as little as you like. One line or ten pages, daily or occasionally — there is no schedule. Let it be a companion, not a chore.',
      },
    ],
    related: ['art-therapy-exercises', 'what-is-art-therapy'],
  },

  // --------------------------------------------------------------------------
  {
    slug: 'art-therapy-vs-talk-therapy',
    category: 'Art Therapy',
    title: 'Art Therapy vs. Talk Therapy: Which Is Right for You?',
    metaTitle: 'Art Therapy vs. Talk Therapy: Which Is Right for You? | ColorMe',
    description:
      'Wondering whether art therapy or talk therapy suits you better? A clear comparison of how each works, their benefits, and how to choose the right approach for your needs.',
    keywords: [
      'art therapy vs talk therapy',
      'difference between art therapy and talk therapy',
      'is art therapy effective',
      'types of therapy',
      'choosing a therapy',
      'art therapy or counseling',
    ],
    image: '/arteterapia-sesion-creativa.webp',
    imageAlt: 'Art therapy vs. talk therapy — which is right for you',
    datePublished: '2026-07-30',
    readingTime: '5 min read',
    content: [
      {
        type: 'p',
        text: 'Talk therapy has helped millions of people — but words are not the only path to healing. For some, especially when emotions live below language, art therapy reaches places that talking cannot. So how do you know which is right for you? Often, the answer is not either/or.',
      },
      { type: 'h2', text: 'How talk therapy works' },
      {
        type: 'p',
        text: 'Talk therapy uses conversation to explore thoughts, feelings, and patterns. It is powerful for gaining insight, understanding relationships, and working things through verbally. It works best when you can access and articulate what you feel.',
      },
      { type: 'h2', text: 'How art therapy works' },
      {
        type: 'p',
        text: 'Art therapy uses the creative process — drawing, color, image — guided by a trained therapist. It is especially helpful when feelings are hard to name, when talking feels blocked, or when trauma and grief live in the body more than in words. You do not need any artistic skill.',
      },
      {
        type: 'quote',
        text: 'Talk therapy starts with words. Art therapy starts with what has no words yet.',
      },
      { type: 'h2', text: 'Art therapy might suit you if…' },
      {
        type: 'ul',
        items: [
          'You find it hard to put your feelings into words.',
          'You feel “stuck” or shut down in traditional talk therapy.',
          'You are processing trauma or grief that resists language.',
          'You are a child, or you simply think in images more than sentences.',
        ],
      },
      { type: 'h2', text: 'You do not have to choose' },
      {
        type: 'p',
        text: 'Art therapy is a form of psychotherapy, not a lesser alternative to it. Many people benefit from combining approaches — talking where words help, and creating where they fall short. The best therapy is the one that meets you where you are.',
      },
    ],
    faq: [
      {
        q: 'Is art therapy as effective as talk therapy?',
        a: 'Yes. Art therapy is an established form of psychotherapy. For people who struggle to verbalise feelings, or who are processing trauma and grief, it can reach places talking alone cannot.',
      },
      {
        q: 'What is the main difference between art therapy and talk therapy?',
        a: 'Talk therapy works through conversation; art therapy works through the creative process. Art therapy is especially useful when emotions are hard to put into words.',
      },
      {
        q: 'Can I do both art therapy and talk therapy?',
        a: 'Absolutely. Many people combine them — talking where it helps and creating where words fall short. They complement each other well.',
      },
    ],
    related: ['what-is-art-therapy', 'art-therapy-for-trauma'],
  },

  // --------------------------------------------------------------------------
  {
    slug: 'coping-with-loss-of-a-spouse',
    category: 'Grief',
    title: 'Coping With the Loss of a Spouse: Life After Losing Your Partner',
    metaTitle: 'Coping With the Loss of a Spouse | ColorMe',
    description:
      'Losing a spouse means losing your partner, your routines, and your imagined future. Compassionate guidance for grieving a husband or wife and rebuilding, slowly.',
    keywords: [
      'loss of a spouse',
      'losing a husband',
      'losing a wife',
      'grieving a partner',
      'widow grief',
      'life after losing your spouse',
    ],
    image: '/como-superar-perdida.webp',
    imageAlt: 'Coping with the loss of a spouse — life after losing your partner',
    datePublished: '2026-07-30',
    readingTime: '6 min read',
    content: [
      {
        type: 'p',
        text: 'Losing a spouse is losing far more than a person. It is losing your partner in the everyday, your shared history, your plans for the future, and the person who knew you best. The grief can feel total, because your whole life was built together.',
      },
      { type: 'h2', text: 'Why this loss reshapes everything' },
      {
        type: 'p',
        text: 'A spouse is woven into the fabric of daily life — the morning routine, the person to call with news, the other half of a thousand small decisions. When they are gone, the absence is everywhere. You may also grieve the future you had planned: the trips, the retirement, the growing old together.',
      },
      { type: 'h2', text: 'The many losses inside the loss' },
      {
        type: 'ul',
        items: [
          'The daily companionship and routines you shared.',
          'Your identity as part of a couple.',
          'Practical support — finances, chores, decisions once shared.',
          'The future you imagined together.',
          'Physical closeness and simply being known.',
        ],
      },
      {
        type: 'quote',
        text: 'Grieving a spouse is grieving the life you built and the life you planned, all at once.',
      },
      { type: 'h2', text: 'Gentle ways to cope' },
      {
        type: 'ul',
        items: [
          'Take practical decisions slowly. Avoid big changes while grief is raw.',
          'Let yourself feel the full weight — loneliness, anger, fear, and love.',
          'Keep their memory close through rituals, photos, or creating something in their honour.',
          'Accept help, and stay connected to people even when you want to withdraw.',
        ],
      },
      { type: 'h2', text: 'Rebuilding, in your own time' },
      {
        type: 'p',
        text: 'Healing does not mean forgetting or “moving on” from your partner. It means slowly learning to carry your love for them into a changed life. There is no timeline for this, and no need to rush. If the loneliness or grief feels unbearable, support can help you find your footing again.',
      },
    ],
    faq: [
      {
        q: 'How do you cope with losing a spouse?',
        a: 'Take practical decisions slowly, allow yourself to feel the full range of grief, keep your partner’s memory close, and lean on support. There is no timeline — be gentle with yourself.',
      },
      {
        q: 'Why does losing a spouse feel so overwhelming?',
        a: 'A spouse is part of your daily life, identity, and future plans. Losing them means grieving your shared present and the life you imagined together, all at once.',
      },
      {
        q: 'Is it normal to feel lost after losing a partner?',
        a: 'Completely. Much of your identity and routine was built together. Feeling unanchored is a natural part of this profound loss, and it can ease with time and support.',
      },
    ],
    related: ['how-long-does-grief-last', 'grief-during-the-holidays'],
  },

  // --------------------------------------------------------------------------
  {
    slug: 'grief-and-relief',
    category: 'Grief',
    title: 'Grief and Relief: The Feelings No One Talks About',
    metaTitle: 'Grief and Relief: The Feelings No One Talks About | ColorMe',
    description:
      'Feeling relief after a death does not make you a bad person. An honest look at the messy, contradictory feelings of grief — relief, anger, numbness — and why they are normal.',
    keywords: [
      'grief and relief',
      'relief after death',
      'messy grief',
      'contradictory grief feelings',
      'feeling relieved after someone dies',
      'complicated feelings grief',
    ],
    image: '/duelo-sucio-alivio.webp',
    imageAlt: 'Grief and relief — the messy, contradictory feelings no one talks about',
    datePublished: '2026-07-30',
    readingTime: '5 min read',
    content: [
      {
        type: 'p',
        text: 'We are taught that grief looks like sadness and tears. But real grief is far messier than that. It can include relief, anger, numbness, even moments of laughter — sometimes all in the same hour. If your grief does not look “right,” you are not broken. You are human.',
      },
      { type: 'h2', text: 'The relief no one admits to' },
      {
        type: 'p',
        text: 'After a long illness, a difficult relationship, or an exhausting caregiving journey, relief is common — relief that the suffering is over, that the waiting has ended, that you can breathe again. And almost always, relief comes bundled with guilt. But relief is not a betrayal of love. It is a natural response to the end of pain.',
      },
      {
        type: 'quote',
        text: 'You can be heartbroken and relieved at the same time. Grief is big enough to hold both.',
      },
      { type: 'h2', text: 'The other “unacceptable” feelings' },
      {
        type: 'ul',
        items: [
          'Anger — at the person, the doctors, yourself, or the unfairness of it all.',
          'Numbness — feeling nothing when you expected to fall apart.',
          'Guilt — for laughing, for relief, for beginning to heal.',
          'Ambivalence — grieving someone who also hurt you.',
        ],
      },
      { type: 'h2', text: 'Why the mess is normal' },
      {
        type: 'p',
        text: 'Human relationships are complicated, so our grief is too. We rarely feel just one clean emotion about anyone. Allowing the full, contradictory truth of what you feel — without judging it — is not a detour from healing. It is the path.',
      },
      { type: 'h2', text: 'Giving the feelings somewhere to go' },
      {
        type: 'p',
        text: 'Contradictory feelings are hard to say out loud. Art gives them a place to exist without needing to explain or defend them — a page of color for the tangle, an image of the relief and the sorrow side by side. And if the mess feels like too much to hold alone, support can help you make sense of it.',
      },
    ],
    faq: [
      {
        q: 'Is it normal to feel relief when someone dies?',
        a: 'Yes. After a long illness, caregiving, or a difficult relationship, relief is a natural response to the end of suffering. It does not mean you loved the person any less.',
      },
      {
        q: 'Why do I feel numb instead of sad?',
        a: 'Numbness is a common protective response, especially early in grief or after shock. Feeling little or nothing does not mean you did not care — it is your mind buffering the pain.',
      },
      {
        q: 'Can you grieve someone who hurt you?',
        a: 'Yes. Grief over a complicated relationship is often tangled with anger, relief, and love all at once. These contradictory feelings are normal and valid.',
      },
    ],
    related: ['grief-and-guilt', 'seven-stages-of-grief'],
  },
]

export function getEnArticle(slug: string): EnArticle | undefined {
  return enArticles.find((a) => a.slug === slug)
}

export function allEnSlugs(): string[] {
  return enArticles.map((a) => a.slug)
}
