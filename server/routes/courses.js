const { Router } = require("express");
const router = Router();
const Course = require("../models/course");
const mongoose = require("mongoose");
const auth = require("../midlleware/auth");
const { validationResult } = require("express-validator/check");
const { coursesValidators } = require("../utils/validators");

function isOwner(course, req) {
  return course.userId.toString() === req.user.id.toString();
}

router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    return res.json({
      courses,
      userId: req.user ? req.user._id.toString() : null,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) return false;
    const course = await Course.findById(req.params.id);
    return res.json({
      course,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id/edit", auth, async (req, res) => {
  if (!req.query.allow) {
    return res.redirect("/");
  }

  try {
    const course = await Course.findById(req.params.id);

    if (!isOwner(course, req)) {
      return res.redirect("/courses");
    }

    res.render("edit", {
      title: `Рeдактировать ${course.title}`,
      course,
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/edit", auth, coursesValidators, async (req, res) => {
  try {
    const { id } = req.body;
    delete req.body.id;
    const course = await Course.findById(id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      req.flash("errors", errors.array()[0].msg);
      return res.status(422).redirect(`/courses/${id}/edit?allow=true`);
    }

    if (!isOwner(course, req)) {
      return res.redirect("/courses");
    }
    Object.assign(course, req.body);
    await course.save();
    // await Course.findByIdAndUpdate(id, req.body);
    return res.redirect("/courses");
  } catch (error) {
    console.log(error);
  }
});

router.post("/remove", auth, async (req, res) => {
  try {
    await Course.deleteOne({ _id: req.body.id, userId: req.user._id });
    res.redirect("/courses");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
