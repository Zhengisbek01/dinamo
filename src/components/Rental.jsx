const RENTAL_OPTIONS = [
  'Аренда стадиона',
  'Аренда футбольного поля',
  'Аренда спортивного зала',
  'Аренда для турниров и мероприятий',
  'Аренда для корпоративного спорта',
  'Аренда для индивидуальных тренировок',
]

export default function Rental() {
  return (
    <section id="rental" className="relative bg-navy py-16 md:py-24 overflow-hidden">
      <div className="pointer-events-none absolute -left-32 bottom-0 w-[380px] h-[380px] bg-stripe-diagonal opacity-[0.06] -rotate-12" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-12">
          <p className="section-eyebrow text-crimson text-sm mb-3">АРЕНДА ПЛОЩАДОК</p>
          <h2 className="font-display text-white text-4xl md:text-5xl leading-[0.95] mb-5">
            СТАДИОН И ЗАЛЫ В АРЕНДУ
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            ФК Динамо предоставляет стадион, футбольные поля, спортивные залы и
            тренировочные пространства в аренду для команд, тренеров,
            спортивных школ, организаций и частных групп.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {RENTAL_OPTIONS.map((item) => (
            <div
              key={item}
              className="bg-navy-deep p-6 hover:bg-navy-light transition-colors flex items-center gap-4"
            >
              <span className="w-2 h-8 bg-crimson shrink-0" />
              <span className="text-white font-semibold text-lg">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="#contacts"
            className="inline-flex items-center bg-crimson hover:bg-crimson-dark text-white font-display text-xl tracking-wider px-8 py-4 transition-colors"
          >
            Уточнить свободное время
          </a>
        </div>
      </div>
    </section>
  )
}
