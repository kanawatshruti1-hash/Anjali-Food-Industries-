import { useState } from 'react'
import { X, MessageCircle, CheckCircle2 } from 'lucide-react'
import { siteConfig } from '../data/site'
import { whatsappUrl } from './WhatsAppButton'

export default function EnquiryModal({ open, onClose, defaultProduct = '' }) {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', business: '', phone: '', city: '', product: defaultProduct, quantity: '', message: '' })

  if (!open) return null

  const update = (key) => (e) => setForm(prev => ({ ...prev, [key]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim() || !form.product.trim()) return
    const text = `Hello ${siteConfig.businessName},\n\nI would like to enquire about bulk food products.\n\nName: ${form.name}\nBusiness: ${form.business || 'Not specified'}\nPhone: ${form.phone}\nCity: ${form.city || 'Not specified'}\nProducts Required: ${form.product}\nApprox. Quantity: ${form.quantity || 'Not specified'}\nMessage: ${form.message || 'Please share available pricing and packaging details.'}\n\nThank you.`
    window.open(whatsappUrl(text), '_blank', 'noopener,noreferrer')
    setSent(true)
    setTimeout(() => { setSent(false); onClose() }, 1400)
  }

  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="enquiry-title">
        <button className="modal-close" onClick={onClose} aria-label="Close"><X size={20} /></button>
        {sent ? (
          <div className="success-state">
            <CheckCircle2 size={48} />
            <h3>Opening WhatsApp</h3>
            <p>Your enquiry has been prepared with Anjali Food Industries.</p>
          </div>
        ) : (
          <>
            <div className="modal-head">
              <span className="eyebrow">Bulk enquiry</span>
              <h3 id="enquiry-title">Tell us what you need</h3>
              <p>Share a few details and continue directly to WhatsApp.</p>
            </div>
            <form className="enquiry-form" onSubmit={submit}>
              <div className="form-grid">
                <label><span>Full Name *</span><input value={form.name} onChange={update('name')} required /></label>
                <label><span>Business Name</span><input value={form.business} onChange={update('business')} /></label>
                <label><span>Phone Number *</span><input value={form.phone} onChange={update('phone')} required inputMode="tel" /></label>
                <label><span>City</span><input value={form.city} onChange={update('city')} /></label>
                <label className="full"><span>Product / Products Required *</span><input value={form.product} onChange={update('product')} required /></label>
                <label><span>Approx. Quantity</span><input value={form.quantity} onChange={update('quantity')} placeholder="e.g. 500 kg" /></label>
                <label><span>Message</span><textarea value={form.message} onChange={update('message')} placeholder="Tell us about your requirement…" /></label>
              </div>
              <button className="btn btn-wa submit-btn" type="submit"><MessageCircle size={18} /> Send Enquiry on WhatsApp</button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
