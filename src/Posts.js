function Post(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.usuarioImagem} />
                    {props.usuarioNome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imagem} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.curtidoImagem} />
                    <div class="texto">
                        Curtido por <strong>{props.curtidoNome}</strong> e <strong>outras {props.curtidoNumero} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default function Posts() {
    const conteudoPosts = [
        {usuarioImagem:"assets/img/meowed.svg", usuarioNome: "meowed", imagem:"assets/img/gato-telefone.svg", curtidoImagem:"assets/img/respondeai.svg", curtidoNome: "respondeai", curtidoNumero: "101.523"},
        {usuarioImagem:"assets/img/barked.svg", usuarioNome: "barked", imagem:"assets/img/dog.svg", curtidoImagem:"assets/img/adorable_animals.svg", curtidoNome: "adorable_animals", curtidoNumero: "99.159"}
    ]
    return (
        <div class="posts">
            {conteudoPosts.map((p) =>( 
            <Post usuarioImagem={p.usuarioImagem} 
            usuarioNome={p.usuarioImagem} 
            imagem={p.imagem}
            curtidoImagem={p.curtidoImagem}
            curtidoNome={p.curtidoNome}
            curtidoNumero={p.curtidoNumero}
            />))}
        </div>
    )
}