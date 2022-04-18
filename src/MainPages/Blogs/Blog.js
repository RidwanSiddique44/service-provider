import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <h3 className="text-info fs-1 fw-bolder mt-5">BLOGS</h3>
            <div className="blog-container p-5 m-5 shadow-lg">
                <h2 className="fw-bolder">Difference between authorization and authentication?</h2>
                <p>Authentication verifies who is the user.On the other hand,Authorization determines what resources a user can access.Authentication works through passwords,biometric information, pins, code  and other information provided by the user.Authorization works through settings that are implemented and maintained by the organization.Authorization is not changeable by the user but Authentication is visible to and  changeable by the user.</p>
            </div>
            <div className="blog-container p-5 m-5 shadow-lg">
                <h2 className="fw-bolder">Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p><span className="fw-bolder">Why using firebase:</span>Firebase provides multiple ways of authenticating users. We can choose from email authentication, federated identity provider integration like Google, Facebook or Twitter or we can implement authentication on custom server. If you are interested in details check this link.It provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to our app.
                    <br />  <span className="fw-bolder">Alternatives of firebase:</span> whether you need an alternative to the entire Firebase platform or an alternative to a specific Firebase feature, here's a breakdown of other tools worth considering:- <span className="fw-bolder">Parse,Supabase,Kuzzle, Back4App,AWS Amplify,Couchbase, NativeScript, Flutter, LoopBack etc.</span></p>
            </div>
            <div className="blog-container p-5 m-5 shadow-lg">
                <h2 className="fw-bolder">What other services does firebase provide other than authentication?
                </h2>
                <p >Besides authentication, firebase proveide many other services, such as - <br />
                    <li>Realtime Database:Store and sync
                        data in real time.</li>
                    <li> Remote Config:Control and optimize
                        your app on the fly</li>
                    <li>Cloud Functions:
                        Run your mobile backend
                        code without managing
                        servers</li>
                    <li> Cloud Messaging:
                        Send notifications across
                        platforms at no-cost</li>
                    <li>Hosting:
                        Fast and secure
                        web hosting</li>
                    <li>Cloud Storage:
                        Store and serve
                        content with ease</li>
                    <li>Machine Learning BETA:
                        Machine learning for
                        mobile developers</li>
                </p>
            </div>
        </div>
    );
};

export default Blog;