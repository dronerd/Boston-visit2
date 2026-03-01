import { DaySchedule } from './types';
import Day1 from './page1';
import Day2 from './page2';
import Day3 from './page3';
import Day4 from './page4';
import VideoHero from './VideoHero';

export default function Home() {
  const march3: DaySchedule = {
    date: "March 3",
    dayName: "Tuesday",
    theme: "移動日",
    sessions: [
      {
        id: 1,
        time: "16:30",
        title: "集合・出発",
        description: "成田空港第2ターミナル集合（3F、JALチェックインカウンター付近）。JL008便で18:50出発。",
        notes: "ボストン到着後は入国審査 → ホテルへ移動。Residence Inn by Marriott Boston Cambridgeにチェックイン。20:30に全体ミーティング。",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071536] via-[#0b3b73] to-[#04162a] text-zinc-100">
      <main className="mx-auto max-w-6xl px-6 py-16">
        {/* Header */}
        <header className="mb-16 flex flex-col items-start gap-6">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-white/10 ring-1 ring-white/10"></div>
            <div>
              <h1 className="text-4xl font-semibold">Boston Experience</h1>
              <p className="mt-1 text-sm text-zinc-300">March 3 — March 7, 2026</p>
            </div>
          </div>

          <section className="w-full rounded-xl bg-white/6 p-8 shadow-lg ring-1 ring-white/6">
            <h2 className="text-2xl font-semibold text-zinc-50">プログラム紹介</h2>
            <p className="mt-3 text-base text-zinc-200 leading-relaxed">
              このプログラムでは、ボストンのスタートアップエコシステムを知り尽くす様々なリーダーと出会い、世界で活躍する起業家・研究者・イノベーターから学びます。CIC（Cambridge Innovation Center）、MIT Sloan、ハーバード大学、Greentown Labs、Venture Café など、ボストンを代表する機関を訪問し、米国の起業文化と人材ネットワークを肌で感じることができます。
            </p>
          </section>
        </header>

        {/* Hero video with overlay buttons */}
        <VideoHero />

        {/* Daily Schedules (split into separate files per date) */}
        <div className="space-y-12">
          {/* Render March 3 inline */}
          {/** simple inline renderer for March 3 */}
          <section className="rounded-2xl bg-white/4 ring-1 ring-white/8 overflow-hidden">
            <div className="bg-gradient-to-r from-white/10 to-white/5 px-8 py-6 border-b border-white/6">
              <h2 className="text-2xl font-semibold text-zinc-50">{march3.date}</h2>
              <p className="text-sm text-zinc-300 mt-1">{march3.dayName} — {march3.theme}</p>
            </div>

            <div className="divide-y divide-white/6">
              {march3.sessions.map((session) => (
                <div key={session.id} className="px-8 py-6 hover:bg-white/3 transition-colors">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-24">
                      <time className="text-sm font-semibold text-blue-300">{session.time}</time>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-zinc-50">{session.title}</h3>
                      <p className="mt-2 text-zinc-200 text-sm leading-relaxed">{session.description}</p>
                      {session.notes && (<p className="mt-3 text-xs text-zinc-400 italic">ℹ️ {session.notes}</p>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* External day components for March 4-7 */}
          <Day1 />
          <Day2 />
          <Day3 />
          <Day4 />
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <p className="text-sm text-zinc-400">楽しいボストン体験になることを願っています！</p>
          <p className="text-xs text-zinc-500 mt-2">Last Updated: March 1, 2026</p>
        </footer>
      </main>
    </div>
  );
}
