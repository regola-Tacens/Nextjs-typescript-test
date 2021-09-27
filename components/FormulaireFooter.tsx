import { FunctionComponent } from "react";
import { IformEntry } from "../interfaces/IformEntry";

const FormulaireFooter = ({
  setformEntry,
  formEntry,
  setFormList,
  formList,
}:{
  setFormEntry: any;
  formEntry: IformEntry;
  setFormList: any;
  formList: any;
}) => {
  const handleFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setFormList([...formList, formEntry]);
  };

  const handleTypeChange = (event) => {
    const type = event.target.value;
    setformEntry({ ...formEntry, type });
  };

  const handletofromChange = (event) => {
    const toFrom = event.target.value;
    setformEntry({ ...formEntry, toFrom });
  };
  const handleDetailsChange = (event) => {
    const details = event.target.value;
    setformEntry({ ...formEntry, details });
  };
  const handleAmountChange = (event) => {
    const amount = event.target.value;
    setformEntry({ ...formEntry, amount });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="field">
          <label>Type:</label>
          <select id="type" value={formEntry?.type} onChange={handleTypeChange}>
            <option value="invoice">Invoice</option>
            <option value="payment">Payment</option>
          </select>
        </div>
        <div className="field">
          <label>To / From:</label>
          <input
            type="text"
            id="tofrom"
            value={formEntry?.toFrom}
            onChange={handletofromChange}
          />
        </div>
        <div className="field">
          <label>Details:</label>
          <input
            type="text"
            id="details"
            value={formEntry?.details}
            onChange={handleDetailsChange}
          />
        </div>
        <div className="field">
          <label>Amount (£):</label>
          <input
            type="number"
            id="amount"
            value={formEntry?.amount}
            onChange={handleAmountChange}
          />
        </div>
        <button>Add</button>
      </form>
    </>
  );
};

export default FormulaireFooter;
