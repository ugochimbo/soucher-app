import React, {Component} from 'react';
import Waypoint from 'react-waypoint';
import { ChasingDots } from 'better-react-spinkit';

export default class Paginator extends Component {

    nextPage(pagination, callback) {
        if (pagination.next_page_url !== null) {
            callback(pagination.current_page + 1);
        }
    }

    paginate(pagination, loading, callback) {
        if (loading) {
            return <div style={{'width' : '40px', 'margin' : '-20px auto 0 auto', 'padding' : '20px'}}>
                <ChasingDots size={30} color='#011A27' />
            </div>
        }

        return <Waypoint onEnter={() => {
            this.nextPage(pagination, callback)
        }} topOffset = {'70%'} />
    }

    render () {
        return this.paginate(
            this.props.pagination,
            this.props.loading,
            this.props.callback
        )
    }
}
