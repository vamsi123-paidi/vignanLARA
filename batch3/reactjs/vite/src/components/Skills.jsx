import React from 'react'

const Skills = ({obj}) => {
  return (
    <div>
        <h2>this is {obj.name} from skills deeply nested component</h2>
        <h3>and my age is {obj.age}</h3>
        <h4>Details :- dno:{obj.details.dno} and city is {obj.details.city}</h4>
    </div>
  )
}

export default Skills