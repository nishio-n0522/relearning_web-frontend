# memo

1. BEM で設計する場合の下記のようなケースでどのように対処するのかわからない

- 想定ケース: theme を適用するとページ全体のカラーが変更されるような場合
  - theme 変更のためのクラスの設定は、html 内で 1 箇所にしたい
  - DOM の上位要素に theme 用の modifier を設定する（ex. block_theme_dark）
  - この時、theme_dark という modifier が block と結びつくため、ほかの block 要素に対する modifier のクラス名として使用するのは不適切では？
  -

```html
<header class="head">
  <div class="head-section head-section_justify-content_right">
    <a class="btn btn-small" href="#">ログイン</a>
    <a class="btn btn-small btn-long" href="#">お問い合わせ</a>
  </div>
  <div class="head-section">
    <ul class="menu">
      <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Docs</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Blog</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Info</a></li>
    </ul>
  </div>
</header>
```

```css
.head {
  width: 1080px;
  margin: 0px auto;
  background-color: #eee;
}

.head-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3px;
}

.head-section_justify-content_right {
  justify-content: right;
}

.menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.menu__item {
  list-style-type: none;
}

.menu__link {
  text-decoration: none;
}
```
