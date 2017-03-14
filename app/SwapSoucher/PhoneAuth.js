import React from 'react';

let PhoneAuth = React.createClass({
    render: function() {
        return (
            <form role="form">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                        Email address
                    </label>
                    <input type="email" className="form-control" id="exampleInputEmail1" />
                </div>
                <div className="form-group">

                    <label htmlFor="exampleInputPassword1">
                        Password
                    </label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-group">

                    <label htmlFor="exampleInputFile">
                        File input
                    </label>
                    <input type="file" id="exampleInputFile" />
                    <p className="help-block">
                        Example block-level help text here.
                    </p>
                </div>
                <div className="checkbox">

                    <label>
                        <input type="checkbox" /> Check me out
                    </label>
                </div>
                <button type="submit" className="btn btn-default">
                    Submit
                </button>
            </form>
        )
    }
});

export default PhoneAuth;
