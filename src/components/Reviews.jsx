const REVIEWS = [
  {
    role: 'Родитель ученика секции',
    text: 'Сын занимается футболом уже несколько месяцев — виден прогресс и в технике, и в дисциплине. Удобно, что комплекс в центре города, легко забирать после занятий.',
  },
  {
    role: 'Спортсмен, секция бокса',
    text: 'Хорошее покрытие, оборудование в порядке, тренировки построены грамотно. Атмосфера рабочая, никто не отвлекает.',
  },
  {
    role: 'Представитель арендатора',
    text: 'Арендовали зал для корпоративного турнира — организация на уровне, с бронированием и площадкой проблем не было.',
  },
]

export default function Reviews() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <p className="section-eyebrow text-crimson text-sm mb-3">ОТЗЫВЫ</p>
        <h2 className="font-display text-ink text-4xl md:text-5xl leading-[0.95] mb-12">
          ЧТО ГОВОРЯТ О НАС
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div key={review.role} className="bg-white p-7 border-t-4 border-crimson">
              <p className="text-ink leading-relaxed mb-5">«{review.text}»</p>
              <p className="text-muted text-sm font-semibold uppercase tracking-wide">
                {review.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
