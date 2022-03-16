import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [jobList, setJobList] = useState([]);

  const jobs = async () => {
    const response = await fetch("/src/data/data.json");
    const listaJobs = await response.json();
  
    setJobList(listaJobs);
  }
  
  useEffect(() => {
    jobs();
  }, [])
  
  return (
  <div className="App">
    <ul>
      {
        jobList.map(({id, company}) => {
          return <li key={id}>{`${id}: ${company}`}</li> 
        })
      }
    </ul>
    <ul>
      {
        jobList
          .filter(job => {
            return job.languages.includes("Python" || "CSS")
                      // .find(lang => lang === 'Python')
          })
          .map(({id, company}) => {
            return <li key={id}>{`${id}: ${company}`}</li> 
          })
      }
    </ul>
  </div>
  )
}

export default App
