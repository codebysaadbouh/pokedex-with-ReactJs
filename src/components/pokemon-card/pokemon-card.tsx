import React, {FunctionComponent, useState} from "react";
import Pokemon from "../../models/pokemon";
import formatDate from '../../helpers/format-date'
import formatType from '../../helpers/format-type'
import './pokemon-card.css';
import { useHistory } from 'react-router-dom'; 
type Props = {
    pokemon: Pokemon,
    borderColor?: string
};

const PokemonCard: FunctionComponent<Props> = ({pokemon, borderColor='#009688'}) => {

    const [color, setColor] = useState<string>();
    const history = useHistory(); 

    const showBorder = () => {
        setColor(borderColor);
    }

    const hideBorder = () => {
        setColor('#f5f5f5')  // We put the border back in grey
    }

    const goToPokemon = (id: number) => {
        history.push(`/pokemons/${id}`)
    }

    return(
        <div key={pokemon.id} onClick={()=>goToPokemon(pokemon.id)} className="col s12 m4" onMouseEnter={showBorder} onMouseLeave={hideBorder}>
            <div className="card horizontal" style={{borderColor: color}}>
                <div className="card-image">
                    <img src={pokemon.picture} alt={pokemon.name} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h5>{pokemon.name}</h5>
                        <p>
                            <small>{formatDate(pokemon.created)}</small>
                        </p>
                        {pokemon.types.map(type => (
                            <span className={formatType(type)} key={type} >{type}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard;
