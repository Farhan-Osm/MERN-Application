import { useState } from 'react';
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';

const EditBook = () => {

  const {id} = useParams();
  const {bookTitle,authorName,imageURL,bookDescription,bookPDFURL} = useLoaderData();
 
  const bookCategories = [
    "Select Book Category",
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "science Fiction",
    "Fantasy",
    "Horror",
    "History & Biography",
    "Bibliography",
    "Autobiographic",
    "Memoir",
    "Business",
    "children Book",
    "Technical",
    "Travel",
    "Religion",
    "Science",
    "History",
    "Politics",
    "Art",
    "Music",
    "Art And Design",
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) =>{
      //  console.log(event.target.value);
       setSelectedBookCategory(event.target.value);
  }
       
                  //  Handle Book Submission 
  const handleUpdate = (event) =>{
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    const updateBookObj = {
      bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
    }
    // console.log(bookObj)

    //   Update book data

    fetch(`http://localhost:3000/books/${id}`,{
    method:"PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data => {
    alert("Book Updated Successfully!")});
  }
  return (
  <>
    <div className='px-4 my-12'>
    <h2 className='mb-8 text-3xl font-bold'>Update The Book Data</h2>
      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
                    {/*1st Row  */}
        <div className='flex gap-8'>
                    {/* Book Title */}
         <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="bookTitle" value="Book Title" />
          </div>
          <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Books Name" required defaultValue={bookTitle}/>
         </div>
                    {/* author name */}     
         <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="authorName" value="Author Name" />
          </div>
          <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" required defaultValue={authorName}/>
         </div>                        
        </div>
                    {/*2nd Row  */}
        <div className='flex gap-8'>
                    {/* Book Image URL */}
         <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="imageURL" value="Book Image URL" />
          </div>
          <TextInput id="imageURL" name="imageURL" type="text" placeholder="Book Image URL" required defaultValue={imageURL}/>
         </div>
                         {/* Category */} 
           <div className='lg:w-1/2'>
             <div className="mb-2 block">
               <Label htmlFor="InputState" value="Book Category" />
             </div>
               <Select id='InputState' name='categoryName' className='w-full rounded' value={selectedBookCategory}
                onChange={handleChangeSelectedValue}>
                 {
                  bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
                 }
               </Select>
           </div>                        
        </div>  

                    {/* Book Description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
            <Textarea id="bookDescription" name="bookDescription" type="text" placeholder="write your book description..."
              className='w-full' required rows={6} defaultValue={bookDescription}/>
        </div>
                    {/* Book Pdf Link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput id="booPDFURL" name="bookPDFURL" type="text" placeholder="book pdf url" required defaultValue={bookPDFURL}/>
         </div>
         <Button type='submit' className='mt-5'>Update Book</Button>
      </form>
    </div>
  </>
  )
}

export default EditBook