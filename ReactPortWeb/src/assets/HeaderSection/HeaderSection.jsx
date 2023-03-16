import { ContentHeader } from './ContentHeader/ContentHeader'
import './HeaderSection.css'
import { NavBar } from './NavBar/NavBar'

export const HeaderSection = () =>{
    return(
        <header>
            <NavBar/>
            <ContentHeader/>
        </header>
    )
}