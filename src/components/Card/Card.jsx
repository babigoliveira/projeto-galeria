import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Card = ({ photo, city, country, continent }) => {
  return (
    <div>
      <img
        className="border border-2 rounded border-dark my-3"
        src={photo}
        alt={city}
        width={276}
        height={200}
      />
      <p className="mb-1">Cidade: {city}</p>
      <p className="mb-1">País: {country}</p>
      <p className="mb-4">Continente: {continent}</p>
    </div>
  );
};

export default Card;
