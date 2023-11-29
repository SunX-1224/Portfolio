import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../style"
import { github } from "../assets"
import { SectionWrapper } from "../Wrapper"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"


const ProjectCard = ({ index, project }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 1)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }} className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
        <div className="relative w-full h-[230px]">
          <img src={project.image} alt={project.name} className="w-full h-full object-cover rounded-2xl" />

          <div className={`absolute inset-0 flex ${project.view_link ? "justify-between" : "justify-end"} m-3 card-img_hover`}>
            {project.view_link &&
              <div onClick={() => window.open(project.view_link, "_blank")} className="w-32 rounded-2xl h-fit cursor-pointer">
                <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' className="object-contain "/>
              </div>}
            <div onClick={() => window.open(project.source_code_link, "_blank")} className="black-gradient w-12 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white fot-bold text-[24px]">{project.name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{project.description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag, i) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
        ))}</div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Work</p>
        <h2 className={`${styles.sectionHeadText} `}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.2, 1)} className="mt-3 text-secondary text-[17-px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experiences through my work. Each project is briefly described with links to code repos. They reflect my abilities to solve complex problems and managing the projects.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, i) => (
          <ProjectCard key={`project-${i}`} index={i} project={project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")