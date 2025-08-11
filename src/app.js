
let boton = document.getElementById("boton")
boton.addEventListener("click", () => {
  
  const valores = () => {
    let primeraCelda = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let segundaCelda = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let terceraCelda = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let cuartaCelda = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let cuartaCeldaSegundoValor = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let quintaCelda = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let quintaCeldaSegundoValor = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let sextaCelda = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let sextaCeldaSegundoValor = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let septimaCelda = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let septimaCeldaSegundoValor = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let octavaCelda = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let octavaCeldaSegundoValor = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let novenaCelda = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let novenaCeldaSegundoValor = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    
    return `${primeraCelda} // ${segundaCelda} // ${terceraCelda} || ${cuartaCelda} & ${cuartaCeldaSegundoValor} // ${quintaCelda} & ${quintaCeldaSegundoValor} // ${sextaCelda} & ${sextaCeldaSegundoValor} || ${septimaCelda} & ${septimaCeldaSegundoValor} // ${octavaCelda} & ${octavaCeldaSegundoValor} // ${novenaCelda} & ${novenaCeldaSegundoValor}`
  }
  document.getElementById("numero").innerHTML = valores()
})
