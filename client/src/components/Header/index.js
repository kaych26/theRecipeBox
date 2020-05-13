import React from 'react';
import logo from '../../assets/images/img/theRecipeBox_logo.png';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <Link to="/">
        <img src={logo} />
      </Link>
      
      {props.currentUser ?
        <>
          <button onClick={props.handleLogout}>Logout</button>
        </>
        :
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      }



      {/* <hr /> */}
    </header>
  );
}

// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../assets/images/img/theRecipeBox_logo.png';

// export default function Header(props) {
//   return (
//     <header>
//       <img src={logo}/>

//       {props.currentUser ? (
//         <>
//           <p>{props.currentUser.username}</p>
//           <button onClick={props.handleLogout}>Logout</button>
//         </>
//       ) : (
//         <Link to="/login">Login/Register</Link>
//       )}
//       <hr />
//       {props.currentUser && (
//         <>
//           <Link to="/foods">Foods</Link>
//           <Link to="/flavors">Flavors</Link>
//           <hr />
//         </>
//       )}
//     </header>
//   );
// }
