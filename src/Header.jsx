// import React from 'react'
// import { Container, Navbar } from 'react-bootstrap'

// function Header() {
//   return (
//     <div>
//  <Navbar className="bg-light p-3  fw-bolder ">
//         <Container>
//           <Navbar.Brand className=' align-items-center d-flex gap-3 text-dark ' href="#home">
//           <i class="fa-solid fa-cart-arrow-down fa-bounce"></i>
//             E-Cart
//           </Navbar.Brand>
//         </Container>
//       </Navbar>

      
//     </div>
//   )
// }

// export default Header


import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div>
      <Navbar className="bg-light p-3 fw-bolder fixed-top" expand="sm">
        <Container>
          <Navbar.Brand className='d-flex align-items-center gap-3 text-dark' href="#home">
            <FontAwesomeIcon icon={faCartArrowDown} bounce />
            E-Cart
          </Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#orders">Orders</Nav.Link>
            <Nav.Link href="#settings">Settings</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#cart"  className='d-flex gap-3 align-items-center'>
              <FontAwesomeIcon icon={faCartArrowDown} />
              <button className='btn btn-warning text-dark'>cart</button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header

