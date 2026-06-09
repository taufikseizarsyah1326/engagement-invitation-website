"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Cover } from "@/components/cover"
import { Countdown } from "@/components/countdown"
import { RsvpForm } from "@/components/rsvp-form"
import { Reveal } from "@/components/reveal"
import { Ornament } from "@/components/ornament"


const MAPS_URL = "https://maps.app.goo.gl/r1XbEmtyo4LtH7UF7"

const timeline = [
  {
    time: "08.00 WIB",
    title: "Kedatangan keluarga CPW",
  },
  {
    time: "08.30 WIB",
    title: "Kedatangan keluarga CPP",
  },
  {
    time: "08.45 WIB",
    title: "Penyambutan keluarga CPP oleh keluarga CPW",
  },
  {
    time: "09.00 WIB",
    title: "Pembukaan acara dan pembacaan ayat suci Al-Qur'an",
  },
  {
    time: "09.15 WIB",
    title: "Sambutan dan penyampaian maksud serta tujuan dari pihak CPP",
  },
  {
    time: "09.25 WIB",
    title: "Sambutan penerimaan dari pihak CPW",
  },
  {
    time: "09.35 WIB",
    title: "Perkenalan keluarga CPP",
  },
  {
    time: "09.40 WIB",
    title: "Perkenalan keluarga CPW",
  },
  {
    time: "09.45 WIB",
    title: "Kehadiran calon pengantin wanita",
  },
  {
    time: "09.55 WIB",
    title: "Penyampaian lamaran oleh calon pengantin pria",
  },
  {
    time: "10.05 WIB",
    title: "Penyampaian jawaban lamaran oleh calon pengantin wanita",
  },
  {
    time: "10.15 WIB",
    title: "Prosesi pemasangan cincin",
  },
  {
    time: "10.20 WIB",
    title: "Dokumentasi cincin dan penyerahan seserahan",
  },
  {
    time: "10.30 WIB",
    title: "Harapan keluarga dan mini games pasangan",
  },
  {
    time: "10.45 WIB",
    title: "Doa bersama",
  },
  {
    time: "10.50 WIB",
    title: "Penutupan acara",
  },
  {
    time: "10.55 WIB",
    title: "Foto keluarga dan dokumentasi",
  },
  {
    time: "11.10 WIB",
    title: "Beauty shoot pasangan",
  },
  {
    time: "11.40 WIB",
    title: "Ramah tamah dan makan siang",
  },
]



function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <p className="font-sans text-xs uppercase tracking-[0.45em] text-accent">{eyebrow}</p>
      <h2 className="font-heading text-4xl font-medium leading-tight text-primary sm:text-5xl md:text-6xl text-balance">
        {title}
      </h2>
      <Ornament />
    </div>
  )
}

export default function Page() {
  const [opened, setOpened] = useState(false)
  const [playing, setPlaying] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)

  function handleOpen() {
  setOpened(true)

  setTimeout(() => {
    audioRef.current?.play()
    setPlaying(true)
  }, 300)

  requestAnimationFrame(() => {
    document.getElementById("invitation")?.scrollIntoView({
      behavior: "smooth",
    })
  })
}

function toggleMusic() {
  if (!audioRef.current) return

  if (playing) {
    audioRef.current.pause()
  } else {
    audioRef.current.play()
  }

  setPlaying(!playing)
}

  if (!opened) {
    return <Cover onOpen={handleOpen} />
  }

  return (
    <main className="bg-background text-foreground">
      <audio ref={audioRef} loop>
        <source src="/Canon D.mp3" type="audio/mpeg" />
      </audio>
      {/* Invitation intro */}
      <section
        id="invitation"
        className="relative overflow-hidden px-6 py-32 sm:py-40"
      >
        <Image
          src="/floral-corner.png"
          alt=""
          width={260}
          height={260}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 w-28 -scale-x-100 opacity-50 sm:w-40"
        />
        <Image
          src="/floral-corner.png"
          alt=""
          width={260}
          height={260}
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 w-28 opacity-50 sm:w-40"
        />
        <div className="mx-auto max-w-2xl">
          <Reveal className="flex flex-col items-center gap-10 text-center">
            <p className="font-sans text-xs uppercase tracking-[0.45em] text-accent">
              Assalamu&apos;alaikum Wr. Wb.
            </p>
            <Ornament />
            <p className="font-heading text-2xl leading-relaxed text-primary sm:text-3xl md:text-4xl text-pretty">
              Dengan memohon rahmat dan ridho Allah SWT, kami mengundang
              Bapak/Ibu/Saudara/i untuk hadir pada acara lamaran putra-putri
              kami.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Couple */}
