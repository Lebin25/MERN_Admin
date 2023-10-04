import React from 'react'
import { BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs'
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
         sales: 61,
      },
      {
         type: 'Apr',
         sales: 145,
      },
      {
         type: 'May',
         sales: 48,
      },
      {
         type: 'June',
         sales: 38,
      },
      {
         type: 'July',
         sales: 38,
      },
      {
         type: 'Aug',
         sales: 25,
      },
      {
         type: 'Sept',
         sales: 44,
      },
      {
         type: 'Oct',
         sales: 52,
      },
      {
         type: 'Nov',
         sales: 88,
      },
      {
         type: 'Dec',
         sales: 70,
      },
   ];
   const config = {
      data,
      xField: 'type',
      yField: 'sales',
      color: ({ type }) => {
         return '#ffd333';
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
         <h3 className='mb-4 title'>Dashboard</h3>
         <div className='d-flex justify-content-between align-items-center gap-3'>
            <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
               <div>
                  <p className='desc'>Total</p>
                  <h4 className='mb-0 sub-title'>$ 1100.00</h4>
               </div>
               <div className='d-flex flex-column align-items-end'>
                  <h6><BsArrowDownRight /> 32%</h6>
                  <p className='mb-0 desc'>Compare To September 2023</p>
               </div>
            </div>
            <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
               <div>
                  <p className='desc'>Total</p>
                  <h4 className='mb-0 sub-title'>$ 1100.00</h4>
               </div>
               <div className='d-flex flex-column align-items-end'>
                  <h6 className='red'>
                     <BsArrowDownRight /> 32%
                  </h6>
                  <p className='mb-0 desc'>Compare To September 2023</p>
               </div>
            </div>
            <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
               <div>
                  <p className='desc'>Total</p>
                  <h4 className='mb-0 sub-title'>$ 1100.00</h4>
               </div>
               <div className='d-flex flex-column align-items-end'>
                  <h6 className='green'>
                     <BsArrowDownRight /> 32%
                  </h6>
                  <p className='mb-0 desc'>Compare To September 2023</p>
               </div>
            </div>
         </div>
         <div className="mt-4">
            <h3 className='mb-5 title'>Income Statics</h3>
            <div>
               return <Column {...config} />;
            </div>
         </div>
         <div className="mt-4">
            <h3 className="mb-5 title">Recent Orders</h3>
            <div>
               <Table columns={columns} dataSource={data1} />
            </div>
         </div>
      </div>
   )
}

export default Dashboard