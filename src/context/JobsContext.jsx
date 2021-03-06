import { createContext } from "react";
import { useState, useEffect } from "react";
import { data } from "../data";

console.log(data);

const JobsContext = createContext();

const JobsContextProvider = (props) => {
  const [jobs, setJobs] = useState([])
  const [jobFilter, setJobFilter] = useState([])
  const [loading, setLoading] = useState(false)

  // Actualiza los datos de manera asincrona
  useEffect(() => {
    setTimeout(() => {
      setJobs(data)
      setLoading(true)
    }, 500);
  }, [])


  // Filtrada los jobs que coincidan con el filtro
  let jobsFiltered;

  if(jobFilter.length > 0) {
    jobsFiltered = jobs
      .filter(job => {
        const tags = [job.role, job.level, ...job.languages]

        const isFiltered = jobFilter.map(filTag => {
          return tags.includes(filTag)
        })
 
        return !isFiltered.includes(false)
      })
  } else {
    jobsFiltered = jobs
    console.log("unaves")
  }

  return (
    <JobsContext.Provider value={{
      jobsFiltered,
      setJobs,

      jobFilter,
      setJobFilter,

      loading
    }}>
      {props.children}
    </JobsContext.Provider>
  )
}

export {JobsContext, JobsContextProvider}