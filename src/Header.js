import React,{ Component} from 'react'
import styles from './Header.css'

export default class Header extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className={styles.header}>
        <a>
          Wantedly
        </a>
      </div>
    )
  }
}