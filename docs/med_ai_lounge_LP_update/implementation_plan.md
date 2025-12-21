# Implementation Plan - 初級編セミナー終了対応

## 概要
初級編セミナーが終了したため、LP上の表記を更新し、新規申し込みを停止する。デザインを変更して終了したことを視覚的に伝える。

## 変更内容

### 1. CSS (`style.css`)
- **終了済みカードのスタイル**:
  - `.program-card.ended`: カード全体の透明度を下げる、またはグレースケールにする。
  - ボックスシャドウを弱める、あるいは内側に「終了」を想起させるオーバーレイを追加する等の調整。
- **無効化ボタンのスタイル**:
  - `.btn.disabled`, `.btn-disabled`: 背景色をグレーにし、カーソルを `not-allowed` に変更。ポインターイベントを無効化。

### 2. HTML (`seminar/index.html` & `x7f9k2m/index.html`)

トピック: 初級編 (Day 1) の要素に対して以下の変更を行う。

- **Program Section**:
  - `<div class="program-card">` に `ended` クラスを追加。
  - カードフッターの申込ボタン `<a href="...">` を `<span class="btn btn-disabled">終了しました</span>` に置換。
- **Lower CTA Section**:
  - 初級編のボタンを `<span class="btn btn-lg btn-disabled">初級編 (終了)</span>` に置換。
- **Sticky CTA**:
  - 初級編のボタンを `<span class="btn btn-disabled btn-sm">初級編 (終了)</span>` に置換。

## 検証手順
1. ブラウザで `seminar/index.html` および `x7f9k2m/index.html` を開き、初級編のカードが「終了」した見た目になっているか確認する。
2. 初級編のボタンがクリックできなくなっていることを確認する。
3. 中級編の表示やリンクには影響がないことを確認する。
