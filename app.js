const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 8000;
const host = "127.0.0.1";

app.use(morgan("dev"));
app.use(express.json());

const authRouter = require("./routes/auth-route");
const adminRouter = require("./routes/admin-route");

app.get("/", (request, response) => {
  response.status(200).json({
    status: "success",
    data: { message: "you are in Root" },
  });
});

app.use("/auth", authRouter);

app.use("/admin", adminRouter);

app.all("*", (request, response) => {
  response.status(404).json({
    status: "fail",
    data: { message: "not-found any page" },
  });
});
app.listen(port, host, () => {
  console.log(`you are listening on ${host}: ${port}`);
});
