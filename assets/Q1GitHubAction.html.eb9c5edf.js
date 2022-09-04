import{_ as n,o as s,c as e,d as a}from"./app.c0ba77c6.js";const i={},l=a(`<p>\u81EA\u52A8\u6784\u5EFA\u8FC7\u7A0B\u4E2D\uFF0CVuePress\u5B98\u65B9\u63A8\u8350\u7684\u811A\u672C\u662F\u901A\u8FC7Yarn\u6784\u5EFA\u7684\uFF0C\u4F1A\u53D1\u751F\u65E0\u6CD5\u83B7\u53D6\u4F9D\u8D56\u7684\u95EE\u9898</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Run yarn docs:build
yarn run v1.22.19
$ vuepress build docs
Error: Cannot find module &#39;@vuepress/plugin-search&#39;
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
    at Object.&lt;anonymous&gt; (/home/runner/work/proxx-doc/proxx-doc/docs/.vuepress/config.js:2:26)
    at Module._compile (node:internal/modules/cjs/loader:1120:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1174:10)
    at Module.load (node:internal/modules/cjs/loader:998:32)
    at Module._load (node:internal/modules/cjs/loader:839:12)
    at Module.require (node:internal/modules/cjs/loader:1022:19)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
Error: Process completed with exit code 1.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5EFA\u8BAE\u4E0D\u8981\u4F7F\u7528\u5B98\u65B9\u63A8\u8350\u7684\u811A\u672C\uFF0C\u6211\u8FD9\u91CC\u5C06\u811A\u672C\u66F4\u6539\u4E3Apnpm</p><p>\u76EE\u6807\u6587\u4EF6\uFF1A\\proxx-doc.github\\workflows\\docs.yml</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> docs

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token comment"># \u6BCF\u5F53 push \u5230 main \u5206\u652F\u65F6\u89E6\u53D1\u90E8\u7F72</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span>
  <span class="token comment"># \u624B\u52A8\u89E6\u53D1\u90E8\u7F72</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">docs</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u201C\u6700\u8FD1\u66F4\u65B0\u65F6\u95F4\u201D \u7B49 git \u65E5\u5FD7\u76F8\u5173\u4FE1\u606F\uFF0C\u9700\u8981\u62C9\u53D6\u5168\u90E8\u63D0\u4EA4\u8BB0\u5F55</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v1
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u9009\u62E9\u8981\u4F7F\u7528\u7684 node \u7248\u672C</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&#39;18&#39;</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup pnpm
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> pnpm/action<span class="token punctuation">-</span>setup@v2.2.1
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">version</span><span class="token punctuation">:</span> 7.9.0

      <span class="token comment"># \u5B89\u88C5\u4F9D\u8D56</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies
        <span class="token key atrule">run</span><span class="token punctuation">:</span> pnpm install

      <span class="token comment"># \u8FD0\u884C\u6784\u5EFA\u811A\u672C</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build VuePress site
        <span class="token key atrule">run</span><span class="token punctuation">:</span> pnpm docs<span class="token punctuation">:</span>build

      <span class="token comment"># \u67E5\u770B workflow \u7684\u6587\u6863\u6765\u83B7\u53D6\u66F4\u591A\u4FE1\u606F</span>
      <span class="token comment"># @see https://github.com/crazy-max/ghaction-github-pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u90E8\u7F72\u5230 gh-pages \u5206\u652F</span>
          <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token comment"># \u90E8\u7F72\u76EE\u5F55\u4E3A VuePress \u7684\u9ED8\u8BA4\u8F93\u51FA\u76EE\u5F55</span>
          <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> docs/.vuepress/dist
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token comment"># @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[l];function t(c,u){return s(),e("div",null,o)}var d=n(i,[["render",t],["__file","Q1GitHubAction.html.vue"]]);export{d as default};
