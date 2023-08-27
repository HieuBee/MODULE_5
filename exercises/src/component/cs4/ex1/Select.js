import {useState} from "react";

export function Select() {
    const [selectedCar, setSelectedCar] = useState({car : "", color: ""});
    const car = ["Mec", "BWM", "Honda", "Hyundai", "Audi"];
    const color = ["Red", "Black", "White", "Blue"];

    const handleCar = (carName) => {
        setSelectedCar({
            car: carName,
            color: selectedCar.color
        })
    }
    const handleColor = (carColor) => {
        setSelectedCar({
            car: selectedCar.car,
            color: carColor
        })
    }

    return (
        <>
            <div>
                <span>Select Car: </span>
                <select onChange={(event) => handleCar(event.target.value)}>
                    {car.map((car, index) => (
                        <option key={index} value={car}>{car}</option>
                    ))}
                </select>
            </div>
            <div>
                <span>Select Color: </span>
                <select onChange={(event) => handleColor(event.target.value)}>
                    {color.map((color, index) => (
                        <option key={index} value={color}>{color}</option>
                    ))}
                </select>
            </div>
            <div>
                <h3>You selected a {selectedCar.car} - {selectedCar.color}</h3>
            </div>
        </>
    )
}