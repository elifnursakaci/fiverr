import error from "./../utils/error.js";
import Gig from "../models/gig.model.js";

// filtreleme ayarları oluşturan method
const buildFilters = (query) => {
  // filtreleme ayarlarının tanımlandığı nesne oluştur
  const filters = {};

  //eğerki userId param. eklendiyse filtre ayarlarına ekle
  if (query.userId) {
    filters.user = query.userId;
  }
  //eğerki kategori param. eklendiyse filtre ayarlarına ekle

  if (query.cat) {
    filters.category = query.cat;
  }

  if (query.min || query.max) {
    filters.price = {};

    if (query.min) {
      filters.price.$gte = query.min;
    }
    if (query.max) {
      filters.price.$lte = query.max;
    }
  }

  if (query.search) {
    filters.title = { $regex: query.search, $options: "i" };
  }

  if (query.userId) {
    filters.user = query.userId;
  }

  // fonksiyonun çağırıldığı yere ayarları döndür
  return filters;
};

//  bütün hizmetleri al
export const getAllGigs = async (req, res, next) => {
  // filtreme ayarlarını oluşturan fonksiyonu çağır
  const filters = buildFilters(req.query);

  try {
    const gigs = await Gig.find(filters).populate("user");

    if (gigs.length > 0) {
      res.status(200).json({
        message: "Hizmetler alındı",
        gigs,
      });
    } else {
      next(error(404, "Aratılan kriterlere uygun bir hizmet bulunamadı."));
    }
  } catch (err) {
    next(error(500, "Hizmetler alınırken bir sorun oluştu."));
  }
};

//  bir hizmeti al
export const getGig = async (req, res, next) => {
  try {
    // urle param olarak eklenen id den yola çıkarak hizmetin bilgilerine eriş
    const gig = await Gig.findById(req.params.id).populate("user");

    res.status(200).json({
      message: "Hizmet bulundu",
      gig: gig,
    });
  } catch (err) {
    // gönderilen id'de hizmet yoksa hata gönder
    next(error(404, "Bu id'ye sahip bir hizmet bulunamadı"));
  }
};

//  yeni hizmet oluştur
export const createGig = async (req, res, next) => {
  // kullanıcı satıcı değilse hata gönder
  if (!req.isSeller)
    return next(error(403, "Sadece satıcılar hizmet oluşturabilir"));

  // yeni hizmet oluştur
  const newGig = new Gig({
    user: req.userId,
    ...req.body,
  });

  try {
    // hizmeti kaydet
    const savedGig = await newGig.save();

    // clienta cevap gönder
    res.status(200).json({
      message: "Hizmet başarıyla oluşturuldu",
      gig: savedGig,
    });
  } catch (err) {
    console.log(err);
    next(error(500, "Hizmet oluşturulurken bir sorun oluştu"));
  }
};

//  bir hizmeti sil
export const deleteGig = async (req, res, next) => {
  res.status(200).json({
    message: "Backend den cevap gönderildi",
  });
};
