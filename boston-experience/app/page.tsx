import { DaySchedule } from './types';
import Day1 from './page1';
import Day2 from './page2';
import Day3 from './page3';
import Day4 from './page4';
import Day5 from './page5';
import VideoHero from './VideoHero';

export default function Home() {
  const schedule: DaySchedule[] = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
  ];

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
          {schedule.map((day, idx) => {
            const components = [Day1, Day2, Day3, Day4, Day5];
            const Comp = components[idx] ?? null;
            return Comp ? <Comp key={day.date} day={day} /> : null;
          })}
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
