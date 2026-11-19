# 慢慢听，慢慢记

一份关于韦礼安的个人歌迷档案，使用 HTML、CSS 和少量 JavaScript 制作，可以直接发布到 GitHub Pages。

## 本地预览

直接用浏览器打开 `index.html` 即可。页面不需要安装依赖，也不需要构建步骤。

## 发布到 GitHub Pages

1. 登录 GitHub，点击右上角的 **+**，选择 **New repository**。
2. 仓库名可以用 `weibird-fan-archive`。若希望任何人通过链接浏览，请将仓库设为 **Public**。
3. 建立仓库后，选择 **Add file → Upload files**，把 `index.html`、`styles.css`、`script.js` 和 `README.md` 上传到仓库根目录。确认 `index.html` 不在额外的子文件夹中，然后提交文件。
4. 打开仓库的 **Settings → Pages**。
5. 在 **Build and deployment** 区域，将 **Source** 设为 **Deploy from a branch**，分支选择 `main`，目录选择 `/(root)`，点击 **Save**。
6. 等待 GitHub Pages 完成发布。页面上会显示网址，通常是 `https://你的GitHub用户名.github.io/weibird-fan-archive/`。
7. 以后更新内容时，修改对应文件后再上传并提交，GitHub Pages 会重新发布。

## 更新内容时常改的位置

- 首页与各栏目文案、歌曲列表、时间线和示例手账都在 `index.html`。
- 颜色、字号、间距和手机布局都在 `styles.css`。
- 歌曲筛选、收藏按钮和手机导航都在 `script.js`。
- 收藏信息存在访客自己的浏览器中。换设备或清除浏览器数据后不会同步。

当前演出区和手账内容含有模板文字。请把示例替换成自己的记录，并在添加演出时核对官方公告。网站中的唱片、票根和照片均为 CSS 图形，没有使用韦礼安的肖像或未经确认的现场照片。网站是个人歌迷整理项目，非官方。

## 已整理的资料入口

- [Sony Music 艺人介绍](https://www.sonymusic.com.hk/artist/weibird/)
- [StreetVoice 关于韦礼安与《慢慢等》的报道](https://dashi.streetvoice.cn/article/%E7%8E%B0%E5%9C%BA-%E9%9F%A6%E7%A4%BC%E5%AE%89%E4%BB%8E%E8%A1%97%E5%A3%B0%E5%88%B0%E8%A1%97%E5%A3%B0%E8%88%9E%E5%8F%B0/)
- [《如果可以》官方音乐录像](https://www.youtube.com/watch?v=8MG--WuNW1Y)
- [韦礼安官方微博](https://weibo.com/weibird)
