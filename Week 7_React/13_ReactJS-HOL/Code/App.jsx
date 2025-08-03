import React from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import CourseDetails from './components/CourseDetails';
import BlogDetails from './components/BlogDetails';

function App() {
  const showBooks = true;
  const showCourses = true;
  const showBlogs = true;

  const books = [
    { id: 101, bname: 'Master React', price: 670 },
    { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
    { id: 103, bname: 'Mongo Essentials', price: 450 }
  ];

  const courses = [
    { name: 'Angular', date: '4/5/2021' },
    { name: 'React', date: '6/3/20201' }
  ];

  const blogs = [
    { title: 'React Learning', author: 'Stephen Biz', content: 'Welcome to learning React!' },
    { title: 'Installation', author: 'Schewzdenier', content: 'You can install React from npm.' }
  ];

  return (
    <div className="container">
      {showCourses && <CourseDetails courses={courses} />}
      {showBooks && <BookDetails books={books} />}
      {showBlogs && <BlogDetails blogs={blogs} />}
    </div>
  );
}

export default App;
