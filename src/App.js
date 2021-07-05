import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import { Home, Login, Signup, About, FAQ, Section } from "./pages/PageSrc";
import PropagateLoader from "react-spinners/PropagateLoader";

function App() {
  const [loading , setloading] = useState(false);

  useEffect(() => {
    setloading(true)
    setTimeout(()=>{
      setloading(false)
    }, 5000)
  },[])

  return (
    <div className="App">
      {
        loading ?
        <PropagateLoader color={"#D0021B"} loading={loading} size={20} />
        :
        

      
    
    <Switch>
      <Layout>
        <Route path="/section" exact component={Section} />
        <Route path="/about" exact component={About} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/faq" exact component={FAQ} />
        <Route path="/" exact component={Home} />
        <Footer />
      </Layout>
    </Switch>
    }
    </div>
  );
}

export default App;
