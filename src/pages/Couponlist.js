import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCoupons } from '../features/coupon/couponSlice';
import { Link } from 'react-router-dom'
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'

const columns = [
   {
      title: 'SNo',
      dataIndex: 'key',
   },
   {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
   },
   {
      title: 'Expiry Date',
      dataIndex: 'expiry',
   },
   {
      title: 'Discount',
      dataIndex: 'discount',
   },
   {
      title: 'Action',
      dataIndex: 'action',
   }
];

const Couponlist = () => {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getCoupons())
   }, [])

   const couponState = useSelector((state) => state.coupon.coupons)
   const data1 = [];
   for (let i = 0; i < couponState.length; i++) {
      data1.push({
         key: i + 1,
         name: couponState[i].name,
         expiry: new Date(couponState[i].expiry).toLocaleDateString(),
         discount: couponState[i].discount,
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
         <h3 className="mb-4 title">Coupons</h3>
         <div>
            <Table columns={columns} dataSource={data1} />
         </div>
      </div>
   )
}

export default Couponlist