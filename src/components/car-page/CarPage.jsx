import CarFilter from "../car-filter/CarFilter";
import CarList from "../car-list/CarList";

import { useGetAllCars } from "../../hooks/cars-hooks";
import { useState } from "react";


export default function CarPage() {

    const [isFilter, setIsFilter] = useState(true);
    const [cars] = useGetAllCars();

    const setActiveFilter = (status) => {
        setIsFilter(status);
    }


    return (
        <>
            {cars.length != 0 && <CarFilter setActiveFilter={setActiveFilter} />}

            {isFilter && <CarList cars={cars} />}

        </>
    )
}