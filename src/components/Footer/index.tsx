import './style.css'

import icoEmail from "../../assets/img/icone_email_footer.png";
import icoWhats from "../../assets/img/icone_whats_footer.png";
import icoInstagran from "../../assets/img/icone_instagran_footer.png";
import icoFacebook from "../../assets/img/icone_face_footer.png";
import icoTwitter from "../../assets/img/icone_twitter_footer.png";

function Footer(){

    return(
        <footer>
  <div className="div_footerPosition wrapper">
    <div className="foot_contats">
      <div>
        <img
          src={ icoEmail }
          alt="Icone de uma carta com um @, simbolizando o email"
        />
        <p>contato@ecosystemrecycle.com.br</p>
      </div>
      <div>
        <img src={ icoWhats } alt="Icone do whatsapp" />
        <p>(11) 99999-9999</p>
      </div>
      <div>
        <p>R. Niterói, 180 - Centro</p>
        <p>São Caetano do Sul - SP, 09510-200</p>
      </div>
    </div>
    <div className="foot_menu">
      <span>menu</span>
      <ul>
        <a href="../Tela_Home/index.html">
          <li>página inicial</li>
        </a>
        <a href="../Tela_Nossa_Historia/index.html">
          <li>nossa história</li>
        </a>
        <a href="../TelaInformativo/index.html">
          <li>informativo</li>
        </a>
        <a href="../TelaServicos/index.html">
          <li>serviços</li>
        </a>
        <a href="../Tela_Duvidas/index.html">
          <li>dúvidas</li>
        </a>
        <a href="../Tela_Contato/index.html">
          <li>contato</li>
        </a>
      </ul>
    </div>
    <div className="foot_midiasBoletim">
      <span>Boletim Informativo</span>
      <div className="foot_botetim">
        <form>
          <input type="email" name="email" placeholder="...Digite seu email" />
        </form>
        <a href="#" className="btn_enviar">
          enviar
        </a>
      </div>
      <div className="ico_sociais">
        <a href="#">
          <img
            src= { icoInstagran }
            alt="Icone do Instagran"
          />
        </a>
        <a href="#">
          <img src={ icoFacebook } alt="Icone do Facebook" />
        </a>
        <a href="#">
          <img
            src={ icoTwitter }
            alt="Icone do Twitter"
          />
        </a>
      </div>
    </div>
  </div>
</footer>

    )
}

export default Footer;