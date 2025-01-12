import {NavLink } from "react-router-dom"
import styles from "./PageNav.module.css";
import Logo from "./Logo";
function PageNav() {
  console.log(styles)
  return (
   <nav className={styles.nav}>
    <Logo />
    <ul>
      
        <li><NavLink to="/pricing">Pricing</NavLink></li>
        <li><NavLink to="/product">Product</NavLink></li>
        <li><NavLink to="/login" className={styles.ctaLink}>Login</NavLink></li>
        {/* <Link to="/">Home</Link> */}
    
    </ul>
   </nav>
  )
}

export default PageNav