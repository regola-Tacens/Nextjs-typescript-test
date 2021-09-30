import { IformEntry } from "../interfaces/IformEntry";
import { IformEntryArray } from "../interfaces/IformEntryArray";

const FormulaireFooter = ({
  setformEntry,
  formEntry,
  setFormList,
  formList,
}
:{
  setformEntry: IformEntryArray | undefined;
  formEntry: IformEntry | undefined;
  setFormList: any;
  formList: any;
}
) => {
  const handleFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setFormList([...formList, formEntry]);
  };

  const handleInputChange = (e: { target: { id: string; value: string | number ; }; }) => {
    console.log({...formEntry, [e.target.id]: e.target.value})
    console.log([e.target.id])
    setformEntry({...formEntry, [e.target.id]: e.target.value})
  }
  

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="field">
          <label>Type:</label>
          <select id="type" value={formEntry?.type} onChange={handleInputChange}>
            <option value="invoice">Invoice</option>
            <option value="payment">Payment</option>
          </select>
        </div>
        <div className="field">
          <label>To / From:</label>
          <input
            type="text"
            id="tofrom"
            value={formEntry?.tofrom}
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <label>Details:</label>
          <input
            type="text"
            id="details"
            value={formEntry?.details}
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <label>Amount (£):</label>
          <input
            type="number"
            id="amount"
            value={formEntry?.amount}
            onChange={handleInputChange}
          />
        </div>
        <button>Add</button>
      </form>
    </>
  );
};

export default FormulaireFooter;
