# NextFoodies

## 简介

这是一个分享自己美好用餐经历的 web 应用，用户可以上传美食图片，并留言。

## 关键点

本项目使用 Next.JS 开发，项目中值得关注的点有：

1. 渲染策略：客户端渲染 vs 服务端渲染 vs 静态站点生成 vs 增量静态再生

2. 数据获取：Next.JS 中的服务器功能，使用 formAction 提取表单信息到服务器端

3. 理解 Next.JS 的缓存策略，在必要时抛弃缓存，实时更新数据

4. 通过云文件存储（如 AWS S3 与 Cloudinary）存储用户上传的图像

5. Next.JS 的图像优化<Image>组件

## 如何开始使用：
1. 将项目git clone到本地
2. 进入项目目录  
在命令行窗口中运行
```cd NextFoodies```
3. 下载依赖项
在命令行窗口中运行
```npm install```
本项目需要在node环境下运行，测试环境为 v 20.13.1
4. 进入生产环境
在命令行窗口中运行
```npm start```
然后根据命令行提示，在本机http://localhost:3000访问应用

## brief introduce

This is a website to share your good dining experience. Users can upload food pictures and leave messages.

## key points

This project is developed using Next.JS. The points worth paying attention to in the project are:

1. Rendering strategy: client rendering vs server rendering vs static site generation vs incremental static regeneration

2. Data acquisition: server function in Next.JS, use formAction to extract form information to the server

3. Understand the cache strategy of Next.JS, discard the cache when necessary, and update the data in real time.

4. Store user-uploaded images through cloud file storage (such as AWS S3 and Cloudinary)

5. Next.JS image optimization <Image> component

## How to use

## How to get started:

1. Convert the project git clone to local

2. Enter the project directory

Run in the command line window

```cd NextFoodies```

3. Download dependencies

Run in the command line window

```npm install```

This project needs to run in a node environment, and the test environment is v 20.13.1

4. Enter the production environment

Run in the command line window

```npm start```

Then follow the command line prompt to access the application on the local http://localhost:3000.
