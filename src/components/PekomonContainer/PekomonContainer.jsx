import PropTypes from "prop-types";
import PekomonCard from "../PekomonCard";
import style from "./PekomonContainer.module.css";

const PekomonContainer = ({ pokemonList, score, isWinner }) => {
  return (
    <div className={style.pekomonContainer}>
      <h2
        className={
          isWinner === "Winner"
            ? style.pekomonContainerWinner
            : style.pekomonContainerLoser
        }
      >
        {isWinner}
      </h2>{" "}
      <h4 className={style.pekomonContainerScore}>{score}</h4>
      <div className={style.pekomonContainerCard}>
        {pokemonList &&
          pokemonList.map((pokemon) => (
            <PekomonCard key={pokemon.id} pokemon={pokemon} />
          ))}
      </div>
    </div>
  );
};

PekomonContainer.propTypes = {
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      base_experience: PropTypes.number.isRequired,
    }),
  ).isRequired,
  score: PropTypes.number.isRequired,
  isWinner: PropTypes.string.isRequired,
};

export default PekomonContainer;
