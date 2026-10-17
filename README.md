<div align="center">

# 你好，我是 soo 👋

### 机器人感知算法工程师 · 技术写作者 · 终身学习者

记录技术实践，分享学习心得，持续构建有价值的作品。

[访问我的博客](https://zhuqiben.github.io/blog/) · [精选项目](https://zhuqiben.github.io/blog/#projects) · [荣誉与竞赛](https://zhuqiben.github.io/blog/#honors) · [联系方式](https://zhuqiben.github.io/blog/#contact)

</div>

---

## 关于我

- 🔭 正在专注于：机器人感知、计算机视觉与嵌入式部署
- 🌱 技术方向：ROS 1 / ROS 2、PyTorch、OpenCV、Jetson Nano 边缘部署
- 🐙 GitHub 主页：[@Zhuqiben](https://github.com/Zhuqiben)
- 📝 文章主页：[我的博客](./index.html)
- 💬 欢迎交流：技术实践、开源项目与开发经验

## 技术栈

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

> **注意**：本仓库的 `data.js` 由上级工作空间的 `content.yaml` 通过 `tools/generate.py` 生成，
> 请勿直接手改 —— 改动会在下次生成时被覆盖。

本仓库同时是**在线简历站点**，与 GitHub 主页 [Zhuqiben/Zhuqiben](https://github.com/Zhuqiben/Zhuqiben) 共享同一份数据源，因此两处项目描述不会互相矛盾。

## 内容校验

```bash
node --check data.js && node test/data.test.js
```

校验项包括：中英文双语是否齐全、链接是否为真实地址（拦截 `#` 占位符）、荣誉年份格式等。
推送到 `main` 后由 GitHub Actions 自动执行。

## 目录结构

```text
index.html          页面骨架（导航 / 首屏 / 关于 / 动态 / 项目 / 荣誉 / 联系）
main.js             语言切换与卡片渲染（一般不需要改动）
data.js             卡片数据（由 content.yaml 生成）
style.css           样式
test/data.test.js   内容校验脚本
```

## 精选项目

| 项目 | 简介 | 技术 |
| --- | --- | --- |
| [BEACON](https://github.com/Zhuqiben/beacon) | ROS 2 仿真系统：TurtleBot 3 识别彩色地标 → EKF-SLAM 建图 → Nav2 导航到指定颜色，途中避开游走障碍物，含 pytest 与 CI | `ROS 2` `Gazebo` `Nav2` `Python` |
| [Gaze-DMS](https://github.com/Zhuqiben/Gaze-DMS) | 驾驶员监控系统：视线估计 + YOLO 目标检测（face / phone）+ 疲劳分心分析，含 Tkinter 界面与训练教程 | `Python` `PyTorch` `ONNX` |
| [lane_driving](https://github.com/Zhuqiben/lane_driving) | 基于 ROS 2 的车道线跟随节点：相机图像 → 车道线检测 → PID 转向 → 速度指令下发 | `Python` `ROS 2` `OpenCV` |
| [pytorch_mpiigaze](https://github.com/Zhuqiben/pytorch_mpiigaze) | 基于 [hysts 上游实现](https://github.com/hysts/pytorch_mpiigaze)复现 MPIIGaze / MPIIFaceGaze 训练与评估流程（fork） | `Python` `PyTorch` |

## 近期动态

动态列表见博客站点的[近期动态](https://zhuqiben.github.io/blog/#posts)区域。

## 联系我

- GitHub：[@Zhuqiben](https://github.com/Zhuqiben)
- 邮箱：[zhuqibensu@proton.me](mailto:zhuqibensu@proton.me)
- 博客：[zhuqiben.github.io/blog](https://zhuqiben.github.io/blog/)

<div align="center">

感谢你的访问，欢迎关注和交流 ✨

</div>
