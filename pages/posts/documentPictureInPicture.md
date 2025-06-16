
---
title: 使用画中画 API 实现全屏 PPT 时置顶网页某一部分
date: 2025-06-13 15:07:59
updated: 2025-06-13
categories: Vue 笔记
tags:
  - Vue
  - 笔记
top: 5
---

本文受 B 站画中画悬浮播放功能的启发，利用浏览器的 [文档画中画 API](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Picture-in-Picture_API) 实现在 PPT 全屏播放时，依然能够将网页中的某一部分置顶显示。

## 注意事项

- **实验性技术**：本文方法基于浏览器实验性 API —— `Document Picture-in-Picture API`，请在使用前务必查阅兼容性列表。
- **安全上下文限制**：此 API 仅在支持的浏览器中的安全上下文（即 HTTPS 环境）下可用。

## 应用背景

在开发直播类网页时，在主播推流端常常需要一边直播一边看评论区。若直播采用「分享桌面或应用窗口」的方式进行推流，则在 PPT 全屏播放的情况下，浏览器窗口会被覆盖，评论区自然也无法被主播看到。

某天，我注意到 B 站在播放视频时点击“画中画”按钮，视频可以悬浮在所有窗口之上，由此想到可否使用同样的方式将网页上的某个 DOM 元素抽离出来置顶显示。经过实践，发现确实可行。

## 前期 API 验证

可参考官方文档：[Document Picture-in-Picture API](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Picture-in-Picture_API)

再次强调：该 API 属于实验性技术，建议仅在受控环境中使用，生产环境部署需慎重考虑兼容性问题。

## 实现步骤

1. **标记需要置顶展示的内容**

由于启用画中画模式时，会将指定的 HTML 内容直接复制到新的独立窗口，因此我们需要先为其指定一个容器 ID。
```html
<div id="pip-content"></div>
```

2. **创建按钮以触发画中画**

```js
  <NButton @click="startPip">置顶</NButton>
```

3. **通过 JS 处理元素并调用画中画 API**

```js

// 自定义函数，用于清理潜在的 XSS 风险
function sanitizeElement(element) {
  // 实现具体的清理逻辑，例如移除 script 标签等
  // 这里只是一个示例，具体实现取决于实际需求
  element.querySelectorAll('script').forEach(script => script.remove());
}

// 触发画中画模式
async function startPip() {
  // 捕获需要展示的html部分并验证其是否存在
  const pipContent = document.getElementById("pip-content");
  if (!pipContent) {
    console.error("pip-content element not found");
    return;
  }

  // 设定画中画小窗的宽高
  const pipWindow = await window.documentPictureInPicture.requestWindow({
    width: 200,
    height: 1200,
  });

  // 克隆并清理 pipContent
  const clonedContent = pipContent;
  // const clonedContent = pipContent.cloneNode(true);
  sanitizeElement(clonedContent); // 自定义函数，用于清理潜在的 XSS 风险
  pipWindow.document.body.appendChild(clonedContent);

  // 复制必要的样式
  [...document.styleSheets].forEach((styleSheet) => {
    try {
      if (styleSheet.href) {
        // 如果是外部样式表，直接通过 link 引入
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = styleSheet.type;
        link.media = styleSheet.media?.mediaText || "";
        link.href = styleSheet.href;
        pipWindow.document.head.appendChild(link);
      } else {
        // 如果是内部样式表，复制其规则
        const cssRules = [...styleSheet.cssRules]
          .map((rule) => rule.cssText)
          .join("");
        const style = document.createElement("style");
        style.textContent = cssRules;
        console.log(Object.prototype.toString.call(cssRules).slice(8, -1));
        cssRules;
        pipWindow.document.head.appendChild(style);
      }
    } catch (e) {
      console.warn("Failed to copy styles:", e);
      if (styleSheet.href) {
        // 如果是外部样式表且发生错误，直接通过 link 引入
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = styleSheet.type;
        link.media = styleSheet.media?.mediaText || "";
        link.href = styleSheet.href;
        pipWindow.document.head.appendChild(link);
      }
    }
  });

  // 修正样式偏差（宽度，高度，隐藏小置顶改点击事件为hover事件）
  const style = document.createElement("style");
  style.textContent = ` #pip-content {
    width: 100% !important;
    height:100% !important;
    max-height: 100% !important;
   }
   .topBtn {
    display:none;
   }
   `;
  pipWindow.document.head.appendChild(style);
}
```

## 后记

本方法为通过浏览器能力将网页中某部分「悬浮在所有窗口上方」的技术探索，适合如直播评论、辅助信息展示等场景。

需要注意的是：启用画中画后，原页面中的该元素会被转移，导致原页面中不再显示该内容。如无法接受该限制，可结合页面刷新或组件重新挂载策略解决。可参考 B 站的实际实现逻辑。

如需进一步自定义展示样式、交互逻辑，建议深入了解 `Document Picture-in-Picture API` 的完整能力。
