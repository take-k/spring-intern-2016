import React, { Component } from 'react'

import styles from './PortalPanel.css'



export default class PortalPanel extends Component {
  constructor(props) {
    super(props)
    }

  calcStyle(index) {
    let columnNum = 3
    return {
      transform: `translate(${index % columnNum * 320}px, ${Math.floor(index / columnNum) * 400}px)`
    }
  }
  render() {
    return (
        <div className={styles.base}>
          {
            this.props.children.map((child, index) => {
              return <div style={this.calcStyle(index)} key={index} className={styles.item}>
              {child}
              </div>
            }) }
            </div>
        )
  }
}
