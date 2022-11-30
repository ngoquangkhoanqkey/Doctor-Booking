import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Slider from "react-slick";





class HandBook extends Component {

    render() {
        
        return (
            <div className='section-share section-handbook'>
                <div className='section-content'>
                    <div className='section-header'>
                        <span className='title-section'>Cam nang</span>
                        <button className='btn-section'>Xem them</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                      <div className='section-customize'>
                            <div className='bg-image section-handbook'/>
                            <div>Co suong khop 1</div>
                      </div>
                      <div className='section-customize'>
                            <div className='bg-image section-handbook'/>
                             <div>Co suong khop 1</div>
                      </div>
                      <div className='section-customize'>
                            <div className='bg-image section-handbook'/>
                             <div>Co suong khop 1</div>
                      </div>
                      <div className='section-customize'>
                            <div className='bg-image section-handbook'/>
                             <div>Co suong khop 1</div>
                      </div>
                      <div className='section-customize'>
                            <div className='bg-image section-handbook'/>
                             <div>Co suong khop 1</div>
                      </div>
                      <div className='section-customize'>
                            <div className='bg-image section-handbook'/>
                             <div>Co suong khop 1</div>
                      </div>
                      <div className='section-customize'>
                            <div className='bg-image section-handbook'/>
                             <div>Co suong khop 1</div>
                      </div>
                        </Slider>

                    </div>
                </div>
            </div>
        
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);