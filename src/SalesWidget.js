import React from 'react';

function SalesWidget({ data }) {
  return (
    <div className="widget sales-widget">
      <h2>Sales</h2>
      <ul>
        {data.map((sale, index) => (
          <li key={index}>{sale.month}: ${sale.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default SalesWidget;
