# Book_TypeScript
+ プロを目指す人のためのTypeScript入門
+ TypeScriptとReact/Next.jsで作る実践アプリケーション開発

## プロを目指す人のためのTypeScript入門
+ 書籍 https://gihyo.jp/book/2022/978-4-297-12747-3
+ サポートページ https://gihyo.jp/book/2022/978-4-297-12747-3/support

## TypeScriptとReact/Next.jsで作る実践アプリケーション開発
+ 書籍　https://gihyo.jp/book/2022/978-4-297-12916-3
+ サポートページ https://gihyo.jp/book/2022/978-4-297-12916-3/support
+ ソースコード1 https://github.com/gihyo-book/ts-nextbook-app
+ ソースコード2 https://github.com/gihyo-book/ts-nextbook-json
+ 正誤表 https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5DsuAjcbHuC38u3v4-rfnsmDthgSY4wrZiPvYNyAeuTYxLTzGUWiEgCD8vnv--w/pubhtml

## Version
+ Node.js v18.16.1
+ npm v9.5.1
+ TypeScript v5.1.6
+ @types/node v20.4.1

## TypeScriptのインストール
1. `$ npm init --yes`
2. `npm install --save-dev typescript@5.1.6 @types/node@20.4.1`
+ `--dev-save`オプションで, インストールパッケージがプログラムの実行時以外(開発,ビルド)時のみ必要(`devDependencies`)であることを指定する

## インストール後のカレントディレクトリ
```
.
|- node_modules
|  |- @types
|  |  |- node
|  |- typescript
|- package.lock.json
|- package.json
```
+ node_modules : npmコマンドでインストールしたパッケージ郡
+ package-lock.json : 現在インストールされているパッケージの情報を記述したファイル. npmが操作するので開発者は扱わないこと
+ package.json : package-lock.jsonと似たような内容. こちらは開発者が操作する.
+ git cloneしてきた場合は, package.jsonやpackage-lock.jsonは既に存在するが, node_modulesがまだ存在しないという状態になる. この場合は, 引数なしの`$npm install`コマンドを叩くことで, node_modulesが再度生成される.

## tsconfig.jsonの準備
+ TypeScriptコンパイラに対する設定ファイル
+ TypeScriptコンパイラへのオプション追加は, コマンドラインに直叩きする方法とtsconfig.jsonに記述する方法の2種類
+ 積極的にtsconfig.jsonを利用しよう
+ `npx`(旧)コマンドまたは`npm exec`コマンドは, node_modules内にインストールされたコマンドラインプログラムを実行してくれるツール
+ Node.jsの種類 : 旧型 CommonJS, 新型 : NextJS(ES Modules)
1. `$ npx tsc --init`
2. `"target": "es2016"` -> `"target": "ex2020"`に変更
3. `"module": "commonjs"` -> `"module": "exnext"`に変更(Next.js)
4. `// "moduleResolution: "none10"` -> `"moduleResolution": "node10"` アンコメント
5. `// "outDir": "./"` -> `"outDir": ".\your\path\to"` *.jsファイルの出力先を指定
6. インクルードオプションの追加, tsconfig.jsonの末尾に追加 `"include": ["./src/**/*.ts]`

## TypeScriptのコンパイル
+ `npx tsc`
+ `npx tsc --watch`


## プロを目指す人のためのTypeScript入門
### 目次

#### 第1章　イントロダクション
+ 1.1　TypeScriptとは
+ 1.1.1　JavaScriptに対する“静的型付け”
+ 1.1.2　高い表現力を持つ型システム
+ 1.1.3　静的型付けのメリット（1）型安全性
+ 1.1.4　静的型付けのメリット（2）ドキュメント化と入力補完
+ 1.1.5　TypeScript年表
+ 1.2　TypeScriptとJavaScriptとの関係
+ 1.2.1　TypeScriptコンパイラの役割（1）型チェック
+ 1.2.2　TypeScriptコンパイラの役割（2）トランスパイル
+ 1.2.3　TypeScriptとECMAScriptの関係
+ 1.3　TypeScriptの開発環境
+ 1.3.1　Node.jsのインストール
+ 1.3.2　エディタの準備
+ 1.3.3　ディレクトリの作成とTypeScriptのインストール
+ 1.3.4　tsconfig.jsonの準備
+ 1.3.5　初めてのTypeScriptプログラム

