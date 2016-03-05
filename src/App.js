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

  clickProject(project){
    alert('project Clicked!')
  }

  render() {
    let data = this.state.data
    let projectsSections = data && data.sections.slice(3,6)
    let eyecatch = data && data.sections[0]

    let myDialogStyle = {
      width: '90%',
      height: '800px',
      marginTop: '-410px',
      marginLeft: '-46%',
    };

    return(
      <div className={styles.container}>
        {data ? (
          <div>
            {
              projectsSections.map((section,index)=> {
                return(
                  <div className={styles.section} key = {index}>
                    <PortalSlider title={section.title}>
                      {
                        section.projects.map((project) => {
                          return <PortalProject project={project} key={project.id} clickHandler={this.clickProject.bind(this)} />
                        })
                      }
                    </PortalSlider>
                    <a onClick={() => this.refs['projectsDialog' + index].show()}>全て見る</a>
                  </div>
                )
              })
            }
            {
              projectsSections.map((section,index)=> {
                return(
                  <SkyLight hideOnOverlayClicked ref={'projectsDialog' + index} dialogStyles={myDialogStyle} title="" key = {index}>
                    <div>
                      {data ? (
                        <PortalPanel>
                          {section.projects.map((project) => {
                            return <PortalProject project={project} key={project.id} />
                          })}
                        </PortalPanel>
                      ):(<p>Now Loading...</p>)}
                    </div>
                  </SkyLight>
                )
              })
            }
          </div>
        ):(
          <p>Now Loading...</p>
        )}</div>
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
    )
  }
}
