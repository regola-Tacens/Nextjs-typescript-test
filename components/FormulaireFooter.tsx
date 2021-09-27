const FormulaireFooter = ({ setformEntry, formEntry, setFormList, formList }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    setFormList([...formList, formEntry ])

    // const formData = new FormData();
    // for (let i = 0; i < event.target.length - 1; i++) {
    //   formData.append(event.target[i].id, event.target[i].value);
    // }
  };

  

  const handleTypeChange = (event) => {
    const type = event.target.value
    setformEntry({...formEntry, type})
  }

  const handletofromChange =( event ) => {
    const toFrom = event.target.value
    setformEntry({...formEntry, toFrom})
  }
  const handleDetailsChange =( event ) => {
    const details = event.target.value
    setformEntry({...formEntry, details})
  }
  const handleAmountChange =( event ) => {
    const amount = event.target.value
    setformEntry({...formEntry, amount})
  }

  return (
    <>
    <form onSubmit={handleFormSubmit}>
      <div className="field">
        <label>Type:</label>
        <select id="type" value={formEntry.type} onChange={handleTypeChange}>
          <option value="invoice">Invoice</option>
          <option value="payment">Payment</option>
        </select>
      </div>
      <div className="field">
        <label>To / From:</label>
        <input type="text" id="tofrom" value={formEntry.toFrom} onChange={handletofromChange}/>
      </div>
      <div className="field">
        <label>Details:</label>
        <input type="text" id="details" value={formEntry.details} onChange={handleDetailsChange} />
      </div>
      <div className="field">
        <label>Amount (£):</label>
        <input type="number" id="amount" value={formEntry.amount} onChange={handleAmountChange}/>
      </div>
      <button>Add</button>
    </form>
    </>
  );
};

export default FormulaireFooter;
