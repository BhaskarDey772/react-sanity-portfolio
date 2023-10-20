import { useEffect, useState } from 'react'
import "./index.scss"
import { motion } from "framer-motion"
import { client, urlFor } from "../../client"
import AppWrapper from "../../wrapper/AppWrapper"
import { Tooltip as ReactTooltip } from 'react-tooltip'
const Skills = () => {
  const [experiences, setExperiences] = useState([])
  const [skills, setSkills] = useState([])


  useEffect(() => {
    const query = '*[_type=="experiences"]'
    const skillsQuery = '*[_type=="skills"]'


    client.fetch(query).then((data) => {
      setExperiences(data)
    })
    client.fetch(skillsQuery).then((data) => {
      setSkills(data)
    })

  }, [])

  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>

        </motion.div>
      </div>
    </>
  )
}

export default Skills