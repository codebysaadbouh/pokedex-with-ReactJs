import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';
import PokemonCard from '../components/pokemon-card/pokemon-card';

const PokemonList: FunctionComponent = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        setPokemons(POKEMONS);
    }, []);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h5 className="center-align">{pokemons.length} pokémons</h5>
                    </div>
                </div>
                <div className="row">
                    {pokemons.map( pokemon =>(
                        <PokemonCard key={pokemon.id} pokemon={pokemon}  /* borderColor='red' */ />))
                    }
                </div>
            </div>
        </div>
    );
}
export default PokemonList;
