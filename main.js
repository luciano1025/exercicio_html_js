const form = document.getElementById("form-comparacao")

form.addEventListener("submit", function(e){
    e.preventDefault()

    function compararNumero(numeroTotalA, numeroTotalB){
        return numeroTotalA <= numeroTotalB
    }

    let formEComparar = false

    const numeroTotalA = Number(document.getElementById("campo-a").value)
    const numeroTotalB = Number(document.getElementById("campo-b").value)

    const mensagemSucesso =`O valor de B (${numeroTotalB}) é maior que o valor de A (${numeroTotalA})`
    const mensagemError =`O valor de B (${numeroTotalB})é menor que o valor de A (${numeroTotalA})`

        const containerMensagemSucesso = document.querySelector(".success-message")
        const containerMensagemError = document.querySelector(".error-message")

    formEComparar = compararNumero(numeroTotalA, numeroTotalB)

    if (formEComparar) {
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = "block"
        containerMensagemError.style.display = "none"
        
    }

    else {
        containerMensagemError.innerHTML = mensagemError
        containerMensagemError.style.display = "block"
        containerMensagemSucesso.style.display = "none"

    }
}) 