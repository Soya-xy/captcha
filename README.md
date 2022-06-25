## Canvas Captcha

This project was reconstructed into TypeScript based on [jigsaw](https://github.com/yeild/jigsaw)

## Features

- Local Image
- Use TypeScript
- Randomly select network pictures from [picsum.photos](https://picsum.photos)

## Use
install captcha
```bash
npm install @ldzn/js-captcha
# or
yarn add @ldzn/js-captcha
# or
pnpm install @ldzn/js-captcha
```

import captcha 

```js
import { captcha } from '@ldzn/js-captcha'
captcha({
  el: DOM,
  widht: 100,
  height: 100,
  imgSrc:'',
  onSuccess() {
    console.log('success')
  },
  onFail() {
    console.log('err')
  },
  onRefresh() {
    console.log('refresh')
  }
})
```

then  import style 
```js
import '@ldzn/js-captcha/style.css'
```
OR

```css
 @import '@ldzn/js-captcha/style.css';
```



## License

[MIT](./LICENSE) License © 2022 [Soya-xy](https://github.com/Soya-xy)
