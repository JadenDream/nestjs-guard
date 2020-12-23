
## Description

一個 nest js 使用者登入認證的例子, 資料庫使用mysql


## Installation

第一次下載運行時需要先安裝更新
(需要預先安裝 nest cli : [https://docs.nestjs.cn/6/cli?id=cli])

```bash
$ nest u

$ npm install --save @nestjs/passport passport passport-local
$ npm install --save-dev @types/passport-local

$ npm install @nestjs/jwt passport-jwt
$ npm install @types/passport-jwt --save-dev

$ npm install --save @nestjs/typeorm typeorm mysql

// todo
npm i --save @nestjs/graphql apollo-server-express graphql-tools graphql
```

資料庫設定請參閱 src/app.module.ts 中的連結設定

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

