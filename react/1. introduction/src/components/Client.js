let Client =()=>{
    return(
        <div className="client_section layout_padding">
      <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <h1 className="what_taital">what is syas our clients</h1>
              <div className="client_section_2 layout_padding">
                <ul>
                  <li><img src="images/round-1.png" className="round_1"/></li>
                  <li><img src="images/img-11.png" className="image_11"/></li>
                  <li><img src="images/round-2.png" className="round_2"/></li>
                </ul>
                <p className="dummy_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
              </div>
            </div>
            <div className="carousel-item">
              <h1 className="what_taital">what is syas our clients</h1>
              <div className="client_section_2 layout_padding">
                <ul>
                  <li><img src="images/round-1.png" className="round_1"/></li>
                  <li><img src="images/img-11.png" className="image_11"/></li>
                  <li><img src="images/round-2.png" className="round_2"/></li>
                </ul>
                <p className="dummy_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
              </div>
            </div>
            <div className="carousel-item">
              <h1 className="what_taital">what is syas our clients</h1>
              <div className="client_section_2 layout_padding">
                <ul>
                  <li><img src="images/round-1.png" className="round_1"/></li>
                  <li><img src="images/img-11.png" className="image_11"/></li>
                  <li><img src="images/round-2.png" className="round_2"/></li>
                </ul>
                <p className="dummy_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}
export default Client