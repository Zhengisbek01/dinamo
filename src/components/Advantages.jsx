const ADVANTAGES = [
  'Удобная локация в центре Алматы',
  'Разные спортивные направления в одном месте',
  'Площадки для тренировок, матчей и мероприятий',
  'Подходит для детей, взрослых, команд и организаций',
  'Возможность аренды стадиона и залов',
  'Спортивная атмосфера и развитая инфраструктура',
]

export default function Advantages() {
  return (
    <section id="advantages" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <p className="section-eyebrow text-crimson text-sm mb-3 text-center">ПОЧЕМУ ВЫБИРАЮТ НАС</p>
        <h2 className="font-display text-ink text-4xl md:text-5xl leading-[0.95] text-center mb-12">
          ШЕСТЬ ПРИЧИН ТРЕНИРОВАТЬСЯ С НАМИ
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADVANTAGES.map((item, i) => (
            <div key={item} className="flex gap-4">
              <span className="font-display text-crimson text-4xl leading-none shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-ink font-semibold text-lg leading-snug pt-1 border-l-2 border-surface pl-4">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
