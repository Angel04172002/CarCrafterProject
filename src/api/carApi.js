import requester from "./requester";


const baseUrl = 'http://localhost:5000/cars';


export const getAllCars = () => requester.get(baseUrl);

export const addNewCar = (data) =>
    requester.post(baseUrl, data);


export const filterCars = (carName) => {

    let queryString = `?name=${carName}`;

    if(carName == '') {
        queryString = '?name=\'\''
    }

    return requester.get(`${baseUrl}${queryString}`);
}

export function deleteCar(carId) {
    return fetch(`${baseUrl}/${carId}`, {
      method: "DELETE",
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to delete car with ID ${carId}`);
      }
    });
  }
  