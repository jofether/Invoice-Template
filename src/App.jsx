import React, { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([
    { id: 1, desc: "Web Development - Phase 1", hrs: 40, rate: 150, total: 6000 },
    { id: 2, desc: "UI/UX Design Specs", hrs: 12, rate: 120, total: 1440 },
    { id: 3, desc: "Server Configuration", hrs: 5, rate: 160, total: 800 },
  ]);
  
  const [companyName, setCompanyName] = useState('DevStudio Inc.');
  const [companyAddress, setCompanyAddress] = useState('123 Tech Avenue');
  const [companyCity, setCompanyCity] = useState('Silicon Valley, CA 94000');
  const [invoiceNumber, setInvoiceNumber] = useState('INV-2026-001');
  const [billToName, setBillToName] = useState('Acme Corp');
  const [billToContact, setBillToContact] = useState('ATTN: John Doe');
  const [billToEmail, setBillToEmail] = useState('john@acme.com');
  const [taxRate, setTaxRate] = useState(10);
  const [invoiceDate, setInvoiceDate] = useState('Oct 24, 2026');
  const [dueDate, setDueDate] = useState('Nov 07, 2026');
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [newItem, setNewItem] = useState({ desc: '', hrs: '', rate: '' });

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + item.total, 0);
  const tax = (subtotal * taxRate) / 100;
  const total = subtotal + tax;

  // Handle adding items
  const addItem = () => {
    if (newItem.desc && newItem.hrs && newItem.rate) {
      const itemTotal = parseFloat(newItem.hrs) * parseFloat(newItem.rate);
      setItems([...items, {
        id: Math.max(...items.map(i => i.id), 0) + 1,
        desc: newItem.desc,
        hrs: parseFloat(newItem.hrs),
        rate: parseFloat(newItem.rate),
        total: itemTotal,
      }]);
      setNewItem({ desc: '', hrs: '', rate: '' });
    }
  };

  // Handle removing items
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Handle editing items
  const startEdit = (id) => {
    setEditingId(id);
  };

  const updateItem = (id, field, value) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const updated = { ...item, [field]: field === 'desc' ? value : parseFloat(value) || 0 };
        if (field === 'hrs' || field === 'rate') {
          updated.total = updated.hrs * updated.rate;
        }
        return updated;
      }
      return item;
    }));
  };

  const finishEdit = () => {
    setEditingId(null);
  };

  // Print function
  const handlePrint = () => {
    window.print();
  };

  // Reset to defaults
  const resetInvoice = () => {
    setItems([
      { id: 1, desc: "Web Development - Phase 1", hrs: 40, rate: 150, total: 6000 },
      { id: 2, desc: "UI/UX Design Specs", hrs: 12, rate: 120, total: 1440 },
      { id: 3, desc: "Server Configuration", hrs: 5, rate: 160, total: 800 },
    ]);
    setCompanyName('DevStudio Inc.');
    setCompanyAddress('123 Tech Avenue');
    setCompanyCity('Silicon Valley, CA 94000');
    setInvoiceNumber('INV-2026-001');
    setBillToName('Acme Corp');
    setBillToContact('ATTN: John Doe');
    setBillToEmail('john@acme.com');
    setTaxRate(10);
    setInvoiceDate('Oct 24, 2026');
    setDueDate('Nov 07, 2026');
    setEditMode(false);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      padding: '2rem 1rem',
      fontFamily: 'sans-serif',
    },
    wrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '2rem',
      gap: '1rem',
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: '0',
    },
    buttonGroup: {
      display: 'flex',
      gap: '0.75rem',
      flexWrap: 'wrap',
    },
    button: {
      padding: '0.75rem 1.5rem',
      backgroundColor: '#4f46e5',
      color: 'white',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '0.875rem',
      transition: 'all 0.3s ease',
    },
    buttonSecondary: {
      backgroundColor: '#6b7280',
    },
    buttonDanger: {
      backgroundColor: '#ef4444',
    },
    buttonSmall: {
      padding: '0.5rem 1rem',
      fontSize: '0.75rem',
    },
    mainContent: {
      display: 'grid',
      gridTemplateColumns: '1fr 350px',
      gap: '2rem',
      marginBottom: '2rem',
    },
    paper: {
      backgroundColor: 'white',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      padding: '3rem',
      position: 'relative',
      color: '#1f2937',
      borderRadius: '0.5rem',
    },
    invoice: {
      backgroundColor: 'white',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      padding: '3rem',
      position: 'relative',
      color: '#1f2937',
      borderRadius: '0.5rem',
    },
    sidebar: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    sidebarCard: {
      backgroundColor: 'white',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    },
    cardTitle: {
      fontSize: '1rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#111827',
      margin: '0 0 1rem 0',
    },
    input: {
      width: '100%',
      padding: '0.5rem',
      marginBottom: '0.75rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.375rem',
      fontSize: '0.875rem',
      boxSizing: 'border-box',
    },
    label: {
      display: 'block',
      fontSize: '0.75rem',
      fontWeight: 'bold',
      color: '#6b7280',
      marginBottom: '0.25rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    invoiceHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      borderBottom: '2px solid #f3f4f6',
      paddingBottom: '2rem',
      marginBottom: '2rem',
    },
    invoiceHeaderLeft: {},
    invoiceTitle: {
      fontSize: '2.25rem',
      fontWeight: '900',
      color: '#111827',
      letterSpacing: '-0.02em',
      margin: '0',
    },
    invoiceNumber: {
      color: '#9ca3af',
      marginTop: '0.25rem',
      margin: '0.25rem 0 0 0',
    },
    invoiceHeaderRight: {
      textAlign: 'right',
    },
    company: {
      fontWeight: 'bold',
      fontSize: '1.25rem',
      color: '#4f46e5',
      margin: '0',
    },
    companyDetails: {
      fontSize: '0.875rem',
      color: '#9ca3af',
      margin: '0.25rem 0',
    },
    billSection: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '3rem',
    },
    billLabel: {
      fontSize: '0.75rem',
      fontWeight: 'bold',
      color: '#9ca3af',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      margin: '0 0 0.5rem 0',
    },
    billName: {
      fontWeight: 'bold',
      fontSize: '1.125rem',
      margin: '0',
    },
    billDetail: {
      color: '#9ca3af',
      fontSize: '0.875rem',
      margin: '0',
    },
    dateSection: {
      textAlign: 'right',
    },
    dateItem: {
      marginBottom: '0.5rem',
    },
    dateLabel: {
      fontSize: '0.75rem',
      fontWeight: 'bold',
      color: '#9ca3af',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      margin: '0',
    },
    dateValue: {
      fontWeight: '500',
      margin: '0',
    },
    dueDateValue: {
      color: '#ef4444',
    },
    table: {
      width: '100%',
      marginBottom: '3rem',
      borderCollapse: 'collapse',
    },
    thead: {
      backgroundColor: '#f9fafb',
      fontSize: '0.75rem',
      fontWeight: 'bold',
      color: '#6b7280',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      borderTop: '1px solid #f3f4f6',
      borderBottom: '1px solid #f3f4f6',
    },
    th: {
      padding: '0.75rem 1rem',
      textAlign: 'left',
    },
    thRight: {
      textAlign: 'right',
    },
    thCenter: {
      textAlign: 'center',
    },
    tbody: {
      fontSize: '0.875rem',
    },
    tr: {
      borderBottom: '1px solid #f9fafb',
      transition: 'background-color 0.2s ease',
    },
    trEdit: {
      backgroundColor: '#fffbeb',
    },
    td: {
      padding: '1rem',
    },
    tdCenter: {
      textAlign: 'center',
      color: '#9ca3af',
    },
    tdRight: {
      textAlign: 'right',
    },
    tdRightBold: {
      textAlign: 'right',
      fontWeight: 'bold',
      color: '#111827',
    },
    tdDesc: {
      fontWeight: '500',
      color: '#111827',
    },
    tdInput: {
      padding: '0.5rem',
      fontSize: '0.875rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.375rem',
      width: '100%',
      boxSizing: 'border-box',
    },
    actionButtons: {
      display: 'flex',
      gap: '0.5rem',
    },
    totalsBox: {
      width: '16rem',
      marginLeft: 'auto',
    },
    totalRow: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '0.875rem',
      color: '#9ca3af',
      marginBottom: '0.75rem',
    },
    totalRowFinal: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#4f46e5',
      paddingTop: '0.75rem',
      borderTop: '2px solid #f3f4f6',
    },
    footer: {
      position: 'absolute',
      bottom: '3rem',
      left: '3rem',
      right: '3rem',
      textAlign: 'center',
      fontSize: '0.75rem',
      color: '#9ca3af',
    },
    addItemForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
    },
    formInput: {
      padding: '0.5rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.375rem',
      fontSize: '0.875rem',
    },
    buttonHover: {
      ':hover': {
        opacity: '0.9',
      }
    },
    printStyle: {
      '@media print': {
        body: {
          backgroundColor: 'white',
        }
      }
    },
    noWrap: {
      whiteSpace: 'nowrap',
    },
    editable: {
      cursor: 'pointer',
      borderBottom: '1px dashed #d1d5db',
      padding: '0.25rem 0.5rem',
      borderRadius: '0.25rem',
      transition: 'background-color 0.2s ease',
    },
  };

  return (
    <div style={styles.container}>
      <style>{`
        @media print {
          body { background: white; }
          .controls { display: none !important; }
          .sidebar { display: none !important; }
          .invoice { box-shadow: none !important; }
        }
        button:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
      `}</style>
      
      <div style={styles.wrapper}>
        {/* Top Controls */}
        <div style={styles.header} className="controls">
          <h1 style={styles.title}>Invoice Manager</h1>
          <div style={styles.buttonGroup}>
            <button 
              style={{...styles.button, ...styles.buttonSecondary}} 
              onClick={() => setEditMode(!editMode)}
            >
              {editMode ? '✓ Done Editing' : '✎ Edit Mode'}
            </button>
            <button 
              style={styles.button} 
              onClick={handlePrint}
            >
              🖨 Print
            </button>
            <button 
              style={{...styles.button, ...styles.buttonDanger}} 
              onClick={resetInvoice}
            >
              ↻ Reset
            </button>
          </div>
        </div>

        <div style={styles.mainContent}>
          {/* Invoice */}
          <div style={styles.invoice}>
            {/* HEADER */}
            <header style={styles.invoiceHeader}>
              <div style={styles.invoiceHeaderLeft}>
                <h1 style={styles.invoiceTitle}>INVOICE</h1>
                <p style={styles.invoiceNumber}>#{invoiceNumber}</p>
              </div>
              <div style={styles.invoiceHeaderRight}>
                <h2 style={styles.company}>{companyName}</h2>
                <p style={styles.companyDetails}>{companyAddress}</p>
                <p style={styles.companyDetails}>{companyCity}</p>
              </div>
            </header>

            {/* BILL TO */}
            <div style={styles.billSection}>
              <div>
                <p style={styles.billLabel}>Bill To</p>
                <p style={styles.billName}>{billToName}</p>
                <p style={styles.billDetail}>{billToContact}</p>
                <p style={styles.billDetail}>{billToEmail}</p>
              </div>
              <div style={styles.dateSection}>
                <div style={styles.dateItem}>
                  <p style={styles.dateLabel}>Date</p>
                  <p style={styles.dateValue}>{invoiceDate}</p>
                </div>
                <div style={styles.dateItem}>
                  <p style={styles.dateLabel}>Due Date</p>
                  <p style={{...styles.dateValue, ...styles.dueDateValue}}>{dueDate}</p>
                </div>
              </div>
            </div>

            {/* TABLE */}
            <table style={styles.table}>
              <thead style={styles.thead}>
                <tr>
                  <th style={styles.th}>Description</th>
                  <th style={{...styles.th, ...styles.thCenter}}>Hours</th>
                  <th style={{...styles.th, ...styles.thRight}}>Rate</th>
                  <th style={{...styles.th, ...styles.thRight}}>Amount</th>
                  {editMode && <th style={{...styles.th, ...styles.thCenter}}>Action</th>}
                </tr>
              </thead>
              <tbody style={styles.tbody}>
                {items.map((item) => (
                  <tr key={item.id} style={{...styles.tr, ...(editingId === item.id ? styles.trEdit : {})}}>
                    <td style={{...styles.td, ...styles.tdDesc}}>
                      {editingId === item.id ? (
                        <input 
                          type="text" 
                          value={item.desc}
                          onChange={(e) => updateItem(item.id, 'desc', e.target.value)}
                          style={styles.tdInput}
                        />
                      ) : item.desc}
                    </td>
                    <td style={{...styles.td, ...styles.tdCenter}}>
                      {editingId === item.id ? (
                        <input 
                          type="number" 
                          value={item.hrs}
                          onChange={(e) => updateItem(item.id, 'hrs', e.target.value)}
                          style={{...styles.tdInput, textAlign: 'center'}}
                        />
                      ) : item.hrs}
                    </td>
                    <td style={{...styles.td, ...styles.tdRight}}>
                      {editingId === item.id ? (
                        <input 
                          type="number" 
                          value={item.rate}
                          onChange={(e) => updateItem(item.id, 'rate', e.target.value)}
                          style={{...styles.tdInput, textAlign: 'right'}}
                        />
                      ) : `$${item.rate}`}
                    </td>
                    <td style={{...styles.td, ...styles.tdRightBold}}>
                      ${item.total.toLocaleString()}
                    </td>
                    {editMode && (
                      <td style={{...styles.td, ...styles.tdCenter}}>
                        {editingId === item.id ? (
                          <button 
                            style={{...styles.button, ...styles.buttonSmall}} 
                            onClick={finishEdit}
                          >
                            ✓
                          </button>
                        ) : (
                          <button 
                            style={{...styles.button, ...styles.buttonSmall, ...styles.buttonSecondary}} 
                            onClick={() => startEdit(item.id)}
                          >
                            ✎
                          </button>
                        )}
                        <button 
                          style={{...styles.button, ...styles.buttonSmall, ...styles.buttonDanger, marginLeft: '0.25rem'}} 
                          onClick={() => removeItem(item.id)}
                        >
                          ✕
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>

            {editMode && (
              <div style={{marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', border: '1px solid #e5e7eb'}}>
                <p style={{fontSize: '0.875rem', fontWeight: 'bold', color: '#6b7280', margin: '0 0 1rem 0', textTransform: 'uppercase'}}>Add New Item</p>
                <div style={styles.addItemForm}>
                  <input 
                    type="text" 
                    placeholder="Description"
                    value={newItem.desc}
                    onChange={(e) => setNewItem({...newItem, desc: e.target.value})}
                    style={styles.formInput}
                  />
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem'}}>
                    <input 
                      type="number" 
                      placeholder="Hours"
                      value={newItem.hrs}
                      onChange={(e) => setNewItem({...newItem, hrs: e.target.value})}
                      style={styles.formInput}
                    />
                    <input 
                      type="number" 
                      placeholder="Rate"
                      value={newItem.rate}
                      onChange={(e) => setNewItem({...newItem, rate: e.target.value})}
                      style={styles.formInput}
                    />
                  </div>
                  <button 
                    style={styles.button} 
                    onClick={addItem}
                  >
                    + Add Item
                  </button>
                </div>
              </div>
            )}

            {/* TOTALS */}
            <div style={styles.totalsBox}>
              <div style={styles.totalRow}>
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
              </div>
              <div style={styles.totalRow}>
                <span>Tax ({taxRate}%)</span>
                <span>${tax.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
              </div>
              <div style={styles.totalRowFinal}>
                <span>Total</span>
                <span>${total.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
              </div>
            </div>

            {/* FOOTER */}
            <div style={styles.footer}>
              <p>Payment is due within 14 days. Thank you for your business.</p>
            </div>
          </div>

          {/* Sidebar */}
          <div style={styles.sidebar} className="controls">
            {/* Company Info */}
            <div style={styles.sidebarCard}>
              <h3 style={styles.cardTitle}>Company</h3>
              <label style={styles.label}>Company Name</label>
              <input 
                type="text" 
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                style={styles.input}
              />
              <label style={styles.label}>Address</label>
              <input 
                type="text" 
                value={companyAddress}
                onChange={(e) => setCompanyAddress(e.target.value)}
                style={styles.input}
              />
              <label style={styles.label}>City/State/ZIP</label>
              <input 
                type="text" 
                value={companyCity}
                onChange={(e) => setCompanyCity(e.target.value)}
                style={styles.input}
              />
            </div>

            {/* Invoice Details */}
            <div style={styles.sidebarCard}>
              <h3 style={styles.cardTitle}>Invoice</h3>
              <label style={styles.label}>Invoice #</label>
              <input 
                type="text" 
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
                style={styles.input}
              />
              <label style={styles.label}>Date</label>
              <input 
                type="text" 
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
                style={styles.input}
              />
              <label style={styles.label}>Due Date</label>
              <input 
                type="text" 
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                style={styles.input}
              />
              <label style={styles.label}>Tax Rate (%)</label>
              <input 
                type="number" 
                value={taxRate}
                onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
                style={styles.input}
              />
            </div>

            {/* Bill To */}
            <div style={styles.sidebarCard}>
              <h3 style={styles.cardTitle}>Bill To</h3>
              <label style={styles.label}>Client Name</label>
              <input 
                type="text" 
                value={billToName}
                onChange={(e) => setBillToName(e.target.value)}
                style={styles.input}
              />
              <label style={styles.label}>Contact</label>
              <input 
                type="text" 
                value={billToContact}
                onChange={(e) => setBillToContact(e.target.value)}
                style={styles.input}
              />
              <label style={styles.label}>Email</label>
              <input 
                type="text" 
                value={billToEmail}
                onChange={(e) => setBillToEmail(e.target.value)}
                style={styles.input}
              />
            </div>

            {/* Summary */}
            <div style={styles.sidebarCard}>
              <h3 style={styles.cardTitle}>Summary</h3>
              <div style={{fontSize: '0.875rem', lineHeight: '1.75'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                  <span>Items:</span>
                  <strong>{items.length}</strong>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                  <span>Subtotal:</span>
                  <strong>${subtotal.toLocaleString('en-US', {minimumFractionDigits: 2})}</strong>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                  <span>Tax:</span>
                  <strong>${tax.toLocaleString('en-US', {minimumFractionDigits: 2})}</strong>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid #e5e7eb', marginTop: '0.75rem', fontSize: '1rem', color: '#4f46e5'}}>
                  <span>Total:</span>
                  <strong>${total.toLocaleString('en-US', {minimumFractionDigits: 2})}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
