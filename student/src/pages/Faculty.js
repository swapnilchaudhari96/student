import React from 'react';

const Faculty = () => {
  return (
    <div style={{"display": "grid","alignContent":"center" , "marginBottom":"90px"}}>
      <h1>Our Faculty</h1>
      <p>Meet our dedicated team of educators who are committed to providing the best learning experience for our students.</p>
      <h2>Principal</h2>
      <p>Dr. John Smith, Ph.D. in Education</p>
      <h2>Vice-Principal</h2>
      <p>Mrs. Mary Johnson, M.Ed.</p>
      <h2>Science Department</h2>
      <ul>
        <li>Mr. Alan Brown - Physics -MSC- 9 years experience</li>
        <li>Ms. Linda White - Chemistry -phd - 2 years experience</li>
        <li>Dr. Michael Green - Biology -mbbs - 10 years experience</li>
      </ul>
      <h2>Mathematics Department</h2>
      <ul>
        <li>Mr. David Miller -MCom - 9 years experience</li>
        <li>Ms. Susan Davis -BCom - 10+ years experience</li>
      </ul>
      <h2>Humanities Department</h2>
      <ul style={{"marginBottom":"90px"}}>
        <li>Mr. Robert Wilson - History -MSc- 7 years experience</li>
        <li>Ms. Patricia Taylor - Geography -BCS- 5 years experience</li>
      </ul>
    </div>
  );
};

export default Faculty;
