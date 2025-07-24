// Data inicial (ano, mês [0-11], dia, hora, min, seg)
const dataInicial = new Date(2024, 6, 8, 0, 0, 0); // 1 de janeiro de 2022

function atualizarContador() {
    const agora = new Date();
    let diff = agora - dataInicial; // diferença em milissegundos

    const segundosTotais = Math.floor(diff / 1000);

    const anos = Math.floor(segundosTotais / (365.25 * 24 * 60 * 60));
    let resto = segundosTotais % Math.floor(365.25 * 24 * 60 * 60);

    const meses = Math.floor(resto / (30.44 * 24 * 60 * 60));
    resto %= Math.floor(30.44 * 24 * 60 * 60);

    const dias = Math.floor(resto / (24 * 60 * 60));
    resto %= 24 * 60 * 60;

    const horas = Math.floor(resto / 3600);
    resto %= 3600;

    const minutos = Math.floor(resto / 60);
    const segundos = resto % 60;

    document.getElementById("year").innerHTML = datePlural("year", anos)
    document.getElementById("month").innerHTML = datePlural("month", meses)
    document.getElementById("day").innerHTML = datePlural("day", dias)
    document.getElementById("hour").innerHTML = datePlural("hour", horas)
    document.getElementById("minute").innerHTML = datePlural("minute", minutos)
    document.getElementById("second").innerHTML = datePlural("second", segundos)
}

// Atualiza a cada segundo
setInterval(atualizarContador, 1000);

// Atualiza logo ao carregar
atualizarContador();

// Plural
function datePlural(data, dataNum) {
    if (data == "year") {
        if (dataNum == 1) {
            return `${dataNum} ano, `
        } else {
            return `${dataNum} anos, `
        }
    } else if (data == "month") {
        if (dataNum == 1) {
            return `${dataNum} mês, `
        } else {
            return `${dataNum} meses, `
        }
    } else if (data == "day") {
        if (dataNum == 1) {
            return `${dataNum} dia, `
        } else {
            return `${dataNum} dias, `
        }
    } else if (data == "hour") {
        if (dataNum == 1) {
            return `${dataNum} hora, `
        } else {
            return `${dataNum} horas, `
        }
    } else if (data == "minute") {
        if(dataNum == 1){
            return `${dataNum} minuto, `
        } else {
            return `${dataNum} minutos, `
        }
    } else if (data == "second") {
        if(dataNum == 1){
            return `${dataNum} segundo`
        } else {
            return `${dataNum} segundos`
        }
    }
}