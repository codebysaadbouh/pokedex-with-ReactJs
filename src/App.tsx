import React, { FunctionComponent, useState, useEffect } from "react";
import PokemonList from "./pages/pokemon-list";
import PokemonsDetail from "./pages/pokemon-detail";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import PageNotFound from "./pages/page-not-found";

const App: FunctionComponent = () => {

    return(
        <Router>
            <div>
                <nav> {/** La barre de navogation commu, à toutes les pages */}
                    <div className="nav-wrapper blue darken-3">
                        <div className="container">
                            <Link to="/" className="brand-logo" >Pokédex </Link>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a href="sass.html">About</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/** Le système de gestion des routes de notre application */}
                <Switch>
                    <Route exact path="/" component={PokemonList} />
                    <Route exact path="/pokemons" component={PokemonList} />
                    <Route exact path="/pokemons/:id" component={PokemonsDetail} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
        
    )
}
export default App;
