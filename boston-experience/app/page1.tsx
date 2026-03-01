import React from 'react';
import { DaySchedule } from './types';

const day: DaySchedule = {
  date: "March 4",
  dayName: "Wednesday",
  theme: "Day 1 ── CIC & MIT & Harvard",
  sessions: [
    {
      id: 2,
      time: "08:00〜",
      title: "Orientation",
      description: "CICケンブリッジの概要説明。CICとは何か、どんなスタートアップエコシステムを形成しているかを学ぶ。",
      guests: [
        {
          name: "Yumi Kaplan",
          title: "Project Associate, CIC Japan Desk",
          bio: "教育・異文化コミュニケーションのバックグラウンド。2024年よりCIC Japan Deskでスタートアップアクセラレーションプログラムの運営を支援。",
          linkedin: "https://www.linkedin.com/in/yumi-j-kaplan/",
        },
      ],
    },
    {
      id: 3,
      time: "09:00〜",
      title: "CIC Tour",
      description: "CIC施設内の見学ツアー。コワーキング、ラボ、イベントスペースなどを見て回る。",
      guests: [
        {
          name: "Zachary Metz",
          title: "Project Associate, CIC Japan Desk",
          bio: "2022年よりCIC Japan Desk勤務。Hampshire College卒（日本史・人類学）。ビジネス言語コンサルタント経験あり。",
          linkedin: "https://www.linkedin.com/in/zachary-h-metz/",
        },
      ],
      references: [
        {
          label: "CIC Cambridge",
          url: "https://cic.com/ja/%E3%82%B1%E3%83%B3%E3%83%96%E3%83%AA%E3%83%83%E3%82%B8/",
        },
      ],
    },
    {
      id: 4,
      time: "09:45〜",
      title: "Pitch to CIC",
      description:
        "CICのプログラムマネージャーTriciaさんとJapan Desk HeadのNamikaさんの前でピッチを実施。Thursday Gatheringで会うべき人のアドバイスがもらえるよう、「どんな支援を求めているか」「どんな人に会いたいか」が伝わるピッチを準備しよう。",
      guests: [
        {
          name: "Tricia Bitetto",
          title: "Program Manager, Venture Café Cambridge",
          bio: "毎週数百人のイノベーターを集めるVenture Caféのギャザリングをキュレート。コミュニティ参加者を40%増加させ、平均450名規模に成長させた実績。",
          linkedin: "https://www.linkedin.com/in/triciabitetto/",
        },
        {
          name: "Namika Maki",
          title: "Interim Head, CIC Japan Desk",
          bio: "Harvard Kennedy School、Harvard Business Schoolでの学生アクセラレーター支援経験。2024年よりCIC Japan Deskのプログラムマネージャー。",
          linkedin: "https://www.linkedin.com/in/namika-maki/",
        },
      ],
    },
    {
      id: 5,
      time: "11:00〜",
      title: "MIT Faculty Presentation & Student Networking Lunch",
      description: "MIT SloanのアントレプレナーシップセンターからJenny教員が来訪。MITの学生8名程度とのランチ交流会。MITのエコシステムを理解し、教員・学生とつながる絶好の機会。",
      guests: [
        {
          name: "Jenny Larios Berlin",
          title: "Lecturer, MIT Sloan School of Management",
          bio: "MIT SloanのEntrepreneur in Residence。自律走行モビリティのMITスピンアウト企業Optimus Rideの共同創業者・COO。200名超の従業員、$75M超のVC調達を経験。",
          linkedin: "https://www.linkedin.com/in/jenny-larios-berlin/",
        },
        {
          name: "Mary Popeo",
          title: "MBA Candidate, MIT Sloan",
          bio: "日本に10年間在住し、社会的企業を共同創業（200人の若者向け有給職を創出）。パーパスとプロフィットの架け橋として10年のキャリア。",
          linkedin: "https://www.linkedin.com/in/marypopeo/",
        },
      ],
    },
    {
      id: 6,
      time: "14:00〜16:00",
      title: "個別アポタイム or MassRobotics 訪問",
      description: "午後はCICでのプログラム終了後、各自でアポイントメントを取った先に訪問、もしくはMassRobotics訪問の可能性あり（調整中）。",
      guests: [
        {
          name: "Russell Nickerson",
          title: "Partner/Engagement Liaison, MassRobotics",
          bio: "MassRoboticsは世界最大級の独立系ロボティクスイノベーションハブ。200社以上が利用。ロボティクス・Physical AIスタートアップに開発スペース、試作・テスト設備を提供。",
        },
      ],
    },
    {
      id: 7,
      time: "16:00〜",
      title: "Waseda Alumni Meet + Dinner at Harvard Business School",
      description: "早稲田大学OBの中村柾さんによるボストンサバイバル体験談。ハーバード大学ツアー、夕食交流会。ボストンのエコシステムに入り込む方法を聞く絶好の機会。",
      guests: [
        {
          name: "中村 柾（Masaki Nakamura）",
          title: "NPO法人EdFuture代表、ボストン市教育委員会指導主事",
          bio: "早稲田大学卒 → スタンフォード大学・ハーバード教育大学院修了。",
          linkedin: "https://note.com/mmeducation/n/n35a0d55dab99",
        },
      ],
    },
    {
      id: 8,
      time: "21:00〜",
      title: "Reflection Work",
      description: "1日の振り返りとピッチのブラッシュアップ。振り返りフォーム記入。",
      notes: "毎日実施",
    },
  ],
};

export default function Page1() {
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
