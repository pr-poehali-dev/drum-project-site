import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const IMAGES = {
  hero: "https://cdn.poehali.dev/projects/4f266be1-2157-4985-853c-0dd5d9225615/files/e1a48abe-dc73-4933-ac82-85d8a93c5287.jpg",
  performer: "https://cdn.poehali.dev/projects/4f266be1-2157-4985-853c-0dd5d9225615/files/88aa0c57-7354-4f5a-a652-d16fa1745418.jpg",
  cymbals: "https://cdn.poehali.dev/projects/4f266be1-2157-4985-853c-0dd5d9225615/files/40a155c0-f3b2-4d44-b532-2e812a5ca6ec.jpg",
};

const PROJECTS = [
  {
    id: 1,
    title: "Jazz Collective",
    style: "Джаз",
    year: "2024",
    desc: "Камерный ансамбль с живой импровизацией. Тонкое взаимодействие щётки и тарелок в традициях Арт Блэки.",
    videoId: "BcBr2JLIYFE",
    color: "#C8952A",
  },
  {
    id: 2,
    title: "Fusion Project",
    style: "Фьюжн",
    year: "2024",
    desc: "Слияние джаза, рока и этнических ритмов. Полиметрия и нестандартные размеры.",
    videoId: "V84VEbFXYAA",
    color: "#A05080",
  },
  {
    id: 3,
    title: "Rock Session",
    style: "Рок",
    year: "2023",
    desc: "Мощный живой саунд с плотным звуком бас-бочки и агрессивными флэмами на малом барабане.",
    videoId: "nrIPxlFzDi0",
    color: "#5080C0",
  },
  {
    id: 4,
    title: "Electronic Beats",
    style: "Электро",
    year: "2023",
    desc: "Акустический набор в диалоге с электроникой. Триггеры, семплы и живая игра.",
    videoId: "3GwjfUFyY6M",
    color: "#40A080",
  },
];

const PORTFOLIO_STATS = [
  { label: "Студийных записей", value: "120+" },
  { label: "Живых концертов", value: "340+" },
  { label: "Стилей и жанров", value: "12" },
  { label: "Лет опыта", value: "18" },
];

const GALLERY_VIDEOS = [
  { id: "BcBr2JLIYFE", title: "Jazz Brush Technique", tag: "Джаз" },
  { id: "V84VEbFXYAA", title: "Fusion Polyrhythms", tag: "Фьюжн" },
  { id: "nrIPxlFzDi0", title: "Rock Power Grooves", tag: "Рок" },
  { id: "3GwjfUFyY6M", title: "Electronic Hybrid", tag: "Электро" },
  { id: "BcBr2JLIYFE", title: "Урок: Свинг", tag: "Обучение" },
  { id: "V84VEbFXYAA", title: "Урок: Полиметрия", tag: "Обучение" },
];

