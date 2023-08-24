import React from 'react'
import TitleBar from './TitleBar'
import Section from './Section'

const Intro = () => {
  return (
    <div className='intro-container'>
<div className='intro-item-container'>
    <div>
        <div>
            <TitleBar page = "Intro"></TitleBar>
        </div>
    </div>
    <div>
        <Section content = "Sophia Kinsey is a budding software engineer. I have always had an interest in tech since I was young, 90% of my childhood photos showcase me glued to a computer screen (not literally)."></Section>
    </div>
    <div>
        <Section content = "However I didn't begin to seriously pursue this interest till July 2023 when I began a software engineering bootcamp, it is there i realised all my wacky design ideas (.e.g. this website) could be realised with web development!"></Section>
    </div>
</div>
    </div>
  )
}

export default Intro