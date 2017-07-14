import React, {Component} from 'react';
import Waypoint from 'react-waypoint';
import { ChasingDots } from 'better-react-spinkit';

export default class Paginator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            previousAction: ''
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            previousAction: props.action
        });
    }

    nextPage() {
        const {action, pagination, callback} = this.props;
        const page = (this.state.previousAction !== action) ? 1 : pagination.current_page + 1;

        if (pagination.next_page_url !== null) {
            callback(page);
        }
    }

    paginate() {
        if (this.props.loading) {
            return <div style={{'width' : '40px', 'margin' : '-20px auto 0 auto', 'padding' : '20px'}}>
                <ChasingDots size={30} color='#011A27' />
            </div>
        }

        return <Waypoint onEnter={::this.nextPage} topOffset = {'70%'} />
    }

    render () {
        return this.paginate()
    }
}
