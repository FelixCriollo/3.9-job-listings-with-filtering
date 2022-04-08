import { useJobsContext } from '../../hooks/useJobsContext'

import { JobsHeader } from '../JobsHeader'
import { JobsFilterList } from "../JobsFilterList"
import { JobsItem } from "../JobsItem"
import { JobsList } from "../JobsList"

import './App.css'

function AppUI() {
  const {
    jobsFiltered,
    setJobFilter
  } = useJobsContext()

  return (
    <main className="App">
      <JobsHeader>
        <JobsFilterList />

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
