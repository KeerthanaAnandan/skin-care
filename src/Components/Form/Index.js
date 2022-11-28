import React, { useState } from "react";
import img from "../../Images/logo-with-text.jpg";
import { Link } from "react-router-dom";
import "./index.css";
export default function Index() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className=" text-center ">
      <div className="flex bg-primary flex-row flex-wrap p-2 w-7/12 m-auto justify-between items-center rounded-lg">
        <img src={img} alt="" className="md:w-5/12 p-2" />

        <div className="bg-white flex flex-col flex-wrap h-full w-full md:w-6/12 m-auto rounded-lg justify-center items-center  md:p-2">
          <div id="mc_embed_signup">
            {/* <form
              action="#"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              noValidate
            > */}
            <form
              action="https://actualizecenter.us21.list-manage.com/subscribe/post?u=1a1bc234d6738f4d1f68c0704&amp;id=0dfec85d53&amp;f_id=0040c4e1f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_self"
            >
              <div id="mc_embed_signup_scroll">
                <div>
                  <br />
                  <p className="text-xl decoration-8 font-bold m-1">
                    Get to know your Makeup!
                  </p>
                  {/* <p className="text-md m-1 font-medium capitalize">
                    Fill the form to get personalized newsletters based on your
                    results
                  </p> */}
                </div>
              </div>

              <div className="mc-field-group">
                <label htmlFor="mce-FNAME">Name*</label>
                <input type="text" name="FNAME" className="" id="mce-FNAME" />
              </div>
              {/* <div class="mc-field-group">
	<label for="mce-LNAME">Last Name </label>
	<input type="text" value="" name="LNAME" class="" id="mce-LNAME">
	<span id="mce-LNAME-HELPERTEXT" class="helper_text"></span>
</div> */}
              {/* <div className="mc-field-group">
                <label htmlFor="mce-LNAME">Last Name</label>
                <input type="text" name="LNAME" className="" id="mce-LNAME" />
              </div> */}
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">
                  Email Address <span className="asterisk">*</span>
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                />
              </div>
              {/* value={email}
                  onChange={emailChangeHandler} */}
              {/* <div className="mc-field-group" id="hide">
                <label htmlFor="mce-USERRESULT">Type </label>
                <input
                  type="text"
                  name="USERRESULT"
                  className="usertype"
                  id="mce-USERRESULT"
                  defaultValue={userResult}
                />
              </div> */}

              <div hidden={true}>
                <input type="hidden" name="tags" />
              </div>
              <div id="mce-responses" className="clear">
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                ></div>
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                ></div>
              </div>

              <div
                style={{ position: "absolute", left: -5000 }}
                aria-hidden={true}
              >
                <input
                  type="text"
                  name="b_3a8d6f8f174409356f89b85f0_784412b43e"
                  tabIndex="-1"
                />
              </div>
              {/* {isDisabled ? (
                <p className="text-red-600 text-sm ">*Fill required fields</p>
              ) : (
                ""
              )}    disabled={email != " " ? true : false} */}

              <div className="clear">
                <input
                  type="submit"
                  value="Get Me Those Results!"
                  name="subscribe"
                  className="cursor-pointer button p-3 m-1 bg-secondary rounded-lg text-white capitalize font-bold custom-single-page-btn-transition"
                />
                <br />

                {/* <span style={{ fontSize: "small" }}>
                      Don't worry, we hate spam as much as you do. Unsubscribe
                      at any time.
                    </span>   href={process.env.PUBLIC_URL + "results.html"}*/}
                <div>
                  <Link to="/results">
                    <span style={{ fontSize: "medium" }}>
                      <a className="skipcolor no-decoration">Skip for now!</a>
                    </span>
                  </Link>
                </div>
              </div>
            </form>
          </div>

          <br />
        </div>
      </div>
    </div>
  );
}
