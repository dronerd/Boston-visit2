import React from 'react';

export default function Page2() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071536] via-[#0b3b73] to-[#04162a] text-zinc-100">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <section className="rounded-2xl bg-white/4 ring-1 ring-white/8 overflow-hidden">
          <div className="bg-gradient-to-r from-white/10 to-white/5 px-8 py-6 border-b border-white/6">
            <h2 className="text-2xl font-semibold text-zinc-50">March 5</h2>
          </div>

          <div className="px-8 py-6 text-zinc-200 leading-relaxed">
            <p className="mb-4"><strong>Before this day:</strong></p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>I was nervous about the meetings I arranged through LinkedIn.</li>
              <li>My image of American graduate schools was mostly that they were "cool" or impressive, but I did not clearly understand what they were actually like.</li>
              <li>My vision of deep-tech startups was still vague.</li>
            </ul>

            <p className="mb-4">In the morning, I spoke with someone I had reached out to myself through LinkedIn. Taking the initiative to contact someone and then having a real conversation gave me courage and confidence.</p>

            <p className="mb-4">Through these conversations, I learned more about the research environment in American graduate schools, the strong connections between students, and the passion people have for their fields. Experiencing this firsthand made me genuinely want to study in such an environment.</p>

            <p className="mb-4">At the same time, because I felt that I personally had changed over the past few days, I became even more convinced that I want to help spread language learning that focuses on real conversations and communication, not just textbook study.</p>

            <p className="mb-4">Later, through visiting Greentown Labs and speaking with people at Venture Café, I also learned something important about myself. I realized that I may not be well suited to the style of deep-tech startups where one spends many years focusing intensely on applying a single technology.</p>

            <p>This realization was actually very valuable. It helped me understand that my future path does not necessarily have to connect my research directly with my own startup or business.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
