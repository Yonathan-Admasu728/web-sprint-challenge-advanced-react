
import React, {useState} from 'react';
export default initialValue => {
   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
   const [values,setValues] = useState(initialValue);
   return {
       showSuccessMessage,
       values,
       handleChanges:(e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      },
      handleSubmit: (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
      }

   };
}
