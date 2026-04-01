const form = document.querySelector("#contact-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const branch = formData.get("branch");
    const type = formData.get("type");
    const message = formData.get("message");

    const subject = `${type}｜矢頭派糸東流修交会 修義舘へのお問い合わせ`;
    const body = [
      "修義舘ホームページよりお問い合わせがありました。",
      "",
      `お名前: ${name}`,
      `メールアドレス: ${email}`,
      `ご希望の道場: ${branch}`,
      `お問い合わせ種別: ${type}`,
      "",
      "内容:",
      `${message}`,
    ].join("\n");

    window.location.href = `mailto:info@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
