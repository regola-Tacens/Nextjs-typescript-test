import FormulaireFooter from "../components/FormulaireFooter";
import styles from "../styles/Home.module.css";

import { useState } from 'react';

export default function Home() {
  const [formEntry, setformEntry] = useState ({});
  const [formList, setFormList] = useState([]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="wrapper">
          <h1>Finance Logger</h1>
            
          <ul className="item-list">
            {
              formList.map(item => (
                <li key={item.details}>{item.type} from {item.toFrom} : {item.details}  {item.amount}£ </li>
              ))
            }
          </ul>
          <div className="inputContainer">
            <FormulaireFooter setformEntry={setformEntry} formList={formList} setFormList={setFormList} formEntry={formEntry} />
          </div>
        </div>
      </main>
    </div>
  );
}
