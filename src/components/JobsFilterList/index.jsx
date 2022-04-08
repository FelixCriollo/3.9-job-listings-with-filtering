import { useJobsContext } from '../../hooks/useJobsContext'
import { JobsFilterTag } from '../JobsFilterTag'
import './JobsFilterList.css'

export function JobsFilterList() {
  const { jobFilter } = useJobsContext();

  return (
    <ul className={`JobsFilterList`}>
      {
        jobFilter.map((filter, index) => (
          <li key={filter+index}>
            <JobsFilterTag children={filter}/>
          </li>
        ))
      }
    </ul>
  )
} 