import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Modal from "./Modal";

function Table() {
  const [orders, setOrders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedOrder,setSelectedOrder] = useState(null)
  async function getShipments() {
    const { data } = await axios.get(
      "https://my.api.mockaroo.com/shipments.json?key=5e0b62d0"
    );
    setOrders(data);
    console.log(orders);
  }
  const columns = [
    {
      name: "orderNo",
      selector: (row) => row.orderNo,
      compact:true
    },
    {
      name: "date",
      selector: (row) => row.date,
      compact:true
    },
    {
      name: "customer",
      selector: (row) => row.customer,compact:true
      
    },
    {
      name: "trackingNo",
      selector: (row) => row.trackingNo,compact:true
    },
    {
      name: "status",
      selector: (row) => row.status,compact:true
    },
    {
      name: "consignee",
      selector: (row) => row.consignee,compact:true
    },
    {
      name: "actions",
      cell: (row) => (
        <div>
          <button className="btn "
           onClick={() => {
            setSelectedOrder(row);
            setIsModalOpen(true);
          }}>
            <FontAwesomeIcon icon="fa-solid fa-passport" />
          </button>{" "}
          <button className="btn delete__btn">
          <FontAwesomeIcon icon="fa-solid fa-xmark" />
          </button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    getShipments();
  }, []);

  return (
    <div className="table">
      <DataTable columns={columns} data={orders} pagination className="data">
        {" "}
      </DataTable>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} order={selectedOrder} />
    </div>
  );
}

export default Table;
