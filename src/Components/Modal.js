import React from 'react';
import './Modal.css';

const modal = (props) => {
    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(10vh)' : 'translateY(-20vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>Modal Header</h3>
                </div>
                <div className="modal-body">
                    <p>
                        {props.children}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default modal;
