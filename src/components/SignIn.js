import React, { useEffect, useState } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../utils/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-main.png";

const SignIn = () => {
  //Sign in with email & password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //Signin with Google
  const { signIn, googleSignIn, user } = UserAuth();

  const navigate = useNavigate();

  //Email & Password
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  //Google
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("user in signin", user);
    if (user != null) {
      navigate("/");
    }
  }, [user]);

  return (
    <div>
      <section className="h-screen">
        <div className="px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-dark">
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <div className="flex justify-center mb-6">
                <img src={logo} class="w-[20%]" alt="Phone image" />
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <input
                    type="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-dark bg-white bg-clip-padding border border-solid border-gray rounded transition ease-in-out m-0 focus:text-gray-dark focus:bg-white focus:border-yellow focus:outline-none"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray rounded transition ease-in-out m-0 focus:text-gray-dark focus:bg-white focus:border-yellow focus:outline-none"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <span className="error-text">{error && error} </span>
                </div>

                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-yellow text-blue-dark font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-yellow hover:shadow-lg focus:bg-yellow focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign in
                </button>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray before:mt-0.5 after:flex-1 after:border-t after:border-gray after:mt-0.5">
                  <p className="text-center text-bio font-semibold mx-4 mb-0">
                    OR
                  </p>
                </div>
                <div className="flex items-center justify-center  my-4">
                  <GoogleButton type="light" onClick={handleGoogleSignIn} />
                </div>
                <div className="text-center">
                  <p className="text-md font-semibold mt-2 pt-1 mb-0 text-blue-dark">
                    Don't have an account yet ?
                    <Link
                      to="/signup"
                      className="text-red ml-2 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out underline"
                    >
                      Sign up.
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
