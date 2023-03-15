// function displayPetCards(){
//   //get the div for the html element
//   const DIV = document.getElementById("pets");
//   //tray in the array
//   let card="";
//   for (let i = 0; i < petSalon.pets.length; i++){
//     let pet = petSalon.pets[i];
//     //create the card template
//     card += `
//     <div class="pet">
//       <h5>${pet.name}</h5>
//       <p>Age:${pet.age}</p>
//       <p>Gender:${pet.gender}</p>
//       <p>Breed:${pet.breed}</p>
//       <p>Service:${pet.service}</p>
//       <p>Type:${pet.type}</p>
//       <p>Owner:${pet.owner}</p>
//       <p>Phone:${pet.phone}</p>
//     </div>
//     `;
//     console.log(card);
//   }
//   DIV.innerHTML = card;
// }

function displayTable(){
  //create the tr
  const TABLE = document.getElementById("tblbody");
  let tr = "";
  //travel the array
  for (let i = 0; i < petSalon.pets.length; i++){
    let pet = petSalon.pets[i];
    //create the tr
    tr+= `
      <tr id="${pet.id}">
        <td>${pet.name}</td>
        <td>${pet.age}</td>
        <td>${pet.gender}</td>
        <td>${pet.breed}</td>
        <td>${pet.service}</td>
        <td>${pet.type}</td>
        <td>${pet.owner}</td>
        <td>${pet.phone}</td>
        <td><button onclick="deletePet(${pet.id});"><i class="fa-solid fa-trash"></i></button></button></td>
      </tr>
    `;
  }
  TABLE.innerHTML=tr;
}

//replace under the register the displayCards() by displayTable()