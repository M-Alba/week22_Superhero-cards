import './Hero.css';

function Hero(props) {
    return (
        <div className="hero-card">
            <div className="hero-name">{props.name}</div>
            <div className="hero-universe">Вселенная: {props.universe}</div>
            <div className="hero-alterego">Альтер эго: {props.alterego}</div>
            <div className="hero-occupation">Род деятельности: {props.occupation}</div>
            <div className="hero-friends">Друзья: {props.friends}</div>
            <div className="hero-superpowers">Суперсилы: {props.superpowers}</div>
            <img src={props.url} alt={props.name}></img>
        </div>
        
    );
}

export default Hero;