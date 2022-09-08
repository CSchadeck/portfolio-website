import React from "react";
import "../styles/Experience.css"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchoolSharp } from "react-icons/io5";

export default function Experience() {
    return (
        <div className="experience">
            

            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement className="vertical-timeline-element--education"
                    date="2001-2003"
                    iconStyle={{ background: "#3e496a", color: "#fff" }}
                    icon={< IoSchoolSharp />}>
                    <h3 className="vertical-timeline-element-title">Hartnell College, Salinas, California </h3>
                    <p>Associates Degree</p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    )
};

/*TEMPLATE FOR VERTICAL TIMELINE ELEMENT

 <VerticalTimeline lineColor="#3e497a">
<VerticalTimelineElement className="vertical-timeline-element--(ENTER TOPIC: ie: education, work experiance"
    date="19??-20??"
    iconStyle={{ background: "#3e496a", color: "#fff" }}
    icon={< IoSchoolSharp />}>
    <h3 className="vertical-timeline-element-title">Randome School/College, city, state </h3>
    <p>Associates Degree</p>
</VerticalTimelineElement>

</VerticalTimeline> */