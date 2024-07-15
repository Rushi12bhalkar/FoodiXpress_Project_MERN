import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carrd from '../components/Carrd'
import Carousal from '../components/Carousal'



function Home() {

  const [foodCat, setFoodCat] = useState([])
  const [foodItem, setFoodItem] = useState([])
  const[search,setSearch]=useState('')


  const loadData = async () => {
    let responce = await fetch("http://localhost:5000/api/fooddata", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    responce = await responce.json();
    // console.log(responce[0],responce[1])

    setFoodItem(responce[0]);
    setFoodCat(responce[1]);
  }

  useEffect(() => {
    loadData()
  }, [])


  return (
    <>
      <div><Navbar></Navbar></div>
      <div><Carousal></Carousal></div>
      <div> <div style={{ width: '5', marginTop: '3', textAlign: 'center' }}>
        <center><div className='w-50 d-flex mt-2 data-bs-theme="dark", justify-content-ceneter' >
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
          {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
        </div></center>
      </div></div>

      <div className='container'>
        {
          foodCat !== []
            ? foodCat.map((e) => {
              return (<div className='row mb-3'>
                <div key={e._id} className='fs-3 m-3'>
                  {e.CategoryName}
                </div>
                <hr></hr>
                {
                  foodItem !== []
                    ?
                    foodItem.filter((item) => (item.CategoryName == e.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                      .map(filterItems => {
                        return (
                          <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                            <Carrd foodItem = {filterItems}
                              options={filterItems.options[0]}
                              // imgSrc={filterItems.img}
                            ></Carrd>
                          </div>
                        )
                      }
                      ) : <div> No Such Data Found</div>
                }
              </div>)
            })
            : ""
        }


      </div>

      <div><Footer></Footer></div>
    </>
  )
}

export default Home