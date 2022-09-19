import React from "react"
import Sugestoes from "./Sugestoes"



function Usuario(props){
    return(
        <div class="usuario">
                <img src={props.imagem} onClick={props.funcaoFoto} />
                <div class="texto">
                    <strong>{props.nome}</strong>
                    <div class="nome-e-icone">
                    {props.username}
                    <ion-icon class="icones" name="pencil-outline" onClick={props.funcaoNome}></ion-icon>
                    </div>
                </div>
            </div>
    )
}

export default function SideBar() {
    const [nome, setNome] = React.useState("catana")
    const [usuario, setUsuario] = React.useState("catanacomics")
    const [foto, setFoto] = React.useState("assets/img/catanacomics.svg")

    function trocarNome(){
        const nome = prompt('Qual é o seu nome?')
        setNome(nome)
        const usuario = prompt('Qual o seu nome de usuário?')
        setUsuario(usuario)
    }

    function trocarFoto(){
        const foto = prompt('Insira o link da sua nova foto')
        setFoto(foto)
    }
    
    let conteudoUsuario = [
        {imagem:foto,
        username:usuario,
        nome:nome,
        funcaoNome:trocarNome,
        funcaoFoto:trocarFoto
    }
    ]

    return (
        <div class="sidebar">
            <Usuario imagem={foto} 
            username={usuario} 
            nome={nome} 
            funcaoNome={conteudoUsuario[0].funcaoNome} 
            funcaoFoto={conteudoUsuario[0].funcaoFoto}/>            

            <Sugestoes></Sugestoes>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}