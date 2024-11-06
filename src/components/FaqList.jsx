import FaqItem from './FaqItem';

const FaqList = () => {
  const faqData = [
    {
      question: 'What is React?', answer: 'bla bla bla vla fkrdr werwetrwe gtwetwrt tgwerygte5ry gegwrghy ghwherher ghwrhwerher hwrherhet herhetaheth heraaerherh herhaetrh gtshsthjtsrj jryjryjryjryjry jhrsjryjyrj jrsryjryjryj' },
    { question: 'What is a component?', answer: 'Components are reusable building blocks in React.' },
    // Add more FAQs as needed
  ];

  return (
    <div className="faq-list">
      {faqData.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FaqList;