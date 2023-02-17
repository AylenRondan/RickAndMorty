import { useSelector, useDispatch } from "react-redux"
import {useEffect} from "react";
import {getAllCharacters} from '../../redux/actions'
import CharacterCard from '../characterCard/CharacterCard';

//useSelector >> Hook que funciona igual que el mapStateToProps.
//useDispatch >> Hook que funciona igual que el mapDispatchToProps.
//useEffect >> Hook que emula los ciclos de vida de un componente.

const Characters = ()=> {
    const dispatch = useDispatch();
    const characters = useSelector(state => state.characters)
//con Destructuring: const {characters} = useSelecto(state => state);
    useEffect(()=>{
        dispatch(getAllCharacters())
    },[]);
    
    console.log(characters);
    
    return (
        <>
            {
                characters.map(character => {
                    return <CharacterCard
                        key = {character.id}
                        name = {character.name}
                        id = {character.id}
                        image = {character.image}
                        species = {character.species}
                        gender = {character.gender}
                    />
                })
            }
        </>
    )
}


export default Characters;

// import React from "react";
// import { connect } from "react-redux";
// import { getAllCharacters } from "../../redux/actions";
// import CharacterCard from "../characterCard/CharacterCard";

// class Characters extends React.Component{
//     constructor(props){
//         super(props)
//     }

//     componentDidMount(){
//         this.props.getAllCharacters();
//     }

//     render(){
//         return(
//             <>
//                 {
//                     this.props.characters?.map(character => {
//                         return <CharacterCard
//                             key={character.id}
//                             id={character.id}
//                             name={character.name}
//                             image={character.image}
//                             gender={character.gender}
//                         />
//                     })
//                 }
//             </>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         characters: state.characters
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getAllCharacters: () => dispatch(getAllCharacters())
//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Characters);
