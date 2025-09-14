// Paste in browser console to get data
// https://core-keeper.fandom.com/wiki/Cooking#Food_items 
function getIngredients() {
  var ingredientsJson = { "ingredients": null };
  var ingredients = [];
  tables = document.querySelectorAll("table[data-tpt-id]").forEach(table => {
    // only grab first 10 items from each type of ingredient as we don't need every single recipe
    var rows = table.querySelectorAll("tbody > tr > td[data-row-id]");
    console.log(rows);
    const maxCount = 10;
    let count = 0;
    for (const row of rows) {
      count++;
      if (count > 10) break;
      var name = row.querySelector("a").title;
      var imgEl = row.querySelector("img");
      var img = (imgEl.getAttribute("data-src") != null) ? imgEl.getAttribute("data-src") : imgEl.src;
      // replace with higher resolution url
      var imgUrl = img.split('latest/')[0].concat("latest/thumbnail/width/360/height/360");
      ingredients.push({ name: name, img: imgUrl });
    }
  })
  ingredientsJson["ingredients"] = ingredients;
  console.log(ingredientsJson);
}

const data = {
  "ingredients": [
    {
      "name": "Mushroom",
      "img": "https://static.wikia.nocookie.net/core-keeper/images/8/8c/Mushroom.png/revision/latest/thumbnail/width/360/height/360"
    },
    {
      "name": "Heart Berry",
      "img": "https://static.wikia.nocookie.net/core-keeper/images/d/da/Heart_Berry.png/revision/latest/thumbnail/width/360/height/360"
    },
    {
      "name": "Golden Heart Berry",
      "img": "https://static.wikia.nocookie.net/core-keeper/images/4/4e/Golden_Heart_Berry.png/revision/latest/thumbnail/width/360/height/360"
    },
    {
      "name": "Glow Tulip",
      "img": "https://static.wikia.nocookie.net/core-keeper/images/2/28/Glow_Tulip.png/revision/latest/thumbnail/width/360/height/360"
    },
    {
      "name": "Golden Glow Tulip",
      "img": "https://static.wikia.nocookie.net/core-keeper/images/5/53/Golden_Glow_Tulip.png/revision/latest/thumbnail/width/360/height/360"
    },
    {
      "name": "Bomb Pepper",
      "img": "https://static.wikia.nocookie.net/core-keeper/images/4/44/Bomb_Pepper.png/revision/latest/thumbnail/width/360/height/360"
    },
    {
      "name": "Golden Bomb Pepper",
      "img": "https://static.wikia.nocookie.net/core-keeper/images/c/c1/Golden_Bomb_Pepper.png/revision/latest/thumbnail/width/360/height/360"
    },
    {
      "name": "Carrock",
      "img": "https://static.wikia.nocookie.net/core-keeper/images/c/c1/Carrock.png/revision/latest/thumbnail/width/360/height/360"
    },
    {
      "name": "Golden Carrock",
      "img": "https://static.wikia.nocookie.net/core-keeper/images/5/55/Golden_Carrock.png/revision/latest/thumbnail/width/360/height/360"
    },
    {
      "name": "Bloat Oat",
      "img": "https://static.wikia.nocookie.net/core-keeper/images/e/e6/Bloat_Oat.png/revision/latest/thumbnail/width/360/height/360"
    },
    {
      "name": "Orange Cave Guppy",
      "img": "https://static.wikia.nocookie.net/core-keeper/images/0/00/Orange_Cave_Guppy.png/revision/latest/thumbnail/width/360/height/360"
    },
    {
      "name": "Blue Cave Guppy",
      "img": "https://static.wikia.nocookie.net/core-keeper/images/0/0c/Blue_Cave_Guppy.png/revision/latest/thumbnail/width/360/height/360"
    },
    {
      "name": "Rock Jaw",
      "img": "https://static.wikia.nocookie.net/core-keeper/images/3/3b/Rock_Jaw.png/revision/latest/thumbnail/width/360/height/360"
    },
    {
      "name": "Gem Crab",
      "img": "https://static.wikia.nocookie.net/core-keeper/images/c/ca/Gem_Crab.png/revision/latest/thumbnail/width/360/height/360"
    },
    {
      "name": "Green Blister Head",
      "img": "https://static.wikia.nocookie.net/core-keeper/images/f/f3/Green_Blister_Head.png/revision/latest/thumbnail/width/360/height/360"
    },
    {
      "name": "Yellow Blister Head",
      "img": "https://static.wikia.nocookie.net/core-keeper/images/1/10/Yellow_Blister_Head.png/revision/latest/thumbnail/width/360/height/360"
    },
    {
      "name": "Devil Worm",
      "img": "https://static.wikia.nocookie.net/core-keeper/images/1/16/Devil_Worm.png/revision/latest/thumbnail/width/360/height/360"
    },
    {
      "name": "Vampire Eel",
      "img": "https://static.wikia.nocookie.net/core-keeper/images/6/6b/Vampire_Eel.png/revision/latest/thumbnail/width/360/height/360"
    },
    {
      "name": "Dagger Fin",
      "img": "https://static.wikia.nocookie.net/core-keeper/images/b/ba/Dagger_Fin.png/revision/latest/thumbnail/width/360/height/360"
    },
    {
      "name": "Pink Palace Fish",
      "img": "https://static.wikia.nocookie.net/core-keeper/images/e/ea/Pink_Palace_Fish.png/revision/latest/thumbnail/width/360/height/360"
    },
    {
      "name": "Larva Meat",
      "img": "https://static.wikia.nocookie.net/core-keeper/images/0/0b/Larva_Meat.png/revision/latest/thumbnail/width/360/height/360"
    },
    {
      "name": "Shiny Larva Meat",
      "img": "https://static.wikia.nocookie.net/core-keeper/images/5/58/Shiny_Larva_Meat.png/revision/latest/thumbnail/width/360/height/360"
    },
    {
      "name": "Marbled Meat",
      "img": "https://static.wikia.nocookie.net/core-keeper/images/c/c9/Marbled_Meat.png/revision/latest/thumbnail/width/360/height/360"
    },
    {
      "name": "Amber Larva",
      "img": "https://static.wikia.nocookie.net/core-keeper/images/7/72/Amber_Larva.png/revision/latest/thumbnail/width/360/height/360"
    },
    {
      "name": "Dodo Egg",
      "img": "https://static.wikia.nocookie.net/core-keeper/images/d/de/Dodo_Egg.png/revision/latest/thumbnail/width/360/height/360"
    },
    {
      "name": "Atlantean Worm Heart",
      "img": "https://static.wikia.nocookie.net/core-keeper/images/a/aa/Atlantean_Worm_Heart.png/revision/latest/thumbnail/width/360/height/360"
    }
  ]
}

