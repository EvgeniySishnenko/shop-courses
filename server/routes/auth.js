const { Router } = require("express");
const keys = require("../keys");
const nodemailer = require("nodemailer");
const regEmail = require("../emails/registration");
const resetEmail = require("../emails/reset");
const { validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const crypto = require("crypto"); // усстнавливать не нужно, встроена в nodjs
const router = new Router();
const { registerValidators, loginValidators } = require("../utils/validators");

let transporter = nodemailer.createTransport({
  host: "smtp.yandex.ru",
  port: 465,
  auth: {
    user: "sticky.sisters@yandex.ru",
    pass: "Million2017",
  },
});

router.get("/login", async (req, res) => {
  res.render("auth/login", {
    title: "Авторизация",
    isLOgin: true,
    registerError: req.flash("registerError"),
    loginError: req.flash("loginError"),
  });
});

router.get("/logout", async (req, res) => {
  req.session.destroy(() => {
    res.redirect("/auth/login#login");
  });
});

router.post("/login", loginValidators, async (req, res) => {
  try {
    const { email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      req.flash("loginError", errors.array()[0].msg);
      return res.status(422).redirect("./login#login");
    }
    const condidate = await User.findOne({ email });
    req.session.user = condidate;
    req.session.isAuthenticated = true;
    req.session.save((err, user) => {
      if (err) throw err;
      res.redirect("/");
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/register", registerValidators, async (req, res) => {
  try {
    const { remail, rpassword, rname } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      req.flash("registerError", errors.array()[0].msg);
      return res.status(422).redirect("./login#register");
    }
    const hashPassword = await bcrypt.hash(rpassword, 10);
    const user = new User({
      email: remail,
      password: hashPassword,
      name: rname,
      card: { items: [] },
    });
    await user.save();

    let result = await transporter.sendMail(regEmail(remail));

    res.redirect("/auth/login#login");
  } catch (error) {
    console.log(error);
  }
});

router.get("/reset", (req, res) => {
  res.render("auth/reset", {
    title: "Забыли пароль",
    error: req.flash("error"),
  });
});

router.get("/password/:token", async (req, res) => {
  if (!req.params.token) {
    return res.redirect("/auth/login");
  }

  try {
    const user = await User.findOne({
      resetToken: req.params.token,
      resetTokenExp: { $gt: Date.now() },
    });

    if (!user) {
      return res.redirect("/auth/login");
    } else {
      res.render("auth/password", {
        title: "Восстановить пароля",
        error: req.flash("error"),
        userId: user._id.toString(),
        token: req.params.token,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/reset", (req, res) => {
  try {
    crypto.randomBytes(32, async (err, buf) => {
      if (err) {
        req.flash("error", "Что то пошло не так повторите попытку позже");
        return res.redirect("/auth/reset");
      }
      const token = buf.toString("hex");
      const condidate = await User.findOne({ email: req.body.email });
      if (condidate) {
        condidate.resetToken = token;
        condidate.resetTokenExp = Date.now() + 60 * 60 * 1000;
        await condidate.save();
        await transporter.sendMail(resetEmail(condidate.email, token));
        res.redirect("/auth/login");
      } else {
        req.flash("error", "Пользователь не найден");
        res.redirect("/auth/reset");
      }
    });
  } catch (error) {
    log.error(error);
  }
});

router.post("/password", async (req, res) => {
  try {
    const condidate = await User.findOne({
      _id: req.body.userId,
      resetToken: req.body.token,
      resetTokenExp: { $gt: Date.now() },
    });
    if (condidate) {
      condidate.password = await bcrypt.hash(req.body.password, 10);
      condidate.resetToken = undefined;
      condidate.resetTokenExp = undefined;
      await condidate.save();
      res.redirect("/auth/login");
    } else {
      req.flash("error", "Время жизни токена истекло");
      res.redirect("/auth/login");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
