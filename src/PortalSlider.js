import React, { Component } from 'react'
import styles from './PortalSlider.css'

export default class PortalSlider extends Component {
  constructor(props) {
    super(props)
    this.state = { currentIndex: 0 }
  }

  calcStyle(index) {
    return {
      transform: `translate(${index * 320}px, 0)`
    }
  }
  onClickPrev(){
    let nextIndex = this.state.currentIndex - 3 < 0 ? 0 : this.state.currentIndex - 3
    this.setState({
      currentIndex:nextIndex

    })
  }
  onClickNext(){
    let nextIndex = this.state.currentIndex + 3 > this.props.children.length ?  this.state.currentIndex: this.state.currentIndex + 3
    this.setState({
      currentIndex:nextIndex
    })
  }
  render() {
    return (
      <div className={styles.base}>
        <h3 className={styles.label}>{this.props.title}</h3>
        <a className={styles.prev} onClick={this.onClickPrev.bind(this)}><img className={styles.button} src="http://cdn2.hubspot.net/hub/375363/file-2234927864-png/success-previous-button.png?t=1453419008570" /></a>
        <a className={styles.next} onClick={this.onClickNext.bind(this)}><img className={styles.button} src="http://cdn2.hubspot.net/hub/375363/file-2234927924-png/success-next-button.png?t=1453419008570"/></a>
        {
          <div className={styles.box}>
            {
              this.props.children.map((child, index) => {
                return <div style={this.calcStyle(index - this.state.currentIndex)} key={index} className={styles.item}>
                  {child}
                </div>})
            }
          </div>
        }
      </div>
    )
  }
}