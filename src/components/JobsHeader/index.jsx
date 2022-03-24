import './JobsFilter.css'

export function JobsHeader(props) {
    return (
        <section className='JobsHeader'>
            {props.children}
        </section>
    )
}