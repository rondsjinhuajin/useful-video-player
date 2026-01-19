# 快速启动指南

## 1. 安装依赖

```bash
pnpm install
```

## 2. 启动开发服务器

```bash
pnpm dev
```

## 3. 访问应用

打开浏览器访问：http://localhost:3000

## 功能说明

### 已实现的功能

1. **视频播放**
   - 支持播放、暂停、进度控制
   - 自动保存播放进度
   - 支持从上次观看位置继续播放

2. **画质切换**
   - 支持多分辨率切换（480p, 720p, 1080p, source）
   - 切换画质时保持播放进度

3. **倍速播放**
   - 支持 1.0x, 1.5x, 2.0x 倍速
   - 实时切换播放速度

4. **全屏播放**
   - 支持进入/退出全屏
   - 全屏模式下显示水印和控制按钮

5. **水印功能**
   - 显示用户名和公司名
   - 防止录屏的警示文字
   - 全屏和非全屏模式都有水印

6. **防快进检测**
   - 检测时间异常跳跃
   - 暂停状态下禁止拖动进度条

7. **定期确认弹窗**
   - 每5分钟弹出确认框
   - 确保用户持续学习

8. **课程进度**
   - 显示总课时、已学课时、学习进度
   - 支持课程列表切换

## Mock 数据

项目使用 Mock 数据，视频使用 Google 的公共测试视频：
- BigBuckBunny.mp4
- ElephantsDream.mp4
- ForBiggerBlazes.mp4

## 技术栈

- **React**: 18.2.0
- **Next.js**: 14.0.4
- **Tailwind CSS**: 3.4.0
- **TypeScript**: 5.3.3
- **pnpm**: Monorepo 管理

## 项目结构

```
useful-video-player/
├── apps/web/              # Next.js 应用
│   ├── app/               # 页面和布局
│   ├── components/        # 页面组件
│   └── lib/               # Mock 数据
└── packages/video-player/ # 视频播放组件
    └── src/
        ├── VideoPlayer.tsx
        └── types.ts
```

## 常见问题

### 1. 端口被占用

如果 3000 端口被占用，Next.js 会自动使用下一个可用端口（3001, 3002...）

### 2. 视频无法播放

Mock 数据使用的是公共测试视频，如果无法播放，可能是网络问题。可以替换为本地视频文件。

### 3. 全屏功能不工作

全屏功能需要浏览器支持 Fullscreen API，现代浏览器都支持。

## 开发说明

- 所有代码都使用 TypeScript
- 样式使用 Tailwind CSS
- 组件采用 React Hooks
- 支持客户端组件（'use client'）
