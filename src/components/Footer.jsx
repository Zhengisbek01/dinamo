export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 bg-crimson flex items-center justify-center font-display text-white text-lg skew-x-[-8deg]">
            Д
          </span>
          <span className="font-display text-white text-lg tracking-widest">
            ФК ДИНАМО АЛМАТЫ
          </span>
        </div>

        <p className="text-white/50 text-sm text-center">
          г. Алматы, ул. Наурызбай батыра, 93–95 / ул. Шевченко
        </p>

        <div className="flex items-center gap-5">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm font-semibold">
            Instagram
          </a>
          <a href="https://wa.me/77000000000" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm font-semibold">
            WhatsApp
          </a>
        </div>
      </div>
      <p className="text-white/30 text-xs text-center mt-6">
        © {new Date().getFullYear()} ФК Динамо Алматы. Все права защищены.
      </p>
    </footer>
  )
}
