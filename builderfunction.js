function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
        alert("Cleaning In Progress...");
    };
}
//now we can give many like var housekeeper1=newHouseKeeper(9,"Tom",["lobby","bedroom"])
//housekeeper1.clean()-->gives Cleaning in progress..
