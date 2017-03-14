import React from 'react';

let ReadOnlyBasket = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h3 className="text-center text-info">
                        h3. Lorem ipsum dolor sit amet.
                    </h3>
                    <ol>
                        <li>
                            Lorem ipsum dolor sit amet
                        </li>
                        <li>
                            Consectetur adipiscing elit
                        </li>
                        <li>
                            Integer molestie lorem at massa
                        </li>
                        <li>
                            Facilisis in pretium nisl aliquet
                        </li>
                        <li>
                            Nulla volutpat aliquam velit
                        </li>
                        <li>
                            Faucibus porta lacus fringilla vel
                        </li>
                        <li>
                            Aenean sit amet erat nunc
                        </li>
                        <li>
                            Eget porttitor lorem
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
});

export default ReadOnlyBasket;
