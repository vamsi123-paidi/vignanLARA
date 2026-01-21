import React from 'react'
import Skills from './Skills'

const About = ({obj}) => {
  return (
    <div>About
        <div>
            <h1>this is {obj.name} from about depply nested</h1>
            <h3>my age is {obj.age}</h3>
            <h5>adress details: d-no{obj.adress.dno}</h5>
            <h6>city:{obj.adress.city}</h6>
        </div>
        <Skills/>
    </div>
  )
}

export default About