---
lang: zh-CN
title: GitHubAction-cannot find module
description: 构建静态博客问题汇总和解决方法
---

自动构建过程中，VuePress官方推荐的脚本是通过Yarn构建的，会发生无法获取依赖的问题

```
Run yarn docs:build
yarn run v1.22.19
$ vuepress build docs
Error: Cannot find module '@vuepress/plugin-search'
Require stack:
- /home/runner/work/proxx-doc/proxx-doc/docs/.vuepress/config.js
- /home/runner/work/proxx-doc/proxx-doc/node_modules/@vuepress/cli/lib/config/loadUserConfigCjs.js
- /home/runner/work/proxx-doc/proxx-doc/node_modules/@vuepress/cli/lib/config/loadUserConfig.js
- /home/runner/work/proxx-doc/proxx-doc/node_modules/@vuepress/cli/lib/config/index.js
- /home/runner/work/proxx-doc/proxx-doc/node_modules/@vuepress/cli/lib/commands/build/createBuild.js
- /home/runner/work/proxx-doc/proxx-doc/node_modules/@vuepress/cli/lib/commands/build/index.js
- /home/runner/work/proxx-doc/proxx-doc/node_modules/@vuepress/cli/lib/commands/index.js
- /home/runner/work/proxx-doc/proxx-doc/node_modules/@vuepress/cli/lib/index.js
- /home/runner/work/proxx-doc/proxx-doc/node_modules/vuepress-vite/bin/vuepress.js
- /home/runner/work/proxx-doc/proxx-doc/node_modules/vuepress/bin/vuepress.js
    at Module._resolveFilename (node:internal/modules/cjs/loader:956:15)
    at Module._load (node:internal/modules/cjs/loader:804:27)
    at Module.require (node:internal/modules/cjs/loader:1022:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (/home/runner/work/proxx-doc/proxx-doc/docs/.vuepress/config.js:2:26)
    at Module._compile (node:internal/modules/cjs/loader:1120:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1174:10)
    at Module.load (node:internal/modules/cjs/loader:998:32)
    at Module._load (node:internal/modules/cjs/loader:839:12)
    at Module.require (node:internal/modules/cjs/loader:1022:19)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
Error: Process completed with exit code 1.
```

建议不要使用官方推荐的脚本，我这里将脚本更改为pnpm

目标文件：\proxx-doc\.github\workflows\docs.yml
```yaml
name: docs

on:
  # 每当 push 到 main 分支时触发部署
  push:
    branches: [main]
  # 手动触发部署
  workflow_dispatch:

jobs:
  docs:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
        with:
          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          # 选择要使用的 node 版本
          node-version: '18'

      - name: Setup pnpm
        uses: pnpm/action-setup@v2.2.1
        with:
          version: 7.9.0

      # 安装依赖
      - name: Install dependencies
        run: pnpm install

      # 运行构建脚本
      - name: Build VuePress site
        run: pnpm docs:build

      # 查看 workflow 的文档来获取更多信息
      # @see https://github.com/crazy-max/ghaction-github-pages
      - name: Deploy to GitHub Pages
        uses: crazy-max/ghaction-github-pages@v2
        with:
          # 部署到 gh-pages 分支
          target_branch: gh-pages
          # 部署目录为 VuePress 的默认输出目录
          build_dir: docs/.vuepress/dist
        env:
          # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

```