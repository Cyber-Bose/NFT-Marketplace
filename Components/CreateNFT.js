// src/components/CreateNFT.js
import React, { useState } from "react";

const CreateNFT = ({ createNFT }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    createNFT({ name, image, description });
    setName("");
    setImage("");
    setDescription("");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-3">
      <h2 className="text-xl font-bold">Create New NFT</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="NFT Name"
        className="form-control mt-2"
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
        className="form-control mt-2"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="form-control mt-2"
      />
      <button onClick={handleSubmit} className="btn btn-primary mt-2">Create NFT</button>
    </div>
  );
};

export default CreateNFT;
