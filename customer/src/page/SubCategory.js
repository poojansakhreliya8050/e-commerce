import React, { useState, useEffect } from 'react';
import axios from 'axios';


const SubCategory = () => {
    const [subCategories, setSubCategories] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_URL}/api/v1/subCategory/fetchAllSubCategory`);
          console.log(response);
          setSubCategories(response.data); 
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData(); // call the function to fetch data when the component mounts
    }, []);
  return (
    <div>
        
    </div>
  )
}

export default SubCategory