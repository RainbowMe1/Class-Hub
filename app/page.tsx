"use client";

import { useState } from "react";
import {
  Bell, Home, ClipboardCheck, CalendarDays, Users, UserRound,
  ChevronRight, Clock3, MapPin, Megaphone, Trophy, BookOpen,
  CheckCircle2, Circle, Menu, X, Settings, LogOut
} from "lucide-react";

const nav = [
  { id: "home", label: "Home", icon: Home },
  { id: "tasks", label: "Tugas", icon: ClipboardCheck },
  { id: "events", label: "Event", icon: CalendarDays },
  { id: "class", label: "Kelas", icon: Users },
  { id: "profile", label: "Profil", icon: UserRound },
];

const tasks = [
  { title: "UI/UX Landing Page", subject: "PPLG", due: "Hari ini", status: "urgent" },
  { title: "Database MySQL", subject: "Basis Data", due: "Besok", status: "normal" },
  { title: "Presentasi Kelompok", subject: "Bahasa Indonesia", due: "08 Agu", status: "normal" },
];

export default function HomePage() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const current = nav.find((n) => n.id === active);

  return (
    <main className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <div>
          <div className="brand">Class<span>Space</span></div>
          <div className="class-label">XI PPLG 2 · 2026/2027</div>
        </div>

        <div className="top-actions">
          <button className="icon-btn notification" aria-label="Notifikasi">
            <Bell size={20} />
            <i />
          </button>
          <button className="icon-btn desktop-only" aria-label="Pengaturan">
            <Settings size={20} />
          </button>
          <button className="icon-btn mobile-only" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          <button><Settings size={17}/> Pengaturan</button>
          <button><LogOut size={17}/> Keluar</button>
        </div>
      )}

      <section className="hero-card">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">CLASS OVERVIEW</span>
            <h1>Halo, KDMR 👋</h1>
            <p>Ini pusat informasi kelasmu. Semua yang penting, tanpa ritual mencari chat lama.</p>

            <div className="hero-actions">
              <button className="primary-btn" onClick={() => setActive("tasks")}>
                Lihat Tugas <ChevronRight size={18}/>
              </button>
              <button className="ghost-btn" onClick={() => setActive("class")}>
                Daftar Siswa
              </button>
            </div>
          </div>

          <div className="hero-stat">
            <div className="stat-ring">
              <strong>78%</strong>
              <span>Progress</span>
            </div>
            <div className="mini-stats">
              <div><b>32</b><span>Siswa</span></div>
              <div><b>06</b><span>Tugas</span></div>
              <div><b>03</b><span>Event</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-head">
        <div>
          <span className="eyebrow">TODAY</span>
          <h2>Aktivitas hari ini</h2>
        </div>
        <button className="text-btn" onClick={() => setActive("events")}>Lihat semua <ChevronRight size={16}/></button>
      </section>

      <section className="today-grid">
        <article className="panel schedule-card">
          <div className="panel-title"><span className="panel-icon cyan"><Clock3 size={18}/></span><b>Jadwal berikutnya</b></div>
          <div className="schedule-time">10:15</div>
          <h3>Pemrograman Web</h3>
          <div className="muted-row"><MapPin size={15}/> Lab Komputer 2</div>
          <div className="schedule-line"><span>Mulai dalam 35 menit</span><span className="live-dot">LIVE SOON</span></div>
        </article>

        <article className="panel announcement-card">
          <div className="panel-title"><span className="panel-icon gold"><Megaphone size={18}/></span><b>Pengumuman</b></div>
          <h3>Pengumpulan tugas UI/UX</h3>
          <p>Deadline hari ini pukul 23:59. Jangan menunggu sampai laptopmu ikut menyerah.</p>
          <button className="outline-btn" onClick={() => setActive("tasks")}>Buka tugas <ChevronRight size={16}/></button>
        </article>
      </section>

      <section className="section-head task-head">
        <div>
          <span className="eyebrow">WORKSPACE</span>
          <h2>Tugas mendatang</h2>
        </div>
        <button className="text-btn" onClick={() => setActive("tasks")}>Semua tugas <ChevronRight size={16}/></button>
      </section>

      <section className="task-list">
        {tasks.map((task, i) => (
          <article className="task-row" key={task.title}>
            <div className={`task-icon ${task.status === "urgent" ? "urgent" : ""}`}>
              {task.status === "urgent" ? <Clock3 size={19}/> : <BookOpen size={19}/>}
            </div>
            <div className="task-info">
              <div className="task-subject">{task.subject}</div>
              <h3>{task.title}</h3>
            </div>
            <div className="task-due">
              <span className={task.status === "urgent" ? "urgent-text" : ""}>{task.due}</span>
              <small>Deadline</small>
            </div>
            <ChevronRight className="row-arrow" size={19}/>
          </article>
        ))}
      </section>

      <section className="section-head">
        <div>
          <span className="eyebrow">CLASS PULSE</span>
          <h2>Aktivitas kelas</h2>
        </div>
      </section>

      <section className="activity-grid">
        <article className="activity-card">
          <div className="activity-icon cyan"><CheckCircle2 size={19}/></div>
          <div><b>Raka menyelesaikan tugas</b><span>Database MySQL · 12 menit lalu</span></div>
        </article>
        <article className="activity-card">
          <div className="activity-icon gold"><Trophy size={19}/></div>
          <div><b>Leaderboard diperbarui</b><span>Top 3 siswa minggu ini · 1 jam lalu</span></div>
        </article>
      </section>

      <div className="bottom-nav">
        {nav.map((item) => {
          const Icon = item.icon;
          return (
            <button key={item.id} className={active === item.id ? "active" : ""} onClick={() => setActive(item.id)}>
              <Icon size={20}/>
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      <div className="page-toast">
        <span className="toast-dot" />
        <span>{current?.label || "Home"} aktif</span>
      </div>
    </main>
  );
}