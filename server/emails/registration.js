module.exports = function (email) {
  return {
    from: '"Node js" <sticky.sisters@yandex.ru>',
    to: email,
    subject: "Аккаунт создан",
    text: "This message was sent from Node js server.",
    html: `<h1>Добро пожаловать</h1>
    <p>Ваш email: ${email}</p>
    `,
  };
};
