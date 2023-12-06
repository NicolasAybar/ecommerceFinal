import React from 'react'
import images from '../productos/imagIndex'
import './Slider.css'
import { motion } from 'framer-motion'

const Slider = () => {
    return (
        <motion.div className='slider-container'>
            <motion.div className='slider' drag='x' dragConstraints={{right: 0, left:-2123}}>  {/** este div con drag se convierte en un componente de motion */}
                {images.map(image => (
                    <motion.div className='item'>
                        <img src={image} alt="" />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Slider
