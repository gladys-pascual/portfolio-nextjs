import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from './icons/WorkIcon';
import EducationIcon from './icons/EducationIcon';
import styles from './Timeline.module.scss';
import classnames from 'classnames';

const Timeline = () => {
  return (
    <>
      <h2 className={styles.journeyToTech}>My journey to tech</h2>
      <div className={styles.timelineWrapper}>
        <div className={styles.timeline}>
          <VerticalTimeline lineColor="lightgrey" animate>
            <VerticalTimelineElement
              contentStyle={{ background: 'rgb(248,247,245)' }}
              date="Aug 2022 - present"
              dateClassName={styles.verticalTimelineElementDate}
              contentArrowStyle={{ borderRight: '7px solid rgb(248,247,245)' }}
              iconStyle={{ background: 'rgb(248,247,245)', boxShadow: 'none' }}
              iconClassName={styles.verticalTimelineElementIcon}
              icon={<WorkIcon />}
            >
              <h4 className={styles.verticalTimelineElementSubtitle}>
                Software Engineer
              </h4>
              <p className={styles.timelineText}>Squarespace</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{ background: 'rgb(248,247,245)' }}
              date="May 2021 - July 2022"
              dateClassName={styles.verticalTimelineElementDate}
              contentArrowStyle={{ borderRight: '7px solid rgb(248,247,245)' }}
              iconStyle={{ background: 'rgb(248,247,245)', boxShadow: 'none' }}
              iconClassName={styles.verticalTimelineElementIcon}
              icon={<WorkIcon />}
            >
              <h4 className={styles.verticalTimelineElementSubtitle}>
                Associate Frontend Engineer
              </h4>
              <p className={styles.timelineText}>Personio</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{ background: 'rgb(248,247,245)' }}
              date="Jan 2022"
              dateClassName={styles.verticalTimelineElementDate}
              contentArrowStyle={{ borderRight: '7px solid rgb(248,247,245)' }}
              iconStyle={{ background: 'rgb(248,247,245)', boxShadow: 'none' }}
              icon={<EducationIcon />}
            >
              <h4
                className={classnames(
                  styles.verticalTimelineElementSubtitle,
                  styles.bootcamp
                )}
              >
                <a
                  href="https://images.credential.net/embed/18p6cwit.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.codeInstituteDiploma}
                >
                  Diploma
                </a>{' '}
                in Software Development
              </h4>
              <p className={styles.partTime}>Full Stack, Part Time, Remote</p>
              <p className={styles.timelineText}>Code Institute</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{ background: 'rgb(248,247,245)' }}
              date="Oct 2020"
              dateClassName={styles.verticalTimelineElementDate}
              contentArrowStyle={{ borderRight: '7px solid rgb(248,247,245)' }}
              iconStyle={{ background: 'rgb(248,247,245)', boxShadow: 'none' }}
              iconClassName={styles.verticalTimelineElementIcon}
              icon={<EducationIcon />}
            >
              <h4
                className={classnames(
                  styles.verticalTimelineElementSubtitle,
                  styles.bootcamp
                )}
              >
                Front-End Web Development Course
              </h4>
              <p className={styles.partTime}>Part Time, Remote</p>
              <p className={styles.timelineText}>Wild Code School</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{ background: 'rgb(248,247,245)' }}
              date="Nov 2018 - Apr 2021"
              dateClassName={styles.verticalTimelineElementDate}
              contentArrowStyle={{ borderRight: '7px solid rgb(248,247,245)' }}
              iconStyle={{ background: 'rgb(248,247,245)', boxShadow: 'none' }}
              iconClassName={styles.verticalTimelineElementIcon}
              icon={<WorkIcon />}
            >
              <h4 className={styles.verticalTimelineElementSubtitle}>
                Process Development Engineer II
              </h4>
              <p className={styles.timelineText}>APC Ltd</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{ background: 'rgb(248,247,245)' }}
              date="2018"
              dateClassName={styles.verticalTimelineElementDate}
              contentArrowStyle={{ borderRight: '7px solid rgb(248,247,245)' }}
              iconStyle={{ background: 'rgb(248,247,245)', boxShadow: 'none' }}
              iconClassName={styles.verticalTimelineElementIcon}
              icon={<EducationIcon />}
            >
              <h4 className={styles.verticalTimelineElementSubtitle}>
                PhD Chemical Engineering
              </h4>
              <p className={styles.timelineText}>University College Dublin</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{ background: 'rgb(248,247,245)' }}
              date="2014"
              dateClassName={styles.verticalTimelineElementDate}
              contentArrowStyle={{ borderRight: '7px solid rgb(248,247,245)' }}
              iconStyle={{ background: 'rgb(248,247,245)', boxShadow: 'none' }}
              iconClassName={styles.verticalTimelineElementIcon}
              icon={<EducationIcon />}
            >
              <h4 className={styles.verticalTimelineElementSubtitle}>
                BE Chemical Engineering
              </h4>
              <p className={styles.timelineText}>University College Dublin</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};
export default Timeline;
