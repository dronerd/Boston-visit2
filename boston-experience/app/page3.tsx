import React from 'react';
import { DaySchedule } from './types';

const day: DaySchedule = {
  date: "March 6",
  dayName: "Friday",
  theme: "Day 3 ── Founders Panel & MIT SDM",
  sessions: [
    {
      id: 16,
      time: "08:00〜09:30",
      title: "個別アポタイム",
      description: "朝の短時間枠。9:30にホテル出発 → CICへ移動。9:00にはホテル付近に戻ること。",
    },
    {
      id: 17,
      time: "10:30〜",
      title: "Sempai Founder's Panel & Breakout Q&A",
      description:
        "ボストンで活動する起業家3名とのパネルディスカッション ＋ 少人数でのQ&Aセッション。AI、教育、社会起業など多様な分野の起業家から、リアルな起業体験を聞く。",
      guests: [
        {
          name: "Karen Kelly",
          title: "Co-Founder & CEO, Launch by Lunch",
          bio: "ストラテジスト、TEDxスピーカー。AI時代のリーダーシップと未来の仕事をテーマに活動。3度の起業経験。テクノロジー、ヘルスケア、B2C分野で20年超のキャリア。",
          linkedin: "https://www.linkedin.com/in/karen-kelly-daring-greatly/",
        },
        {
          name: "Mireia Torello",
          title: "Co-Founder & CEO, Aikreate",
          bio: "EdTech起業家。AIリテラシーのリーダー。中高生がAIを「使う」だけでなく「理解し、創造する」ことを支援するEdTech企業を運営。",
          linkedin: "https://www.linkedin.com/in/mireia-torello-phd/",
        },
        {
          name: "Lani Willmar",
          title: "Founder & CEO, Ethos Admissions & Pathways",
          bio: "教育アクセスと経済的公正を推進する2つの若者向け組織の創業者。QuestBridge Scholar（Williams College）、フルブライト奨学生（スロバキア）。",
          linkedin: "https://www.linkedin.com/in/lani-willmar-951237ab/",
        },
      ],
      notes: "モデレーター: Dan Newman（CEO, Learn to Scale） - LinkedIn: https://www.linkedin.com/in/dansnewman/",
    },
    {
      id: 18,
      time: "12:00〜14:00",
      title: "Lunch / Independent Work Block",
      description:
        "プログラム全体のテイクアウェイを自分なりの形式でまとめる時間。5分間で仲間にプレゼンする準備をする。（形式例：TEDスタイルトーク、ビデオレポート、学生新聞コラム、エッセイ風マンガ、ショートストーリー、Webサイトなど）",
    },
    {
      id: 19,
      time: "14:00〜",
      title: "Final Reflection Circle",
      description: "プログラム全体の振り返りセッション。まとめたテイクアウェイを仲間に共有する。",
      guests: [
        {
          name: "Yumi Kaplan",
          title: "Project Associate, CIC Japan Desk",
          bio: "プログラムの最終振り返りをファシリテート。",
        },
      ],
    },
    {
      id: 20,
      time: "16:00〜",
      title: "MIT SDM Visit",
      description:
        "MIT System Design & Management（SDM）を訪問。Bryan R. Moser先生によるSDMの説明。日本人留学生（経産省・文科省からの派遣者）に対してショートピッチを行い、その後交流。味の素CVCの方も参加予定。",
      guests: [
        {
          name: "Bryan R. Moser",
          title: "MIT SDM Academic Director / 東京大学特任准教授",
          bio: "MIT SDMのアカデミック・ディレクター、MIT工学・Sloanのシニア・レクチャラー。東京大学GTL指揮。日産AI研究所、United Technologies Corporationを経て2014年MIT復帰。MIT理学修士、東京大学博士。",
          linkedin: "https://jp.cic.com/news/mit-pe-3/",
        },
      ],
      notes: "味の素CVCおよびMIT Sloan在学日本人学生（経産省、文科省職員）も参加。",
      references: [
        { label: "参考記事", url: "https://mitsloanjapanclub.com/curriculum/sdm/" },
      ],
    },
    {
      id: 21,
      time: "18:00〜",
      title: "Farewell Dinner",
      description: "Bryan R. Moserさん、Sloan在学日本人学生を交えた20人超でのフェアウェルディナー。",
    },
    {
      id: 22,
      time: "21:00〜",
      title: "Reflection Work",
      description: "最終日の振り返り。",
    },
  ],
};

export default function Page3() {
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
