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
//  文章列表：新增 / 排序 / hidden 规则与 PROJECTS 完全相同
// ------------------------------------------------------------
const POSTS = [
  {
    link: "#",
    meta: { zh: "2026.09.17 · 技术实践", en: "2026.09.17 · Practice" },
    title: { zh: "从一个想法到可运行的项目", en: "From an idea to a working project" },
    desc: { zh: "记录项目搭建过程中的思考、选择与收获。", en: "Thoughts, choices, and lessons from building a project." },
  },

  {
    link: "#",
    meta: { zh: "2026.09.10 · 学习笔记", en: "2026.09.10 · Learning" },
    title: { zh: "如何建立自己的知识管理系统", en: "How to build your own knowledge system" },
    desc: { zh: "让零散的学习记录真正沉淀为可复用的知识。", en: "Turning scattered notes into reusable knowledge." },
  },

  {
    link: "#",
    meta: { zh: "2026.09.03 · 随笔", en: "2026.09.03 · Thoughts" },
    title: { zh: "保持好奇，持续构建", en: "Stay curious, keep building" },
    desc: { zh: "关于学习、创造，以及长期主义的一点思考。", en: "A few thoughts on learning, creating, and playing the long game." },
  },

];
