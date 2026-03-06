import { DaySchedule } from './types';
import Page1 from './page1/page';
import Page2 from './page2/page';
import Page3 from './page3/page';
import Page4 from './page4/page';
import VideoHero from './VideoHero';

export default function Home() {
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
            <h2 className="text-2xl font-semibold text-zinc-50">プログラム</h2>
            <p className="mt-3 text-base text-zinc-200 leading-relaxed">
              things i did and learned during my 5-day trip to boston. i arranged meetings with people in advance through linkedin, visited greentown labs, attended venture café, and had many conversations with people in the local community. each day was full of new experiences and insights that helped me learn more about myself and my future goals.
            </p>
          </section>
        </header>

        {/* Hero video with overlay buttons */}
        <VideoHero />

       
      </main>
    </div>
  );
}
