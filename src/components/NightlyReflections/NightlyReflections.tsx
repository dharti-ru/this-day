import { ReactNode, useState } from 'react';
import './NightlyReflections.css';
import {ReflectionItem} from './ReflectionItem';

interface NightlyReflectionsProps {
  children?: ReactNode;
}

export const NightlyReflections:React.FC<NightlyReflectionsProps> = (props)=>{
    const [successMessage,setSuccessMessage] = useState("");
    const date = new Date();
    function saveReflectionData(){
        setSuccessMessage("🌙 Thank you for reflecting today.")
    }
    return (
        <div className="nightly-reflection">
        {props.children}
        <div className="side-note">{ date.toLocaleString('default', { month: 'long' }) } { date.getDate() }, { date.getFullYear() }</div>
        <br />
        <div className="thank-you-msg">{successMessage}</div>
        <div className="reflection-section">
          <label htmlFor="wentWell">💡 What went well today?</label>
          <textarea id="wentWell" rows={4} placeholder="Write your wins here..." />
          <ReflectionItem note="Celebrate your progress!" />
        </div>
  
        <div className="reflection-section">
          <label htmlFor="learned">📚 What did I learn?</label>
          <textarea id="learned" rows={4} placeholder="Write your lessons here..." />
          <ReflectionItem note="Every day teaches something new." />
        </div>
  
        <div className="reflection-section">
          <label htmlFor="smiled">😊 What made me smile?</label>
          <textarea id="smiled" rows={4} placeholder="Write the moments that made you smile..." />
          <ReflectionItem note="Joy lives in small moments." />
        </div>
  
        <button className="save-btn" onClick={()=>{saveReflectionData()}}>Save Reflection</button>
      </div>);
}