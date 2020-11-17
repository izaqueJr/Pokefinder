
function findPokemon() {
  document.getElementById("poke").innerHTML = ""

  let valuePokemon = document.getElementById('find').value
  let valuePoke = valuePokemon.toLowerCase()

  console.log(valuePoke)

  const check = document.getElementById("type")

  if (check.checked == true) {
    fetch(`https://pokeapi.co/api/v2/type/${valuePoke}`)
      .then((response) => {
        return response.json()
      }).then((jsonParsed) => {
        const allPokeNumber = jsonParsed.pokemon
        for (let i = 0; i < allPokeNumber.length; i++) {
          valuePoke = jsonParsed.pokemon[i].pokemon.name
          createPokemon(valuePoke)
        }
      })

  } else {
    createPokemon(valuePoke)
  }


  function createPokemon(valuePoke) {

    fetch(`https://pokeapi.co/api/v2/pokemon/${valuePoke}`)
      .then((response) => {
        return response.json()
      }).then((poketeste) => {

        const divBoxPoke = document.createElement("div")
        const name = poketeste.name.toUpperCase()
        const nameTitle = document.createElement("h2");
        const image = document.createElement("img")
        const divImageNotFound = document.createElement("div")

        nameTitle.innerHTML = name
        const imgValue = poketeste.sprites.other["official-artwork"].front_default

        if (imgValue == null) {
          image.src = "img/notfound.png"
          let subtitleImgNotFound = document.createElement("P")
          subtitleImgNotFound.innerHTML = "Imagem não encontrada :("
          divImageNotFound.appendChild(subtitleImgNotFound)

        } else {
          image.src = imgValue
        }

        document.getElementById("poke").appendChild(divBoxPoke)
        divBoxPoke.appendChild(nameTitle)
        divBoxPoke.appendChild(image)
        divBoxPoke.appendChild(divImageNotFound)
      })
  }
}

