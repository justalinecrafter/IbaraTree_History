// ===== 更新履歴のデータ =====
// 新しいバージョンを追加するときは、下の VERSIONS の一番上に { ... } を1つ追加してください。
// 上に書いたものほどページの上に表示されます（新しい順に書く）。
//
//   name    : バージョン名（例: "Version 2"）
//   date    : 日付（例: "2026-10-18"）
//   changes : 変更点。1行ずつ "..." で書き、カンマで区切る
//   links   : リンク。{ label: "表示する文字", url: "https://..." } を並べる。なければ []
//
// 空欄（"" や []）のままでも表示が崩れないようになっています。

const VERSIONS = [
  {
    name: "Version 2",
    date: "2026/10/18",
    changes: ["ダークモードを追加","ToDoにリスト分け機能を追加","フォントの変更が可能になった","設定した色の濃さの変更が可能になった","教科別表示時に過去授業の表示切替","一部説明文を改善"],
    links: [
      { label: "IbaraTree_V2", url: "https://justalinecrafter.github.io/IbaraTree_v2/" }
    ]
  },
  {
    name: "Version 1",
    date: "2026/10/2",
    changes: [
      "最初のバージョンを公開"
    ],
    links: [
      { label: "IbaraTree_V1", url: "https://justalinecrafter.github.io/IbaraTree" }
    ]
  }
];
