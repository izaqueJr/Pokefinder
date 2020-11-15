
function findPokemon() {
  document.getElementById("poke").innerHTML = ""

  let valuePoke = document.getElementById('find').value
  console.log(valuePoke)

  const check = document.getElementById("type")

  if (check.checked == true) {
    fetch(`https://pokeapi.co/api/v2/type/${valuePoke}`)
      .then((response) => {
        return response.json()
      }).then((jsonParsed) => {
        const pokeNum = jsonParsed.pokemon
        console.log(pokeNum)
        for (let i = 0; i < pokeNum.length; i++) {
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
        console.log(poketeste)
        const name = poketeste.name.toUpperCase()
        console.log(name)

        const pai = document.createElement("div")
        let nome = document.createElement("h2");
        const foto = document.createElement("img")
        const filho = document.createElement("div")

        nome.innerHTML = name
        const imgValue = poketeste.sprites.other["official-artwork"].front_default

        if (imgValue == null) {
          foto.src = "img/notfound.png"
          let legenda = document.createElement("P")
          legenda.innerHTML = "Imagem não encontrada :("
          filho.appendChild(legenda)

        } else {
          foto.src = imgValue
        }

        document.getElementById("poke").appendChild(pai)
        pai.appendChild(nome)
        pai.appendChild(foto)
        pai.appendChild(filho)

        console.log(foto)


      })

  }

}

