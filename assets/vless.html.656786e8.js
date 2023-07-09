import{r as n,o as s,c as a,a as e,b as o,w as t,F as p,e as l,d as c}from"./app.5e2f57d6.js";const u={},r=e("h1",{id:"vless",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vless","aria-hidden":"true"},"#"),l(" VLESS")],-1),i=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"警告"),e("p",null,"目前 VLESS 没有自带加密，请用于可靠信道，如 TLS。")],-1),b=e("p",null,"VLESS 是一个无状态的轻量传输协议，它分为入站和出站两部分，可以作为 Xray 客户端和服务器之间的桥梁。",-1),d=l("与 "),k=l("VMess"),q=l(" 不同，VLESS 不依赖于系统时间，认证方式同样为 UUID。"),m=c('<h2 id="inboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#inboundconfigurationobject" aria-hidden="true">#</a> InboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;clients&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-vision&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;decryption&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;fallbacks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;dest&quot;</span><span class="token operator">:</span> <span class="token number">80</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><blockquote><p><code>clients</code>: [ <a href="#clientobject">ClientObject</a> ]</p></blockquote><p>一个数组，代表一组服务端认可的用户.</p><p>其中每一项是一个用户 <a href="#clientobject">ClientObject</a>。</p><blockquote><p><code>decryption</code>: &quot;none&quot;</p></blockquote><p>现阶段需要填 <code>&quot;none&quot;</code>，不能留空。 若未正确设置 decryption 的值，使用 Xray 或 -test 时会收到错误信息。</p><p>注意这里是 decryption，和 clients 同级。 decryption 和 vmess 协议的 encryption 的位置不同，是因为若套一层约定加密，服务端需要先解密才能知道是哪个用户。</p>',8),f=e("code",null,"fallbacks",-1),y=l(": [ "),g=l("FallbackObject"),h=l(" ]"),v=l("一个数组，包含一系列强大的回落分流配置（可选）。 fallbacks 的具体配置请点击 "),j=l("FallbackObject"),S=c('<h3 id="clientobject" tabindex="-1"><a class="header-anchor" href="#clientobject" aria-hidden="true">#</a> ClientObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-vision&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p><code>id</code>: string</p></blockquote><p>VLESS 的用户 ID，可以是任意小于 30 字节的字符串, 也可以是一个合法的 UUID. 自定义字符串和其映射的 UUID 是等价的, 这意味着你将可以这样在配置文件中写 id 来标识同一用户,即</p><ul><li>写 <code>&quot;id&quot;: &quot;我爱🍉老师1314&quot;</code>,</li><li>或写 <code>&quot;id&quot;: &quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</code> (此 UUID 是 <code>我爱🍉老师1314</code> 的 UUID 映射)</li></ul>',5),U=l("其映射标准在 "),x={href:"https://github.com/XTLS/Xray-core/issues/158",target:"_blank",rel:"noopener noreferrer"},L=l("VLESS UUID 映射标准：将自定义字符串映射为一个 UUIDv5"),D=e("p",null,[l("你可以使用命令 "),e("code",null,'xray uuid -i "自定义字符串"'),l(" 生成自定义字符串所映射的的 UUID。")],-1),I=e("blockquote",null,[e("p",null,[l("也可以使用命令 "),e("code",null,"xray uuid"),l(" 生成随机的 UUID.")])],-1),E=e("blockquote",null,[e("p",null,[e("code",null,"level"),l(": number")])],-1),O=l("用户等级，连接会使用这个用户等级对应的 "),T=l("本地策略"),V=l("。"),X=l("level 的值, 对应 "),C=l("policy"),_=l(" 中 "),w=e("code",null,"level",-1),F=l(" 的值。 如不指定, 默认为 0。"),P=c("<blockquote><p><code>email</code>: string</p></blockquote><p>用户邮箱，用于区分不同用户的流量（会体现在日志、统计中）。</p><blockquote><p><code>flow</code>: string</p></blockquote><p>流控模式，用于选择 XTLS 的算法。</p><p>目前入站协议中有以下流控模式可选：</p><ul><li>无 <code>flow</code>，空字符或者 <code>none</code>：使用普通 TLS 代理</li><li><code>xtls-rprx-vision</code>：使用新 XTLS 模式 包含内层握手随机填充</li></ul><p>此外，目前 XTLS 仅支持 TCP、mKCP、DomainSocket 这三种传输方式。</p>",7);u.render=function(l,c){const u=n("RouterLink"),A=n("OutboundLink");return s(),a(p,null,[r,i,b,e("p",null,[d,o(u,{to:"/config/inbounds/vmess.html"},{default:t((()=>[k])),_:1}),q]),m,e("blockquote",null,[e("p",null,[f,y,o(u,{to:"/config/features/fallback.html"},{default:t((()=>[g])),_:1}),h])]),e("p",null,[v,o(u,{to:"/config/features/fallback.html#fallbacks-%E9%85%8D%E7%BD%AE"},{default:t((()=>[j])),_:1})]),S,e("p",null,[U,e("a",x,[L,o(A)])]),D,I,E,e("p",null,[O,o(u,{to:"/config/policy.html#levelpolicyobject"},{default:t((()=>[T])),_:1}),V]),e("p",null,[X,o(u,{to:"/config/policy.html#policyobject"},{default:t((()=>[C])),_:1}),_,w,F]),P],64)};export default u;
