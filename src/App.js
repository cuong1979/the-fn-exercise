
import { useState, useEffect } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Goal from "./Component/Goal";
import TargetList from './Component/TargetList';
import Error from './Component/Error';


function App() {
 
  const [goalTitles, setGoalTitles] = useState([])
  /* const [theTitle, setTheTitle] = useState(''); */
  

 useEffect(() =>{
    async function fetchData() {
   const response = await fetch('https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true');
    const data = await response.json();
    setGoalTitles(data)  
   
    }
    fetchData();

},[])
   
/* function showTitle(Title){
  setTheTitle(Title)
}

function removeTitle(title){
  setTheTitle(title)
  
} */



  return (
    <section className='wrapper'>
      <Goal />
      <TargetList />
      <Switch>
        <Route path="/" component={ Goal } exact />
        <Route path="/Target" component={ TargetList } />
        <Route component={ Error } />
     </Switch>
      
      {/*  {theTitle ?  <> <h1>Mer Info</h1> <div className='info' ><TargetList removeTitle={removeTitle} theTitleData={theTitle} /></div> </>: 
      <> <h1> FN:s Hållbarhetsmål </h1>  */} <div className='goal'>{goalTitles.map(title => <Goal titleObj={title} key={title.code} /* showTitle={showTitle} *//>)} </div>
      {/* </> */}
       {/*  }  */}    
      </section>
  );
}

export default App;
