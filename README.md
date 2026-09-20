# React Router Basic Routing App

React Routerを使用して、URLによって表示するコンポーネントを切り替える基本的なルーティングを実装する練習アプリです。

## 概要

`BrowserRouter`、`Routes`、`Route`を使用して、以下のURLに対応するページを作成します。

| URL      | 表示コンポーネント |
| -------- | --------- |
| `/`      | `Home`    |
| `/about` | `About`   |

## 学習内容

* `BrowserRouter`の使い方
* `Routes`の使い方
* `Route`の使い方
* URLとコンポーネントの対応付け
* React Routerによる基本的なルーティング

## 使用技術

* React
* TypeScript
* React Router
* Vite

## ディレクトリ構成

```text
src/
├── pages/
│   ├── Home.tsx
│   └── About.tsx
├── App.tsx
└── main.tsx
```

## ルーティング

### `/`

`Home`コンポーネントを表示します。

```tsx
<Route path="/" element={<Home />} />
```

### `/about`

`About`コンポーネントを表示します。

```tsx
<Route path="/about" element={<About />} />
```

## App.tsx

```tsx
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## 実行

```bash
npm install
npm run dev
```

ブラウザで以下にアクセスします。

```text
http://localhost:5173/
```

```text
http://localhost:5173/about
```

## 課題のポイント

React Routerでは、`Route`の`path`によってURLと表示するコンポーネントを対応させます。

```text
URL
 ↓
Routes
 ↓
Route
 ↓
対応するコンポーネント
```

この課題では、React Routerの基本となる「URLに応じてページを切り替える」という仕組みを理解することを目的とします。
