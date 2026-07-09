const DISCIPLINES = [
  {
    title: 'Футбол',
    text: 'Групповые тренировки на футбольном поле для детей и взрослых, подготовка к матчам и турнирам.',
  },
  {
    title: 'Лёгкая атлетика',
    text: 'Базовая физическая подготовка, техника бега и прыжков для начинающих и продолжающих.',
  },
  {
    title: 'Беговые тренировки',
    text: 'Кардионагрузка и выносливость для тех, кто готовится к дистанциям или держит форму.',
  },
  {
    title: 'Бокс',
    text: 'Постановка техники удара, работа на снарядах, физическая и функциональная подготовка.',
  },
  {
    title: 'Рукопашный бой / единоборства',
    text: 'Комплексная подготовка: ударная техника, борьба, самооборона для разных возрастов.',
  },
  {
    title: 'Фехтование',
    text: 'Техника владения оружием, координация и реакция под руководством тренера.',
  },
  {
    title: 'Индивидуальные и групповые тренировки',
    text: 'Персональные программы и занятия в малых группах под конкретные цели.',
  },
]

export default function Sections() {
  return (
    <section id="sections" className="bg-surface py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="section-eyebrow text-crimson text-sm mb-3">СПОРТИВНЫЕ НАПРАВЛЕНИЯ</p>
            <h2 className="font-display text-ink text-4xl md:text-5xl leading-[0.95]">
              СЕКЦИИ ДЛЯ ДЕТЕЙ И ВЗРОСЛЫХ
            </h2>
          </div>
          <a
            href="#contacts"
            className="text-crimson font-semibold hover:text-crimson-dark transition-colors whitespace-nowrap"
          >
            Записаться на пробное занятие →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DISCIPLINES.map((item, i) => (
            <div
              key={item.title}
              className="group bg-white border border-black/5 p-6 hover:border-crimson/40 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-crimson/5 group-hover:bg-crimson/10 transition-colors" />
              <span className="font-display text-ink/10 text-5xl absolute top-3 right-4 select-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-2xl text-ink mb-2 relative">{item.title}</h3>
              <p className="text-muted leading-relaxed relative">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
