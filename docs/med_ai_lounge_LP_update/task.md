# Task: 初級編セミナー終了に伴うLP更新

## User Request
- 初級編は終了したため、申し込みリンクを削除する。
- 「終了しました」という表示にする。
- アイコンにシャドーをかけるなど、終了したことがわかるデザインにする。

## Target Files
1. `seminar/index.html` (一般公開ページ)
2. `x7f9k2m/index.html` (LINE限定ページ)
3. `style.css` (共通スタイルシート)

## Action Plan
1. **Style Update (`style.css`)** [Completed]
   - 終了したコースを表すクラス `.program-ended` を追加。
   - `.program-card` 全体を少し暗くする、またはオーバーレイをかけるスタイル。
   - ボタンの無効化スタイル `.btn-disabled` を定義。

2. **HTML Update (`seminar/index.html`, `x7f9k2m/index.html`)** [Completed]
   - **プログラム詳細セクション**:
     - 初級編の `.program-card` に `.program-ended` クラスを追加（またはスタイル適用）。
     - 申し込みボタンのリンクを削除し、テキストを「終了しました」に変更。クラスを `.btn` から `.btn-disabled` 等に変更。
   - **CTAセクション**:
     - 初級編のボタンを「終了しました」に変更し、クリック不可にする。
   - **スティッキーCTA**:
     - 初級編のボタンを「終了しました」に変更し、クリック不可にする。
