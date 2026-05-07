export const productConfig = {
  "product": {
    "rank": 7,
    "tier": "P0",
    "score": 70,
    "domain": "AdobePlugin",
    "ideaNo": 12,
    "ideaName": "Adobe横断レビュー・作業証跡レポート",
    "repository": "adobe-cross-review-evidence-report",
    "publish": "BOOTH / GitHub Release",
    "priorityReason": "横断連携は重いが、まずはレポート生成に絞ると既存Adobe検品系の上位版になる。",
    "surface": "Bridge 向け host adapter とローカル証跡レポート CLI",
    "integration": "Photoshop / Illustrator / InDesign / Acrobat Pro / Premiere Pro / After Effects / Audition",
    "overview": "各Adobeアプリのレビューコメント、差分、作業履歴、書き出し設定、検品結果を集約し、案件ごとのリリースレポートを生成する。",
    "problem": "レビュー結果や作業履歴がアプリ、チャット、ファイル名に散らばり、納品後に説明しづらい。",
    "differentiation": "成果物、コメント、検品結果、リリース判断までつながる横断レポートにする。",
    "adobeHost": "Bridge",
    "adobeHostReason": "複数 Adobe アプリの成果物と証跡を束ねる横断レポートで、類似/集約ハブとして Adobe Bridge が metadata に含まれる。"
  },
  "validation": {
    "requiredFields": [
      "id",
      "title",
      "owner",
      "source",
      "status",
      "decision"
    ],
    "recommendedFields": [
      "evidence",
      "notes",
      "tags"
    ],
    "warningStatuses": [
      "pending",
      "needs-review",
      "blocked"
    ],
    "acceptedDecisions": [
      "approved",
      "needs-fix",
      "pending",
      "rejected",
      "cataloged",
      "synced"
    ]
  },
  "qcds": {
    "scale": [
      "S+",
      "S-",
      "A+",
      "A-",
      "B+",
      "B-",
      "C+",
      "C-",
      "D+",
      "D-"
    ],
    "manualTestStatus": "手動テスト未実施",
    "manualTestUpperBound": "S-",
    "ratings": {
      "Quality": "S-",
      "Cost": "S-",
      "Delivery": "S-",
      "Satisfaction": "S-"
    }
  }
};
