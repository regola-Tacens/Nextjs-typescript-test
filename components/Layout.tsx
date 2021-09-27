import FormulaireFooter from "./FormulaireFooter";

const Layout = ({children}) => {
  return(
    <div className="layout">
      <header>
      </header>
      <div className="page-content">{children}</div>
      <footer>
      </footer>
    </div>
  )
}

export default Layout;