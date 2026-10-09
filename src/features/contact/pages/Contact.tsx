import "../../../styles/contact/contact.css"
import ContactForm from "../Components/ContactForm"
import ContactInfo from "../Components/ContactInfo"

const Contact = () => {
  return (
    <section className="container contact-page">
      <ContactInfo />
      <ContactForm />
    </section>
  )
}

export default Contact