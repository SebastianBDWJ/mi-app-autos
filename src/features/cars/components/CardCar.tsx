import "../../../styles/cars/card-car.css"
import { Link } from "react-router-dom";
import type { Car } from "../types/Car";

interface CardCarProps {
  car: Car;
}

const CardCar = ({ car }: CardCarProps) => {
  return (
    <article className="car-card">
      <div className="car-card__media">
        <img className="car-card__image" src={car.image} alt={`Ilustración de ${car.name}`} />
 
        <span className="car-card__type">{car.type}</span>
        <span className="car-card__favorite" aria-hidden="true">♡</span>
      </div>
 
      <div className="car-card__body">
        <p className="car-card__location">{car.location}</p>
        <h3>{car.name}</h3>
 
        <div className="car-card__specs">
          <span>{car.year}</span>
 
          <span>{car.mileage.toLocaleString("es-CR")} km</span>
 
          <span>{car.seats} pasajeros</span>
        </div>
 
        <div className="car-card__footer">
          <strong className="car-card__price">USD {car.price.toLocaleString("es-CR")}</strong>
 
          <Link className="car-card__link" to={`/cars/${car.id}`}>Ver detalle →</Link> 
        </div>
      </div>
    </article>
  )
}

export default CardCar