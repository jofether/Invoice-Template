import React from 'react';
import { styles } from '../styles';

export const InvoiceHeader = ({ invoiceNumber, companyName, companyAddress, companyCity }) => (
  <header style={styles.invoiceHeader}>
    <div>
      <h1 style={styles.invoiceTitle}>INVOICE</h1>
      <p style={styles.invoiceNumber}>#{invoiceNumber}</p>
    </div>
    <div>
      <h2 style={styles.company}>{companyName}</h2>
      <p style={styles.companyDetails}>{companyAddress}</p>
      <p style={styles.companyDetails}>{companyCity}</p>
    </div>
  </header>
);
