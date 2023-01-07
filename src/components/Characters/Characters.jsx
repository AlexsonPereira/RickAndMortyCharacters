import { CharCard } from "../CharCard/CharCard"
import { List, Main } from "./style"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

export const Characters = ({characterList, setPage, page}) => {

   return (
      <Main>
         <h1>Meus Personagens</h1>
         <div className="nextPages">
            <AiOutlineArrowLeft onClick={()=> {if(page != 1){setPage(()=> page-1)}} }/>
            <span>{page}</span>
            <AiOutlineArrowRight onClick={()=>{if(page < 42){setPage(page+1)}}}/>
         </div>
         <List>
            {characterList.map(e => <CharCard img={e.image} name={e.name} key={e.id} status={e.status} species={e.species} city={e.location.name} gender={e.gender} id={e.id}/> )}
         </List>
      </Main>
   )
}