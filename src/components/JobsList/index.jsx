import './JobsList.css'

export function JobsList(props) {  
    return (
        <section>
            <ul className='JobsList'>
                {props.children}
            </ul>
        </section>
    )
}