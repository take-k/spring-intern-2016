import React, { Component } from 'react'

import styles from './PortalProjectList.css'

export default class PortalProjectList extends Component {
  render() {
    let project_list = this.props.project_list
    return (
        <div className={styles.base}>
          <div className={styles.title}> { project_list.title }</div>
          <div>
            <img className={styles.coverImage} src={project_list.image.i_304_124_x2} />
            <h2 className={styles.banner_title}>{ project_list.banner_title }</h2>
            <p className={styles.description}>{ project_list.description }</p>
          </div>
        </div>
        )
  }
}
