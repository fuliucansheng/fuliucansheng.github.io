import{_ as a,o as s,c as e,d as n}from"./app-1xqWJAUv.js";const t={},l=n(`<h1 id="ubuntu-常用脚本" tabindex="-1"><a class="header-anchor" href="#ubuntu-常用脚本" aria-hidden="true">#</a> Ubuntu 常用脚本</h1><p>本文档提供了一些在 Ubuntu 上常用的脚本，用于配置和设置环境。</p><h2 id="shell-配置" tabindex="-1"><a class="header-anchor" href="#shell-配置" aria-hidden="true">#</a> Shell 配置</h2><h4 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置" aria-hidden="true">#</a> 基础配置</h4><p>可以运行以下命令来进行基础的 Shell 配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/fuliucansheng/mytools/master/shares/shells/install_ubuntu.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令将下载一个脚本并执行，用于配置 Shell 的一些常用设置。</p><h4 id="make-gpu-active" tabindex="-1"><a class="header-anchor" href="#make-gpu-active" aria-hidden="true">#</a> Make GPU Active</h4><p>如果你需要使 GPU 不休眠，可以使用以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://raw.githubusercontent.com/fuliucansheng/mytools/master/shares/shells/gpu.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python gpu.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这些命令将下载一个 Python 脚本并运行，使 GPU 不休眠。</p><h2 id="python3-8-环境" tabindex="-1"><a class="header-anchor" href="#python3-8-环境" aria-hidden="true">#</a> Python3.8 环境</h2><h4 id="基础配置-1" tabindex="-1"><a class="header-anchor" href="#基础配置-1" aria-hidden="true">#</a> 基础配置</h4><p>如果你想配置 Python3.8 环境，可以运行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/fuliucansheng/mytools/master/shares/shells/py38/install.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令将下载一个脚本并执行，用于配置 Python3.8 环境的一些基本设置。</p><h4 id="rocm5-2-配置" tabindex="-1"><a class="header-anchor" href="#rocm5-2-配置" aria-hidden="true">#</a> ROCM5.2 配置</h4><p>如果你需要在 ROCM5.2 环境里配置 Python3.8 环境，可以运行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/fuliucansheng/mytools/master/shares/shells/py38/install_rocm52.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令将下载一个脚本并执行，用于在 ROCM5.2 环境配置 Python3.8 的一些设置。</p>`,21),r=[l];function i(c,h){return s(),e("div",null,r)}const d=a(t,[["render",i],["__file","ubuntu.html.vue"]]);export{d as default};
