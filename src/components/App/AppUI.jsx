import { useContext } from "react"
import { JobsContext } from "../../context/JobsContext"

import { JobsHeader } from '../JobsHeader'
import { JobsFilterList } from "../JobsFilterList"
import { JobsFilterTag } from "../JobsFilterTag"
import { JobsItem } from "../JobsItem"
import { JobsList } from "../JobsList"

import './App.css'

function AppUI() {
  const {
    jobsFiltered,
    jobFilter,
    setJobFilter
  } = useContext(JobsContext)

  return (
    <main className="App">
      <JobsHeader>
        <JobsFilterList>
          {
            jobFilter.map((filter, index) => (
              <li key={filter+index}>
                <JobsFilterTag children={filter}/>
              </li>
            ))
          }
        </JobsFilterList>

        <button 
          className="btn-clear"
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

export { AppUI }
