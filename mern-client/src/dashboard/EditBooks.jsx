import React from 'react'
import {useLoaderData,useParams} from 'react-router-dom'
import {Button,Checkbox,Label,Select,TextInput,Textarea} from 'flowbite-react';

const EditBooks = () => {
  const {id}=useParams();
  const {bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL}=useLoaderData();
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "History",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Self help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = selectedBookCategory; // Use the selected category state
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL
    };

    //console.log(bookObj);

    //update book data
    fetch('http://localhost:5000/book/${id}',{
      method:"PATCH",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(updateBookObj)
    }).then(res=>res.json()).then(data=>{
      alert("book uploaded successfully")
    })
    
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update Books</h2>

      <form onSubmit={handleUpdate} className="lg:w-1/2 flex flex-col gap-4">
        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='flex flex-col w-full lg:w-1/2'>
            <Label htmlFor="bookTitle" value="Book Title" />
            <TextInput id="bookTitle" name='bookTitle' type="text" 
            placeholder="Book title" required 
            defaultValue={bookTitle}
            />
          </div>
          <div className='flex flex-col w-full lg:w-1/2'>
            <Label htmlFor="authorName" value="Author Name" />
            <TextInput id="authorName" name='authorName' type="text"
             placeholder="Author Name" required 
             defaultValue={authorName}/>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='flex flex-col w-full lg:w-1/2'>
            <Label htmlFor="imageURL" value="Book Image URL" />
            <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book Image URL" required />
          </div>
          <div className='flex flex-col w-full lg:w-1/2'>
            <Label htmlFor="inputState" value="Book Category" />
            <select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
              {bookCategories.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </div>
        </div>

        <div className='flex flex-col'>
          <Label htmlFor='bookDescription' value='Book Description' />
          <Textarea id="bookDescription" name='bookDescription' className='w-full' placeholder='Write your book description' required type='text' rows={5} />
        </div>

        <div className='flex flex-col'>
          <Label htmlFor='bookPDFURL' value='Book PDF URL' />
          <TextInput id="bookPDFURL" name='bookPDFURL' placeholder='Book PDF URL' required type="text" />
        </div>

        <div>
          <Button type='submit' className='mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Update Book
          </Button>
        </div>

      </form>
    </div>
  );
}

export default EditBooks
