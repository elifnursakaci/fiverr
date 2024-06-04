import Input from "../components/Input";
import api from "../utils/api";
import { inputs } from "../utils/constants";
import upload from "../utils/upload";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddGig = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // sayfa yenilemeyi engelle
    e.preventDefault();

    // bütün inputlarda ki verilere eriş
    const formData = new FormData(e.target);
    const gigData = Object.fromEntries(formData.entries());
    gigData.images = e.target.images.files;

    // fotoğrafları bulut depolama alanına yükle
    const coverUrl = await upload(gigData.cover);
    const imageUrls = await Promise.all(
      [...gigData.images].map(async (file) => {
        return await upload(file);
      })
    );

    // fotoğrafların urlini nesneye kaydet
    gigData.cover = coverUrl;
    gigData.images = imageUrls;

    // özellikler alanında ki metni ,
    gigData.features = gigData.features.split(",");

    // api'a veriyi kaydet
    api
      .post("/gig", gigData)
      .then((res) => {
        // hizmet detay sayfasına yönlendir
        navigate(`/gig/${res.data.gig._id}`);
        // bildirim ver
        toast.success(`Hizmet oluşturuldu`);
      })
      .catch((err) => {
        console.log(err);
        toast.error(`Bir hata oluştu`);
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-8 text-center">Yeni Hizmet Ekle</h1>
      <form
        onSubmit={handleSubmit}
        className="grid lg:grid-cols-2 gap-x-10 gap-y-6"
      >
        {inputs.map((data) => (
          <Input key={data.name} {...data} />
        ))}

        <div className="lg:col-span-2">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Özellikler
          </label>
          <p className="mb-2 text-sm text-gray-600">
            Lütfen özellikleri ',' ile ayırınız
          </p>
          <textarea
            name="features"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 placeholder-gray-400 text-gray-900 focus:border-blue-500 min-h-[200px] max-h-[400px]"
          />
        </div>

        <button className="lg:col-span-2 mt-10 bg-blue-500 p-3 font-bold text-white rounded hover:bg-blue-600 transition-colors duration-300">
          Hizmet Yayınla
        </button>
      </form>
    </div>
  );
};

export default AddGig;
