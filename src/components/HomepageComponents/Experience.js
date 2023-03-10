import React,{useContext} from 'react';
import { DataContext } from '../context/GlobalContext';

export default function Experience() {

  const state = useContext(DataContext);
  const [experience] = state.experience;
  return (
    <div className='main-container'>
      <h2 className='title'>
        Experience
      </h2>
      <div className='experience'>
        <div className="experience-center">

          
          {experience.map(item=>(
            <div className="single-experience" key={item._id}>
            <p>{item.experience} </p>
          </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}
