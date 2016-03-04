import React, { Component } from 'react'

import PortalProject from './PortalProject'
import PortalSlider from './PortalSlider'
import PortalProjectList from './PortalProjectList'
import PortalEmployeeInterview from './PortalEmployeeInterview'
import PortalPanel from './PortalPanel'
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
    let eyecatch
    let project_list
    let interview
    let popularProject

    if(this.state.data) {
      eyecatch = this.state.data.data.sections[0]
      project_list = eyecatch.eyecatches[0].project_list
      interview = eyecatch.eyecatches[1].employee_interview
      popularProject = this.state.data.data.sections[3]
    }
    // 見た目の定義
    /*return(i
      <div>
        {this.state.data ? (
            <PortalSlider>
              {popularProject.projects.map((project) => {
                return <PortalProject project={project} key={project.id} />
              })}
            </PortalSlider>):(<p>Now Loading...</p>)}
    let data = this.state.data
    let popularProject = data && data.sections[3]
    let newgradProject = data && data.sections[4]
    let internProject = data && data.sections[5]
    // 見た目の定義
    /*return(
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
        )
      </div>
    )*/
    /*return(
      <div>
        {this.state.data ? (
            <PortalProjectList project_list={eyecatch.eyecatches[0].project_list} key={project_list.id}>
            </PortalProjectList>
            ):(<p>Now Loading...</p>)}
      </div>
    )*/
    /*return (
        <div>
          {this.state.data ? (
              <PortalEmployeeInterview interview={interview} key={interview.id}>
              </PortalEmployeeInterview>
              ):(<p>Now Loading...</p>)}
          </div>
        )*/
    return(
      <div>
        {this.state.data ? (
            <PortalPanel>
              {popularProject.projects.map((project) => {
                return <PortalProject project={project} key={project.id} />
              })}
            </PortalPanel>):(<p>Now Loading...</p>)}
      </div>
    )
  }
}
