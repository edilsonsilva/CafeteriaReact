export default function Main(valor){
    
    if(valor.paginas.id==1){
        return(
            <div className="textoHome">
                <h2>{valor.paginas.titulo}</h2>
                <p>{valor.paginas.blocotxt}</p>    
            </div>
        )
    }
    else if(valor.paginas.id==2){
        return(
            <div className="historia">
                <h2>{valor.paginas.titulo}</h2>
    
                <p>{valor.paginas.blocotxt}</p>
    
                <img src={valor.paginas.imagens.foto1} alt="foto1" />
    
                <img src={valor.paginas.imagens.foto2} alt="foto1" />
    
                <img src={valor.paginas.imagens.foto3} alt="foto1" />
    
            </div>
        )
    }

    else if(valor.paginas.id==3){
        return(
            <div>
                <h2>{valor.paginas.titulo}</h2>
    
                <div>{valor.paginas.blocotxt}</div>
    
                <div id="corpomenu">
                    <h3>Cafés:</h3>
                    <div id="menu">
                        <span>
                            <img src={valor.paginas.imagens.cafes.foto1} alt="cafe1"/>
                            <p>{valor.paginas.imagens.cafes.texto1}</p>
                        </span>

                        <span>
                            <img src={valor.paginas.imagens.cafes.foto2} alt="cafe2"/>
                            <p>{valor.paginas.imagens.cafes.texto2}</p>
                        </span>

                        <span>
                            <img src={valor.paginas.imagens.cafes.foto3} alt="cafe3"/>
                            <p>{valor.paginas.imagens.cafes.texto3}</p>
                        </span>

                        <span>
                            <img src={valor.paginas.imagens.cafes.foto4} alt="cafe4"/>
                            <p>{valor.paginas.imagens.cafes.texto4}</p>
                        </span>
                    </div>

                    <h3>Salgados:</h3>
                    <div id="menu">
                        <span>
                            <img src={valor.paginas.imagens.salgados.foto1} alt="salgado1"/>
                            <p>{valor.paginas.imagens.salgados.texto1}</p>
                        </span>

                        <span>
                            <img src={valor.paginas.imagens.salgados.foto2} alt="salgado2"/>
                            <p>{valor.paginas.imagens.salgados.texto2}</p>
                        </span>
                        
                        <span>
                            <img src={valor.paginas.imagens.salgados.foto3} alt="salgado3"/>
                            <p>{valor.paginas.imagens.salgados.texto3}</p>
                        </span>
                        
                        <span>
                            <img src={valor.paginas.imagens.salgados.foto4} alt="salgado4"/>
                            <p>{valor.paginas.imagens.salgados.texto4}</p>
                        </span>
                    </div>

                    <h3>Doces:</h3>
                    <div id="menu">
                    <span>
                            <img src={valor.paginas.imagens.doces.foto1} alt="doce1"/>
                            <p>{valor.paginas.imagens.doces.texto1}</p>
                        </span>

                        <span>
                            <img src={valor.paginas.imagens.doces.foto2} alt="doce2"/>
                            <p>{valor.paginas.imagens.doces.texto2}</p>
                        </span>

                        <span>
                            <img src={valor.paginas.imagens.doces.foto3} alt="doce3"/>
                            <p>{valor.paginas.imagens.doces.texto3}</p>
                        </span>

                        <span>
                            <img src={valor.paginas.imagens.doces.foto4} alt="doce4"/>
                            <p>{valor.paginas.imagens.doces.texto4}</p>
                        </span>
                    </div>
                </div>
    
            </div>
        )
    }


    else if(valor.paginas.id==4){
        return(
            <div>
                <h2>{valor.paginas.titulo}</h2>
                <form>
                    <input type="text" placeholder="Nome" id="txtnome"/>
                    <input type="email" placeholder="Email" id="txtemail"/>
                    <input type="tel" placeholder="Telefone" id="txttelefone"/>
                    <select id="txtassunto" style={{backgroundColor:'white'}}>
                        <option>Sugestão</option>
                        <option>Dúvida</option>
                        <option>Criticas</option>
                        <option>Outros</option>
                    </select>
                    <textarea id="txtmensagem"> Mensagem </textarea>
                    <button id="btnenviar" title="Enviar" style={{color:'white'}}>Enviar</button>
                </form>        
            </div>
        )
    }

else{
    return(
        <div>
            <h2>{valor.paginas.titulo}</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14634.12137543077!2d-46.50663680130682!3d-23.51342026061227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce61d71869046f%3A0x2d27b2e9755501ff!2sTerra%20Coffee%20Bistr%C3%B4!5e0!3m2!1spt-BR!2sbr!4v1615816987862!5m2!1spt-BR!2sbr" width="80%" height="500" frameborder="0" allowfullscreen="" loading="lazy"></iframe>
        </div>
    )
    }
}