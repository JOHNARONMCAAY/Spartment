import {
  createTenantAccount,
  updateTenantPassword,
} from "../service/tenantService.js";


export const createTenant = async (
  req,
  res
) => {

  try {

    const tenant =
      await createTenantAccount(
        req.body
      );


    res.status(201).json({

      message:
        "Tenant created successfully",

      data:
        tenant,

    });


  } catch (error) {

    res.status(400).json({

      message:
        error.message,

    });

  }

};



export const changeTenantPassword = async (
  req,
  res
) => {

  try {

    const tenant =
      await updateTenantPassword(
        req.params.id,
        req.body.password
      );


    res.status(200).json({

      message:
        "Password updated successfully",

      data:
        tenant,

    });


  } catch (error) {

    res.status(400).json({

      message:
        error.message,

    });

  }

};