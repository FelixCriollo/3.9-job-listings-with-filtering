import { useContext } from 'react'
import { JobsContext } from '../../context/JobsContext'
import remove from '../../images/icon-remove.svg'
import './JobsFilterItem.css'

export function JobsFilterTag({ children }) {
  const { jobFilter, setJobFilter } = useContext(JobsContext);
 
  const deleteFilterTag = (e) => {
    console.log(e.target.value);
    const tag = e.target.value
    const newFilter = jobFilter.filter(fTag => fTag !== tag)
    console.log(newFilter)
    setJobFilter(newFilter)
  }

  return (
    <div className='JobsFilterItem'>
      {children}
      
      <button  
        type='button'
        className='JobsFilterItem__btn'
        onClick={e => deleteFilterTag(e)}
        value={children}
        >
        <img src={remove} alt="" aria-hidden='true' />
      </button>
    </div>
  )
}