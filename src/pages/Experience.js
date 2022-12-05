import React from "react";
import "../styles/Experience.css"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchoolSharp } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";


export default function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement className="vertical-timeline-element--education"
                    date="2022-Present"
                    iconStyle={{ background: "#3e496a", color: "#fff" }}
                    icon={< IoSchoolSharp />}>
                    <h3 className="vertical-timeline-element-title">Scrum Alliance, New York, NY </h3>
                    <p>Certified Scrum Master</p>
                </VerticalTimelineElement>
            </VerticalTimeline>


            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement className="vertical-timeline-element--education"
                    date="April 2022 - August 2022"
                    iconStyle={{ background: "#3e496a", color: "#fff" }}
                    icon={< IoSchoolSharp />}>
                    <h3 className="vertical-timeline-element-title">Flatiron School, New York, NY </h3>
                    <p>Software Engineer: Live Bootcamp</p>
                </VerticalTimelineElement>
            </VerticalTimeline>

            <VerticalTimeline lineColor="green">
                <VerticalTimelineElement className="vertical-timeline-element--work"
                    date="May 2021 - April 2022"
                    iconStyle={{ background: "#3e496a", color: "#fff" }}
                    icon={< MdOutlineWork />}>
                    <h3 className="vertical-timeline-element-title">Equinox, New York, New York </h3>
                    <p>Personal Training Manager</p>
                </VerticalTimelineElement>
            </VerticalTimeline>

            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement className="vertical-timeline-element--(ENTER TOPIC: ie: education, work experiance"
                    date="June 2020 - April 2022"
                    iconStyle={{ background: "#3e496a", color: "#fff" }}
                    icon={< MdOutlineWork />}>
                    <h3 className="vertical-timeline-element-title"> LulaFit/Silverstein Properties, New York, NY </h3>
                    <p>Fitness Facility Manager</p>
                </VerticalTimelineElement>
            </VerticalTimeline>

            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement className="vertical-timeline-element--(ENTER TOPIC: ie: education, work experiance"
                    date="September 2017 - March 2020"
                    iconStyle={{ background: "#3e496a", color: "#fff" }}
                    icon={< MdOutlineWork />}>
                    <h3 className="vertical-timeline-element-title"> TMPL Gym/New York Sports Club, New York, NY </h3>
                    <p>Group Exercise Director</p>
                </VerticalTimelineElement>
            </VerticalTimeline>

            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement className="vertical-timeline-element--(ENTER TOPIC: ie: education, work experiance"
                    date=" June 2006- September 2017"
                    iconStyle={{ background: "#3e496a", color: "#fff" }}
                    icon={< MdOutlineWork />}>
                    <h3 className="vertical-timeline-element-title"> 24Hour Fitness/New York Health and Raquet Club, New York, NY </h3>
                    <p>Personal Trainer/Group Exercise Instructor</p>
                </VerticalTimelineElement>
            </VerticalTimeline>

            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement className="vertical-timeline-element--education"
                    date=" September 2001 - March 2003"
                    iconStyle={{ background: "#3e496a", color: "#fff" }}
                    icon={< IoSchoolSharp />}>
                    <h3 className="vertical-timeline-element-title">Hartnell College, Salinas, CA </h3>
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
    icon={< SUPPLY ICON />}>
    <h3 className="vertical-timeline-element-title">Randome School/College, city, state </h3>
    <p>Associates Degree</p>
</VerticalTimelineElement>
</VerticalTimeline>
                         */

/*TEMPLATE FOR VERTICAL TIMELINE ELEMENT

 <VerticalTimeline lineColor="#3e497a">
<VerticalTimelineElement className="vertical-timeline-element--education"
    date="2022-Present"
    iconStyle={{ background: "#3e496a", color: "#fff" }}
    icon={< SUPPLY ICON />}>
    <h3 className="vertical-timeline-element-title">Randome School/College, city, state </h3>
    <p>Associates Degree</p>
</VerticalTimelineElement>
</VerticalTimeline>
                         */