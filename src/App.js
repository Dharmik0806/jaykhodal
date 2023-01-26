import { Route, Switch } from 'react-router-dom';
import Layout from './Admin/component/Layout';
import Doctor from './Admin/container/Doctor';
import Medision from './Admin/container/Medision';
import Signinform from './Admin/container/Signinform';
import './App.css';
import Header from './component/header/Header';
import FeaturesFour from './container/featuresFolder/featuresFour/FeaturesFour';
import FeaturesOne from './container/featuresFolder/featuresOne/FeaturesOne';
import FeaturesThree from './container/featuresFolder/featuresThree/FeaturesThree';
import FeaturesTwo from './container/featuresFolder/featuresTwo/FeaturesTwo';
import Home from './container/home/Home';
import Kid from './container/kid/Kid';
import Man from './container/man/Man';
import Aboutus from './container/pageFolder/aboutus/Aboutus';
import Contectus from './container/pageFolder/contectus/Contectus';
import Product from './container/pageFolder/product/Product';
import Singleproduct from './container/pageFolder/singleProduct/Singleproduct';
import ConditionalRendering from './container/PRECTICE/ConditionalRendering';
import FormicAndYupArrore from './container/PRECTICE/FormicAndYupArrore';
import SliderArrow from './container/PRECTICE/SliderArrow';
import Reactform from './container/reactForm/Reactform';
import ReactForm22 from './container/reactForm/ReactForm22';
import User from './container/user/User1/User';
import Userconditionalranderring from './container/user/Userconditionalranderring';
import Women from './container/women/Women';


function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <Switch> */}

      {/* <Route exact path="/" component={Home} />
        <Route exact path="/man" component={Man} />
        <Route exact path="/women" component={Women} />
        <Route exact path="/kid" component={Kid} /> */}

      {/* pageFoulder */}
      {/* <Route exact path="/aboutus" component={Aboutus} />
        <Route exact path="/contectus" component={Contectus} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/singleProduct" component={Singleproduct} /> */}

      {/* featuresFolder */}
      {/* <Route exact path="/featuresOne" component={FeaturesOne} />
        <Route exact path="/featuresTwo" component={FeaturesTwo} />
        <Route exact path="/featuresThree" component={FeaturesThree} />
        <Route exact path="/featuresFour" component={FeaturesFour} /> */}


      {/* <Route exact path="/contectus" component={Contectus} /> */}

      {/* <Route exact path="/user" component={User} />
        <Route exact path="/userconditional" component={Userconditionalranderring} /> */}


      {/* <Route exact path="/reactForm" component={Reactform}/> */}

      {/* <Route exact path="/reactForm22" component={ReactForm22}/> */}

      {/* Prectice */}
      {/* <Route exact path="/first1" component={ConditionalRendering} />
        <Route exact path="/secound1" component={FormicAndYupArrore} />
        <Route exact path="/sliderArrow1" component={SliderArrow} /> */}

      {/* </Switch> */}

      {/* <Home /> */}
      {/* <Man /> */}
      {/* <Women /> */}
      {/* <Kid /> */}
      {/* <Contectus /> */}
      {/* <User /> */}

      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/medision" component={Medision} />
          <Route exact path="/doctor" component={Doctor} />
          <Route exact path="/signinform" component={Signinform} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
