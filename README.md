## Weather App

## ๐ ํ๋ก์ ํธ ๊ฐ์
์ ์ ์ ์์น๋ฅผ ๊ธฐ๋ฐ์ผ๋ก ๋ ์จ์ ๋ณด ์ ๊ณต

## ๐ ํ๋ก์ ํธ ๋ฐฐํฌ

### ๐ [๋ฒ ํฌ์ฌ์ดํธ](https://juiweatherapp.netlify.app/)

## โ ๊ธฐ์  ์คํ
  <img src="https://img.shields.io/badge/TypeScript-v4.4.2-blue"/>
  <img src="https://img.shields.io/badge/React-v18.1.0-blue"/>
  <img src="https://img.shields.io/badge/Redux/toolkit-v1.8.1-blue"/>
  <img src="https://img.shields.io/badge/React Router Dom-v6.3.0-blue"/>

```
๊ทธ ์ธ ์ถ๊ฐ ๋ผ์ด๋ธ๋ฌ๋ฆฌ
  - swiper
  - dayjs

```

## ๐ ํ๋ก์ ํธ ํธ๋ฆฌ
```
src
 โฃ assets       // json, svg ํ์ผ
 โฃ components   // ๊ณตํต์ผ๋ก ์ฌ์ฉํ๋ ์ปดํฌ๋ํธ
 โฃ hooks        // Custom Hooks
 โฃ routes       // ํ์ด์ง
 โฃ util         // JSON ์ฒ๋ฆฌ ๊ด๋ จ
 โฃ styles       // ์ ์ญ style
 โฃ types        // ํ์ํ type ์ ์
```

## ๐ Getting Started / ์ด๋ป๊ฒ ์์ํ๋์?

1. Repository ํด๋ก 
```sh
$ git clone https://github.com/jui9266/weatherApp.git
```

2. Dependencies ์ค์น
```sh
$ yarn install
```

3. Run ์คํ
```sh
$ yarn start
```

## ๐ผ ์คํ ์ด๋ฏธ์ง

![์คํ์ด๋ฏธ์ง](./readmeImg/demo.gif)

## ๐ง๊ตฌํ ๋ฐฉ๋ฒ 
### ๋ ์จ ์ ๋ณด
> Weather Component
- OpenWeatherMap๋ฅผ ์ฌ์ฉํ์ฌ ์ง์ญ์ ์ขํ๋ก ๋ ์จ ์ ๋ณด๋ฅผ ๋ฐ์์ต๋๋ค.
- onecall ์์ฒญ์ผ๋ก ํ์ฌ ๋ ์จ, ์๊ฐ๋ณ, ์ผ์ฃผ์ผ๊ฐ์ ๋ ์จ์ ๋ณด๋ฅผ ๊ฐ์ ธ์์ต๋๋ค.
- ์ด๊ธฐ ์์น ์ ๋ณด๋ ์์ธ ๊ฐ๋จ์ผ๋ก ์ค์ ํ๋ฉฐ ์๋จ์ ์์น ๋๋ ๊ฒ์ ํ์ด์ง์์ ์ํ๋ ์์น๋ฅผ ๊ฒ์ ํ  ์ ์๋๋ก ๊ตฌํํ์ต๋๋ค.
- ์๊ฐ๋ณ ๋ ์จ ์ ๋ณด๋ swiper ํจํค์ง๋ฅผ ์ฌ์ฉํ์ฌ ์ข์ฐ๋ก ์คํฌ๋กค ํ  ์ ์์ต๋๋ค.

### ์์น ๊ฒ์
> Search Component
- ์นด์นด์ค ๋ก์ปฌ ๊ฒ์ api๋ฅผ ์ฌ์ฉํ์ฌ ์ฃผ์๋ฅผ ์๋ ฅํ๋ฉด ์ขํ๊ฐ์ ๋ฐ์์ต๋๋ค.
- api ์์ ๋ฐ์ ์ขํ๋ฅผ redux๋ก ๊ด๋ฆฌํ๋ฉฐ ์ขํ๊ฐ ๋ฐ๋๋๋ง๋ค ๋ ์จ ์ ๋ณด๋ฅผ ๋ค์ ๋ฐ์ ์ค๋ก๋ ๊ตฌํํ์์ต๋๋ค.
- localstoge๋ฅผ ์ด์ฉํ์ฌ ์ต๊ทผ ๊ฒ์ํ ์ฃผ์๋ฅผ ์ ์ฅํ๋ฉฐ ํด๋น ์ฃผ์๋ฅผ ํด๋ฆญํ๋ฉด ์์ธํ ๋ ์จ ์ ๋ณด๋ฅผ ๋ฆฌ๋๋๋ง ํด์ค๋๋ค.



## ๐ฅ ์ด๋ ค์ ๋ ์ 
- ๋ก์ปฌ ๊ฒ์ api์์ ๋ฐ์์จ ์ขํ๋ฅผ dispatchํ๋๊ฒ์ด ์ด๋ ค์ ์ต๋๋ค.

## ๐ ํ์ฌ ์ด์