async function populateTable() {
  const ingredients = data["ingredients"];

  const table = document.createElement("table");
  
  const tableHeaders = document.createElement("tr");
  const thCheck = document.createElement("th");

  const checkBoxAll = document.createElement("input");
  checkBoxAll.setAttribute("class", "check-all");
  checkBoxAll.setAttribute("type", "checkbox");
  checkBoxAll.setAttribute("id", "check-all");
  checkBoxAll.addEventListener("click", checkAll)
  thCheck.appendChild(checkBoxAll);

  const totalCounter = document.createElement("div");
  totalCounter.setAttribute("id", "total-counter");
  totalCounter.textContent = 0;
  thCheck.appendChild(totalCounter);
  
  tableHeaders.appendChild(thCheck);

  ingredients.forEach(item => {
    const th = document.createElement("th");
    const img = document.createElement("img");
    img.setAttribute("class", "ingredient-img");
    img.setAttribute("src", item.img);
    img.setAttribute("alt", item.name);
    th.appendChild(img);
    tableHeaders.appendChild(th);
  });

  table.appendChild(tableHeaders);

  const tableBody = document.createElement("tbody");

  for(let i = 0; i < ingredients.length; i++){
    const tr = document.createElement("tr")
    for(let j = 0; j <= ingredients.length; j++){
      if(i == j){
        const th = document.createElement("th");

        const img = document.createElement("img");
        img.setAttribute("class", "ingredient-img");
        img.setAttribute("src", ingredients[i].img)                               
        img.setAttribute("alt", ingredients[i].name)
        th.appendChild(img)

        const counter = document.createElement("div")
        counter.setAttribute("class", "ingredient-counter")
        counter.textContent = 0;
        th.appendChild(counter)

        tr.appendChild(th)
      } else if(j < i){
        const td = document.createElement("td")
        tr.appendChild(td)
      } else {
        const td = document.createElement("td")
        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox")
        checkBox.setAttribute("class", "check");
        checkBox.addEventListener("click", check)
        td.appendChild(checkBox)
        tr.appendChild(td)
      }
    }
    tableBody.appendChild(tr)
  }

  table.appendChild(tableBody)
  document.querySelector(".wrapper").appendChild(table)
}

function checkAll(){
    array = document.getElementsByClassName("check")
    if (document.getElementById("check-all").checked){
        for (checkbox of array){
            checkbox.checked = true;
        }
    } else {
        for (checkbox of array){
            checkbox.checked = false;
        }
    }
    updateCounters();
    updateTotalCounter()
}

function check(){
    const array = document.getElementsByClassName("check")
    let flag = true;
    for (checkbox of array){
        if (!checkbox.checked){
            flag = false;
        } 
    }
    document.getElementById('check-all').checked = flag;
    updateCounters();
    updateTotalCounter()
}

function updateCounters(){
    const table = document.querySelector("table");
    console.log(table)
    const columnCount = table.rows[0].cells.length;
    for (let i = 1, row; row = table.rows[i]; i++) {
        let counter = columnCount;
        for (let j = i; j < columnCount; j++) {
            if(row.cells[j].children[0].checked){
                counter--;
                if(j == i){
                    counter--;
                }
            }
        }
        for (let k = 1; k < i; k++){
            if(table.rows[k].cells[i].children[0].checked){
                counter--;
            }
        }
        row.cells[i-1].children[1].innerHTML = counter;
    }
}

function updateTotalCounter(){
    let counter = 0
    const checkboxes = document.getElementsByClassName('check')
    for (checkbox of checkboxes){
        if (checkbox.checked) {
            counter++;
        }
    }
    document.getElementById('total-counter').innerHTML = counter;
}

document.addEventListener("DOMContentLoaded", function () {
  populateTable()
  updateCounters()
  updateTotalCounter()
});