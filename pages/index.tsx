import styles from "../styles/Home.module.css";
import FormulaireFooter from "../components/FormulaireFooter";
import { IformEntry } from "../interfaces/IformEntry";
import { IformEntryArray } from "../interfaces/IformEntryArray";
import { useState } from "react";

export default function Home() {
  const defaultState: IformEntry = {
    type: "",
    tofrom: "",
    details: "",
    amount: 0,
  };
  const [formEntry, setformEntry] = useState<IformEntry>();
  const [formList, setFormList] = useState<IformEntryArray["entry"]>([]);

  const entryItem = ():JSX.Element[] => {
    return formList.map((item: IformEntry) => (
      <li key={item.details}>
        {item.type} from {item.tofrom} : {item.details} {item.amount}£{" "}
      </li>
    ));
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="wrapper">
          <h1>Finance Logger</h1>

          <ul className="item-list">{formEntry && entryItem()}</ul>

          <div className="inputContainer">
            <FormulaireFooter
              setformEntry={setformEntry}
              formList={formList}
              setFormList={setFormList}
              formEntry={formEntry}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
