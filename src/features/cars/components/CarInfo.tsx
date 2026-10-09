import { Link } from "react-router-dom"
import CarFeatures from "./CarFeatures"
import type { Car } from "../types/Car";

interface CarInfoProps {
  car: Car;
}

const CarInfo = ({car}: CarInfoProps) => {
  return (
    <section className="car-info">
      <Link className="car-info__back" to="/cars">← Volver a autos</Link>
 
      <p className="car-info__location">{car.location}</p>
 
      <h1>{car.name}</h1>
 
      <div className="car-info__specs">
        <span>
          <strong>{car.year}</strong> año
        </span>
 
        <span>
          <strong>{car.mileage.toLocaleString("es-CR")}</strong> km
        </span>
 
        <span>
          <strong>{car.seats}</strong> pasajeros
        </span>
      </div>
 
      <h2>Descripción</h2>
 
      <p className="car-info__description">{car.description}</p>
 
      <CarFeatures features={car.features} />
    </section>
  )
}

export default CarInfo