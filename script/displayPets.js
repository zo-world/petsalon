function displayPetCards(){
  //get the div for the html element
  const DIV = document.getElementById("pets");
  //tray in the array
  let card="";
  for (let i = 0; i < petSalon.pets.length; i++){
    let pet = petSalon.pets[i];
    //create the card template
    card += `
    <div class="pet">
      <h5>${pet.name}</h5>
      <p>Age:${pet.age}</p>
      <p>Gender:${pet.gender}</p>
      <p>Breed:${pet.breed}</p>
      <p>Service:${pet.service}</p>
      <p>Type:${pet.type}</p>
      <p>Owner:${pet.owner}</p>
      <p>Phone:${pet.phone}</p>
    </div>
    `;
    console.log(card);
  }
  DIV.innerHTML = card;
}