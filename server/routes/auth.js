const { Router } = require("express");
const keys = require("../keys");
const nodemailer = require("nodemailer");
const regEmail = require("../emails/registration");
const resetEmail = require("../emails/reset");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const crypto = require("crypto"); // усстнавливать не нужно, встроена в nodjs
const { registerValidators, loginValidators } = require("../utils/validators");
const UserController = require("../controllers/user-controller");

const router = new Router();

let transporter = nodemailer.createTransport({
  host: "smtp.yandex.ru",
  port: 465,
  auth: {
    user: "sticky.sisters@yandex.ru",
    pass: "Million2017",
  },
});

router.post("/logout", UserController.logout);
router.post("/login", loginValidators, UserController.login);

router.post("/register", registerValidators, UserController.registration);

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

router.get("/activate/:link", UserController.activate);
router.get("/refresh", UserController.refresh);

module.exports = router;
