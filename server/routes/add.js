const { Router } = require("express");
const router = Router();
const Course = require("../models/course");
const auth = require("../midlleware/auth");
const { validationResult } = require("express-validator/check");
const { coursesValidators } = require("../utils/validators");

router.post("/", auth, coursesValidators, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    req.flash("loginError", errors.array()[0].msg);
    return res.status(422).render("./add", {
      title: "Добавить курс",
      isAdd: true,
      error: errors.array()[0].msg,
      data: {
        title: req.body.title,
        price: req.body.price,
        img: req.body.img,
      },
    });
  }

  const course = new Course({
    title: req.body.title,
    price: req.body.price,
    img: req.body.img,
    userId: req.user._id, // req.user так тоже можно
  });

  try {
    await course.save();
    res.redirect("/courses");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
