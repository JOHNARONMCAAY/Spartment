let inquiries = [];

export const createInquiryRecord = (inquiry) => {
  const newInquiry = {
    id: Date.now(),
    status: "Pending",
    createdAt: new Date(),
    ...inquiry,
  };

  inquiries.push(newInquiry);

  return newInquiry;
};


export const getInquiryRecords = () => {
  return inquiries;
};


export const getInquiryRecordById = (id) => {
  return inquiries.find(
    (inquiry) => inquiry.id === Number(id)
  );
};


export const updateInquiryRecord = (
  id,
  updates
) => {
  const inquiry = inquiries.find(
    (item) => item.id === Number(id)
  );

  if (!inquiry) {
    return null;
  }

  Object.assign(
    inquiry,
    updates
  );

  return inquiry;
};


export const resetInquiryRecords = () => {
  inquiries = [];
};