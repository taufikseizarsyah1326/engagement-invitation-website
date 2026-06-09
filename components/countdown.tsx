"use client"

import { useEffect, useState } from "react"

const TARGET = new Date("2026-06-13T08:00:00+07:00").getTime()

function getRemaining() {
  const diff = Math.max(0, TARGET - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTime(getRemaining())
    const id = setInterval(() => setTime(getRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  const items = [
    { label: "Hari", value: time.days },
    { label: "Jam", value: time.hours },
    { label: "Menit", value: time.minutes },
    { label: "Detik", value: time.seconds },
  ]

  return (
    <div className="flex items-stretch justify-center gap-2 sm:gap-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex min-w-[68px] flex-col items-center gap-1 rounded-xl border border-accent/40 bg-card px-3 py-4 shadow-sm sm:min-w-[88px] sm:px-5"
        >
          <span className="font-heading text-3xl font-semibold text-primary tabular-nums sm:text-4xl">
            {mounted ? String(item.value).padStart(2, "0") : "--"}
          </span>
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}
