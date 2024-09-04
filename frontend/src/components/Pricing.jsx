import React from 'react'
import { Check} from 'lucide-react'
import {Link} from 'react-router-dom'
const Pricing = () => {
  const pricing = [
    {
      imageurl: "./pricing.jpg",
      title: "Quaterly",
      price: 5000,
      duration: 3
    },
    {
      imageurl: "./pricing.jpg",
      title: "Half-Yearly",
      price: 9000,
      duration: 6
    },
    {
      imageurl: "./pricing.jpg",
      title: "Annual",
      price: 15000,
      duration: 12
    }
  ]
  return (
    <section className='pricing'>
      <h1>GYM SHARKS FITNESS PLANS</h1>
      <div className="wrapper">
        {
          pricing.map(element=>{
            return(
              <div className="card" key={element.title}>
                <img src={element.imageurl} alt={element.title} />
                <div className="title">
                  <h1>{element.title}</h1>
                  <h1>PACKAGE</h1>
                  <h3>Rs {element.price}</h3>
                  <p>For {element.duration} Months</p>
                </div>
                <div className='description'>
                  <p>
                    <Check /> Equipments
                  </p>
                  <p>
                    <Check /> All day free training
                  </p>
                  <p>
                    <Check /> Free Restroom
                  </p>
                  <p>
                    <Check /> 20 days freezing option
                  </p>
                  <Link to={"/"}>Join Now</Link>  
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Pricing