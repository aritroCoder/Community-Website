import React, { useState , useEffect } from "react";
import style from "./ForgotPasswordRecovery.module.scss";
import { Button2 } from "../../components/util/Button/index";
import { SimpleToast } from "../../components/util/Toast";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

export function ForgotPasswordRecovery() {
  const [new_password, setNewPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [openPasswordChanged, setPasswordChanged] = useState(false);
  const [openUnmatchedPassword, setUnmatchedPassword] = useState(false);
  const [checkUpdatedPassword, setCheckUpdatedPassword] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);  //for scrolling to top once the page is loaded  
    //eslint-disable-next-line
  },[])

  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setPasswordChanged(false);
    setUnmatchedPassword(false);
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (new_password === confirm_password) {
      setNewPassword("");
      setConfirmPassword("");
      setPasswordChanged(true);
      setCheckUpdatedPassword(true);
    } else {
      setUnmatchedPassword(true);
      setNewPassword("");
      setConfirmPassword("");
    }
  }

  return (
    <>
      <div className={style["forgot-password-recovery-section"]}>
        <div
          className={`${style["forgot-password-recovery-image"]} ${style["child1"]}`}
        >
          <img
            src="./images/forgot-password-recovery.jpg"
            alt="Forgot-Password-Recovery-Illustration"
          ></img>
        </div>

        <div
          className={`${style["forgot-password-recovery-form"]} ${style["child2"]}`}
        >
          <div className={style["forgot-password-recovery-card"]}>
            {checkUpdatedPassword ? (
              <React.Fragment>
                <h1 className={style["card-heading"]}>Password Updated</h1>
                <div className={style["inside-card"]}>
                  <p style={{ textAlign: "center" }}>
                    Your Password has been updated. Please login with your
                    updated password
                  </p>
                  <Grid container spacing={3}>
                    <Grid xs={12} style={{ padding: "5%" }}>
                      <Link to="/admin">
                        <div className={style["submit-btn"]}>
                          <Button2
                            id="btn"
                            label="Login"
                            type="submit"
                            className={style["submit-btn-text"]}
                          />
                        </div>
                        {console.log(style["back-button"])}
                      </Link>
                    </Grid>
                  </Grid>
                  <br />
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h1 className={style["card-heading"]}>Reset your Password</h1>
                <form onSubmit={handleSubmit}>
                  <div className={style["inside-card"]}>
                    <div className={style["forgot-password-recovery-input"]}>
                      <input
                        type="password"
                        id="new password"
                        required="required"
                        name="new password"
                        placeholder="New Password"
                        value={new_password}
                        className={style["input-forgot-password-recovery"]}
                        onChange={(e) => {
                          setNewPassword(e.target.value);
                        }}
                      ></input>

                      <input
                        type="password"
                        id="confirm password"
                        name="confirm password"
                        required="required"
                        value={confirm_password}
                        placeholder="Confirm Password"
                        className={style["input-forgot-password-recovery"]}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                        }}
                      ></input>
                    </div>

                    <div className={style["submit-btn"]}>
                      <Button2
                        type="submit"
                        label="Submit"
                        className={style["submit-btn-text"]}
                      />
                    </div>
                  </div>
                </form>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
      <SimpleToast
        open={openPasswordChanged}
        message="Password Changed Successfully!"
        handleCloseToast={handleCloseToast}
        severity="success"
      />
      <SimpleToast
        open={openUnmatchedPassword}
        message="Passwords Does Not Match!"
        handleCloseToast={handleCloseToast}
        severity="error"
      />
    </>
  );
}
