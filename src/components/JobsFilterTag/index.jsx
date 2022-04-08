import { useJobsContext } from '../../hooks/useJobsContext';
import './JobsFilterItem.css'

export function JobsFilterTag({ children }) {
  const { jobFilter, setJobFilter } = useJobsContext();
 
  const deleteFilterTag = () => {
    const tag = children
    const newFilter = jobFilter.filter(fTag => fTag !== tag)
    setJobFilter(newFilter)
  }

  return (
    <div className='JobsFilterItem'>
      {children}
       
      <button  
        type='button'
        className='JobsFilterItem__btn'
        onClick={deleteFilterTag}
      />
    </div>
  )
}