<section className="bg-secondary/60 px-6 py-28 sm:py-32">
  <div className="mx-auto max-w-3xl">
    <SectionHeading
      eyebrow=""
      title="Putra & Putri Kami"
      />
    <div className="mt-16 grid gap-10 md:grid-cols-2">

      <Reveal className="group flex flex-col items-center gap-3 rounded-3xl border border-accent/30 bg-card p-10 text-center shadow-[0_20px_60px_-30px_rgba(109,33,60,0.4)] transition-shadow duration-500 hover:shadow-[0_24px_70px_-28px_rgba(109,33,60,0.55)]">

        <Image
          src="/taufik.jpeg"
          alt="Taufik Seizarsyah"
          width={220}
          height={280}
          className="mb-6 h-64 w-48 rounded-[120px] object-cover border border-accent/30 shadow-xl"
        />

        <h3 className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
          Taufik Seizarsyah
        </h3>

        <span className="my-2 h-px w-12 bg-accent/50" aria-hidden="true" />

        <p className="font-sans text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Putra dari
        </p>

        <p className="font-heading text-lg font-medium text-foreground sm:text-xl">
          Agus Sandang Pangan
          <br />
          <span className="font-heading italic text-accent">&amp;</span>
          <br />
          Ratna Anitawati
        </p>

        <p className="mt-2 font-sans text-sm text-muted-foreground">
          Anak ke-3 dari 3 bersaudara
        </p>

      </Reveal>

      <Reveal
        delay={150}
        className="group flex flex-col items-center gap-3 rounded-3xl border border-accent/30 bg-card p-10 text-center shadow-[0_20px_60px_-30px_rgba(109,33,60,0.4)] transition-shadow duration-500 hover:shadow-[0_24px_70px_-28px_rgba(109,33,60,0.55)]"
      >

        <Image
          src="/ditya.jpeg"
          alt="Ditya Putri Imaniar"
          width={220}
          height={280}
          className="mb-6 h-64 w-48 rounded-[120px] object-cover border border-accent/30 shadow-xl"
        />

        <h3 className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
          Ditya Putri Imaniar
        </h3>

        <span className="my-2 h-px w-12 bg-accent/50" aria-hidden="true" />

        <p className="font-sans text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Putri dari
        </p>

        <p className="font-heading text-lg font-medium text-foreground sm:text-xl">
          Ade Suminar
          <br />
          <span className="font-heading italic text-accent">&amp;</span>
          <br />
          Henny Indrawaty
        </p>

        <p className="mt-2 font-sans text-sm text-muted-foreground">
          Anak pertama dari 2 bersaudara
        </p>

      </Reveal>

    </div>
  </div>
