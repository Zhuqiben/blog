// ============================================================
//  站点内容数据
//
//  字段说明：
//    title  中英文一样的（如仓库名）是字符串，否则是 { zh, en } 对象
//    desc   卡片描述，{ zh, en } 两种语言
//    hidden 可选，true 时不渲染该卡片，无需删除代码
//
//  改完运行 node test/data.test.js 校验双语是否齐全、链接是否有效
//  注意：data.js 必须先于 main.js 加载（保持 index.html 中的顺序即可）
// ============================================================

// 项目卡片：渲染顺序 = 数组顺序，编号自动生成
const PROJECTS = [
  {
    id: "beacon",
    title: "BEACON",
    link: "https://github.com/Zhuqiben/beacon",
    tech: "ROS 2 / Gazebo / Nav2 / Python",
    desc: {
      zh: "ROS 2（Humble）仿真系统：TurtleBot 3 在 Gazebo 中识别彩色地标，用纯 numpy 的 EKF-SLAM 建图，再经 Nav2 自主导航到指定颜色处并避开两个游走方块；共 9 个功能包。8 次固定种子任务全部成功，定位误差 RMS 均值 4.6 cm、航向 RMS 均值 1.0°，检测延迟约 49 ms；含 94 个 pytest 用例与 CI。",
      en: "A ROS 2 (Humble) simulation stack: a TurtleBot 3 detects coloured landmarks in Gazebo, builds a map with a pure-numpy EKF-SLAM filter, then drives to a requested colour with Nav2 while avoiding two roaming blocks — nine packages. All 8 seeded missions succeed, with 4.6 cm mean localisation RMS, 1.0° mean heading RMS and ≈49 ms detection latency, covered by 94 pytest cases and CI.",
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
    id: "qiben",
    title: "qiben",
    link: "https://github.com/Zhuqiben/qiben",
    tech: "Python / Keras / TensorFlow / OpenCV",
    desc: {
      zh: "2023 年国际自主智能机器人大赛实物赛的机器人代码：自采六类赛道地面图训练卷积分类模型，识别地面图案后反推所处关卡并触发对应任务程序。",
      en: "Robot code for the 2023 International Autonomous Intelligent Robot Competition physical track: a convolutional classifier trained on a self-collected six-class ground dataset recognises the pattern under the robot, infers the current level and triggers the matching task routine.",
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
    desc: { zh: "完善训练日志、配置与评估结果，补齐演示视频，降低复现门槛。", en: "Completed the training logs, configuration and evaluation results, and added a demo video to lower the barrier to reproduction." },
  },

  {
    link: "https://github.com/Zhuqiben/Gaze-DMS",
    meta: { zh: "2026.09.26 · Gaze-DMS", en: "2026.09.26 · Gaze-DMS" },
    title: { zh: "开源驾驶员监控系统", en: "Open-sourced the driver monitoring system" },
    desc: { zh: "视线估计与 YOLO 目标检测合并为完整工程，附 Tkinter 界面与训练教程。", en: "Merged gaze estimation and YOLO detection into one complete project, with a Tkinter interface and a training guide." },
  },

  {
    link: "https://github.com/Zhuqiben/lane_driving",
    meta: { zh: "2026.09.17 · lane_driving", en: "2026.09.17 · lane_driving" },
    title: { zh: "完成 ROS 2 车道线跟随功能包", en: "Completed the ROS 2 lane-following package" },
    desc: { zh: "从相机图像检测车道线，经 PID 计算转向后下发速度指令，并补充部署文档与测试。", en: "Detects lane lines from camera images, publishes PID-steered velocity commands, and adds deployment documentation and tests." },
  },
];

// ------------------------------------------------------------
//  荣誉与竞赛：link 可选；省略则该项不可点击
// ------------------------------------------------------------
const HONORS = [
  {
    year: "2024",
    title: { zh: "Kaggle 竞赛铜牌 · UM - Game-Playing Strength of MCTS Variants · 位列第 108", en: "Kaggle Competition Bronze Medal · UM - Game-Playing Strength of MCTS Variants · Ranked 108th" },
    link: "https://www.kaggle.com/certification/competitions/qibensu/um-game-playing-strength-of-mcts-variants",
  },

  {
    year: "2023",
    title: { zh: "国际自主智能机器人大赛 · 人形机器人现实世界标准赛 · 一等奖", en: "International Autonomous Intelligent Robot Competition · Humanoid Robot Real-World Standard Track · First Prize" },
  },

  {
    year: "2023",
    title: { zh: "国际自主智能机器人大赛 · 机器人仿真赛 · 三等奖", en: "International Autonomous Intelligent Robot Competition · Robot Simulation Track · Third Prize" },
  },

  {
    year: "2022",
    title: { zh: "国际自主智能机器人大赛 · 机器人仿真赛 · 三等奖", en: "International Autonomous Intelligent Robot Competition · Robot Simulation Track · Third Prize" },
  },

  {
    year: "2022",
    title: { zh: "机械创新大赛 · 省赛 · 三等奖", en: "Provincial Mechanical Innovation Competition · Third Prize" },
  },
];
