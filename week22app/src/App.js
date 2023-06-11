import './App.css';
import './components/Hero.css';
import Hero from './components/Hero';

const heroes = [
    {
        'name': 'Бетмен',
        'universe': 'DC Comics',
        'alterego': 'Брюс Уэйн',
        'occupation': 'борец с преступностью, филантроп, миллиардер',
        'friends': 'Робин, Бэтгерл',
        'superpowers': 'интеллект, обширные познания, знания боевых искусств, ловкость',
        'url': 'https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg'
    },{
        'name': 'Супермен',
        'universe': 'DC Comics',
        'alterego': 'Кларк Кент',
        'occupation': 'борец за справедливость',
        'friends': 'собака Крипто',
        'superpowers': 'непробиваемость, суперсила, полёт, самоисцеление, суперзрение и суперслух, классный костюм',
        'url': 'https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg'
    },{
        'name': 'Чудо-женщина',
        'universe': 'DC Comics',
        'alterego': 'Диана Принс',
        'occupation': 'супергероиня, секретарь-референт',
        'friends': 'Лига Справедливости, Бэтмен, Супермен',
        'superpowers': 'сверхчеловеческая сила и скорость, выносливость, полёт',
        'url': 'https://n1s1.hsmedia.ru/87/ed/c5/87edc525d8813c7b2899e04a4e562fe9/547x397_0xac120002_6444132261540468872.jpg'
    }
];

function App() {
    return (
        <div className="App">
            {
                heroes.map((hero) => 
                    <Hero name={hero.name} 
                        universe={hero.universe} 
                        alterego={hero.alterego} 
                        occupation={hero.occupation} 
                        friends={hero.friends} 
                        superpowers={hero.superpowers} 
                        url={hero.url}></Hero>
                )
            }
        </div>
    );
}

export default App;
