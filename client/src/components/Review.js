//  import * as React from 'react';
// import Typography from '@mui/material/Typography';
// // import List from '@mui/material/List';
// // import ListItem from '@mui/material/ListItem';
// // import ListItemText from '@mui/material/ListItemText';
// import Grid from '@mui/material/Grid';
// import AddressForm from './AddressForm';
// // import PaymentForm from './PaymentForm';
// import React, { useState } from 'react';



// export default function Review() {
//     // State to store the form data from AddressForm component
//     const [shippingAddress, setShippingAddress] = useState({});

//     // Function to handle the form data update
//     const handleAddressFormSubmit = (data) => {
//       setShippingAddress(data);
//   return (
    
//     <React.Fragment>
//       <Typography variant="h6" gutterBottom>
//         Checkout
//       </Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <AddressForm onSubmit={handleAddressFormSubmit} />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Review shippingAddress={shippingAddress} />
//         </Grid>
//       </Grid>
//     </React.Fragment>
    
//   );
// }
// }

// Review.js
import React from 'react';
import Typography from '@mui/material/Typography';

export function Review({ shippingAddress }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review
      </Typography>
      <Typography gutterBottom>Shipping Address:</Typography>
      <Typography>
        {shippingAddress.firstName} {shippingAddress.lastName}
      </Typography>
      <Typography>{shippingAddress.address1}</Typography>
      <Typography>{shippingAddress.address2}</Typography>
      <Typography>{shippingAddress.city}</Typography>
      <Typography>{shippingAddress.state}</Typography>
      <Typography>{shippingAddress.zip}</Typography>
      <Typography>{shippingAddress.country}</Typography>
      <Typography gutterBottom>Additional Information:</Typography>
      <Typography>{shippingAddress.date}</Typography>
      <Typography>{shippingAddress.time}</Typography>
      <Typography>{shippingAddress.message}</Typography>
      <Typography gutterBottom>Use this address for payment details:</Typography>
      <Typography>{shippingAddress.saveAddress ? 'Yes' : 'No'}</Typography>
    </React.Fragment>
  );
}

export default Review;