</section>

      {/* Event details */}
      <section className="px-6 py-28 sm:py-32">
        <div className="mx-auto max-w-xl">
          <SectionHeading eyebrow="Acara" title="Waktu & Tempat" />
          <Reveal className="mt-12 flex flex-col items-center gap-6 rounded-2xl border border-accent/30 bg-card p-8 text-center shadow-sm sm:p-10">
            <div className="space-y-1">
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-accent">Tanggal</p>
              <p className="font-heading text-2xl text-primary">Sabtu, 13 Juni 2026</p>
            </div>
            <span className="h-px w-16 bg-border" aria-hidden="true" />
            <div className="space-y-1">
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-accent">Waktu</p>
              <p className="font-heading text-2xl text-primary">08.00 WIB</p>
            </div>
            <span className="h-px w-16 bg-border" aria-hidden="true" />
            <div className="space-y-1">
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-accent">Lokasi</p>
              <p className="font-heading text-2xl text-primary">Aroem Bandung</p>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-sans text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              Lihat Lokasi
            </a>
          </Reveal>
        </div>
      </section>

      {/* Dress code */}
      <section className="bg-secondary/60 px-6 py-28 sm:py-32">
        <div className="mx-auto max-w-2xl">
          <SectionHeading eyebrow="Dress Code" title="Padanan Busana" />
          <p className="mx-auto mt-6 max-w-md text-center font-sans text-base leading-relaxed text-muted-foreground text-pretty">
            Untuk menjaga keserasian acara, kami mengharapkan kehadiran
            Bapak/Ibu/Saudara/i dengan nuansa warna berikut.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            <Reveal className="group flex flex-col items-center gap-5 rounded-3xl border border-accent/30 bg-card p-8 text-center shadow-[0_20px_60px_-30px_rgba(109,33,60,0.4)] transition-shadow duration-500 hover:shadow-[0_24px_70px_-28px_rgba(109,33,60,0.55)]">
              <span
                className="h-28 w-28 rounded-full border border-accent/40 shadow-inner ring-1 ring-accent/20 ring-offset-4 ring-offset-card transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundColor: "#f3ead7" }}
                aria-hidden="true"
              />
              <div className="space-y-1">
                <p className="font-heading text-2xl font-semibold text-primary">Cream</p>
                <p className="font-sans text-sm uppercase tracking-[0.25em] text-accent">
                  Keluarga CPP
                </p>
              </div>
            </Reveal>

            <Reveal
              delay={150}
              className="group flex flex-col items-center gap-5 rounded-3xl border border-accent/30 bg-card p-8 text-center shadow-[0_20px_60px_-30px_rgba(109,33,60,0.4)] transition-shadow duration-500 hover:shadow-[0_24px_70px_-28px_rgba(109,33,60,0.55)]"
            >
              <span
                className="h-28 w-28 rounded-full border border-accent/40 shadow-inner ring-1 ring-accent/20 ring-offset-4 ring-offset-card transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundColor: "#6b4226" }}
                aria-hidden="true"
              />
              <div className="space-y-1">
                <p className="font-heading text-2xl font-semibold text-primary">Coklat</p>
                <p className="font-sans text-sm uppercase tracking-[0.25em] text-accent">
                  Keluarga CPW
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="bg-primary px-6 py-28 sm:py-32 text-primary-foreground">
        <div className="mx-auto max-w-2xl flex flex-col items-center gap-4 text-center">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-accent">Menghitung Hari</p>
          <h2 className="font-heading text-3xl font-medium text-cream sm:text-4xl">
            Menuju Hari Bahagia
          </h2>
          <Image
            src="/floral-divider.png"
            alt=""
            width={240}
            height={60}
            aria-hidden="true"
            className="my-2 h-auto w-48 opacity-90"
          />
          <Reveal className="mt-2">
            <Countdown />
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-28 sm:py-32">
        <div className="mx-auto max-w-xl">
          <SectionHeading eyebrow="Susunan Acara" title="Rangkaian Acara" />
          <ol className="mt-14 space-y-0">
            {timeline.map((item, i) => (
              <Reveal as="li" key={item.time} delay={i * 80} className="relative flex gap-5 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent bg-card font-heading text-sm font-semibold text-primary">
                    {i + 1}
                  </span>
                  {i < timeline.length - 1 && (
                    <span className="mt-1 w-px flex-1 bg-accent/40" aria-hidden="true" />
                  )}
                </div>
                <div className="pt-1.5">
                  <p className="text-sm uppercase tracking-widest text-primary">
    {item.time}
  </p>

  <p className="mt-1 font-sans text-base font-medium text-foreground">
    {item.title}
  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Quote */}
      <section className="relative overflow-hidden px-6 pt-8 pb-28">
        <Image
          src="/floral-corner.png"
          alt=""
          width={220}
          height={220}
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 w-28 -scale-y-100 opacity-60 sm:w-36"
        />
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Ornament />
          <blockquote className="font-heading text-xl italic leading-relaxed text-primary sm:text-2xl text-balance">
            &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu pasangan hidup dari jenismu sendiri agar kamu merasa tenteram
            di sisinya, dan dijadikan-Nya di antaramu rasa kasih dan
            sayang.&rdquo;
          </blockquote>
          <cite className="font-sans text-sm not-italic tracking-wide text-accent">
            (QS. Ar-Rum: 21)
          </cite>
        </Reveal>
      </section>

      {/* RSVP */}
      <section className="bg-secondary/60 px-6 py-28 sm:py-32">
        <div className="mx-auto max-w-lg">
          <SectionHeading eyebrow="Konfirmasi" title="Kehadiran & Doa" />
          <Reveal className="mt-12">
            <RsvpForm />
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-primary px-6 py-20 text-center text-primary-foreground">
        <Image
          src="/floral-divider.png"
          alt=""
          width={240}
          height={60}
          aria-hidden="true"
          className="mx-auto mb-8 h-auto w-48 opacity-90"
        />
        <p className="mx-auto max-w-md font-sans text-sm leading-relaxed text-cream/90 text-pretty">
          Terima kasih atas doa dan restu yang diberikan.
        </p>
        <p className="mt-8 font-heading text-2xl text-cream">
          Taufik <span className="text-accent">&amp;</span> Ditya
        </p>
        <p className="mt-2 font-sans text-xs tracking-[0.25em] text-cream/70">
          13 . 06 . 2026
        </p>
      </footer>
      <button
  onClick={toggleMusic}
  className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-all hover:scale-110"
  aria-label="Toggle music"
>
  {playing ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M5.5 3.5h2v9h-2zM8.5 3.5h2v9h-2z" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M10.804 8 5 11.333V4.667L10.804 8z" />
    </svg>
  )}
</button>
    </main>
  )
}
