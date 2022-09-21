// Araçları Localstorage'a ekleme //

function Storage() {
  Storage.prototype.addCarToStorage = function (newCar) {

    let cars = this.getCarsFromStorage();

    cars.push(newCar);

    localStorage.setItem("cars",JSON.stringify(cars));

  };

  Storage.prototype.getCarsFromStorage = function () {
    let cars;

    if (localStorage.getItem("cars") === null) {
      cars = [];
    } else {
      cars = JSON.parse(localStorage.getItem("cars"));
    }
    return cars;
  };
}
