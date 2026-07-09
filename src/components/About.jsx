export default function About() {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-4">
          <p className="section-eyebrow text-crimson text-sm mb-3">О КОМПЛЕКСЕ</p>
          <h2 className="font-display text-ink text-4xl md:text-5xl leading-[0.95]">
            ПРОСТРАНСТВО ДЛЯ СПОРТА В СЕРДЦЕ ГОРОДА
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="text-muted text-lg leading-relaxed">
            ФК Динамо Алматы — это спортивный комплекс, где проходят тренировки,
            секции, матчи, турниры, корпоративные спортивные мероприятия и
            индивидуальные занятия. Мы объединили несколько направлений спорта
            и площадки разного формата на одной территории — от футбольного
            поля до тренировочного зала.
          </p>
          <p className="text-muted text-lg leading-relaxed mt-4">
            Комплекс подходит и для регулярных занятий детей и взрослых, и для
            разовой аренды команд, тренеров и организаций, которым нужна
            качественная площадка в центре Алматы.
          </p>
        </div>
      </div>
    </section>
  )
}
