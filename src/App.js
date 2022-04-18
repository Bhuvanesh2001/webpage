
import './App.css';
import EligibilityRequirements from './components/eligibility requirements/EligibilityRequirements';
import ExpertsDoWhat from './components/experts do what/ExpertsDoWhat';
import Footer from './components/footer/Footer';
import MoreStatusOnUsa from './components/more status on usa/MoreStatusOnUsa';
import Navbar from './components/navbar/Navbar';
import UniversitiesOfUsa from './components/universities of usa/UniversitiesOfUsa';
import WhyChooseUsa from './components/why choose usa/WhyChooseUsa';
import WhyStudyInUsa from './components/why study in usa/WhyStudyInUsa';


function App() {
  return (
    <div className="App">
      {/* folder are created for respective sections along with js and css files 
        write the code in js files 
        call your component according to the below comments */}
      
      {/* call your navbar component here */}

      {/* <Navbar/> */}

      {/* call 'Why Study in the USA?' section here...! */}

      <WhyStudyInUsa/>

      {/* call Why choose the USA to accomplish your education goals? section here...! */}
      {/* <WhyChooseUsa/> */}

      {/* call More stats on the USA and its education section here ....! */}

      {/* <MoreStatusOnUsa/> */}

      {/* call Eligibility Requirements here ....! */}

      {/* <EligibilityRequirements/>  */}

      {/* call  Ubergrads admitted into universities of USA section here....! */}
      {/* <UniversitiesOfUsa/> */}

      {/* call For all those SMART Ubergrads who would let the EXPERTS do what they do BEST! section here...! */}
      
      {/* <ExpertsDoWhat/> */}

      {/* call footer section here....! */}
      
      <Footer/>

    </div>
  );
}

export default App;
