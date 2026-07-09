import { useState } from 'react'

const NAV_LINKS = [
  { href: '#about', label: 'О нас' },
  { href: '#sections', label: 'Секции' },
  { href: '#rental', label: 'Аренда' },
  { href: '#advantages', label: 'Преимущества' },
  { href: '#gallery', label: 'Галерея' },
  { href: '#contacts', label: 'Контакты' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="w-9 h-9 md:w-10 md:h-10 bg-crimson flex items-center justify-center font-display text-white text-xl skew-x-[-8deg]">
            Д
          </span>
          <span className="font-display text-white text-xl md:text-2xl tracking-widest leading-none">
            ФК ДИНАМО <span className="text-crimson">АЛМАТЫ</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white text-sm font-semibold uppercase tracking-wide transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contacts"
            className="inline-flex items-center bg-crimson hover:bg-crimson-dark text-white font-display text-lg tracking-wider px-6 py-2.5 skew-x-[-6deg] transition-colors"
          >
            <span className="skew-x-[6deg]">Записаться</span>
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <div className="w-6 h-0.5 bg-white mb-1.5" />
          <div className="w-6 h-0.5 bg-white mb-1.5" />
          <div className="w-6 h-0.5 bg-white" />
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-navy-deep border-t border-white/10 px-5 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/90 text-base font-semibold uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacts"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center bg-crimson text-white font-display text-lg tracking-wider px-6 py-3"
          >
            Записаться
          </a>
        </nav>
      )}
    </header>
  )
}
