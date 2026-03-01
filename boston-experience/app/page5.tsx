import React from 'react';
import { DaySchedule } from './types';

export default function Page5({ day }: { day: DaySchedule }) {
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
