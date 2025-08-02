import React from 'react';
import CourseDetails from './CourseDetails';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '40px' }}>
      <div style={{ borderRight: '3px solid green', paddingRight: '20px' }}>
        <CourseDetails />
      </div>
      <div style={{ borderRight: '3px solid green', paddingRight: '20px', paddingLeft: '20px' }}>
        <BookDetails />
      </div>
      <div style={{ paddingLeft: '20px' }}>
        <BlogDetails />
      </div>
    </div>
  );
}

export default App;
