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
    const response = await api.get(`/payroll/${payrollId}/payslip`, {
      responseType: "blob",   // 🔥 MUST
    });

    const file = new Blob([response.data], { type: "application/pdf" });
    const url = window.URL.createObjectURL(file);

    window.open(url); // ✅ opens PDF

  } catch (err) {
    console.error("❌ Download error:", err.response?.data || err.message);
  }
};