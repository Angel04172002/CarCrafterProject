import { useState, useEffect } from "react";
import * as carApi from '../api/carApi';
 
 
export function useGetAllCars() {
 
    const [cars, setCars] = useState([]);
 
    useEffect(() => {
 
        carApi.getAllCars()
            .then(result => {
 
                setCars(result);
            });
    }, []);
 
    return [cars];
}
 
 
export function useFilterCars(carName) {
 
    const [cars, setCars] = useState([]);
 
    useEffect(() => {
 
        carApi.filterCars(carName)
            .then(result => {
 
 
                setCars(result);
            });
 
    }, [carName]);
 
 
    return [cars];
}
 
 
export function useAddNewCar() {
    return carApi.addNewCar;
}


export function useDeleteCar() {
    return (carId) => {
        return carApi.deleteCar(carId) // Извиква API-то за изтриване
            .then(() => {
                console.log(`Car with ID ${carId} deleted successfully.`);
            })
            .catch((error) => {
                console.error(`Error deleting car with ID ${carId}:`, error);
            });
    };
}

