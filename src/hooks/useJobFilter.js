import { useEffect, useState } from "react";
import { getJobs } from '../utils/getData'

export function useJobFilter() {
  const [jobs, setJobs] = useState([])
  const [jobFilter, setJobFilter] = useState(["Frontend", "CSS", "JavaScript"])

  // Actualiza los datos de manera asincrona
  useEffect(() => {
    getJobs()
      .then(data => setJobs(data))
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
  }

  return {
    setJobs,
    jobsFiltered,

    jobFilter,
    setJobFilter
  }
}