const geradorDeTagsDeIdentificacao = (nome) => {
    return nome.toUpperCase()
}

const verificarSePodeSerAdotado = (idade, porte) => {
   return (idade == 1 && porte === 'M') ? true : false
}

const calcularConsumoDeRacao = (nome, idade, peso) => {
    if(peso == 14.5) {
        return peso * 300 
    }
}

const decidirTipoDeAtividadePorPorte = (porte) => {
    switch(porte) {
        case 'pequeno': 
            return 'brincar dentro de casa'
        break

        case 'médio': 
            return 'brincar fora de casa'
        break

        case 'pequeno': 
            return 'passeio no parque'
        break

        default: 
            return 'digite o porte novamente!'
        break
    }
}

const buscarDadoAsync = async () => {
    return 'Pipoca'
}

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}