#### 第2章　基本的な文法・基本的な型
+ 2.1　文と式
+ 2.1.1　文と式の基本
+ 2.1.2　文と式は“結果”の有無で区別する
+ 2.1.3　式文
+ 2.2　変数の宣言と使用
+ 2.2.1　変数宣言の構文
+ 2.2.2　識別子
+ 2.2.3　変数に型注釈を与える
+ 2.2.4　letによる変数宣言と変数への再代入
+ 2.3　プリミティブ型
+ 2.3.1　プリミティブとは何か
+ 2.3.2　TypeScriptにおける数値型の特徴
+ 2.3.3　数値リテラル
+ 2.3.4　任意精度整数（BigInt）
+ 2.3.5　文字列型と3種類の文字列リテラル
+ 2.3.6　文字列中のエスケープシーケンス
+ 2.3.7　真偽値と真偽値リテラル
+ 2.3.8　nullとundefined
+ 2.3.9　プリミティブ型同士の変換（1）暗黙の変換を体験する
+ 2.3.10　プリミティブ型同士の変換（2）明示的な変換を行う
+ 2.4　演算子
+ 2.4.1　算術演算子（1）二項演算子
+ 2.4.2　算術演算子（2）単項演算子
+ 2.4.3　文字列の結合を+演算子で行う
+ 2.4.4　比較演算子と等価演算子
+ 2.4.5　論理演算子（1）真偽値の演算
+ 2.4.6　論理演算子（2）一般形と短絡評価
+ 2.4.7　条件演算子
+ 2.4.8　代入演算子
+ 2.4.9　その他の演算子
+ 2.5　基本的な制御構文
+ 2.5.1　条件分岐（1）if文の基本
+ 2.5.2　ブロック
+ 2.5.3　条件分岐（2）elseを使う
+ 2.5.4　switch文
+ 2.5.5　while文によるループ
+ 2.5.6　for文によるループ
+ 2.6　力試し
+ 2.6.1　FizzBuzzを書いてみよう
+ 2.6.2　解説

#### 第3章　オブジェクトの基本とオブジェクトの型
+ 3.1　オブジェクトとは
+ 3.1.1　オブジェクトは“連想配列”である
+ 3.1.2　オブジェクトリテラル（1）基本的な構文
+ 3.1.3　オブジェクトリテラル（2）プロパティ名の種々の指定方法
+ 3.1.4　プロパティアクセス：値の取得と代入
+ 3.1.5　オブジェクトリテラル（3）スプレッド構文
+ 3.1.6　オブジェクトはいつ“同じ”なのか
+ 3.2　オブジェクトの型
+ 3.2.1　オブジェクト型の記法
+ 3.2.2　オブジェクト型の型チェックと安全性
+ 3.2.3　type文で型に別名をつける
+ 3.2.4　interface宣言でオブジェクト型を宣言する
+ 3.2.5　任意のプロパティ名を許容する型（インデックスシグネチャ）
+ 3.2.6　オプショナルなプロパティの宣言
+ 3.2.7　読み取り専用プロパティの宣言
+ 3.2.8　typeofキーワードで変数の型を得る
+ 3.3　部分型関係
+ 3.3.1　部分型とは
+ 3.3.2　プロパティの包含関係による部分型関係の発生
+ 3.3.3　余剰プロパティに対する型エラーについて
+ 3.4　型引数を持つ型
+ 3.4.1　型引数を持つ型を宣言する
+ 3.4.2　型引数を持つ型を使用する
+ 3.4.3　部分型関係による型引数の制約
+ 3.4.4　オプショナルな型引数
+ 3.5　配列
+ 3.5.1　配列リテラルで配列を作成する
+ 3.5.2　配列の要素にアクセスする
+ 3.5.3　配列型の記法
+ 3.5.4　readonly配列型
+ 3.5.5　配列の機能を使う
+ 3.5.6　for-of文によるループ
+ 3.5.7　タプル型
+ 3.6　分割代入
+ 3.6.1　オブジェクトの分割代入（1）基本的なパターン
+ 3.6.2　オブジェクトの分割代入（2）ネストしたパターン
+ 3.6.3　配列の分割代入
+ 3.6.4　分割代入のデフォルト値
+ 3.6.5　restパターンでオブジェクトの残りを取得する
+ 3.7　その他の組み込みオブジェクト
+ 3.7.1　Dateオブジェクト
+ 3.7.2　正規表現オブジェクト（1）正規表現の基本
+ 3.7.3　正規表現オブジェクト（2）正規表現を使う方法
+ 3.7.4　Mapオブジェクト・Setオブジェクト
+ 3.7.5　プリミティブなのにプロパティがある？
+ 3.8　力試し
+ 3.8.1　データ処理をしよう
+ 3.8.2　解説
+ 3.8.3　別解

