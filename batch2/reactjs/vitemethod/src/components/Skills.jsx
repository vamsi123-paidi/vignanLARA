import React from 'react'

const Skills = ({obj}) => {
  return (
    <div>Skills
        <div>
            <h2>this is {obj.name} from skills component</h2>
            <h3>and my age is {obj.age}</h3>
            <h4>details are doorno is {obj.details.dno} and city is {obj.details.city}</h4>
        </div>

    </div>
  )
}

export default Skills