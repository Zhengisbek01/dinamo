const AUDIENCE = [
  'Для детей',
  'Для подростков',
  'Для взрослых',
  'Для спортивных команд',
  'Для тренеров',
  'Для организаций и компаний',
]

export default function Audience() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <p className="section-eyebrow text-crimson text-sm mb-3">ДЛЯ КОГО</p>
        <h2 className="font-display text-ink text-4xl md:text-5xl leading-[0.95] mb-12">
          КОМПЛЕКС ОТКРЫТ ДЛЯ ВСЕХ
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AUDIENCE.map((item) => (
            <div
              key={item}
              className="bg-navy px-6 py-8 text-center font-display text-white text-2xl tracking-wide hover:bg-navy-light transition-colors"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
