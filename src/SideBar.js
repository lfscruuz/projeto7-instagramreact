import Sugestoes from "./Sugestoes"

function Usuario(props){
    console.log(props)
    return(
        <div class="usuario">
                <img src={props.imagem} />
                <div class="texto">
                    <strong>{props.username}</strong>
                    {props.nome}
                </div>
            </div>
    )
}

export default function SideBar() {
    const conteudoUsuario = [
        "assets/img/catanacomics.svg",
        "catanacomics",
        "Catana"
    ]
    return (
        <div class="sidebar">
            <Usuario imagem={conteudoUsuario[0]} username={conteudoUsuario[1]} nome={conteudoUsuario[2]}/>            

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