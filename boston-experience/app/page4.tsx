import React from 'react';
import { DaySchedule } from './types';

const day: DaySchedule = {
  date: "March 7",
  dayName: "Saturday",
  theme: "移動日",
  sessions: [
    {
      id: 23,
      time: "10:00〜",
      title: "Optional Session",
      description:
        "Otomo HealthのTakanishiさんとのセッション（希望者向け）。ヘルスケア × スタートアップのリアルを聞く。",
      guests: [
        {
          name: "Kiyo Takanishi",
          title: "Co-Founder, Otomo Health",
          bio: "三菱商事で投資・事業開発を経験後、2021年にcotoceller.com（日本最大の病院DXプラットフォーム、3,000病院以上が利用）を創業。2024年にMIT Sloan在学中にOtomo Healthを共同創業。",
          linkedin: "https://www.linkedin.com/in/kiyofumi-takanishi/",
        },
      ],
      references: [{ label: "Otomo Health", url: "https://www.otomohealth.com/about" }],
    },
    {
      id: 24,
      time: "15:00〜",
      title: "Departure",
      description: "ホテル → 空港移動。ボストン空港到着（ターミナルB）。19:31発 AA4503便（NY経由）に乗車。3/9 05:00に羽田空港到着。",
    },
  ],
};

export default function Page4() {
  return (
    <section className="rounded-2xl bg-white/4 ring-1 ring-white/8 overflow-hidden">
      <div className="bg-gradient-to-r from-white/10 to-white/5 px-8 py-6 border-b border-white/6">
        <h2 className="text-2xl font-semibold text-zinc-50">{day.date}</h2>
        <p className="text-sm text-zinc-300 mt-1">{day.dayName} — {day.theme}</p>
      </div>

      <div className="divide-y divide-white/6">
        {day.sessions.map((session) => (
          <div key={session.id} className="px-8 py-6 hover:bg-white/3 transition-colors">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24">
                <time className="text-sm font-semibold text-blue-300">{session.time}</time>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-zinc-50">{session.title}</h3>
                <p className="mt-2 text-zinc-200 text-sm leading-relaxed">{session.description}</p>

                {session.guests && session.guests.length > 0 && (
                  <div className="mt-4 space-y-3">
                    {session.guests.map((guest, idx) => (
                      <div key={idx} className="rounded-lg bg-white/5 p-4 ring-1 ring-white/6">
                        <p className="font-semibold text-zinc-50">{guest.name}</p>
                        <p className="text-xs text-blue-300 mt-1">{guest.title}</p>
                        <p className="text-xs text-zinc-300 mt-2 leading-relaxed">{guest.bio}</p>
                        {guest.linkedin && (
                          <a href={guest.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-xs text-blue-400 hover:text-blue-300 underline">LinkedIn →</a>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {session.references && session.references.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {session.references.map((ref, idx) => (
                      <a key={idx} href={ref.url} target="_blank" rel="noopener noreferrer" className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-xs text-blue-300 hover:bg-blue-500/30 transition-colors">{ref.label} →</a>
                    ))}
                  </div>
                )}

                {session.notes && (<p className="mt-3 text-xs text-zinc-400 italic">ℹ️ {session.notes}</p>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
