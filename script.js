// versions.js の VERSIONS を読み取り、バージョンごとのボックスを表示する。
// 内容の編集は versions.js だけで行えるので、通常このファイルを変更する必要はありません。

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>'"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[ch]));
}

// http / https のリンクだけを許可する。
function safeURL(url) {
  return /^https?:\/\//i.test(String(url || "").trim()) ? String(url).trim() : "";
}

function renderVersion(version) {
  const changes = Array.isArray(version.changes) ? version.changes.filter(Boolean) : [];
  const links = Array.isArray(version.links) ? version.links.filter(link => safeURL(link?.url)) : [];

  const changesHTML = changes.length
    ? `<ul class="change-list">${changes.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`
    : `<p class="empty">未記入</p>`;

  const linksHTML = links.length
    ? `<div class="link-list">${links.map(link => `<a href="${escapeHTML(safeURL(link.url))}" target="_blank" rel="noopener">${escapeHTML(link.label || link.url)}</a>`).join("")}</div>`
    : `<p class="empty">なし</p>`;

  return `<article class="version-card">
    <div class="version-head">
      <h2>${escapeHTML(version.name || "名称未設定")}</h2>
      <time>${escapeHTML(version.date || "日付未記入")}</time>
    </div>
    <section>
      <h3>変更点</h3>
      ${changesHTML}
    </section>
    <section>
      <h3>リンク</h3>
      ${linksHTML}
    </section>
  </article>`;
}

const list = document.getElementById("version-list");
const versions = typeof VERSIONS !== "undefined" && Array.isArray(VERSIONS) ? VERSIONS : [];
list.innerHTML = versions.length
  ? versions.map(renderVersion).join("")
  : `<p class="empty">まだ更新履歴はありません。</p>`;

// 固定表示の注意書きの高さぶん、ページ下に余白を取る（画面幅で高さが変わるため実測する）。
const notice = document.getElementById("site-notice");
function updateNoticeHeight() {
  if (notice) document.documentElement.style.setProperty("--notice-height", `${notice.offsetHeight}px`);
}
updateNoticeHeight();
window.addEventListener("resize", updateNoticeHeight);
