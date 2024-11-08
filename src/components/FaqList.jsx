import FaqItem from './FaqItem';
import { useState, useEffect } from 'react';

const FaqList = () => {
  const [faqData, setFaqData] = useState([]);

  const fetchFaqData = async () => {
    const response = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
    const data = await response.json();
    setFaqData(data);
  }

  useEffect(() => {
    fetchFaqData();
  }, []);

  return (
    <div className="faq-list">
      {faqData.map((faq) => (
        <FaqItem key={faq.id} question={faq.title} answer={faq.content} />
      ))}
    </div>
  );
};

export default FaqList;