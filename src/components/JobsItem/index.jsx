import { Tag } from '../Tag'
import './JobsItem.css'

export function JobsItem(props) {
  const companyLogo = new URL(props.logo, import.meta.url).href;
  const tags = [props.role, props.level, ...props.languages]

  return (
    <section 
      className={`JobsItem${props.featured ? " JobsItem--mark" : ""}`}
    >
      <img 
        src={companyLogo} 
        alt={props.company} 
        className="JobsItem__logo"
      />

      <section className="JobsItem-info">
        <h2 
          className='JobsItem__company'>
          {props.company}
          {
             props.new 
             ? <span className="new" children="NEW!"/> 
             : null
          }
          {
            props.featured 
              ? <span className="featured" children="FEATURED"/> 
              : null
          }
        </h2>
        
        <h3 className='JobsItem__posit'>{props.position}</h3>

        <ul className='JobsItem__moreinfo'>
          <li className='JobsItem__moreinfo-item'>{props.postedAt}</li>
          <li className='JobsItem__moreinfo-item'>{props.contract}</li>
          <li className='JobsItem__moreinfo-item'>{props.location}</li>
        </ul>
      </section>

      <section className='JobsItem-tags-container'>
        <ul className='JobsItem-tags'>
          {
            tags.map(tag => (
              <Tag name={tag} key={tag} />)
            )
          }
        </ul>
      </section>
    </section>
  )
}