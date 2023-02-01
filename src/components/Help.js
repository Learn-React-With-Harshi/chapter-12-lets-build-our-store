import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { FAQ } from "../config";

const Section = ({id, title, description, isVisible, setIsVisible }) => {
  
  return (
    
    <div className="flex flex-col shadow rounded-md p-2.5 m-2.5">
      <div className="flex justify-between items-center"> 
        <h3 className="font-semibold text-lg text-title">{title}</h3>
        {
        isVisible ? (
        <SlArrowUp onClick={() => setIsVisible({id : id, status : false})} className="cursor-pointer" />
      ) : (
        <SlArrowDown onClick={() => setIsVisible({id : id, status : true})} className="cursor-pointer" />
      )}
      </div>
      {isVisible && <p className="text-bio text-base">{description}</p>}
    </div>
  );
};

const Help = () => {
  const [visibleSection, setIsvisibleSection] = useState(
    {
      id : 1,
      status : false
    }); /* Initial Dummy value */

  return (
    <div className="container">
      <div className="card-container">
      <h1 className="card-container-title pb-5"> FAQ</h1>
      {FAQ.map((question) => {
        return (
          <Section key={question.id} id={question.id} title={question.title} description={question.description}
          isVisible={visibleSection.status && visibleSection.id === question.id }
          setIsVisible={(obj) => setIsvisibleSection(obj)}
        />
  
        )
      }
      )}
      </div>
    </div>
  );
};

export default Help;
