import React from 'react'
import TitleBar from './TitleBar'
import Section from './Section'

const IntroPg2 = () => {
  return (
    <div className='intro-container2'>

          <div>
              <TitleBar id= 'intro2-1' page='Hobbies'></TitleBar>
          </div>
          <div className="hobbieName">
            <Section content='hobbie Name'></Section>
          </div>
          <div className='intro2-carousel'>
              <div className="leftArrow"></div>
              <div className="hobbieRating">
                <img src="/PinkSolarSystem.png" alt="1" />
                <img src="/PinkSolarSystem.png" alt="2" />
                <img src="/PinkSolarSystem.png" alt="3" />
              </div>
              <div className="rightArrow"></div>
          </div>

          <div className='introPlanet'>
            <img src="/PurpleSolarSystem.png" alt="anchor planet" />
          </div>


    </div>
  )
}

export default IntroPg2
