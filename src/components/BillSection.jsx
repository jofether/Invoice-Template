import React from 'react';
import { styles } from '../styles';

export const BillSection = ({ billToName, billToContact, billToEmail, invoiceDate, dueDate }) => (
  <div style={styles.billSection}>
    <div>
      <p style={styles.billLabel}>Bill To</p>
      <p style={styles.billName}>{billToName}</p>
      <p style={styles.billDetail}>{billToContact}</p>
      <p style={styles.billDetail}>{billToEmail}</p>
    </div>
    <div style={{ textAlign: 'right', marginTop: '-60px', paddingTop: '40px', zIndex: '1', position: 'relative' }}> {/* [BUG - SPACING] Negative margin pulls dates up and overlaps Bill To section. [FIX] marginTop: '0' */}
      <div style={{ marginBottom: '1.5rem' }}>
        <p style={styles.billLabel}>Date</p>
        <p style={{ fontWeight: '500', margin: '0' }}>{invoiceDate}</p>
      </div>
      <div>
        <p style={styles.billLabel}>Due Date</p>
        <p style={{ fontWeight: '500', margin: '0', color: '#ef4444' }}>{dueDate}</p>
      </div>
    </div>
  </div>
);
