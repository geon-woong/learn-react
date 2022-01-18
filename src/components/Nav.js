import React from 'react';
import { Nav } from 'react-bootstrap'
import { Link, Route, Switch } from 'react-router-dom'
import { useHistory} from 'react-router-dom'

let history = useHistory

function NavComponent(){
    return (
        <Nav>
            <Nav.Item>
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavComponent