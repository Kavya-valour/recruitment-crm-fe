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
      responseType: "blob",
    });

    const file = new Blob([response.data], { type: "application/pdf" });
    const fileURL = window.URL.createObjectURL(file);

    // ✅ FORCE DOWNLOAD (WORKS ALWAYS)
    const link = document.createElement("a");
    link.href = fileURL;
    link.download = `Payslip-${payrollId}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  } catch (err) {
    console.error("❌ Download error:", err.response?.data || err.message);
  }
};