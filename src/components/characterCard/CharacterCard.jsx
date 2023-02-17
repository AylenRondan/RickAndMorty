import {Link} from "react-router-dom";

const CharacterCard = ({id, name, gender, image}) =>{
    return (
        <div style= {{ justifyContent:'center', padding: '.2 rem', marginLeft: '800px'}}>
            <img src = {image} alt = {name} style={{borderRadius: '9999999rem'}}/>

            <Link to={`/detail/${id}`}>
                <h2>Nombre: {name}</h2>
            </Link>
            
            <h3>Genero: {gender}</h3>
        </div>
    )
}

export default CharacterCard;