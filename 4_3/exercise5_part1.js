let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente:"Sim",
  };

  let infoPlus = {
    personagem: "Tio patinha",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics#178",
    nota: "“O último MacPatinhas",
}

    
  for (let key in info,infoPlus) {
    console.log(info[key]," e ",infoPlus[key])
}
