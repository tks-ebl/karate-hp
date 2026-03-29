const form = document.querySelector("#contact-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const type = formData.get("type");
    const message = formData.get("message");

    const subject = `【${type}】清心館空手道場へのお問い合わせ`;
    const body = [
      "空手道場ホームページからお問い合わせがありました。",
      "",
      `お名前: ${name}`,
      `メールアドレス: ${email}`,
      `お問い合わせ種別: ${type}`,
      "",
      "内容:",
      `${message}`,
    ].join("\n");

    window.location.href = `mailto:info@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
