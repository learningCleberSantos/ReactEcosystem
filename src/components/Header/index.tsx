import './style.css'

import imgLogo from "../../assets/img/logo_vertical.png";

function Header() {

    let menu: any = document.getElementById("menu_links") as HTMLCanvasElement;
    let menu_barras: any = document.getElementById("menu_barras") as HTMLCanvasElement;
    //Função para mostrar/esconder menu hamburguer
    function mostrarMenu(){
        if (window.getComputedStyle(menu).display == 'none'){
            //Mostre o menu
            menu.style.display = "flex";
            menu_barras.setAttribute("aria-expanded", "true");
            menu_barras.setAttribute("aria-label", "Fechar o Menu");

        }else{
            //Esconde o menu
            menu.style.display = "none";

            menu_barras.setAttribute("aria-expanded", "false");
            menu_barras.setAttribute("aria-label", "Abrir o Menu");
            
        }
    };

    return (
        <header>
            <div className="div_headerPosition wrapper">
                <img src={imgLogo} alt="logotipo Ecosystem e Recycle do Header" />
                <a
                    onClick={ mostrarMenu }
                    className="menu_barras"
                    id="menu_barras"
                    href="#"
                    aria-label="Abrir o menu do Header"
                    aria-expanded="false"
                    aria-controls="menu_links"
                    aria-haspopup="true"
                >
                    {" "}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                    >
                        {/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                </a>
                <nav id="menu_links">
                    <a href="../Tela_Home/index.html" className="underline">página inicial</a>
                    <a href="../Tela_Nossa_Historia/index.html" className="underline">nossa história</a>
                    <a href="../TelaInformativo/index.html" className="underline">informativo</a>
                    <a href="../TelaServicos/index.html" className="underline">serviços</a>
                    <a href="../Tela_Duvidas/index.html" className="underline">dúvidas</a>
                    <a href="../Tela_Contato/index.html" className="underline">contato</a>
                    <a href="../Tela_Login_Doador/index.html" className="btn_entrar">entrar</a>
                </nav>
            </div>
        </header>

    )
}

export default Header;