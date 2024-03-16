const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
    res.json({ message: "이 요청은 성공적으로 처리되었습니다!" });
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server 시작 ${PORT}`);
});
