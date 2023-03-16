import './NavBarStyles.css'
export const NavBar= () => {

        return(
            <>
            <nav className="NavContent">
                <h1>Marcos Gregorio Vieira</h1>
                <div className="DisplayNav">
                
                    <ul className="ListNav">
                        <li><i class="fa-brands fa-whatsapp"></i></li>
                        <li><i class="fa-brands fa-linkedin"></i></li>
                        <li><i class="fa-brands fa-git-alt"></i></li>
                        <li><i class="fa-brands fa-github"></i></li>
                    </ul>

                    <div className="BtnNavBar">
                        <h1><i class="fa-solid fa-bars"></i></h1>
                    </div>

                </div>
               
            </nav>
            </>
        )
}