export const fetchPokemonData = async () => {
  try {
    const data = [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ];

    const dataWithImages = data.map((pokemon) => {
      const formattedId = String(pokemon.id).padStart(3, "0");

      return {
        ...pokemon,
        imageUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formattedId}.png`,
      };
    });

    for (let i = dataWithImages.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [dataWithImages[i], dataWithImages[j]] = [
        dataWithImages[j],
        dataWithImages[i],
      ];
    }

    return dataWithImages;
  } catch (error) {
    console.error("Xəta baş verdi:", error);
    return [];
  }
};
