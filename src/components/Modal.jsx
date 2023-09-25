import React from "react";
import ReactModal from "react-modal";

function Modal({ isOpen, onClose, order }) {
  return (
    <ReactModal className="modal" isOpen={isOpen} onRequestClose={onClose}>
      {order && (
        <div>
          <div className="modal__wrapper">
              <h2>Shipment Details</h2>
            <div className="shipment__details">
              <div className="shipment__detail">
                <p className="shipment__detail--title">OrderNo</p>
                <p className="shipment__detail--info">{order.orderNo}</p>
              </div>
              <div className="shipment__detail">
                <p className="shipment__detail--title">Date</p>
                <p className="shipment__detail--info">{order.date}</p>
              </div>
              <div className="shipment__detail">
                <p className="shipment__detail--title">Customer</p>
                <p className="shipment__detail--info"> {order.customer}</p>
              </div>
              <div className="shipment__detail">
                <p className="shipment__detail--title">trackingNO</p>
                <p className="shipment__detail--info">{order.trackingNo}</p>
              </div>
              <div className="shipment__detail">
                <p className="shipment__detail--title">consignee</p>
                <p className="shipment__detail--info">{order.consignee}</p>
              </div>
              <div className="shipment__detail">
                <p className="shipment__detail--title">status</p>
                <p className="shipment__detail--info">{order.status}</p>
              </div>
            </div>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </ReactModal>
  );
}

export default Modal;
