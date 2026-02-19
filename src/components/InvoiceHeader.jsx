import React from 'react';
import { styles } from '../styles';

export const InvoiceHeader = ({ invoiceNumber, companyName, companyAddress, companyCity }) => (
  <header style={{ ...styles.invoiceHeader, marginBottom: '-40px', paddingBottom: '10px' }}>
    <div>
      <h1 style={{ ...styles.invoiceTitle, color: '#f3f4f6', opacity: 0.7 }}>INVOICE</h1>
      <p style={styles.invoiceNumber}>#{invoiceNumber}</p>
    </div>
    <div>
      <h2 style={styles.company}>{companyName}</h2>
      <p style={styles.companyDetails}>{companyAddress}</p>
      <p style={styles.companyDetails}>{companyCity}</p>
    </div>
  </header>
);
