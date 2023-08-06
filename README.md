# gRPC のチュートリアル実施
#2023/07/23
## Buf CLI の導入
- Protocol Buffers の開発フローを支援するツール
### できること
- 破壊的変更の見地
- protoc プラグインを用いたコード生成
- リンタ
- フォーマッタ
- gRPC API のコマンドライン実行
- 依存パッケージの管理

~~~sh
# インストール
brew install bufbuild/buf/buf
~~~
### 実際にチュートリアルやってみる
1. 初期化
  buf.yaml を自動生成する。
  buf.yaml は proto ディレクトリにあるべき
~~~sh
buf mod init
~~~
2. 依存関係のマニフェストの作成
  このたいみんぐでは不要か？
  buf.lock を自動生成する。
~~~sh
buf mod update
~~~

3. buf.work.yaml の作成
- リポジトリのルートディレクトリに作成する
- workspaceを定義するのに使われる
- TODO
~~~
.
├── buf.work.yaml
├── paymentapis
│   ├── acme
│   │   └── payment
│   │       └── v2
│   │           └── payment.proto
│   └── buf.yaml
└── petapis
    ├── acme
    │   └── pet
    │       └── v1
    │           └── pet.proto
    └── buf.yaml
~~~

## 参考
- [Buf - buf.work.yaml](https://buf.build/docs/configuration/v1/buf-work-yaml/)
- [gRPC：buf とは、buf でできること - SYM's Tech Knowledge Index & Creation Records](https://symthy.hatenablog.com/entry/2023/03/26/010229) 
- [Buf - buf](https://buf.build/docs/reference/cli/buf/)