#### 第4章　TypeScriptの関数
+ 4.1　関数の作り方
+ 4.1.1　関数宣言で関数を作る
+ 4.1.2　返り値がない関数を作る
+ 4.1.3　関数式で関数を作る
+ 4.1.4　アロー関数式で関数を作る
+ 4.1.5　アロー関数式の省略形
+ 4.1.6　メソッド記法で関数を作る
+ 4.1.7　可変長引数の宣言
+ 4.1.8　関数呼び出しにおけるスプレッド構文
+ 4.1.9　オプショナル引数の宣言
+ 4.1.10　コールバック関数を使ってみる
+ 4.2　関数の型
+ 4.2.1　関数型の記法
+ 4.2.2　返り値の型注釈は省略可能
+ 4.2.3　返り値の型注釈は省略すべきか
+ 4.2.4　引数の型注釈が省略可能な場合
+ 4.2.5　コールシグネチャによる関数型の表現
+ 4.3　関数型の部分型関係
+ 4.3.1　返り値の型による部分型関係
+ 4.3.2　引数の型による部分型関係
+ 4.3.3　引数の数による部分型関係
+ 4.4　ジェネリクス
+ 4.4.1　関数の型引数とは
+ 4.4.2　関数の型引数を宣言する方法
+ 4.4.3　関数の型引数は省略できる
+ 4.4.4　型引数を持つ関数型
+ 4.5　変数スコープと関数
+ 4.5.1　変数のスコープとは
+ 4.5.2　ブロックスコープと関数スコープ
+ 4.6　力試し
+ 4.6.1　簡単な関数を書いてみよう
+ 4.6.2　解説
+ 4.6.3　コールバック関数の練習
+ 4.6.4　解説

#### 第5章　TypeScriptのクラス
+ 5.1　クラスの宣言と使用
+ 5.1.1　クラス宣言とnew構文
+ 5.1.2　プロパティを宣言する
+ 5.1.3　メソッドを宣言する
+ 5.1.4　コンストラクタ
+ 5.1.5　静的プロパティ・静的メソッド
+ 5.1.6　種類のアクセシビリティ修飾子
+ 5.1.7　コンストラクタ引数でのプロパティ宣言
+ 5.1.8　クラス式でクラスを作成する
+ 5.1.9　もう1つのプライベートプロパティ
+ 5.1.10　クラスの静的初期化ブロック
+ 5.1.11　型引数を持つクラス
+ 5.2　クラスの型
+ 5.2.1　クラス宣言はインスタンスの型を作る
+ 5.2.2　newシグネチャによるインスタンス化可能性の表現
+ 5.2.3　instanceof演算子と型の絞り込み
+ 5.3　クラスの継承
+ 5.3.1　継承（1）子は親の機能を受け継ぐ
+ 5.3.2　継承（2）親の機能を上書きする
+ 5.3.3　override修飾子とその威力
+ 5.3.4　privateとprotectedの動作と使いどころ
+ 5.3.5　implementsキーワードによるクラスの型チェック
+ 5.4　this
+ 5.4.1　関数の中のthisは呼び出し方によって決まる
+ 5.4.2　アロー関数におけるthis
+ 5.4.3　thisを操作するメソッド
+ 5.4.4　関数の中以外のthis
+ 5.5　例外処理
+ 5.5.1　throw文とErrorオブジェクト
+ 5.5.2　例外をキャッチするtry-catch文
+ 5.5.3　例外処理と大域脱出
+ 5.5.4　finallyで脱出に割り込む
+ 5.6　力試し
+ 5.6.1　クラスに書き換えてみる
+ 5.6.2　解説
+ 5.6.3　クラスを関数に書き換えてみる
+ 5.6.4　解説

