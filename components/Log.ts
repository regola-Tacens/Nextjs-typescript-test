const Log = (formEntry) => {
  return formList.map((item: IformEntry) => (
    <li key={item.details}>
      {item.type} from {item.tofrom} : {item.details} {item.amount}£{" "}
    </li>
  ));
};

export default Log;
