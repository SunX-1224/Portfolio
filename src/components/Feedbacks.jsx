import { motion } from "framer-motion"

import { styles } from "../style"
import { SectionWrapper } from "../Wrapper"
import { fadeIn, textVariant } from "../utils/motion"
import { testimonials } from "../constants"


const FeedbackCard = ({i, testimonial, name, designation, company, image})=>(
  <motion.div variants={fadeIn("", "spring", i*0.5, 1)} className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full">
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tacking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="tet-white font-medium text-[16px]"><span className="blue-text-gradient">@</span>{name}</p> 
          <p className="mt-1 text-secondary text-[12px]">{designation} of {company}</p>
        </div>
        <img src={image} alt={`feedback-by-${name}`} className="w-10 h-10 rounded-full object-cover"/>
      </div>
    </div>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>

      <div className={`-mt-20 pb-14 flex flex-wrap ${styles.paddingX} gap-7`}>
        {testimonials.map((tm, i)=>(
          <FeedbackCard key={tm.name} index={i} {...tm} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "")