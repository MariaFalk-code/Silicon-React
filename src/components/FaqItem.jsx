import { useState, useEffect, useRef } from "react";

const FaqItem = ({question, answer}) => {
  
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef(null);

  const toggleActive = () => {
    setIsActive(prev => !prev);
  }

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isActive
        ? `${contentRef.current.scrollHeight}px`
        : '0px';
    }
  }, [isActive]);


  return (
    <div className="faq-item mb-1">
    <div className="question flex-left">
        <h5>{question}</h5>
      <button className="btn btn-chevron faq-chevron" onClick={toggleActive}>
      <i className={`fa-regular ${isActive ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
      </button>
      </div>
      <div className="faq-content" ref={contentRef}>
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default FaqItem;

