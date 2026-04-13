import api from "./api";

export const getAllPayrolls = async () => {
  try {
    const res = await api.get("/payroll");
    return res.data;
  } catch (err) {
    console.error("Error fetching payrolls:", err);
    throw err;
  }
};

export const addPayroll = async (record) => {
  try {
    const res = await api.post("/payroll", record);
    return res.data;
  } catch (err) {
    console.error("🔥 BACKEND ERROR:", err.response?.data);
    throw err;
  }
};

// ✅ New function: Download payslip PDF
export const downloadPayslip = async (payrollId) => {
  try {
    const res = await api.get(`/payroll/${payrollId}/payslip`);

    const fileUrl = `${import.meta.env.VITE_BACKEND_URL}${res.data.url}`;

    // 🔥 OPEN PDF DIRECTLY
    window.open(fileUrl, "_blank");

  } catch (err) {
    console.error("❌ Download error:", err.response?.data || err.message);
  }
};