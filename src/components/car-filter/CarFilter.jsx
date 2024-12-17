import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useFilterCars } from "../../hooks/cars-hooks";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import CarList from "../car-list/CarList";

import styles from './CarFilter.module.css';


const initialValues = {
    carName: ''
};



export default function CarFilter({ setActiveFilter }) {

    const [carName, setCarName] = useState('');
    const [searchPressed, setSearchPressed] = useState(false);
    const [filteredCars] = useFilterCars(carName);


    const handleSearch = (values) => {

        setCarName(values.carName);
        setActiveFilter(false);
        setSearchPressed(true);
    };



    const { formValues, changeHandler, submitHandler } = useForm(initialValues, handleSearch);



    return (

        <div>

            <Form onSubmit={submitHandler} style={{ marginTop: '5em' }}>

                <Form.Group className="mb-3">
                    <Form.Label className={styles['searchLabel']}>Име</Form.Label>
                    <Form.Control className = {styles['searchField']} name="carName" value={formValues.name} onChange={changeHandler} type="text" placeholder="Въведете име на кола" />
                </Form.Group>

                <Button className={styles['searchBtn']} variant="primary" type="submit">
                    Търси
                </Button>
            </Form>


            {(filteredCars.length > 0 || searchPressed) && <CarList cars={filteredCars} />}

        </div>
    )

}





