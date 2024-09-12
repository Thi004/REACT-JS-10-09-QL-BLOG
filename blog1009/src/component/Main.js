import {Link} from "react-router-dom";

function Main() {
    return (
        <>
            <div className={'container mt-4'}>
                <div className={'row'}>
                    <div className={'col-md-8'}>
                        <div className="card mb-4">
                            <img src="https://via.placeholder.com/750x300" className="card-img-top"
                                 alt="Blog Post Image"/>
                            <div className="card-body">
                                <h2 className="card-title">Title</h2>
                                <h5 className="card-text">Content</h5>
                                <h5 className="card-text">Username</h5>
                                <p className="card-text">Status</p>
                                <h5 className="card-text">Type</h5>
                                <a href="#" className="btn btn-primary">Read More &rarr;</a>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <img src="https://via.placeholder.com/750x300" className="card-img-top"
                                 alt="Blog Post Image"/>
                            <div className="card-body">
                                <h2 className="card-title">Title</h2>
                                <h5 className="card-text">Content</h5>
                                <h5 className="card-text">Username</h5>
                                <p className="card-text">Status</p>
                                <h5 className="card-text">Type</h5>
                                <a href="#" className="btn btn-primary">Read More &rarr;</a>
                            </div>
                        </div>
                    </div>
                    <div className={'col-md-4'}>
                        <div className="card mb-4">
                            <h5 className="card-header">Search</h5>
                            <div className="card-body">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search for..."/>
                                    <span className="input-group-btn">
                                <button className="btn btn-primary" type="button">Go!</button>
                            </span>
                                </div>
                            </div>
                        </div>
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://blogradio.vn/uploads/image/2024/08/21/94e1e4360d13e61e8ecd4aad879cfdab_2.jpg" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://blogradio.vn/uploads/image/2024/08/13/04f40945ccaad5f01e9d9d87445a27b5_17.jpg" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://blogradio.vn/uploads/image/2024/09/08/3836dcd7206422e33428e668287186ae_8.jpg" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button"
                                    data-target="#carouselExampleIndicators" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                    data-target="#carouselExampleIndicators" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;