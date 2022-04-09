import { useJobsContext } from '../../hooks/useJobsContext'
import { JobsItem } from '../JobsItem';
import './JobsList.css'

export function JobsList() {
    const { jobsFiltered } = useJobsContext();
    
    return (
        <section>
            <ul className='JobsList'>
                {
                    jobsFiltered.map(job => (
                        <li key={job.id}>
                            <JobsItem {...job} />
                        </li>
                    ))
                }
            </ul>
        </section>
    )
} 