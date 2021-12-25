// import ContentHome from "../../components/home/ContentHome";
import { useEffect,useContext,useState  } from "react";
import '../../assets/styles/_home.scss';
import Card from '../../components/home/Card'
import axios from 'axios'
import Loading from '../../static/icons/download.gif';




function Home({data}) {
  const [searchValue, setSearchValue] = useState('');
  const [cardItems, setCardItems] = useState([]);
  const [statusLoading, setStatusLoading] = useState(null);


  // useEffect(() => {

  // }, [])

  const submitSearchCard = (event) => {
    event.preventDefault();
    setStatusLoading(true)
    setCardItems([]);



    axios.get(`https://api.github.com/search/users?q=${searchValue}&client_id=undefined&client_secret=undefined`)
      .then(res => {
        const card = res.data.items
        setCardItems(card);
        setSearchValue('')
        setStatusLoading(false)
      })
      .catch((err) => {
        console.log("err");
        setStatusLoading(false)
      });
  }

  const clearSearch = () => {
    setSearchValue('')
    setCardItems([]);
  }


  return (
    <div className="w-100 container home__wrapper">
        <form onSubmit={(event) => submitSearchCard(event)} className="form">
            <input value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder="Search Users..." className="form__input" type="text"></input>
            <button className="form__btn btn" type="button">Submit</button>
        </form>

        <div className='home__content'>
          {
            cardItems.length !== 0
             ? 
             <div className='home__content-clear'>
                <button onClick={() => clearSearch()} className="home__content-clear btn" type="submit">Clear</button>
            </div>
            : 
            null
          }

            <Card statusLoading={statusLoading} data={cardItems}></Card>
        </div>

        {
            statusLoading ? <img  className="content-loading" src={Loading}></img> : null        
        }
        
    </div>

  );
}

export default Home;
