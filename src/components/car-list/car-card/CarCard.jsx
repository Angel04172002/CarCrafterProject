import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CarDelete from "../../car-delete/CarDelete";
import { useDeleteCar } from "../../../hooks/cars-hooks";



export default function CarCard({ id, name, imageUrl, description }) {
    const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Индикатор за зареждане
    const deleteCar = useDeleteCar();
  
    const showDeleteModal = () => setIsDeleteModalShown(true);
    const hideDeleteModal = () => setIsDeleteModalShown(false);
  
    const confirmDelete = () => {
        setIsLoading(true); // Показва индикатора "Зареждане..."
        hideDeleteModal();
        deleteCar(id)
          .then(() => {
            console.log(`Car with ID ${id} deleted successfully.`);
            location.reload();
          })
          .catch((error) => {
            console.error("Failed to delete car:", error);
          })
          .finally(() => {
            setIsLoading(false); // Скрива индикатора за зареждане
          });
      };


      
      
    return (
      <>
        <Card style={{ width: "35rem", marginRight: "2em" }} className="card">
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
  
            {isLoading ? (
              <span>Зареждане...</span>
            ) : (
              <FontAwesomeIcon
                icon={faTrash}
                className="text-danger cursor-pointer"
                style={{ cursor: "pointer" }}
                onClick={showDeleteModal}
              />
            )}
          </Card.Body>
        </Card>
  
        <CarDelete
          show={isDeleteModalShown}
          onHide={hideDeleteModal}
          onConfirm={confirmDelete}
        />
      </>
    );
  }



