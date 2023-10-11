import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../features/auth/authSlice';
import { Link } from 'react-router-dom'
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'

const columns = [
   {
      title: 'SNo',
      dataIndex: 'key',
   },
   {
      title: 'Order By',
      dataIndex: 'name',
   },
   {
      title: 'Products',
      dataIndex: 'products',
   },
   {
      title: 'Amount',
      dataIndex: 'amount',
   },
   {
      title: 'Date Ordered',
      dataIndex: 'date',
   },
   {
      title: 'Status',
      dataIndex: 'status',
   },
   {
      title: 'Action',
      dataIndex: 'action',
   },
];

const Orders = () => {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getOrders())
   }, [])

   const orderState = useSelector((state) => state.auth.orders)
   const data1 = [];
   for (let i = 0; i < orderState.length; i++) {
      data1.push({
         key: i + 1,
         name: orderState[i].orderby.firstname + " " + orderState[i].orderby.lastname,
         products: orderState[i].products.map((i, j) => {
            return (
               <ul key={j}>
                  <li>{i.product.title}</li>
               </ul>
            )
         }),
         amount: orderState[i].paymentIntent.amount,
         date: new Date(orderState[i].createdAt).toLocaleString(),
         status: orderState[i].orderStatus,
         action: (
            <>
               <Link to='/' className='fs-3 text-danger'>
                  <BiEdit />
               </Link>
               <Link to='/' className='ms-3 fs-3 text-danger'>
                  <AiFillDelete />
               </Link>
            </>
         )
      });
   }
   return (
      <div>
         <h3 className="mb-4 title">Orders</h3>
         <div>
            <Table columns={columns} dataSource={data1} />
         </div>
      </div>
   )
}

export default Orders