import { useJobsContext } from '../../hooks/useJobsContext';
import './Tag.css'

export function Tag({ name }) {
  const { jobFilter, setJobFilter } = useJobsContext();

  const addFilterTag = (e) => {
    const currentTag = e.target.innerHTML;
    if (!jobFilter.includes(currentTag)) {
      const newFilter = [...jobFilter, currentTag]
      setJobFilter(newFilter)
    }
    
    // console.log()
  }

  return (
    <li 
      className="Tag" role="button"
      onClick={(e) => addFilterTag(e)}
    >
      {name}
    </li>
  )
}