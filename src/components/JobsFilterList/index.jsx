import './JobsFilterList.css'

export function JobsFilterList(props) {
  return (
    <ul className={`JobsFilterList`}>
      {props.children}
    </ul>
  )
}