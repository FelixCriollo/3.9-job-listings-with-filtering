import { useJobsContext } from '../../hooks/useJobsContext'

import { JobsHeader } from '../JobsHeader'
import { JobsFilterList } from "../JobsFilterList"
import { JobsList } from "../JobsList"

import './App.css'

function AppUI() {
  const { setJobFilter, loading } = useJobsContext()
  console.log(loading)

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

      {
        loading 
          ? <JobsList />
          : <h2>Cargando Trabajos...</h2>
      }
    </main>
  );
}

export { AppUI }
