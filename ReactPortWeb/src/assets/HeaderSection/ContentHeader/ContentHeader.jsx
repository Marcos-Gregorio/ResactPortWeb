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
                <p>
                     Welcome to my web portifolio 2.0,that new update to alter the framework used and desing web.This  project is an epilogue of my journey in this vast universe of programming 
                </p>
                </div>

                <button class="button is-danger">Danger</button>

            </div>
            <div className="ContentHeaderRight"></div>
        </div>
        </>
    )

}