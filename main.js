// ============================================================
//  页面逻辑：语言切换 + 项目/文章卡片渲染
//  文案与项目内容都在 data.js 里维护，本文件一般不需要改动
// ============================================================

// 静态区块的中英文案（key 与 HTML 中的 data-i18n 属性一一对应）
const translations = {
  zh: {
    "nav.about": "关于我", "nav.posts": "文章", "nav.projects": "项目", "nav.contact": "联系",
    "hero.title": "用代码记录<br><span>每一次探索。</span>",
    "hero.description": "你好，我是 soo，一名专注于机器人感知、计算机视觉、深度学习与嵌入式部署的开发者。这里记录我的技术实践、学习笔记和正在构建的项目。",
    "hero.read": "阅读文章", "hero.github": "查看 GitHub",
    "card.value": "Building useful things<br>and learning every day.",
    "card.status": "Available for collaboration",
    "about.heading": "关于我",
    "about.lead": "我相信，好的技术不仅要解决问题，也应该让复杂的事情变得清晰、简单且可持续。",
    "about.description": "目前专注于 <strong>机器人感知、计算机视觉、深度学习与嵌入式部署</strong>，关注从仿真到真机的完整落地。<br><br>教育背景：东莞理工学院 · 机电工程（2021.09–2025.06）。",
    "tags.vision": "计算机视觉", "tags.deepLearning": "深度学习", "tags.robotics": "机器人技术",
    "posts.heading": "最近文章", "posts.all": "查看全部文章 ↗",
    "projects.heading": "精选项目", "projects.all": "GitHub 上查看更多 ↗",
    "contact.heading": "一起做点有趣的事？",
    "contact.description": "如果你想交流技术、分享想法，或者一起做一个项目，欢迎联系我。",
    "contact.button": "联系我 ↗", "contact.kaggle": "访问我的 Kaggle ↗",
    "footer.tagline": "Built with curiosity & code."
  },
  en: {
    "nav.about": "About", "nav.posts": "Notes", "nav.projects": "Projects", "nav.contact": "Contact",
    "hero.title": "Documenting<br><span>every exploration.</span>",
    "hero.description": "Hi, I'm soo, a developer focused on computer vision, deep learning, autonomous driving, and robotics. This is where I share my technical practice, notes, and projects.",
    "hero.read": "Read notes", "hero.github": "View GitHub",
    "card.value": "Building useful things<br>and learning every day.",
    "card.status": "Available for collaboration",
    "about.heading": "About me",
    "about.lead": "I believe good technology should not only solve problems, but also make complex things clear, simple, and sustainable.",
    "about.description": "I focus on <strong>robot perception, computer vision, deep learning, and edge deployment</strong>, with an interest in taking systems from simulation to real robots.<br><br>Education: Dongguan University of Technology · Mechanical and Electrical Engineering (2021.09–2025.06).",
    "tags.vision": "Computer Vision", "tags.deepLearning": "Deep Learning", "tags.robotics": "Robotics",
    "posts.heading": "Recent notes", "posts.all": "View all notes ↗",
    "projects.heading": "Selected projects", "projects.all": "See more on GitHub ↗",
    "contact.heading": "Want to build something fun?",
    "contact.description": "For technical conversations, ideas, or collaboration, feel free to reach out.",
    "contact.button": "Get in touch ↗", "contact.kaggle": "Visit my Kaggle ↗",
    "footer.tagline": "Built with curiosity & code."
  }
};

const languageButton = document.querySelector(".language-toggle");
const savedLanguage = localStorage.getItem("blog-language");
let language = savedLanguage === "zh" ? "zh" : "en";

// 字段值支持两种写法：字符串（中英文相同）或 { zh, en } 对象
function pick(value, lang) {
  return typeof value === "string" ? value : value[lang];
}

// 项目卡片：渲染顺序 = data.js 中 PROJECTS 数组的顺序，编号自动生成
function renderProjects() {
  const html = PROJECTS
    .filter((project) => !project.hidden)
    .map((project, index) => `
      <a class="project-card" href="${project.link}" target="_blank" rel="noreferrer">
        <span class="project-icon">${String(index + 1).padStart(2, "0")}</span>
        <h3>${pick(project.title, language)}</h3>
        <p>${project.desc[language]}</p>
        <span class="project-tech">${project.tech}</span>
      </a>`)
    .join("");
  document.getElementById("project-grid").innerHTML = html;
}

// 文章列表：渲染顺序 = data.js 中 POSTS 数组的顺序
function renderPosts() {
  const html = POSTS
    .filter((post) => !post.hidden)
    .map((post, index) => `
      <a class="post" href="${post.link}">
        <span class="post-number">${String(index + 1).padStart(2, "0")}</span>
        <div>
          <p class="post-meta">${pick(post.meta, language)}</p>
          <h3>${pick(post.title, language)}</h3>
          <p>${post.desc[language]}</p>
        </div>
        <span class="arrow">↗</span>
      </a>`)
    .join("");
  document.getElementById("post-list").innerHTML = html;
}

function applyLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language === "en" ? "en" : "zh-CN";
  document.title = language === "en" ? "soo · Personal Blog" : "soo · 个人博客";
  document.querySelector('meta[name="description"]').content = language === "en"
    ? "soo's blog about robot perception, computer vision, deep learning, and edge deployment."
    : "soo 的个人博客，记录机器人感知、计算机视觉、深度学习与嵌入式部署实践。";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.innerHTML = translations[language][element.dataset.i18n];
  });
  renderProjects();
  renderPosts();
  languageButton.textContent = language === "en" ? "中" : "EN";
  languageButton.setAttribute("aria-label", language === "en" ? "Switch to Chinese" : "切换到英文");
  localStorage.setItem("blog-language", language);
}

languageButton.addEventListener("click", () => applyLanguage(language === "zh" ? "en" : "zh"));
applyLanguage(language);
