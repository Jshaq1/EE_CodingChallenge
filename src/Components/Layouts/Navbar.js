import { Link } from "react-router-dom"
import { useContext } from "react"
import '../../Css/NavBar.scss'
import GlobalContext from '../../Context/MyProductsContext'

const Navbar = () => {
    const { favProductsList } = useContext(GlobalContext)

    return (
        <header>
            <div className='logo'><Link to={{ pathname: `/` }} ><h2>Butter Goods</h2></Link></div>
            <div className='nav-links'>
                <Link to={{ pathname: `/` }} >All Products</Link>
                <Link to={{ pathname: `/my-products` }}>My Products</Link>
                <div className="my-products-tally"><p>{favProductsList.length}</p></div>


            </div>

        </header>
    )
}

export default Navbar