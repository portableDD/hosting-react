export const selectForm = values => {

    const errors = {};
            
        if (!values.name) {
          errors.name = "Please enter your product name.";
        }

        if(!values.price) {
            errors.price ="please enter the amount for the product.";
        }
        
        if(!values.category) {
            errors.category = "please pick the product category"
        } 

        if (!values.desc) {
          errors.desc = "Please give a description of the product.";
        }
        console.log(errors);
       
        return errors;

        // if (!values.phone) {
        //     errors.phone = "Please enter your phone number.";
        // }

        // if (typeof values.phone !== "undefined") {
        //     const pattern = new RegExp(/^[0-9\b]+$/);
        //     if (!pattern.test(values.phone)) {
        //         errors.phone = "Please enter only number.";
        //     }else if(values.phone.length !== 11){
        //         errors.phone = "Please enter valid phone number.";
        //     }
        // }

        // if (!values.email) {
        //   errors.email = "Please enter your email Address.";
        // }
    
        // if (typeof values.email !== "undefined") {   
        //   const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        //   if (!pattern.test(values.email)) {
        //     errors.email = "Please enter valid email address.";
        //   }
        // }
    
       
    

    // const errors = {};
  
    // if (!values.firstName) {
    //   errors.firstName = "First name is required";
    // } else if (values.firstName.length < 3) {
    //   errors.firstName = "First name should be > 3";
    // }
  
    // if (!values.lastName) {
    //   errors.lastName = "Last name is required";
    // } else if (values.lastName.length < 3) {
    //   errors.lastName = "Last name should be > 3";
    // }
      
    // if (!values.email) {
    //   errors.email = "Email is required";
    // } else if (!/(.+)@(.+){2,}\.(.+){2,}/i.test(values.email)) {
    //   errors.email = "Invalid Email !!!";
    // }
  
    // console.log(errors);
    // return errors;
  };