import PropTypes from "prop-types";
import style from "./PekomonCard.module.css";

const PekomonCard = ({ pokemon }) => {
  return (
    <div className={style.pekomonCard}>
      <h2 className={style.pekomonCardTitle}>{pokemon.name}</h2>
      <img
        src={pokemon.imageUrl}
        alt={pokemon.name}
        className={style.pekomonCardImage}
      />
      <p className={style.pekomonCardType}>Type: {pokemon.type}</p>
      <p className={style.pekomonCardEXP}>EXP {pokemon.base_experience}</p>
      <button className={style.pekomonCardButton}>Read more</button>
    </div>
  );
};

PekomonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    base_experience: PropTypes.number.isRequired,
  }).isRequired,
};

export default PekomonCard;
