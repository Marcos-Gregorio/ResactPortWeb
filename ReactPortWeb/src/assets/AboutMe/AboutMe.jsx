import './AboutMeStyle.css'

export const AboutMe =()=>{
    return(

        <>
        <section className='ContentAboutMe'> 
            <div className="AboutMeLeft">
                <h1 className='title'>About me</h1>
                <p>
                Hello guys, muito prazer me chamo Marcos,tenho 26 anos, atualmente estou cursando o terceiro semestre de ADS, fora a faculdade sou formado em técnico de informática deste de 2015,pela etec Sapopemba, aonde me foi apresentando esse vasto universo que é ti.
                Hoje em dia estou trilhando um roadMap FullStack com um core em javaScript, e especialização em React e Node. Js, o roadmap aborta outras tecnologias também para mais detalhes estarei disponibilizando um currículo pdf e um curriculoWeb, ambos detalham mais sobre meus conhecimentos atuais na área.
                </p>
                <div className="DisplayBtnAbout">
                <button class="button is-danger">Danger</button> 
                <button class="button is-danger">Danger</button>
                </div>
            </div>
            <div className="AboutMeRight">

            </div>
        </section>
        </>
    )
}