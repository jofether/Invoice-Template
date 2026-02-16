import React from 'react';
import { styles } from '../styles';

export const AddItemForm = ({ newItem, setNewItem, addItem }) => (
  <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
    <p style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#6b7280', margin: '0 0 1rem 0', textTransform: 'uppercase' }}>
      Add New Item
    </p>
    <div style={styles.addItemForm}>
      <input 
        type="text" 
        placeholder="Description"
        value={newItem.desc}
        onChange={(e) => setNewItem({ ...newItem, desc: e.target.value })}
        style={styles.formInput}
      />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
        <input 
          type="number" 
          placeholder="Hours"
          value={newItem.hrs}
          onChange={(e) => setNewItem({ ...newItem, hrs: e.target.value })}
          style={styles.formInput}
        />
        <input 
          type="number" 
          placeholder="Rate"
          value={newItem.rate}
          onChange={(e) => setNewItem({ ...newItem, rate: e.target.value })}
          style={styles.formInput}
        />
      </div>
      <button style={styles.button} onClick={addItem}>
        + Add Item
      </button>
    </div>
  </div>
);
