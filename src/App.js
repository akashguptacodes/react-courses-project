import './App.css';
import { apiUrl, filterData } from './data';
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";


const App = () => {
  const [courses,setCourses] = useState([]);
  const [loading,setLoading] = useState(true);
  const[category,setCategory] = useState(filterData[0].title);


  const fetchData = async() => {
    setLoading(true);
    try{
      const res = await fetch(apiUrl);
      const output = await res.json();
      //save data into a variable------
      setCourses(output.data);
    }
    catch(error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() =>{
    fetchData();
  },[category]) 


  return (
    <div className="App">
        <div>
          <Navbar/>
        </div>
        
        <div>
          <Filter filterData={filterData}
                  category={category}
                  setCategory={setCategory}/>
        </div>

        <div className="cards-container">
          {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>) 
          }
         </div> 
    </div>
  );
}

export default App;
