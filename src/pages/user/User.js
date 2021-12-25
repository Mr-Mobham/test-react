import '../../assets/styles/_user.scss';
import axios from 'axios'
import { useEffect,useState  } from "react";
import { useParams } from 'react-router';
import UserItems from '../../components/user/UserItems'
import UserSingleDetail from '../../components/user/UserSingleDetail'
import Loading from '../../static/icons/download.gif';


function User() {
  const { id } = useParams();
  const [singleUser, setSingleUser] = useState({});
  const [dataDetailUser, setDetailUser] = useState([]);
  const [statusLoading, setStatusLoading] = useState(true);


  useEffect(() => {
    const getSingleData = async () => {
      const  getSingle = await axios.get(`https://api.github.com/users/${id}?client_id=undefined&client_secret=undefined`)
      const  getDetailUser = await axios.get(`https://api.github.com/users/${id}/repos?per_page=5&sort=created:asc&client_id=undefined&client_secret=undefined`)

      setSingleUser(getSingle.data)
      setDetailUser(getDetailUser.data)
      setStatusLoading(false)
    }
    
    getSingleData()
  }, [])

  return (
    <div className="user">
      {
        !statusLoading
          ? 
          <div className="container">
          <UserSingleDetail singleUser={singleUser}></UserSingleDetail>
          <UserItems dataDetailUser={dataDetailUser}></UserItems>
        </div>
        : 
        null
      }

      {
            statusLoading ? <img  className="content-loading user--loading" src={Loading}></img> : null        
        }
        
    </div>
  );
}

export default User;
