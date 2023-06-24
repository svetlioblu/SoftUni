import CopyRight from "./Copyright";

let Footer = () => {
    return (
        <div className="footer_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <h4 className="about_text">About Financial</h4>
                        <div className="location_text"><img src="images/map-icon.png" /><span className="padding_left_15">Locations</span></div>
                        <div className="location_text"><img src="images/call-icon.png" /><span className="padding_left_15">+01 9876543210</span></div>
                        <div className="location_text"><img src="images/mail-icon.png" /><span className="padding_left_15">demo@gmail.com</span></div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <h4 className="about_text">About Financial</h4>
                        <p className="dolor_text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <h4 className="about_text">Instagram</h4>
                        <div className="footer_images">
                            <div className="footer_images_left">
                                <div className="image_12"><img src="images/img-12.png" /></div>
                                <div className="image_12"><img src="images/img-12.png" /></div>
                                <div className="image_12"><img src="images/img-12.png" /></div>
                            </div>
                            <div className="footer_images_right">
                                <div className="image_12"><img src="images/img-12.png" /></div>
                                <div className="image_12"><img src="images/img-12.png" /></div>
                                <div className="image_12"><img src="images/img-12.png" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <h4 className="about_text">Newsletter</h4>
                        <input type="text" className="mail_text" placeholder="Enter your email" name="Enter your email" />
                        <div className="subscribe_bt"><a href="#">Subscribe</a></div>
                        <div className="footer_social_icon">
                            <ul>
                                <li><a href="#"><img src="images/fb-icon1.png" /></a></li>
                                <li><a href="#"><img src="images/twitter-icon1.png" /></a></li>
                                <li><a href="#"><img src="images/linkedin-icon1.png" /></a></li>
                                <li><a href="#"><img src="images/youtub-icon1.png" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <CopyRight/>
            </div>
        </div>
    );
}
export default Footer