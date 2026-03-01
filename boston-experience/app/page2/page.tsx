import React from 'react';
import { DaySchedule } from '../types';

const day: DaySchedule = {
  date: "March 5",
  dayName: "Thursday",
  theme: "Day 2 ── Greentown Labs & Venture Café",
  sessions: [
    {
      id: 9,
      time: "08:00〜12:30",
      title: "個別アポタイム",
      description:
        "午前中はフリー。LinkedInで事前にアポを取った相手と会う時間に使おう。12:30にホテル出発 → CICへ移動するので、12:00にはホテル付近に戻ること。",
    },
    {
      id: 10,
      time: "13:00〜",
      title: "Tour of Greentown Labs",
      description:
        "Greentown Labsは世界最大級の気候テック/クリーンテックのスタートアップインキュベーター。Cynthiaさんによる説明とツアー。日本人起業家Narita Kaiさんとの交流。",
      guests: [
        {
          name: "Cynthia Liao",
          title: "Co-Founder & CEO, Vertical Semiconductor",
          bio: "エネルギー・金融・政府領域で10年のプロジェクトリード経験。英国大使館（中国担当）の気候変動・環境担当次長。GEで再エネインフラ投資に従事。MIT Sloan MBA。",
          linkedin: "https://www.linkedin.com/in/cynthia-liao-61180856/",
        },
        {
          name: "Kai Narita",
          title: "Co-Founder & CEO, 3D Architech",
          bio: "積層造形と材料科学の専門知識にサステナビリティマインドセットを組み合わせ、金属製造インフラのイノベーションに情熱を注ぐ起業家。",
          linkedin: "https://www.linkedin.com/in/kai-narita/",
        },
      ],
      references: [
        { label: "Greentown Labs", url: "https://greentownlabs.com/greentown-boston/" },
        { label: "MIT Technology Review", url: "https://www.technologyreview.jp/s/322802/trajectory-of-u35-innovators-kai-narita/" },
      ],
    },
    {
      id: 11,
      time: "14:45〜",
      title: "How to Venture Café",
      description: "夕方のVenture Café Thursday Gatheringを最大限活用するためのレクチャー。どう立ち回るか、誰に声をかけるかなどの戦略を学ぶ。",
      guests: [
        {
          name: "Zachary Metz",
          title: "Project Associate, CIC Japan Desk",
          bio: "CIC Japan Deskの一員として、ネットワーキングのコツを伝授。",
        },
      ],
      references: [{ label: "Venture Café Cambridge", url: "https://venturecafecambridge.org/" }],
    },
    {
      id: 12,
      time: "15:00〜",
      title: "Networking with Confidence",
      description: "Venture Caféで上手にネットワーキングするための実践的レクチャー。英語でのコミュニケーションスキルを磨く。",
      guests: [
        {
          name: "Keiko Schlabach",
          title: "Founder & CEO, English Empowered",
          bio: "英語コミュニケーションコーチ。日本のスタートアップ、起業家、経営者がグローバルビジョンを実現するための実践的コミュニケーションツールを提供。",
          linkedin: "https://www.linkedin.com/in/keikoschlabach/",
        },
      ],
    },
    {
      id: 13,
      time: "16:00〜",
      title: "Pizza Dinner",
      description: "CICでの夕食（ピザ）。Venture Café前のカジュアルな交流タイム。",
    },
    {
      id: 14,
      time: "16:30〜",
      title: "Venture Café Thursday Gathering",
      description:
        "毎週木曜開催の大規模ネットワーキングイベント。ボストンのイノベーター、投資家、研究者、コミュニティリーダーが数百人規模で集まる。Day 1のPitch to CICでもらった「この人に会うべき」アドバイスを活かす場。",
      references: [{ label: "Venture Café Cambridge", url: "https://venturecafecambridge.org/" }],
    },
    {
      id: 15,
      time: "21:00〜",
      title: "Reflection Work",
      description: "1日の振り返り ＋ 翌日準備。",
    },
  ],
};

export default function Page2() {
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
