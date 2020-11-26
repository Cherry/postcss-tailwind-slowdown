# postcss-tailwind-slowdown
Tailwind 2.0 poor performance example


In this stripped down repo, we have a very basic PostCSS workflow setup, with `postcss-preset-env`, a simple JS workflow with just `babel-loader` (defaults for example sake), and 2 entrypoints, both requiring tailwind. On my Ryzen 3700x system, the `npm run dev` step takes almost 50 seconds for the first build, and then if I alter the `tailwind.config.js` file, the rebuild takes another 50s. For some members on my team with older systems, this rebuild process can take multiple minutes, which is as you can imagine quite disruptive to their workflow.

## Steps to reproduce

- Clone repo and `npm ci`

- Run `npm run dev`
	- *This step will take a long time - almost 50s on my system and much longer for other members in my team*

- The slow rebuild can be re-triggered by editing the `tailwind.config.js` and tweaking the `theme.extend.fontSize.tiny` property to another value like `.4rem`.

## Example webpack build output

```
[webpack-cli] Compilation starting...
[webpack-cli] Compilation finished
assets by path css/*.css 14.1 MiB
  asset css/appA.css 7.04 MiB [compared for emit] (name: appA)
  asset css/appB.css 7.04 MiB [compared for emit] (name: appB)
asset appA/appA.js 3.55 KiB [compared for emit] (name: appA)
asset appB/appB.js 3.55 KiB [compared for emit] (name: appB)
Entrypoint appA 7.04 MiB = css/appA.css 7.04 MiB appA/appA.js 3.55 KiB
Entrypoint appB 7.04 MiB = css/appB.css 7.04 MiB appB/appB.js 3.55 KiB
runtime modules 548 bytes 2 modules
cacheable modules 286 bytes
  modules by path ./src/apps/ 186 bytes
    ./src/apps/appA/index.js 93 bytes [built] [code generated]
    ./src/apps/appB/index.js 93 bytes [built] [code generated]
  modules by path ./src/css/*.css 100 bytes
    ./src/css/tailwind.css 50 bytes [built] [code generated]
    ./src/css/tailwind-tweaks.css 50 bytes [built] [code generated]
css modules 7.04 MiB
  css ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/css/tailwind.css 7.04 MiB [code generated]
  css ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/css/tailwind-tweaks.css 181 bytes [code generated]
webpack 5.7.0 compiled successfully in 48786 ms
```