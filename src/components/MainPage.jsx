import Header from "./Header";
import Skills from "./Skills";
import ContributionSection from "./ContributionSection";
import ProjectSection from "./ProjectSection";
import ContactForm from "./ContactForm";
import FooterSection from "./FooterSection";

function MainPage(){
    return(
        <>
            <Header/>
            <Skills/>
            <ContributionSection/>
            <ProjectSection/>
            <ContactForm/>
            <FooterSection/>
        </>
    )
}

export default MainPage;