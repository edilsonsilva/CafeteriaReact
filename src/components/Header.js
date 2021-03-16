import '../App.css';
export default function Header(){
    
    return(
        <div className="links">
            <nav className="navSuperior">
                <ul>
                    <li><button id="btnhome"> Home </button></li>
                    <li><button id="btnhistoria"> História </button></li>
                    <li><button id="btncardapio"> Cardápio </button></li>
                    <li><button id="btncontato"> Contato </button></li>
                    <li><button id="btnlocalizacao"> Localização </button></li>
                </ul>
            </nav>
            <div className="carousel">
                <img src="https://images.unsplash.com/photo-1615283655987-94f431e9bf77?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1833&q=80" alt="Carousel"/>
            </div>
        </div>
    )
}