import { useState, useEffect } from "react"

import { JobsHeader } from '../JobsHeader'
import { JobsFilterList } from "../JobsFilterList"
import { JobsFilterTag } from "../JobsFilterTag"
import { JobsItem } from "../JobsItem"
import { JobsList } from "../JobsList"
import { getJobs } from '../../utils/getData'

import './App.css'

function App() {
  const [jobs, setJobs] = useState([])
  const [jobFilter, setJobFilter] = useState(["Frontend", "CSS", "JavaScript"])

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
 
  useEffect(() => {
    getJobs()
      .then(data => setJobs(data))
  }, [])
  
  return (
    <main className="App">
      <JobsHeader>
        <JobsFilterList>
          {
            jobFilter.map(filter => (
              <li key={filter}>
                <JobsFilterTag children={filter}/>
              </li>
            ))
          }
        </JobsFilterList>

        <button 
          onClick={() => setJobFilter([])}>
          Clear
        </button>
      </JobsHeader>

      <JobsList>
        {
          jobsFiltered.map(job => (
            <li key={job.id}>
              <JobsItem {...job} />
            </li>
          ))
        }
      </JobsList>
    </main>
  );
}

export default App
