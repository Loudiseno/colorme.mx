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
]

export function getEnArticle(slug: string): EnArticle | undefined {
  return enArticles.find((a) => a.slug === slug)
}

export function allEnSlugs(): string[] {
  return enArticles.map((a) => a.slug)
}
