import React, { useState } from "react";
import "./accordion.scss";

const arr = [
  {
    title: " more on-demand streaming services",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum cum sint, ea consequatur voluptatem possimus blanditiis adipisci incidunt doloribus neque asperiores, quasi similique quam eius iure, quia nesciunt. Cum nesciunt perspiciatis laudantium quas adipisci culpa architecto provident, ratione, nam repudiandae eveniet facilis quibusdam iusto, dicta fuga magni molestiae? Doloribus, ullam?",
  },
  {
    title: " more on-demand streaming services",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum cum sint, ea consequatur voluptatem possimus blanditiis adipisci incidunt doloribus neque asperiores, quasi similique quam eius iure, quia nesciunt. Cum nesciunt perspiciatis laudantium quas adipisci culpa architecto provident, ratione, nam repudiandae eveniet facilis quibusdam iusto, dicta fuga magni molestiae? Doloribus, ullam?",
  },
  {
    title: " more on-demand streaming services",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum cum sint, ea consequatur voluptatem possimus blanditiis adipisci incidunt doloribus neque asperiores, quasi similique quam eius iure, quia nesciunt. Cum nesciunt perspiciatis laudantium quas adipisci culpa architecto provident, ratione, nam repudiandae eveniet facilis quibusdam iusto, dicta fuga magni molestiae? Doloribus, ullam?",
  },
  {
    title: " more on-demand streaming services",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum cum sint, ea consequatur voluptatem possimus blanditiis adipisci incidunt doloribus neque asperiores, quasi similique quam eius iure, quia nesciunt. Cum nesciunt perspiciatis laudantium quas adipisci culpa architecto provident, ratione, nam repudiandae eveniet facilis quibusdam iusto, dicta fuga magni molestiae? Doloribus, ullam?",
  },
];

const Accordion = () => {
  const [accordion, setAccordion] = useState(null);

    let accordionHandler = (i) => {
        if (accordion === i) {
           return setAccordion(null)
        }

        setAccordion(i)
    }

  return (
    <div className="accordion">
      {arr.map((item, index) => (
        <div className="item">
          <h3 className="title" onClick={()=>accordionHandler(index)}>
            {item.title} <span>{accordion===index ? "-" : "+"}</span>
          </h3>
          <p className={accordion === index?"content show":"content"}>
            {item.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
