import React from 'react';

let PhoneAuth = React.createClass({
    render: function() {
        return (
            <div style={{'marginTop' : '40px'}}>
                <form role="form">
                    <div className="form-group">
                        <label htmlFor="phone-auth">
                            Enter Authentication Code:
                        </label>
                        <input type="text" className="form-control" id="phone-auth" />
                    </div>
                    <button type="submit" className="btn btn-default">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
});

export default PhoneAuth;
