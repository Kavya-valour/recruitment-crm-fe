import api from "./api";

// GET
export const getAllOffers = async () => {
  const res = await api.get("/offer");
  return res.data;
};

// CREATE
export const createOffer = async (data) => {
  const res = await api.post("/offer", data);
  return res.data;
};

// DELETE
export const deleteOffer = async (id) => {
  const res = await api.delete(`/offer/${id}`);
  return res.data;
};

// REGENERATE
export const regenerateOffer = async (id) => {
  const res = await api.put(`/offer/${id}/regenerate`);
  return res.data;
};