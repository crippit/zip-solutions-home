---
title: Contact Us
sidebar: false
---

# Contact Us

<style>
  /* Form container */
  form {
      padding: 24px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 500px;
  }

  div {
      margin-bottom: 16px;
      position: relative;
  }

  /* Labels */
  label {
      display: block;
      font-size: 1rem;
      margin-bottom: 8px;
      font-weight: 500;
  }

  /* Input Fields and Textarea */
  input[type="text"],
  input[type="email"],
  textarea {
      width: 100%;
      padding: 12px 0;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      transition: all 0.3s ease;
      
  }

  input[type="text"]:focus,
  input[type="email"]:focus,
  textarea:focus {
      outline: none;
      box-shadow: 0 2px 6px rgba(98, 0, 238, 0.3);
  }

  textarea {
      resize: vertical;
  }

  /* Floating label effect */
  input:focus + label,
  textarea:focus + label,
  input:not(:focus):valid + label,
  textarea:not(:focus):valid + label {
      font-size: 0.9rem;
      top: -8px;
      left: 12px;
  }

  /* Radio Buttons */
  input[type="radio"] {
      margin-right: 8px;
  }

  input[type="radio"]:checked + label {
      font-weight: bold;
  }

  /* Buttons */
  button {
      padding: 12px 20px;
      font-size: 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      width: 100%;
      transition: background-color 0.3s ease;
  }

  /* Spacing for radio buttons and labels */
  label[for="partnership"],
  label[for="product"],
  label[for="advisory-board"],
  label[for="help-support"],
  label[for="media-press"],
  label[for="general-contact"] {
      display: inline-block;
      margin-right: 20px;
      padding-left: 6px;
  }

  /* Spacing adjustments for form layout */
  form > div {
      margin-bottom: 20px;
  }

  /* Overall responsiveness */
  @media (max-width: 600px) {
      form {
          padding: 16px;
      }

      button {
          font-size: 1.1rem;
          padding: 14px;
      }
  }
</style>

<form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeat_QYrLNUwVb37U-qYQvWAlhKns2xs9zd_gnsZvI6XmgYow/formResponse" method="POST" id="contactForm" class="theme-default-content">
    <div>
        <label for="name">Your Name:</label>
        <input type="text" name="entry.862584966" id="name" required>
    </div>
    <div>
        <label for="email">Email Address:</label>
        <input type="email" name="entry.578521937" id="email" required>
    </div>
    <div>
        <label for="message">Message:</label>
        <textarea name="entry.433641966" id="message" rows="4" required></textarea>
    </div>
    <div>
        <label>Inquiry Type:</label><br>
        <input type="radio" name="entry.1361511396" value="Partnership Inquiry" id="partnership">
        <label for="partnership">Partnership Inquiry</label><br>
        <input type="radio" name="entry.1361511396" value="Product or service Inquiry" id="product">
        <label for="product">Product or service Inquiry</label><br>
        <input type="radio" name="entry.1361511396" value="Interested in Advisory Board" id="advisory-board">
        <label for="advisory-board">Interested in Advisory Board</label><br>
        <input type="radio" name="entry.1361511396" value="Help or Support" id="help-support">
        <label for="help-support">Help or Support</label><br>
        <input type="radio" name="entry.1361511396" value="Media / Press" id="media-press">
        <label for="media-press">Media / Press</label><br>
        <input type="radio" name="entry.1361511396" value="General Contact" id="general-contact">
        <label for="general-contact">General Contact</label>
    </div>
    <div>
        <button type="submit">Submit</button>
    </div>
</form>