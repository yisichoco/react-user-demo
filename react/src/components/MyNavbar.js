import React from 'react'
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
} from 'react-bootstrap'

// 要使用能有active css效果的NavLink元件
import { NavLink, Link } from 'react-router-dom'

function MyNavbar(props) {
  const { auth } = props

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            React-BS5-Router5
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* 利用as屬性來作選單link的整合 */}
              {/* 參考：https://react-bootstrap.github.io/components/navs/#nav-link-props */}
              <Nav.Link as={NavLink} to="/about">
                關於我們
              </Nav.Link>
              <Nav.Link as={NavLink} to="/login">
                登入
              </Nav.Link>
              {auth && (
                <Nav.Link as={NavLink} to="/member">
                  會員專區
                </Nav.Link>
              )}
              <Nav.Link as={NavLink} to="/productcategory">
                產品分類
              </Nav.Link>
              <Nav.Link as={NavLink} to="/student">
                學生資料
              </Nav.Link>
              <NavDropdown
                title="產品"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item
                  as={NavLink}
                  to="/product/men"
                >
                  MEN
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/product/women"
                >
                  WOMEN
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={NavLink}
                  to="/product/kids"
                >
                  KIDS
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/product/baby"
                >
                  BABY
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="會員"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item
                  as={NavLink}
                  to="/member/login"
                >
                  登入
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/member/register"
                >
                  註冊
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={NavLink}
                  to="/member/profile"
                >
                  個人資料
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="/product/women">
                More deets
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                as={NavLink}
                to="/product/women"
              >
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNavbar
