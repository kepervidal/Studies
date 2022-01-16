//Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionárionum mês, e o quanto ele recebe por hora. A função deverá calcular o salário líquido mensal do funcionário, que é//da quantidade de horas trabalhadas no mês multiplicada pelo valor da sua hora. Desse valor, deve ser subtraído//30%, relativo a impostos.//



function salarioliquido (horasTrabalhadas, ganhoporhora){
    const salarioliquidomensal = horasTrabalhadas * ganhoporhora * 70/100
   
    return salarioliquidomensal

}

console.log(salarioliquido(180,60))
