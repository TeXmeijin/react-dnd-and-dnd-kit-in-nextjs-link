## 本リポジトリの目的

以下ライブラリにおけるNext.js上の挙動のとある違いを説明すること

## セットアップ

- yarn
- yarn dev

## ライブラリ

- react-dnd
- dnd-kit

## 本リポジトリの要点

- react-dndはnext/linkをラップしたときに意図したとおりにDnDできる
- dnd-kitはnext/linkをラップしたときに意図したとおりにDnDできない
  - ドロップ後にページ遷移してしまう
  - ここでのページ遷移はhistory.pushStateを使っている遷移ではなく、aタグの遷移
