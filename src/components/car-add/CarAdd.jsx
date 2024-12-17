import styles from './CarAdd.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useForm } from '../../hooks/useForm';
import { useAddNewCar } from '../../hooks/cars-hooks';
import { useNavigate } from 'react-router';
import { useState } from 'react';



const initialValues = {
    name: '',
    imageUrl: '',
    description: ''
};


export default function CarAdd() {

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const addNewcar = useAddNewCar();

    const formHandler = async (formValues) => {

        try {

            console.log(formValues);

            await addNewcar(formValues);
            return navigate('/car/all');

        } catch {
            return setError(err);
        }
    };

    const { formValues, changeHandler, submitHandler } = useForm(initialValues, formHandler);


    return (

        <>

            <h2 className={styles['form-title']}>Добави кола</h2>


            {error && (
                <p>{error}</p>
            )}

            <Form onSubmit={submitHandler} className={styles['car-form']}>

                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label className={styles['form-label']}>Име</Form.Label>
                    <Form.Control className={styles['input-field']} type="text" value={formValues.name} name="name" onChange={changeHandler} />
                </Form.Group>


                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label className={styles['form-label']}>Изображение</Form.Label>
                    <Form.Control className={styles['input-field']} type="text" value={formValues.imageUrl} name="imageUrl" onChange={changeHandler} />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label className={styles['form-label']}>Описание</Form.Label>
                    <Form.Control as="textarea" style={{height: '100px'}} className={styles['input-field']} type="text" value={formValues.description} name="description" onChange={changeHandler} />
                </Form.Group>

                <Button className={styles['create-btn']} variant="primary" type="submit">
                    Добави 
                </Button>
            </Form>

        </>
    )
}