const url = "http://localhost:3000/players";

//adalekérés
async function getPlayers(){

    try {
      let response = await fetch(url);
      let data = await response.json();
      viewList(data);
  
      // let types = data.map(player => player.type);
  
      // let listHtml = "";
      // for (const type of types) {
      //   listHtml += `<p>${type}</p>`
      // }
      // document.getElementById("types").innerHTML = listHtml;
      // let message = "Itt a vége";
      // document.getElementById("end").innerHTML = `<h2>${message}</h2>`;
  
    } catch (error) {
      document.getElementById("list").innerHTML = `<h2>Szerver Hiba</h2>`;
    }
  
  }

  function viewList(data) {
    let listHtml = "";
    for (const player of data) {
      listHtml += `<p>${player.name},${player.qualification},${player.position},${player.club},${player.age},${player.nationality},</p>`
    }
    document.getElementById("list").innerHTML = listHtml;
  }

  async function playerAppend() {
    let player =  {
        id: document.getElementById("idInput").value, 
        name: document.getElementById("nameInput").value,
        qualification: document.getElementById("qualificationInput").value, 
        position: document.getElementById("positionInput").value, 
        club: document.getElementById("clubInput").value, 
        age: document.getElementById("ageInput").value, 
        nationality: document.getElementById("nationalityInput").value 
    };
  
  
    try {
      let response = await fetch(url,{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(player)
      })
      let data = await response.json();
      getPlayers(data);
  
  
      if (!response.ok) {
        return Promise.reject("Post meghiúsult")
      }
  
    } catch (error) {
      document.getElementById("list").innerHTML = `<h2>${error}</h2>`
    }
  

  }