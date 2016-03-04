import React, { Component } from 'react'
import PortalProject from './PortalProject'
import PortalSlider from './PortalSlider'
import styles from './App.css'
import SkyLight from 'react-skylight'

export default class App extends Component {
  constructor(props) {
    super(props)
    // 状態の定義
    this.state = { message: "Reactのシンプルなコンポーネントです" , showProjectsPanel : false ,showDetailPanel:false}
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

  toggleProjectsPanel(){
    this.setState({
      showProjectsPanel:true
    })
  }

  toggleDetailPanel(){
    this.setState({
      showDetailPanel:true
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
              <PortalSlider title={popularProject.title}>
                {
                  popularProject.projects.map((project) => {
                    return <div onClick={() => this.refs.simpleDialog.show()}><div onClick={this.toggleDetailPanel.bind(this)}><PortalProject project={project} key={project.id} /></div></div>
                  })
                }
              </PortalSlider>
            </div>
            <div className={styles.section}>
              <PortalSlider title={newgradProject.title}>
                {
                  newgradProject.projects.map((project) => {
                    return <div onClick={() => this.refs.simpleDialog.show()}><div onClick={this.toggleDetailPanel.bind(this)}><PortalProject project={project} key={project.id} /></div></div>
                  })
                }
              </PortalSlider>
            </div>
            <div className={styles.section}>
              <PortalSlider title={internProject.title}>
                {
                  internProject.projects.map((project) => {
                    return <div onClick={() => this.refs.simpleDialog.show()}><div onClick={this.toggleDetailPanel.bind(this)}><PortalProject project={project} key={project.id} /></div></div>
                  })
                }
              </PortalSlider>
            </div>

            <SkyLight hideOnOverlayClicked ref="simpleDialog" title="Hi, I'm a simple modal">
              Hello, I dont have any callback.
            </SkyLight>
          </div>
        ):(
          <p>Now Loading...</p>
        )}
      </div>
    )
  }
}
