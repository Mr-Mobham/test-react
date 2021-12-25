
function UserItems({dataDetailUser}) {

  return (
        <div className="user__items">
                      {
            dataDetailUser.map((content, index)=>{
                return(
                <div key={content.id} className='user__item'>
                     <a href={content.html_url} className='user__item-link'>{content.name}</a>
                </div>
                )
            })
            }

        </div>
  );
}

export default UserItems;
