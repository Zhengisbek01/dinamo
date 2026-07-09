import { useState } from 'react'

const FAQ_ITEMS = [
  {
    q: 'Какие секции есть в ФК Динамо?',
    a: 'Футбол, лёгкая атлетика, беговые тренировки, бокс, рукопашный бой и единоборства, фехтование, а также индивидуальные и групповые тренировки.',
  },
  {
    q: 'Можно ли арендовать стадион?',
    a: 'Да, стадион доступен для аренды командам, тренерам, спортивным школам и организациям. Расписание уточняйте у администрации.',
  },
  {
    q: 'Есть ли аренда спортивных залов?',
    a: 'Да, залы можно арендовать для тренировок, турниров и корпоративных мероприятий.',
  },
  {
    q: 'Как записаться на тренировку?',
    a: 'Оставьте заявку через WhatsApp, Instagram или по телефону — администратор подберёт удобную секцию и время.',
  },
  {
    q: 'Где находится ФК Динамо?',
    a: 'г. Алматы, ул. Наурызбай батыра, 93–95 / ул. Шевченко.',
  },
  {
    q: 'Можно ли проводить турниры и корпоративные мероприятия?',
    a: 'Да, комплекс подходит для проведения турниров, соревнований и корпоративных спортивных мероприятий.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <p className="section-eyebrow text-crimson text-sm mb-3">FAQ</p>
        <h2 className="font-display text-ink text-4xl md:text-5xl leading-[0.95] mb-12">
          ЧАСТЫЕ ВОПРОСЫ
        </h2>

        <div className="divide-y divide-black/10 border-t border-b border-black/10">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.q}>
                <button
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-ink text-lg">{item.q}</span>
                  <span
                    className={`shrink-0 font-display text-2xl text-crimson transition-transform ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="text-muted leading-relaxed pb-5 pr-8">{item.a}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
