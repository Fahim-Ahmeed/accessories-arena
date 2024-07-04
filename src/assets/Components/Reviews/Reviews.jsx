import React, { useContext, useState } from 'react';
import'./Reviews.css';
import { Auth } from '../Context/AuthenticationContext';
import { useNavigate } from 'react-router-dom';


const ReviewForm = ({ productId, onSubmit }) => {
  const [formData, setFormData] = useState({
    user: '',
    rating: '',
    comment: ''
  });
const{notify}=useContext(Auth)
const navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // onSubmit(formData);
    navigate("/")
    // Optionally clear form fields after submission
    setFormData({ user: '', rating: '', comment: '' });
    notify("thanks! for shairng your experience")
  };

  return (
    <div className="review-form">
      <h2>Submit a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="user">Your Name:</label>
          <input
            type="text"
            id="user"
            name="user"
            value={formData.user}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
