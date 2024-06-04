import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import authRouter from "./routes/auth.route.js";
import gigRouter from "./routes/gig.route.js";
import reviewRouter from "./routes/review.route.js";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

// env dosyasındaki veriler erişmek için kurulum
dotenv.config();
// veritabanı bağlantı

mongoose
  .connect("mongodb://localhost:27017/Fiverr")
  .then(() => console.log("Connect success"))
  .catch((err) => console.log(err));

// express uygulması
const app = express();

// middleware
//
app.use(express.json());

// kendi react uygulamamızdan  gelen isteklere cevap vermesi izin ver
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// konsola istekleri yazan middleware değerleri
app.use(morgan("dev"));

// çerezleri işler ve erişilebilir hale getirir
app.use(cookieParser());

//route tanımlama
app.use("/api/auth", authRouter);
app.use("/api/gig", gigRouter);
app.use("/api/review", reviewRouter);

// hata yönetimi
app.use((err, req, res, next) => {
  console.log("HATA MEYDANA GELDİ");
  console.log(err);

  const errStatus = err.status || 500;
  const errMessage = err.message || "Üzgünüz bir şeyler ters gitti";

  return res.status(errStatus).json({
    statusCode: errStatus,
    message: errMessage,
  });
});

// hangi portun dinleneceğini belirleyelim
app.listen(8080, () => {
  console.log(`Server is running`);
});
