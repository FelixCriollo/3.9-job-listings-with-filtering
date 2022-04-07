import './JobsFilter.css'

export function JobsHeader(props) {
    const filterTagLength = props.children[0].props.children.length
    
    return (
        <section className={`JobsHeader${filterTagLength === 0 ? " JobsHeader__hidden" : ""}`}>
            {props.children}
        </section>
    )
}