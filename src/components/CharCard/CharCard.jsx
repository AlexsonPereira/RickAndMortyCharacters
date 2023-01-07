import { useState } from "react"
import { Card } from "./style"
import { MdFavorite } from "react-icons/md"
import { useContext } from "react"
import { CharactersContext } from "../../context/CharacterContext"
import { useEffect } from "react"
export const CharCard = ({id,img,name,status,species,gender,city}) => {
   const {setFavoriteCharacter, favoriteCharacter} = useContext(CharactersContext)
   const [describe , setDescribe ] = useState(false)
   const [favorite, setFavorite] = useState(false)

   useEffect(()=>{
      favoriteCharacter.forEach(e => {if(e.id === id){setFavorite(true)}})
   },[])

   

   const addFavorite = () => {
      setFavoriteCharacter([...favoriteCharacter,{id,name,img,status}])
   }

   return (
      <Card onMouseEnter={(e)=>{setDescribe(true) }} onMouseLeave={(e)=>{setTimeout(()=>{setDescribe(false)},300)}} favorite={favorite} status={status}>
            <h3>{name}</h3>
            <img src={img} alt={name} />
            <MdFavorite className="favoriteIcon" onClick={()=>setFavorite(!favorite)} />
            {describe && <div className="Atributes">
               <div>
                  <h4>Specie: <span>{species}</span></h4>
                  <h4>Gender: <span>{gender}</span></h4>
                  <h4>City: <span>{city}</span></h4>
                  <MdFavorite onClick={()=>{setFavorite(!favorite),addFavorite()}} />
               </div>
            </div>}
            
      </Card>
   )
}