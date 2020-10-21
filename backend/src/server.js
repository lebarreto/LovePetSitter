import app from "./app";

const port = process.env.PORT || 3335;

app.listen(port, () => {
  console.log("App is running on port " + port);
});
