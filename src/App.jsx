import React from 'react';
import { useInvoiceState } from './hooks/useInvoiceState';
import { styles } from './styles';
import { InvoiceHeader } from './components/InvoiceHeader';
import { BillSection } from './components/BillSection';
import { InvoiceTable } from './components/InvoiceTable';
import { AddItemForm } from './components/AddItemForm';
import { TotalsSection } from './components/TotalsSection';
import { CompanyCard, InvoiceDetailsCard, BillToCard, SummaryCard } from './components/SidebarCards';

function App() {
  const invoice = useInvoiceState();

  return (
    <div style={styles.container}>
      <style>{`
        @media print {
          body { background: white; }
          .controls { display: none !important; }
          .sidebar { display: none !important; }
        }
        button:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
      `}</style>
      
      <div style={styles.wrapper}>
        {/* Header Controls */}
        <div style={styles.header} className="controls">
          <h1 style={styles.title}>Invoice Manager</h1>
          <div style={styles.buttonGroup}>
            <button 
              style={{ ...styles.button, ...styles.buttonSecondary }} 
              onClick={() => invoice.setEditMode(!invoice.editMode)}
            >
              {invoice.editMode ? '✓ Done Editing' : '✎ Edit Mode'}
            </button>
            <button 
              style={styles.button} 
              onClick={invoice.handlePrint}
            >
              🖨 Print
            </button>
            <button 
              style={{ ...styles.button, ...styles.buttonDanger }} 
              onClick={invoice.resetInvoice}
            >
              ↻ Reset
            </button>
          </div>
        </div>

        <div style={{ ...styles.mainContent, gridTemplateColumns: '2fr 1fr' }}>
          {/* Invoice Section */}
          <div style={{ ...styles.invoice, marginBottom: '-80px', paddingBottom: '5px' }}>
            <InvoiceHeader 
              invoiceNumber={invoice.invoiceNumber}
              companyName={invoice.companyName}
              companyAddress={invoice.companyAddress}
              companyCity={invoice.companyCity}
            />
            
            <BillSection 
              billToName={invoice.billToName}
              billToContact={invoice.billToContact}
              billToEmail={invoice.billToEmail}
              invoiceDate={invoice.invoiceDate}
              dueDate={invoice.dueDate}
            />

            <InvoiceTable 
              items={invoice.items}
              editingId={invoice.editingId}
              editMode={invoice.editMode}
              updateItem={invoice.updateItem}
              startEdit={invoice.startEdit}
              finishEdit={invoice.finishEdit}
              removeItem={invoice.removeItem}
            />

            {invoice.editMode && (
              <AddItemForm 
                newItem={invoice.newItem}
                setNewItem={invoice.setNewItem}
                addItem={invoice.addItem}
              />
            )}

            <TotalsSection 
              subtotal={invoice.subtotal}
              tax={invoice.tax}
              taxRate={invoice.taxRate}
              total={invoice.total}
            />

            {/* Footer */}
            <div style={styles.footer}>
              <p>Payment is due within 14 days. Thank you for your business.</p>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ ...styles.sidebar, flexDirection: 'row', gap: '0.25rem', flexWrap: 'wrap' }}>
            <CompanyCard 
              editMode={invoice.editMode}
              companyName={invoice.companyName}
              setCompanyName={invoice.setCompanyName}
              companyAddress={invoice.companyAddress}
              setCompanyAddress={invoice.setCompanyAddress}
              companyCity={invoice.companyCity}
              setCompanyCity={invoice.setCompanyCity}
            />

            <InvoiceDetailsCard 
              editMode={invoice.editMode}
              invoiceNumber={invoice.invoiceNumber}
              setInvoiceNumber={invoice.setInvoiceNumber}
              invoiceDate={invoice.invoiceDate}
              setInvoiceDate={invoice.setInvoiceDate}
              dueDate={invoice.dueDate}
              setDueDate={invoice.setDueDate}
              taxRate={invoice.taxRate}
              setTaxRate={invoice.setTaxRate}
            />

            <BillToCard 
              editMode={invoice.editMode}
              billToName={invoice.billToName}
              setBillToName={invoice.setBillToName}
              billToContact={invoice.billToContact}
              setBillToContact={invoice.setBillToContact}
              billToEmail={invoice.billToEmail}
              setBillToEmail={invoice.setBillToEmail}
            />

            <SummaryCard 
              items={invoice.items}
              subtotal={invoice.subtotal}
              tax={invoice.tax}
              total={invoice.total}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;