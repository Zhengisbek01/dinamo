const STATS = [
  { value: '7+', label: 'спортивных направлений' },
  { value: '1', label: 'стадион в центре города' },
  { value: 'Дети', label: 'и взрослые группы' },
  { value: '7', label: 'дней в неделю' },
]

export default function Hero() {
  return (
    <section id="top" className="relative bg-navy pt-16 md:pt-20 overflow-hidden">
      {/* сигнатурная диагональная полоса — угловой флаг стадиона */}
      <div className="pointer-events-none absolute -right-24 -top-24 w-[420px] h-[420px] bg-stripe-diagonal opacity-[0.08] rotate-12" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-navy/0 to-navy-deep/60" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-14 pb-16 md:pt-24 md:pb-24">
        <p className="section-eyebrow text-crimson text-sm md:text-base mb-4">
          НАУРЫЗБАЙ БАТЫРА, 93–95 / ШЕВЧЕНКО
        </p>

        <h1 className="font-display text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl">
          СПОРТ, ТРЕНИРОВКИ И АРЕНДА ПЛОЩАДОК В ЦЕНТРЕ АЛМАТЫ
        </h1>

        <p className="mt-6 text-white/70 text-base md:text-lg max-w-2xl font-body leading-relaxed">
          Секции для детей и взрослых, футбольные поля, стадион, спортивные залы
          и тренировочные пространства ФК Динамо Алматы.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row gap-4">
          <a
            href="#sections"
            className="text-center bg-crimson hover:bg-crimson-dark text-white font-display text-xl tracking-wider px-8 py-4 transition-colors"
          >
            Записаться на тренировку
          </a>
          <a
            href="#rental"
            className="text-center border-2 border-white/30 hover:border-white text-white font-display text-xl tracking-wider px-8 py-4 transition-colors"
          >
            Арендовать площадку
          </a>
        </div>
      </div>

      {/* скорборд-полоса со статистикой */}
      <div className="relative border-t border-white/10 bg-navy-deep">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="font-display text-crimson text-3xl md:text-4xl leading-none">
                {stat.value}
              </div>
              <div className="text-white/60 text-xs md:text-sm mt-1 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
