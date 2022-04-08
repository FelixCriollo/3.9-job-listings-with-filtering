import { useJobsContext } from '../../hooks/useJobsContext';
import './JobsFilter.css'

export function JobsHeader(props) {
    const { jobFilter } = useJobsContext();
    const filterTagLength = jobFilter.length
    
    return (
        <section 
            className={`JobsHeader${filterTagLength === 0 ? " JobsHeader__hidden" : ""}`}
        >
            {props.children}
        </section>
    )
}