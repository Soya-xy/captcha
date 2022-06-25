
let __unconfig_data;
let __unconfig_stub = function (data) { __unconfig_data = data };
__unconfig_stub.default = (data) => { __unconfig_data = data };
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const __unconfig_default =  defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@ldzn/js-captcha',
      fileName: 'index',
    },
  },
  plugins: [dts({
    outputDir: 'dist',
  })],

})

if (typeof __unconfig_default === "function") __unconfig_default(...[{"command":"serve","mode":"development"}]);export default __unconfig_data;