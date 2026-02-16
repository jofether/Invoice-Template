import React from 'react';
import { styles } from '../styles';

export const CompanyCard = ({ editMode, companyName, setCompanyName, companyAddress, setCompanyAddress, companyCity, setCompanyCity }) => (
  <div style={{ ...styles.sidebarCard, marginRight: '-150px', overflow: 'hidden', borderRadius: 0 }}> {/* [BUG - SPACING] Negative right margin cuts off card content. [BUG - LAYERS] Removed border radius. [FIX] Remove marginRight and restore borderRadius: '0.5rem' */}
    <h3 style={styles.cardTitle}>🏢 Company</h3>
    {editMode ? (
      <div>
        <label style={styles.label}>Name</label>
        <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} style={styles.input} />
        <label style={styles.label}>Address</label>
        <input value={companyAddress} onChange={(e) => setCompanyAddress(e.target.value)} style={styles.input} />
        <label style={styles.label}>City/State/ZIP</label>
        <input value={companyCity} onChange={(e) => setCompanyCity(e.target.value)} style={styles.input} />
      </div>
    ) : (
      <div style={{ fontSize: '0.875rem', color: '#9ca3af', lineHeight: '1.6' }}>
        <p style={{ fontWeight: 'bold', color: '#1f2937', margin: '0 0 0.5rem 0' }}>{companyName}</p>
        <p style={{ margin: '0' }}>{companyAddress}</p>
        <p style={{ margin: '0' }}>{companyCity}</p>
      </div>
    )}
  </div>
);

export const InvoiceDetailsCard = ({ editMode, invoiceNumber, setInvoiceNumber, invoiceDate, setInvoiceDate, dueDate, setDueDate, taxRate, setTaxRate }) => (
  <div style={styles.sidebarCard}>
    <h3 style={styles.cardTitle}>📋 Invoice Details</h3>
    {editMode ? (
      <div>
        <label style={styles.label}>Invoice #</label>
        <input value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} style={styles.input} />
        <label style={styles.label}>Date</label>
        <input value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} style={styles.input} />
        <label style={styles.label}>Due Date</label>
        <input value={dueDate} onChange={(e) => setDueDate(e.target.value)} style={styles.input} />
        <label style={styles.label}>Tax Rate (%)</label>
        <input type="number" value={taxRate} onChange={(e) => setTaxRate(parseFloat(e.target.value))} style={styles.input} />
      </div>
    ) : (
      <div style={{ fontSize: '0.875rem', color: '#9ca3af', lineHeight: '1.8' }}>
        <div><span style={{ fontWeight: 'bold' }}>Invoice #:</span> {invoiceNumber}</div>
        <div><span style={{ fontWeight: 'bold' }}>Date:</span> {invoiceDate}</div>
        <div><span style={{ fontWeight: 'bold' }}>Due:</span> <span style={{ color: '#ef4444' }}>{dueDate}</span></div>
        <div><span style={{ fontWeight: 'bold' }}>Tax:</span> {taxRate}%</div>
      </div>
    )}
  </div>
);

export const BillToCard = ({ editMode, billToName, setBillToName, billToContact, setBillToContact, billToEmail, setBillToEmail }) => (
  <div style={styles.sidebarCard}>
    <h3 style={styles.cardTitle}>👤 Bill To</h3>
    {editMode ? (
      <div>
        <label style={styles.label}>Client Name</label>
        <input value={billToName} onChange={(e) => setBillToName(e.target.value)} style={styles.input} />
        <label style={styles.label}>Contact</label>
        <input value={billToContact} onChange={(e) => setBillToContact(e.target.value)} style={styles.input} />
        <label style={styles.label}>Email</label>
        <input value={billToEmail} onChange={(e) => setBillToEmail(e.target.value)} style={styles.input} />
      </div>
    ) : (
      <div style={{ fontSize: '0.875rem', color: '#9ca3af', lineHeight: '1.8' }}>
        <p style={{ fontWeight: 'bold', color: '#1f2937', margin: '0 0 0.5rem 0' }}>{billToName}</p>
        <p style={{ margin: '0' }}>{billToContact}</p>
        <p style={{ margin: '0', color: '#4f46e5' }}>{billToEmail}</p>
      </div>
    )}
  </div>
);

export const SummaryCard = ({ items, subtotal, tax, total }) => (
  <div style={styles.sidebarCard}>
    <h3 style={styles.cardTitle}>📊 Summary</h3>
    <div style={{ fontSize: '0.875rem', lineHeight: '1.8' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid #e5e7eb' }}>
        <span style={{ color: '#6b7280' }}>Items:</span>
        <strong style={{ color: '#1f2937' }}>{items.length}</strong>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid #e5e7eb' }}>
        <span style={{ color: '#6b7280' }}>Subtotal:</span>
        <strong style={{ color: '#1f2937' }}>${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</strong>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid #e5e7eb' }}>
        <span style={{ color: '#6b7280' }}>Tax:</span>
        <strong style={{ color: '#1f2937' }}>${tax.toLocaleString('en-US', { minimumFractionDigits: 2 })}</strong>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.75rem', color: '#4f46e5' }}>
        <span style={{ fontWeight: 'bold' }}>Total:</span>
        <strong>${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}</strong>
      </div>
    </div>
  </div>
);
