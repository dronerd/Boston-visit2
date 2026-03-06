import React from 'react';

export default function Page3() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071536] via-[#0b3b73] to-[#04162a] text-zinc-100">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <section className="rounded-2xl bg-white/4 ring-1 ring-white/8 overflow-hidden">
          <div className="bg-gradient-to-r from-white/10 to-white/5 px-8 py-6 border-b border-white/6">
            <h2 className="text-2xl font-semibold text-zinc-50">March 6</h2>
          </div>

          <div className="px-8 py-6 text-zinc-200 leading-relaxed">
            <p className="mb-4"><strong>My new goal:</strong></p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Work full-time in a professional role while also pursuing a startup or mission-driven project based on my personal beliefs.</li>
            </ul>

            <p className="mb-4">However, I still do not clearly know how to achieve this path.</p>

            <p className="mb-4">Through conversations with experienced founders, I learned many practical lessons. For example, some entrepreneurs first worked at large companies before starting their own ventures, and they shared how that experience helped them.</p>

            <p className="mb-4">I also learned that when pursuing a vision, it is not enough to simply push your ideal vision onto society. Instead, it is important to provide something that people already want, while gradually introducing new ideas and improving society step by step.</p>

            <p className="mb-4">Another important lesson was about sustainability. To pursue a long-term vision, it is necessary to build multiple sources of income. Even organizations like NPOs often rely on diverse funding sources, including government support and other partnerships.</p>

            <p className="mb-4">At the same time, credibility is also very important. Working at a respected company or studying at a well-known university can help build credibility, which can later support entrepreneurial efforts.</p>

            <p>This made me realize that it may be important to both build credibility and continue challenging myself at the same time.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
