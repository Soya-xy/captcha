## Canvas Captcha

## Use

import captcha 

```js
import { captcha } from '@ldzn/js-captcha'
captcha({
  el: DOM,
  widht: 100,
  height: 100,
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
