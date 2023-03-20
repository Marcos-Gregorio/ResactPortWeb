import './ContentHeaderStyle.css'

export const ContentHeader = () =>{
    return(
        <>
        <div className="ContentHeader">

            <div className='ContentHeaderLeft'>
                
                <div className='HeaderText'> 
                <h1 class="title" >
                    Nice to meet you!
                </h1>
                <h1 class="subtitle">
                I'm Marcos Gregório.
                </h1>
                <p>Bem-vindo ao PortfólioWeb 2.0. Este projeto é um remake da versão 1.0, na qual procuro utilizar frameworks e CMS mais avançados do que os usados na versão anterior. Nesta versão, estamos utilizando o Vite para configurar o ambiente de desenvolvimento, ReactJS no front-end e apenas o Bulma para auxiliar no CSS. Para aumentar a interatividade do usuário no site, utilizamos JavaScript
                </p>
                </div>

                <button class="button is-danger">Danger</button>

            </div>
            <div className="ContentHeaderRight"></div>
        </div>
        </>
    )

}