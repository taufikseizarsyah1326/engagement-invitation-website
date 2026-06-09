"use client"

import { useState } from "react"

export function RsvpForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    nama: "",
    kehadiran: "Hadir",
    jumlah: "1",
    ucapan: "",
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-accent/40 bg-card p-8 text-center">
        <h3 className="font-heading text-2xl text-primary">Terima Kasih, {form.nama || "Tamu"}!</h3>
        <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
          Konfirmasi kehadiran dan doa Anda telah kami terima. Sampai jumpa di acara lamaran kami.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full border border-primary px-6 py-2 font-sans text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Kirim Ucapan Lagi
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-accent/40 bg-card p-6 shadow-sm sm:p-8"
    >
      <div className="space-y-2">
        <label htmlFor="nama" className="font-sans text-sm font-medium text-foreground">
          Nama
        </label>
        <input
          id="nama"
          required
          value={form.nama}
          onChange={(e) => setForm({ ...form, nama: e.target.value })}
          placeholder="Nama lengkap Anda"
          className="w-full rounded-lg border border-input bg-background px-4 py-3 font-sans text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/30"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="kehadiran" className="font-sans text-sm font-medium text-foreground">
          Kehadiran
        </label>
        <select
          id="kehadiran"
          value={form.kehadiran}
          onChange={(e) => setForm({ ...form, kehadiran: e.target.value })}
          className="w-full rounded-lg border border-input bg-background px-4 py-3 font-sans text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
        >
          <option>Hadir</option>
          <option>Tidak Hadir</option>
          <option>Masih Ragu</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="jumlah" className="font-sans text-sm font-medium text-foreground">
          Jumlah Tamu
        </label>
        <select
          id="jumlah"
          value={form.jumlah}
          onChange={(e) => setForm({ ...form, jumlah: e.target.value })}
          className="w-full rounded-lg border border-input bg-background px-4 py-3 font-sans text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n} Orang
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="ucapan" className="font-sans text-sm font-medium text-foreground">
          Ucapan dan Doa
        </label>
        <textarea
          id="ucapan"
          rows={4}
          value={form.ucapan}
          onChange={(e) => setForm({ ...form, ucapan: e.target.value })}
          placeholder="Tuliskan ucapan dan doa terbaik Anda"
          className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 font-sans text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/30"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-primary py-3.5 font-sans text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
      >
        Kirim Konfirmasi
      </button>
    </form>
  )
}
