import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Modal from "./Modal";

function Table() {
  const [orders, setOrders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  async function getShipments() {
    const { data } = await axios.get("http://localhost:3000/shipments.txt");
    setOrders(data);
  }

  function removeRow(orderNo) {
    const newOrders = orders.filter((order) => order.orderNo !== orderNo);
    setOrders(newOrders);
  }
  const columns = [
    {
      name: "orderNo",
      selector: (row) => row.orderNo,
      compact: true,
    },
    {
      name: "date",
      selector: (row) => row.date,
      compact: true,
    },
    {
      name: "customer",
      selector: (row) => row.customer,
      compact: true,
    },
    {
      name: "trackingNo",
      selector: (row) => row.trackingNo,
      compact: true,
    },
    {
      name: "status",
      selector: (row) => row.status,
      compact: true,
    },
    {
      name: "consignee",
      selector: (row) => row.consignee,
      compact: true,
    },
    {
      name: "actions",
      cell: (row) => (
        <div>
          <button
            className="btn "
            onClick={() => {
              setSelectedOrder(row);
              setIsModalOpen(true);
            }}
          >
            <FontAwesomeIcon icon="fa-solid fa-passport" />
          </button>{" "}
          <button
            className="btn delete__btn"
            onClick={() => removeRow(row.orderNo)}
          >
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
          </button>
        </div>
      ),
    },
  ];
  function handleSearchInputChange(event) {
    setSearchQuery(event.target.value);
  }
  const filteredOrders = orders.filter((order) =>
    order.orderNo.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );
  useEffect(() => {
    getShipments();
  }, []);

  return (
    <div className="table">
      <div className="table__wrapper">
        <h2 className="table__header">Shipments Table</h2>
        <input
          type="text"
          className="table__input"
          placeholder="Search by orderNo"
          value={searchQuery}
          onChange={handleSearchInputChange}
          autoComplete="off"
        />
      </div>
      <DataTable columns={columns} data={filteredOrders} pagination>
        {" "}
      </DataTable>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        order={selectedOrder}
      />
    </div>
  );
}

export default Table;