#### 第6章　高度な型
+ 6.1　ユニオン型とインターセクション型
+ 6.1.1　ユニオン型の基本
+ 6.1.2　伝播するユニオン型
+ 6.1.3　インターセクション型とは
+ 6.1.4　ユニオン型とインターセクション型の表裏一体な関係
+ 6.1.5　オプショナルプロパティ再訪
+ 6.1.6　オプショナルチェイニングによるプロパティアクセス
+ 6.2　リテラル型
+ 6.2.1　種類のリテラル型
+ 6.2.2　テンプレートリテラル型
+ 6.2.3　ユニオン型とリテラル型を組み合わせて使うケース
+ 6.2.4　リテラル型のwidening
+ 6.2.5　wideningされるリテラル型・wideningされないリテラル型
+ 6.3　型の絞り込み
+ 6.3.1　等価演算子を用いる絞り込み
+ 6.3.2　typeof演算子を用いる絞り込み
+ 6.3.3　代数的データ型をユニオン型で再現するテクニック
+ 6.3.4　switch文でも型を絞り込める
+ 6.4　keyof型・lookup型
+ 6.4.1　lookup型とは
+ 6.4.2　keyof型とは
+ 6.4.3　keyof型・lookup型とジェネリクス
+ 6.4.4　number型もキーになれる？
+ 6.5　asによる型アサーション
+ 6.5.1　型アサーションを用いて式の型をごまかす
+ 6.5.2　as constの用法
+ 6.6　any型とunknown型
+ 6.6.1　any型という最終兵器
+ 6.6.2　any型の存在理由
+ 6.6.3　anyに近いが安全なunknown型
+ 6.7　さらに高度な型
+ 6.7.1　object型・never型
+ 6.7.2　型述語（ユーザー定義型ガード）
+ 6.7.3　可変長タプル型
+ 6.7.4　mapped types
+ 6.7.5　conditional types
+ 6.7.6　組み込みの型を使いこなす
+ 6.8　力試し
+ 6.8.1　タグ付きユニオンの練習（1）
+ 6.8.2　解説
+ 6.8.3　タグ付きユニオンの練習（2）
+ 6.8.4　解説
+ 6.8.5　タグ付きユニオンの練習（3）
+ 6.8.6　解説

#### 第7章　TypeScriptのモジュールシステム
+ 7.1　import宣言とexport宣言
+ 7.1.1　変数のエクスポートとインポート
+ 7.1.2　関数もエクスポートできる
+ 7.1.3　defaultエクスポートとdefaultインポート
+ 7.1.4　型のインポート・エクスポート
+ 7.1.5　その他の関連構文
+ 7.2　Node.jsのモジュールシステム
+ 7.2.1　Node.jsの組み込みモジュール
+ 7.2.2　npmとは
+ 7.2.3　package.jsonとpackage-lock.jsonの役割
+ 7.3　DefinitelyTypedと@types
+ 7.3.1　@typesパッケージのインストール
+ 7.4　力試し
+ 7.4.1　ファイルを読み込んでみる
+ 7.4.2　解説
+ 7.4.3　pathモジュールも使ってみる
+ 7.4.4　解説

#### 第8章　非同期処理
+ 8.1　非同期処理とは
+ 8.1.1　“時間がかかる処理”としての非同期処理
+ 8.1.2　シングルスレッドモデル・ノンブロッキング
+ 8.2　コールバックによる非同期処理の扱い
+ 8.2.1　コールバック関数とは
+ 8.2.2　タイマーの例
+ 8.2.3　fsモジュールによるファイル操作の例
+ 8.2.4　同期処理と非同期処理の順序
+ 8.3　Promiseを使う
+ 8.3.1　Promise版のfsを使ってみる
+ 8.3.2　コールバック関数の登録とエラー処理（1）
+ 8.3.3　コールバック関数の登録とエラー処理（2）
+ 8.3.4　自分でPromiseオブジェクトを作る
+ 8.3.5　Promiseの静的メソッド（1）
+ 8.3.6　Promiseの静的メソッド（2）
+ 8.3.7　Promiseの静的メソッド（3）
+ 8.3.8　Promiseチェーン（1）チェーンを作る
+ 8.3.9　Promiseチェーン（2）非同期処理の連鎖
+ 8.3.10　Promiseチェーン（3）エラーの扱い
+ 8.3.11　dynamic import構文
+ 8.4　async/await構文
+ 8.4.1　async関数を作ってみる
+ 8.4.2　await式も使ってみる
+ 8.4.3　awaitの返り値
+ 8.4.4　awaitとエラー処理
+ 8.4.5　async関数のいろいろな宣言方法
+ 8.5　力試し
+ 8.5.1　fs/promisesを使ってみる
+ 8.5.2　解説
+ 8.5.3　タイムアウトを追加してみよう
+ 8.5.4　解説

