import React from 'react';
import { Column } from '@ant-design/plots';

const Monthly = () => {

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
        <div className='mt-4'>
            <h3 className='mb-4'>Monthly</h3>
            <div>
                <Column {...config} />
            </div>
        </div>
  )
}

export default Monthly