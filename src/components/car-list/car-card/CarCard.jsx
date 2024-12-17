import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CarDelete from "../../car-delete/CarDelete";


export default function CarCard({ id, name, imageUrl, description }) {


    return (

        <>

            <Card style={{ width: '35rem', marginRight: '2em' }}>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>

                    <FontAwesomeIcon icon={faTrash} className="text-danger cursor"  />
                </Card.Body>
            </Card>

            {/* {isDeleteModalShown && <CarDelete  />} */}

        </>

    )
}