// ============================================================
//  站点内容数据 —— 本文件由 tools/generate.py 自动生成，请勿手改
//  要修改内容，请编辑仓库根目录的 content.yaml 后重新运行生成器
// ============================================================
//
//  字段说明：
//    title  中英文一样的（如仓库名）是字符串，否则是 { zh, en } 对象
//    desc   卡片描述，{ zh, en } 两种语言
//    hidden 可选，true 时不渲染该卡片，无需删除代码
//
//  注意：data.js 必须先于 main.js 加载（保持 index.html 中的顺序即可）

// 项目卡片：顺序 = content.yaml 中 projects 的顺序，编号自动生成
const PROJECTS = [
  {
    id: "beacon",
    title: "BEACON",
    link: "https://github.com/Zhuqiben/beacon",
    tech: "ROS 2 / Gazebo / Nav2 / Python",
    desc: {
      zh: "ROS 2（Humble）仿真系统：TurtleBot 3 在 Gazebo 中识别彩色地标，用纯 numpy 的 EKF-SLAM 建图，再经 Nav2 自主导航到指定颜色处并避开两个游走方块；共 9 个功能包，附 pytest 与 CI。",
      en: "A ROS 2 (Humble) simulation stack: a TurtleBot 3 detects coloured landmarks in Gazebo, builds a map with a pure-numpy EKF-SLAM filter, then drives to a requested colour with Nav2 while avoiding two roaming blocks — nine packages, with pytest and CI.",
    },
  },

  {
    id: "gaze-dms",
    title: "Gaze-DMS",
    link: "https://github.com/Zhuqiben/Gaze-DMS",
    tech: "Python / PyTorch / ONNX / Tkinter",
    desc: {
      zh: "驾驶员监控系统：视线估计（MPIIGaze / MPIIFaceGaze）+ YOLO 目标检测（face / phone 两类）+ 疲劳分心分析（EAR / MAR），含 Tkinter 桌面界面与完整训练教程。",
      en: "A driver monitoring prototype: gaze estimation (MPIIGaze / MPIIFaceGaze) + YOLO object detection (two classes: face / phone) + fatigue and distraction analysis (EAR / MAR), with a Tkinter desktop UI and a full training guide.",
    },
  },

  {
    id: "lane-driving",
    title: "lane_driving",
    link: "https://github.com/Zhuqiben/lane_driving",
    tech: "Python / ROS 2 / OpenCV",
    desc: {
      zh: "基于 ROS 2 的车道线跟随节点：订阅相机图像检测黄色车道线，经 PID 计算转向后向 /controller/cmd_vel 下发速度指令。",
      en: "A ROS 2 lane-following node: detects yellow lane lines from camera images and publishes PID-steered velocity commands to /controller/cmd_vel.",
    },
  },

  {
    id: "pytorch-mpiigaze",
    title: "pytorch_mpiigaze",
    link: "https://github.com/Zhuqiben/pytorch_mpiigaze",
    tech: "Python / PyTorch",
    desc: {
      zh: "基于 hysts 上游实现复现 MPIIGaze / MPIIFaceGaze 训练与评估流程，可延伸至驾驶员监控与人机交互场景。",
      en: "Reproduces the MPIIGaze / MPIIFaceGaze training and evaluation pipeline based on hysts' upstream implementation, applicable to driver monitoring and human-robot interaction.",
    },
  },

  {
    id: "kaggle",
    title: "Kaggle",
    link: "https://www.kaggle.com/qibensu",
    tech: "Kaggle",
    desc: {
      zh: "查看我的数据科学与机器学习实践。",
      en: "Explore my data science and machine learning practice.",
    },
  },

  {
    id: "more",
    title: { zh: "更多项目", en: "More projects" },
    link: "https://github.com/Zhuqiben?tab=repositories",
    tech: "GitHub",
    desc: {
      zh: "在 GitHub 仓库列表中查看全部公开项目。",
      en: "Explore all public repositories on GitHub.",
    },
  },
];

// ------------------------------------------------------------
//  动态列表：每条都对应真实提交，link 指向对应仓库
//  不应填写未发布的内容
// ------------------------------------------------------------
const POSTS = [
  {
    link: "https://github.com/Zhuqiben/beacon",
    meta: { zh: "2026.10.16 · BEACON", en: "2026.10.16 · BEACON" },
    title: { zh: "开源 BEACON：ROS 2 EKF-SLAM 地标导航", en: "Open-sourced BEACON: ROS 2 EKF-SLAM landmark navigation" },
    desc: { zh: "发布 v0.0.1：Gazebo 仿真 + 彩色地标检测 + EKF-SLAM + Nav2 导航，含随机场景生成与 CI。", en: "Released v0.0.1 with Gazebo simulation, colour landmark detection, EKF-SLAM and Nav2 navigation, plus seeded arena generation and CI." },
  },

  {
    link: "https://github.com/Zhuqiben/Gaze-DMS",
    meta: { zh: "2026.09.30 · Gaze-DMS", en: "2026.09.30 · Gaze-DMS" },
    title: { zh: "补充演示视频与训练日志", en: "Added demo video and training logs" },
    desc: { zh: "完善训练日志、配置与评估结果，补齐演示视频，降低复现门槛。", en: "Added training logs" },
  },

  {
    link: "https://github.com/Zhuqiben/Gaze-DMS",
    meta: { zh: "2026.09.26 · Gaze-DMS", en: "2026.09.26 · Gaze-DMS" },
    title: { zh: "开源驾驶员监控系统", en: "Open-sourced the driver monitoring system" },
    desc: { zh: "视线估计与 YOLO 目标检测合并为完整工程，附 Tkinter 界面与训练教程。", en: "Combined gaze estimation and YOLO detection into one project" },
  },

  {
    link: "https://github.com/Zhuqiben/lane_driving",
    meta: { zh: "2026.09.17 · lane_driving", en: "2026.09.17 · lane_driving" },
    title: { zh: "完成 ROS 2 车道线跟随功能包", en: "Completed the ROS 2 lane-following package" },
    desc: { zh: "从相机图像检测车道线，经 PID 计算转向后下发速度指令，并补充部署文档与测试。", en: "Detects lane lines from camera images" },
  },
];

// ------------------------------------------------------------
//  荣誉与竞赛：link 可选；省略则该项不可点击
// ------------------------------------------------------------
const HONORS = [
  {
    year: "2023",
    title: { zh: "国际自主智能机器人大赛 · 人形机器人现实世界标准赛 · 一等奖", en: "International Autonomous Intelligent Robot Competition · Humanoid Robot Real-World Standard Track · First Prize" },
  },

  {
    year: "2022",
    title: { zh: "国际自主智能机器人大赛 · 机器人仿真赛 · 三等奖", en: "International Autonomous Intelligent Robot Competition · Robot Simulation Track · Third Prize" },
  },

  {
    year: "2026",
    title: { zh: "Kaggle 竞赛铜牌 · UM - Game-Playing Strength of MCTS Variants", en: "Kaggle Competition Bronze Medal · UM - Game-Playing Strength of MCTS Variants" },
    link: "https://www.kaggle.com/certification/competitions/qibensu/um-game-playing-strength-of-mcts-variants",
  },
];
