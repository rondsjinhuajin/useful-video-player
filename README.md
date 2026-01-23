# React Video Player / React视频播放器

A modern React video player component built with Next.js, Tailwind CSS, and monorepo architecture.

基于 Next.js、Tailwind CSS 和 Monorepo 架构构建的现代化 React 视频播放器组件。

---

## 📋 Table of Contents / 目录

- [Features / 功能特性](#features--功能特性)
- [Tech Stack / 技术栈](#tech-stack--技术栈)
- [Getting Started / 快速开始](#getting-started--快速开始)
- [Project Structure / 项目结构](#project-structure--项目结构)
- [Features Implemented / 已实现功能](#features-implemented--已实现功能)
- [Usage Example / 使用示例](#usage-example--使用示例)
- [Development / 开发指南](#development--开发指南)
- [License / 许可证](#license--许可证)

---

## ✨ Features / 功能特性

- 🎥 **Video Playback** / 视频播放 - Full-featured video player with native controls
- 🎨 **Quality Selection** / 画质选择 - Support multiple resolutions (480p, 720p, 1080p, source)
- ⚡ **Playback Speed** / 倍速播放 - Adjustable playback speed (1x, 1.5x, 2x)
- 📱 **Fullscreen Support** / 全屏支持 - Native fullscreen API support
- 💧 **Watermark Overlay** / 水印功能 - Customizable watermark with user and company info
- 💾 **Progress Management** / 进度管理 - Auto-save and restore playback progress, resume from last position
- ▶️ **Auto Play** / 自动播放 - Auto-play on page load with progress restoration
- 📊 **Course Tracking** / 课程跟踪 - Course progress tracking and statistics
- 🎯 **Anti-Fast-Forward** / 防快进 - Time jump detection with visual warning to prevent fast-forwarding
- ⏰ **Periodic Confirmation** / 定期确认 - 5-minute confirmation dialog to ensure continuous learning
- 📚 **Course List** / 课程列表 - Course list page with lesson navigation
- 🎛️ **Auto-Hide Controls** / 自动隐藏控制栏 - Control buttons auto-hide after 3 seconds, show on mouse hover

---

## 🛠 Tech Stack / 技术栈

- **Framework** / 框架: Next.js 14 (App Router)
- **React**: 18.2 (Latest stable / 最新稳定版)
- **Styling** / 样式: Tailwind CSS 3.4
- **Language** / 语言: TypeScript 5.3
- **Package Manager** / 包管理器: pnpm 8+
- **Architecture** / 架构: Monorepo (pnpm workspace)

---

## 🚀 Getting Started / 快速开始

### Prerequisites / 前置要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation / 安装

```bash
# Install all dependencies / 安装所有依赖
pnpm install
```

### Development / 开发

```bash
# Start development server / 启动开发服务器
pnpm dev
```

The development server will start at [http://localhost:3000](http://localhost:3000)

开发服务器将在 [http://localhost:3000](http://localhost:3000) 启动

### Build / 构建

```bash
# Build for production / 构建生产版本
pnpm build

# Build and verify / 构建并验证
pnpm build:full

# Verify build output / 验证构建输出
pnpm build:verify
```

构建输出目录：`apps/web/out/`

构建完成后，可以通过 `pnpm build:verify` 验证构建产物是否完整。

### Start Production Server / 启动生产服务器

```bash
# Start production server (requires build first) / 启动生产服务器（需要先执行 build）
pnpm start
```

---

## 📁 Project Structure / 项目结构

```
useful-video-player/
├── apps/
│   └── web/                          # Next.js Application / Next.js 应用
│       ├── app/                      # Next.js App Router
│       │   ├── page.tsx              # Home page / 首页（课程列表）
│       │   ├── player/               # Player routes / 播放器路由
│       │   │   └── [lessonId]/       # Dynamic lesson route / 动态课时路由
│       │   └── layout.tsx            # Root layout / 根布局
│       ├── components/               # React Components / React 组件
│       │   ├── CourseListPage.tsx    # Course list page / 课程列表页面
│       │   └── VideoPlayerPage.tsx   # Video player page / 视频播放页面
│       └── lib/                      # Utilities & Mock Data / 工具函数和Mock数据
│           └── mockData.ts           # Mock data / Mock数据
├── packages/
│   └── video-player/                 # Video Player Component Package / 视频播放组件包
│       └── src/
│           ├── VideoPlayer.tsx       # Main component / 主组件
│           └── types.ts              # TypeScript types / TypeScript 类型定义
└── pnpm-workspace.yaml               # pnpm workspace config / pnpm workspace 配置
```

---

## 🎯 Features Implemented / 已实现功能

Based on the analysis of the WeChat Mini Program video player component, the following features have been implemented:

基于小程序视频播放组件的分析，已实现以下功能：

### Core Features / 核心功能

- ✅ **Video Playback Control** / 视频播放控制
  - Play, pause, seek, and time update / 播放、暂停、进度控制和时间更新
  
- ✅ **Quality Selection** / 画质切换
  - Support multiple resolutions: 480p, 720p, 1080p, source / 支持多分辨率：480p, 720p, 1080p, source
  - Seamless quality switching with progress preservation / 无缝切换画质并保持播放进度

- ✅ **Playback Speed Control** / 倍速播放
  - Adjustable speeds: 1.0x, 1.5x, 2.0x / 可调节倍速：1.0x, 1.5x, 2.0x

- ✅ **Fullscreen Support** / 全屏播放支持
  - Native fullscreen API / 原生全屏API支持
  - Custom controls in fullscreen mode / 全屏模式下的自定义控制

- ✅ **Watermark Overlay** / 水印功能
  - Display user name and company name / 显示用户名和公司名
  - Anti-screen recording protection / 防止录屏保护
  - Different watermark density for fullscreen / 全屏模式下不同的水印密度

- ✅ **Progress Management** / 播放进度管理
  - Auto-save progress to localStorage / 自动保存进度到localStorage
  - Restore progress on page load / 页面加载时自动恢复上次播放位置
  - Progress saved every 5 seconds / 每5秒自动保存一次进度
  - Seamless resume from last position / 无缝从上次播放位置继续观看
  - Progress persists across sessions / 进度在会话间持久化保存
  - Automatic progress restoration when video loads / 视频加载时自动恢复进度
  - Progress automatically cleared when lesson completed / 课时完成后自动清除进度记录

- ✅ **Auto Play** / 自动播放
  - Auto-play on page load / 页面加载时自动播放
  - Automatically resume from last saved position / 自动从上次保存的位置继续播放
  - Respects browser autoplay policies / 遵循浏览器自动播放策略
  - Graceful fallback if autoplay is blocked / 如果自动播放被阻止，优雅降级

- ✅ **Anti-Fast-Forward Detection** / 防快进检测
  - Detect abnormal time jumps (tolerance: 2 seconds) / 检测时间异常跳跃（容差：2秒）
  - Prevent dragging progress bar when paused / 暂停状态下禁止拖动进度条
  - Prevent dragging progress bar to fast-forward / 禁止拖动进度条快进
  - Visual warning notification when fast-forward detected / 检测到快进时显示视觉警告提示
  - Auto-restore to last valid playback position / 自动恢复到上一个有效播放位置
  - Warning message: "不允许快进，请按正常速度观看" / Warning message: "Fast-forwarding is not allowed, please watch at normal speed"

- ✅ **Periodic Confirmation Dialog** / 定期确认弹窗
  - Show confirmation dialog every 5 minutes (300 seconds) / 每5分钟（300秒）弹出确认框
  - Auto-pause video when dialog appears / 弹窗出现时自动暂停视频
  - User must click "确定" (Confirm) to continue / 用户必须点击"确定"才能继续播放
  - Click "取消" (Cancel) to stop playback / 点击"取消"停止播放
  - Dialog message: "您已观看5分钟，是否继续学习？" / Dialog message: "You have watched for 5 minutes, do you want to continue learning?"
  - Ensure continuous learning engagement / 确保持续学习参与度

- ✅ **Course Progress Tracking** / 课程进度跟踪
  - Display total lessons, learned lessons, and progress percentage / 显示总课时、已学课时和学习进度百分比
  - Update progress in real-time / 实时更新进度

- ✅ **Course List Page** / 课程列表页面
  - Display all courses and lessons / 显示所有课程和课时
  - Navigate to player page by clicking lessons / 点击课时跳转到播放页面
  - Show course progress and statistics / 显示课程进度和统计信息

- ✅ **Auto-Hide Controls** / 自动隐藏控制栏
  - Control buttons (quality, speed, fullscreen) auto-hide after 3 seconds / 控制按钮（画质、倍速、全屏）3秒后自动隐藏
  - Show controls on mouse hover / 鼠标悬停时显示控制栏
  - Reset timer on user interaction / 用户交互时重置定时器
  - Smooth fade in/out transition / 平滑的淡入淡出过渡效果

### Technical Features / 技术特性

- ✅ React 18.2 (Latest stable version / 最新稳定版)
- ✅ Next.js 14 (App Router)
- ✅ Tailwind CSS for styling / Tailwind CSS 样式
- ✅ TypeScript for type safety / TypeScript 类型安全
- ✅ Monorepo architecture with pnpm workspace / Monorepo 架构（pnpm workspace）
- ✅ Mock data support / Mock 数据支持
- ✅ Responsive design / 响应式设计

---

## 💻 Usage Example / 使用示例

### Basic Usage / 基础用法

```tsx
import VideoPlayer from '@video-player/component'

function MyPage() {
  // Handle progress save / 处理进度保存
  const handleProgressSave = (currentTime: number) => {
    // Progress is automatically saved to localStorage / 进度自动保存到localStorage
    // You can also sync to your backend API here / 你也可以在这里同步到后端API
    console.log('Progress saved:', currentTime)
    
    // Example: Save to localStorage / 示例：保存到localStorage
    localStorage.setItem(
      `video_progress_${lessonId}`,
      JSON.stringify({
        lessonId: '1',
        currentTime,
        lastSavedTime: Date.now(),
      })
    )
  }

  return (
    <VideoPlayer
      videoUrl="https://example.com/video.mp4"
      lessonId="1"
      lessonName="React基础入门"
      qualityList={[
        { label: '720P', value: '720p', url: 'https://example.com/video-720p.mp4' },
        { label: '1080P', value: '1080p', url: 'https://example.com/video-1080p.mp4' },
      ]}
      userName="张三"
      companyName="示例科技有限公司"
      onProgressSave={handleProgressSave}
      onVideoEnd={() => console.log('Video ended')}
      autoPlay={true} // Auto-play when page loads / 页面加载时自动播放
    />
  )
}
```

**Note / 注意**: The progress restoration happens automatically when the video loads. You don't need to manually restore it. The component will:
- 进度恢复在视频加载时自动进行，无需手动恢复。组件会：
  - Automatically read from localStorage on video load / 视频加载时自动从localStorage读取
  - Restore to the last saved position / 恢复到上次保存的位置
  - Continue playing from that position (if autoPlay is enabled) / 从该位置继续播放（如果启用了自动播放）

### With Course List / 使用课程列表

The application includes a course list page at the root route (`/`) and player pages at `/player/[lessonId]`.

应用包含课程列表页面（根路由 `/`）和播放页面（`/player/[lessonId]`）。

```tsx
// Navigate to player page / 跳转到播放页面
import { useRouter } from 'next/navigation'

const router = useRouter()
router.push(`/player/${lessonId}?courseId=${courseId}`)
```

---

## 🔧 Development / 开发指南

### Available Scripts / 可用脚本

```bash
# Development / 开发
pnpm dev              # Start development server / 启动开发服务器

# Build / 构建
pnpm build            # Build for production / 构建生产版本

# Production / 生产
pnpm start            # Start production server / 启动生产服务器

# Lint / 代码检查
pnpm lint             # Run ESLint / 运行 ESLint
```

### Code Structure / 代码结构

- **Components** / 组件: Located in `apps/web/components/` / 位于 `apps/web/components/`
- **Video Player** / 视频播放器: Located in `packages/video-player/src/` / 位于 `packages/video-player/src/`
- **Mock Data** / Mock数据: Located in `apps/web/lib/mockData.ts` / 位于 `apps/web/lib/mockData.ts`

### Adding New Features / 添加新功能

1. Create components in `apps/web/components/` / 在 `apps/web/components/` 创建组件
2. Add video player features in `packages/video-player/src/` / 在 `packages/video-player/src/` 添加视频播放器功能
3. Update mock data in `apps/web/lib/mockData.ts` / 在 `apps/web/lib/mockData.ts` 更新Mock数据

---

## 📝 Notes / 注意事项

### General Notes / 一般说明

- The project uses mock data for demonstration / 项目使用Mock数据进行演示
- Video URLs in mock data use public test videos / Mock数据中的视频URL使用公开测试视频
- Replace mock data with real API calls in production / 生产环境请替换Mock数据为真实API调用
- Progress is saved to localStorage / 进度保存到localStorage
- Watermark is displayed to prevent screen recording / 水印用于防止录屏

### Progress Management / 播放进度管理

- **Auto-save** / 自动保存: Progress is automatically saved every 5 seconds during playback / 播放过程中每5秒自动保存一次进度
- **Auto-restore** / 自动恢复: When you return to a lesson, the video automatically resumes from the last saved position / 返回课时时，视频会自动从上次保存的位置继续播放
- **Storage** / 存储方式: Progress is stored in browser's localStorage with key `video_progress_{lessonId}` / 进度存储在浏览器的localStorage中，键名为 `video_progress_{lessonId}`
- **Data Format** / 数据格式: Each progress entry contains lessonId, currentTime, and lastSavedTime / 每个进度条目包含 lessonId、currentTime 和 lastSavedTime
- **Persistence** / 持久化: Progress persists across browser sessions and page refreshes / 进度在浏览器会话和页面刷新后仍然保持
- **Cleanup** / 清理: Progress is automatically cleared when a lesson is completed / 课时完成后自动清除进度记录

### Anti-Fast-Forward Feature / 防快进功能

- Fast-forwarding is strictly prohibited / 严格禁止快进
- Time jump tolerance is set to 2 seconds / 时间跳跃容差设置为2秒
- Users will see a warning notification if fast-forward is detected / 检测到快进时用户会看到警告提示
- The video will automatically restore to the last valid position / 视频会自动恢复到上一个有效位置
- Progress bar dragging is disabled during playback / 播放期间禁止拖动进度条

### 5-Minute Confirmation Dialog / 5分钟确认弹窗

- Dialog appears every 5 minutes (300 seconds) of playback / 每播放5分钟（300秒）弹出确认框
- Video automatically pauses when dialog appears / 弹窗出现时视频自动暂停
- User interaction required to continue / 需要用户交互才能继续
- Helps ensure active learning engagement / 有助于确保持续的学习参与

---

## 🤝 Contributing / 贡献

Contributions are welcome! Please feel free to submit a Pull Request.

欢迎贡献！请随时提交 Pull Request。

---

## 📄 License / 许可证

MIT License

MIT 许可证

---
