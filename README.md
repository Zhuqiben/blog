<div align="center">

# 你好，我是 soo 👋 · Hi, I'm soo

### 机器人软件工程师 · 感知算法 · Robot Software Engineer (Perception)

记录技术实践，分享学习心得，持续构建有价值的作品。<br>
Documenting technical practice, sharing what I learn, and building things that hold up.

[访问我的博客](https://zhuqiben.github.io/blog/) · [精选项目](https://zhuqiben.github.io/blog/#projects) · [荣誉与竞赛](https://zhuqiben.github.io/blog/#honors) · [联系方式](https://zhuqiben.github.io/blog/#contact)<br>
[Visit the blog](https://zhuqiben.github.io/blog/) · [Projects](https://zhuqiben.github.io/blog/#projects) · [Honors](https://zhuqiben.github.io/blog/#honors) · [Contact](https://zhuqiben.github.io/blog/#contact)

</div>

---

## 关于我 · About me

- 🔭 正在专注于：机器人感知、计算机视觉与嵌入式部署<br>
  Currently focused on robot perception, computer vision and edge deployment
- 🌱 技术方向：ROS 1 / ROS 2、PyTorch、OpenCV、Jetson Nano 边缘部署<br>
  Working stack: ROS 1 / ROS 2, PyTorch, OpenCV, Jetson Nano edge deployment
- 🐙 GitHub 主页：[@Zhuqiben](https://github.com/Zhuqiben)　·　Profile: [@Zhuqiben](https://github.com/Zhuqiben)
- 📝 文章主页：[我的博客](./index.html)　·　Site: [my blog](./index.html)
- 💬 欢迎交流：技术实践、开源项目与开发经验<br>
  Happy to talk about technical practice, open-source projects and engineering experience

## 技术栈 · Tech stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

本仓库同时是**在线简历站点**，与 GitHub 主页 [Zhuqiben/Zhuqiben](https://github.com/Zhuqiben/Zhuqiben) 共享同一份项目事实，因此两处描述不会互相矛盾。<br>
This repository doubles as an **online resume site** and shares the same project facts as the [Zhuqiben/Zhuqiben](https://github.com/Zhuqiben/Zhuqiben) profile repository, so the two never contradict each other.

## 内容校验 · Content validation

```bash
node --check data.js && node test/data.test.js
```

校验项包括：中英文双语是否齐全、链接是否为真实地址（拦截 `#` 占位符）、荣誉年份格式等。推送到 `main` 后由 GitHub Actions 自动执行。<br>
The checks cover bilingual completeness, real URLs (a `#` placeholder fails the run) and honour year format. GitHub Actions runs the same command on every push to `main`.

改动 `data.js` / `main.js` / `style.css` 后，请把 `index.html` 里引用这些文件的 `?v=` 值同步改成当天日期，否则浏览器可能继续使用旧缓存。GitHub Pages 对这些文件设置了十分钟缓存，带上版本号可以立即生效。<br>
After editing `data.js`, `main.js` or `style.css`, bump the `?v=` value on their references in `index.html` to today's date. GitHub Pages caches these files for ten minutes and the version query makes the change take effect right away.

## 目录结构 · Repository layout

```text
index.html          页面骨架（导航 / 首屏 / 关于 / 动态 / 项目 / 荣誉 / 联系）
main.js             语言切换与卡片渲染
data.js             卡片数据（项目 / 动态 / 荣誉）
style.css           样式
test/data.test.js   内容校验脚本
```

## 精选项目 · Selected projects

| 项目 · Project | 简介 · Summary | 技术 · Tech |
| --- | --- | --- |
| [BEACON](https://github.com/Zhuqiben/beacon) | ROS 2 仿真系统：TurtleBot 3 识别彩色地标 → EKF-SLAM 建图 → Nav2 导航到指定颜色，途中避开游走障碍物；8 次固定种子任务全部成功，定位 RMS 均值 4.6 cm<br>A ROS 2 simulation stack: coloured landmark detection → EKF-SLAM mapping → Nav2 navigation to a requested colour while avoiding roaming obstacles; all 8 seeded missions succeed at 4.6 cm mean localisation RMS | `ROS 2` `Gazebo` `Nav2` `Python` |
| [Gaze-DMS](https://github.com/Zhuqiben/Gaze-DMS) | 驾驶员监控系统：视线估计 + YOLO 目标检测（face / phone）+ 疲劳分心分析，含 Tkinter 界面与训练教程<br>A driver monitoring system: gaze estimation + YOLO detection (face / phone) + fatigue and distraction analysis, with a Tkinter UI and a training guide | `Python` `PyTorch` `ONNX` |
| [lane_driving](https://github.com/Zhuqiben/lane_driving) | 基于 ROS 2 的车道线跟随节点：相机图像 → 车道线检测 → PID 转向 → 速度指令下发<br>A ROS 2 lane-following node: camera image → lane detection → PID steering → velocity commands | `Python` `ROS 2` `OpenCV` |
| [qiben](https://github.com/Zhuqiben/qiben) | 2023 年国际自主智能机器人大赛实物赛代码：六类赛道地面图卷积分类，识别图案后反推关卡并触发任务程序<br>Robot code for the 2023 physical track: a six-class convolutional classifier infers the current level and triggers its task routine | `Python` `Keras` `TensorFlow` |

## 近期动态 · Recent updates

动态列表见博客站点的[近期动态](https://zhuqiben.github.io/blog/#posts)区域。<br>
The update list lives in the [Recent updates](https://zhuqiben.github.io/blog/#posts) section of the site.

## 联系我 · Contact

- GitHub：[@Zhuqiben](https://github.com/Zhuqiben)
- 邮箱 / Email：[zhuqibensu@proton.me](mailto:zhuqibensu@proton.me)
- 博客 / Blog：[zhuqiben.github.io/blog](https://zhuqiben.github.io/blog/)

<div align="center">

感谢你的访问，欢迎关注和交流 ✨<br>
Thanks for stopping by — always happy to hear from you ✨

</div>
