import "../../../styles/home/home.css"
import { Link } from "react-router-dom"
import Hero from "../components/Hero"
import CardCarList from "../../cars/components/CardCarList"
import Experience from "../components/Experience"
import cars from "../../../../public/data/cars.json"

const Home = () => {

  const featuredCars = cars.filter((car) => car.featured).slice(0, 3);

  return (
    <main>
      <Hero />
 
      <section>
        <p>Selección destacada</p>
 
        <h2>Conozca la colección</h2>
 
        <Link to="/cars">Ver todos los autos →</Link>
 
        <CardCarList cars={featuredCars} />
 
        <Experience />
      </section>
    </main>
  )
}

export default Home