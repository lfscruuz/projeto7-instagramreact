import React from "react";

function Post(props) {

    let [fav, setFav] = React.useState(false);
    let [curt, setCurt] = React.useState(false);

    function favoritar(favorito) {
        let condicao = '';
        if (fav == false) {
            condicao = true;
            setFav(condicao);
            favorito.target.name = 'bookmark';
            favorito.target.classList.add('vermelho');
        } else {
            condicao = false;
            setFav(condicao);
            favorito.target.name = 'bookmark-outline';
            favorito.target.classList.remove('vermelho');
        }

    }

    function curtir(curtida) {
        let condicao = '';
        curtida = curtida.target.parentNode.parentNode
        let coracao = curtida.querySelector('.coracao')
        if (curt == false) {
            condicao = true;
            setCurt(condicao);
            coracao.name = 'heart';
            coracao.classList.add('vermelho');
        } else {
            condicao = false;
            setCurt(condicao);
            coracao.name = 'heart-outline';
            coracao.classList.remove('vermelho');
        }

    }

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
                <img src={props.imagem} onClick={curtir} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon class="coracao" name="heart-outline" onClick={curtir}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline" onClick={favoritar}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.curtidoImagem} />
                    <div class="texto">
                        Curtido por <strong>{props.curtidoNome}</strong> e <strong>outras {(curt == false) ? props.curtidoNumero : props.curtidoNumero + 1} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default function Posts() {

    const conteudoPosts = [
        {
            usuarioImagem: "assets/img/meowed.svg", usuarioNome: "meowed", imagem: "assets/img/gato-telefone.svg",
            curtidoImagem: "assets/img/respondeai.svg", curtidoNome: "respondeai", curtidoNumero: 101523,
        },
        {
            usuarioImagem: "assets/img/barked.svg", usuarioNome: "barked", imagem: "assets/img/dog.svg",
            curtidoImagem: "assets/img/adorable_animals.svg", curtidoNome: "adorable_animals", curtidoNumero: 99159,
        }
    ];

    return (
        <div class="posts">
            {conteudoPosts.map((p) => (
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