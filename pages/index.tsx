import FormulaireFooter from "../components/FormulaireFooter";
import styles from "../styles/Home.module.css";

import { IformEntry } from "../interfaces/IformEntry";
import { useState } from "react";



export default function Home() {

  // const [formEntry, setformEntry] = useState({type:'',toFrom:'',details:'', amount:0});
  const [formEntry, setformEntry] = useState<IformEntry | undefined>(undefined);
  const [formList, setFormList] = useState([]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="wrapper">
          <h1>Finance Logger</h1>

          <ul className="item-list">
            { formEntry &&
              formList.map((item) => (
                <li key={item.details}>
                  {item.type} from {item.toFrom} : {item.details} {item.amount}£{" "}
                </li>
              ))
            }
            

          </ul>

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
