require("dotenv").config();
const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const helmet = require("helmet");
const compression = require("compression");
const session = require("express-session");
const MongoStore = require("connect-mongodb-session")(session);
const csrf = require("csurf");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const cors = require("cors");
const homeRouts = require("./routes/home");
const addRouts = require("./routes/add");
const coursesRouts = require("./routes/courses");
const cardRouts = require("./routes/card");
const orderRouts = require("./routes/orders");
const authRouts = require("./routes/auth");
const profileRouts = require("./routes/profile");

const varMiddleware = require("./midlleware/variables");
const userMiddleware = require("./midlleware/user");
const errorMiddleware = require("./midlleware/error");
const fileMiddleware = require("./midlleware/file");

const keys = require("./keys");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: keys.BASE_URL,
  })
);

app.use("/auth", authRouts);
app.use("/profile", profileRouts);
app.use("/courses", coursesRouts);
app.use(errorMiddleware);

async function start() {
  try {
    await mongoose.connect(keys.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => {
      console.log("Server is running on port " + PORT);
    });
  } catch (error) {
    console.log(error);
  }
}

start();

// const Handlebars = require("handlebars");

// const {
//   allowInsecurePrototypeAccess,
// } = require("@handlebars/allow-prototype-access");

// const hbs = exphbs.create({
//   defaultLayout: "main",
//   extname: "hbs",
//   handlebars: allowInsecurePrototypeAccess(Handlebars),
//   helpers: require("./utils/hbs-helpers"),
// });

// const store = new MongoStore({
//   collection: "sessions",
//   uri: keys.MONGODB_URI,
// });

// app.engine("hbs", hbs.engine);
// app.set("view engine", "hbs");
// app.set("views", "views");

// app.use(express.static(path.join(__dirname, "public")));
// app.use("/images", express.static(path.join(__dirname, "images")));

// app.use(express.urlencoded({ extended: true }));
// app.use(
//   session({
//     secret: keys.SESSION_SECRET,
//     resavePath: false,
//     saveUnitialized: false,
//     store: store,
//   })
// );
// app.use(fileMiddleware.single("avatar"));

// app.use(csrf());
// app.use(flash());
// app.use(helmet());
// app.use(varMiddleware);
// app.use(userMiddleware);
// app.use(compression());
// app.use("/", homeRouts);
// app.use("/courses", coursesRouts);
// app.use("/add", addRouts);
// app.use("/card", cardRouts);
// app.use("/orders", orderRouts);
// app.use("/auth", authRouts);
// app.use("/profile", profileRouts);

// app.use(errorMiddleware);
