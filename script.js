document.querySelector("#confirmar").addEventListener("click", function(event){
    event.preventDefault()
    const nomeInput = document.querySelector("#nome")
    const lastNameInput = document.querySelector("#lastName")
    const emailInput = document.querySelector("#email")
    const senhaInput = document.querySelector("#senha")
    const senhaConfirmInput = document.querySelector("#senhaConfirm")


    let validado = true

    const mensagensErro = document.querySelectorAll(".mensagemErro")
    mensagensErro.forEach(msg => msg.remove())


    if(nomeInput.value.trim() === ""){
        exibirErro(nomeInput, "Por favor, insira um nome válido!")
        validado = false
    } else if(lastNameInput.value.trim() === ""){
        exibirErro(lastNameInput, "Por favor, insira um sobrenome válido!")
        validado = false
    } else if(!emailInput.value.includes("@")){
        exibirErro(emailInput, "Por favor, digite um e-mail válido!")
        validado = false
    } else if(senhaInput.value === ""){
        exibirErro(senhaInput, "Por favor, insira uma senha válida!")
        validado = false
    } else if(senhaConfirmInput.value === ""){
        exibirErro(senhaConfirmInput, "Por favor, confirme a senha digitada antes!")
        validado = false
    } else if(senhaConfirmInput.value !== senhaInput.value){
        exibirErro(senhaConfirmInput, "As senhas não são idênticas!")
        validado = false
    }

    if(validado){
        alert("CADASTRO CONCLUÍDO COM SUCESSO!")
    }

    function exibirErro (input, mensagem){
        const elementoErro = document.createElement("div")
        elementoErro.classList.add("mensagemErro")
        elementoErro.style.color = "red"
        elementoErro.textContent = mensagem
        input.insertAdjacentElement("afterend", elementoErro)
    }
})