import './JobsFilterItem.css'
import remove from '../../images/icon-remove.svg'

export function JobsFilterTag({ children }) {
  return (
    <div className='JobsFilterItem'>
      {children}
      
      <button  
        type='button'
        className='JobsFilterItem__btn'>
        <img src={remove} alt="" aria-hidden='true' />
      </button>
    </div>
  )
}