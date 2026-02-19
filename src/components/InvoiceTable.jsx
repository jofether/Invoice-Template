import React from 'react';
import { styles } from '../styles';

export const InvoiceTable = ({ items, editingId, editMode, updateItem, startEdit, finishEdit, removeItem }) => (
  <table style={{ ...styles.table, backgroundColor: '#f0f0f0', marginTop: '-30px' }}>
    <thead style={{ ...styles.thead, color: '#9ca3af', backgroundColor: '#e5e7eb', opacity: 0.6 }}>
      <tr>
        <th style={styles.th}>Description</th>
        <th style={{ ...styles.th, ...styles.thCenter }}>Hours</th>
        <th style={{ ...styles.th, ...styles.thRight }}>Rate</th>
        <th style={{ ...styles.th, ...styles.thRight }}>Amount</th>
        {editMode && <th style={{ ...styles.th, ...styles.thCenter }}>Action</th>}
      </tr>
    </thead>
    <tbody style={styles.tbody}>
      {items.map((item) => (
        <tr key={item.id} style={{ ...styles.tr, ...(editingId === item.id ? styles.trEdit : {}) }}>
          <td style={{ ...styles.td, ...styles.tdDesc }}>
            {editingId === item.id ? (
              <input 
                type="text" 
                value={item.desc}
                onChange={(e) => updateItem(item.id, 'desc', e.target.value)}
                style={styles.tdInput}
                autoFocus
              />
            ) : item.desc}
          </td>
          <td style={{ ...styles.td, ...styles.tdCenter }}>
            {editingId === item.id ? (
              <input 
                type="number" 
                value={item.hrs}
                onChange={(e) => updateItem(item.id, 'hrs', e.target.value)}
                style={{ ...styles.tdInput, textAlign: 'center' }}
              />
            ) : item.hrs}
          </td>
          <td style={{ ...styles.td, ...styles.tdRight }}>
            {editingId === item.id ? (
              <input 
                type="number" 
                value={item.rate}
                onChange={(e) => updateItem(item.id, 'rate', e.target.value)}
                style={{ ...styles.tdInput, textAlign: 'right' }}
              />
            ) : `$${item.rate}`}
          </td>
          <td style={{ ...styles.td, ...styles.tdRightBold }}>
            ${item.total.toLocaleString()}
          </td>
          {editMode && (
            <td style={{ ...styles.td, ...styles.tdCenter }}>
              {editingId === item.id ? (
                <button 
                  style={{ ...styles.button, ...styles.buttonSmall }} 
                  onClick={finishEdit}
                >
                  ✓
                </button>
              ) : (
                <button 
                  style={{ ...styles.button, ...styles.buttonSmall, ...styles.buttonSecondary }} 
                  onClick={() => startEdit(item.id)}
                >
                  ✎
                </button>
              )}
              <button 
                style={{ ...styles.button, ...styles.buttonSmall, ...styles.buttonDanger, marginLeft: '0.25rem' }} 
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
);
