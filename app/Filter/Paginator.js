import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Constant from './constant';
import Waypoint from 'react-waypoint';
import { ChasingDots } from 'better-react-spinkit';

export class Paginator extends Component {

    nextPage() {
        const {filter, pagination, filterHandler, searchHandler, dispatch} = this.props;

        dispatch(Constant.paginate());

        if (pagination.next_page_url === null) {
            return;
        }

        if (filter.action === Constant.actions.filter) {
            filterHandler(filter.category);
        }

        if (filter.action === Constant.actions.search) {
            searchHandler(filter.searchKey);
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

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
};

export default connect(mapStateToProps)(Paginator);
