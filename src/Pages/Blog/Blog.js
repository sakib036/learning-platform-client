import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="my-5 card w-full bg-gray-700 text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">What is CORS ?</h2>
                    <p>Cross-Origin Resource Sharing (CORS) refers to the method that allows you to make requests to the server deployed at a different domain. As a reference, if the frontend and backend are at two different domains, we need CORS there.</p>
                    <p>Cross-origin resource sharing (CORS) is a mechanism that allows a client application to request restricted resources hosted on server from a different origin. These resources may include; web fonts, videos, scripts, iframes, images and stylesheets. By default, client applications making AJAX requests are only allowed to request resources that live on the same origin as the location where the client application is running.CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request. If an application running on different domain tries to make a XMLHttpRequest to a different domain, it will be blocked by same-origin policy. It extends the same-origin policy and offers freedom and functionality than simply same-origin requests and it is more secured.
                    Poor configuration and implementation of CORS policy could lead to data access denial, data theft and potential cross-domain attacks.</p>

                </div>
            </div>

            <div className="my-5 card w-full bg-gray-700  text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">Why are you using "firebase"? What other options do you have to implement authentication ?</h2>
                    <p>For most developers, building an authentication system for your app can feel a lot like paying taxes. They are both relatively hard to understand tasks that you have no choice but doing, and could have big consequences if you get them wrong. No one ever started a company to pay taxes and no one ever built an app just so they could create a great login system. They just seem to be inescapable costs.</p>
                    <p>Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.</p>
                    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                    <p> Firebase is the Google's platform that helps developers build apps. Firebase offers services like authentication, database, storage services and plenty of other services like cloud messaging or test lab.</p>
                    <p>Firebase Authentication also includes an open source UI library that streamlines building the many auth flows required to give your users a good experience. Password resets, account linking, and login hints that reduce the cognitive load around multiple login choices - they are all pre-built with Firebase Authentication UI. These flows are based on years of UX research optimizing the sign-in and sign-up journeys on Google, Youtube and Android. It includes Smart Lock for Passwords on Android, which has led to significant improvements in sign-in conversion for many apps. And because Firebase UI is open source, the interface is fully customizable so it feels like a completely natural part of your app. If you prefer, you are also free to create your own UI from scratch using our client APIs.</p>
                    <p>Top Alternatives to Firebase Authentication----------</p>
                    <ul>
                        <li>Auth0</li>
                        <li>MongoDB</li>
                        <li>Passport</li>
                        <li>Okta</li>
                        <li>Keycloak</li>
                        <li>Keycloak</li>
                        <li>OAuth2</li>
                    </ul>

                </div>
            </div>

            <div className=" my-5 card w-full bg-gray-700  text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">How does the private route work?</h2>
                    <p>React Router is one of the most important components of React ecosystem. In this tutorial, we will learn how to build different types of routes including private, public, and restricted routes. For a quick demonstration, we will build a simple application with components.</p>
                    <p>PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.</p>
                    <p>The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.</p>

                </div>
            </div>

            <div className=" my-5card w-full bg-gray-700  text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">What is Node? How does Node work?</h2>
                    <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
                    <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                    <p>Node.js takes a different approach. It runs a single-threaded event loop registered with the system to handle connections, and each new connection causes a JavaScript callback function to fire. The callback function can handle requests with non-blocking I/O calls, and if necessary can spawn threads from a pool to execute blocking or CPU-intensive operations and to load-balance across CPU cores. Node's approach to scaling with callback functions requires less memory to handle more connections than most competitive architectures that scale with threads</p>
                    <p>Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>

                </div>
            </div>
        </div>
    );
};

export default Blog;