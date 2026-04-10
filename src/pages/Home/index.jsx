import { Link } from 'react-router-dom';
import './style.css';

function Home() {
    return (
        <>

        <h2>Bem vindo ao meu sistema</h2>
        <Link to="/about"> 
        <button>  navegar para about  </button>
        </Link>


        </>



    )

}
export default Home 
