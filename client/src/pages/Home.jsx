import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import InfoCard from "../components/InfoCard";
import { cards } from "../utils/constants";

const Home = () => {
  const navigate = useNavigate();

  // aratılma durumunda
  const handleSearch = (e) => {
    // sayfa yenilenmeyi engelle
    e.preventDefault();

    // aratılan kelimeyi al
    const text = e.target[0].value;

    // kullanıcıyı hizmetler sayfasına yönlendir
    navigate(`/search/gig?query=${text}`);
  };

  return (
    <div>
      <section className="h-[60vh] bg-gradient-to-r from-green-700 to-green-900 text-white p-5 pt-20 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold max-w-xl mx-auto">
          Find the right freelance service, right away
        </h1>

        <form
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row gap-3 mt-10 w-full max-w-md mx-auto"
        >
          <input
            className="flex-grow p-3 rounded-md text-black outline-none focus:ring-2 focus:ring-green-500"
            placeholder="herhangi bir hizmeti arayın.."
            type="text"
            required
          />
          <button className="bg-[#1dbf73] p-3 rounded-md cursor-pointer hover:bg-green-700 transition flex items-center justify-center">
            <IoSearch size={20} />
          </button>
        </form>
      </section>

      <section className="mt-20 px-5">
        <h1 className="text-3xl font-bold mb-10 text-center">
          The best part? Everything.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((props, key) => (
            <InfoCard {...props} key={key} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
