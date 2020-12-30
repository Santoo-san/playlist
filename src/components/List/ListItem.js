import React from "react";

const ListItem = ({ item }) => {
  return (
    <tr key={item.id} className="list-item" value={item.Song}>
      <td className="table-data"> {item.Song}</td>
      <td className="table-data"> {item.Artist}</td>
      <td className="table-data"> {item.Genre}</td>
      <td className="table-data"> {item.Rating}</td>
    </tr>
  );
};

export default ListItem;
