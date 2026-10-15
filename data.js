// ============================================================
//  站点内容数据 —— 日常只需编辑这个文件，不用碰 index.html / main.js
// ============================================================
//
//  【新增项目】在 PROJECTS 数组里复制任意一个 { ... } 块，改字段即可
//  【调整顺序】数组顺序 = 页面卡片顺序（从左到右、从上到下）。
//              把某个 { ... } 块整段剪切、粘贴到目标位置即可，
//              卡片编号（01/02/...）会自动重排，无需手动改数字
//  【临时下架】给该项目加一行 hidden: true，卡片即不渲染，无需删除代码
//
//  字段说明：
//    title  卡片标题。中英文一样的（如仓库名）直接写字符串；
//           中英文不一样的写成 { zh: "...", en: "..." }
//    link   点击卡片打开的链接
//    tech   卡片底部技术标签，纯文本，建议用 · 分隔
//    desc   卡片描述，必须写成 { zh: "...", en: "..." } 两种语言
//    hidden 可选。true 时隐藏该卡片
//
//  注意：data.js 必须先于 main.js 加载（保持 index.html 中的顺序即可）

const PROJECTS = [
  {
    id: "gaze-dms",
    title: "Gaze-DMS",
    link: "https://github.com/Zhuqiben/Gaze-DMS",
    tech: "Python · PyTorch · ONNX",
    desc: {
      zh: "驾驶员监控系统：视线估计（MPIIGaze / MPIIFaceGaze）+ YOLO 目标检测（face / phone 两类）+ 疲劳分心分析（EAR / MAR），含 Tkinter 桌面界面与完整训练教程。",
      en: "A driver monitoring prototype: gaze estimation (MPIIGaze / MPIIFaceGaze) + YOLO object detection (two classes: face / phone) + fatigue and distraction analysis (EAR / MAR), with a Tkinter desktop UI and a full training guide.",
    },
  },

  {
    id: "pytorch-mpiigaze",
    title: "pytorch_mpiigaze",
    link: "https://github.com/Zhuqiben/pytorch_mpiigaze",
    tech: "Python · PyTorch",
    desc: {
      zh: "视线追踪实现，可延伸至驾驶员监控与人机交互场景。",
      en: "A gaze-tracking implementation applicable to driver monitoring and human-robot interaction.",
    },
  },

  {
    id: "lane-driving",
    title: "lane_driving",
    link: "https://github.com/Zhuqiben/lane_driving",
    tech: "Python · ROS 2 · OpenCV",
    desc: {
      zh: "基于 ROS 2 的车道线跟随节点：订阅相机图像检测黄色车道线，经 PID 计算转向后向 /controller/cmd_vel 下发速度指令。",
      en: "A ROS 2 lane-following node: detects yellow lane lines from camera images and publishes PID-steered velocity commands to /controller/cmd_vel.",
    },
  },

  {
    id: "kaggle",
    // 中英文一致的标题直接写字符串即可
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
    // 中英文不一致的标题写成对象
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
//  动态列表：新增 / 排序 / hidden 规则与 PROJECTS 完全相同
//  每一条都对应真实提交，link 指向对应仓库，请勿填写未发布的内容
// ------------------------------------------------------------
const POSTS = [
  {
    link: "https://github.com/Zhuqiben/Gaze-DMS",
    meta: { zh: "2026.09.30 · Gaze-DMS", en: "2026.09.30 · Gaze-DMS" },
    title: { zh: "补充演示视频与训练日志", en: "Added demo video and training logs" },
    desc: { zh: "完善训练日志、配置与评估结果，补齐演示视频，降低复现门槛。", en: "Added training logs, configs, and evaluation results plus a demo video to make reproduction easier." },
  },

  {
    link: "https://github.com/Zhuqiben/Gaze-DMS",
    meta: { zh: "2026.09.26 · Gaze-DMS", en: "2026.09.26 · Gaze-DMS" },
    title: { zh: "开源驾驶员监控系统", en: "Open-sourced the driver monitoring system" },
    desc: { zh: "视线估计与 YOLO 目标检测合并为完整工程，附 Tkinter 界面与训练教程。", en: "Combined gaze estimation and YOLO detection into one project, with a Tkinter UI and a training guide." },
  },

  {
    link: "https://github.com/Zhuqiben/lane_driving",
    meta: { zh: "2026.09.17 · lane_driving", en: "2026.09.17 · lane_driving" },
    title: { zh: "完成 ROS 2 车道线跟随功能包", en: "Completed the ROS 2 lane-following package" },
    desc: { zh: "从相机图像检测车道线，经 PID 计算转向后下发速度指令，并补充部署文档与测试。", en: "Detects lane lines from camera images, computes steering with PID, publishes velocity commands, and ships with a deployment guide and tests." },
  },
];

// ------------------------------------------------------------
//  荣誉与竞赛：新增 / 排序 / hidden 规则与 PROJECTS 完全相同
//  link 可选；省略则该项不可点击
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
