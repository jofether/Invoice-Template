import { useState } from 'react';

export const useInvoiceState = () => {
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

  return {
    // State
    items, setItems,
    companyName, setCompanyName,
    companyAddress, setCompanyAddress,
    companyCity, setCompanyCity,
    invoiceNumber, setInvoiceNumber,
    billToName, setBillToName,
    billToContact, setBillToContact,
    billToEmail, setBillToEmail,
    taxRate, setTaxRate,
    invoiceDate, setInvoiceDate,
    dueDate, setDueDate,
    editMode, setEditMode,
    editingId, setEditingId,
    newItem, setNewItem,
    // Computed
    subtotal, tax, total,
    // Actions
    addItem, removeItem, startEdit, updateItem, finishEdit, handlePrint, resetInvoice,
  };
};
