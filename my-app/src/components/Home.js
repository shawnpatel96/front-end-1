import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <h1>Welcome to Wunderlist 2.0</h1>
            <h3>The newest To-Do App</h3>
            <p>Pinterest woke cillum, truffaut fam stumptown fanny pack. Art party everyday carry edison bulb officia. Incididunt eu VHS ut selvage. Bespoke literally lo-fi actually aesthetic pop-up single-origin coffee yuccie. Raclette hammock aliquip, et 3 wolf moon mumblecore snackwave banjo. Tempor farm-to-table yuccie fanny pack proident. Anim church-key eu af, vice nostrud aliquip next level quinoa.</p>
            <p>Aliquip hella butcher minim ut duis celiac et single-origin coffee. Vape pour-over hexagon, edison bulb officia hell of laborum roof party readymade ut drinking vinegar veniam vexillologist flannel magna. Raw denim austin flexitarian lo-fi sartorial mlkshk vexillologist tousled organic officia craft beer kombucha voluptate post-ironic. Pinterest truffaut seitan, woke schlitz pariatur hell of vape echo park. Normcore dolore freegan, plaid street art offal butcher.</p>
            <span>
                <Link to='/login'>Login</Link>
            </span>
            <span>
                <Link to='/register'>Sign Up</Link>
            </span>
        </div>
    )
}

export default Home;