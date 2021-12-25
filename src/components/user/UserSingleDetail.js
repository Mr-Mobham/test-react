
function UserSingleDetail({singleUser}) {

  const backPage = () => {
    window.history.back() 
  }

  return (
    <div className="user__header-main">
        <div className="user__header-status">
          <div onClick={() => backPage()} className="btn user__header-back" href="/">Back To Search</div>
          <span>hireable : <i className="fa fa-check text-success"></i> </span>
        </div>
        <div className="user__header-content">
            <div className='user__header--content-left'>
                <img className="user__header--content-avatar" src={singleUser.avatar_url} alt="" />
                <span className="user__header--content-text user--name">{singleUser.name}</span>
                <span className="user__header--content-text user--location">{singleUser.location}</span>
            </div>
            <div className='user__header--content-right'>
                <h3 className='user__header--content-text'>Bio :</h3>
                <p className='user__header--content-text'>{singleUser.bio}</p>
                <a className="btn user__header--content-btn" href={singleUser.html_url}>
                  <h3 className='user__header--content-title'>Visit Github Page</h3>
                </a>
                <ul className='user__header--content-ul'>
                  <li className='user__header--content-li'>
                    <span className='user__header--content-title'>Login  : {singleUser.login}</span>
                  </li>
                  <li className='user__header--content-li'>
                    <span className='user__header--content-title'>Company :  {singleUser.company}</span>
                  </li>
                  <li className='user__header--content-li'>
                      <span className='user__header--content-title'>Website : {singleUser.blog}</span>
                  </li>
                </ul>
            </div>
        </div>
        <div className="user__data-count">
              <div className="badge badge-primary">
                <span className='user__data-count-item'>
                    Followers : {singleUser.followers}
                </span>
              </div>
              <div className="badge badge-light">
                <span className='user__data-count-item'>
                Folloing : {singleUser.following}
                  </span>
              </div>
              <div className="badge badge-success">
                <span className='user__data-count-item'>
                Public Repos : {singleUser.public_repos}
                  </span>
              </div>
              <div className="badge badge-dark">
                <span className='user__data-count-item'>
                Public Gists : {singleUser.public_gists}
                  </span>
              </div>
            </div>
    </div>

  );
}

export default UserSingleDetail;