#### 第9章　TypeScriptのコンパイラオプション
+ 9.1　tsconfig.jsonによるコンパイラオプションの設定
+ 9.1.1　tsconfig.jsonの自動生成
+ 9.1.2　ファイルパス周りの設定を押さえる
+ 9.2　チェックの厳しさに関わるオプション
+ 9.2.1　チェックをまとめて有効にできるstrictオプション
+ 9.2.2　strictNullChecksでnullとundefinedを安全に検査する
+ 9.2.3　型の書き忘れや推論の失敗を防ぐnoImplicitAnyオプション
+ 9.2.4　インデックスアクセスを厳しくするnoUncheckedIndexedAccessオプション
+ 9.2.5　新規プロジェクトでのお勧め設定

## TypeScriptとReact/Next.jsで作る実践アプリケーション開発
### 目次


#### 1 Next.jsとTypeScriptによるモダン開発
1.1 Next.jsとTypeScript<br>
1.2 フロントエンド開発の変遷<br>
1.2.1　JavaScript黎明期とjQueryの人気<br>
1.2.2　SPAの登場とMVC/MVVMフレームワーク<br>
column.　SPA普及の裏で貢献したHistory API<br>
1.2.3　Reactの登場とコンポーネント指向・状態管理<br>
1.2.4　Node.jsの躍進<br>
column.　CommonJSとESモジュール<br>
column.　Deno<br>
1.2.5　AltJSの流行とTypeScriptの定番化<br>
1.2.6　ビルドツールとタスクランナー<br>
1.2.7　SSR/SSGの必要性<br>
1.2.8　Next.jsの登場と受容<br>
1.3 モダンフロントエンド開発の設計思想<br>
1.3.1　フロントエンド技術の複雑化<br>
1.3.2　コンポーネント指向とは<br>
column.　FluxのライブラリRedux<br>
1.3.3　Next.jsがなぜ必要になってきているか<br>
column.　Vue.jsとNuxt.js<br>
column.　Next.jsの対応ブラウザ<br>
column.　Reactコンポーネントの復元 - Hydration<br>

#### 2 TypeScriptの基礎
2.1 TypeScriptの基礎知識<br>
2.1.1　TypeScript登場の背景<br>
2.1.2　TypeScriptとVisual Studio Code<br>
2.1.3　TypeScriptとJavaScriptの違い<br>
2.1.4　TypeScriptコマンドラインツールによるコンパイル<br>
2.2 型の定義<br>
2.2.1　変数<br>
2.2.2　プリミティブ型<br>
2.2.3　配列<br>
2.2.4　オブジェクト型<br>
2.2.5　any<br>
2.2.6　関数<br>
2.3 基本的な型の機能<br>
2.3.1　型推論<br>
2.3.2　型アサーション<br>
2.3.3　型エイリアス<br>
2.3.4　インタフェース<br>
2.3.5　クラス<br>
2.4 実際の開発で重要な型<br>
2.4.1　Enum型<br>
2.4.2　ジェネリック型<br>
2.4.3　Union型とIntersection型<br>
2.4.4　リテラル型<br>
2.4.5　never型<br>
2.5 TypeScriptのテクニック<br>
2.5.1　Optional Chaining<br>
2.5.2　Non-null Assertion Operator<br>
2.5.3　型ガード<br>
2.5.4　keyofオペレーター<br>
2.5.5　インデックス型<br>
2.5.6　readonly<br>
2.5.7　unknown<br>
2.5.8　非同期のAsync/Await<br>
2.5.9　型定義ファイル<br>
2.6 TypeScriptの開発時設定<br>
2.6.1　tsconfig.json<br>
2.6.2　Prettier<br>
2.6.3　ESLint<br>
2.6.4　コンパイルオプション<br>
column.　コーディングスタイルガイド<br>
column.　TypeScriptのコンパイラ<br>
column.　import type<br>

