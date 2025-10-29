import ContactBanner from '@/components/contacts/ContactBanner'
import ContactCard from '@/components/contacts/ContactCard'
import ContactForm from '@/components/contacts/ContactForm'
import FaqSection from '@/components/contacts/FaqSections'
import Maps from '@/components/contacts/Maps'

function Contacts() {
  return (
    <div>
        <ContactBanner />
        <ContactCard />
        <ContactForm />
        <Maps />
        <FaqSection />
    </div>
  )
}

export default Contacts