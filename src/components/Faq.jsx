import FaqContact from "./FaqContact"
import FaqAccordion from "./FaqAccordion"

const Faq = () => {
  return (
    <section className="faq" id="faq">
      <FaqAccordion />
      <FaqContact />
    </section>
  )
}

export default Faq