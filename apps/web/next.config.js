/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@video-player/component'],
  // 配置静态导出以支持 GitHub Pages
  output: 'export',
  // 如果部署在子路径，取消注释并设置 basePath
  basePath: '/useful-video-player',
  // 添加尾部斜杠，有助于 GitHub Pages 路由
  trailingSlash: true,
  images: {
    unoptimized: true, // GitHub Pages 需要禁用图片优化
  },
}

module.exports = nextConfig
