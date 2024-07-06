import React, { useRef } from "react";
import { BsBuildingsFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs.sendForm("", "", form.current, {
      publicKey: "",
    });
    e.target.reset();
  };

  return (
    <div className="contact py-4">
      <div className="container">
        <div className="contact-container d-flex flex-column align-items-center justify-content-center gap-3">
          <h2>CONTACT US</h2>
          <span className="text-secondary px-3">
            Call or WhatsApp{" "}
            <span className="text-primary"> +971 585879766 </span> For Booking
            Desert Safari Deals Other Inquires 24/7 Support
          </span>
          <div className="row py-3 d-flex justify-content-center gap-3 w-100">
            <div className="col-md-5 d-flex flex-column justify-content-center gap-3  p-5 shadow">
              <h4>Get In Touch</h4>

              <form
                className="d-flex flex-column gap-3 "
                ref={form}
                onSubmit={sendEmail}
              >
                {/* <label>Name</label> */}
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  className="form-control"
                  required
                />
                {/* <label>Email</label> */}
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  className="form-control"
                  required
                />
                {/* <label>Message</label> */}
                <textarea
                  name="message"
                  className="form-control"
                  required
                  placeholder="Message"
                  style={{ height: "150px" }}
                />
                <input
                  type="submit"
                  value="Send"
                  className="btn btn-primary mt-3 btn-grid"
                />
              </form>
            </div>
            <div
              style={{ backgroundColor: "rgb(41, 23, 59)" }}
              className="col-md-5 shadow p-4"
            >
              <div className="d-flex flex-column gap-4">
                <h4 className="text-white ">Desert Safari Info</h4>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.6418960369415!2d55.27151019999999!3d25.1815668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69671fccfefd%3A0xaff6bd86dd6e5642!2sDesert%20safari%20Tourhub!5e0!3m2!1sen!2sin!4v1720198475654!5m2!1sen!2sin"
                  width="400"
                  height="300"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="map"
                  className="w-100 rounded"
                ></iframe>
                <div className="d-flex flex-column p-2 gap-3">
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-white py-1 px-2 rounded-circle">
                      <BsBuildingsFill className="text-black" />
                    </div>
                    <span className="text-white">
                      Deira Dubai United Arab Emirates
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-white py-1 px-2 rounded-circle">
                      <FaPhoneAlt className="text-black" />
                    </div>
                    <span className="text-white">+971 585879766</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-white py-1 px-2 rounded-circle">
                      <SiWhatsapp className="text-black" />
                    </div>
                    <span className="text-white">+971 585879766</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-white py-1 px-2 rounded-circle">
                      <MdEmail className="text-black" />
                    </div>
                    <span className="text-white">Info@desertsafarime.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
