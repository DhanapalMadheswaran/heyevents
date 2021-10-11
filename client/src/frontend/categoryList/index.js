import React, { useState, useEffect } from "react";
import Header from "./header";
import ListData from "./listData";
import axios from "axios";

export default function List() {
  const [formData, setFormData] = useState({});
  const category = window.location.pathname.split("-").pop();

  useEffect(() => {
    async function fetchMyAPI() {
      await axios
        .get(
          `http://localhost:5000/api/vendor/getAllVendorsByCategory/${category}`
        )
        .then((response) => {
          setFormData(response.data.vendor[0]);
        });
    }

    fetchMyAPI();
  }, [category]);

  return (
    <div className="container">
      <title>HeyEventz-Category List</title>
      <Header />
      <ListData data={formData} />
    </div>
  );
}
