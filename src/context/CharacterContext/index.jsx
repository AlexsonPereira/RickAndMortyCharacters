import { Children, createContext, useState } from "react";

export const CharactersContext = createContext({})


export const CharacterProvider = ({children}) => {
   const [favoriteCharacter, setFavoriteCharacter] = useState([])
   
   return (
   <CharactersContext.Provider value={{
      favoriteCharacter,
      setFavoriteCharacter,

   }}>
      {children}
   </CharactersContext.Provider>
   )
}