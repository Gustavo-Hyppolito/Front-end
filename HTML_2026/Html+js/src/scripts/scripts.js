const tempoAgora = new Date();

const hora = tempoAgora.getHours();

const dataFormatada = tempoAgora.toLocaleDateString('pt-BR')

const horaFormatada = tempoAgora.toLocaleTimeString('pt-BR')

console.log(`Hoje é dia ${dataFormatada} e são exatamente ${horaFormatada}`)

if (hora >= 5 && hora < 12) {
    alert('Bom dia!')
}
else if (hora >= 12 && hora < 18) {
    alert('Boa tarde!')
}   
else {
    alert('Boa noite!')
}