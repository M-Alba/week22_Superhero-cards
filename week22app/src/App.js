import './App.css';
import './components/Hero.css';
import Hero from './components/Hero';
import heroes from './heroesData';

function App() {
    return (
        <div className="App">
            {
                heroes.map((hero) => 
                    <Hero
                        key = { hero.id }
                        name = { hero.name } 
                        universe = { hero.universe } 
                        alterego = { hero.alterego } 
                        occupation = { hero.occupation } 
                        friends = { hero.friends } 
                        superpowers = { hero.superpowers } 
                        url = { hero.url }
                    />
                )
            }
        </div>
    );
}

export default App;
