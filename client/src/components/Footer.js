import React from 'react'
import "./styles.scss"
import facebook from "../assests/icons/facebook.png"
import instagram from "../assests/icons/instagram.png"
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const Footer = () => {
  const categories = [
    { id: 0, cat_id: "brackets", name: "Brackets" },
    { id: 1, cat_id: "bands_and_tubes", name: "Bands & Tubes" },
    { id: 2, cat_id: "wires_and_springs", name: "Wires & Springs" },
    { id: 3, cat_id: "elastomerics", name: "Elastomerics" },
    { id: 4, cat_id: "orthodontic_pliers", name: "Orthodontic Pliers" },
    { id: 5, cat_id: "miscellaneous", name: "Miscellaneous" }
  ]
  return (
    <>
      <div className="container-fluid">
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: '#464646' }}
        >
          <div className="container p-4 pb-0">
            <section>
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Millenium Orthodontics
                  </h6>
                  <p>
                  At Millenium Orthodontics, we specialize in providing high-quality orthodontic products designed to meet the needs of dental professionals. From brackets and wires to elastics and pliers, our extensive product range combines durability with precision, ensuring reliable solutions for orthodontic treatments. Committed to supporting dental practices, we offer competitive pricing, exceptional customer service, and innovative products that help create confident smiles.
                  </p>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                  {categories.map(item => {
                    return (<Link className='style-link' style={{ color: "#ffffff" }} to={`/category/${item.cat_id}`} key={item.id} >
                      <p className='footer-products'>{item.name}</p>
                    </Link>)
                  })}
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  <p><i className="fas fa-home mr-3"></i> Dwarka, New Delhi, India</p>
                  <p><i className="fas fa-envelope mr-3"></i>intmillenium@gmail.com</p>
                  <p><i className="fas fa-phone mr-3"></i>+91 9811704446</p>
                  <p><i className="fas fa-print mr-3"></i>+91 8920570339</p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>
                  <a
                    className="btn btn-floating m-1"
                    href="#!"
                    role="button"
                  >
                    <img src={instagram} alt="instagram" style={{ height: "35px" }} />
                  </a>
                  <a
                    className="btn btn-floating m-1"
                    href="#!"
                    role="button"
                  >
                    <img src={facebook} alt="facebook" style={{ height: "35px" }} />
                  </a>
                </div>
              </div>
            </section>
          </div>
          <div
            className="text-center p-3"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
          >
            Copyright © 2024  Millenium Orthodontics, All Rights Reserved
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer