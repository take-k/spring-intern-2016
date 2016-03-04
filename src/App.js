import React, { Component } from 'react'
import PortalProject from './PortalProject'
import PortalSlider from './PortalSlider'
import styles from './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    // 状態の定義
    this.state = { message: "Reactのシンプルなコンポーネントです" }
  }
  componentDidMount() {
    this.fetchPortalData()
  }

  async fetchPortalData() {
    // Create headers
    let headers = new Headers()
    headers.append('Authorization', `Basic ${btoa('spring:intern_2016')}`)
    // Call API
    let res = await fetch("https://www.wantedlyapp.com/api/intern/portal", { headers })
    let json = await res.json()
    console.log(json) // 受け取った内容がコンソールに出力される
    this.setState({
      data: json.data
    })
  }

  render() {
    let data = this.state.data
    let popularProject = data && data.sections[3]
    let newgradProject = data && data.sections[4]
    let internProject = data && data.sections[5]
    // 見た目の定義
    return(
      <div className={styles.container}>
        {data ? (
          <div>
            <div className={styles.section}>
              <PortalSlider>
                {
                  popularProject.projects.map((project) => {
                    return <PortalProject project={project} key={project.id} />
                  })
                }
              </PortalSlider>
            </div>
            <div className={styles.section}>
              <PortalSlider>
                {
                  newgradProject.projects.map((project) => {
                    return <PortalProject project={project} key={project.id} />
                  })
                }
              </PortalSlider>
            </div>
            <div className={styles.section}>
              <PortalSlider>
                {
                  internProject.projects.map((project) => {
                    return <PortalProject project={project} key={project.id} />
                  })
                }
              </PortalSlider>
            </div>

          </div>
        ):(
          <p>Now Loading...</p>
        )}
      </div>
    )
  }
}