import React from 'react';
import { Column } from '@ant-design/plots';
import { Table } from 'antd';


const columns = [
  {
    title: 'SNo',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}


const Dashboard = () => {

  const data = [
    {
      type: 'Jan',
      sales: 38,
    },
    {
      type: 'Feb',
      sales: 52,
    },
    {
      type: 'Mar',
      sales: 60,
    },
    {
      type: 'Apr',
      sales: 70,
    },
    {
      type: 'May',
      sales: 80,
    },
    {
      type: 'Jun',
      sales: 90,
    },
    {
      type: 'July',
      sales: 100,
    },
    {
      type: 'Aug',
      sales: 110,
    },
    {
      type: 'Sept',
      sales: 120,
    },
    {
      type: 'Oct',
      sales: 130,
    },
    {
      type: 'Nov',
      sales: 140,
    },
    {
      type: 'Dev',
      sales: 150,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color: ({ type }) => {
      return "#ffd333";
    },
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Month',
      },
      sales: {
        alias: 'Income',
      },
    },
  };

  return (
    <div>
        <h3 className='mb-4'>Dashboard</h3>
        <div className='d-flex justify-content-between align-items-center gap-3'>
          <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3'>
              <div>
                <p>Total</p>
                <h4 className='mb-0'>$216</h4>
              </div>
          </div>
          <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3'>
              <div>
                <p>Monthly</p>
                <h4 className='mb-0'>$436</h4>
              </div>
          </div>
          <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3'>
              <div>
                <p>Yearly</p>
                <h4 className='mb-0'>$784</h4>
              </div>
          </div>
        </div>
        <div className='mt-4'>
              <h3 className='mb-4'>Income Statice</h3>
              <div>
                  <Column {...config} />
              </div>
          </div>
          <div className='mt-4'>
              <h3 className='mb-4'>Recent Orders</h3>
              <div>
                  <Table columns={columns} dataSource={data1} />
              </div>
          </div>
    </div>
  )
}

export default Dashboard