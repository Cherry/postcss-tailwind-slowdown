# postcss-tailwind-slowdown
Tailwind 2.0 poor performance example


In this stripped down repo, we have a very basic PostCSS workflow setup, with `postcss-preset-env`, a simple JS workflow with just `babel-loader` (defaults for example sake), and 2 entrypoints, both requiring tailwind. On my Ryzen 3700x system, the `npm run dev` step takes almost 50 seconds for the first build, and then if I alter the `tailwind.config.js` file, the rebuild takes another 50s. For some members on my team with older systems, this rebuild process can take multiple minutes, which is as you can imagine quite disruptive to their workflow.

## Steps to reproduce:

- Clone repo and `npm ci`
- Run `npm run dev`
	- This step will take a long time - almost 50s on my system and much longer for members in my team
- The slow rebuild can be re-triggered by editing the `tailwind.config.js` and tweaking the `theme.extend.fontSize.tiny` property to another value like `.4rem`.