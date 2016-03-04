import React, { Component } from 'react'
import styles from './Banner.css'

export default class Banner extends Component {
    constructor(props) {
        super(props)
    }

    

    render() {
        return (
            
<div>
  <div className='section-inner banner-section'>
    <div className='project-list-wrapper'>
      <a className="read-more" href="test">全て見る</a>
    </div>

  <ul className='project-lists'>

    <li className='banner-wrapper'>
      <a href="test">
        <div className='overlay-wrapper clear' style="background-image: url('https://dubpy8abnqmkw.cloudfront.net/images/referral_ranking/newgrad-referral-banner.png'); background-size: cover;">
          <span className='icon-new'>NEW</span>
          <div className='clear'></div>
        </div>
      </a>
    </li>

    <li className='banner-wrapper'>
      <a href="test">
        <div className='overlay-wrapper' style="background-image: url('https://d2v9k5u4v94ulw.cloudfront.net/small_light(dw=236,dh=105,da=s,ds=s,cw=236,ch=105,cc=FFFFFF)/assets/images/105340/original/ca3cfbd9-debb-43f1-9c67-98168b65d034.jpeg?1427369297')">
          <span className='icon-feature'>特集</span>
          <div className='overlay-gray'></div>
          <div className='overlay-words'>
            <div className='words'>ゴチ・訪問</div>
          </div>
        </div>
      </a>
    </li>

    <li className='banner-wrapper'>
      <a href="/project_lists/65" wt-ga="&#39;newgrad_portal&#39;, &#39;banner&#39;, &#39;https://www.wantedly.com/project_lists/65&#39;">
        <div className='overlay-wrapper' style="background-image: url('https://d2v9k5u4v94ulw.cloudfront.net/small_light(dw=236,dh=105,da=s,ds=s,cw=236,ch=105,cc=FFFFFF)/assets/images/101470/original/900b7489-ba38-4f0e-85e4-20388d045958.jpeg?1426762891')">
          <span className='icon-feature'>特集</span>
          <div className='overlay-gray'></div>
          <div className='overlay-words'>
            <div className='words'>好きを仕事に\n旅編</div>
          </div>
        </div>
      </a>
    </li>

    <li className='banner-wrapper'>
      <a href="/project_lists/48" wt-ga="&#39;newgrad_portal&#39;, &#39;banner&#39;, &#39;https://www.wantedly.com/project_lists/48&#39;">
        <div className='overlay-wrapper' style="background-image: url('https://d2v9k5u4v94ulw.cloudfront.net/small_light(dw=236,dh=105,da=s,ds=s,cw=236,ch=105,cc=FFFFFF)/assets/images/83269/original/827f14e7-5436-4839-bcb5-457ad472a15e.jpeg?1423828971')">
          <span className='icon-feature'>特集</span>
          <div className='overlay-gray'></div>
          <div className='overlay-words'>
            <div className='words'>海外で働こう</div>
          </div>
        </div>
      </a>
    </li>
  </ul>
</div>

</div>

        )
    }
}