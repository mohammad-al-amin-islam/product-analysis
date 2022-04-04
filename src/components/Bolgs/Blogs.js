import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-lg'>Welcome To My Blog</h1>
            <div className='w-3/4 m-7 mx-auto rounded h-full p-3 shadow-md'>
                <h1 className='text-3xl'>What is Context API?</h1>
                <p className='text-left mt-5'>Ans:Context is used for share the data through component without using of props.Generally we pass the using props from root to child. In this system every component can access data between those root and child.But context provides a the way without having explicitly pass props via every level of the tree.If we create a context its return a provider.It is a component that provides the state to its children. </p>
            </div>
            <div className='w-3/4 m-7 mx-auto rounded h-full p-3 shadow-md'>
                <h1 className='text-3xl'>What is Semantic Tag?</h1>
                <p className='text-left mt-5'>Ans:Symantic tag means it have meaningful name.With that name its work can be easily understandable forbrowser and developer also can understand what kind of content it is.For example we can say using header is a Semantic tag. Reading The name we can easily understand that it contain heading component.Again footer is also a semantic tag and we can easily guess that it will contain footer tag.Agan usig section tag we can easily understand that it is  group of content generally with a heading.</p>
            </div>
        </div>
    );
};

export default Blogs;