#### 3 React/Next.jsの基礎
3.1 React入門<br>
3.1.1　Reactの始め方<br>
3.1.2　Reactの基本<br>
3.1.3　Reactのコンポーネントを作成する<br>
3.2 Reactにおけるコンポーネント<br>
3.2.1　React要素<br>
3.2.2　コンポーネント（Reactコンポーネント）<br>
column.　関数コンポーネントとクラスコンポーネント<br>
3.3 Reactにおける型<br>
column.　FCとVFC<br>
3.4 Context（コンテキスト）<br>
3.5 React Hooks（フック）<br>
3.5.1　useStateとuseReducer―状態のフック<br>
3.5.2　useCallbackとuseMemo―メモ化のフック<br>
3.5.3　useEffectとuseLayoutEffect―副作用のフック<br>
column.　React18におけるuseEffect・useLayoutEffectの挙動<br>
3.5.4　useContext―Contextのためのフック<br>
3.5.5　useRefとuseImperativeHandle―refのフック<br>
3.5.6　カスタムフックとuseDebugValue<br>
3.6 Next.js入門<br>
3.6.1　プロジェクトのセットアップ<br>
3.6.2　プロジェクトの基本的な構成<br>
3.7 Next.jsのレンダリング手法<br>
3.7.1　静的サイト生成（SSG）<br>
3.7.2　クライアントサイドレンダリング（CSR）<br>
3.7.3　サーバーサイドレンダリング（SSR）<br>
3.7.4　インクリメンタル静的再生成（ISR）<br>
3.8 ページとレンダリング手法<br>
3.8.1　Next.jsのページとデータ取得<br>
3.8.2　SSGによるページの実装<br>
3.8.3　getStaticPropsを用いたSSGによるページの実装<br>
3.8.4　getStaticPathsを使った複数ページのSSG<br>
column.　useRouter―ルーティングのためのフック<br>
3.8.5　SSRによるページの実装<br>
3.8.6　ISRによるページの実装<br>
3.9 Next.jsの機能<br>
3.9.1　リンク<br>
3.9.2　画像の表示<br>
3.9.3　APIルート<br>
3.9.4　環境変数/コンフィグ<br>
3.9.5　React/Next.jsとライブラリの互換性<br>

#### 4 コンポーネント開発
4.1 Atomic Designによるコンポーネント設計<br>
4.1.1　Presentational ComponentとContainer Component<br>
4.1.2　Atomic Design<br>
4.1.3　Atoms<br>
4.1.4　Molecules<br>
4.1.5　Organisms<br>
4.1.6　Templates<br>
4.1.7　Pages<br>
4.2 styled-componentsによるスタイル実装<br>
4.2.1　styled-componentsをNext.jsに導入<br>
4.2.2　styled-componentsを用いたコンポーネント実装<br>
4.3 Storybookを使ったコンポーネント管理<br>
4.3.1　Storybookの基本的な使い方<br>
4.3.2　Actionを使用したコールバックのハンドリング<br>
4.3.3　Controlsタブを使ったpropsの制御<br>
4.3.4　アドオン<br>
4.4 コンポーネントのユニットテスト<br>
4.4.1　Reactにおけるユニットテスト<br>
4.4.2　テスト環境構築<br>
4.4.3　React Testing Libraryによるコンポーネントのユニットテスト<br>
4.4.4　非同期コンポーネントのユニットテスト<br>
column.　Next.js 11以前のstyled-components/jest導入<br>

#### 5 アプリケーション開発1～設計・環境設定～
5.1 本章で開発するアプリケーション<br>
5.1.1　アプリケーションの仕様<br>
5.1.2　アプリケーションのアーキテクチャ<br>
5.2 開発環境構築<br>
5.2.1　Next.jsのプロジェクト作成<br>
5.2.2　styled-componentsの設定<br>
5.2.3　ESLintの設定<br>
5.2.4　Storybookの設定<br>
5.2.5　React Hook Formの導入<br>
5.2.6　SWRの導入<br>
5.2.7　React Content Loaderの導入<br>
5.2.8　Material Iconsの導入<br>
5.2.9　環境変数<br>
5.2.10　テスト環境構築<br>
5.2.11　JSON Serverの設定<br>
5.2.12　CSS in JSライブラリ<br>

