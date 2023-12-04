import pic from '../pic/Search Page.jpg'
import pic2 from '../pic/Angkor.jpg'

const SearchBar = () => {
  return (
    <>
      <div className="container-fluid p-0 ">
        <img src={pic} className='img-fluid d-md-none'/>
        <img src={pic2} className='img-fluid d-none d-md-inline'/>
      </div>
    </>
  )
}

export default SearchBar