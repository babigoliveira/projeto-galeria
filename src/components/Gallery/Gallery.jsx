import { useEffect, useState } from "react";
import { fetch } from "../../api";
import Card from "../Card/Card";
import div from "../Card/Card";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://example.com");
        setData(response.data);
      } catch (e) {
        console.error(e);
      }
    };

    getData().catch(() =>
      console.error("Falha ao buscar os dados da api fake")
    );
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <input type="text" placeholder="Buscar..." onChange={handleSearch} />
      <div className="d-flex flex-wrap justify-content-center align-items-center my-5 gap-4">
        {data
          .filter(({ city, country, continent }) =>
            [city, country, continent]
              .join(" ")
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .map((data) => (
            <div key={data.id}>
              <Card key={data.id} {...data} />
            </div>
          ))}
      </div>
    </div>
  );
};
export default Gallery;
