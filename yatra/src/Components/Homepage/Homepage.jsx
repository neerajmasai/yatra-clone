import { Navbar } from "../Header/Navbar"
import {Leftsection} from "./LeftSection/Left-section";
import {RightSection} from "./RightSection/RightSection";
import {StyledNavbar} from "./Navbar.styled";
import {StyledLeftSection} from "./LeftSection.styled";
import {StyledHomepageBody} from "./HomepageBody.styled";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

const Homepage =()=>{
    const {user}=useContext(AuthContext)
    console.log(user)
    return (
        <>
            <StyledNavbar>
                <Navbar/> 
            </StyledNavbar>
      
            <StyledHomepageBody>

                <StyledLeftSection>
                    <Leftsection/>
                </StyledLeftSection>

                <RightSection />
            
            </StyledHomepageBody>
        </>
    );
}

export{Homepage};