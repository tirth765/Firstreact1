import { useState, useEffect } from "react";

export default function Product() {
  const [Loader, setLoader] = useState(true);
  const [Product, setProduct] = useState([]);
  const [Search, setSearch] = useState('');
  const [sort, setsort] = useState('');
  const [UniqueData, setUniqueData] = useState([]);
  const [Cat, setCat] = useState('');

  const getdata = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json();
    const UniqueData = []

    data.map((v, i) => {
      if (!UniqueData.includes(v.category)) {
        UniqueData.push(v.category)
      }
    })

    setUniqueData(UniqueData);
    setProduct(data);
  }

  useEffect(() => {
      setTimeout(() => {
        // setLoader(false)
      },1000)

    // setLoader(false)
    getdata();

  }, []);

  const handleFillter = () => {
    console.log(Search);

    let fData = []

     fData = Product.filter((v, i) => (
      v.title.toLowerCase().includes(Search.toLowerCase()) ||
      v.price.toString().includes(Search) ||
      v.rating.rate.toString().includes(Search)
    ))
    console.log(fData);

    if (sort === "a_z") {
      fData = fData.sort((a, b) => a.title.localeCompare(b.title))
    } else if (sort === "z_a") {
      fData = fData.sort((a, b) => b.title.localeCompare(a.title))
    } else if (sort === "l_h") {
      fData = fData.sort((a, b) => a.price - b.price)
    } else if (sort === "h_l") {
      fData = fData.sort((a, b) => b.price - a.price)
    }

  if(Cat) {
    return fData.filter((v) => v.category === Cat)
  }

    return fData;
  }

  const FinalData = handleFillter();

  console.log(Cat);
  console.log(FinalData);
  
  

  return (
    <div>

      {Loader ? <div class="preloader">
        <svg class="cart" role="img" aria-label="Shopping cart line animation" viewBox="0 0 128 128" width="128px" height="128px" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="8">
            <g class="cart__track" stroke="hsla(0,10%,10%,0.1)">
              <polyline points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80" />
              <circle cx="43" cy="111" r="13" />
              <circle cx="102" cy="111" r="13" />
            </g>
            <g class="cart__lines" stroke="currentColor">
              <polyline class="cart__top" points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80" stroke-dasharray="338 338" stroke-dashoffset="-338" />
              <g class="cart__wheel1" transform="rotate(-90,43,111)">
                <circle class="cart__wheel-stroke" cx="43" cy="111" r="13" stroke-dasharray="81.68 81.68" stroke-dashoffset="81.68" />
              </g>
              <g class="cart__wheel2" transform="rotate(90,102,111)">
                <circle class="cart__wheel-stroke" cx="102" cy="111" r="13" stroke-dasharray="81.68 81.68" stroke-dashoffset="81.68" />
              </g>
            </g>
          </g>
        </svg>
        <div class="preloader__text">
          <p class="preloader__msg">Bringing you the goods…</p>
          <p class="preloader__msg preloader__msg--last">This is taking long. Something’s wrong.</p>
        </div>
      </div> :

        <>
          <div className="searEdit">

            <select id="selection" onChange={(e) => setsort(e.target.value)} className="shotingEdit">
              <option value="0">---Select---</option>
              <option value="l_h">Lower to High</option>
              <option value="h_l">High to Lower</option>
              <option value="a_z">a to z</option>
              <option value="z_a">z to a</option>
            </select>
            <button style={Cat === '' ? {backgroundColor : "black", color: 'white'} : null}  className="handleUniqData" onClick={() => setCat("")}>all</button>
            {
              
            UniqueData.map((v, i) => (  
                <button style={v === Cat ? {backgroundColor : "black", color: 'white'} : null}  className="handleUniqData" onClick={() => setCat(v)}>{v}</button>
              ))

            }


            <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} className="searchEdit" id="myInput" />



          </div>



          <div className="dataedit">
            {

              FinalData.map((v, i) => (
                <div className="col-4">
                  <img src={v.image} height={'150px'} className="EditImg" />
                  <h3>{v.title}</h3>
                  <h4>{v.price}</h4>
                  <h5>{v.category}</h5>
                  <h6>{v.rating.rate}</h6>
                  <h6>{v.rating.count}</h6>
                </div>
              ))

            }
          </div>
        </>
      }

    </div>
  );
}

