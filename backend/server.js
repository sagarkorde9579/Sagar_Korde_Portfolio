const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");

const adminRoutes = require("./routes/adminRoutes");
const { default: homeRouter } = require("./routes/homeRoutes.js");
const { default: aboutRouter } = require("./routes/aboutRoutes.js");
const { default: projectRouter } = require("./routes/projectRoutes.js");
const { default: contactRouter } = require("./routes/contactRoutes.js");
const { default: skillRouter } = require("./routes/skillRoutes.js");
const { default: documentRouter } = require("./routes/documentRoutes.js");
const { default: resumeRouter } = require("./routes/resumeRoutes.js");

const app = express();
const PORT = process.env.PORT || 2000;

dotenv.config();
connectDB();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));

app.use("/api/admin", adminRoutes);
app.use("/api/home", homeRouter);
app.use("/api/about", aboutRouter);
app.use("/api/project", projectRouter);
app.use("/api/contact", contactRouter);
app.use("/api/skill", skillRouter);
app.use("/api/document", documentRouter);
app.use("/api/resume", resumeRouter);

app.get("/", (req, res) => {
  res.send("Work successfully");
});

app.listen(PORT, () => {
  console.log("Running on PORT 2000");
});