const NAV_ITEMS = [
  { label: "Главная", href: "#home" },
  { label: "Проекты", href: "#projects" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Галерея", href: "#gallery" },
  { label: "Контакты", href: "#contacts" },
];

function useScrollActive() {
  const [active, setActive] = useState("#home");
  useEffect(() => {
    const handler = () => {
      const sections = ["home", "projects", "portfolio", "gallery", "contacts"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return active;
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const activeSection = useScrollActive();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ background: "#0D0D0D", color: "#E8DFD0" }}>

      {/* ─── NAV ─── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12"
        style={{
          height: "72px",
          background: "rgba(13,13,13,0.92)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(212,160,23,0.1)",
        }}
      >
        <a href="#home" className="font-display text-xl tracking-widest" style={{ color: "#D4A017" }}>
          DRUM<span style={{ color: "#E8DFD0", opacity: 0.7 }}>LAB</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              style={{ color: activeSection === item.href ? "#D4A017" : undefined }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden"
          style={{ color: "#D4A017", background: "none", border: "none" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: "rgba(13,13,13,0.98)" }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-3xl tracking-widest uppercase"
              style={{ color: "#E8DFD0" }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* ─── HERO ─── */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${IMAGES.hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            filter: "brightness(0.22) saturate(0.5)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 60%, rgba(212,160,23,0.07) 0%, transparent 70%), linear-gradient(180deg, rgba(13,13,13,0.2) 0%, rgba(13,13,13,0.75) 100%)",
          }}
        />
        <div
          className="absolute"
          style={{
            left: "7%", top: "12%", width: "1px", height: "35%",
            background: "linear-gradient(180deg, transparent, #D4A017, transparent)",
            opacity: 0.3,
          }}
        />
        <div
          className="absolute"
          style={{
            right: "7%", bottom: "12%", width: "1px", height: "30%",
            background: "linear-gradient(180deg, transparent, #D4A017, transparent)",
            opacity: 0.25,
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="section-tag animate-fade-up animate-delay-1 mb-6">
            Барабанные проекты · Разные стили
          </div>
          <h1
            className="font-display animate-fade-up animate-delay-2"
            style={{
              fontSize: "clamp(3.5rem, 11vw, 9rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.01em",
              fontWeight: 700,
            }}
          >
            DRUM<br />
            <span style={{ color: "#D4A017" }}>LAB</span>
          </h1>
          <p
            className="font-body animate-fade-up animate-delay-3 mt-8 mx-auto"
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              color: "#8A7868",
              maxWidth: "460px",
              lineHeight: 1.75,
              fontWeight: 300,
            }}
          >
            Живая игра, студийный звук и педагогика —<br />
            от джаза до электронного фьюжна
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 animate-fade-up animate-delay-4">
            <a href="#projects" className="btn-gold">Смотреть проекты</a>
            <a href="#contacts" className="btn-outline-gold">Связаться</a>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: 0.35 }}
        >
          <span className="section-tag" style={{ fontSize: "0.55rem", letterSpacing: "0.25em" }}>Scroll</span>
          <Icon name="ChevronDown" size={14} style={{ color: "#D4A017" }} />
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="section-tag mb-3">02 · Проекты</div>
          <h2 className="font-display text-5xl md:text-6xl" style={{ letterSpacing: "-0.01em" }}>
            МУЗЫКАЛЬНЫЕ<br />
            <span style={{ color: "#D4A017" }}>ПРОЕКТЫ</span>
          </h2>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="project-card"
              style={{ borderRadius: "2px" }}
            >
              <div className="video-frame">
                <iframe
                  src={`https://www.youtube.com/embed/${proj.videoId}?rel=0&modestbranding=1&color=white`}
                  title={proj.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="style-badge" style={{ borderColor: proj.color, color: proj.color }}>
                    {proj.style}
                  </span>
                  <span className="font-display text-xs tracking-widest" style={{ color: "#6A5A4A" }}>
                    {proj.year}
                  </span>
                </div>
                <h3 className="font-display text-2xl mt-3 mb-2" style={{ letterSpacing: "0.04em" }}>
                  {proj.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#706050", fontWeight: 300 }}>
                  {proj.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PORTFOLIO ─── */}
      <section id="portfolio" className="py-24 relative overflow-hidden" style={{ background: "#141414" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${IMAGES.performer})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.05,
            filter: "saturate(0)",
          }}
        />

        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="section-tag mb-3">03 · Портфолио</div>
            <h2 className="font-display text-5xl md:text-6xl" style={{ letterSpacing: "-0.01em" }}>
              В ЦИФРАХ И<br />
              <span style={{ color: "#D4A017" }}>ФАКТАХ</span>
            </h2>
            <div className="gold-divider mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-20" style={{ background: "rgba(212,160,23,0.08)" }}>
            {PORTFOLIO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-12 px-6 text-center"
                style={{ background: "#141414" }}
              >
                <div
                  className="font-display"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#D4A017", lineHeight: 1 }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-body mt-3 text-xs uppercase tracking-widest"
                  style={{ color: "#6A5A4A" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-2xl mb-6" style={{ color: "#D4A017" }}>Стили и жанры</h3>
              <div className="space-y-4">
                {[
                  { name: "Джаз / Свинг", pct: 90 },
                  { name: "Рок / Хард-рок", pct: 85 },
                  { name: "Фьюжн", pct: 80 },
                  { name: "Электронный / Гибридный", pct: 70 },
                  { name: "Латин / Самба", pct: 65 },
                  { name: "Прогрессивный рок", pct: 75 },
                ].map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="font-body text-sm" style={{ color: "#8A7868" }}>{item.name}</span>
                      <span className="font-display text-xs" style={{ color: "#D4A017" }}>{item.pct}%</span>
                    </div>
                    <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <div
                        className="h-full"
                        style={{ width: `${item.pct}%`, background: "linear-gradient(90deg, #D4A017, #8A6010)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl mb-6" style={{ color: "#D4A017" }}>Дискография</h3>
              <div className="space-y-1">
                {[
                  { title: "Nocturne Sessions", year: "2024", label: "Студийный альбом" },
                  { title: "Live at Studio 7", year: "2023", label: "Живое выступление" },
                  { title: "Hybrid Rhythms", year: "2023", label: "EP / Электро" },
                  { title: "Jazz Conversations", year: "2022", label: "Коллаборация" },
                  { title: "Percussion Works", year: "2021", label: "Сольный проект" },
                ].map((album) => (
                  <div
                    key={album.title}
                    className="flex items-center justify-between py-4"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                  >
                    <div>
                      <div className="font-display text-base" style={{ letterSpacing: "0.04em" }}>
                        {album.title}
                      </div>
                      <div className="font-body text-xs mt-0.5" style={{ color: "#6A5A4A" }}>
                        {album.label}
                      </div>
                    </div>
                    <span className="font-display text-sm" style={{ color: "#D4A017", opacity: 0.6 }}>
                      {album.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GALLERY ─── */}
      <section id="gallery" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="section-tag mb-3">04 · Галерея</div>
          <h2 className="font-display text-5xl md:text-6xl" style={{ letterSpacing: "-0.01em" }}>
            ВИДЕО И<br />
            <span style={{ color: "#D4A017" }}>ПЕРФОРМАНСЫ</span>
          </h2>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-12">
          <div className="gallery-item md:row-span-2" style={{ height: "460px" }}>
            <img src={IMAGES.hero} alt="Студия" className="w-full h-full object-cover" />
            <div className="gallery-overlay" />
          </div>
          <div className="gallery-item" style={{ height: "220px" }}>
            <img src={IMAGES.performer} alt="Перформанс" className="w-full h-full object-cover" />
            <div className="gallery-overlay" />
          </div>
          <div className="gallery-item" style={{ height: "220px" }}>
            <img src={IMAGES.cymbals} alt="Тарелки" className="w-full h-full object-cover" />
            <div className="gallery-overlay" />
          </div>
          <div className="gallery-item" style={{ height: "220px" }}>
            <img
              src={IMAGES.cymbals}
              alt="Детали"
              className="w-full h-full object-cover"
              style={{ filter: "saturate(0.4)" }}
            />
            <div className="gallery-overlay" />
          </div>
          <div className="gallery-item" style={{ height: "220px" }}>
            <img
              src={IMAGES.performer}
              alt="Концерт"
              className="w-full h-full object-cover"
              style={{ filter: "hue-rotate(25deg) saturate(0.6)" }}
            />
            <div className="gallery-overlay" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_VIDEOS.map((video, i) => (
            <div key={i} className="project-card" style={{ borderRadius: "2px" }}>
              <div className="video-frame">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div
                className="px-4 py-3 flex items-center justify-between"
                style={{ borderTop: "1px solid rgba(212,160,23,0.1)" }}
              >
                <span className="font-body text-sm" style={{ color: "#8A7868", fontWeight: 300 }}>
                  {video.title}
                </span>
                <span className="style-badge" style={{ fontSize: "0.6rem" }}>{video.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CONTACTS ─── */}
      <section id="contacts" className="py-24 relative overflow-hidden" style={{ background: "#141414" }}>
        <div
          className="absolute bottom-0 right-0 w-1/2 h-full pointer-events-none"
          style={{
            backgroundImage: `url(${IMAGES.cymbals})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.04,
            filter: "saturate(0)",
          }}
        />

        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="section-tag mb-3">05 · Контакты</div>
            <h2 className="font-display text-5xl md:text-6xl" style={{ letterSpacing: "-0.01em" }}>
              ДАВАЙТЕ<br />
              <span style={{ color: "#D4A017" }}>РАБОТАТЬ</span>
            </h2>
            <div className="gold-divider mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p
                className="font-body mb-10 leading-relaxed"
                style={{ color: "#706050", maxWidth: "400px", fontWeight: 300, fontSize: "1.05rem" }}
              >
                Студийные сессии, живые выступления, преподавание —
                напишите и обсудим ваш проект.
              </p>

              <div className="space-y-6">
                {[
                  { icon: "Mail", label: "Email", value: "info@drumlab.ru" },
                  { icon: "Phone", label: "Телефон", value: "+7 (999) 000-00-00" },
                  { icon: "MapPin", label: "Город", value: "Москва, студия центр" },
                  { icon: "Music", label: "Instagram", value: "@drumlab_official" },
                ].map((contact) => (
                  <div key={contact.label} className="flex items-center gap-4">
                    <div
                      className="flex items-center justify-center flex-shrink-0"
                      style={{
                        width: "40px", height: "40px",
                        border: "1px solid rgba(212,160,23,0.25)",
                      }}
                    >
                      <Icon name={contact.icon} fallback="Mail" size={15} style={{ color: "#D4A017" }} />
                    </div>
                    <div>
                      <div
                        className="font-display uppercase"
                        style={{ color: "#6A5A4A", fontSize: "0.62rem", letterSpacing: "0.2em" }}
                      >
                        {contact.label}
                      </div>
                      <div className="font-body text-sm mt-0.5" style={{ color: "#B8A888" }}>
                        {contact.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {submitted ? (
                <div
                  className="flex flex-col items-center justify-center text-center py-16"
                  style={{ border: "1px solid rgba(212,160,23,0.2)", minHeight: "360px" }}
                >
                  <Icon name="CheckCircle" size={40} style={{ color: "#D4A017" }} />
                  <h3 className="font-display text-2xl mt-5 mb-3">Сообщение отправлено</h3>
                  <p className="font-body text-sm" style={{ color: "#706050" }}>
                    Свяжусь с вами в ближайшее время
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    className="input-dark"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <input
                    className="input-dark"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <textarea
                    className="input-dark"
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    style={{ resize: "none" }}
                  />
                  <button type="submit" className="btn-gold" style={{ width: "100%" }}>
                    Отправить сообщение
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer
        className="py-10 px-6 md:px-12"
        style={{
          background: "#0D0D0D",
          borderTop: "1px solid rgba(212,160,23,0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-lg tracking-widest" style={{ color: "#D4A017" }}>
            DRUM<span style={{ color: "#E8DFD0", opacity: 0.4 }}>LAB</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-display text-xs tracking-widest uppercase"
                style={{ color: "#3A2A1A" }}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="font-body text-xs" style={{ color: "#3A2A1A" }}>
            © 2024 DRUMLAB
          </div>
        </div>
      </footer>

    </div>
  );
}