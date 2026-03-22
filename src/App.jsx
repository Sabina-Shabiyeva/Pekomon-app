import PekomonContainer from "./components/PekomonContainer";
import { fetchPokemonData } from "./helpers/api";

let allPokemons = [];

const loadInitialData = async () => {
  allPokemons = await fetchPokemonData();
};
await loadInitialData();

function App() {
  const firstTeam = allPokemons.slice(0, 4);
  const firstScore = firstTeam.reduce((sum, p) => sum + p.base_experience, 0);

  const secondTeam = allPokemons.slice(4, 8);
  const secondScore = secondTeam.reduce((sum, p) => sum + p.base_experience, 0);

  return (
    <>
      <h1 className="pekomon-title">Pokedex</h1>
      <button className="pekomon-btn" onClick={() => window.location.reload()}>
        Start Game
      </button>
      <PekomonContainer
        score={firstScore}
        pokemonList={firstTeam}
        isWinner={firstScore > secondScore ? "Winner" : "Loser"}
      />
      <h2 className="pekomon-title">VS</h2>
      <PekomonContainer
        score={secondScore}
        pokemonList={secondTeam}
        isWinner={secondScore > firstScore ? "Winner" : "Loser"}
      />
    </>
  );
}

export default App;
