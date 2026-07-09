export default function Contacts() {
  return (
    <section id="contacts" className="bg-navy py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <p className="section-eyebrow text-crimson text-sm mb-3">КОНТАКТЫ</p>
          <h2 className="font-display text-white text-4xl md:text-5xl leading-[0.95] mb-6">
            ПРИХОДИТЕ НА ТРЕНИРОВКУ
          </h2>
          <p className="text-white/70 text-lg mb-8">
            г. Алматы, ул. Наурызбай батыра, 93–95 / ул. Шевченко
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/77000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:opacity-90 text-white font-semibold px-6 py-3 transition-opacity"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90 text-white font-semibold px-6 py-3 transition-opacity"
            >
              Instagram
            </a>
            <a
              href="tel:+77000000000"
              className="inline-flex items-center gap-2 bg-crimson hover:bg-crimson-dark text-white font-semibold px-6 py-3 transition-colors"
            >
              Позвонить
            </a>
            <a
              href="https://2gis.kz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-6 py-3 transition-colors"
            >
              Построить маршрут
            </a>
          </div>

          <p className="text-white/40 text-sm mt-6">
            Расписание и стоимость — уточняйте у администрации.
          </p>
        </div>

        {/* место под карту 2GIS / Google Maps */}
        <div className="min-h-[320px] bg-navy-deep border border-white/10 flex items-center justify-center">
          <span className="text-white/40 text-sm text-center px-6">
            Здесь будет встроена карта 2GIS или Google Maps
            <br />
            (ул. Наурызбай батыра, 93–95 / ул. Шевченко)
          </span>
        </div>
      </div>
    </section>
  )
}
