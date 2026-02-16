import React from 'react';
import { styles } from '../styles';

export const TotalsSection = ({ subtotal, tax, taxRate, total }) => (
  <div style={styles.totalsBox}>
    <div style={styles.totalRow}>
      <span>Subtotal</span>
      <span>${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
    </div>
    <div style={styles.totalRow}>
      <span>Tax ({taxRate}%)</span>
      <span>${tax.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
    </div>
    <div style={styles.totalRowFinal}>
      <span>Total</span>
      <span>${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
    </div>
  </div>
);
