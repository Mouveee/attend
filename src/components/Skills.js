import  React from 'react'

import Grid from '@material-ui/core/Grid'

import SkillsItem from './SkillsItem'


import styles from './Skills.module.css'

import { _skills } from './Skills.ressource'

export default function Skills(props) {
  return (
    <section className={styles.container}>
      <h2 className={styles.caption}><b>SKILLS</b></h2>

      <div className={styles.content}>
        <Grid container spacing={2}>
          {
            _skills.map((skill, i) => {
              // setVisibleItems(visibleItems + 1)

              return (
                <Grid item xl={2} key={'grid' + i}>
                  <SkillsItem
                    key={'item' + i}
                    name={skill.name}
                    skills={skill.skills}
                  >
                  </SkillsItem>
                </Grid>
              )
            })
          }
        </Grid>
      </div> 
    </section>
  )
}


