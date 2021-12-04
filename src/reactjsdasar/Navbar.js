import React from 'react';

//Class Component
// export default class Navbar extends React.Component {
//     render() {
//         return (
//             <div>
//                 <div class="p-5 mb-4 bg-light rounded-3">
//                     <div class="container-fluid py-5">
//                         <h1 class="display-5 fw-bold">Navbar Class Component</h1>
//                         <p class="col-md-8 fs-4">Ini Navbar Class Component.</p>

//                     </div>
//                 </div>
//             </div>
//         )
//     }

// }

// export default function Navbar() {
//     return (
//         <div>
//             <h2>Navbar</h2>
//         </div>
//     );
// }

const Navbar = () => {
    return (
        <div>
            <div class="p-5 mb-4 bg-light rounded-3">
                <div class="container-fluid py-5">
                    <h2> Navbar Arrow Function</h2>
                </div>
                <p>Menggunakan Arrow function</p>
            </div>
        </div>
    )
}
export default Navbar