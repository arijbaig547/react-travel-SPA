import React from 'react'
import "../App.css"

function Home() {
    return (
        <>
            {/* Hero Section */}
            <div
                className="home d-flex flex-column justify-content-center align-items-start text-white px-3 py-3"
                style={{
                    background:
                        "linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1),rgba(0,0,0,0.1)),url('../images/asal.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "80vh",
                    paddingLeft: "80px",
                }}
            >
                <h1
                    className="display-2 px-3"
                    style={{
                        color: "#1e1e1eff",
                        fontWeight: "700",
                        fontFamily: "sans-serif",
                    }}
                >
                    Find your Next <br /> Destination
                </h1>

                <p
                    style={{ color: "#d8d8d8ff", fontWeight: "600" }}
                    className="lead px-3"
                >
                    Discover breathtaking landscapes, hidden gems, and unforgettable
                    adventures across the world.
                </p>

                <div className="buttons d-flex ">
                    <button
                        className="btn-custom btn-primary mt-3"
                        style={{
                            padding: "12px 35px",
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "500",
                            backgroundColor: "#1a1a1aff",
                            border: "none",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                            transition: "all 0.3s ease-in-out",
                        }}
                    >
                        Explore Now
                    </button>
                    <button
                        className="btn-outline-custom btn-primary mt-3 mx-3"
                        style={{
                            padding: "12px 35px",
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "500",
                            background: "transparent",
                            border: "1px solid #ccccccff",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                            transition: "all 0.3s ease-in-out",
                        }}
                    >
                        Search
                    </button>
                </div>
            </div>

            {/* Cards Section */}
            <div
                className="container-fluid min-vh-100 py-5 px-4"
                style={{
                    background: "linear-gradient(135deg, #A8B6BF, #51777D)"
                }}
            >
                <h3 className="text-left mb-4 text-dark">Popular Destinations</h3>
                <div className="row">

                    {/* Card 1 */}
                    <div className="col-md-3 mb-3">
                        <div className="card shadow-lg border-0">
                            <img
                                src="https://images.unsplash.com/photo-1502085671122-2d218cd434e6?q=80&w=1526&auto=format&fit=crop"
                                className="card-img-top"
                                alt="Mountain 1"
                            />
                        </div>
                        <p className='cardText  mt-2 text-white'>
                            "Climb beyond the clouds and touch serenity."
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-3 mb-3">
                        <div className="card shadow-lg border-0">
                            <img
                                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1470&auto=format&fit=crop"
                                className="card-img-top"
                                alt="Mountain 2"
                            />
                        </div>
                        <p className='cardText  mt-2 text-white'>
                            "Adventure begins where the road ends."
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-3 mb-3">
                        <div className="card shadow-lg border-0">
                            <img
                                src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1476&auto=format&fit=crop"
                                className="card-img-top"
                                alt="Mountain 3"
                            />
                        </div>
                        <p className='cardText  mt-2 text-white'>
                            "Lose yourself in the beauty of towering peaks."
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="col-md-3 mb-3">
                        <div className="card shadow-lg border-0">
                            <img
                                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1470&auto=format&fit=crop"
                                className="card-img-top"
                                alt="Mountain 4"
                            />
                        </div>
                        <p className='cardText mt-2 text-white'>
                            "Every mountain tells a story of strength and wonder."
                        </p>
                    </div>
                </div>
                {/* Extra Section Below Cards */}
                <div className="container-fluid py-5 " style={{
                    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
                }}>
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div style={{
                                background: "rgba(255, 255, 255, 0.08)",
                                backdropFilter: "blur(15px)",
                                borderRadius: "20px",
                                padding: "40px",
                                color: "white",
                                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                            }}>
                                <div className="row">

                                    {/* Left Side */}
                                    <div className="col-md-6 mb-4">
                                        <h3 className="fw-bold mb-3">Travel Tips</h3>
                                        <p>✦ Pack light and smart for a stress-free journey.</p>
                                        <p>✦ Learn basic local phrases for better connections.</p>
                                        <p>✦ Keep digital copies of your important documents.</p>
                                    </div>

                                    {/* Right Side */}
                                    <div className="col-md-6 mb-4">
                                        <h3 className="fw-bold mb-3">Did You Know?</h3>
                                        <p>✦ The world has over 195 countries to explore.</p>
                                        <p>✦ La Rinconada in Peru is the highest inhabited village.</p>
                                        <p>✦ Research shows traveling makes people happier than shopping.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Home
