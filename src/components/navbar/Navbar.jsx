import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

function NavbarTop() {
    const navigate = useNavigate()

    const logOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        navigate('/login')
    }

    return (
        <>
            <Navbar className='w-100' bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Nav className="me-end">

                        <Dropdown className='mx-4'>
                            <Dropdown.Toggle id="dropdown-basic" as="a" className="d-flex align-items-center link-dark text-decoration-none">
                                <img src="https://github.com/mdo.png" alt='error' width={32} height={32} className="rounded-circle me-2" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#">New project...</Dropdown.Item>
                                <Dropdown.Item href="#">Settings</Dropdown.Item>
                                <Dropdown.Item href="#">Profile</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={logOut} >Sign out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>


                </Container>
            </Navbar>
        </>
    );
}

export default NavbarTop;