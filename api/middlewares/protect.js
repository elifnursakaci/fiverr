// clientten çerezler ile gönderilen jwt tokenin geçerliliğini kontrol edecek ve geçersiz ise hata gönderecek
import error from "../utils/error.js";
import jwt from "jsonwebtoken";
const protect = (req, res, next) => {
  // çerezler ile gelen tokene eriş
  const token = req.cookies.accessToken;
  // token yoksa hata ver
  if (!token) return next(error(403, "Yetkiniz yok (Token Bulunamadı)"));
  // token geçerli mi kontrol et
  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return next(error(403, "Tokeniniz geçersiz veya süresi dolmuş"));
    // req içerisine kullanıcı id ve isSeller değerini ekle
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
  });
  // sonra ki adıma devam et
  next();
};

export default protect;
