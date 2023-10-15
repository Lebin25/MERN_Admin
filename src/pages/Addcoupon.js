import React, { useEffect } from 'react'
import CustomInput from '../components/CustomInput'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { createCoupon, resetState } from '../features/coupon/couponSlice';

let schema = yup.object().shape({
   name: yup.string().required('Coupon Name is required'),
   expiry: yup.date().required('Expiry Date is required'),
   discount: yup.number().required('Discount Percentage is required'),
});

const Addcoupon = () => {
   const dispatch = useDispatch();

   const newCoupon = useSelector((state) => state.coupon)
   const { isSuccess, isError, isLoading, createdCoupon } = newCoupon;
   useEffect(() => {
      if (isSuccess && createdCoupon) {
         toast.success('Coupon Added Successfully!');
      }
      if (isError) {
         toast.error('Something Went Wrong!');
      }
   }, [isSuccess, isError, isLoading])

   const formik = useFormik({
      initialValues: {
         name: '',
         expiry: '',
         discount: '',
      },
      validationSchema: schema,
      onSubmit: (values) => {
         dispatch(createCoupon(values));
         formik.resetForm();
         setTimeout(() => {
            dispatch(resetState())
         }, 300)
      },
   });

   return (
      <div>
         <h3 className="mb-4 title">Add Coupon</h3>
         <div>
            <form action="" onSubmit={formik.handleSubmit}>

               <CustomInput type='text' label='Enter Coupon' name='name' onChng={formik.handleChange('name')} onBlr={formik.handleBlur('name')} val={formik.values.name} id='name' />
               <div className="error">
                  {formik.touched.name && formik.errors.name}
               </div>

               <CustomInput type='date' label='Enter Expiry Date' name='expiry' onChng={formik.handleChange('expiry')} onBlr={formik.handleBlur('expiry')} val={formik.values.expiry} id='expiry' />
               <div className="error">
                  {formik.touched.expiry && formik.errors.expiry}
               </div>

               <CustomInput type='number' label='Enter Discount' name='discount' onChng={formik.handleChange('discount')} onBlr={formik.handleBlur('discount')} val={formik.values.discount} id='discount' />
               <div className="error">
                  {formik.touched.discount && formik.errors.discount}
               </div>

               <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>Add Coupon</button>
            </form>
         </div>
      </div>
   )
}

export default Addcoupon