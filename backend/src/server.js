import app from "./app";

const PORT = process.env.PORT || 3335;

app.set("port", PORT);

app.listen(PORT);
