import React, { Component } from 'react'
import styles from './Banner.css'

export default class Banner extends Component {
    constructor(props) {
        super(props)
    }

    

    render() {
      let data = this.props.banners
        return (
            
<div>
  <div className={styles.section_inner}>
    <div className={styles.project_list_wrapper}>
      <a className={styles.read_more} href={`https://www.wantedly.com/project_lists?student=true`} target="_blank">全て見る</a>
    </div>

  <ul className={styles.project_lists}>

    <li className={styles.banner_wrapper}>
      <a href="test">
        <div className={styles.overlay_wrapper} style={{backgroundImage: 'url(https://dubpy8abnqmkw.cloudfront.net/images/referral_ranking/newgrad-referral-banner.png)',backgroundSize: 'cover'}}>
          <span className={styles.icon_new}>NEW</span>
          <div className={styles.clear}></div>
        </div>
      </a>
    </li>

    <li className={styles.banner_wrapper}>
      <a href= "test">
        <div className={styles.overlay_wrapper}>
          <img src={data.banners[4].image.i_255_70_x2}></img>
          <span className={styles.icon_feature}>特集</span>
          <div className={styles.overlay_gray}></div>
          <div className={styles.overlay_words}>
            <div className={styles.words}>{data.banners[4].banner_title}</div>
          </div>
        </div>
      </a>
    </li>

    <li className={styles.banner_wrapper}>
      <a href="/project_lists/65">
        <div className={styles.overlay_wrapper} style={{backgroundImage: 'url(https://d2v9k5u4v94ulw.cloudfront.net/small_light(dw=236,dh=105,da=s,ds=s,cw=236,ch=105,cc=FFFFFF)/assets/images/101470/original/900b7489-ba38-4f0e-85e4-20388d045958.jpeg?1426762891)'}}>
          <span className={styles.icon_feature}>特集</span>
          <div className={styles.overlay_gray}></div>
          <div className={styles.overlay_words}>
            <div className={styles.words}>好きを仕事に旅編</div>
          </div>
        </div>
      </a>
    </li>

    <li className={styles.banner_wrapper}>
      <a href="/project_lists/48">
        <div className={styles.overlay_wrapper} style={{backgroundImage: 'url(https://d2v9k5u4v94ulw.cloudfront.net/small_light(dw=236,dh=105,da=s,ds=s,cw=236,ch=105,cc=FFFFFF)/assets/images/83269/original/827f14e7-5436-4839-bcb5-457ad472a15e.jpeg?1423828971)'}}>
          <span className={styles.icon_feature}>特集</span>
          <div className={styles.overlay_gray}></div>
          <div className={styles.overlay_words}>
            <div className={styles.words}>海外で働こう</div>
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