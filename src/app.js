console.log("hola")

let boton = document.getElementById("boton")

boton.addEventListener("click", () => {
  
  const valores = () => {
    let primeraCelda = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let segundaCelda = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let segundaCelda2 = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let terceraCelda = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let terceraCelda2 = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let cuartaCelda = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let cuartaCelda2 = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let quintaCelda = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let quintaCelda2 = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let sextaCelda = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let sextaCelda2 = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let septimaCelda = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let septimaCelda2 = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let octavaCelda = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let octavaCelda2 = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let novenaCelda = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    let novenaCelda2 = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    
    return `${primeraCelda} // ${segundaCelda} // ${terceraCelda} || ${cuartaCelda} & ${cuartaCelda2} // ${quintaCelda} & ${quintaCelda2} // ${sextaCelda} & ${sextaCelda2} || ${septimaCelda} & ${septimaCelda2} // ${octavaCelda} & ${octavaCelda2} // ${novenaCelda} & ${novenaCelda2}`
  }
    
    
    

  
  document.getElementById("numero").innerHTML = valores()

})

console.log()
