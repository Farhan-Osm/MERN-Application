import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useState } from 'react';

const UploadBook = () => {

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
  const handleBookSubmit = (event) =>{
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    const totalprice = form.totalprice.value;
    const discountPercentage = form.discountPercentage.value;
    const price = form.price.value;
    const bookObj = {
      bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL,totalprice,discountPercentage,price
    }
    console.log(bookObj)

                 // Send Data To Database
  fetch("http://localhost:3000/upload-books",{
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(bookObj)
   }).then(res => res.json()).then(data => {
    console.log(data)
    alert("Book Upload Successfully!")
    form.reset();
   })
  }
  return (
  <>
    <div className='px-4 my-12'>
    <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>
      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
                    {/*1st Row  */}
        <div className='flex gap-8'>
                    {/* Book Title */}
         <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="bookTitle" value="Book Title" />
          </div>
          <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Books Name" required />
         </div>
                    {/* author name */}     
         <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="authorName" value="Author Name" />
          </div>
          <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" required />
         </div>                        
        </div>
                    {/*2nd Row  */}
        <div className='flex gap-8'>
                    {/* Book Image URL */}
         <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="imageURL" value="Book Image URL" />
          </div>
          <TextInput id="imageURL" name="imageURL" type="text" placeholder="Book Image URL" required />
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
              className='w-full' required rows={6} />
        </div>
                    {/* Book Pdf Link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput id="booPDFURL" name="bookPDFURL" type="text" placeholder="book pdf url" required />
         </div>
                    {/* price details */}
       <div className='flex gap-8'>
        <div className='lg:w-1/3'>
          <div className="mb-2 block">
            <Label htmlFor="totalprice" value="Actual Price" />
          </div>
          <TextInput id="totalprice" name="totalprice" type="text" placeholder="Include all taxes Price" required />
         </div>
        <div className='lg:w-1/3'>
         <div className="mb-2 block">
            <Label htmlFor="discountPercentage" value="Discount Percentage" />
          </div>
          <TextInput id="discountPercentage" name="discountPercentage" type="text" placeholder="Discount Price" required />
        </div>
        <div className='lg:w-1/3'>
         <div className="mb-2 block">
            <Label htmlFor="price" value="Prices" />
          </div>
          <TextInput id="price" name="price" type="text" placeholder="After Discount Price" required />
        </div>
      </div>
         <Button type='submit' className='mt-5'>Upload Book</Button>
      </form>
    </div>
  </>
  )
}

export default UploadBook