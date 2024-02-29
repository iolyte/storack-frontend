import React from 'react';
import { useFormik } from 'formik';
import { Box, Grid, TextField, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import * as Yup from 'yup';

const ContactUsForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      mobile_number: '',
      email: '',
      address: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      mobile_number: Yup.string().required('Mobile Number is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      address: Yup.string(),
      message: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log('Form Values 1.1.1:', values);
      formik.resetForm();
    },
  });

  return (
    <>
      <form noValidate onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="name"
              label="Name"
              fullWidth
              required
              value={formik.values.name}
              helperText={formik.touched.name && formik.errors.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.name && formik.errors.name)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="mobile_number"
              label="Mobile Number"
              fullWidth
              required
              value={formik.values.mobile_number}
              helperText={
                formik.touched.mobile_number && formik.errors.mobile_number
              }
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={Boolean(
                formik.touched.mobile_number && formik.errors.mobile_number
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="email"
              label="Email"
              fullWidth
              required
              value={formik.values.email}
              helperText={formik.touched.email && formik.errors.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.email && formik.errors.email)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="address"
              label="Address"
              fullWidth
              value={formik.values.address}
              helperText={formik.touched.address && formik.errors.address}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.address && formik.errors.address)}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              name="message"
              label="Message"
              fullWidth
              helperText={formik.touched.message && formik.errors.message}
              value={formik.values.message}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.message && formik.errors.message)}
              multiline
              rows={3}
              maxRows={10}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <LoadingButton
                type="submit"
                disabled={!formik.isValid || !formik.dirty}
                loading={formik.isSubmitting}
                variant="contained"
                sx={{ px: 10, py: 1.25 }}
              >
                Submit
              </LoadingButton>
            </Box>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default ContactUsForm;
