# リンク修正計画

ユーザーの要望に基づき、SeminarページとLine割引ページのリンクを修正します。主に中級編のリンクURLが更新対象となります。

## ユーザーレビューが必要な事項
- 特になし

## 提案する変更

### `seminar/index.html` (通常ページ)
#### [MODIFY] [index.html](file:///c:/Users/misaw/Desktop/Code_space/LP-page/seminar/index.html)
- 中級編の申し込みリンクを以下の通り更新します。
    - 変更前: `https://fincs.jp/plan/3052311990205796913/join/agreement?planPriceId=1009`
    - 変更後: `https://fincs.jp/plan/4042180552264191503/join/agreement?planPriceId=1029`
    - (注: 初級編は既存コードと一致しているため変更なし)

### `x7f9k2m/index.html` (LINE割引ページ)
#### [MODIFY] [index.html](file:///c:/Users/misaw/Desktop/Code_space/LP-page/x7f9k2m/index.html)
- 中級編の申し込みリンクを以下の通り更新します。
    - 変更前: `https://fincs.jp/plan/3052311990205796913/join/agreement?planPriceId=1018`
    - 変更後: `https://fincs.jp/plan/4042180552264191503/join/agreement?planPriceId=1028`
    - (注: 初級編は既存コードと一致しているため変更なし)

## 検証計画

### 自動テスト
- なし

### 手動検証
1. **grepによる確認**
   - 修正後のファイル内で、古いID (`1009`, `1018`) が存在せず、新しいID (`1029`, `1028`) とパス (`4042180552264191503`) が正しく反映されていることをコマンドラインで確認します。
