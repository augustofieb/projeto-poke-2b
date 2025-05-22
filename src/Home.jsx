import poke from "./assets/pokeapi_256.png"
import eevee from './assets/image.png'
import './Home.css'

const Home = () => {
    return (
        <div className="pokeflex"> 
            <img src={poke} />
            <img src={eevee} />
            <img src={poke} />
            <img src={eevee} />
            <img src={poke} />
            <img src={eevee} />
            <img src={poke} />
            <img src={eevee} />
            <img src={poke} />
            <img src={eevee} />
            <img src={poke} />
            <img src={eevee} />
        </div>
    )
}

export default Home