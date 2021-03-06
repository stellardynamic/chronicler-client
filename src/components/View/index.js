import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Redirect } from "react-router";
import { CopyToClipboard } from "react-copy-to-clipboard";

const View = () => {
  const [senderId, setSenderId] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleInputChange = e => {
    setSenderId(e.target.value);
  };

  const search = () => {
    setRedirect(true);
  };

  const Alert = () => (
    <div className="alert alert-warning d-block text-left">
      <strong>INFO:</strong> This is where you enter your account address to search and view all of
      your archived titles. <br />
      <br />
      For demo purposes, use: 12643749354486190184L{" "}
      <CopyToClipboard text="12643749354486190184L" onCopy={() => setCopied(true)}>
        <FontAwesomeIcon className="link" icon={["far", "copy"]} />
      </CopyToClipboard>
      {copied && <small> copied!</small>}
    </div>
  );

  return (
    <div className="animated fadeIn">
      <div className="row justify-content-center">
        <div className="col-12 col-md-9 col-lg-6">
          <h1 className="display-1 text-white mb-5">View Archive</h1>

          <Alert />

          <form onSubmit={() => search()}>
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Enter address.."
              onChange={handleInputChange}
              required
            />

            <button type="submit" className="btn btn-lg btn-primary mt-5 shadow">
              <h3 className="m-0">
                <FontAwesomeIcon icon="search" />
              </h3>
            </button>
          </form>
        </div>
      </div>

      {redirect && <Redirect to={`/view/account/${senderId}`} />}
    </div>
  );
};

export default View;
