import React from 'react';

/* In order to import files like this, create an 'index.js' file in the respective folders(components, containers) and export the files you need within the folder. In this case we are importing files from within the 'components' and 'containers' folders */
import { Footer, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA,  Navbar } from './components';
import './App.css';

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            {/* <Brand /> */}
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            {/* <Blog /> */}
            <Footer />
        </div>
    )
}

export default App







// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
// import { CTA, Navbar } from './components';
// import './App.css';

// const App = () => {
//     return (
//         <Router>
//             <div className='App'>
//                 <div className='gradient__bg'>
//                     <Navbar />
//                     <Header />
//                 </div>
//                 {/* <Brand /> */}
//                 <Route exact path="/">
//                     <HomePage />
//                 </Route>
//                 <Route path="/code/Interface.html">
//                     <InterfacePage />
//                 </Route>
//                 {/* Add more routes as needed */}
//                 <WhatGPT3 />
//                 <Features />
//                 <Possibility />
//                 <CTA />
//                 <Blog />
//                 <Footer />
//             </div>
//         </Router>
//     )
// }

// const HomePage = () => {
//     return <h1>Home Page</h1>; // You can render your existing components here
// }

// const InterfacePage = () => {
//     return (
//         <div>
//             <h1>Interface Page</h1>
//             {/* Render your 'Interface.html' file here */}
//             {/* For example, if 'Interface.html' is a static file, you can embed it using an iframe */}
//             <iframe src="/code/Interface.html" title="Interface Page" width="100%" height="500px"></iframe>
//         </div>
//     );
// }

// export default App;
