import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import data from '../timelineData.json'

const Timeline = () => {
  type Data = {
    id: number
    date: string
    title: string
    organization: string
    description: string
  }

  return (
    <VerticalTimeline>
      {data.map((item: Data) => {
        return (
          <VerticalTimelineElement
            key={item.id}
            date={item.date}
            className="timeline-element"
          >
            <h3>{item.title}</h3>
            <h4>{item.organization}</h4>
            <p>{item.description}</p>
          </VerticalTimelineElement>
        )
      })}
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
      />
    </VerticalTimeline>
  )
}

export default Timeline
