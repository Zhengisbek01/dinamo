const GALLERY_ITEMS = [
  { label: 'Тренировки', span: 'sm:col-span-2 sm:row-span-2' },
  { label: 'Стадион', span: '' },
  { label: 'Футбол', span: '' },
  { label: 'Залы', span: '' },
  { label: 'Соревнования', span: 'sm:col-span-2' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <p className="section-eyebrow text-crimson text-sm mb-3">ГАЛЕРЕЯ</p>
        <h2 className="font-display text-ink text-4xl md:text-5xl leading-[0.95] mb-12">
          ЖИЗНЬ КОМПЛЕКСА
        </h2>

        <div className="grid sm:grid-cols-4 auto-rows-[160px] gap-4">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.label}
              className={`relative bg-navy overflow-hidden flex items-end p-5 ${item.span}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-navy-light to-navy-deep" />
              <div className="absolute inset-0 bg-stripe-diagonal opacity-[0.05]" />
              <span className="relative font-display text-white text-xl tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