#### 6 アプリケーション開発2～実装～
6.1 アプリケーションアーキテクチャと全体の実装の流れ<br>
6.2 APIクライアントの実装<br>
6.2.1　fetcher関数<br>
6.2.2　APIクライアントの関数<br>
6.2.3　アプリケーションで使用されるデータの型<br>
6.2.4　開発環境のためのAPIリクエストプロキシ<br>
6.3 コンポーネント実装の準備<br>
6.3.1　レスポンシブデザインに対応したコンポーネント<br>
6.3.2　Wrapperコンポーネントの実装<br>
6.4 Atomic Designによるコンポーネント設計の実施<br>
6.4.1　Atomic Designに沿ってコンポーネントを分割する<br>
6.5 Atomsの実装<br>
6.5.1　ボタン―Button<br>
6.5.2　テキスト―Text<br>
6.5.3　シェイプイメージ―ShapeImage<br>
6.5.4　テキストインプット―Input<br>
6.5.5　テキストエリア―TextArea<br>
6.5.6　バッジ―Badge<br>
6.6 Moleculesの実装<br>
6.6.1　チェックボックス―Checkbox<br>
6.6.2　ドロップダウン―Dropdown<br>
6.6.3　ドロップゾーン―Dropzone<br>
6.6.4　イメージプレビュー―ImagePreview<br>
6.7 Organismsの実装<br>
6.7.1　カート商品―CartProduct<br>
6.7.2　グローバルスピナー―GlobalSpinner<br>
6.7.3　ヘッダー―Header<br>
6.7.4　商品カード―ProductCard<br>
column.　データURIスキーム<br>
6.7.5　商品投稿フォーム―ProductForm<br>
6.7.6　サインインフォーム―SigninForm<br>
6.7.7　ユーザープロファイル―UserProfile<br>
6.8 Templatesの実装<br>
6.8.1　レイアウト―Layout<br>
6.9 ページの設計と実装<br>
6.9.1　サインインページ<br>
6.9.2　ユーザーページ<br>
6.9.3　トップページ<br>
6.9.4　検索ページ<br>
6.9.5　商品詳細ページ<br>
6.9.6　買い物カートページ<br>
6.9.7　出品ページ<br>
6.10 コンポーネントのユニットテストの実装<br>
6.10.1　ボタンのユニットテスト<br>
6.10.2　ドロップダウンのユニットテスト<br>
6.10.3　ドロップゾーンのユニットテスト<br>
6.10.4　ヘッダーのユニットテスト<br>
6.10.5　サインインフォームのテスト<br>
6.10.6　商品投稿フォームのテスト<br>

#### 7 アプリケーション開発3～リリースと改善～
7.1 デプロイとアプリケーション全体のシステムアーキテクチャ<br>
7.2 Heroku<br>
7.3 Vercel<br>
7.3.1　Vercelへのアプリケーションのデプロイ<br>
7.4 ロギング<br>
column.　ログレベル<br>
7.5 SEO<br>
7.5.1　メタタグ<br>
7.5.2　パンくずリスト<br>
7.5.3　sitemap<br>
7.5.4　robots.txt<br>
7.6 アクセシビリティ<br>
7.6.1　セマンティック<br>
7.6.2　補助テキスト<br>
7.6.3　WAI-ARIA<br>
7.7 セキュリティ<br>
7.7.1　フロントエンド開発における脆弱性とその対策<br>
column.　CSRF<br>
column.　Permissions-Policy<br>
column.　X-XSS-Protectionヘッダー<br>
column.　セキュリティテスト<br>
column.　Next.jsのバックエンドの考え方<br>
column.　Next.jsの認証<br>

#### Appendix Next.jsのさらなる活用
A.1 決済ツールStripe<br>
A.1.1　Stripeのセットアップ<br>
A.1.2　Stripe APIの利用<br>
A.1.3　Stripeの公式ドキュメント<br>
A.2 StoryShots―UIスナップショットテスト<br>
A.2.1　StoryShotsとは<br>
A.2.2　storyshots-puppeteer―スナップショットイメージによるUIテスト<br>
A.3 AWS AmplifyへのNext.jsアプリケーションのデプロイ<br>
A.3.1　Next.jsアプリケーションのAWS Amplifyへのデプロイ<br>
A.3.2　SSGを使用したNext.jsアプリケーションのAWS Amplifyへのデプロイ<br>
A.4 国際化ツールi18n<br>
A.4.1　パスによる言語ルーティング<br>
A.4.2　next-i18nを使ったテキストのi18n対応<br>