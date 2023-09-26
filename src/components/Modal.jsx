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
                <input
                  className="shipment__detail--info"
                  type="text"
                  value={order.orderNo}
                />
              </div>
              <div className="shipment__detail">
                <p className="shipment__detail--title">Date</p>
                <input
                  type="text"
                  className="shipment__detail--info"
                  value={order.date}
                />
              </div>
              <div className="shipment__detail">
                <p className="shipment__detail--title">Customer</p>
                <input
                  type="text"
                  value={order.customer}
                  className="shipment__detail--info"
                />
              </div>
              <div className="shipment__detail">
                <p className="shipment__detail--title">trackingNO</p>
                <input
                  type="text"
                  value={order.trackingNo}
                  className="shipment__detail--info"
                />
              </div>
              <div className="shipment__detail">
                <p className="shipment__detail--title">consignee</p>
                <input
                  type="text"
                  value={order.consignee}
                  className="shipment__detail--info"
                />
              </div>
              <div className="shipment__detail">
                <p className="shipment__detail--title">status</p>
                <input
                  type="text"
                  value={order.status}
                  className="shipment__detail--info"
                />
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
