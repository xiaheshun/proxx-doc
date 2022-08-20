---
lang: zh-CN
title: GitHubAction-invalid value used as weak map key
description: 构建静态博客问题汇总和解决方法
---

GitHub Action 错误
```
Run pnpm docs:build

> @ docs:build /home/runner/work/proxx-doc/proxx-doc
> vuepress build docs

info Initializing VuePress and preparing data...
- Compiling with vite
✔ Compiling with vite - done
- Rendering pages
- Rendering pages /
- Rendering pages /personal/
✖ Rendering pages - failed
TypeError: Invalid value used as weak map key
    at WeakMap.set (<anonymous>)
    at normalizePropsOptions (/home/runner/work/proxx-doc/proxx-doc/node_modules/.pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core/dist/runtime-core.cjs.prod.js:3179:15)
    at createComponentInstance (/home/runner/work/proxx-doc/proxx-doc/node_modules/.pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core/dist/runtime-core.cjs.prod.js:5695:23)
    at renderComponentVNode (/home/runner/work/proxx-doc/proxx-doc/node_modules/.pnpm/@vue+server-renderer@3.2.37_vue@3.2.37/node_modules/@vue/server-renderer/dist/server-renderer.cjs.prod.js:168:22)
    at Object.ssrRenderComponent (/home/runner/work/proxx-doc/proxx-doc/node_modules/.pnpm/@vue+server-renderer@3.2.37_vue@3.2.37/node_modules/@vue/server-renderer/dist/server-renderer.cjs.prod.js:605:12)
    at _sfc_ssrRender$5 (/home/runner/work/proxx-doc/proxx-doc/docs/.vuepress/.temp/.server/app.js:1145:24)
    at renderComponentSubTree (/home/runner/work/proxx-doc/proxx-doc/node_modules/.pnpm/@vue+server-renderer@3.2.37_vue@3.2.37/node_modules/@vue/server-renderer/dist/server-renderer.cjs.prod.js:250:13)
    at renderComponentVNode (/home/runner/work/proxx-doc/proxx-doc/node_modules/.pnpm/@vue+server-renderer@3.2.37_vue@3.2.37/node_modules/@vue/server-renderer/dist/server-renderer.cjs.prod.js:185:16)
    at renderVNode (/home/runner/work/proxx-doc/proxx-doc/node_modules/.pnpm/@vue+server-renderer@3.2.37_vue@3.2.37/node_modules/@vue/server-renderer/dist/server-renderer.cjs.prod.js:292:22)
    at renderComponentSubTree (/home/runner/work/proxx-doc/proxx-doc/node_modules/.pnpm/@vue+server-renderer@3.2.37_vue@3.2.37/node_modules/@vue/server-renderer/dist/server-renderer.cjs.prod.js:256:13)
 ELIFECYCLE  Command failed with exit code 1.
Error: Process completed with exit code 1.
```

错误发生定位personal/README.md文件
```
+ :e-mail: **邮&ensp;&ensp;&ensp;&ensp;箱：** <font color="#4ea1db">xiaheshun@foxmail.com</font>
```
MD文档中单行不能html和md语法混用，跑的时候没问题，但是vuepress没法编译打静态包

解决办法： 删除混用

```markdown
+ :e-mail: **邮&ensp;&ensp;&ensp;&ensp;箱：** xiaheshun@foxmail.com
```
