import { useState } from 'react'
import Navbar from './components/Navbar'
import WhatsAppButton from './components/WhatsAppButton'
import EnquiryModal from './components/EnquiryModal'
import Home from './pages/Home'

export default function App() {
  const [quote, setQuote] = useState({ open: false, product: '' })
  const openQuote = (product = '') => setQuote({ open: true, product })
  return (
    <div>
      <Navbar onQuote={() => openQuote('')} />
      <Home onQuote={openQuote} />
      <WhatsAppButton />
      <EnquiryModal open={quote.open} defaultProduct={quote.product} onClose={() => setQuote({ open: false, product: '' })} />
    </div>
  )
}
