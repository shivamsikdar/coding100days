// footer file of my projectimport React from 'react'
import "../css/Footer.css"

function Footer() {
    return (
        <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h5>DRACO CAPSTONE PRO</h5>
            <h6 className="list-unstyled">
              <li>7980123346</li>
              <li>KOLKATA, INDIA</li>
              <li>123 KGP Street</li>
            </h6>
          </div>
          {/* Column2 */}
          <div className="col">
            <h5>ABOUT</h5>
            <ui className="list-unstyled">
                <h6>
              <li>SWEETS</li>
              <li>CHOCOLATES</li>
              <li>CAKES</li>
              </h6>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h5>CONTACT</h5>
            <ui className="list-unstyled">
                <h6>
              <li>FACEBOOK</li>
              <li>INSTAGRAM</li>
              <li>EMAIL</li>
              </h6>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} DRACO SOAL | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
    )
}

export default Footer
