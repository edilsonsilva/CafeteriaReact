import {FaFacebook, FaYoutube,FaInstagram,FaTwitter} from 'react-icons/fa';
export default function Footer(){
    return(
        <div className="rodape">
            <div className="endereco">
                <p>
                    Av. Santos Martins, 45 - Vila Nova - São Paulo<br/>
                    Contato:11-5568-5456 | 11-5568-8854 <br/>
                    E-Mail: contato@cafeteria.com.br
                </p>
                
            </div>

            <div className="redes">
                <nav>
                    <ul>
                        <li><a href="http://www.facebook.com">  <FaFacebook /></a></li>
                        <li><a href="http://www.youtube.com"> <FaYoutube/> </a></li>
                        <li><a href="http://www.twitter.com"> <FaTwitter/> </a></li>
                        <li><a href="http://www.instagram.com"> <FaInstagram/> </a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}