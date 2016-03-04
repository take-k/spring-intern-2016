import React, { Component } from 'react'
import PortalProject from './PortalProject'
import PortalSlider from './PortalSlider'
import PortalProjectList from './PortalProjectList'

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
      data: json
    })
  }

  render() {
    let eyecatch
    let project_list
    let popularProject

    if(this.state.data) {
      eyecatch = this.state.data.data.sections[0]
      project_list = eyecatch.eyecatches[0].project_list
      popularProject = this.state.data.data.sections[3]

    }
    // 見た目の定義
    /*return(
      <div>
        {this.state.data ? (
            <PortalSlider>
              {popularProject.projects.map((project) => {
                return <PortalProject project={project} key={project.id} />
              })}
            </PortalSlider>):(<p>Now Loading...</p>)}
      </div>
    )*/
    return(
      <div>
        {this.state.data ? (
            <PortalProjectList project_list={eyecatch.eyecatches[0].project_list} key={project_list.id}>
            </PortalProjectList>
            ):(<p>Now Loading...</p>)}
      </div>
    )
  }
}
