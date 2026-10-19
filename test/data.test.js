// ============================================================
//  data.js 内容校验（无第三方依赖）
//  运行：  node test/data.test.js
//
//  这里校验的是内容层不变量：双语齐全、链接有效、年份格式正确。
// ============================================================

const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const DATA = path.resolve(__dirname, "..", "data.js");

/** data.js 用 const 声明，require 拿不到，先导出再加载。 */
function loadData() {
  const source = fs.readFileSync(DATA, "utf8");
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "datajs-"));
  const tmp = path.join(dir, "data.js");
  fs.writeFileSync(tmp, `${source}\nmodule.exports = { PROJECTS, POSTS, HONORS };\n`, "utf8");
  return require(tmp);
}

const { PROJECTS, POSTS, HONORS } = loadData();

let checks = 0;
const check = (condition, message) => {
  assert.ok(condition, message);
  checks += 1;
};

/** 字段要么是中英一致的字符串，要么是中英都非空的对象。 */
function isBilingual(value, where) {
  if (typeof value === "string") {
    check(value.trim().length > 0, `${where} 为空字符串`);
    return;
  }
  check(value && typeof value === "object", `${where} 必须是字符串或 { zh, en }`);
  check(typeof value.zh === "string" && value.zh.trim().length > 0, `${where}.zh 缺失`);
  check(typeof value.en === "string" && value.en.trim().length > 0, `${where}.en 缺失`);
}

function isRealLink(link, where) {
  check(typeof link === "string" && link.length > 0, `${where} 缺少 link`);
  check(link !== "#", `${where} 的 link 还是占位符 "#"`);
  check(/^https?:\/\//.test(link), `${where} 的 link 不是 http(s)：${link}`);
}

check(Array.isArray(PROJECTS) && PROJECTS.length > 0, "PROJECTS 为空");
check(Array.isArray(POSTS) && POSTS.length > 0, "POSTS 为空");
check(Array.isArray(HONORS) && HONORS.length > 0, "HONORS 为空");

const ids = new Set();
PROJECTS.forEach((project, index) => {
  const where = `PROJECTS[${index}]`;
  check(typeof project.id === "string" && project.id.length > 0, `${where} 缺少 id`);
  check(!ids.has(project.id), `${where} id 重复：${project.id}`);
  ids.add(project.id);
  isBilingual(project.title, `${where}.title`);
  isBilingual(project.desc, `${where}.desc`);
  isRealLink(project.link, where);
  check(typeof project.tech === "string" && project.tech.length > 0, `${where} 缺少 tech`);
});

POSTS.forEach((post, index) => {
  const where = `POSTS[${index}]`;
  isRealLink(post.link, where);
  isBilingual(post.meta, `${where}.meta`);
  isBilingual(post.title, `${where}.title`);
  isBilingual(post.desc, `${where}.desc`);
});

HONORS.forEach((honor, index) => {
  const where = `HONORS[${index}]`;
  check(/^\d{4}$/.test(honor.year), `${where}.year 不是四位年份：${honor.year}`);
  isBilingual(honor.title, `${where}.title`);
  if (honor.link !== undefined) {
    isRealLink(honor.link, where);
  }
});

console.log(`data.js 校验通过：${checks} 项检查`);
console.log(`  项目 ${PROJECTS.length} 个 · 动态 ${POSTS.length} 条 · 荣誉 ${HONORS.length} 条`);
