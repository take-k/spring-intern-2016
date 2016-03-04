import React, { Component } from 'react'

import styles from './PortalEmployeeInterview.css'

export default class PortalEmployeeInterview extends Component {
  render() {
    let interview = this.props.interview
    return (
        <div className={styles.base}>
          <div className={styles.employeeBlock}>
            <img className={styles.employee_avatar} src={interview.avatar.square} />
            <h2 className={styles.employee_name}>{interview.user.name}</h2>
            <p className={styles.employee_description}>{interview.user.short_description}</p>
          </div>
          <a className={styles.linkBlock} href={interview.canonical_url}>
            <img className={styles.interview_coverImage} src={interview.image.i_304_124_x2} />
            <div className={styles.interview_title}>{interview.title}</div>
          </a>
        </div>
        )
  }
}
